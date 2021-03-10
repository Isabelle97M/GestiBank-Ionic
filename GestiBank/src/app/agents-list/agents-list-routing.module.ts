import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsListPage } from './agents-list.page';

const routes: Routes = [
  {
    path: '',
    component: AgentsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsListPageRoutingModule {}
