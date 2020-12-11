import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {CartService} from '../../services';
import {CartItemModel} from '../../models/cartItem.model';
import {OrderByPipe} from '../../../shared';
import {Router} from '@angular/router';

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItemModel>;
  color = 'bisque';
  private sub: Subscription;

  constructor(
    public cartService: CartService,
    private orderByPipe: OrderByPipe,
    private router: Router
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
    this.cartService.changeQuantity(item);
  }

  onReduceCartItemAmount(item: CartItemModel): void {
    this.cartService.changeQuantity(item, true);
  }

  onRemoveAll(): void {
    this.cartService.removeAllProducts();
  }

  onOrderChange(e): void {
    this.orderByPipe.transform(this.cartItems, e.target.value);
  }

  onMakeOrder(): void {
    this.router.navigate(['/order']);
  }
}
