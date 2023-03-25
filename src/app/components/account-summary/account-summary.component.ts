import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAccountSummaryState } from 'src/app/model/data.model';
import { DataHandlerService } from 'src/app/services/data-handler.service';
import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit, OnDestroy {
  accountData: IAccountSummaryState = {} as IAccountSummaryState;
  subscription: Subscription = new Subscription();

  constructor(
    private dataHandlerSrc: DataHandlerService,
    private loaderSrc: LoaderService
  ) {}

  ngOnInit(): void {
    this.dataHandlerSrc.accountDataSubject$.subscribe((subjectResonse) => {
      if (subjectResonse.data?.length) {
        this.accountData = subjectResonse.data?.length
          ? subjectResonse
          : { sortingOrder: '', data: [] };
      }
    });
  }

  onFetchAccountData() {
    this.loaderSrc.showLoader();
    this.subscription = this.dataHandlerSrc
      .fetchAllAccounts()
      .pipe(
        catchError((error) => {
          this.loaderSrc.closeLoader();
          console.log('Fetch account api throwing error');
          throw new Error(JSON.stringify(error));
        })
      )
      .subscribe((response) => {
        this.dataHandlerSrc.setDataSource({
          sortingOrder: 'asc',
          data: response,
        });
        this.loaderSrc.closeLoader();
      });
  }

  sortTable() {
    const { sortingOrder, data } = this.accountData;
    let currentSortOrder = sortingOrder === 'asc' ? 'desc' : 'asc';
    const sortedData = this.dataHandlerSrc.sortResponseData(
      data,
      currentSortOrder
    );
    this.dataHandlerSrc.setDataSource({
      sortingOrder: currentSortOrder,
      data: sortedData,
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
