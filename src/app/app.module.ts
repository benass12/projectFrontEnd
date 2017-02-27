import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {RoutingModule} from "./routing.module";
import {AdminLoanComponent} from './admin-loan/admin-loan.component';
import {AdminLoanService} from "./admin-loan/admin-loan.service";
import { FormComponent } from './form/form.component';
import {LoginComponent} from "./login/login.component";
import {InputTextModule,DataTableModule, ButtonModule, SharedModule} from 'primeng/primeng';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoanComponent,
    FormComponent,
    LoginComponent,
    CalculatorComponent,
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
  providers: [AdminLoanService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
