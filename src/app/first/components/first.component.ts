import {Component, OnInit} from '@angular/core';

import {CategoryEnum} from '../../shared/models/app-enums.model';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {
  item: ItemModel = new ItemModel(
    'Isabella',
    'Bed in Roman style with high headboard',
    50,
    CategoryEnum.Beds,
    true
  );

  ngOnInit(): void {
  }

}
