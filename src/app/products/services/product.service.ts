import {Injectable} from '@angular/core';

import {CategoryEnum} from '../../shared';
import {ProductModel} from '../models/product.model';

const products = [
  new ProductModel(
    1,
    'Tokyo',
    'Asian style chair',
    150,
    CategoryEnum.Chairs,
    true,
    'assets/images/Tokyo.png'
  ),
  new ProductModel(
    2,
    'Florentine',
    'Ergonomic bed for small bedrooms',
    1500,
    CategoryEnum.Beds,
    false,
    'assets/images/Florentine.png'
  ),
  new ProductModel(
    3,
    'Caesar',
    'Big black armchair',
    750,
    CategoryEnum.Chairs,
    true,
    'assets/images/Caesar.png'
  ),
  new ProductModel(
    4,
    'Gessberg',
    'Very cozy due to its material',
    350,
    CategoryEnum.Chairs,
    true,
    'assets/images/Gessberg.png'
  )
];

const productsPromise = Promise.resolve(products);

@Injectable({
  providedIn: 'any'
})
export class ProductService {
  getProducts(): Promise<Array<ProductModel>> {
    return productsPromise;
  }

  getProduct(id: number): Promise<ProductModel> {
    return this.getProducts()
      .then(productList => productList.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

  createProduct(product: ProductModel): void {
    product.id = new Date().getTime();
    products.push(product);
  }

  updateProduct(product: ProductModel): void {
    const i = products.findIndex(({id}) => id === product.id);
    if (i !== -1) {
      products.splice(i, 1, product);
    }
  }
}
