import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';

import {AppComponent} from './app.component';
import {CartModule} from './cart/cart.module';
import {FirstModule} from './first/first.module';
import {SharedModule} from './shared/shared.module';
import {ProductsModule} from './products/products.module';
import {AppRoutingModule} from './app-routing.module';
import {OrdersModule} from './orders/orders.module';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    LayoutModule,
    SharedModule,
    CartModule,
    FirstModule,
    ProductsModule,
    OrdersModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
