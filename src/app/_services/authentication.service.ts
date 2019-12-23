import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { CookieService } from 'ngx-cookie';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private http: HttpClient,
        private readonly cookieService: CookieService
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth`, { username, password })
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                this.cookieService.put('token', user.token, {
                    domain: '.starter.openshift-online.com'
                });
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    register(userParams: { username: string, password: string, firstName: string, lastName: string }) {
        return this.http.post<any>(`${environment.apiUrl}/auth/register`, userParams)
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(userParams.username + ':' + userParams.password);
                console.log('token', user.token);
                this.cookieService.put('token', user.token);
                this.cookieService.put('token', user.token, {
                    domain: 'parknepa.com.np'
                });
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    parkings() {
        return this.http.get(`${environment.apiUrl}/parkings`);
    }
}
