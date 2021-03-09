import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../models';
import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

  public myQuotes : number;
  public devise ;
  public montant: number = 0;
  public quotes; //: Quotes;
  public rate: number = 0;
  public resultat : number = 0;

  constructor(public http: HttpClient, private service : ConverterService) { }

  ngOnInit() {

  }

  /*clickF(){

    this.myQuotes = this.service.getQuotes("EUR");
    //console.log(this.myQuotes);

  }*/

  codeSelected(){
    //console.log(this.devise);
      this.service.getQuotes(this.devise).subscribe((data) => {
      this.quotes = (data['quotes']);
      var keys = Object.keys(this.quotes);
      var key = keys[0];
      //console.log(this.quotes[key]);
      this.myQuotes = (<number>this.quotes[key]);
    });;
    //console.log(this.myQuotes);
  }

  convert(){
    //console.log(this.myQuotes*this.montant);
    this.resultat = this.myQuotes*this.montant;
  }

}
