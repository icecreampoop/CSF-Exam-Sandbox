import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTryComponent } from './components/first-try/first-try.component';
import { SecondTryComponent } from './components/second-try/second-try.component';
import { ThirdTryComponent } from './components/third-try/third-try.component';
import { WeatherComponentComponent } from './components/third-try/weather-component/weather-component.component';
import { CityComponentComponent } from './components/third-try/city-component/city-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTryComponent,
    SecondTryComponent,
    ThirdTryComponent,
    WeatherComponentComponent,
    CityComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
