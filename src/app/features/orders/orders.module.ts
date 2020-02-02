import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersListComponent } from './pages/orders-list/orders-list.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

import { OrderService } from './services/order.service';

@NgModule({
  declarations: [OrdersListComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule
  ],
  providers: [
    OrderService
  ]
})
export class OrdersModule { }
