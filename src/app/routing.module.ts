import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AdminLoanComponent} from "./admin-loan/admin-loan.component";
import {FormComponent} from "./form/form.component";
import {LoginComponent} from "./login/login.component";


const appRoutes: Routes = [
  {
    path: '',
    component: AdminLoanComponent
  },
  {
    path: 'admin',
    component: AdminLoanComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {
}


