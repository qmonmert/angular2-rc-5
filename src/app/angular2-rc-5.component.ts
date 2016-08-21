import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'angular2-rc-5-app',
  styleUrls: ['angular2-rc-5.component.css'],
  template: `
    <md-toolbar color="accent">
      <button md-raised-button color="primary" [routerLink]="['/']">Component 1</button>
      <button md-raised-button color="primary" [routerLink]="['/component2']">Component 2</button>
      <span class="example-fill-remaining-space"></span>
      <span>{{title}}</span>
    </md-toolbar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class Angular2Rc5AppComponent {

  title:string = 'Angular2 RC-5';

}
