import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order, OrderStatus } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = '/api/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  getMockOrders(): Observable<Order[]> {
    const mockOrders: Order[] = [
      {
        id: '1001',
        customerName: 'John Doe',
        customerEmail: 'john.doe@example.com',
        orderDate: new Date('2024-01-15'),
        status: OrderStatus.SHIPPED,
        totalAmount: 299.99,
        trackingNumber: 'TRK123456789',
        estimatedDelivery: new Date('2024-01-20'),
        items: [
          {
            id: 'item1',
            productName: 'Wireless Headphones',
            quantity: 1,
            price: 299.99
          }
        ],
        shippingAddress: {
          street: '123 Main St',
          city: 'Boston',
          state: 'MA',
          zipCode: '02101',
          country: 'USA'
        }
      },
      {
        id: '1002',
        customerName: 'Jane Smith',
        customerEmail: 'jane.smith@example.com',
        orderDate: new Date('2024-01-16'),
        status: OrderStatus.PROCESSING,
        totalAmount: 149.99,
        items: [
          {
            id: 'item2',
            productName: 'Bluetooth Speaker',
            quantity: 1,
            price: 149.99
          }
        ],
        shippingAddress: {
          street: '456 Oak Ave',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'USA'
        }
      }
    ];
    
    return of(mockOrders);
  }
}