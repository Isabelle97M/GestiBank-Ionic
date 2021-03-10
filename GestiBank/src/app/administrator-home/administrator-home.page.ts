import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CustomerServiceService } from '../services/customer-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-administrator-home',
  templateUrl: './administrator-home.page.html',
  styleUrls: ['./administrator-home.page.scss'],
})
export class AdministratorHomePage implements OnInit {

  public name: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerServiceService,
    public modalController: ModalController
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      params => {
        if(this.router.getCurrentNavigation().extras.state) {
          this.name = this.router.getCurrentNavigation().extras.state.name;
        }
      });

  }


  customersList(){
    let navigationExtras: NavigationExtras = {
      state:{
        filter: 'all'
      }
    }
    this.router.navigate(['customers-list'], navigationExtras);
  }

  customersWaitingList(){
    let navigationExtras: NavigationExtras = {
      state:{
        filter: 'waiting'
      }
    }
    this.router.navigate(['customers-list'], navigationExtras);
  }

  agentsList(){
    this.router.navigate(['agents-list']);
  }


  adminsList(){
    this.router.navigate(['admins-list']);
  }

  addAdmin(){
    let navigationExtras: NavigationExtras = {
        state: {
          role: "ADMINISTRATOR"
        }
      };
    this.router.navigate(['add-staff'], navigationExtras);
  }

  addAgent(){
    let navigationExtras: NavigationExtras = {
      state: {
        role: "AGENT"
      }
    };
    this.router.navigate(['add-staff'], navigationExtras);
  }

  
}
