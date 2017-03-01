import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  private loggedIn = false;
  private loan :Loan;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(details) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('RequestMethod', 'POST');

    return this.http
      .post(
        'https://frozen-hamlet-97469.herokuapp.com/admin',
        {"username": "root","password":"root"},
        { headers }
      )
.map(res => res.json())
.map((res) => {
  if (res.token) {
          localStorage.setItem('auth_token', res.token);
          this.loggedIn = true;
        }
        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
