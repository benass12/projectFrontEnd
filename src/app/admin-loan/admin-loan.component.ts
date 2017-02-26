import { Component } from '@angular/core';
import {AdminLoanService} from "./admin-loan.service";

@Component({
  selector: 'admin-loan',
  templateUrl: './admin-loan.component.html',
  styleUrls: ['./admin-loan.component.css']
})
export class AdminLoanComponent {

  loans: any[] = [{
    "amount": 150000,
    "name": 'Vilius Zukauskas',
    "status": 'Confirmed',
    "date": '2017-02-25'
  },
    {
      "amount": 50000,
      "name": 'Mykolas kazkoks',
      "status": 'Rejected',
      "date": '2015-02-25'
    }
    ,
    {
      "amount": 1000,
      "name": 'Vardenis pavardenis',
      "status": 'Patvirtinta',
      "date": '2016-01-27'
    }];

  cols: any[] = [
    {field: 'amount', header: 'Amount', sortable: true},
    {field: 'name', header: 'Name'},
    {field: 'status', header: 'Status'},
    {field: 'date', header: 'Date'}
  ];

  error: any;
  data: any;


  constructor(private adminLoanService: AdminLoanService) {
    this.length = this.rows.length;
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


  public rows : any = [{
    "amount": 150000,
    "name": 'Vilius Zukauskas',
    "status": 'Confirmed',
    "date": '2017-02-25'
  },
    {
      "amount": 50000,
      "name": 'Mykolas kazkoks',
      "status": 'Rejected',
      "date": '2015-02-25'
    }
    ,
    {
      "amount": 1000,
      "name": 'Vardenis pavardenis',
      "status": 'Patvirtinta',
      "date": '2016-01-27'
    }];

  public length:number = 0;

  public config:any = {
    paging: true,
    className: ['table-striped', 'table-bordered']
  };








}




