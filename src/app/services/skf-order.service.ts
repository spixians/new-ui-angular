import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkfOrderClass } from '../classes/skf-order-schema';

@Injectable()
export class skfOrderService{

    constructor(private httpclient : HttpClient) {}


getSkfOrders() : Observable<any> {
   return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/place-order");
}

getSkfOrdersForCS(supplier : string) : Observable <any>{
    return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/place-order/"+ supplier );
}

getSkfordersview(Component : string) : Observable <any>{
    return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/demand/"+ Component );
}



postSkfOrder(data : SkfOrderClass) : Observable<any> {
    return this.httpclient.post("https://cors-anywhere.herokuapp.com/https://fathomless-forest-98790.herokuapp.com/place-order",data);
}




}