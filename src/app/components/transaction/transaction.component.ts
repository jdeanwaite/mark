import { Component, OnInit } from '@angular/core';
import {Account} from "../../classes/account";
import {SidenavService} from "../../services/sidenav.service";
import {Router, ActivatedRoute} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {Transaction} from "../../classes/transaction";
import {TransactionType} from "../../enums/transaction-type";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  accounts: Account[] = [];
  errorMessage: string;
  accountId: number = null;
  transactionType: 'expense'|'income' = "expense";
  amount: number = 0.0;
  description: string = "";

  constructor(public sidenavService: SidenavService, private router: Router, private accountService: AccountService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
    this.activatedRoute.params.subscribe(params => {
      if (!isNaN(params["id"])) {
        console.log("sdlkfjsdf");
        console.log(this.accounts);
        this.accountId = Number(params["id"]);
        console.log(this.accountId)
      }
    })
  }

  submitTransaction() {
    console.log("Submitting transaction");

    let transactionType: TransactionType;

    switch (this.transactionType) {
      case 'expense':
        transactionType = TransactionType.expense;
        break;
      case 'income':
        transactionType = TransactionType.income;
        break;
    }

    let transaction:Transaction = {
      type: transactionType,
      amount: this.amount,
      description: this.description,
      date: new Date()
    };

    this.accountService.addTransaction(this.accountId, transaction);
    this.router.navigate([`/account/${this.accountId}`]);
  }

}
