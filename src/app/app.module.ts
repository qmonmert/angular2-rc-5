import { NgModule }                 from '@angular/core';

import { Angular2Rc5AppComponent }  from './';
import { MyComponent1Component }    from './my-component-1';
import { MyComponent2Component }    from './my-component-2';
import { PageNotFoundComponent }    from './page-not-found';

import { APP_ROUTER_PROVIDER }      from './';
import { MyService }                from './';
import { HTTP_PROVIDERS, Http }     from '@angular/http';

import { BrowserModule }            from '@angular/platform-browser';

import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';
import { RouterModule }             from '@angular/router';

import { MaterialModule }           from './';

@NgModule({
    declarations: [
        Angular2Rc5AppComponent,
        MyComponent1Component,
        MyComponent2Component,
        PageNotFoundComponent
    ],
    providers: [
      APP_ROUTER_PROVIDER,
      HTTP_PROVIDERS,
      Http,
      MyService
    ],
    imports:      [
        BrowserModule,
        HttpModule, 
        FormsModule,
        RouterModule,
        MaterialModule
    ],
    bootstrap: [
        Angular2Rc5AppComponent
    ]
})
export class AppModule {}
