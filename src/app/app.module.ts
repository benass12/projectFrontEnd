import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {RoutingModule} from "./routing.module";
import {AdminLoanComponent} from './admin-loan/admin-loan.component';
import {AdminLoanService} from "./admin-loan/admin-loan.service";
import { FormComponent } from './form/form.component';
import {LoginComponent} from "./login/login.component";
import {InputTextModule,DataTableModule, ButtonModule, SharedModule} from 'primeng/primeng';
import { CalculatorComponent } from './calculator/calculator.component';
import {LoginService} from "./login/login.service";
import {LoggedInGuard} from "./login/logged-in.guard";
import {InformationComponent} from "./information/information.component";
import {HomeComponent} from "./home/home.component";
import {AdminTComponent} from "./adminT/adminT.component";


@NgModule({
  declarations: [
    AppComponent,
    AdminLoanComponent,
    FormComponent,
    LoginComponent,
    CalculatorComponent,
    InformationComponent,
    HomeComponent,
    AdminTComponent

  ],
  imports: [
    RoutingModule,
    HttpModule,
    ButtonModule,
    BrowserModule,
    InputTextModule,
    DataTableModule,
    SharedModule
  ],
  providers: [AdminLoanService, LoginService, LoggedInGuard],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
