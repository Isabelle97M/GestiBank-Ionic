import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from 'node:http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  
  dataBase = "http://127.0.0.1:90/agents/";

  constructor(private httpClient: HttpClient) { }

  getAllAgents(){
    return this.httpClient.get(this.dataBase + 'list');
  }

  addAgent(agent){
    return this.httpClient.post(this.dataBase + 'add', agent);
  }

  updateAgent(agent){
    return this.httpClient.put(this.dataBase + 'update/' + agent.email, agent);
  }

  deleteAgent(agent){
    return this.httpClient.delete(this.dataBase + 'delete/' + agent.email);
  }

}
