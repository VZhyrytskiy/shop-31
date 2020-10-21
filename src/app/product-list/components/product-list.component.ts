import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product/services/product.service';
import {ProductModel} from '../../product/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProductDescription(product: ProductModel): string {
    // как вариант, эту логику можно вынести в сервис
    return `${product.name} (${product.description}): ${product.price}$`;
  }

  getAvailableProducts(): Array<ProductModel> {
    // как вариант, эту логику можно вынести в сервис
    return this.products.filter(({isAvailable}) => isAvailable);
  }
}
