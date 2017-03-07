import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";

@Injectable()
export class LoginService {

  private loggedIn = false;
  private loan :Loan;

  constructor(private http: Http, private router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(details) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('RequestMethod', 'POST');

    return this.http
      .post(
        'https://frozen-hamlet-97469.herokuapp.com/login',
        JSON.stringify(details),
        { headers }
      )
      .map(res => res.json())
      .map(res => {
        if(res.token != null)
        {
          localStorage.setItem('auth_token', res.token);
          this.loggedIn = true;
          this.router.navigate(['./admin']);
        }
        else {
          alert("Invalid username or password");
        }
        return res.success;
      })

  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
