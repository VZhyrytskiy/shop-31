import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HighlightDirective} from './directives';
import {GoCrazyDirective} from './directives';
import {OrderByPipe} from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HighlightDirective,
    GoCrazyDirective,
    OrderByPipe
  ],
  exports: [
    HighlightDirective,
    GoCrazyDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
