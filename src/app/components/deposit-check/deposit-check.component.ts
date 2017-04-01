import {Component, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Router} from "@angular/router";
import {Account} from "../../classes/account";
import {AccountService} from "../../services/account.service";
import {Transaction} from "../../classes/transaction";
import {TransactionType} from "../../enums/transaction-type";

@Component({
  selector: 'app-deposit-check',
  templateUrl: './deposit-check.component.html',
  styleUrls: ['./deposit-check.component.css']
})
export class DepositCheckComponent implements OnInit, OnChanges {

  accounts:Account[] = [];
  depositAmount: number = 0;
  totalBeingDeposited: number = 0;
  accountAmounts = {};

  constructor(public sidenavService:SidenavService, private router:Router, public accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
    for (let i in this.accounts) {
      if (!this.accounts.hasOwnProperty(i)) continue;
      this.accountAmounts[this.accounts[i].id] = 0;
    }
  }

  depositCheck() {
    for (let key in this.accountAmounts) {
      if (!this.accountAmounts.hasOwnProperty(key)) continue;

      let transaction: Transaction = {
        amount: this.accountAmounts[key] || 0,
        description: "Check Deposit",
        date: new Date(),
        type: TransactionType.income
      };

      this.accountService.addTransaction(Number(key), transaction);
    }
    this.router.navigate(["/"]);
  }

  inputChanged() {
    let total = 0;

    for (let key in this.accountAmounts) {
      if (!this.accountAmounts.hasOwnProperty(key)) continue;
      total += this.accountAmounts[key] || 0;
    }

    this.totalBeingDeposited = total;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("sdfskljdf");
  }

}
