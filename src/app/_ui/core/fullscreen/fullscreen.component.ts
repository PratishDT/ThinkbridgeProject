import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as screenfull from 'screenfull';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit {
  isFull = false;
  sfControl: any = screenfull;
  elem;
  constructor(@Inject(DOCUMENT) private document: any, private authService: AuthenticationService) { }

  ngOnInit() {
    this.elem = document.documentElement;
  }
  toggleFullscreen() {
    /*
    if (screenfull.enabled) {
        screenfull.toggle();

        this.isFull = !screenfull.isFullscreen;
    }*/
    if (!this.isFull) {
      this.isFull = true;
      if (this.elem.requestFullScreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {

      this.isFull = false;

      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

}
