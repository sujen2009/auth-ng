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
                console.log(user);
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                document.cookie = `token=${user.token}; Domain=.starter.openshift-online.com;`;
                return user;
            }));
    }

    register(userParams: { username: string, password: string, firstName: string, lastName: string }) {
        return this.http.post<any>(`${environment.apiUrl}/auth/register`, userParams)
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                document.cookie = `token=${user.token}; Domain=.starter.openshift-online.com;`;
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
