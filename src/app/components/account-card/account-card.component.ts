import {Component, OnInit, Input} from '@angular/core';
import {Account} from "../../classes/account";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-budget-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  @Input('account')
  public account: Account;

  constructor(private router: Router, public accountService: AccountService) {
  }

  ngOnInit() {
    this.account.balance = this.accountService.getBalance(this.account);
  }

  viewAccount() {
    this.router.navigate([`account/${this.account.id}`])
  }

  editAccount() {
    console.log('editing account');
    this.router.navigate([`account/${this.account.id}/edit`]);
  }

}
