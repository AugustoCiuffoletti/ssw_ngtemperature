import { Component, VERSION } from "@angular/core";
import { OpenweatherService } from "./openweather.service";

export class tempCity {
  nome: string;
  valore: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Temperature in Angular " + VERSION.major;
  selezione: tempCity;
  cities: Array<string> = ["Torino", "Milano", "Genova"];
  constructor(private ows: OpenweatherService) {}
  refreshTemperature(itemName: string) {
    this.selezione = new tempCity();
    this.selezione.nome = itemName;
    this.ows
      .getData(this.selezione.nome)
      .subscribe(
        (x: any) => (this.selezione.valore = x.data[0].temp),
        err => console.error("Observer got an error: " + err)
      );
  }
  addCity(newCity: string) {
    this.cities.push(newCity);
  }
}
