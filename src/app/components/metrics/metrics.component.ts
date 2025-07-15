import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Order, OrderStatus } from '../../models/order.model';

interface StatusData {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

interface TrendData {
  day: string;
  orders: number;
  percentage: number;
}

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.css'
})
export class MetricsComponent implements OnInit {
  totalOrders = 0;
  totalRevenue = 0;
  avgOrderValue = 0;
  fulfillmentRate = 95.8;

  orderStatusData: StatusData[] = [];
  weeklyTrends: TrendData[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadMetrics();
    this.generateMockData();
  }

  loadMetrics() {
    this.orderService.getMockOrders().subscribe(orders => {
      this.calculateMetrics(orders);
      this.calculateStatusDistribution(orders);
    });
  }

  calculateMetrics(orders: Order[]) {
    this.totalOrders = orders.length;
    this.totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    this.avgOrderValue = this.totalRevenue / this.totalOrders;
  }

  calculateStatusDistribution(orders: Order[]) {
    const statusCounts: { [key: string]: number } = {};
    const statusColors: { [key: string]: string } = {
      [OrderStatus.PENDING]: '#f59e0b',
      [OrderStatus.PROCESSING]: '#3b82f6',
      [OrderStatus.SHIPPED]: '#8b5cf6',
      [OrderStatus.DELIVERED]: '#10b981',
      [OrderStatus.CANCELLED]: '#ef4444'
    };

    orders.forEach(order => {
      statusCounts[order.status] = (statusCounts[order.status] || 0) + 1;
    });

    this.orderStatusData = Object.entries(statusCounts).map(([status, count]) => ({
      label: status.charAt(0).toUpperCase() + status.slice(1),
      count,
      percentage: Math.round((count / orders.length) * 100),
      color: statusColors[status] || '#6b7280'
    }));
  }

  generateMockData() {
    this.weeklyTrends = [
      { day: 'Mon', orders: 45, percentage: 75 },
      { day: 'Tue', orders: 52, percentage: 87 },
      { day: 'Wed', orders: 38, percentage: 63 },
      { day: 'Thu', orders: 61, percentage: 100 },
      { day: 'Fri', orders: 48, percentage: 80 },
      { day: 'Sat', orders: 35, percentage: 58 },
      { day: 'Sun', orders: 29, percentage: 48 }
    ];
  }
}
