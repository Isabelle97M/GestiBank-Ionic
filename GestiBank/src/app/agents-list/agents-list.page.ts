import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Agent } from 'http';
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

}
