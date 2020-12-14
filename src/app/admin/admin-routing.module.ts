import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ManageProductsComponent} from './components';
import {OrderListComponent} from '../orders';
import {ProductFormComponent, ProductResolveGuard} from '../products';
import {AuthGuard} from '../core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: 'products',
        component: ManageProductsComponent,
      },
      {
        path: 'product/add',
        component: ProductFormComponent,
      },
      {
        path: 'product/edit/:productID',
        component: ProductFormComponent,
        data: {
          admin: true
        },
        resolve: {
          product: ProductResolveGuard
        }
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
      {
        path: '',
        redirectTo: '/admin/products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ManageProductsComponent
  ];

}
