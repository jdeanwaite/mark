import {Transaction} from "./transaction";
import {TransactionType} from "../enums/transaction-type";

export class Account {
  name: string;
  balance: number;
  id?: number;
  transactions?: Transaction[];
}