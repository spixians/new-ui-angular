import { Component, OnInit, Injectable } from '@angular/core';
import { OrderHistoryComponent } from '../../skf/order-history/order-history.component';
import { skfOrderService } from 'src/app/services/skf-order.service';
import { SkfOrderClass } from 'src/app/classes/skf-order-schema';





@Component({
  selector: 'app-dashboard-c',
  templateUrl: './dashboard-c.component.html',
  styleUrls: ['./dashboard-c.component.css']
})

export class DashboardCComponent implements OnInit {

  orderData : SkfOrderClass  


  constructor(private skfOrder : skfOrderService ,
    private skfSchema : SkfOrderClass ) { 
      this.skfOrder.getSkfOrdersForCS("pramod")
      .subscribe(
        data=>{
          this.orderData=data
          console.log("hello")
          console.log(this.orderData)
        }
      )
    }

  ngOnInit() {
  }

  

  

  onsubmit(component :string,quantity :number){
    
  }
}
