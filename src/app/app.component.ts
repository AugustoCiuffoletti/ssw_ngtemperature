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
  seleziona(itemName: string) {
    var trovato: Array<tempCity> = this.cities.filter(
      el => ( el.nome === itemName )
    );
    this.selezione = trovato[0];
  }
  clean() {
    this.selezione = undefined;
  }
}
