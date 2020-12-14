import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Subscription} from 'rxjs';

import {OrderModel} from '../../models/order.model';
import {OrdersService} from '../../services';
import {CartService} from '../../../cart';

@Component({
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit, OnDestroy {
  order: OrderModel;

  private sub: Subscription;

  constructor(
    private ordersService: OrdersService,
    private cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.sub = this.cartService.channel$.subscribe(
      cartItems => {
        this.order = new OrderModel(
          '',
          '',
          cartItems,
          this.cartService.getTotalSum()
        );
        console.log(this.order);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onAddOrder(): void {
    this.ordersService.addOrder({...this.order});
    this.cartService.removeAllProducts();
    this.router.navigate(['/products-list']);
  }

  onGoBack(): void {
    this.router.navigate(['/cart']);
  }
}
