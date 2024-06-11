import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTryComponent } from './components/first-try/first-try.component';
import { SecondTryComponent } from './components/second-try/second-try.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTryComponent,
    SecondTryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
