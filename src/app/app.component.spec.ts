import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent, tempCity } from './app.component';
import { OpenweatherService } from "./openweather.service";
import { FakesvcService } from "./fakesvc.service";


describe('Testing tests', () => {
  it('should succeed', () => expect(true).toEqual(true));
  it('should fail', () => expect(true).toEqual(false));
});

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        AppComponent,
        { provide: OpenweatherService, useClass: FakesvcService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Temperature in Angular 11'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Temperature in Angular 11');
  });

  it('la proprietà selezione dovrebbe essere indefinita', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.selezione).toBeUndefined();
});

it('la proprietà cities dovrebbe contenere quella inserita con addCity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.addCity("Verona");
    expect(app.cities).toContain('Verona');
});

it('la proprietà selezione dovrebbe contenere città e temperatura corretti', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.refreshTemperature("Verona");
    expect(app.selezione).toEqual(new tempCity('Verona', 12));
});

});
