import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  onsubmit(){    
    var person = prompt("Please enter delay in days");
    


    
  }



  InData: Array<{
  
    OID : string,
    Task : string,
    date: string,
    
     }> =[
      {
        OID : "1",
       
        Task :"Place order to Raw material",
        date: "10/01/2019",
        
      },{
        OID : "2",
       
        Task :"Send to subvendor",
        date: "10/03/2019",

      },{
        OID : "3",
       
        Task :"Send to Production Line",
        date: "20/03/2019",
        
      },{
        OID : "4",
       
        Task :"Dispatch to warehouse (Transportation)",
        date: "20/05/2019",
       
      }
  ]

}


