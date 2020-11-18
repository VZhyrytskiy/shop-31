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

  getTotalSum(): number {
    return this.totalSum;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  addProduct(product: ProductModel, amount: number): void {
    const [addedProduct] = this.cartProducts.filter(i => {
      return i.product.name === product.name;
    });
    if (addedProduct) {
      addedProduct.amount = addedProduct.amount + amount;
      this.updateCartData();
      return;
    }
    this.cartProducts.push(new CartItemModel(product, amount));
    this.channel.next(this.cartProducts);
    this.updateCartData();
  }

  removeProduct(cartItemToRemove: CartItemModel): void {
    const indexToRemove = this.cartProducts.findIndex(
      i => i.product.name === cartItemToRemove.product.name
    );
    this.cartProducts.splice(indexToRemove, 1);
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  updateCartData(): void {
    this.totalSum = this.cartProducts.reduce((sum, i) => sum += i.amount * i.product.price, 0);
    this.totalQuantity = this.cartProducts.reduce((totalAmount, {amount}) => totalAmount += amount, 0);
  }

  isEmpty(): boolean {
    return !this.totalQuantity;
  }

  increaseQuantity(cartItemToRemove: CartItemModel): void {
    const indexToRemove = this.cartProducts.findIndex(
      i => i.product.name === cartItemToRemove.product.name
    );
    this.cartProducts[indexToRemove].amount++;
    this.updateCartData();
  }

  decreaseQuantity(cartItemToRemove: CartItemModel): void {
    const indexToRemove = this.cartProducts.findIndex(
      i => i.product.name === cartItemToRemove.product.name
    );
    this.cartProducts[indexToRemove].amount--;
    if (this.cartProducts[indexToRemove].amount === 0) {
      this.cartProducts.splice(indexToRemove, 1);
    }
    this.updateCartData();
  }
}
