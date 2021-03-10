import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.page.html',
  styleUrls: ['./agent-home.page.scss'],
})
export class AgentHomePage implements OnInit {

  customers: any;
  customer:Customer;

  constructor(
    private router: Router,
    private customerService: CustomerServiceService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  customersList(){
    this.router.navigate(['customers-list']);
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
      agent: customer.agent
    }
    //console.log(this.customer);
    this.customerService.customerValidation(this.customer).subscribe(response =>{
      //console.log("MDP : " + this.customer.password);
    })
    this.refresh();
  }

  refresh(){
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = (<Customer[]> data);
      //console.log(data);
    })
  }

}
