import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2Rc5AppComponent } from '../app/angular2-rc-5.component';

beforeEachProviders(() => [Angular2Rc5AppComponent]);

describe('App: Angular2Rc5', () => {
  it('should create the app',
      inject([Angular2Rc5AppComponent], (app: Angular2Rc5AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-rc-5 works!\'',
      inject([Angular2Rc5AppComponent], (app: Angular2Rc5AppComponent) => {
    expect(app.title).toEqual('angular2-rc-5 works!');
  }));
});
