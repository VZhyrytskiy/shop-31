import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartListComponent} from './components/cart-list.component';
import {CartItemComponent} from '../cart-item/components/cart-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [CartListComponent]
})
export class CartModule {
}
