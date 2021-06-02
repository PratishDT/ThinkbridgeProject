import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private sidenav: MatSidenav;
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }
  public open() {
    if (this.sidenav) {
      return this.sidenav.open();
    }
  }
  public close() {
    if (this.sidenav) {
      return this.sidenav.close();
    }
  }
  public toggle(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }


}
