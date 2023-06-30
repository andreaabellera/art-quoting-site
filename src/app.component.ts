import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <br>
    <painting src="./painting.jpg" title="Chocolate strawberry cake"></painting>
  `
})
export class AppComponent {}
