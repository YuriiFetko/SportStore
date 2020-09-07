import {Component} from '@angular/core';
import {Repository} from '../model/repository';
import {ProductModel} from '../model/product.model';

@Component({
  templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {
  constructor(private repository: Repository) {
  }

  getProducts(): ProductModel[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
