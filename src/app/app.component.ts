import { Component, VERSION } from '@angular/core';

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
  selezionata: string;
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
  seleziona(name: string) {
	  this.selezionata = name;
  }
  clean() {
    this.selezionata=undefined;
  }
}
