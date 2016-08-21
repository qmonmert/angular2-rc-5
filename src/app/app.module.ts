import { NgModule }                 from '@angular/core';

import { Angular2Rc5AppComponent }  from './angular2-rc-5.component';
import { MyComponent1Component }    from './my-component-1/my-component-1.component';
import { MyComponent2Component }    from './my-component-2/my-component-2.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

import { APP_ROUTER_PROVIDER }      from './routes';
import { MyService }                from './shared/my-service.service';
import { HTTP_PROVIDERS, Http }     from '@angular/http';

import { BrowserModule }            from '@angular/platform-browser';

import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';
import { RouterModule }             from '@angular/router';

import { MaterialModule }           from './material.module';

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
