import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorHomePage } from './administrator-home.page';

const routes: Routes = [
  {
    path: '',
    component: AdministratorHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorHomePageRoutingModule {}
