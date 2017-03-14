import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  constructor(public sidenavService: SidenavService, private router: Router) {
  }

  ngOnInit() {
  }

  editAccount() {

  }

}
