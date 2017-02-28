import { Component } from '@angular/core';
import {AdminLoanService} from "./admin-loan.service";
import {Message} from "primeng/components/common/api";

@Component({
  selector: 'admin-loan',
  templateUrl: './admin-loan.component.html',
  styleUrls: ['./admin-loan.component.css']
})
export class AdminLoanComponent {

  loans: Loan[];
  selectedRow: Loan;
  error: any;
  data: any;
  msgs: Message[];
  selectedLoan: Loan;

  cols: any[] = [
    {field: 'value', header: 'Amount', sortable: true},
    {field: 'name', header: 'Name'},
    {field: 'status', header: 'Status'},
    {field: 'date', header: 'Date'}
  ];


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

  onRowSelect(event) {
    this.selectedLoan = event.data;
  }

  public rejectRow(selection) {

  }

  public deleteRow(selection) {

      for ( var _i = 0; _i < this.loans.length; _i++) {

        if(selection === this.loans[_i])
        {
          delete this.loans[_i];
        }
      }
    }
  }








