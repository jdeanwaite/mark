import {TransactionType} from "../enums/transaction-type";

export class Transaction {

  type: TransactionType;
  amount: number;
  description: string;
  date: Date;

}