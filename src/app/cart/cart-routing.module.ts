import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CartListComponent} from './components';
import {CartComponent} from './cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    data: {title: 'Cart'},
    children: [
      {
        path: '',
        component: CartListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartComponent, CartListComponent];
}
