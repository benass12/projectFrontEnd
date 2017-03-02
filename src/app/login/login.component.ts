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

  admin : Admin = new Admin();

  onSubmit(event, username : string, password : string) {

    event.preventDefault();

    this.admin.username = username;
    this.admin.password = password;
    this.loginService.login(this.admin).subscribe((result) => {
      this.router.navigate['/admin'];
    });
  }


}

class Admin{

  constructor() {}
  username: string;
  password: string;
  token: string;
}
