import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ProductModel} from '../../../products/models/product.model';
import {ProductService} from '../../../products/services/product.service';

@Component({
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
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
    this.router.navigate(['/admin/product/edit', product.id]);
  }

  onAddProduct(): void {
    this.router.navigate(['/admin/product/add']);
  }
}
