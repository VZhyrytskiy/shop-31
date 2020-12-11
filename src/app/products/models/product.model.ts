import {CategoryEnum} from '../../shared';

export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: CategoryEnum,
    public isAvailable: boolean,
    public img?: string
  ) {
  }
}
