import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models';
import { CustomerServiceService } from '../services/customer-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
customer : Customer;
nom: string;
prenom : string;
phone : string;
mail : string;

  constructor(
    private service : CustomerServiceService, 
    private router : Router) { }

  ngOnInit() {
  }

  CustomerCreation(newCustomer){
      this.customer = {
      name: this.nom,
      firstname: this.prenom,
      tel: this.phone,
      email: this.mail,
      role: "CUSTOMER",
      status: "WAITING",
      password: " ",
    }

    this.service.postCustomer(this.customer).subscribe(
      response => {
        console.log(this.customer)
        this.router.navigate(["home"])
      }
    )

  }

}
