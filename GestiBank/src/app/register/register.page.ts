import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
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
    private alertController: AlertController,
    public toastController: ToastController
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

    if(this.nom != null && this.prenom != null && this.phone != null && this.mail != null && this.compteSelected() != null){
      this.service.postCustomer(this.customer).subscribe(
        response => {
          //console.log(response)
          this.creationAlert();
          this.router.navigate(["home"]);
        }
      )
    } else {
      this.messageToasted();
    }
    

  }

  compteSelected(){
    return this.compte;
  }

  async creationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue chez GestiBank',
      message: `
      <ul>
        <li> Votre compte a été créé avec succès !</li>
        <li> Dès validation de votre compte, vous recevrez vos identifiants à l'adresse mail indiquée.</li>
      </ul> 
      `,
      buttons: ['OK']
    });
    await alert.present();
  }

  async messageToasted() {
    const toast = await this.toastController.create({
      message: "Merci de compléter tous les champs!",
      duration: 2000
    });
    toast.present();
  }

}
