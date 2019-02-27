import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-supplier',
  templateUrl: './component-supplier.component.html',
  styleUrls: ['./component-supplier.component.css']
})
export class ComponentSupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarData: Array<{
    title: string,
    icon : string ,
    link:string}> =[
      {
        title: "Dashboard",
        icon: "menu-icon fa fa-laptop",
        link: "/componentSupplier/dashboard-c"
      },{
        title:"Place Order",
        icon : "menu-icon fa fa-tasks",
        link: "/componentSupplier/place-order-c"
      },{
        title:"Green Orders",
        icon : "menu-icon fa fa-th",
        link: "/componentSupplier/green-order-c"
      },{
        title:"Yellow Orders",
        icon : "menu-icon fa fa-th",
        link: "/componentSupplier/yellow-order-c"
      },{
        title:"Red Orders",
        icon : "menu-icon fa fa-th",
        link: "/componentSupplier/red-order-c"
      },{
        title:"Availability Check",
        icon : "menu-icon fa fa-table",
        link: "/componentSupplier/availability-check-c"
      },{
        title:"Order History",
        icon : "menu-icon fa fa-list-alt",
        link: "/componentSupplier/oerder-history-c"
      }
  ]
}
