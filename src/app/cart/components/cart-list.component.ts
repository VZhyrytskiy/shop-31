import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {CartService} from '../services/cart.service';
import {CartItemModel} from '../../cart-item/models/cartItem.model';
import {OrderByPipe} from '../../shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItemModel>;
  color = 'bisque';
  private sub: Subscription;

  constructor(
    public cartService: CartService,
    private orderByPipe: OrderByPipe
    ) {
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
    this.cartService.removeProduct(item);
  }

  onIncreaseCartItemAmount(item: CartItemModel): void {
    this.cartService.increaseQuantity(item);
  }

  onReduceCartItemAmount(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item);
  }

  onRemoveAll(): void {
    this.cartService.removeAllProducts();
  }

  onOrderChange(e): void {
    this.orderByPipe.transform(this.cartItems, e.target.value);
  }
}
