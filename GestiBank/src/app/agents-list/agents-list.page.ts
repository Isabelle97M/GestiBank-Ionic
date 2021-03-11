import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Agent } from '../models';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agents-list',
  templateUrl: './agents-list.page.html',
  styleUrls: ['./agents-list.page.scss'],
})
export class AgentsListPage implements OnInit {

  agents : Agent[];
  contentMsg: string;

  constructor(
    private agentService: AgentService,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.agentService.getAllAgents().subscribe(data => {
      this.agents = (<Agent[]> data);
      //console.log(data);
    })
  }

  details(agent){
    let detailsAgent =`
    <ul>
        <li> Nom : ` + agent.name + `</li>
        <li> Prénom : `+ agent.firstname +`</li>
        <li> E-mail : ` + agent.email + `</li>
        <li> Téléphone : ` + agent.tel + `</li>
        <li> Matricule : `+ agent.matricule + `</li>
    </ul> 
    `
    this.infosAlert(detailsAgent);
  }


  update(agent){

  }


  delete(agent){
    this.deleteAlert(agent);
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

  async deleteAlert(agent: Agent) {
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
          this.agentService.deleteAgent(agent).subscribe(response => {
            console.log(agent.email + " " + "a bien été supprimé")
          this.refresh();
          });
        }
      }]
    });
    await alert.present();
  }


}
