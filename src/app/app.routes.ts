import { Routes } from '@angular/router';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ProductionComponent } from './components/production/production.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/orders' }
];