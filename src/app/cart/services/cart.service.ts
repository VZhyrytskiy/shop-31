import {Injectable} from '@angular/core';

import {ProductModel} from '../../product/models/product.model';
import {CartItemModel} from '../../cart-item/models/cartItem.model';
import {Subject} from 'rxjs';

const cartItems = [];

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private channel = new Subject<Array<CartItemModel>>();
  public channel$ = this.channel.asObservable();

  getCartProducts(): Array<CartItemModel> {
    return cartItems;
  }

  getTotalCartSum(): number {
    return cartItems.reduce((sum, i) => sum += i.amount * i.product.price, 0);
  }

  getTotalCartAmount(): number {
    return cartItems.reduce((totalAmount, {amount}) => totalAmount += amount, 0);
  }

  addProductToCart(product: ProductModel): void {
    const [addedProduct] = cartItems.filter(i => {
      return i.product.name === product.name;
    });
    if (addedProduct) {
      addedProduct.amount++;
      return;
    }
    cartItems.push(new CartItemModel(product));
    this.channel.next(cartItems);
  }

  removeProductFromCart(cartItemToRemove: CartItemModel): void {
    const indexToRemove = cartItems.findIndex(
      i => i.product.name === cartItemToRemove.product.name
    );
    cartItems.splice(indexToRemove, 1);
  }

  increaseCartItemAmount(cartItemToRemove: CartItemModel): void {
    const indexToRemove = cartItems.findIndex(
      i => i.product.name === cartItemToRemove.product.name
    );
    cartItems[indexToRemove].amount++;
  }

  reduceCartItemAmount(cartItemToRemove: CartItemModel): void {
    const indexToRemove = cartItems.findIndex(
      i => i.product.name === cartItemToRemove.product.name
    );
    cartItems[indexToRemove].amount--;
    if (cartItems[indexToRemove].amount === 0) {
      cartItems.splice(indexToRemove, 1);
    }
  }
}
