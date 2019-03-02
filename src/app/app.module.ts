import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
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
// import { LoginComponent } from './auth/login/login.component';
import { Routes, RouterModule }from "@angular/router";
import { RawmaterialSupplierComponent } from './rawmaterial-supplier/rawmaterial-supplier.component';
import { ComponentSupplierComponent } from './componentSupplier/component-supplier.component';
import { DashboardCComponent } from './componentSupplier/dashboard-c/dashboard-c.component';
import { PlaceOrderCComponent } from './componentSupplier/place-order-c/place-order-c.component';
import { GreenOrderCComponent } from './componentSupplier/green-order-c/green-order-c.component';
import { YellowOrderCComponent } from './componentSupplier/yellow-order-c/yellow-order-c.component';
import { RedOrderCComponent } from './componentSupplier/red-order-c/red-order-c.component';
import { AvailabilityCheckCComponent } from './componentSupplier/availability-check-c/availability-check-c.component';
import { OrderHistoryCComponent } from './componentSupplier/order-history-c/order-history-c.component';
import { skfOrderService } from './services/skf-order.service';
import { SkfOrderClass } from './classes/skf-order-schema';
// import { injectInjector } from '@angular/core/src/render3/di';
import { Observable } from 'rxjs';
import { AuthService} from './auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardRComponent } from './rawmaterial-supplier/dashboard-r/dashboard-r.component';
import { TrackinventoryComponent } from './rawmaterial-supplier/trackinventory/trackinventory.component';
import { AddinventoryComponent } from './rawmaterial-supplier/addinventory/addinventory.component';
import { InventoryskfComponent } from './skf/inventoryskf/inventoryskf.component';
import { DelaysskfComponent } from './skf/delaysskf/delaysskf.component';

import { InventorycsComponent } from './componentSupplier/inventorycs/inventorycs.component';
// import { SidebarComponent } from './skf/sidebar/sidebar.component';

// import { SidebarComponent } from './skf/sidebar/sidebar.component';

  // import { DashboardComponent } from './skf/dashboard/dashboard.component';
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
    // LoginComponent,
    RawmaterialSupplierComponent,
    ComponentSupplierComponent,
    DashboardCComponent,
    PlaceOrderCComponent,
    GreenOrderCComponent,
    YellowOrderCComponent,
    RedOrderCComponent,
    AvailabilityCheckCComponent,
    OrderHistoryCComponent,
    SignupComponent,
    SigninComponent,
    DashboardRComponent,
    TrackinventoryComponent,
    AddinventoryComponent,
    InventoryskfComponent,
    DelaysskfComponent,
    InventorycsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(),
    HttpClientModule
    ],
  providers: [skfOrderService, SkfOrderClass,AuthService , ],
  bootstrap: [AppComponent]
})
export class AppModule { }
