import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FakesvcService {
  constructor() {}
  public getData(CityName: string): Observable<Object> {
    return new Observable(subscriber => {
      subscriber.next({ data: [{ temp: 12 }] });
      subscriber.complete();
    });
  }
}
