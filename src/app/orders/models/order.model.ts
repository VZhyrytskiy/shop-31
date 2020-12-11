import {CartItemModel} from '../../cart/models/cartItem.model';

export class OrderModel {
  constructor(
    public name: string,
    public address: string,
    public items: CartItemModel[],
    public totalSum: number,
    public id?: number
  ) {
    this.id = id || new Date().getTime();
  }
}
