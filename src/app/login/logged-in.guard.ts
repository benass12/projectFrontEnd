import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';
import {LoginComponent} from "./login.component";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: LoginService) {
  }

  canActivate() {
    return this.user.isLoggedIn();
  }
}
