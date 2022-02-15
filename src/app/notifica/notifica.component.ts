import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  constructor() { }
  clean() {
    this.selezione = undefined;
  }
  ngOnInit() {
  }
}