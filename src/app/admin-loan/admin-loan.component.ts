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
  loan : Loan;
  selectedRow: Loan;
  error: any;
  data: any;
  msgs: Message[];
  public selectedLoan: Loan;

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

  public editLoan(loan)
  {
    this.adminLoanService.editLoan(loan).subscribe((result) => {
    });

  }


  public reviewLoan(event)
  {
    var url = "/adminT/?param=" + this.selectedRow.loancode;
    open(url);
  }

  public rejectRow()
  {
    this.selectedRow.status = "Disapproved";
    this.editLoan(this.selectedRow);
  }

  public submitRow(){
    this.selectedRow.status = "Approved";
    this.editLoan(this.selectedRow);
  }

}








