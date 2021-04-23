import { Component, OnInit } from '@angular/core';
import { tempCity } from '../app.component'

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  constructor() { }
  clean() {
    this.selezione.nome = undefined;
  }
  ngOnInit() {
  }
}