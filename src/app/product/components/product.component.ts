import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
  ngOnInit(): void {
  }

  onBuy(): void {
    console.log('Product was bought!');
  }
}
