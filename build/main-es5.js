(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error-handler/error-handler.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error-handler/error-handler.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<error-popup *ngIf=\"errors\">\r\n    <div *ngFor=\"let item of errors | keyvalue\">\r\n        {{ item.key === 'custom' ? item.value : ('errors.' + item.key) | translate }}\r\n    </div>\r\n</error-popup>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error-popup/error-popup.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error-popup/error-popup.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-element\" >\r\n    <div class=\"error-message bottom\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Login</mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n        </mat-form-field>\n      </p>\n\n      <p>\n        <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n        </mat-form-field>\n      </p>\n\n      <p *ngIf=\"error\" class=\"error\">\n        {{ error }}\n      </p>\n\n      <div class=\"button\">\n        <button type=\"submit\" mat-button>Login</button>\n      </div>\n\n      <div>\n        <a routerLink=\"/register\">Register</a>\n      </div>\n\n      <div>\n        <a (click)=\"loginWithFb()\">Login with facebook</a>\n      </div>\n      <div>\n        <a routerLink=\"/privacy-policy\">Privacy policy</a>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/privacy-policy/privacy-policy.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/privacy-policy/privacy-policy.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Privacy Notice</h1>\n    <p>\n        This privacy notice discloses the privacy practices for Zawadi. This privacy notice applies solely to information collected by this website. It will notify you of the following:\n    </p>\n    <ul>\n        <li>\n            What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.\n        </li>\n        <li>\n            What choices are available to you regarding the use of your data.\n        </li>\n        <li>\n            The security procedures in place to protect the misuse of your information.\n        </li>\n        <li>\n        How you can correct any inaccuracies in the information.\n        </li>\n    </ul>\n    <h3>\n        Information Collection, Use, and Sharing\n    </h3>\n    <p>\n    We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.\n    </p>\n    <p>\n    We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.\n    </p>\n    <p>\n    Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.\n    </p>\n    <h3>\n        Your Access to and Control Over Information\n    </h3>\n    <p>\n    You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:\n    </p>\n    <ul>\n        <li>\n            See what data we have about you, if any.\n        </li>\n        <li>\n            Change/correct any data we have about you.\n        </li>\n        <li>\n            Have us delete any data we have about you.\n        </li>\n        <li>\n            Express any concern you have about our use of your data.\n        </li>\n    </ul>\n    <h3>\n        Security\n    </h3>\n    <p>\n        We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.\n    </p>\n    <p>\n        Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for \"https\" at the beginning of the address of the Web page.\n    </p>\n    <p>\n        While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.\n    </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>Register</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Firstname\" formControlName=\"firstName\">\n          </mat-form-field>\n          <auth-error-handler *ngIf=\"firstName.touched || submitted\" [errors]=\"firstName.errors\"></auth-error-handler>\n        </p>\n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Lastname\" formControlName=\"lastName\">\n          </mat-form-field>\n          <auth-error-handler *ngIf=\"lastName.touched || submitted\" [errors]=\"lastName.errors\"></auth-error-handler>\n        </p>\n        <p>\n          <mat-form-field>\n            <input type=\"email\" matInput placeholder=\"Email\" formControlName=\"email\">\n          </mat-form-field>\n          <auth-error-handler *ngIf=\"email.touched || submitted\" [errors]=\"email.errors\"></auth-error-handler>\n        </p>\n        <p>\n          <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n          </mat-form-field>\n          <auth-error-handler *ngIf=\"username.touched || submitted\" [errors]=\"username.errors\"></auth-error-handler>\n        </p>\n        <p>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n          </mat-form-field>\n          <auth-error-handler *ngIf=\"password.touched || submitted\" [errors]=\"password.errors\"></auth-error-handler>\n        </p>\n        <p>\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\n          </mat-form-field>\n          <auth-error-handler *ngIf=\"confirmPassword.touched || submitted\" [errors]=\"confirmPassword.errors\"></auth-error-handler>\n        </p>\n        <p *ngIf=\"error\" class=\"error\">\n          {{ error }}\n        </p>\n  \n        <div class=\"button\">\n          <button type=\"submit\" mat-button>Register</button>\n        </div>\n  \n        <div>\n          <a routerLink=\"/login\">back</a>\n      </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  "

/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/auth", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            console.log(user);
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            document.cookie = "token=" + user.token + "; Domain=.starter.openshift-online.com;";
            return user;
        }));
    };
    AuthenticationService.prototype.register = function (userParams) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/auth/register", userParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            document.cookie = "token=" + user.token + "; Domain=.starter.openshift-online.com;";
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.prototype.parkings = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/parkings");
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/fbAuthService.ts":
/*!********************************************!*\
  !*** ./src/app/_services/fbAuthService.ts ***!
  \********************************************/
/*! exports provided: FBAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBAuthService", function() { return FBAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");





var FBAuthService = /** @class */ (function () {
    function FBAuthService(http, userService) {
        this.http = http;
        this.userService = userService;
        // tslint:disable
        FB.init({
            appId: '1021313638227907',
            status: false,
            cookie: false,
            // the session
            xfbml: false,
            version: 'v2.8' // use graph api version 2.5
        });
        // tslint:enable
    }
    FBAuthService.prototype.fbLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            FB.login(function (result) {
                if (result.authResponse) {
                    return _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/auth/facebook", { access_token: result.authResponse.accessToken })
                        .toPromise()
                        .then(function (response) {
                        var token = response.headers.get('x-auth-token');
                        if (token) {
                            console.log('got token: ', token);
                            localStorage.setItem('id_token', token);
                        }
                        resolve(response);
                    })
                        .catch(function () { return reject(); });
                }
                else {
                    reject();
                }
            }, { scope: 'public_profile,email' });
        });
    };
    FBAuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
    };
    FBAuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getCurrentUser().then(function (user) { return resolve(true); }).catch(function () { return reject(false); });
        });
    };
    FBAuthService.prototype.getCurrentUser = function () {
        return this.userService.getCurrentUser().toPromise();
    };
    FBAuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    FBAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], FBAuthService);
    return FBAuthService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getCurrentUser = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user/current");
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/error-handler/error-handler.component */ "./src/app/components/error-handler/error-handler.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/auth-header.interceptor */ "./src/app/interceptors/auth-header.interceptor.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _guards_authGuard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/authGuard */ "./src/app/guards/authGuard.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/error-popup/error-popup.component */ "./src/app/components/error-popup/error-popup.component.ts");
/* harmony import */ var _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/privacy-policy/privacy-policy.component */ "./src/app/views/privacy-policy/privacy-policy.component.ts");


















;

var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule(translate) {
        this.translate = translate;
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
    AppModule.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ], materialModules, [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["appRoutingModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_12__["CookieModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })
            ]),
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerComponent"],
                _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_17__["ErrorPopupComponent"],
                _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyPolicyComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthHeaderInterceptor"], multi: true },
                _guards_authGuard__WEBPACK_IMPORTED_MODULE_13__["AuthenticationGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/register/register.component */ "./src/app/views/register/register.component.ts");
/* harmony import */ var _guards_authGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/authGuard */ "./src/app/guards/authGuard.ts");
/* harmony import */ var _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/privacy-policy/privacy-policy.component */ "./src/app/views/privacy-policy/privacy-policy.component.ts");





var routes = [
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        canActivate: [_guards_authGuard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    },
    {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
        canActivate: [_guards_authGuard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    },
    {
        path: 'privacy-policy',
        component: _views_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyComponent"]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/error-handler/error-handler.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/error-handler/error-handler.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host div {\n  margin-bottom: 10px;\n}\n:host div:last-child {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1oYW5kbGVyL0Q6XFxQcm9qZWN0c1xcbm9kZS1qc1xcYXV0aC1uZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXJyb3ItaGFuZGxlclxcZXJyb3ItaGFuZGxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1oYW5kbGVyL2Vycm9yLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1oYW5kbGVyL2Vycm9yLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOmhvc3QgZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/error-handler/error-handler.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/error-handler/error-handler.component.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerComponent", function() { return ErrorHandlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorHandlerComponent = /** @class */ (function () {
    function ErrorHandlerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorHandlerComponent.prototype, "errors", void 0);
    ErrorHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-error-handler',
            template: __webpack_require__(/*! raw-loader!./error-handler.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error-handler/error-handler.component.html"),
            styles: [__webpack_require__(/*! ./error-handler.component.scss */ "./src/app/components/error-handler/error-handler.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorHandlerComponent);
    return ErrorHandlerComponent;
}());



/***/ }),

/***/ "./src/app/components/error-popup/error-popup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/error-popup/error-popup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .error-element {\n  position: relative;\n  clear: both;\n  min-height: 38px;\n}\n:host .error-message {\n  background-color: red;\n  color: #fff;\n  padding: 7px 15px;\n  font-size: 15px;\n}\n:host .error-message:before {\n  content: \" \";\n  position: absolute;\n  border: 7px solid transparent;\n}\n:host .error-message.bottom {\n  position: relative;\n  left: 0;\n  top: 7px;\n  display: inline-block;\n}\n:host .error-message.bottom:before {\n  border-bottom-color: red;\n  top: -14px;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1wb3B1cC9EOlxcUHJvamVjdHNcXG5vZGUtanNcXGF1dGgtbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVycm9yLXBvcHVwXFxlcnJvci1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1wb3B1cC9lcnJvci1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7QUNGTjtBRElNO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1wb3B1cC9lcnJvci1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuZXJyb3ItZWxlbWVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgICYuYm90dG9tIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJlZDtcclxuICAgICAgICB0b3A6IC0xNHB4O1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuZXJyb3ItZWxlbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY2xlYXI6IGJvdGg7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG59XG46aG9zdCAuZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG46aG9zdCAuZXJyb3ItbWVzc2FnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5lcnJvci1tZXNzYWdlLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IC5lcnJvci1tZXNzYWdlLmJvdHRvbTpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZWQ7XG4gIHRvcDogLTE0cHg7XG4gIGxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/error-popup/error-popup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/error-popup/error-popup.component.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPopupComponent", function() { return ErrorPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPopupComponent = /** @class */ (function () {
    function ErrorPopupComponent() {
    }
    ErrorPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error-popup',
            template: __webpack_require__(/*! raw-loader!./error-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error-popup/error-popup.component.html"),
            styles: [__webpack_require__(/*! ./error-popup.component.scss */ "./src/app/components/error-popup/error-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPopupComponent);
    return ErrorPopupComponent;
}());



/***/ }),

/***/ "./src/app/guards/authGuard.ts":
/*!*************************************!*\
  !*** ./src/app/guards/authGuard.ts ***!
  \*************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var AuthenticationGuard = /** @class */ (function () {
    /**
     * Holds the URL component for the ID App.
     */
    function AuthenticationGuard(cookieService, userService) {
        this.cookieService = cookieService;
        this.userService = userService;
    }
    /**
     * Verifies that the current user is properly authenticated, as well as authorized
     *
     */
    AuthenticationGuard.prototype.canActivate = function (route) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token, currentUser, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = this.cookieService.get('token');
                        if (!token) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.getCurrentUser().toPromise()];
                    case 2:
                        currentUser = _a.sent();
                        if (currentUser && currentUser.id) {
                            this.redirectToMainApp();
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, true];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Determines the URL of the ID App to redirect to, in case the user is
     * not authenticated yet.
     *
     */
    AuthenticationGuard.prototype.redirectToMainApp = function () {
        var redirectUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mainApp;
        location.replace(redirectUrl);
    };
    AuthenticationGuard.ctorParameters = function () { return [
        { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/interceptors/auth-header.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/interceptors/auth-header.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");



/**
 * HTTP Interceptor to add an Authorization header to all outgoing
 * request, if a token is set (i.e. the user is logged in).
 */
var AuthHeaderInterceptor = /** @class */ (function () {
    /**
     * Creates a new instance of the interceptor and provides services.
     *
     * @param sessionService Used to retrive the token from the user's cookies
     */
    function AuthHeaderInterceptor(cookieService) {
        this.cookieService = cookieService;
    }
    /**
     * Adds the Authorization header if a user token is set in the cookies.
     *
     * @param request The original outgoing request
     * @param next The next HTTP handler to call with the original or modified request
     */
    AuthHeaderInterceptor.prototype.intercept = function (request, next) {
        //tslint:disable
        var token = this.cookieService.get('token');
        // tslint:enable
        var newRequest = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(newRequest);
    };
    AuthHeaderInterceptor.ctorParameters = function () { return [
        { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
    ]; };
    AuthHeaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AuthHeaderInterceptor);
    return AuthHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  margin: 100px 0px;\n}\n\n.mat-form-field {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center;\n}\n\n.error {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n\n.button {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vRDpcXFByb2plY3RzXFxub2RlLWpzXFxhdXRoLW5nL3NyY1xcYXBwXFx2aWV3c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUsXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _services_fbAuthService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/fbAuthService */ "./src/app/_services/fbAuthService.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, fbAuthService, authenticationService) {
        this.route = route;
        this.router = router;
        this.fbAuthService = fbAuthService;
        this.authenticationService = authenticationService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            // window.location.href = environment.mainApp;
        }, function (error) {
            _this.error = error.error.message;
            _this.loading = false;
        });
    };
    LoginComponent.prototype.loginWithFb = function () {
        this.fbAuthService.fbLogin().then(function () {
            console.log('User has been logged in');
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_fbAuthService__WEBPACK_IMPORTED_MODULE_6__["FBAuthService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/login/login.component.html"),
            providers: [_services_fbAuthService__WEBPACK_IMPORTED_MODULE_6__["FBAuthService"]],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_fbAuthService__WEBPACK_IMPORTED_MODULE_6__["FBAuthService"],
            _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/privacy-policy/privacy-policy.component.less":
/*!********************************************************************!*\
  !*** ./src/app/views/privacy-policy/privacy-policy.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/views/privacy-policy/privacy-policy.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/privacy-policy/privacy-policy.component.ts ***!
  \******************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! raw-loader!./privacy-policy.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.less */ "./src/app/views/privacy-policy/privacy-policy.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/views/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  margin: 100px 0px;\n}\n:host p {\n  min-width: 400px;\n}\n.mat-form-field {\n  width: 100%;\n  min-width: 300px;\n}\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center;\n}\n.error {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n.button {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVnaXN0ZXIvRDpcXFByb2plY3RzXFxub2RlLWpzXFxhdXRoLW5nL3NyY1xcYXBwXFx2aWV3c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7O0VBRUUsYUFBQTtFQUNBLHVCQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwMHB4IDBweDtcclxuXHJcbiAgcCB7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSxcclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMDBweCAwcHg7XG59XG46aG9zdCBwIHtcbiAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXJyb3Ige1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    };
    Object.defineProperty(RegisterComponent.prototype, "formData", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.password.value !== this.confirmPassword.value) {
            this.confirmPassword.setErrors({ 'passwordMismatch': true });
        }
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        var param = {
            username: this.formData.username.value,
            password: this.formData.password.value,
            firstName: this.formData.firstName.value,
            email: this.formData.email.value,
            lastName: this.formData.lastName.value,
        };
        this.authenticationService.register(param)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "firstName", {
        get: function () {
            return this.registerForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registerForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "lastName", {
        get: function () {
            return this.registerForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () {
            return this.registerForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/views/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // apiUrl: 'http://localhost:8080'
    apiUrl: 'http://parking-node-parking-node.apps.us-west-1.starter.openshift-online.com',
    mainApp: 'http://parking-ng-git-sujenshr.apps.us-east-1.starter.openshift-online.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\node-js\auth-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map