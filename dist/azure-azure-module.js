(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["azure-azure-module"],{

/***/ "/9ID":
/*!*************************************************************************!*\
  !*** ./src/playground/without-layout/azure/azure-callback.component.ts ***!
  \*************************************************************************/
/*! exports provided: AzureCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCallbackComponent", function() { return AzureCallbackComponent; });
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









var AzureCallbackComponent = /** @class */ (function () {
    function AzureCallbackComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authService.authenticate('azure')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (authResult) {
            if (authResult.isSuccess() && authResult.getRedirect()) {
                _this.router.navigateByUrl(authResult.getRedirect());
            }
        });
    }
    AzureCallbackComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    AzureCallbackComponent.ɵfac = function AzureCallbackComponent_Factory(t) { return new (t || AzureCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AzureCallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AzureCallbackComponent, selectors: [["nb-playground-azure-callback"]], decls: 3, vars: 0, template: function AzureCallbackComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Authenticating...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"]], encapsulation: 2 });
    return AzureCallbackComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AzureCallbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-azure-callback',
                template: "\n    <nb-layout>\n      <nb-layout-column>Authenticating...</nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "/VH1":
/*!*************************************************************!*\
  !*** ./src/playground/without-layout/azure/azure.module.ts ***!
  \*************************************************************/
/*! exports provided: AzurePlaygroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzurePlaygroundModule", function() { return AzurePlaygroundModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _azure_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./azure-login.component */ "IHXi");
/* harmony import */ var _azure_callback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./azure-callback.component */ "/9ID");
/* harmony import */ var _azure_adb2c_auth_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./azure-adb2c-auth-strategy */ "kf3q");
/* harmony import */ var _azure_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./azure-routing.module */ "gn5E");
/* harmony import */ var _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/auth/auth.module */ "Abgx");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var AzurePlaygroundModule = /** @class */ (function () {
    function AzurePlaygroundModule() {
    }
    AzurePlaygroundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AzurePlaygroundModule });
    AzurePlaygroundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AzurePlaygroundModule_Factory(t) { return new (t || AzurePlaygroundModule)(); }, providers: [
            _azure_adb2c_auth_strategy__WEBPACK_IMPORTED_MODULE_8__["AzureADB2CAuthStrategy"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                    strategies: [
                        _azure_adb2c_auth_strategy__WEBPACK_IMPORTED_MODULE_8__["AzureADB2CAuthStrategy"].setup({
                            name: 'azure',
                            clientId: 'bde728e2-2809-4ff1-bc9c-7fcb23800ebe',
                            clientSecret: '',
                            authorize: {
                                endpoint: 'https://login.microsoftonline.com/01513fd2-16a0-453b-9fa0-c9089bfa023e/oauth2/authorize',
                                responseType: 'id_token',
                                scope: 'openid',
                                redirectUri: 'https://akveo.github.io/nebular/example/azure/callback',
                                params: {
                                    p: 'b2c_1_nebular',
                                },
                            },
                            token: {
                                class: _azure_adb2c_auth_strategy__WEBPACK_IMPORTED_MODULE_8__["AuthAzureToken"],
                            },
                            redirect: {
                                success: '/example/azure',
                            },
                        }),
                    ],
                }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _azure_routing_module__WEBPACK_IMPORTED_MODULE_9__["AzureRoutingModule"],
            ]] });
    return AzurePlaygroundModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AzurePlaygroundModule, { declarations: [_azure_login_component__WEBPACK_IMPORTED_MODULE_6__["AzureLoginComponent"],
        _azure_callback_component__WEBPACK_IMPORTED_MODULE_7__["AzureCallbackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["NbAuthModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
        _azure_routing_module__WEBPACK_IMPORTED_MODULE_9__["AzureRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AzurePlaygroundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                        strategies: [
                            _azure_adb2c_auth_strategy__WEBPACK_IMPORTED_MODULE_8__["AzureADB2CAuthStrategy"].setup({
                                name: 'azure',
                                clientId: 'bde728e2-2809-4ff1-bc9c-7fcb23800ebe',
                                clientSecret: '',
                                authorize: {
                                    endpoint: 'https://login.microsoftonline.com/01513fd2-16a0-453b-9fa0-c9089bfa023e/oauth2/authorize',
                                    responseType: 'id_token',
                                    scope: 'openid',
                                    redirectUri: 'https://akveo.github.io/nebular/example/azure/callback',
                                    params: {
                                        p: 'b2c_1_nebular',
                                    },
                                },
                                token: {
                                    class: _azure_adb2c_auth_strategy__WEBPACK_IMPORTED_MODULE_8__["AuthAzureToken"],
                                },
                                redirect: {
                                    success: '/example/azure',
                                },
                            }),
                        ],
                    }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                    _azure_routing_module__WEBPACK_IMPORTED_MODULE_9__["AzureRoutingModule"],
                ],
                declarations: [
                    _azure_login_component__WEBPACK_IMPORTED_MODULE_6__["AzureLoginComponent"],
                    _azure_callback_component__WEBPACK_IMPORTED_MODULE_7__["AzureCallbackComponent"],
                ],
                providers: [
                    _azure_adb2c_auth_strategy__WEBPACK_IMPORTED_MODULE_8__["AzureADB2CAuthStrategy"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "IHXi":
/*!**********************************************************************!*\
  !*** ./src/playground/without-layout/azure/azure-login.component.ts ***!
  \**********************************************************************/
/*! exports provided: AzureLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureLoginComponent", function() { return AzureLoginComponent; });
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









function AzureLoginComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AzureLoginComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In with Azure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AzureLoginComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AzureLoginComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AzureLoginComponent = /** @class */ (function () {
    function AzureLoginComponent(authService) {
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
    AzureLoginComponent.prototype.login = function () {
        this.authService.authenticate('azure')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (authResult) {
        });
    };
    AzureLoginComponent.prototype.logout = function () {
        this.authService.logout('azure')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (authResult) {
        });
    };
    AzureLoginComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    AzureLoginComponent.ɵfac = function AzureLoginComponent_Factory(t) { return new (t || AzureLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"])); };
    AzureLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AzureLoginComponent, selectors: [["nb-playground-azure"]], decls: 11, vars: 6, consts: [["nbButton", "", "status", "success", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "warning", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "warning", 3, "click"]], template: function AzureLoginComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AzureLoginComponent_button_9_Template, 2, 0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AzureLoginComponent_button_10_Template, 2, 0, "button", 1);
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
    return AzureLoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AzureLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-azure',
                template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <p>Current User Authenticated: {{ !!token }}</p>\n            <p>Current User Token: {{ token|json }}</p>\n\n            <button nbButton status=\"success\" *ngIf=\"!token\" (click)=\"login()\">Sign In with Azure</button>\n            <button nbButton status=\"warning\" *ngIf=\"token\" (click)=\"logout()\">Sign Out</button>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"] }]; }, null); })();


/***/ }),

/***/ "gn5E":
/*!*********************************************************************!*\
  !*** ./src/playground/without-layout/azure/azure-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AzureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureRoutingModule", function() { return AzureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _azure_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./azure-callback.component */ "/9ID");
/* harmony import */ var _azure_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./azure-login.component */ "IHXi");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var routes = [
    {
        path: '',
        component: _azure_login_component__WEBPACK_IMPORTED_MODULE_3__["AzureLoginComponent"],
    },
    {
        path: 'callback',
        component: _azure_callback_component__WEBPACK_IMPORTED_MODULE_2__["AzureCallbackComponent"],
    },
];
var AzureRoutingModule = /** @class */ (function () {
    function AzureRoutingModule() {
    }
    AzureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AzureRoutingModule });
    AzureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AzureRoutingModule_Factory(t) { return new (t || AzureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AzureRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AzureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AzureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kf3q":
/*!**************************************************************************!*\
  !*** ./src/playground/without-layout/azure/azure-adb2c-auth-strategy.ts ***!
  \**************************************************************************/
/*! exports provided: AuthAzureToken, AzureADB2CAuthStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAzureToken", function() { return AuthAzureToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureADB2CAuthStrategy", function() { return AzureADB2CAuthStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





// Create new token for Azure auth so it returns id_token instead of access_token
var AuthAzureToken = /** @class */ (function (_super) {
    __extends(AuthAzureToken, _super);
    function AuthAzureToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthAzureToken.prototype.getValue = function () {
        return this.token.id_token;
    };
    // let's rename it to exclude name clashes
    AuthAzureToken.NAME = 'nb:auth:azure:token';
    return AuthAzureToken;
}(_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthOAuth2JWTToken"]));

var AzureADB2CAuthStrategy = /** @class */ (function (_super) {
    __extends(AzureADB2CAuthStrategy, _super);
    function AzureADB2CAuthStrategy() {
        var _a, _b;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.redirectResultHandlers = (_a = {},
            _a[_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbOAuth2ResponseType"].CODE] = function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this.route.snapshot.queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
                    if (params.code) {
                        return _this.requestToken(params.code);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthResult"](false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []));
                }));
            },
            _a.id_token = function () {
                var module = 'authorize';
                var requireValidToken = _this.getOption(module + ".requireValidToken");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this.route.snapshot.fragment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) {
                    if (!params.error) {
                        return new _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthResult"](true, params, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(params, requireValidToken));
                    }
                    return new _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthResult"](false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
                    var errors = [];
                    if (err instanceof _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthIllegalTokenError"]) {
                        errors.push(err.message);
                    }
                    else {
                        errors.push('Something went wrong.');
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthResult"](false, err, _this.getOption('redirect.failure'), errors));
                }));
            },
            _a);
        _this.redirectResults = (_b = {},
            _b[_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbOAuth2ResponseType"].CODE] = function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); },
            _b.id_token = function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this.route.snapshot.fragment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return !!(params && (params.id_token || params.error)); }));
            },
            _b);
        return _this;
    }
    // we need this method for strategy setup
    AzureADB2CAuthStrategy.setup = function (options) {
        return [AzureADB2CAuthStrategy, options];
    };
    AzureADB2CAuthStrategy.ɵfac = function AzureADB2CAuthStrategy_Factory(t) { return ɵAzureADB2CAuthStrategy_BaseFactory(t || AzureADB2CAuthStrategy); };
    AzureADB2CAuthStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AzureADB2CAuthStrategy, factory: AzureADB2CAuthStrategy.ɵfac });
    return AzureADB2CAuthStrategy;
}(_nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbOAuth2AuthStrategy"]));

var ɵAzureADB2CAuthStrategy_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AzureADB2CAuthStrategy);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AzureADB2CAuthStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=azure-azure-module.js.map