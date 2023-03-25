import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { ResponsivePageComponent } from './components/responsive-page/responsive-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountSummaryComponent,
    ResponsivePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
