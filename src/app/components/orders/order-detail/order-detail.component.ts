import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Order } from '../../../models/order.model';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.loadOrder(orderId);
    }
  }

  loadOrder(orderId: string): void {
    this.orderService.getMockOrders().subscribe({
      next: (orders) => {
        this.order = orders.find(o => o.id === orderId) || null;
        this.loading = false;
        if (!this.order) {
          this.router.navigate(['/orders']);
        }
      },
      error: (error) => {
        console.error('Error loading order:', error);
        this.loading = false;
        this.router.navigate(['/orders']);
      }
    });
  }

  getStatusClass(status: string): string {
    return `status status-${status.toLowerCase()}`;
  }

  goBack(): void {
    this.router.navigate(['/orders']);
  }
}