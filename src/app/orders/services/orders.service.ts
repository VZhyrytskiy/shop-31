import {Injectable} from '@angular/core';

import {OrderModel} from '../models/order.model';
import {BehaviorSubject, Observable} from 'rxjs';

import {LocalStorageService} from '../../core';

const ORDER_KEY_NAME = 'order-items';

@Injectable({
  providedIn: 'any',
})
export class OrdersService {
  private orderList: OrderModel[] = [];
  private channel: BehaviorSubject<OrderModel[]>;

  constructor(private localStorageService: LocalStorageService) {
    const orderSavedItems = this.localStorageService.getItem(ORDER_KEY_NAME);
    if (orderSavedItems) {
      this.orderList = orderSavedItems as OrderModel[];
    }
    this.channel = new BehaviorSubject<OrderModel[]>(this.orderList);
  }

  get orders$(): Observable<OrderModel[]> {
    return this.channel.asObservable();
  }

  addOrder(order: OrderModel): void {
    this.orderList.push(order);
    this.updateOrderList();
  }

  updateOrderList(): void {
    this.channel.next(this.orderList);
    this.localStorageService.setItem(ORDER_KEY_NAME, this.orderList);
  }
}
