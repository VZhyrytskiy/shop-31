import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.highlightColor || 'coral');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight(null);
  }

  constructor(private el: ElementRef, private render: Renderer2) {
    this.el.nativeElement.style.display = 'block';
  }

  private highlight(color: string): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
