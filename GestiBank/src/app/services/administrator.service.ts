import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  dataBase = "http://127.0.0.1:90/admins/";

  constructor(private httpClient: HttpClient) { }

  getAllAdmins(){
    return this.httpClient.get(this.dataBase + 'list');
  }

  addAdmin(admin){
    return this.httpClient.post(this.dataBase + 'add', admin);
  }


}
