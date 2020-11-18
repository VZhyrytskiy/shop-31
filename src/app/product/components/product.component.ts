import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('productAmount') productAmountInput: ElementRef<HTMLInputElement>;

  onBuy(): void {
    this.addToCart.emit(+this.productAmountInput.nativeElement.value);
    this.productAmountInput.nativeElement.value = '1';
  }

  setClasses(): any {
    return {
      'product-container_inactive': !this.product.isAvailable
    };
  }

  setCrazyTimes(): number {
    return this.product.isAvailable ? 15 : 0;
  }
}
