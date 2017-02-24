import { Component } from '@angular/core';
import {AdminLoanService} from "./admin-loan.service";

@Component({
  selector: 'admin-loan',
  templateUrl: './admin-loan.component.html',
  styleUrls: ['./admin-loan.component.css']
})
export class AdminLoanComponent {

  loans: any;
  error: any;

  constructor(private adminLoanService: AdminLoanService) {
  }

  ngOnInit() {
    this.getLoans();
  }

  getLoans() {
    this.adminLoanService.getLoans()
      .then(loans => {
        this.loans = loans
      })

      .catch(error => {
      this.error = error;
      console.log('error getting loans from server');
    });
  };


}

