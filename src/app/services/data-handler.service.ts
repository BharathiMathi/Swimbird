import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {  map } from 'rxjs/operators';
import { IAccountSummary, IAccountSummaryState } from '../model/data.model';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  private readonly apiUrl =
    'https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK';

  private dataSource = new BehaviorSubject<IAccountSummaryState>(
    {} as IAccountSummaryState
  );

  accountDataSubject$ = this.dataSource.asObservable();

  constructor(private http: HttpClient) {}

  fetchAllAccounts() {
    return this.http.get<IAccountSummary[]>(this.apiUrl).pipe(
      map((response) => this.sortResponseData(response))
    );
  }

  sortResponseData(response: IAccountSummary[],sortOrder:string='asc'):IAccountSummary[] {
    return response.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.balance - b.balance;
      }else{
        return b.balance - a.balance;
      }
    });
  }

  setDataSource({ sortingOrder, data }: IAccountSummaryState) {
    this.dataSource.next({ sortingOrder, data });
  }
}
