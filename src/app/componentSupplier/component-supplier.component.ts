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
    icon : string }> =[
      {
        title: "Dashboard",
        icon: "menu-icon fa fa-laptop"
      },{
        title:"Place Order",
        icon : "menu-icon fa fa-tasks"
      },{
        title:"Green Orders",
        icon : "menu-icon fa fa-th"
      },{
        title:"Yellow Orders",
        icon : "menu-icon fa fa-th"
      },{
        title:"Red Orders",
        icon : "menu-icon fa fa-th"
      },{
        title:"Availability Check",
        icon : "menu-icon fa fa-table"
      },{
        title:"Order History",
        icon : "menu-icon fa fa-list-alt"
      }
  ]
}
