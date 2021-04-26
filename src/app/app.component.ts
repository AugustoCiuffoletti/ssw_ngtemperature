import { Component, VERSION } from '@angular/core';

class tempCity {
  nome: string;
  valore: string;
  constructor(nome: string, valore: string) {
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
  selezionata: string;
  cities: Array<tempCity> = [
    new tempCity('Torino','14'),
    new tempCity('Milano','15'), 
    new tempCity('Genova','18')
  ];
  seleziona(name: string) {
	  this.selezionata = name;
  }
  clean() {
    this.selezionata=undefined;
  }
}
