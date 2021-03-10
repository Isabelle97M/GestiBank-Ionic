import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrator, Agent } from '../models';
import { AdministratorService } from '../services/administrator.service';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.page.html',
  styleUrls: ['./add-staff.page.scss'],
})
export class AddStaffPage implements OnInit {

  role: string;
  agent: Agent;
  admin: Administrator;

  nom: string;
  prenom : string;
  phone : string;
  mail : string;
  matricule: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adminService: AdministratorService,
    private agentService: AgentService
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(
      params => {
        if(this.router.getCurrentNavigation().extras.state) {
          this.role = this.router.getCurrentNavigation().extras.state.role;
          console.log(this.role);
        }
      });

  }

  staffCreation(staff){
    
    switch(this.role){
      case this.role = "AGENT":
        this.agent = {
          name: this.nom,
          firstname: this.prenom,
          tel: this.phone,
          email: this.mail,
          role: this.role,
          matricule: this.matricule,
          password: " ",
        }
        this.agentService.addAgent(this.agent).subscribe(response => {
          console.log("Nouvel agent : " + this.agent);
        });
        break;

      case this.role = "ADMINISTRATOR":
        this.admin = {
          name: this.nom,
          firstname: this.prenom,
          tel: this.phone,
          email: this.mail,
          role: this.role,
          matricule: this.matricule,
          password: " ",
        }
        this.adminService.addAdmin(this.admin).subscribe(response => {
          console.log("Nouvel Admin : " + staff);
        });
        break;
      
      default:
        break;
    }
      
    
  }

}
