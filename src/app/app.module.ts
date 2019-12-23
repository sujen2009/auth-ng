import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { ErrorInterceptor } from './_helpers';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthHeaderInterceptor } from './interceptors/auth-header.interceptor';
import { CookieModule } from 'ngx-cookie';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        CookieModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginComponent
,
        RegisterComponent    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
