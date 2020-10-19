import {Injectable} from '@angular/core';
import {ProductModel} from '../../product/models/product.model';
import {CategoryEnum} from '../../shared/models/app-enums.model';

const cartProducts = [
  new ProductModel(
    'Caesar',
    'Big black armchair',
    750,
    CategoryEnum.Chairs,
    true
  )
];

@Injectable({
  providedIn: 'root'
})

export class CartService {
  getCartProducts(): Array<ProductModel> {
    return cartProducts;
  }

  getTotalCartSum(): number {
    return cartProducts.reduce((sum, i) => sum += i.price, 0);
  }
}
