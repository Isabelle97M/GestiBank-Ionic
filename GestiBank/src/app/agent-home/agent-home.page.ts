import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.page.html',
  styleUrls: ['./agent-home.page.scss'],
})
export class AgentHomePage implements OnInit {

  customers: Customer[];
  customer:Customer;
  agentName : string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerServiceService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.agentName = this.router.getCurrentNavigation().extras.state.name;
        console.log(this.agentName);
      }
    });
    this.refresh();
  }

  customerValidation(customer){
    this.customer = {
      name: customer.name,
      firstname: customer.firstname,
      tel: customer.tel,
      email: customer.email,
      role: "CUSTOMER",
      status: "VALIDATED",
      account: customer.account,
      password: customer.password,
      agent: customer.agent,

    }
    //console.log(this.customer);
    this.customerService.customerValidation(this.customer).subscribe(response =>{
      //console.log("email : " + this.customer.password);
      this.refresh();
    })
  }

  refresh(){
    /*this.customerService.getAllCustomers().subscribe(data => {
      this.customers = (<Customer[]> data);*/
    this.customerService.getCustomersListByAgent(this.agentName).subscribe(data => {
      this.customers = (<Customer[]> data)
      console.log(this.customers);
    })
  }

  logout(){
    this.router.navigate(['connexion']);
  }

}
