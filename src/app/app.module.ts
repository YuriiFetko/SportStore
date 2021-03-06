import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreComponent} from './store/store.component';
import {StoreModule} from './store/store.module';
import {RouterModule} from '@angular/router';
import {CartModel} from './model/cart.model';
import {CartDetailComponent} from './store/cart-detail/cart-detail.component';
import {CheckoutComponent} from './store/checkout/checkout.component';
import {StoreFirstGuard} from './storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'store', component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'cart', component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'checkout', component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
          .then(m => m.AdminModule),
        canActivate: [StoreFirstGuard]
      },
      {path: '**', redirectTo: '/store'}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

