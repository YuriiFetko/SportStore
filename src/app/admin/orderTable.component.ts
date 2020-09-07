import {Component} from '@angular/core';
import {OrderRepository} from '../model/order.repository';
import {OrderModel} from '../model/order.model';

@Component({
  templateUrl: 'orderTable.component.html'
})
export class OrderTableComponent {
  includeShipped = false;

  constructor(private repository: OrderRepository) {
  }

  getOrders(): OrderModel[] {
    console.log();
    try {
      return this.repository.getOrders()
        .filter(o => this.includeShipped || !o.shipped);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  markShipped(order: OrderModel) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
