import {Injectable} from '@angular/core';
import {Account} from "../classes/account";
import {Transaction} from "../classes/transaction";
import {TransactionType} from "../enums/transaction-type";

@Injectable()
export class AccountService {

  constructor() {
  }

  getAccounts(): Account[] {

    let accounts: Account[];

    try {
      accounts = JSON.parse(localStorage["accounts"]);
    } catch (e) {
      accounts = [];
    }

    if (!accounts) {
      accounts = [];
    }

    return accounts;
  }

  getAccount(id: number): Account {
    let filteredAccounts = this.getAccounts().filter((account) => {
      return account.id == id;
    });

    if (filteredAccounts.length > 0) {
      return filteredAccounts[0];
    } else {
      return null;
    }
  }

  setAccount(account:Account) {
    if (isNaN(account.id)) {
      return;
    }

    let accounts = this.getAccounts();

    for (let index in accounts) {
      let currentAccount = accounts[index];
      if (account.id == currentAccount.id) {
        account.id = Number(account.id);
        accounts[index] = account;
      }
    }

    localStorage["accounts"] = JSON.stringify(accounts);
  }

  getNextIndex() {
    let nextIndex: number = localStorage["nextIndex"];

    if (!nextIndex || isNaN(nextIndex)) {
      nextIndex = 0;
    }

    let currentIndex = nextIndex;

    localStorage["nextIndex"] = ++nextIndex;

    console.log("index:", currentIndex);
    return currentIndex;
  }

  addAccount(account: Account) {
    let accounts = this.getAccounts();
    account.id = Number(this.getNextIndex());
    accounts.push(account);
    localStorage["accounts"] = JSON.stringify(accounts);
  }

  addTransaction(accountId: number, transaction: Transaction) {
    let accounts = this.getAccounts();
    let filteredAccounts = accounts.filter((account) => {
      return account.id == accountId;
    });

    if (filteredAccounts.length <= 0) {
      console.log("Account not found with id: ", accountId);
      return;
    }

    let account = filteredAccounts[0];

    console.log("Adding transaction:", transaction);
    account.transactions.push(transaction);
    console.log("Saving accounts:", accounts);
    localStorage["accounts"] = JSON.stringify(accounts);
  }

  getBalance(account: Account) {
    let total = 0.0;

    for (let i in account.transactions) {
      if (!account.transactions.hasOwnProperty(i)) continue;

      let transaction = account.transactions[i];

      switch (transaction.type) {
        case TransactionType.expense:
          total -= transaction.amount;
          break;
        case TransactionType.income:
          total += transaction.amount;
          break;
      }
    }

    return total;
  }

}
