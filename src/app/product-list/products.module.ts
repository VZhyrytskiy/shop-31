import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListComponent} from './components/product-list.component';
import {ProductComponent} from '../product/components/product.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  exports: [ProductListComponent]
})
export class ProductsModule {
}
