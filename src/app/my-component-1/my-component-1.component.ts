import { Component, OnInit }  from '@angular/core';

import { MyService }          from './../shared';

@Component({
  moduleId: module.id,
  selector: 'app-my-component-1',
  template: `
    <p>my-component-1 works!</p>
    <p>{{msgFromService}}</p>
  `
})
export class MyComponent1Component implements OnInit {

  msgFromService: string;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.msgFromService = this.myService.getTextFromMyService();
  }

}
