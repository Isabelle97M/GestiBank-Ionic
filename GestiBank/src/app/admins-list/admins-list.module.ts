import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminsListPageRoutingModule } from './admins-list-routing.module';

import { AdminsListPage } from './admins-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminsListPageRoutingModule
  ],
  declarations: [AdminsListPage]
})
export class AdminsListPageModule {}
