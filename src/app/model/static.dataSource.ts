import {Injectable} from '@angular/core';
import {ProductModel} from './product.model';
import {Observable, from} from 'rxjs';
import {OrderModel} from './order.model';


@Injectable()
export class StaticDataSource {
  private products: ProductModel[] = [
    new ProductModel(1, 'Product 1', 'Category 1', 'Product 1 Category 1', 100),
    new ProductModel(2, 'Product 2', 'Category 2', 'Product 2 Category 2', 100),
    new ProductModel(3, 'Product 3', 'Category 3', 'Product 3 Category 3', 100),
    new ProductModel(4, 'Product 4', 'Category 4', 'Product 4 Category 4', 100),
    new ProductModel(5, 'Product 5', 'Category 5', 'Product 5 Category 5', 100),
    new ProductModel(6, 'Product 6', 'Category 6', 'Product 6 Category 6', 100),
    new ProductModel(7, 'Product 7', 'Category 7', 'Product 7 Category 7', 100),
    new ProductModel(7, 'Product 7', 'Category 7', 'Product 7 Category 7', 100),
    new ProductModel(7, 'Product 7', 'Category 7', 'Product 7 Category 7', 100)
  ];

  getProducts(): Observable<ProductModel[]> {
    return from([this.products]);
  }

  saveOrder(order: OrderModel): Observable<OrderModel> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
