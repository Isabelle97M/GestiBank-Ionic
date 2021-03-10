import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
