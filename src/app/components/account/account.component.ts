import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Account} from "../../classes/account";
import {Router, ActivatedRoute} from "@angular/router";
import {Transaction} from "../../classes/transaction";
import {TransactionType} from "../../enums/transaction-type";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
  transactions: Transaction[] = [];
  transactionType:any = TransactionType;
  addTransactionLink: string = "/transaction";

  constructor(public sidenavService: SidenavService, private router: Router, private activatedRoute: ActivatedRoute, public accountService: AccountService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.account = this.accountService.getAccount(params["id"]);
      this.addTransactionLink += `/${this.account.id}`;
      this.account.balance = this.accountService.getBalance(this.account);

      this.account.transactions.sort((a, b) => {
        return +(new Date(b.date)) - +(new Date(a.date));
      })
    });
  }

}
