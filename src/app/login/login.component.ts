import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {
  }


  onSubmit(event, username, password) {
    event.preventDefault();

    this.loginService.login(new Admin(username, password)).subscribe((result) => {
      if (result) {
        this.router.navigate(['/admin']);
      }
    });

  }


}

class Admin{

  constructor(username, password)
  {
    this.username = username;
    this.password = password;
  }

  username: string;
  password: string;
  token: string;
}
