import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2Rc5AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2Rc5AppComponent);
