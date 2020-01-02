import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '@environments/environment';
import { UserService } from './user.service';

declare const FB: any;

@Injectable()
export class FBAuthService {

    constructor(
        private readonly http: HttpClient,
        private readonly userService: UserService
    ) {
        // tslint:disable
        FB.init({
        appId      : '1021313638227907',
        status     : false, // the SDK will attempt to get info about the current user immediately after init
        cookie     : false,  // enable cookies to allow the server to access
        // the session
        xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
        version    : 'v2.8' // use graph api version 2.5
        });
        // tslint:enable
    }

    public fbLogin() {
        return new Promise((resolve, reject) => {
        FB.login(result => {
            if (result.authResponse) {
            return this.http.post(`${environment.apiUrl}/auth/facebook`, {access_token: result.authResponse.accessToken})
                .toPromise()
                .then((response: any) => {
                    const token = response.headers.get('x-auth-token');
                    if (token) {
                        console.log('got token: ', token);
                        localStorage.setItem('id_token', token);
                    }
                    resolve(response);
                })
                .catch(() => reject());
            } else {
            reject();
            }
        }, {scope: 'public_profile,email'});
        });
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    isLoggedIn() {
        return new Promise((resolve, reject) => {
        this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
        });
    }

    getCurrentUser() {
        return this.userService.getCurrentUser().toPromise();
    }
}
