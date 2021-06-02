import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocusControlService {

  constructor() { }
  FocusNext(controls : Array<any>, currentId ){
    if(controls){
      let result = [];
      controls.forEach((val)=>{
        result.push({id : val.id, Name : val.Name, Focus : (val.id == (currentId +1))});
      })
      
      return result;
    }
  }
  ClearControls(controls:Array<any>){
    if(controls){
      let result = [];
      controls.forEach((val)=>{
        result.push({id : val.id, Name : val.Name, Focus : false});
      })
      
      return result;
    }
  }

  FocusOn(controls:Array<any>, currentId){
    if(controls){
      let result = [];
      controls.forEach((val)=>{
        result.push({id : val.id, Name : val.Name, Focus : (val.id == (currentId))});
      })
      
      return result;
    }
  }

  GetMyFocus(controls:Array<any>, name){    
    return (controls.filter(x=>x.Name == name)[0]).Focus;
  }

  GetControlByName(controls:Array<any>, name){
    return (controls.filter(x=>x.Name == name)[0]);
  }
}
