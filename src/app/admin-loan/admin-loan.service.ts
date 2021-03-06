import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

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



  editLoan(details) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('RequestMethod', 'POST');

    return this.http
      .post(
        'https://frozen-hamlet-97469.herokuapp.com/loans/edit',
        JSON.stringify(details),
        { headers }
      )
      .map(res => res.json())
      .map((res)=>{
        return res.success
      })
  }




  private handleError(error: any): Promise<any> {
    console.error('Klaida', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}






