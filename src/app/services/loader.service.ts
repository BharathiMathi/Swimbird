import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  private loader = new BehaviorSubject<boolean>(false);
  loaderObservable = this.loader.asObservable();

  constructor() { }

  showLoader() {
    this.loader.next(true);
  }
  closeLoader() {
    this.loader.next(false);
  }
}
