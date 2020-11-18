import {Component, OnInit} from '@angular/core';

import {ProductService} from '../../product/services/product.service';
import {ProductModel} from '../../product/models/product.model';
import {CartService} from '../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getAvailableProducts(): Array<ProductModel> {
    return this.products.filter(({isAvailable}) => isAvailable);
  }

  onAddProductToCart(product: ProductModel, amount: number): void {
    this.cartService.addProduct(product, amount);
  }
}
