import {Injectable} from '@angular/core';
import {MdSidenav} from "@angular/material";

@Injectable()
export class SidenavService {

  private sidenav: MdSidenav;

  constructor() {
  }

  registerSidenav(sidenav: MdSidenav) {
    this.sidenav = sidenav;
  }

  open() {
    return this.sidenav.open();
  }

  close() {
    return this.sidenav.close();
  }

  toggle() {
    return this.sidenav.toggle();
  }

}
