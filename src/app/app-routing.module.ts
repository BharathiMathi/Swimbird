import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { ResponsivePageComponent } from './components/responsive-page/responsive-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'responsive-elements',
    pathMatch: 'full',
  },
  {
    path: 'responsive-elements',
    component: ResponsivePageComponent,
  },
  {
    path: 'account',
    component: AccountSummaryComponent,
  },
  {
    path: '**',
    redirectTo: 'responsive-elements',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
