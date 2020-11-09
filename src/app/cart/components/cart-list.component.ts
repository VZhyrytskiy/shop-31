import {Component, OnDestroy, OnInit} from '@angular/core';

import {CartService} from '../services/cart.service';
import {CartItemModel} from '../../cart-item/models/cartItem.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html'
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItemModel>;
  color = 'bisque';
  private sub: Subscription;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.sub = this.cartService.channel$.subscribe(
      cartItems => this.cartItems = cartItems
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRemoveCartItem(item: CartItemModel): void {
    this.cartService.removeProductFromCart(item);
  }

  onIncreaseCartItemAmount(item: CartItemModel): void {
    this.cartService.increaseCartItemAmount(item);
  }

  onReduceCartItemAmount(item: CartItemModel): void {
    this.cartService.reduceCartItemAmount(item);
  }
}
