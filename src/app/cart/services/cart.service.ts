import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

import {CartItemModel} from '../models/cartItem.model';
import {ProductModel} from '../../products/models/product.model';
import {LocalStorageService} from '../../core';

const CART_KEY_NAME = 'cart-items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: CartItemModel[] = [];
  private channel: BehaviorSubject<CartItemModel[]>;

  private totalQuantity: number;
  private totalSum: number;

  constructor(private localStorageService: LocalStorageService) {
    const cartSavedItems = this.localStorageService.getItem(CART_KEY_NAME);
    if (cartSavedItems) {
      this.cartProducts = cartSavedItems as CartItemModel[];
      this.calculateAdditionalProperties();
    }
    this.channel = new BehaviorSubject<CartItemModel[]>(this.cartProducts);
  }

  get channel$(): Observable<CartItemModel[]> {
    return this.channel.asObservable();
  }

  setCartProducts(cartProducts: Array<CartItemModel>): void {
    this.cartProducts = cartProducts;
    this.channel.next(this.cartProducts);
    this.localStorageService.setItem(CART_KEY_NAME, this.cartProducts);
    this.calculateAdditionalProperties();
  }

  calculateAdditionalProperties(): void {
    this.totalSum = this.cartProducts.reduce(
      (sum, i) => sum += i.amount * i.product.price,
      0
    );
    this.totalQuantity = this.cartProducts.reduce(
      (totalAmount, {amount}) => totalAmount += amount,
      0
    );
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  addProduct(product: ProductModel, amount: number): void {
    const index = this.cartProducts.findIndex(
      i => i.product.name === product.name
    );
    if (index !== -1) {
      this.setCartProducts([
        ...this.cartProducts.slice(0, index),
        {
          ...this.cartProducts[index],
          amount: this.cartProducts[index].amount + amount
        },
        ...this.cartProducts.slice(index + 1)
      ]);
    } else {
      this.setCartProducts([
        ...this.cartProducts,
        new CartItemModel(product, amount)
      ]);
    }
  }

  removeProduct(cartItemToRemove: CartItemModel): void {
    const index = this.cartProducts.findIndex(
      i => i.product.name === cartItemToRemove.product.name
    );
    this.setCartProducts([
      ...this.cartProducts.slice(0, index),
      ...this.cartProducts.slice(index + 1)
    ]);
  }

  removeAllProducts(): void {
    this.setCartProducts([]);
  }

  isEmpty(): boolean {
    return !this.totalQuantity;
  }

  changeQuantity(cartItem: CartItemModel, decrease = false): void {
    this.setCartProducts(this.cartProducts.map(cartProduct => {
      if (cartProduct.product.name === cartItem.product.name) {
        return {
          ...cartProduct,
          amount: cartProduct.amount + (decrease ? (-1) : 1)
        };
      }
      return cartProduct;
    }));
  }
}
