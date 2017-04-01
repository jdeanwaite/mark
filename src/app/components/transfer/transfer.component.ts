import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Router} from "@angular/router";
import {Account} from "../../classes/account";
import {AccountService} from "../../services/account.service";
import {Transaction} from "../../classes/transaction";
import {TransactionType} from "../../enums/transaction-type";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  accounts: Account[] = [];
  errorMessage: string;
  sourceAccount: number = null;
  destinationAccount: number = null;
  selectableDestinationAccounts: Account[] = [];
  selectableSourceAccounts: Account[] = [];
  transferButtonEnabled: boolean = false;
  transferAmount: number = 0.0;
  reason: string = "";

  constructor(public sidenavService: SidenavService, private router: Router, private accountService: AccountService) {
  }

  ngOnInit() {
    this.accounts = this.accountService.getAccounts();
    this.selectableDestinationAccounts = this.accounts;
    this.selectableSourceAccounts = this.accounts;
  }

  submitTransfer() {
    console.log('transfer');
    // this.accountService.addTransaction()
    let sourceTransaction:Transaction = {
      type: TransactionType.expense,
      amount: this.transferAmount,
      description: this.reason,
      date: new Date()
    };

    let destinationTransaction:Transaction = {
      type: TransactionType.income,
      amount: this.transferAmount,
      description: this.reason,
      date: new Date()
    };

    this.accountService.addTransaction(this.sourceAccount, sourceTransaction);
    this.accountService.addTransaction(this.destinationAccount, destinationTransaction);
    this.router.navigate([`/account/${this.destinationAccount}`]);
  }

  private sourceAccountSelected() {
    console.log("Source selected", this.sourceAccount);
    this.selectableDestinationAccounts = this.accounts;
    this.selectableDestinationAccounts = this.selectableDestinationAccounts.filter(account => {
      return account.id != this.sourceAccount;
    });
  }

  private destinationAccountSelected() {
    console.log("Destination selected");
    this.selectableSourceAccounts = this.accounts;
    this.selectableSourceAccounts = this.selectableSourceAccounts.filter(account => {
      return account.id != this.destinationAccount;
    });
  }

  private setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  private clearErrorMessage() {
    this.errorMessage = "";
  }

}
