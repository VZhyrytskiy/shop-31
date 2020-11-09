import {Component, EventEmitter, Input, Output} from '@angular/core';

import {CartItemModel} from '../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;
  @Output() removeItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() increaseItemAmount: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() reduceItemAmount: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  onRemove(): void {
    this.removeItem.emit(this.cartItem);
  }

  onIncreaseAmount(): void {
    this.increaseItemAmount.emit(this.cartItem);
  }

  onReduceAmount(): void {
    this.reduceItemAmount.emit(this.cartItem);
  }
}
