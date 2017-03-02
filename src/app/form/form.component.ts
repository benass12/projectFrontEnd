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
  loancode:string;
  loan: Loan;
  constructor(private service : FormService) { }
  customer:FormService;
  ngOnInit() {
  }
  submitinfo(loanamount:number, loanyear:number, loanmonth:string, loanday:number,
             name:string, surname:string, personalcode:number, documenttype:string, documentnumber:number, country:string, cord:string, address:string, numberfront1:string,
             number1:string, numberfront2:string, number2:string, email:string, inaftertaxes:number):void{
    console.log(name);
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

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.loancode = getRandomInt(100, 999).toString()+'-'+getRandomInt(100, 999).toString()+'-'+getRandomInt(100, 999).toString();
    console.log(this.loancode);


    if(!name){
      return;
    }
    else {

      this.service.create(loanamount, loanyear, loanmonth, loanday, name, surname, personalcode, documenttype, documentnumber, country, cord, address, numberfront1,
        number1, numberfront2, number2, email, inaftertaxes)
    //   .then(loan =>{
    //    this.service.push(loan)
    //   })
    // }


    // this.service.postForm(this.loan).subscribe((result) => {
    //   console.log("succes")})

//this.service.create(sum);

  }}}

