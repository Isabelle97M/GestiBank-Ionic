import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  //public v = "TND";


  constructor(private httpClient: HttpClient) { }

  getQuotes(v){ 
    var dataBase = "http://api.currencylayer.com/live?access_key=eb0266e2105bab6851fd6d23635f04e4&currencies="+v+"&format=1/";
    return this.httpClient.get(dataBase);
  }

}
