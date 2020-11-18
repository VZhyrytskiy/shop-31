import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGoCrazy]'
})
export class GoCrazyDirective {
  @Input('appGoCrazy') goCrazyTime = 10;

  @HostListener('click')
  clicked(): void {
    let times = this.goCrazyTime;
    const changeState = () => {
      if (!times) {
        this.renderer.removeClass(this.hostElement.nativeElement, 'crazy');
        return;
      }
      this.renderer[times-- % 2 ? 'addClass' : 'removeClass'](this.hostElement.nativeElement, 'crazy');
      setTimeout(changeState, 80);
    };
    changeState();
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'dashed-border');
  }
}
