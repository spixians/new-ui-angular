import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './skf/dashboard/dashboard.component';
import { DemandEstimationComponent } from './skf/demand-estimation/demand-estimation.component';
import { SkfComponent } from './skf/skf.component';
import { RedOrderListComponent } from './skf/red-order-list/red-order-list.component';
import { GreenOrderListComponent } from './skf/green-order-list/green-order-list.component';
import { YellowOrderListComponent } from './skf/yellow-order-list/yellow-order-list.component';
import { OrderHistoryComponent } from './skf/order-history/order-history.component';
import { PlaceOrderComponent } from './skf/place-order/place-order.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


import { DashboardCComponent } from './componentSupplier/dashboard-c/dashboard-c.component';
import { ComponentSupplierComponent } from './componentSupplier/component-supplier.component';
import { RedOrderCComponent } from './componentSupplier/red-order-c/red-order-c.component';
import { GreenOrderCComponent } from './componentSupplier/green-order-c/green-order-c.component';
import { YellowOrderCComponent } from './componentSupplier/yellow-order-c/yellow-order-c.component';
import { OrderHistoryCComponent } from './componentSupplier/order-history-c/order-history-c.component';
import { PlaceOrderCComponent } from './componentSupplier/place-order-c/place-order-c.component';
import { RawmaterialSupplierComponent } from './rawmaterial-supplier/rawmaterial-supplier.component';
import { DashboardRComponent } from './rawmaterial-supplier/dashboard-r/dashboard-r.component';
import { AddinventoryComponent } from './rawmaterial-supplier/addinventory/addinventory.component';
import { TrackinventoryComponent } from './rawmaterial-supplier/trackinventory/trackinventory.component';
import { InventoryskfComponent } from './skf/inventoryskf/inventoryskf.component';
import { DelaysskfComponent } from './skf/delaysskf/delaysskf.component';
import { InventorycsComponent } from './componentSupplier/inventorycs/inventorycs.component';



const appRoutes: Routes = [
  {path: 'skf',  component:SkfComponent ,children:[
    {path: 'dasboard',  component:DashboardComponent},
    {path: 'demand-estimation',  component:DemandEstimationComponent},
    {path: 'green-order-list',  component:GreenOrderListComponent},
    {path: 'red-order-list',  component:RedOrderListComponent},
    {path: 'yellow-order-list',  component:YellowOrderListComponent},
    {path: 'order-history',  component:OrderHistoryComponent},
    {path: 'place-order',  component:PlaceOrderComponent},
    {path: 'inventoryskf',  component:InventoryskfComponent},
    {path: 'delaysskf',  component:DelaysskfComponent},
  
    


 ]},

 {path: 'componentSupplier',  component:ComponentSupplierComponent ,children:[
  {path: 'dashboard-c',  component:DashboardCComponent},
  {path: 'green-order-c',  component:GreenOrderCComponent},
  {path: 'red-order-c',  component:RedOrderCComponent},
  {path: 'yellow-order-c',  component:YellowOrderCComponent},
  {path: 'order-history-c',  component:OrderHistoryCComponent},
  {path: 'place-order-c',  component:PlaceOrderCComponent},
  {path: 'inventorycs',  component:InventorycsComponent}
  


]},


{path: 'rawmaterial-supplier',  component:RawmaterialSupplierComponent ,children:[
  {path: 'dashboard-r',  component:DashboardRComponent},
  {path: 'addinventory',  component:AddinventoryComponent},
  {path: 'trackinventory',  component:TrackinventoryComponent},
  
  


]},
{path: 'signup',  component:SignupComponent},
{path: 'signin',  component:SigninComponent},
{path: 'rawmaterial-supplier',  component:RawmaterialSupplierComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
