import { Directive, ViewContainerRef,Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[content-host]',
})
export class ContentDirective {
  @Input() index:number;
  @Output() securityInput: EventEmitter<any> = new EventEmitter();
  @Output() authorised: EventEmitter<any> = new EventEmitter();
  constructor(public viewContainerRef: ViewContainerRef) { }
}
