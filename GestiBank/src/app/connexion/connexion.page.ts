import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from '../models';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  email :string;
  password: string;
  userInfos: User;

  constructor(
  private service : UserService,
  public router: Router,
  public toastController: ToastController,
  private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  connect(){
    if(this.email!=null && this.password!=null){
      this.service.userConnexion(this.email).subscribe(data =>{
        this.userInfos = <User>data;
        if(this.userInfos != null && this.password == this.userInfos.password){
          //console.log("Auth Réussie");
          let role = this.userInfos.role;
          let navigationExtras: NavigationExtras = {
            state: {
              name: this.userInfos.firstname + " " + this.userInfos.name
            }
          };
          switch(role){
            case role = "CUSTOMER":
              this.router.navigate(['tabs'], navigationExtras);
              break;
            case role = "AGENT":
              this.router.navigate(['agent-home'], navigationExtras);
              break;
            case role = "ADMINISTRATOR":
              this.router.navigate(['administrator-home'], navigationExtras);
              break;
            default:
              this.activatedRoute;
              break;
          }
          
        } else {
          this.messageToasted("Vos identifiants sont incorrects.");
          //console.log("Mot de passe incorrect !");
        }
        //console.log(this.userInfos);
      })

    } else {
      this.messageToasted("Merci de renseigner tous les champs !");
      //console.log("Merci de renseigner tous les champs !")
    }
  
  }
    
  async messageToasted(msg : string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}


