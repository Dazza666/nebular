(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "/GJr":
/*!**********************************************!*\
  !*** ./src/framework/security/public_api.ts ***!
  \**********************************************/
/*! exports provided: NB_SECURITY_OPTIONS_TOKEN, NbSecurityModule, NbAclService, NbAccessChecker, NbRoleProvider, NbIsGrantedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _security_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.options */ "gfp+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_SECURITY_OPTIONS_TOKEN", function() { return _security_options__WEBPACK_IMPORTED_MODULE_0__["NB_SECURITY_OPTIONS_TOKEN"]; });

/* harmony import */ var _security_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.module */ "iq1B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbSecurityModule", function() { return _security_module__WEBPACK_IMPORTED_MODULE_1__["NbSecurityModule"]; });

/* harmony import */ var _services_acl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/acl.service */ "aYJk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAclService", function() { return _services_acl_service__WEBPACK_IMPORTED_MODULE_2__["NbAclService"]; });

/* harmony import */ var _services_access_checker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/access-checker.service */ "Gazj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAccessChecker", function() { return _services_access_checker_service__WEBPACK_IMPORTED_MODULE_3__["NbAccessChecker"]; });

/* harmony import */ var _services_role_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/role.provider */ "vtxI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRoleProvider", function() { return _services_role_provider__WEBPACK_IMPORTED_MODULE_4__["NbRoleProvider"]; });

/* harmony import */ var _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/is-granted.directive */ "x/Gm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbIsGrantedDirective", function() { return _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"]; });

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








/***/ }),

/***/ "8NWt":
/*!**************************************************************!*\
  !*** ./src/playground/without-layout/auth/auth.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthPlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPlaygroundComponent", function() { return AuthPlaygroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var AuthPlaygroundComponent = /** @class */ (function () {
    function AuthPlaygroundComponent() {
    }
    AuthPlaygroundComponent.ɵfac = function AuthPlaygroundComponent_Factory(t) { return new (t || AuthPlaygroundComponent)(); };
    AuthPlaygroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthPlaygroundComponent, selectors: [["nb-playground-auth"]], decls: 1, vars: 0, template: function AuthPlaygroundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return AuthPlaygroundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthPlaygroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-auth',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "FHRI":
/*!*************************************************************!*\
  !*** ./src/playground/without-layout/auth/role.provider.ts ***!
  \*************************************************************/
/*! exports provided: CustomRoleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRoleProvider", function() { return CustomRoleProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "LMYP");





var CustomRoleProvider = /** @class */ (function () {
    function CustomRoleProvider(authService) {
        this.authService = authService;
    }
    CustomRoleProvider.prototype.getRole = function () {
        return this.authService.onTokenChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (token) {
            if (token instanceof _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthJWTToken"] && token.isValid()) {
                return token.getPayload()['role'];
            }
            return 'guest';
        }));
    };
    CustomRoleProvider.ɵfac = function CustomRoleProvider_Factory(t) { return new (t || CustomRoleProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"])); };
    CustomRoleProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomRoleProvider, factory: CustomRoleProvider.ɵfac });
    return CustomRoleProvider;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomRoleProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }]; }, null); })();


/***/ }),

/***/ "GGzj":
/*!******************************************************************!*\
  !*** ./src/playground/without-layout/auth/auth-guard.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "LMYP");







var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['auth/login']);
            }
        }));
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
    return AuthGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Gazj":
/*!*******************************************************************!*\
  !*** ./src/framework/security/services/access-checker.service.ts ***!
  \*******************************************************************/
/*! exports provided: NbAccessChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAccessChecker", function() { return NbAccessChecker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _role_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.provider */ "vtxI");
/* harmony import */ var _acl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acl.service */ "aYJk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







/**
 * Access checker service.
 *
 * Injects `NbRoleProvider` to determine current user role, and checks access permissions using `NbAclService`
 */
var NbAccessChecker = /** @class */ (function () {
    function NbAccessChecker(roleProvider, acl) {
        this.roleProvider = roleProvider;
        this.acl = acl;
    }
    /**
     * Checks whether access is granted or not
     *
     * @param {string} permission
     * @param {string} resource
     * @returns {Observable<boolean>}
     */
    NbAccessChecker.prototype.isGranted = function (permission, resource) {
        var _this = this;
        return this.roleProvider.getRole()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (role) { return Array.isArray(role) ? role : [role]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (roles) {
            return roles.some(function (role) { return _this.acl.can(role, permission, resource); });
        }));
    };
    NbAccessChecker.ɵfac = function NbAccessChecker_Factory(t) { return new (t || NbAccessChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_role_provider__WEBPACK_IMPORTED_MODULE_1__["NbRoleProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_acl_service__WEBPACK_IMPORTED_MODULE_2__["NbAclService"])); };
    NbAccessChecker.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbAccessChecker, factory: NbAccessChecker.ɵfac });
    return NbAccessChecker;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAccessChecker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _role_provider__WEBPACK_IMPORTED_MODULE_1__["NbRoleProvider"] }, { type: _acl_service__WEBPACK_IMPORTED_MODULE_2__["NbAclService"] }]; }, null); })();


/***/ }),

/***/ "LXSQ":
/*!**********************************************************************!*\
  !*** ./src/playground/without-layout/auth/acl/acl-test.component.ts ***!
  \**********************************************************************/
/*! exports provided: AclTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AclTestComponent", function() { return AclTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/security */ "/GJr");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_security_directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../framework/security/directives/is-granted.directive */ "x/Gm");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








function AclTestComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AclTestComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["create", "comments"]; };
var AclTestComponent = /** @class */ (function () {
    function AclTestComponent(accessChecker) {
        this.accessChecker = accessChecker;
    }
    AclTestComponent.ɵfac = function AclTestComponent_Factory(t) { return new (t || AclTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_1__["NbAccessChecker"])); };
    AclTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AclTestComponent, selectors: [["nb-actions-test"]], decls: 13, vars: 5, consts: [[4, "ngIf"], [4, "nbIsGranted"]], template: function AclTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Service usage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AclTestComponent_button_6_Template, 2, 0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Directive usage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AclTestComponent_button_12_Template, 2, 0, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.accessChecker.isGranted("create", "comments")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbIsGranted", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _framework_security_directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });
    return AclTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AclTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-actions-test',
                template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>Service usage</nb-card-header>\n          <nb-card-body>\n            <button *ngIf=\"accessChecker.isGranted('create', 'comments') | async\" >Post Comment</button>\n          </nb-card-body>\n        </nb-card>\n        <nb-card>\n          <nb-card-header>Directive usage</nb-card-header>\n          <nb-card-body>\n            <button *nbIsGranted=\"['create', 'comments']\" >Post Comment</button>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_security__WEBPACK_IMPORTED_MODULE_1__["NbAccessChecker"] }]; }, null); })();


/***/ }),

/***/ "SM1g":
/*!***********************************************************!*\
  !*** ./src/playground/without-layout/auth/auth.module.ts ***!
  \***********************************************************/
/*! exports provided: filterInterceptorRequest, AuthPlaygroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInterceptorRequest", function() { return filterInterceptorRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPlaygroundModule", function() { return AuthPlaygroundModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/security */ "/GJr");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.component */ "8NWt");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-routing.module */ "jMtH");
/* harmony import */ var _role_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role.provider */ "FHRI");
/* harmony import */ var _acl_acl_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./acl/acl-test.component */ "LXSQ");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-guard.service */ "GGzj");
/* harmony import */ var _api_calls_api_calls_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api-calls/api-calls.component */ "d5np");
/* harmony import */ var _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../framework/auth/auth.module */ "Abgx");
/* harmony import */ var _framework_security_security_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../framework/security/security.module */ "iq1B");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
















function filterInterceptorRequest(req) {
    return ['http://localhost:4400/api/auth/',
        'http://other.url/with/no/token/injected/',
    ]
        .some(function (url) { return req.url.includes(url); });
}
var AuthPlaygroundModule = /** @class */ (function () {
    function AuthPlaygroundModule() {
    }
    AuthPlaygroundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthPlaygroundModule });
    AuthPlaygroundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AuthPlaygroundModule_Factory(t) { return new (t || AuthPlaygroundModule)(); }, providers: [
            _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthJWTInterceptor"], multi: true },
            { provide: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NB_AUTH_TOKEN_INTERCEPTOR_FILTER"], useValue: filterInterceptorRequest },
            { provide: _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbRoleProvider"], useClass: _role_provider__WEBPACK_IMPORTED_MODULE_9__["CustomRoleProvider"] },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthPlaygroundRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                    forms: {
                        login: {
                            strategy: 'password',
                            redirectDelay: 1000,
                            socialLinks: [
                                {
                                    url: 'https://github.com/akveo',
                                    target: '_blank',
                                    title: 'GitHub',
                                },
                                {
                                    url: 'https://www.facebook.com/akveo',
                                    target: '_blank',
                                    icon: 'home-outline',
                                },
                                {
                                    url: 'https://www.facebook.com/akveo',
                                    target: '_blank',
                                    title: 'Twitter',
                                },
                            ],
                        },
                    },
                    strategies: [
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbDummyAuthStrategy"].setup({
                            name: 'dummy',
                            alwaysFail: true,
                            delay: 1000,
                        }),
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbPasswordAuthStrategy"].setup({
                            name: 'email',
                            token: {
                                class: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthJWTToken"],
                            },
                            baseEndpoint: 'http://localhost:4400/api/auth/',
                            logout: {
                                redirect: {
                                    success: '/auth/login',
                                    failure: '/auth/login',
                                },
                            },
                            requestPass: {
                                redirect: {
                                    success: '/auth/reset-password',
                                },
                            },
                            resetPass: {
                                redirect: {
                                    success: '/auth/login',
                                },
                            },
                            errors: {
                                key: 'data.errors',
                            },
                        }),
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2AuthStrategy"].setup({
                            name: 'password',
                            clientId: 'test',
                            clientSecret: 'secret',
                            baseEndpoint: 'http://localhost:4400/api/auth/',
                            token: {
                                endpoint: 'token',
                                grantType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2GrantType"].PASSWORD,
                                class: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthOAuth2Token"],
                            },
                            refresh: {
                                endpoint: 'refresh-token',
                                grantType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2GrantType"].REFRESH_TOKEN,
                            },
                        }),
                    ],
                }),
                _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbSecurityModule"].forRoot({
                    accessControl: {
                        guest: {
                            view: ['news', 'comments'],
                        },
                        user: {
                            parent: 'guest',
                            create: 'comments',
                        },
                        moderator: {
                            parent: 'user',
                            create: 'news',
                            remove: '*',
                        },
                    },
                }),
            ]] });
    return AuthPlaygroundModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthPlaygroundModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthPlaygroundComponent"],
        _acl_acl_test_component__WEBPACK_IMPORTED_MODULE_10__["AclTestComponent"],
        _api_calls_api_calls_component__WEBPACK_IMPORTED_MODULE_12__["PlaygroundApiCallsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthPlaygroundRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"], _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["NbAuthModule"], _framework_security_security_module__WEBPACK_IMPORTED_MODULE_14__["NbSecurityModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthPlaygroundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthPlaygroundRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                        forms: {
                            login: {
                                strategy: 'password',
                                redirectDelay: 1000,
                                socialLinks: [
                                    {
                                        url: 'https://github.com/akveo',
                                        target: '_blank',
                                        title: 'GitHub',
                                    },
                                    {
                                        url: 'https://www.facebook.com/akveo',
                                        target: '_blank',
                                        icon: 'home-outline',
                                    },
                                    {
                                        url: 'https://www.facebook.com/akveo',
                                        target: '_blank',
                                        title: 'Twitter',
                                    },
                                ],
                            },
                        },
                        strategies: [
                            _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbDummyAuthStrategy"].setup({
                                name: 'dummy',
                                alwaysFail: true,
                                delay: 1000,
                            }),
                            _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbPasswordAuthStrategy"].setup({
                                name: 'email',
                                token: {
                                    class: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthJWTToken"],
                                },
                                baseEndpoint: 'http://localhost:4400/api/auth/',
                                logout: {
                                    redirect: {
                                        success: '/auth/login',
                                        failure: '/auth/login',
                                    },
                                },
                                requestPass: {
                                    redirect: {
                                        success: '/auth/reset-password',
                                    },
                                },
                                resetPass: {
                                    redirect: {
                                        success: '/auth/login',
                                    },
                                },
                                errors: {
                                    key: 'data.errors',
                                },
                            }),
                            _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2AuthStrategy"].setup({
                                name: 'password',
                                clientId: 'test',
                                clientSecret: 'secret',
                                baseEndpoint: 'http://localhost:4400/api/auth/',
                                token: {
                                    endpoint: 'token',
                                    grantType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2GrantType"].PASSWORD,
                                    class: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthOAuth2Token"],
                                },
                                refresh: {
                                    endpoint: 'refresh-token',
                                    grantType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2GrantType"].REFRESH_TOKEN,
                                },
                            }),
                        ],
                    }),
                    _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbSecurityModule"].forRoot({
                        accessControl: {
                            guest: {
                                view: ['news', 'comments'],
                            },
                            user: {
                                parent: 'guest',
                                create: 'comments',
                            },
                            moderator: {
                                parent: 'user',
                                create: 'news',
                                remove: '*',
                            },
                        },
                    }),
                ],
                declarations: [
                    _auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthPlaygroundComponent"],
                    _acl_acl_test_component__WEBPACK_IMPORTED_MODULE_10__["AclTestComponent"],
                    _api_calls_api_calls_component__WEBPACK_IMPORTED_MODULE_12__["PlaygroundApiCallsComponent"],
                ],
                providers: [
                    _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthJWTInterceptor"], multi: true },
                    { provide: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NB_AUTH_TOKEN_INTERCEPTOR_FILTER"], useValue: filterInterceptorRequest },
                    { provide: _nebular_security__WEBPACK_IMPORTED_MODULE_6__["NbRoleProvider"], useClass: _role_provider__WEBPACK_IMPORTED_MODULE_9__["CustomRoleProvider"] },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "aYJk":
/*!********************************************************!*\
  !*** ./src/framework/security/services/acl.service.ts ***!
  \********************************************************/
/*! exports provided: NbAclService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAclService", function() { return NbAclService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _security_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security.options */ "gfp+");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var shallowObjectClone = function (o) { return Object.assign({}, o); };
var shallowArrayClone = function (a) { return Object.assign([], a); };
var popParent = function (abilities) {
    var parent = abilities['parent'];
    delete abilities['parent'];
    return parent;
};
/**
 * Common acl service.
 */
var NbAclService = /** @class */ (function () {
    function NbAclService(settings) {
        if (settings === void 0) { settings = {}; }
        this.settings = settings;
        this.state = {};
        if (settings.accessControl) {
            this.setAccessControl(settings.accessControl);
        }
    }
    /**
     * Set/Reset ACL list
     * @param {NbAccessControl} list
     */
    NbAclService.prototype.setAccessControl = function (list) {
        for (var _i = 0, _a = Object.entries(list); _i < _a.length; _i++) {
            var _b = _a[_i], role = _b[0], value = _b[1];
            var abilities = shallowObjectClone(value);
            var parent_1 = popParent(abilities);
            this.register(role, parent_1, abilities);
        }
    };
    /**
     * Register a new role with a list of abilities (permission/resources combinations)
     * @param {string} role
     * @param {string} parent
     * @param {[permission: string]: string|string[]} abilities
     */
    NbAclService.prototype.register = function (role, parent, abilities) {
        if (parent === void 0) { parent = null; }
        if (abilities === void 0) { abilities = {}; }
        this.validateRole(role);
        this.state[role] = {
            parent: parent,
        };
        for (var _i = 0, _a = Object.entries(abilities); _i < _a.length; _i++) {
            var _b = _a[_i], permission = _b[0], value = _b[1];
            var resources = typeof value === 'string' ? [value] : value;
            this.allow(role, permission, shallowArrayClone(resources));
        }
    };
    /**
     * Allow a permission for specific resources to a role
     * @param {string} role
     * @param {string} permission
     * @param {string | string[]} resource
     */
    NbAclService.prototype.allow = function (role, permission, resource) {
        this.validateRole(role);
        if (!this.getRole(role)) {
            this.register(role, null, {});
        }
        resource = typeof resource === 'string' ? [resource] : resource;
        var resources = shallowArrayClone(this.getRoleResources(role, permission));
        resources = resources.concat(resource);
        this.state[role][permission] = resources
            .filter(function (item, pos) { return resources.indexOf(item) === pos; });
    };
    /**
     * Check whether the role has a permission to a resource
     * @param {string} role
     * @param {string} permission
     * @param {string} resource
     * @returns {boolean}
     */
    NbAclService.prototype.can = function (role, permission, resource) {
        this.validateResource(resource);
        var parentRole = this.getRoleParent(role);
        var parentCan = parentRole && this.can(this.getRoleParent(role), permission, resource);
        return parentCan || this.exactCan(role, permission, resource);
    };
    NbAclService.prototype.getRole = function (role) {
        return this.state[role];
    };
    NbAclService.prototype.validateRole = function (role) {
        if (!role) {
            throw new Error('NbAclService: role name cannot be empty');
        }
    };
    NbAclService.prototype.validateResource = function (resource) {
        if (!resource || [NbAclService.ANY_RESOURCE].includes(resource)) {
            throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method");
        }
    };
    NbAclService.prototype.exactCan = function (role, permission, resource) {
        var resources = this.getRoleResources(role, permission);
        return resources.includes(resource) || resources.includes(NbAclService.ANY_RESOURCE);
    };
    NbAclService.prototype.getRoleResources = function (role, permission) {
        return this.getRoleAbilities(role)[permission] || [];
    };
    NbAclService.prototype.getRoleAbilities = function (role) {
        var abilities = shallowObjectClone(this.state[role] || {});
        popParent(shallowObjectClone(this.state[role] || {}));
        return abilities;
    };
    NbAclService.prototype.getRoleParent = function (role) {
        return this.state[role] ? this.state[role]['parent'] : null;
    };
    NbAclService.ANY_RESOURCE = '*';
    NbAclService.ɵfac = function NbAclService_Factory(t) { return new (t || NbAclService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_security_options__WEBPACK_IMPORTED_MODULE_1__["NB_SECURITY_OPTIONS_TOKEN"], 8)); };
    NbAclService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbAclService, factory: NbAclService.ɵfac });
    return NbAclService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAclService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_security_options__WEBPACK_IMPORTED_MODULE_1__["NB_SECURITY_OPTIONS_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "d5np":
/*!*****************************************************************************!*\
  !*** ./src/playground/without-layout/auth/api-calls/api-calls.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PlaygroundApiCallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundApiCallsComponent", function() { return PlaygroundApiCallsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _framework_auth_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../framework/auth/helpers */ "iVvT");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../framework/theme/components/list/list.component */ "jXul");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */















function PlaygroundApiCallsComponent_nb_card_13_nb_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var wine_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", wine_r2.region, ", ", wine_r2.name, " (", wine_r2.year, ") ");
} }
function PlaygroundApiCallsComponent_nb_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Alain'wines ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlaygroundApiCallsComponent_nb_card_13_nb_list_item_4_Template, 2, 3, "nb-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r0.wines$));
} }
var PlaygroundApiCallsComponent = /** @class */ (function () {
    function PlaygroundApiCallsComponent(authService, http, router, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.options = options;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
        this.authService.onTokenChange()
            .subscribe(function (token) {
            _this.token = null;
            if (token && token.isValid()) {
                _this.token = token;
            }
        });
    }
    PlaygroundApiCallsComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout(this.strategy)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(this.redirectDelay))
            .subscribe(function (result) { return _this.router.navigate(['/auth/login']); });
    };
    PlaygroundApiCallsComponent.prototype.loadWines = function () {
        var _this = this;
        this.wines$ = this.http.get('http://localhost:4400/api/wines')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
                _this.router.navigate(['/auth/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }));
    };
    PlaygroundApiCallsComponent.prototype.getConfigValue = function (key) {
        return Object(_framework_auth_helpers__WEBPACK_IMPORTED_MODULE_6__["getDeepFromObject"])(this.options, key, null);
    };
    PlaygroundApiCallsComponent.ɵfac = function PlaygroundApiCallsComponent_Factory(t) { return new (t || PlaygroundApiCallsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NB_AUTH_OPTIONS"])); };
    PlaygroundApiCallsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaygroundApiCallsComponent, selectors: [["nb-playground-api-calls"]], decls: 15, vars: 3, consts: [["nbButton", "", "status", "primary", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function PlaygroundApiCallsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You are authenticated");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You can call the secured API");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaygroundApiCallsComponent_Template_button_click_9_listener() { return ctx.loadWines(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Call API");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaygroundApiCallsComponent_Template_button_click_11_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign out");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlaygroundApiCallsComponent_nb_card_13_Template, 6, 3, "nb-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var tmp_0_0 = null;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 1, ctx.wines$)) == null ? null : tmp_0_0.length);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_10__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_10__["NbListItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], encapsulation: 2 });
    return PlaygroundApiCallsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundApiCallsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-api-calls',
                template: "\n    <router-outlet></router-outlet>\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <h2>You are authenticated</h2>\n            <p>You can call the secured API</p>\n            <button nbButton status=\"primary\" (click)=\"loadWines()\">Call API</button>\n            <button nbButton status=\"primary\" (click)=\"logout()\">Sign out</button>\n          </nb-card-body>\n        </nb-card>\n        <nb-card *ngIf=\"(wines$ | async)?.length\">\n          <nb-card-header>\n            Alain'wines\n          </nb-card-header>\n          <nb-list>\n            <nb-list-item *ngFor=\"let wine of wines$ | async\">\n              {{ wine.region }}, {{ wine.name }} ({{ wine.year }})\n            </nb-list-item>\n          </nb-list>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NB_AUTH_OPTIONS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "gfp+":
/*!****************************************************!*\
  !*** ./src/framework/security/security.options.ts ***!
  \****************************************************/
/*! exports provided: NB_SECURITY_OPTIONS_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_SECURITY_OPTIONS_TOKEN", function() { return NB_SECURITY_OPTIONS_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var NB_SECURITY_OPTIONS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Security Options');


/***/ }),

/***/ "iq1B":
/*!***************************************************!*\
  !*** ./src/framework/security/security.module.ts ***!
  \***************************************************/
/*! exports provided: NbSecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSecurityModule", function() { return NbSecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _security_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security.options */ "gfp+");
/* harmony import */ var _services_acl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/acl.service */ "aYJk");
/* harmony import */ var _services_access_checker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/access-checker.service */ "Gazj");
/* harmony import */ var _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/is-granted.directive */ "x/Gm");







var NbSecurityModule = /** @class */ (function () {
    function NbSecurityModule() {
    }
    NbSecurityModule.forRoot = function (nbSecurityOptions) {
        return {
            ngModule: NbSecurityModule,
            providers: [
                { provide: _security_options__WEBPACK_IMPORTED_MODULE_2__["NB_SECURITY_OPTIONS_TOKEN"], useValue: nbSecurityOptions },
                _services_acl_service__WEBPACK_IMPORTED_MODULE_3__["NbAclService"],
                _services_access_checker_service__WEBPACK_IMPORTED_MODULE_4__["NbAccessChecker"],
            ],
        };
    };
    NbSecurityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NbSecurityModule });
    NbSecurityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NbSecurityModule_Factory(t) { return new (t || NbSecurityModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return NbSecurityModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NbSecurityModule, { declarations: [_directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbSecurityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"],
                ],
                exports: [
                    _directives_is_granted_directive__WEBPACK_IMPORTED_MODULE_5__["NbIsGrantedDirective"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "jMtH":
/*!*******************************************************************!*\
  !*** ./src/playground/without-layout/auth/auth-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: routes, AuthPlaygroundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPlaygroundRoutingModule", function() { return AuthPlaygroundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "8NWt");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _acl_acl_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acl/acl-test.component */ "LXSQ");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.service */ "GGzj");
/* harmony import */ var _api_calls_api_calls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-calls/api-calls.component */ "d5np");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthPlaygroundComponent"],
        children: [
            {
                path: '',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthComponent"],
                children: [
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full',
                    },
                    {
                        path: 'login',
                        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbLoginComponent"],
                    },
                    {
                        path: 'register',
                        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbRegisterComponent"],
                    },
                    {
                        path: 'logout',
                        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbLogoutComponent"],
                    },
                    {
                        path: 'request-password',
                        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbRequestPasswordComponent"],
                    },
                    {
                        path: 'reset-password',
                        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbResetPasswordComponent"],
                    },
                ],
            },
        ],
    },
    {
        path: 'acl/acl-test.component',
        component: _acl_acl_test_component__WEBPACK_IMPORTED_MODULE_4__["AclTestComponent"],
    },
    {
        path: 'auth-guard.service',
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthPlaygroundComponent"],
    },
    {
        path: 'api-calls.component',
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _api_calls_api_calls_component__WEBPACK_IMPORTED_MODULE_6__["PlaygroundApiCallsComponent"],
    },
];
var AuthPlaygroundRoutingModule = /** @class */ (function () {
    function AuthPlaygroundRoutingModule() {
    }
    AuthPlaygroundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthPlaygroundRoutingModule });
    AuthPlaygroundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthPlaygroundRoutingModule_Factory(t) { return new (t || AuthPlaygroundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AuthPlaygroundRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthPlaygroundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthPlaygroundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vtxI":
/*!**********************************************************!*\
  !*** ./src/framework/security/services/role.provider.ts ***!
  \**********************************************************/
/*! exports provided: NbRoleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRoleProvider", function() { return NbRoleProvider; });
var NbRoleProvider = /** @class */ (function () {
    function NbRoleProvider() {
    }
    return NbRoleProvider;
}());



/***/ }),

/***/ "x/Gm":
/*!*******************************************************************!*\
  !*** ./src/framework/security/directives/is-granted.directive.ts ***!
  \*******************************************************************/
/*! exports provided: NbIsGrantedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbIsGrantedDirective", function() { return NbIsGrantedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_access_checker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/access-checker.service */ "Gazj");






var NbIsGrantedDirective = /** @class */ (function () {
    function NbIsGrantedDirective(templateRef, viewContainer, accessChecker) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.accessChecker = accessChecker;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasView = false;
    }
    Object.defineProperty(NbIsGrantedDirective.prototype, "nbIsGranted", {
        set: function (_a) {
            var _this = this;
            var permission = _a[0], resource = _a[1];
            this.accessChecker.isGranted(permission, resource)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
                .subscribe(function (can) {
                if (can && !_this.hasView) {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                    _this.hasView = true;
                }
                else if (!can && _this.hasView) {
                    _this.viewContainer.clear();
                    _this.hasView = false;
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    NbIsGrantedDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NbIsGrantedDirective.ɵfac = function NbIsGrantedDirective_Factory(t) { return new (t || NbIsGrantedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_access_checker_service__WEBPACK_IMPORTED_MODULE_3__["NbAccessChecker"])); };
    NbIsGrantedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NbIsGrantedDirective, selectors: [["", "nbIsGranted", ""]], inputs: { nbIsGranted: "nbIsGranted" } });
    return NbIsGrantedDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbIsGrantedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[nbIsGranted]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _services_access_checker_service__WEBPACK_IMPORTED_MODULE_3__["NbAccessChecker"] }]; }, { nbIsGranted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map