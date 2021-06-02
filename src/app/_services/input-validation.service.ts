import { Injectable } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {
  constructor() { }
  IsValidString(input : string) : boolean{
    return input !== undefined && input !== null && input.length > 0;  
  }
  ToNumArray(input:string):Array<number>{
    var arr:Array<number>;
    arr = input.split(',').map(function(i){
      return parseInt(i);
    });
    return arr;
  }
  AddTimeToDate(date,time:string){
    
    let timeReg = /(\d+)[\.|:](\d+)\s?(\w+)/;
    let parts = time.match(timeReg);
    let hours = /am/i.test(parts[3])?
      function(am){return am < 12 ? am:0}(parseInt(parts[1],10)):
      function(pm){return pm <12 ? pm+12:12}(parseInt(parts[1],10));
    let minutes = parseInt(parts[2], 10);
    let dt = new Date(date);
    //console.log(time);
    dt.setHours(hours);
    dt.setMinutes(minutes);
    dt.setSeconds(0);

    return dt.toLocaleString();

  }
  AddTimeToDate2(date,time:string){
    
    let timeReg = /(\d+)[\.|:](\d+)\s?(\w+)/;
    let parts = time.match(timeReg);
    let hours = /am/i.test(parts[3])?
      function(am){return am < 12 ? am:0}(parseInt(parts[1],10)):
      function(pm){return pm <12 ? pm+12:12}(parseInt(parts[1],10));
    let minutes = parseInt(parts[2], 10);
    let dt = new Date(date);
    //console.log(time);
    dt.setHours(hours);
    dt.setMinutes(minutes);
    dt.setSeconds(0);

    return dt;

  }
  AddDaysToDate(date:Date,days:number){
    return new Date(date.getTime()+days*24*60*60*1000);
  }
  FirstOfTheMonth(date:Date){
    return new Date(date.getFullYear(),date.getMonth(),1);
  }
  LastOfTheMonth(date:Date){
    return new Date(date.getFullYear(),date.getMonth()+1,0);
  }
}

