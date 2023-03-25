export interface IAccountSummary {
  id: string;
  accountId: string;
  bank: string;
  balance: number;
  currency: string;
}

export interface IAccountSummaryState{
  sortingOrder:string;
  data:IAccountSummary[]
}