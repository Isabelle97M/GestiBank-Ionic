import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
compte: string;

  constructor(
    private service : CustomerServiceService, 
    private router : Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }

  CustomerCreation(){
      this.customer = {
      name: this.nom,
      firstname: this.prenom,
      tel: this.phone,
      email: this.mail,
      role: "CUSTOMER",
      status: "WAITING",
      account: this.compteSelected(),
      password: " ",
      agent: " "
    }

    this.service.postCustomer(this.customer).subscribe(
      response => {
        //console.log(response)
        this.creationAlert();
        this.router.navigate(["home"]);
      }
    )

  }

  compteSelected(){
    return this.compte;
  }

  async creationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue chez GestiBank',
      message: 'Votre compte a été créé avec succès !' 
      + '\n' 
      + 'Vous pouvez déjà vous connecter sur votre espace client.'
      + '\n'
      + 'Connectez-vous sur votre adresse mail afin de récupérer vos identifiants.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
