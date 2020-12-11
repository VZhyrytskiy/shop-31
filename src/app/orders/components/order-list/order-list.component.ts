import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {OrderModel} from '../../models/order.model';
import {OrdersService} from '../../services';

@Component({
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders$: Observable<OrderModel[]>;

  constructor(
    private orderService: OrdersService,
  ) {
  }

  ngOnInit(): void {
    this.orders$ = this.orderService.orders$;
  }
}
