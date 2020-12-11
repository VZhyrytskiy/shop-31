import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductComponent, ProductFormComponent, ProductListComponent, ProductReviewComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductFormComponent,
    ProductReviewComponent
  ],
  imports: [
    FormsModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [
    ProductComponent,
    ProductFormComponent
  ]
})
export class ProductsModule {
}
