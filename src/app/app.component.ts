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
}
