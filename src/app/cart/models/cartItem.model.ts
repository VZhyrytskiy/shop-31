import {ProductModel} from '../../products/models/product.model';

export class CartItemModel {
  constructor(
    public product: ProductModel,
    public amount: number = 1
  ) {
  }
}
