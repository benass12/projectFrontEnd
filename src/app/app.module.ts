import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";
import {RoutingModule} from "./routing.module";
import {AdminLoanComponent} from './admin-loan/admin-loan.component';


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
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
