import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private dataBase = "http://127.0.0.1:90/customers/";

  //customers/add

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(){
    return this.httpClient.get(this.dataBase + 'list');
  }

  getValidatedCustomers(){
    return this.httpClient.get(this.dataBase + 'waiting/list');
  }

  getWaitingCustomers(){
    return this.httpClient.get(this.dataBase + 'validated/list');
  }

  postCustomer(customer: Customer){
    return this.httpClient.post(this.dataBase + "add", customer);
  }

  putCustomer(customer){
    return this.httpClient.post(this.dataBase + 'update/' + ['email'], customer);
  }

  deleteCustomer(email: String){
    return this.httpClient.post(this.dataBase + 'update/' + ['email'], email);
  }

}
