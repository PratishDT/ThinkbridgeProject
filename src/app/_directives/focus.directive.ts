import { Directive, Input, OnChanges, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { MatInput, MatButton, MatCheckbox } from '@angular/material';
@Directive({
    selector: '[focusInput]'
  })
  export class FocusInputDirective implements OnChanges  {

    @Input() index: number;
    @Input() currentIndex: number;
    @Output() focused: EventEmitter<any> = new EventEmitter();
    @Output() nextFocused: EventEmitter<any> = new EventEmitter();
    @Output() prevFocused: EventEmitter<any> = new EventEmitter();


    constructor(private hostElement: MatInput) { }

    ngOnChanges() {

      if (this.currentIndex !== undefined && this.currentIndex === this.index) {
        this.hostElement.focus();
      }
    }

    //@HostListener('focus', ['$event'])
    @HostListener('focus', ['$event'])
    onFocus($event) {
      $event.target.select();
      this.focused.emit(this.index);
    }
    //@HostListener('blur', ['$event'])
    @HostListener('blur', [])
    onBlur() {
      this.focused.emit(0);
    }
    //@HostListener('keyup', ['$event'])
    @HostListener('keyup', ['$event'])
    onkeyup(event: KeyboardEvent) {
      if (event.keyCode === 13 || event.keyCode === 39) {
        this.focused.emit(this.index + 1);
        this.nextFocused.emit();
        this.hostElement.focus();
      }
      if (event.ctrlKey && event.keyCode === 13 || event.keyCode === 37) {
        this.focused.emit(this.index - 1);
        this.prevFocused.emit();
        this.hostElement.focus();
      }
    }
  }

@Directive({
    selector: '[focusSelect]'
  })
  export class FocusSelectDirective implements OnChanges  {

    @Input() index: number;
    @Input() currentIndex: number;
    @Output() focused: EventEmitter<any> = new EventEmitter();
    @Output() nextFocused: EventEmitter<any> = new EventEmitter();
    @Output() prevFocused: EventEmitter<any> = new EventEmitter();


    constructor(private hostElement: NgSelectComponent) { }

    ngOnChanges() {

      if (this.currentIndex !== undefined && this.currentIndex === this.index) {
        this.hostElement.focus();
      }
    }
    @HostListener('focus', ['$event'])
    onFocus($event) {
      $event.target.select();
      this.focused.emit(this.index);
    }
    @HostListener('blur', [])
    onBlur() {
      this.focused.emit(0);
    }
    @HostListener('keyup', ['$event'])
    onkeyup(event: KeyboardEvent) {
      if (event.keyCode === 13 || event.keyCode === 39) {
        this.hostElement.isOpen = false;
        this.focused.emit(this.index + 1);
        this.nextFocused.emit();
      }
      if (event.ctrlKey && event.keyCode === 13 || event.keyCode === 37) {
        this.hostElement.isOpen = false;
        this.focused.emit(this.index - 1);
        this.prevFocused.emit();
      }
    }

  }



@Directive({
    selector: '[focusCheck]'
  })
  export class FocusCheckDirective implements OnChanges  {

    @Input() index: number;
    @Input() currentIndex: number;
    @Output() focused: EventEmitter<any> = new EventEmitter();
    @Output() nextFocused: EventEmitter<any> = new EventEmitter();
    @Output() prevFocused: EventEmitter<any> = new EventEmitter();


    constructor(private hostElement: MatCheckbox) { }

    ngOnChanges() {
      if (this.currentIndex !== undefined && this.currentIndex === this.index) {
        this.hostElement.focus();
      }
    }
    @HostListener('focus', ['$event'])
    onFocus($event) {
      $event.target.select();
      this.focused.emit(this.index);
    }
    @HostListener('blur', [])
    onBlur() {
      this.focused.emit(0);
    }
    @HostListener('keyup', ['$event'])
    onkeyup(event: KeyboardEvent) {
      if (event.keyCode === 13 || event.keyCode === 39) {
        this.focused.emit(this.index + 1);
        this.nextFocused.emit();
      }
      if (event.ctrlKey && event.keyCode === 13 || event.keyCode === 37) {
        this.focused.emit(this.index - 1);
        this.prevFocused.emit();
      }
    }
  }


@Directive({
    selector: '[focusButton]'
  })
  export class FocusButtonDirective implements OnChanges  {
    @Input() index: number;
    @Input() currentIndex: number;
    @Output() focused: EventEmitter<any> = new EventEmitter();
    @Output() nextFocused: EventEmitter<any> = new EventEmitter();
    @Output() prevFocused: EventEmitter<any> = new EventEmitter();

    constructor(private hostElement: MatButton) { }

    ngOnChanges() {

      if (this.currentIndex !== undefined && this.currentIndex === this.index) {
        this.hostElement.focus();
      }
    }

    @HostListener('focus', ['$event'])
    onFocus($event) {
      this.focused.emit(this.index);
    }
    @HostListener('blur', [])
    onBlur() {
      this.focused.emit(0);
    }
    @HostListener('keyup', ['$event'])
    onkeyup(event: KeyboardEvent) {
      if (event.altKey && event.keyCode === 13 || event.keyCode === 39) {
        this.focused.emit(this.index + 1);
        this.nextFocused.emit();
      }
      if (event.ctrlKey && event.keyCode === 13 || event.keyCode === 37) {
        this.focused.emit(this.index - 1);
        this.prevFocused.emit();
      }
    }
  }
