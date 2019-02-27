import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skf',
  templateUrl: './skf.component.html',
  styleUrls: ['./skf.component.css']
})
export class SkfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarData: Array<{
    title: string,
    icon : string,
    link:string }> =[
      {
        title: "Dashboard",
        icon: "menu-icon fa fa-laptop",
        link: "/skf/dashboard"
      },{
        title:"Demand Estimation",
        icon : "menu-icon fa fa-bar-chart",
        link: "/skf/demand-estimation"
      },{
        title:"Place Order",
        icon : "menu-icon fa fa-tasks",
        link: "/skf/place-order"
      },{
        title:"Green Orders",
        icon : "menu-icon fa fa-th",
        link: "/skf/green-order-list"
      },{
        title:"Yellow Orders",
        icon : "menu-icon fa fa-th",
        link: "/skf/yellow-order-list"
      },{
        title:"Red Orders",
        icon : "menu-icon fa fa-th",
        link: "/skf/red-order-list"
      },{
        title:"Availability Check",
        icon : "menu-icon fa fa-table",
        link: "/skf/dashboard"
      },{
        title:"Order History",
        icon : "menu-icon fa fa-list-alt",
        link: "/skf/order-history"
      }
  ]
}
