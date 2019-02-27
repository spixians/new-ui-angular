import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class skfOrderService{

    constructor(private httpclient : HttpClient) {}


getSkfOrders(): Observable<any> {
   return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/place-order");

   
}


}