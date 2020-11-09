import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<void> = new EventEmitter<void>();

  onBuy(): void {
    this.addToCart.emit();
  }

  setClasses(): any {
    return {
      'product-container_inactive': !this.product.isAvailable
    };
  }
}
