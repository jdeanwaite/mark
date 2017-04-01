import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {Account} from "../../classes/account";

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  accountName: string = "";

  constructor(public sidenavService: SidenavService, private router: Router, public accountService: AccountService) {
  }

  ngOnInit() {
  }

  createAccount() {
    let account:Account = {
      name: this.accountName,
      balance: 0,
      transactions: []
    };
    this.accountService.addAccount(account);
    this.router.navigate(["/dashboard"]);
  }

}
