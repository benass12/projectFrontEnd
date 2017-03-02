import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  create(
    loanamount:number, loanyear:number, loanmonth:string, loanday:number, name:string, surname:string, personalcode:number, documenttype:string, documentnumber:number, country:string, cord:string, address:string, numberfront1:string,
    number1:string, numberfront2:string, number2:string, email:string, inaftertaxes:number
  ): Promise<any>{
    console.log("cj suveike");
    console.log(loanamount);
    console.log(loanyear);
    console.log(loanmonth);
    console.log(loanday);
    console.log(name);
    console.log(surname);
    console.log(personalcode);
    console.log(documenttype);
    console.log(documentnumber);
    console.log(country);
    console.log(cord);
    console.log(address);
    console.log(numberfront1);
    console.log(number1);
    console.log(numberfront2);
    console.log(number2);
    console.log(email);
    console.log(inaftertaxes);

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('RequestMethod', 'POST');
    return this.http
      .post("https://frozen-hamlet-97469.herokuapp.com/loans/all",JSON.stringify ({
        "value": loanamount,
        "personalid": personalcode,
        "docnumber": documentnumber,
        "doctype": documenttype,//Number(documenttype),//netinka int string
        "name": name,
        "surname": surname,
        "paymentday": loanday,
        "termdate" : "adsda",
        "country": country,
        "city": cord,
        "address": address,
        "salarywithtaxes": inaftertaxes,
        "email" : email,
        "phone1": "123 ",
        "phone2": "213"

        // value: 1115,
        // personalid: "",
        // docnumber: 2,
        // doctype: "1",//Number(documenttype),//netinka int string
        // name: "mikas ",
        // surname: "kada",
        // paymentday: "",
        // termdate : "",
        // country: "Lietuva",
        // city: "",
        // address: "Kentukio 30",
        // salarywithtaxes: "",
        // email : "Antanavicius@gmail.com",
        // phone1: "",
        // phone2: ""


      }), {headers: this.headers})
      .toPromise()
      .then(
        //
      )
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
