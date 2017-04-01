import { Component, OnInit } from '@angular/core';
import {Account} from "../../classes/account";
import {SidenavService} from "../../services/sidenav.service";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private accounts:Account[] = [];

  private totalBalance:number = 0.0;

  constructor(public sidenavService:SidenavService, public accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();

    for (let index in this.accounts) {
      this.totalBalance += this.accountService.getBalance(this.accounts[index])
    }

    console.log(this.accounts)
  }

}
