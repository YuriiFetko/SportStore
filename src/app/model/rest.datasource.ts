import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from './product.model';
import {OrderModel} from './order.model';
import {map} from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  authToken: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl + 'products');
  }

  saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(this.baseUrl + 'orders', order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'login', {
      name: user, password: pass
    }).pipe(map(response => {
      this.authToken = response.success ? response.token : null;
      return response.success;
    }));
  }

  saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.baseUrl + 'products',
      product, this.getOptions());
  }

  updateProduct(product): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.baseUrl}products/${product.id}`,
      product, this.getOptions());
  }

  deleteProduct(id: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${this.baseUrl}products/${id}`,
      this.getOptions());
  }

  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.baseUrl + 'orders', this.getOptions());
  }

  deleteOrder(id: number): Observable<OrderModel> {
    return this.http.delete<OrderModel>(`${this.baseUrl}orders/${id}`,
      this.getOptions());
  }

  updateOrder(order: OrderModel): Observable<OrderModel> {
    return this.http.put<OrderModel>(`${this.baseUrl}orders/${order.id}`,
      order, this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.authToken}>`
      })
    };
  }

}
