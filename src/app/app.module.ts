import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {RoutingModule} from "./routing.module";
import {AdminLoanComponent} from './admin-loan/admin-loan.component';
import {AdminLoanService} from "./admin-loan/admin-loan.service";


@NgModule({
  declarations: [
    AppComponent,
    AdminLoanComponent
  ],
  imports: [
    RoutingModule,
    HttpModule,
    BrowserModule

  ],
  providers: [AdminLoanService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
