import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {
  apiKey: string = "d0475be3a1967b1b49dfc02c8128001a";
  URL: string  =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  this.apiKey +
  "&units=metric&q=";
  constructor(private http: HttpClient) { }

  public getData(CityName: string): Observable<string> {
    return this.http.get<string>(this.URL+CityName);
  }
}