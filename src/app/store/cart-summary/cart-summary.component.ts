import {Component, OnInit} from '@angular/core';
import {CartModel} from '../../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.sass']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: CartModel) {
  }

  ngOnInit(): void {
  }

}
