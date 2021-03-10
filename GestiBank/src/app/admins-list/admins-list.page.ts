import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Administrator } from '../models';
import { AdministratorService } from '../services/administrator.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.page.html',
  styleUrls: ['./admins-list.page.scss'],
})
export class AdminsListPage implements OnInit {

  admins : Administrator[];
  contentMsg: string;

  constructor(
    private adminService: AdministratorService,
    public alertController: AlertController,
    public router: Router 
  ) { }

  ngOnInit() {
    this.refresh();
  }  

  refresh(){
    this.adminService.getAllAdmins().subscribe(data => {
      this.admins = (<Administrator[]> data);
      //console.log(data);
    })
  }

}
