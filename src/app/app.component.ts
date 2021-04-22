import { Component, VERSION } from '@angular/core';
import { OpenweatherService } from './openweather.service';

class tempCity {
  nome: string;
  valore: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Temperature in Angular ' + VERSION.major;
  selezione: tempCity;
  cities: Array<tempCity> = [
    {
      nome: 'Torino',
      valore: '14'
    }, {
      nome: 'Milano',
      valore: '15'
    }, {
      nome: 'Genova',
      valore: '18'
    }
  ];
  constructor(private ows: OpenweatherService) { }
  refreshTemperature(itemName: string) {
    var trovato: Array<tempCity> = this.cities.filter(
      el => ( el.nome === itemName )
    );
    this.selezione = trovato[0];
    this.ows.getData(this.selezione.nome).subscribe(
      ( x: any ) => this.selezione.valore = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
 }
  clean() {
    this.selezione = undefined;
  }
}
