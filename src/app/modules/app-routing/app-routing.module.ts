import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {AccountComponent} from "../../components/account/account.component";
import {TransferComponent} from "../../components/transfer/transfer.component";
import {TransactionComponent} from "../../components/transaction/transaction.component";
import {AccountCreationComponent} from "../../components/account-creation/account-creation.component";
import {AccountEditComponent} from "../../components/account-edit/account-edit.component";
import {DepositCheckComponent} from "../../components/deposit-check/deposit-check.component";

let routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'account/:id',
    component: AccountComponent
  },

  {
    path: 'account/:id/edit',
    component: AccountEditComponent
  },

  {
    path: 'transfer',
    component: TransferComponent
  },

  {
    path: 'transaction',
    component: TransactionComponent
  },

  {
    path: 'transaction/:id',
    component: TransactionComponent
  },

  {
    path: 'newAccount',
    component: AccountCreationComponent
  },

  {
    path: 'deposit',
    component: DepositCheckComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
