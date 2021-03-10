import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentsListPageRoutingModule } from './agents-list-routing.module';

import { AgentsListPage } from './agents-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentsListPageRoutingModule
  ],
  declarations: [AgentsListPage]
})
export class AgentsListPageModule {}
