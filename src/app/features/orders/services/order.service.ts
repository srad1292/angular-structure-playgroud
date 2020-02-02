import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { orderData } from '@app/core/mocks/orders.mock';
import { IOrder } from '@app/schemas/order.interface';


@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor() { }

  getOrders(): Observable<IOrder[]> {
    return of(orderData);
  }

  getOrder(orderId: number): Observable<IOrder> {
    const order = orderData.find((order: IOrder) => order.orderId === orderId);
    return of(order);
  }
}