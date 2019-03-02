import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventoryskf',
  templateUrl: './inventoryskf.component.html',
  styleUrls: ['./inventoryskf.component.css']
})

export class InventoryskfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  InData: Array<{
  
    compname : string,
    orderid:number,
    existinginventory:number,
    addinventory:number,
    totalinventory:number,
    date:string }> =[
      {
        compname : "Inner Ring",
        orderid: 1,
        existinginventory:10000,
        addinventory:2000,
        totalinventory:12000,
        date:"01/03/2019"
      },{
        compname : "Outer Ring",
        orderid: 2,
        existinginventory:10000,
        addinventory:2000,
        totalinventory:12000,
        date:"01/03/2019"
      },{
        compname : "Roller",
        orderid: 3,
        existinginventory:6000,
        addinventory:200,
        totalinventory:6200,
        date:"01/03/2019"
      },{
        compname : "Ball",
        orderid: 4,
        existinginventory:20000,
        addinventory:2000,
        totalinventory:22000,
        date:"01/03/2019"
      },{
        compname : "Lubricant",
        orderid: 5,
        existinginventory:5000,
        addinventory:100,
        totalinventory:5100,
        date:"01/03/2019"
      },{
        compname : "Cage",
        orderid: 6,
        existinginventory:9000,
        addinventory:200,
        totalinventory:9200,
        date:"01/03/2019"
      }
  ]
}
