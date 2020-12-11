import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;

  @Output() reviewProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onReviewProduct(): void {
    this.reviewProduct.emit(this.product);
  }

  setClasses(): any {
    return {
      'product-container_inactive': !this.product.isAvailable
    };
  }

  setTimesOfBeingCrazy(): number {
    return this.product.isAvailable ? 15 : 0;
  }
}
