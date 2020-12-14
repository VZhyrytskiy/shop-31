import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<Array<ProductModel>>;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onReviewProduct(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
