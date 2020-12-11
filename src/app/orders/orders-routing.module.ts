import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OrdersComponent} from './orders.component';
import {OrderFormComponent} from './components';

const routes: Routes = [
  {
    path: 'order',
    component: OrdersComponent,
    children: [
      {
        path: '',
        component: OrderFormComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [OrderFormComponent, OrdersComponent];
}
