import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

/**
 * HTTP Interceptor to add an Authorization header to all outgoing
 * request, if a token is set (i.e. the user is logged in).
 */
@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptor implements HttpInterceptor {
  /**
   * Creates a new instance of the interceptor and provides services.
   *
   * @param sessionService Used to retrive the token from the user's cookies
   */
  constructor(
    private readonly cookieService: CookieService
  ) {}

  /**
   * Adds the Authorization header if a user token is set in the cookies.
   *
   * @param request The original outgoing request
   * @param next The next HTTP handler to call with the original or modified request
   */
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      //tslint:disable
      const token = this.cookieService.get('token');
       // tslint:enable
      const newRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
        // Pass the cloned request instead of the original request to the next handle
      return next.handle(newRequest);
  }
}
