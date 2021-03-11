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

  details(admin){
    let detailsAdmin =`
    <ul>
        <li> Nom : ` + admin.name + `</li>
        <li> Prénom : `+ admin.firstname +`</li>
        <li> E-mail : ` + admin.email + `</li>
        <li> Téléphone : ` + admin.tel + `</li>
        <li> Matricule : `+ admin.matricule + `</li>
    </ul> 
    `
    this.infosAlert(detailsAdmin);
  }


  update(admin){

  }


  delete(admin){
    this.deleteAlert(admin);
  }

  async infosAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Détails Agent',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async deleteAlert(agent: Administrator) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Suppression Agent',
      message: 'Êtes-vous sûr de vouloir supprimer l\'agent suivant : ' + agent.name + " " + agent.firstname,
      buttons: [{
        text: 'ANNULER',
        role: 'cancel',
        cssClass: 'secondary',
      }, {
        text: 'OK',
        handler: () => {
          this.adminService.deleteAdmin(agent).subscribe(response => {
            console.log(agent.email + " " + "a bien été supprimé")
          this.refresh();
          });
        }
      }]
    });
    await alert.present();
  }

}
