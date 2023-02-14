import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TellerPage } from './teller.page';

const routes: Routes = [
  {
    path: '',
    component: TellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TellerPageRoutingModule {}
