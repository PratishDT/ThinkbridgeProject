import {Directive, EventEmitter, HostListener, Output, ElementRef} from '@angular/core';

@Directive({
  selector: '[ngModel][uppercase]'
})
export class UppercaseDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;

  @HostListener('input', ['$event']) onInputChange($event) {
    this.value = $event.target.value.toUpperCase();
    this.ngModelChange.emit(this.value);
  }
}



@Directive({
  selector: '[ngModel][numeric]'
})
export class NumericDirective {
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home','Delete' ];

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;
  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
     // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        let current: string = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
  }
}

@Directive({
  selector: '[ngModel][alphanumeric]'
})
export class AlphaNumericDirective {
  private regex: RegExp = new RegExp(/^[a-z0-9]+$/i);
  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home','Delete' ];

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;
  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
     // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        let current: string = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
  }
}

@Directive({
    selector: '[ngModel][alphabets]'
  })
  export class AlphabetsDirective {
    private regex: RegExp = new RegExp(/^[a-z]+$/i);
    private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home','Delete' ];
  
    @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
    value: any;
    constructor(private el: ElementRef) {
    }
    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
      
      // Allow Backspace, tab, end, and home keys
      if (this.specialKeys.indexOf(event.key) !== -1) {
        return;
      }
       // Do not use event.keycode this is deprecated.
          // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
          let current: string = this.el.nativeElement.value;
          // We need this because the current value on the DOM element
          // is not yet updated with the value from this event
          let next: string = current.concat(event.key);
          if (next && !String(next).match(this.regex)) {
              event.preventDefault();
          }
    }
  }
  