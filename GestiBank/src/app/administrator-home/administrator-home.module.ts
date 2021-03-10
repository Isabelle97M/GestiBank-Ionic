import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministratorHomePageRoutingModule } from './administrator-home-routing.module';

import { AdministratorHomePage } from './administrator-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministratorHomePageRoutingModule
  ],
  declarations: [AdministratorHomePage]
})
export class AdministratorHomePageModule {}
