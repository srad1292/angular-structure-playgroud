import { Component, OnInit } from '@angular/core';
import { orderData } from '@app/core/mocks/orders.mock';
import { IOrder } from "@app/schemas/order.interface";
import { OrderService } from '@app/features/orders/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  displayedColumns: string[] = ["name", "patient", "orderId", "status", "price"];
  orderList$: Observable<IOrder[]>;

  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderList$ = this._orderService.getOrders();
  }

}
