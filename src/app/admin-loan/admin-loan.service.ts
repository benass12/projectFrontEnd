import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminLoanService {

  constructor(private http: Http) { }


  getLoans(): Promise<any> {
    return this.http.get("https://frozen-hamlet-97469.herokuapp.com/loans")
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('Klaida', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

export interface Loan {
  amount;
  fullname;
  status;
  date;
}

