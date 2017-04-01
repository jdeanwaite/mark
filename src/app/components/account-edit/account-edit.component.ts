import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Account} from "../../classes/account";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  account: Account = null;
  accountName: string = "";

  constructor(public sidenavService: SidenavService, private router: Router, private route: ActivatedRoute, public accountService: AccountService) {
  }

  ngOnInit() {
    let id:number;
    this.route.params.subscribe(params => {
      id = +params['id'];
      this.account = this.accountService.getAccount(id);
      this.accountName = this.account.name;
    })
  }

  editAccount() {
    console.log(this.account.id);
    this.account.name = this.accountName;
    this.accountService.setAccount(this.account);
    this.router.navigate(["/dashboard"]);
  }

}
