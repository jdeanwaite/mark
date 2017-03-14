import { Component, OnInit } from '@angular/core';
import {Account} from "../../classes/account";
import {SidenavService} from "../../services/sidenav.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private accounts:Account[] = [
    {
      name: 'Account 1',
      balance: 20.00,
      id: "1"
    },
  ];

  private totalBalance:number = 30.00;

  constructor(public sidenavService:SidenavService) { }

  ngOnInit() {
  }

}
