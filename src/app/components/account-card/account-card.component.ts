import {Component, OnInit, Input} from '@angular/core';
import {Account} from "../../classes/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-budget-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  @Input('account')
  public account: Account;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  viewAccount() {
    console.log('viewing account');
    this.router.navigate([`account/${this.account.id}`])
  }

}
