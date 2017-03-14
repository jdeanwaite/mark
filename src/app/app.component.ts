import {Component, OnInit, ViewChild} from '@angular/core';
import {SidenavService} from "./services/sidenav.service";
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav')
  sidenav:MdSidenav;

  constructor(public sidenavService: SidenavService) {

  }

  ngOnInit(): void {
    this.sidenavService.registerSidenav(this.sidenav);
  }
}
