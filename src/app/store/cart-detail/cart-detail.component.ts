import {Component, OnInit} from '@angular/core';
import {CartModel} from '../../model/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.sass']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: CartModel) {
  }

  ngOnInit(): void {
  }

}
