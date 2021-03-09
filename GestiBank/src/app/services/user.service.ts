import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public dataBase = "http://127.0.0.1:90/user/";

  constructor(private httpClient : HttpClient) { }

  userConnexion(userEmail: string){
    return this.httpClient.get(this.dataBase + userEmail);
  }

}
