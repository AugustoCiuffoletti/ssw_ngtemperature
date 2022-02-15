import { Component, VERSION } from '@angular/core';
import { OpenweatherService } from './openweather.service';

class tempCity {
  nome: string;
  valore: string;
  constructor (nome: string, valore: string) {
    this.nome=nome;
    this.valore=valore;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Temperature in Angular ' + VERSION.major;
  selezione: tempCity;
  cities: Array<string> = ['Torino','Milano','Genova'];
  constructor(private ows: OpenweatherService) { }
  refreshTemperature(itemName: string) {
    this.selezione = new tempCity(itemName, undefined);
    this.ows.getData(this.selezione.nome).subscribe({
      next: ( x: any ) => this.selezione.valore = x.main.temp,
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    });
 }
  clean() {
    this.selezione = undefined;
  }
}
