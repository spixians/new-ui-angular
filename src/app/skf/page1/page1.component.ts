import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
 num:number;
 compn:string;
  constructor(private _Activatedroute:ActivatedRoute) {

    this.num=this._Activatedroute.snapshot.params['var'];
   }

  
  




  ngOnInit() {
  }



  InData1: Array<{
  
    compno   :number;
    compname : string,
    comptype : string;
    quantity : number,
    suppyname:string,
    rt:number,
    frequency:number,

     }> =[
      
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s1",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s1",
        rt:25,
        frequency:12,
      },
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s2",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s2",
        rt:25,
        frequency:12,
      },
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s3",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s3",
        rt:25,
        frequency:12,
      },
      {
        compno: 1,
        compname : "Roller",
        comptype : "A",
        quantity : 180000,
        suppyname:"s4",
        rt:25,
        frequency:10,
      },{
        compno: 1,
        compname : "Roller",
        comptype : "B",
        quantity : 190000,
        suppyname:"s4",
        rt:25,
        frequency:12,
      },
      
      
      
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:24,
        frequency:12,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s1",
        rt:24,
        frequency:12,
      },
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s2",
        rt:22,
        frequency:10,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s2",
        rt:22,
        frequency:10,
      },
      
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s3",
        rt:24,
        frequency:12,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s3",
        rt:24,
        frequency:12,
      },
      {
        compno: 2,
        compname : "Lubricant",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:22,
        frequency:10,
      },{
        compno: 2,
        compname : "Lubricant",
        comptype : "B",
        quantity : 15000,
        suppyname:"s4",
        rt:22,
        frequency:10,
      },
      
      
      
      
      {
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s1",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s1",
        rt:21,
        frequency:18,
      },
      {
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s2",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s2",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s3",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s3",
        rt:21,
        frequency:18,
      },
      {
        compno: 3,
        compname : "Ball",
        comptype : "A",
        quantity : 50000,
        suppyname:"s4",
        rt:21,
        frequency:18,
      },{
        compno: 3,
        compname : "Ball",
        comptype : "B",
        quantity : 15000,
        suppyname:"s4",
        rt:21,
        frequency:18,
      },
      
      
      {
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s1",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s1",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s2",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s2",
        rt:22,
        frequency:19,
      },
      {
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s3",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s3",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "A",
        quantity : 17000,
        suppyname:"s4",
        rt:22,
        frequency:19,
      },{
        compno: 4,
        compname : "Cage",
        comptype : "B",
        quantity : 23000,
        suppyname:"s4",
        rt:22,
        frequency:19,
      }
  ]












  InData: Array<{
  
    supplier : string,
    Jan : number;
    Feb : number,
    March:number,
    April:number,
    May:number,
    June:number,

     }> =[
      
      {
        supplier : "s1",
        Jan : 45,
        Feb : 34,
        March:33,
        April:43,
        May:55,
        June:46,
      }
  ]
}






