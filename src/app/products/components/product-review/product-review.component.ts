import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {pluck} from 'rxjs/operators';

import {ProductModel} from '../../models/product.model';
import {CartService} from '../../../cart';
import {ProductService} from '../../services/product.service';

@Component({
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Output() addToCart: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('productAmount') productAmountInput: ElementRef<HTMLInputElement>;

  product: ProductModel;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const observer = {
      next: (product: ProductModel) => (this.product = {...product}),
      error: (err: any) => console.log(err)
    };
    this.route.data
      .pipe(pluck('product'))
      .subscribe(observer);
  }

  onBuy(): void {
    const amount = +this.productAmountInput.nativeElement.value;
    this.cartService.addProduct(this.product, amount);
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/products-list']);
  }
}
