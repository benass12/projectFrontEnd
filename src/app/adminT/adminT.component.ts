import { Component, OnInit } from '@angular/core';
import {AdminLoanService} from "../admin-loan/admin-loan.service";
import {ActivatedRoute} from "@angular/router";
import {AdminTService} from "./admin-t.service";

@Component({
  selector: 'app-adminT',
  templateUrl: 'adminT.component.html',
  styleUrls: ['adminT.component.css']
})
export class AdminTComponent implements OnInit {


  error : any;
  param : string;
  loan : Loan;
  url: string = "https://frozen-hamlet-97469.herokuapp.com/view/";


  constructor(private admintService: AdminTService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.route.snapshot.queryParams["param"];
    console.log(this.param);
    this.getLoan();
  }


  getLoan() {
    this.admintService.getLoan(this.url.concat(this.param))
      .then(loans => {
        this.loan = loans
      })
      .catch(error => {
        this.error = error;
        console.log('error getting loans from server');
      });
  }

}
