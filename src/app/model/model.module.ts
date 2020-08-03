import {NgModule} from '@angular/core';
import {Repository} from './repository';
import {StaticDataSource} from './static.dataSource';
import {CartModel} from './cart.model';
import {OrderModel} from './order.model';
import {OrderRepository} from './order.repository';

@NgModule({
  providers: [Repository, StaticDataSource, CartModel, OrderModel, OrderRepository]
})
export class ModelModule {

}
