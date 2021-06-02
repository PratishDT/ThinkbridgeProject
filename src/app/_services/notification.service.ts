import { Injectable } from '@angular/core';
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private defaultErr = 'Oops, something went wrong.! ';
  private style = 'material';
  private title = 'Snotify title!';
  private body = 'Lorem ipsum dolor sit amet!';
  private timeout = 3000;
  private position: SnotifyPosition = SnotifyPosition.rightTop;
  private progressBar = true;
  private closeClick = true;
  private newTop = true;
  private filterDuplicates = false;
  private backdrop = -1;
  private dockMax = 8;
  private blockMax = 6;
  private pauseHover = true;
  private titleMaxLength = 50;
  private bodyMaxLength = 200;

  
  constructor(private snotifyService : SnotifyService) {}

  /*
  Change global configuration
   */
  private  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }

  
  Success(message:string, title?:string) :void {
    this.snotifyService.success(message,title,this.getConfig());
  }
  
  Simple(message:string,title?:string):void{
    this.snotifyService.simple(message,title,this.getConfig());
  }
  
  Info(message:string,title?:string):void{
    this.snotifyService.info(message,title,this.getConfig());
  }
  
  Warn(message:string,title?:string):void{
    this.snotifyService.warning(message,title,this.getConfig());
  }
  
  Error(message:string,title?:string):void{
    this.snotifyService.error(message,title,this.getConfig());
  }
  

  ErrorDefault():void{
    this.snotifyService.error(this.defaultErr,'Please try again',this.getConfig());
  }

  Async(message:string,title?:string, error?:boolean):void{
    //this.snotifyService.async()
  }

  Confirm(message:string,title:string,confirmAction,deniedAction){
    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
    this.snotifyService.confirm(message,title,{
      ...config,
      buttons:[
        {text: 'Yes', action: confirmAction, bold: false},
        {text: 'No', action: deniedAction, bold: true}
      ]
    });
  }
  Remove(toast){
    this.snotifyService.remove(toast.id);
  }
}
