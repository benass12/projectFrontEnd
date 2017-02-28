import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AdminLoanComponent} from "./admin-loan/admin-loan.component";
import {FormComponent} from "./form/form.component";
import {LoginComponent} from "./login/login.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {LoggedInGuard} from "./login/logged-in.guard";
import {InformationComponent} from "./information/information.component";
import {AdminTComponent} from "./adminT/adminT.component";
import {HomeComponent} from "./home/home.component";


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
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'adminT',
    component: AdminTComponent
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


