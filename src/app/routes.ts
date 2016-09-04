import { provideRouter, RouterConfig } from '@angular/router';

import { MyComponent1Component } from './my-component-1';
import { MyComponent2Component } from './my-component-2';
import { PageNotFoundComponent } from './page-not-found';

export const appRoutes: RouterConfig = [
	{ path: '',             component: MyComponent1Component },
	{ path: 'component2',   component: MyComponent2Component },
	{ path: '**',   		component: PageNotFoundComponent }
];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);
