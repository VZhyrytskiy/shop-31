import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {FirstComponent} from './first/components';
import {LoginComponent, PathNotFoundComponent} from './layout';
import {AuthGuard} from './core';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'first',
    component: FirstComponent,
    data: {title: 'First Sample Component'}
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
