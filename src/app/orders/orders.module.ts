import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrderComponent, OrderListComponent} from './components';

@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
    OrdersRoutingModule.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
  ],
  exports: [OrderListComponent, OrderComponent]
})
export class OrdersModule {
}
