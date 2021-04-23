import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpenweatherService } from './openweather.service';
import { NotificaComponent } from './notifica/notifica.component';
import { NewcityComponent } from './newcity/newcity.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    HttpClientModule ],
  declarations: [ AppComponent, NotificaComponent, NewcityComponent ],
  bootstrap:    [ AppComponent ],
  providers: [OpenweatherService]
})
export class AppModule { }
