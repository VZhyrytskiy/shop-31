import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HighlightDirective} from './directives/highlight.directive';
import {GoCrazyDirective} from './directives/go-crazy.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective,
    GoCrazyDirective
  ],
  exports: [
    HighlightDirective,
    GoCrazyDirective
  ]
})
export class SharedModule {
}
