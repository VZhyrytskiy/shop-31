import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {OrdersModule} from '../orders/orders.module';
import {ProductsModule} from '../products/products.module';

@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    AdminRoutingModule,
  ]
})
export class AdminModule {
}
