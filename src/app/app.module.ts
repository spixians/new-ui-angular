import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkfComponent } from './skf/skf.component';
import { DashboardComponent } from './skf/dashboard/dashboard.component';
import { DemandEstimationComponent } from './skf/demand-estimation/demand-estimation.component';
import { PlaceOrderComponent } from './skf/place-order/place-order.component';
import { OrderHistoryComponent } from './skf/order-history/order-history.component';
import { RedOrderListComponent } from './skf/red-order-list/red-order-list.component';
import { GreenOrderListComponent } from './skf/green-order-list/green-order-list.component';
import { YellowOrderListComponent } from './skf/yellow-order-list/yellow-order-list.component';
import { AvailablityCheckComponent } from './skf/availablity-check/availablity-check.component';
import { LoginComponent } from './auth/login/login.component';
import { ComponentSupplierComponent } from './componentSupplier/component-supplier.component';
import { DashboardCComponent } from './componentSupplier/dashboard-c/dashboard-c.component';
import { PlaceOrderCComponent } from './componentSupplier/place-order-c/place-order-c.component';
import { GreenOrderCComponent } from './componentSupplier/green-order-c/green-order-c.component';
import { YellowOrderCComponent } from './componentSupplier/yellow-order-c/yellow-order-c.component';
import { RedOrderCComponent } from './componentSupplier/red-order-c/red-order-c.component';
import { AvailabilityCheckCComponent } from './componentSupplier/availability-check-c/availability-check-c.component';
import { OrderHistoryCComponent } from './componentSupplier/order-history-c/order-history-c.component';
// import { SidebarComponent } from './skf/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SkfComponent,
    // SidebarComponent,
    DashboardComponent,
    DemandEstimationComponent,
    PlaceOrderComponent,
    OrderHistoryComponent,
    RedOrderListComponent,
    GreenOrderListComponent,
    YellowOrderListComponent,
    AvailablityCheckComponent,
    LoginComponent,
    ComponentSupplierComponent,
    DashboardCComponent,
    PlaceOrderCComponent,
    GreenOrderCComponent,
    YellowOrderCComponent,
    RedOrderCComponent,
    AvailabilityCheckCComponent,
    OrderHistoryCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
