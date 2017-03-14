import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Router} from "@angular/router";
import {Account} from "../../classes/account";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

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

  submitTransfer() {
    console.log('transfer');
  }

  private setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  private clearErrorMessage() {
    this.errorMessage = "";
  }

}
