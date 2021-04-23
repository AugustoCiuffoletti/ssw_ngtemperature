import { Component, Input, OnInit } from '@angular/core';
import { tempCity } from '../app.component'

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  @Input() selezioneC: tempCity;
  constructor() { }
  clean() {
    this.selezioneC.nome = undefined;
  }
  ngOnInit() {
  }
}