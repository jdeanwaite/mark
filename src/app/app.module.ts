import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import {AccountCardComponent} from './components/account-card/account-card.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import {SidenavService} from "./services/sidenav.service";
import { AccountComponent } from './components/account/account.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AccountCreationComponent } from './components/account-creation/account-creation.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { DepositCheckComponent } from './components/deposit-check/deposit-check.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountCardComponent,
    DashboardComponent,
    AccountComponent,
    TransferComponent,
    TransactionComponent,
    AccountCreationComponent,
    AccountEditComponent,
    DepositCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
