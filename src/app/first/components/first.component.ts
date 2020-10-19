import {Component, OnInit} from '@angular/core';
import {CategoryEnum} from '../../shared/models/app-enums.model';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})

export class FirstComponent implements OnInit {

  public item: ItemModel = new ItemModel(
    'Name',
    'Description',
    50,
    CategoryEnum.Beds,
    true
  );

  ngOnInit(): void {
  }

}
