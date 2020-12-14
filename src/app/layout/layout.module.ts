import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent, PathNotFoundComponent} from './components';

@NgModule({
  declarations: [PathNotFoundComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule {
}
