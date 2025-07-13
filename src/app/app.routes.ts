import { Routes } from '@angular/router';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: '**', redirectTo: '/orders' }
];