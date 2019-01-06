import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SalariesFormComponent} from './salaries-form/salaries-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MustBePositiveNumberWithMaximumTwoDecimalsDirective} from "./salaries-form/number.directive";

@NgModule({
  declarations: [
    AppComponent,
    SalariesFormComponent,
    MustBePositiveNumberWithMaximumTwoDecimalsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
