import {Injectable} from '@angular/core';

import {ProductModel} from '../models/product.model';
import {CategoryEnum} from '../../shared/models/app-enums.model';

const products = [
  new ProductModel(
    'Tokyo',
    'Asian style chair',
    150,
    CategoryEnum.Chairs,
    true
  ),
  new ProductModel(
    'Florentine',
    'Ergonomic bed for small bedrooms',
    1500,
    CategoryEnum.Beds,
    false
  ),
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
export class ProductService {
  getProducts(): Array<ProductModel> {
    return products;
  }
}
