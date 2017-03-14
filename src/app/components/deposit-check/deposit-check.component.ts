import { Component, OnInit } from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Router} from "@angular/router";
import {Account} from "../../classes/account";

@Component({
  selector: 'app-deposit-check',
  templateUrl: './deposit-check.component.html',
  styleUrls: ['./deposit-check.component.css']
})
export class DepositCheckComponent implements OnInit {

  accounts:Account[] = [];

  constructor(public sidenavService:SidenavService, private router:Router) { }

  ngOnInit() {
    this.accounts = [
      {
        name: 'Account 1',
        balance: 20.00,
        id: '1'
      },
      {
        name: 'Account 2',
        balance: 20.00,
        id: '2'
      }
    ]
  }

  depositCheck() {

  }

}
