import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorTrackClass } from "src/app/classes/color-track-schema";
import { colorTrackService } from 'src/app/services/color-track.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
 num:number;
 orderData: ColorTrackClass
 
  constructor(private _Activatedroute:ActivatedRoute,private colorTrack : colorTrackService ,
    private colorTrackSchema : ColorTrackClass) {
    
    
    this.num=this._Activatedroute.snapshot.params['var'];

      console.log(this.num)
    console.log('hi');
    this.colorTrack.getview(this.num)
    .subscribe(
      data=>{
        this.orderData=data
        console.log(this.orderData)

      }
    )
   
    
   }

   sample(q, f){
     return q*f
   }
  
   




  ngOnInit() {
  }


}






