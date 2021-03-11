import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Agent, Customer } from '../models';
import { AgentService } from '../services/agent.service';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.page.html',
  styleUrls: ['./customer-update.page.scss'],
})
export class CustomerUpdatePage implements OnInit {

  nom: string;
  prenom: string;
  phone: string;
  mail: string;
  status: string;
  account: string; 
  agent: string;

  customer: Customer;
  public agents;
  public customerAgent;

  public kind;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerServiceService,
    private agentService : AgentService,
    public toastController: ToastController
  ) { }


  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      params => {
        if(this.router.getCurrentNavigation().extras.state) {
          this.customer = this.router.getCurrentNavigation().extras.state.customer;
          this.kind = this.router.getCurrentNavigation().extras.state.filter;
          console.log(this.customer);
        }
      });

    this.nom = this.customer.name;
    this.prenom = this.customer.firstname;
    this.phone = this.customer.tel;
    this.mail = this.customer.email;
    this.account = this.customer.account;
    this.agent = this.customer.agent;
   
    this.agentService.getAllAgents().subscribe( data =>{
      this.agents = (<Agent[]>data);
      //console.log(this.agents);
    })
      

  }

  updateCustomer(customer){

    this.customer = {
      name: this.nom,
      firstname: this.prenom,
      tel: this.phone,
      email: this.mail,
      status: this.customer.status,
      account: this.compteSelected(),
      agent: this.agentSelected(),
      password: this.customer.password,
      role: this.customer.role
    }
    this.customerService.putCustomer(this.customer).subscribe( response => {
      this.updateSuccessToast();
      this.router.navigate(['administrator-home']);
    });

  }

  async updateSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Le compte client a été modifié avec succès!',
      duration: 2000
    });
    toast.present();
  }  

  compteSelected(){
    return this.account;
  }

  agentSelected(){
    console.log(this.customerAgent);
    return this.customerAgent;
  }

}
