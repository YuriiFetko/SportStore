import {Injectable} from '@angular/core';
import {ProductModel} from './product.model';

@Injectable()
export class CartModel {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  addline(product: ProductModel, quantity: number = 1) {
    const line = this.lines.find(item => item.product.id === product.id);
    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: ProductModel, quantity: number) {
    const line = this.lines.find(item => item.product.id === product.id);
    if (line !== undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    const index = this.lines.findIndex(line => line.product.id === id);
    this.lines.splice(index);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(i => {
      this.itemCount += i.quantity;
      this.cartPrice += (i.quantity * i.product.price);
    });
  }

}

export class CartLine {
  constructor(public product: ProductModel, public quantity: number) {
  }

  get lineTotal() {
    return this.quantity * this.product.price;
  }

}
