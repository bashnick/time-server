import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Current time is: {{currentTime}}</h2>
    <h2>Time in GMT is: {{utcTime}}</h2>
  `
})
export class AppComponent  {
  currentTime: string;
  utcTime: string;
  constructor() {
    let d = new Date();
    this.currentTime = d.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
    this.utcTime = d.toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  };
}
