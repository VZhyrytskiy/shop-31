import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {pluck} from 'rxjs/operators';

import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;

  constructor(
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

  onSaveProduct(): void {
    console.log('On save product');
    const product = {...this.product};

    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.createProduct(product);
    }
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
