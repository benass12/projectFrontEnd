import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  create(
    loanamount:number, loanyear:number, loanmonth:string, loanday:number, name:string, surname:string, personalcode:number, documenttype:string, documentnumber:number, country:string,cord:string, address:string, numberfront1:number,
    number1:number, numberfront2:number, number2:number, email:string, inaftertaxes:number
  ): Promise<any>{
    console.log("cj suveike");

    console.log(loanmonth);
    return this.http
      .post("https://frozen-hamlet-97469.herokuapp.com/loans/all",JSON.stringify ({
        value: loanamount,
        personalid: personalcode,
        docnumber: documentnumber,
        doctype: Number(documenttype),//netinka int string
        name: name,
        surname: surname,
        paymentday: loanday,
        termdate : String(loanyear) + "-" + String(loanmonth),
        country: country,
        city: cord,
        address: address,
        salarywithtaxes: inaftertaxes,
        email : email,
        phone1: String(numberfront1) + String(number1),
        phone2: String(numberfront2) + String(number2)

        // "income": 1500,
        // "spouse_id": true,
        // "spouse_name": "Monikute",
        // "spouse_surname": "Monce",
        // "spouse_personal_code": 48902034125
        // surname: surname,
        // personal_code: personal_code,
        // doc_type: doc_type,
        // doc_code: doc_code,
        // country: country,
        // city: city,
        // address: address,
        // phone_number: phone_number,
        // email: email,
        // salary: salary,
        // amount: amount,
        // term: term,
        // payment_day: payment_day
      }), {headers: this.headers})
      .toPromise()
      .then(
        res => res.json().data
      )
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
