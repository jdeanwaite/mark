import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Account} from "../../classes/account";
import {Router} from "@angular/router";
import {Transaction} from "../../classes/transaction";
import {TransactionType} from "../../enums/transaction-type";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
  transactions: Transaction[] = [];
  transactionType:any = TransactionType;

  constructor(public sidenavService: SidenavService, private router: Router) {
  }

  ngOnInit() {
    this.account = {
      name: 'Account 1',
      id: '1',
      balance: 20.00
    };

    this.transactions = [
      {
        type: TransactionType.expense,
        amount: 20.00,
        description: "Pizza",
        date: new Date(),
      },
      {
        type: TransactionType.income,
        amount: 50.00,
        description: "Pay check",
        date: new Date(),
      }
    ];
  }

}
