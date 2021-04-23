import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';describe

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
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
});

describe('Testing tests', () => {
  it('should succeed', () => expect(true).toEqual(true));
  it('should fail', () => expect(true).toEqual(false));
});