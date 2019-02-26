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
    icon : string }> =[
      {
        title: "Dashboard",
        icon: "menu-icon fa fa-laptop"
      },{
        title:"Demand Estimation",
        icon : "menu-icon fa fa-bar-chart"
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
        icon : "glyphicon glyphicon-list-alt"
      }
  ]
}
