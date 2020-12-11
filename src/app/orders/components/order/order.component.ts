import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

import {OrderModel} from '../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {
  @Input() order: OrderModel;
}
