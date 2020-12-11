import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent, ProductReviewComponent} from './components';
import {ProductResolveGuard} from './guards';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
    data: {title: 'Product list'}
  },
  {
    path: 'product/:productID',
    component: ProductReviewComponent,
    data: {title: 'Product Review'},
    resolve: {
      product: ProductResolveGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
