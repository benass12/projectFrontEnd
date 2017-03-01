import { Component, OnInit } from '@angular/core';
import {FormService} from "./form.service";
import {Form} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {
  loan: Loan;
  constructor(private service : FormService) { }
  customer:FormService;
  ngOnInit() {
  }
  submitinfo(loanamount:number, loanyear:number, loanmonth:string, loanday:number,
             name:string, surname:string, personalcode:number, documenttype:string, documentnumber:number, country:string, cord:string, address:string, numberfront1:number,
             number1:number, numberfront2:number, number2:number, email:string, inaftertaxes:number):void{
    // this.loan.loanamount = loanamount;
    // this.loan.loanyear = loanyear;
    // this.loan.loanmonth = loanmonth;
    // this.loan.loanday = loanday;
    // this.loan.name = name;
    // this.loan.surname = surname;
    // this.loan.personalcode = personalcode;
    // this.loan.documenttype = documenttype;
    // this.loan.documentnumber = documentnumber;
    // this.loan.country = country;
    // this.loan.cord = cord;
    // this.loan.address = address;
    // this.loan.numberfront1 = numberfront1;
    // this.loan.number1 = number1;
    // this.loan.numberfront2 = numberfront2;
    // this.loan.number2 = number2;
    // this.loan.email = email;
    // this.loan.inaftertaxes = inaftertaxes;
    //
    // console.log(this.loan);

    if(!name){
      return;
    }
    else {

      this.service.create(loanamount, loanyear, loanmonth, loanday, name, surname, personalcode, documenttype, documentnumber, country, cord, address, numberfront1,
        number1, numberfront2, number2, email, inaftertaxes)
      // .then(loan =>{
      //  this.service.post(loan)
      // })
    }

    //
    // this.service.postForm(this.loan).subscribe((result) => {
    //   console.log("succes")})

//this.service.create(sum);

  }}

