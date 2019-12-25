import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../_services/user.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationGuard implements CanActivateChild {
  /**
   * Holds the URL component for the ID App.
   */

  constructor(
      private readonly cookieService: CookieService,
      private readonly userService: UserService
  ) { }

  /**
   * Verifies that the current user is properly authenticated, as well as authorized
   *
   */
  public async canActivateChild(route: ActivatedRouteSnapshot): Promise<boolean> {
    const token = this.cookieService.get('token');
    if (!token) {
      return true;
    }
    try {
      const currentUser: any = await this.userService.getCurrentUser().toPromise();
      if (currentUser && currentUser.id) {
        this.redirectToMainApp();
        return false;
      }
    } catch (error) {
      return true;
    }
    return true;
  }

  /**
   * Determines the URL of the ID App to redirect to, in case the user is
   * not authenticated yet.
   *
   */
  private redirectToMainApp(): void {
    const redirectUrl = `${environment.mainApp}`;
    location.replace(redirectUrl);
  }
}
