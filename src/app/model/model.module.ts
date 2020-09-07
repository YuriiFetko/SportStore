import {NgModule} from '@angular/core';
import {Repository} from './repository';
import {StaticDataSource} from './static.dataSource';
import {CartModel} from './cart.model';
import {OrderModel} from './order.model';
import {OrderRepository} from './order.repository';
import {RestDataSource} from './rest.datasource';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';


@NgModule({
  imports: [HttpClientModule],
  providers: [Repository, CartModel, OrderModel, OrderRepository,
    {provide: StaticDataSource, useClass: RestDataSource}, RestDataSource, AuthService]
})
export class ModelModule {
}
