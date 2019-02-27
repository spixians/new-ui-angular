import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderData: Array<{
    supplier: string,
    component : string,
    componentType : string,
    orderDate :  string,
    deliveryDate : string,
    deliveryType : string,
    batches : number,
    quantity : number,
    amount : number
    }> =[
      {
        supplier : 'Palak',
        component : 'ball-bearing',
        componentType : '2' ,
        orderDate : '5-12-2010' ,
        deliveryDate : '7-12-2010',
        deliveryType : 'B',
        batches : 50,
        quantity : 500,
        amount : 60000
      }, {
        supplier : 'Palak',
        component : 'ball-bearing',
        componentType : '2' ,
        orderDate : '5-12-2010' ,
        deliveryDate : '7-12-2010',
        deliveryType : 'B',
        batches : 50,
        quantity : 500,
        amount : 60000
      },{
        supplier : 'Palak',
        component : 'ball-bearing',
        componentType : '2' ,
        orderDate : '5-12-2010' ,
        deliveryDate : '7-12-2010',
        deliveryType : 'B',
        batches : 50,
        quantity : 500,
        amount : 60000
      }
  ]

}
