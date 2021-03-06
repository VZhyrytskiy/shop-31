import {CategoryEnum} from '../../shared/models/app-enums.model';

export class ItemModel {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: CategoryEnum,
    public isAvailable: boolean
  ) {
  }
}
