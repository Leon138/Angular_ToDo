import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isSwitchedOn = true;

  constructor() {}

  public changeBlackColor() {
    this.isSwitchedOn = !this.isSwitchedOn;
  }
}
