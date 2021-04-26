import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { OpenweatherService } from "./openweather.service";


describe('Testing tests', () => {
  it('Vero è vero', () => expect(true).toBeTrue());
  it('Vero è falso', () => expect(true).toBeFalse());
});

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        AppComponent,
        { provide: OpenweatherService, useClass: OpenweatherService }
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

});
