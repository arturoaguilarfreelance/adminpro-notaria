import {RouterModule, Routes, Router } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
