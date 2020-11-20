import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';

import {ProductModel} from '../../product/models/product.model';
import {CartItemModel} from '../../cart-item/models/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private channel = new Subject<Array<CartItemModel>>();
  public channel$ = this.channel.asObservable();

  private cartProducts: Array<CartItemModel> = [];
  private totalQuantity: number;
  private totalSum: number;

  getCartProducts(): Array<CartItemModel> {
    return this.cartProducts;
  }

  setCartProducts(cartProducts: Array<CartItemModel>): void {
    this.cartProducts = cartProducts;
    this.channel.next(this.cartProducts);
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

  increaseQuantity(cartItem: CartItemModel): void {
    this.setCartProducts(this.cartProducts.map(cartProduct => {
      if (cartProduct.product.name === cartItem.product.name) {
        return {
          ...cartProduct,
          amount: cartProduct.amount + 1
        };
      }
      return cartProduct;
    }));
  }

  decreaseQuantity(cartItem: CartItemModel): void {
    this.setCartProducts(this.cartProducts.map(cartProduct => {
      if (cartProduct.product.name === cartItem.product.name) {
        return {
          ...cartProduct,
          amount: cartProduct.amount - 1
        };
      }
      return cartProduct;
    }));
  }
}
