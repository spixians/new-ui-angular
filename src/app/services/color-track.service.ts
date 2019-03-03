import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkfOrderClass } from '../classes/skf-order-schema';

@Injectable()
export class colorTrackService{

    constructor(private httpclient : HttpClient) {}


}