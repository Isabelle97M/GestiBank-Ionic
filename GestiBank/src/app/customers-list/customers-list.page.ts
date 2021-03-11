import { Component, OnInit } from '@angular/core';
import { Customer } from '../models';
import { CustomerServiceService } from '../services/customer-service.service';
import { AlertController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ok } from 'assert';
import { Button } from 'protractor';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.page.html',
  styleUrls: ['./customers-list.page.scss'],
})
export class CustomersListPage implements OnInit {

  customers : Customer[];
  contentMsg: string;
  public requestList;

  constructor(
    private customerService: CustomerServiceService,
    public alertController: AlertController,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      params => {
        if(this.router.getCurrentNavigation().extras.state) {
          this.requestList = this.router.getCurrentNavigation().extras.state.filter;
        }
      }); 

   this.refresh();
   
  }

  public details(customer){

    let detailsCustomer =`
    <ul>
        <li> Nom : ` + customer.name + `</li>
        <li> Prénom : `+ customer.firstname +`</li>
        <li> E-mail : ` + customer.email + `</li>
        <li> Téléphone : ` + customer.tel + `</li>
        <li> Statut : `+ customer.status + `</li>
        <li> Agent : `+ customer.agent + `</li>
    </ul> 
    `
    this.infosAlert(detailsCustomer);
  }

  public update(customer){
    let navigationExtras: NavigationExtras = {
      state: {
        customer: customer,
        filter: this.requestList
      }
    };
    this.router.navigate(['customer-update'], navigationExtras);
  }

  public delete(customer){
    this.deleteAlert(customer);
    
  }
  

  async infosAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Détails Client',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async deleteAlert(customer: Customer) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Suppressions Client',
      message: 'Êtes-vous sûr de vouloir supprimer le client suivant : ' + customer.name + " " + customer.firstname,
      buttons: [{
        text: 'ANNULER',
        role: 'cancel',
        cssClass: 'secondary',
      }, {
        text: 'OK',
        handler: () => {
          this.customerService.deleteCustomer(customer.email).subscribe(response => {
            console.log(customer.email + " " + "a bien été supprimé")
          this.refresh();
          });
        }
      }]
    });
    await alert.present();
  }


  refresh(){   
      
    switch(this.requestList){

      case this.requestList = "all":
        this.customerService.getAllCustomers().subscribe(data => {
          this.customers = (<Customer[]> data);
          //console.log(data);
        });
      break;

      case this.requestList = "waiting":
        this.customerService.getWaitingCustomers().subscribe(data => {
          this.customers = (<Customer[]> data);
          //console.log(data);
        });
      break;

    }
    
  }


}
