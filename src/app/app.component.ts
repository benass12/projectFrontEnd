import { Component } from '@angular/core';
import {LoginService} from "./login/login.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onLogout(){
    this.loginService.logout();
  }
  constructor(private loginService: LoginService)
  {

  }
}

