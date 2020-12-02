(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oauth2-oauth2-module"],{

/***/ "3Ve7":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/oauth2/oauth2-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: Oauth2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth2RoutingModule", function() { return Oauth2RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oauth2-callback.component */ "qH7D");
/* harmony import */ var _oauth2_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oauth2-login.component */ "DHgJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var routes = [
    {
        path: '',
        component: _oauth2_login_component__WEBPACK_IMPORTED_MODULE_3__["OAuth2LoginComponent"],
    },
    {
        path: 'callback',
        component: _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_2__["OAuth2CallbackComponent"],
    },
];
var Oauth2RoutingModule = /** @class */ (function () {
    function Oauth2RoutingModule() {
    }
    Oauth2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Oauth2RoutingModule });
    Oauth2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Oauth2RoutingModule_Factory(t) { return new (t || Oauth2RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return Oauth2RoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Oauth2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Oauth2RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "DHgJ":
/*!*********************************************************************!*\
  !*** ./src/playground/with-layout/oauth2/oauth2-login.component.ts ***!
  \*********************************************************************/
/*! exports provided: OAuth2LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2LoginComponent", function() { return OAuth2LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









function OAuth2LoginComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OAuth2LoginComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OAuth2LoginComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OAuth2LoginComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var OAuth2LoginComponent = /** @class */ (function () {
    function OAuth2LoginComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authService.onTokenChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (token) {
            _this.token = null;
            if (token && token.isValid()) {
                _this.token = token;
            }
        });
    }
    OAuth2LoginComponent.prototype.login = function () {
        this.authService.authenticate('google')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (authResult) {
        });
    };
    OAuth2LoginComponent.prototype.logout = function () {
        this.authService.logout('google')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (authResult) {
        });
    };
    OAuth2LoginComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    OAuth2LoginComponent.ɵfac = function OAuth2LoginComponent_Factory(t) { return new (t || OAuth2LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"])); };
    OAuth2LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OAuth2LoginComponent, selectors: [["nb-playground-auth"]], decls: 11, vars: 6, consts: [["nbButton", "", "status", "success", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "warning", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "warning", 3, "click"]], template: function OAuth2LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OAuth2LoginComponent_button_9_Template, 2, 0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OAuth2LoginComponent_button_10_Template, 2, 0, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current User Authenticated: ", !!ctx.token, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current User Token: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.token), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.token);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.token);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], encapsulation: 2 });
    return OAuth2LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OAuth2LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-auth',
                template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <p>Current User Authenticated: {{ !!token }}</p>\n            <p>Current User Token: {{ token|json }}</p>\n\n            <button nbButton status=\"success\" *ngIf=\"!token\" (click)=\"login()\">Sign In with Google</button>\n            <button nbButton status=\"warning\" *ngIf=\"token\" (click)=\"logout()\">Sign Out</button>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"] }]; }, null); })();


/***/ }),

/***/ "cqwV":
/*!************************************************************!*\
  !*** ./src/playground/with-layout/oauth2/oauth2.module.ts ***!
  \************************************************************/
/*! exports provided: OAuth2PlaygroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2PlaygroundModule", function() { return OAuth2PlaygroundModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _oauth2_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oauth2-login.component */ "DHgJ");
/* harmony import */ var _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oauth2-callback.component */ "qH7D");
/* harmony import */ var _oauth2_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oauth2-routing.module */ "3Ve7");
/* harmony import */ var _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/auth/auth.module */ "Abgx");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var OAuth2PlaygroundModule = /** @class */ (function () {
    function OAuth2PlaygroundModule() {
    }
    OAuth2PlaygroundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OAuth2PlaygroundModule });
    OAuth2PlaygroundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OAuth2PlaygroundModule_Factory(t) { return new (t || OAuth2PlaygroundModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                    strategies: [
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2AuthStrategy"].setup({
                            name: 'google',
                            clientId: '806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com',
                            clientSecret: '',
                            authorize: {
                                endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
                                responseType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2ResponseType"].TOKEN,
                                scope: 'https://www.googleapis.com/auth/userinfo.profile',
                                redirectUri: 'https://akveo.github.io/nebular/example/oauth2/callback',
                            },
                            redirect: {
                                success: '/example/oauth2',
                            },
                        }),
                    ],
                }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _oauth2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Oauth2RoutingModule"],
            ]] });
    return OAuth2PlaygroundModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OAuth2PlaygroundModule, { declarations: [_oauth2_login_component__WEBPACK_IMPORTED_MODULE_6__["OAuth2LoginComponent"],
        _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_7__["OAuth2CallbackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["NbAuthModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
        _oauth2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Oauth2RoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OAuth2PlaygroundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                        strategies: [
                            _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2AuthStrategy"].setup({
                                name: 'google',
                                clientId: '806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com',
                                clientSecret: '',
                                authorize: {
                                    endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
                                    responseType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2ResponseType"].TOKEN,
                                    scope: 'https://www.googleapis.com/auth/userinfo.profile',
                                    redirectUri: 'https://akveo.github.io/nebular/example/oauth2/callback',
                                },
                                redirect: {
                                    success: '/example/oauth2',
                                },
                            }),
                        ],
                    }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                    _oauth2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Oauth2RoutingModule"],
                ],
                declarations: [
                    _oauth2_login_component__WEBPACK_IMPORTED_MODULE_6__["OAuth2LoginComponent"],
                    _oauth2_callback_component__WEBPACK_IMPORTED_MODULE_7__["OAuth2CallbackComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "qH7D":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/oauth2/oauth2-callback.component.ts ***!
  \************************************************************************/
/*! exports provided: OAuth2CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2CallbackComponent", function() { return OAuth2CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var OAuth2CallbackComponent = /** @class */ (function () {
    function OAuth2CallbackComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authService.authenticate('google')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (authResult) {
            if (authResult.isSuccess() && authResult.getRedirect()) {
                _this.router.navigateByUrl(authResult.getRedirect());
            }
        });
    }
    OAuth2CallbackComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    OAuth2CallbackComponent.ɵfac = function OAuth2CallbackComponent_Factory(t) { return new (t || OAuth2CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    OAuth2CallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OAuth2CallbackComponent, selectors: [["nb-playground-oauth2-callback"]], decls: 3, vars: 0, template: function OAuth2CallbackComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Authenticating...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"]], encapsulation: 2 });
    return OAuth2CallbackComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OAuth2CallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-oauth2-callback',
                template: "\n    <nb-layout>\n      <nb-layout-column>Authenticating...</nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=oauth2-oauth2-module.js.map