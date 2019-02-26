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
    LoginComponent
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
