import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { LoginComponent } from './views/login/login.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthHeaderInterceptor } from './interceptors/auth-header.interceptor';
import { CookieModule } from 'ngx-cookie';
import { AuthenticationGuard } from './guards/authGuard';
import {TranslateModule, TranslateService, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { ErrorPopupComponent } from './components/error-popup/error-popup.component';;
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component'

const materialModules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ...materialModules,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        CookieModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ErrorHandlerComponent,
        RegisterComponent,
        ErrorPopupComponent
,
        PrivacyPolicyComponent    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true },
        AuthenticationGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private readonly translate: TranslateService
    ) {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
 }
