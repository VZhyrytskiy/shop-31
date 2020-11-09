import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.display = 'block';
  }

  @HostListener('mouseenter')
  entered(): void {
    this.highlight(this.highlightColor || 'coral');
  }

  @HostListener('mouseleave')
  left(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
