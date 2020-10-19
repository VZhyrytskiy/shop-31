import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {ProductModel} from '../../product/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html'
})

export class CartListComponent implements OnInit {

  cartProducts: Array<ProductModel>;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
  }

  getCartProductDescription(cartProduct: ProductModel): string {
    return `${cartProduct.name}: ${cartProduct.price}$`;
  }
}
