import { Component, OnInit } from '@angular/core';
import {Account} from "../../classes/account";
import {SidenavService} from "../../services/sidenav.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  accounts: Account[] = [];
  errorMessage: string;

  constructor(public sidenavService: SidenavService, private router: Router) {
  }

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

}
