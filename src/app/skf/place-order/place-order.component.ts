import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm ,NgModel } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  @ViewChild('f') placeorder : NgForm
  constructor() { }

  ngOnInit() {
  }

  user= {
    amount: 0,
    batches: 0,
    component: "",
    componentType: "",
    expectedDate: "",
    price: 0,
    quantity: 0,
    supplier: ""

  }

  // TotalPrice = this.placeorder.value.quantity * this.placeorder.value.price;

  onSubmit(form : NgForm){
    console.log(this.placeorder)
    this.user.amount = this.placeorder.value.amount
    this.user.batches = this.placeorder.value.batches
    this.user.component= this.placeorder.value.component
    this.user.componentType= this.placeorder.value.componentType
    this.user.expectedDate = this.placeorder.value.expectedDate
    this.user.quantity = this.placeorder.value.quantity
    this.user.supplier = this.placeorder.value.supplier
    this.user.price = this.placeorder.value.price
    console.log(this.user)
  }


}
