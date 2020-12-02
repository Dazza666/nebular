(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03"],{

/***/ "++eV":
/*!*********************************************************************!*\
  !*** ./src/framework/auth/strategies/password/password-strategy.ts ***!
  \*********************************************************************/
/*! exports provided: NbPasswordAuthStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPasswordAuthStrategy", function() { return NbPasswordAuthStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-result */ "V1Ee");
/* harmony import */ var _auth_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-strategy */ "t+5P");
/* harmony import */ var _password_strategy_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-strategy-options */ "CVWE");
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/token/token */ "4pP6");
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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












/**
 * The most common authentication provider for email/password strategy.
 *
 * Strategy settings. Note, there is no need to copy over the whole object to change the settings you need.
 * Also, this.getOption call won't work outside of the default options declaration
 * (which is inside of the `NbPasswordAuthStrategy` class), so you have to replace it with a custom helper function
 * if you need it.
 *
 * ```ts
 *export class NbPasswordAuthStrategyOptions extends NbAuthStrategyOptions {
 *  name: string;
 *  baseEndpoint? = '/api/auth/';
 *  login?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'login',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  };
 *  register?: boolean | NbPasswordStrategyModule = {
 *    alwaysFail: false,
 *    endpoint: 'register',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  };
 *  requestPass?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  };
 *  resetPass?: boolean | NbPasswordStrategyReset = {
 *    endpoint: 'reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  };
 *  logout?: boolean | NbPasswordStrategyReset = {
 *    alwaysFail: false,
 *    endpoint: 'logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  };
 *  refreshToken?: boolean | NbPasswordStrategyModule = {
 *    endpoint: 'refresh-token',
 *    method: 'post',
 *    requireValidToken: true,
 *    redirect: {
 *      success: null,
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your token has been successfully refreshed.'],
 *  };
 *  token?: NbPasswordStrategyToken = {
 *    class: NbAuthSimpleToken,
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.token.key,
 *    ),
 *  };
 *  errors?: NbPasswordStrategyMessage = {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.error,
 *      options.errors.key,
 *      options[module].defaultErrors,
 *    ),
 *  };
 *  messages?: NbPasswordStrategyMessage = {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
 *      res.body,
 *      options.messages.key,
 *      options[module].defaultMessages,
 *    ),
 *  };
 *  validation?: {
 *    password?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *    email?: {
 *      required?: boolean;
 *      regexp?: string | null;
 *    };
 *    fullName?: {
 *      required?: boolean;
 *      minLength?: number | null;
 *      maxLength?: number | null;
 *      regexp?: string | null;
 *    };
 *  };
 *}
 * ```
 */
var NbPasswordAuthStrategy = /** @class */ (function (_super) {
    __extends(NbPasswordAuthStrategy, _super);
    function NbPasswordAuthStrategy(http, route) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.defaultOptions = _password_strategy_options__WEBPACK_IMPORTED_MODULE_7__["passwordStrategyOptions"];
        return _this;
    }
    NbPasswordAuthStrategy.setup = function (options) {
        return [NbPasswordAuthStrategy, options];
    };
    NbPasswordAuthStrategy.prototype.authenticate = function (data) {
        var _this = this;
        var module = 'login';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')(module, res, _this.options), requireValidToken));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.register = function (data) {
        var _this = this;
        var module = 'register';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')('login', res, _this.options), requireValidToken));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.requestPassword = function (data) {
        var _this = this;
        var module = 'requestPass';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.resetPassword = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var module = 'resetPass';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var tokenKey = this.getOption(module + ".resetPasswordTokenKey");
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.logout = function () {
        var _this = this;
        var module = 'logout';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
            if (!url) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(res);
            }
            return _this.http.request(method, url, { observe: 'response' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.refreshToken = function (data) {
        var _this = this;
        var module = 'refreshToken';
        var method = this.getOption(module + ".method");
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (_this.getOption(module + ".alwaysFail")) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](true, res, _this.getOption(module + ".redirect.success"), [], _this.getOption('messages.getter')(module, res, _this.options), _this.createToken(_this.getOption('token.getter')(module, res, _this.options), requireValidToken));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            return _this.handleResponseError(res, module);
        }));
    };
    NbPasswordAuthStrategy.prototype.handleResponseError = function (res, module) {
        var errors = [];
        if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            errors = this.getOption('errors.getter')(module, res, this.options);
        }
        else if (res instanceof _services_token_token__WEBPACK_IMPORTED_MODULE_8__["NbAuthIllegalTokenError"]) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_5__["NbAuthResult"](false, res, this.getOption(module + ".redirect.failure"), errors));
    };
    NbPasswordAuthStrategy.ɵfac = function NbPasswordAuthStrategy_Factory(t) { return new (t || NbPasswordAuthStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    NbPasswordAuthStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbPasswordAuthStrategy, factory: NbPasswordAuthStrategy.ɵfac });
    return NbPasswordAuthStrategy;
}(_auth_strategy__WEBPACK_IMPORTED_MODULE_6__["NbAuthStrategy"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbPasswordAuthStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "0ICW":
/*!********************************************!*\
  !*** ./src/framework/auth/auth.options.ts ***!
  \********************************************/
/*! exports provided: defaultAuthOptions, NB_AUTH_OPTIONS, NB_AUTH_USER_OPTIONS, NB_AUTH_STRATEGIES, NB_AUTH_TOKENS, NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_TOKEN_INTERCEPTOR_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAuthOptions", function() { return defaultAuthOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_OPTIONS", function() { return NB_AUTH_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_USER_OPTIONS", function() { return NB_AUTH_USER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_STRATEGIES", function() { return NB_AUTH_STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_TOKENS", function() { return NB_AUTH_TOKENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_INTERCEPTOR_HEADER", function() { return NB_AUTH_INTERCEPTOR_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_TOKEN_INTERCEPTOR_FILTER", function() { return NB_AUTH_TOKEN_INTERCEPTOR_FILTER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var socialLinks = [];
var defaultAuthOptions = {
    strategies: [],
    forms: {
        login: {
            redirectDelay: 500,
            strategy: 'email',
            rememberMe: true,
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        register: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        resetPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            strategy: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
var NB_AUTH_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Auth Options');
var NB_AUTH_USER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular User Auth Options');
var NB_AUTH_STRATEGIES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Auth Strategies');
var NB_AUTH_TOKENS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Auth Tokens');
var NB_AUTH_INTERCEPTOR_HEADER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Simple Interceptor Header');
var NB_AUTH_TOKEN_INTERCEPTOR_FILTER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Interceptor Filter');


/***/ }),

/***/ "2Az5":
/*!*********************************************************!*\
  !*** ./src/framework/auth/components/auth.component.ts ***!
  \*********************************************************/
/*! exports provided: NbAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthComponent", function() { return NbAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "BDhN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/components/icon/icon.component */ "FuSZ");
/* harmony import */ var _auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-block/auth-block.component */ "K8rk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













var NbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent(auth, location) {
        var _this = this;
        this.auth = auth;
        this.location = location;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    NbAuthComponent.prototype.back = function () {
        this.location.back();
        return false;
    };
    NbAuthComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NbAuthComponent.ɵfac = function NbAuthComponent_Factory(t) { return new (t || NbAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
    NbAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbAuthComponent, selectors: [["nb-auth"]], decls: 10, vars: 0, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"]], template: function NbAuthComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NbAuthComponent_Template_a_click_5_listener() { return ctx.back(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-auth-block");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], _theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"], _theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"], _theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_8__["NbAuthBlockComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: 0;\n  height: calc(100vh - 2 * 2.5rem);\n}\n[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n[_nghost-%COMP%]   nb-auth-block[_ngcontent-%COMP%] {\n  margin: auto;\n}\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n    border-radius: 0;\n    height: 100vh;\n  }\n}\n[_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem;\n}\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]     nb-layout .layout .layout-container .content .columns nb-layout-column {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXdvcmsvdGhlbWUvc3R5bGVzL2dsb2JhbC9fYnJlYWtwb2ludHMuc2NzcyIsInNyYy9mcmFtZXdvcmsvYXV0aC9jb21wb25lbnRzL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0tFO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBQU47QUFJRTtFQUNFLGlCQUFBO0FBRko7QUFLRTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0FBSko7QUQ4Qkk7RUN0QkE7SUFDRSxnQkFBQTtJQUNBLGFBQUE7RUFMSjtBQUNGO0FBU0k7RUFDRSxlQXZDa0I7QUFnQ3hCO0FEcUJJO0VDZkE7SUFJSSxVQUFBO0VBTk47QUFDRiIsImZpbGUiOiJzcmMvZnJhbWV3b3JrL2F1dGgvY29tcG9uZW50cy9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZ3JpZC1jb2x1bW5zOiAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aC1iYXNlOiAyNHB4ICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoczogKFxuICB4czogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHNtOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgbWQ6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBsZzogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHhsOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZVxuKSAhZGVmYXVsdDtcblxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgaXM6IDQwMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbiAgeHh4bDogMTYwMHB4XG4pO1xuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgaXM6IDM4MHB4LFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4LFxuICB4eGw6IDEzMjBweCxcbiAgeHh4bDogMTUwMHB4XG4pO1xuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIDAuMDJweCwgbnVsbCk7XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9zdHlsZXMvZ2xvYmFsL2JyZWFrcG9pbnRzJztcblxuOmhvc3Qge1xuICAkYXV0aC1sYXlvdXQtcGFkZGluZzogMi41cmVtO1xuXG4gIG5iLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogI3skYXV0aC1sYXlvdXQtcGFkZGluZ30pO1xuICB9XG5cbiAgLm5hdmlnYXRpb24gLmxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICBuYi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG5cbiAgLmxpbmtzIG5iLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgbmItY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgbmItYXV0aC1ibG9jayB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgbmItY2FyZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIG5iLWxheW91dCAubGF5b3V0IC5sYXlvdXQtY29udGFpbmVyIC5jb250ZW50IC5jb2x1bW5zIG5iLWxheW91dC1jb2x1bW4ge1xuICAgICAgcGFkZGluZzogJGF1dGgtbGF5b3V0LXBhZGRpbmc7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return NbAuthComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-auth',
                styleUrls: ['./auth.component.scss'],
                template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>\n            <nav class=\"navigation\">\n              <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n              </a>\n            </nav>\n          </nb-card-header>\n          <nb-card-body>\n            <nb-auth-block>\n              <router-outlet></router-outlet>\n            </nb-auth-block>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "4pP6":
/*!****************************************************!*\
  !*** ./src/framework/auth/services/token/token.ts ***!
  \****************************************************/
/*! exports provided: NbAuthToken, NbAuthTokenNotFoundError, NbAuthIllegalTokenError, NbAuthEmptyTokenError, NbAuthIllegalJWTTokenError, nbAuthCreateToken, decodeJwtPayload, NbAuthSimpleToken, NbAuthJWTToken, NbAuthOAuth2Token, NbAuthOAuth2JWTToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthToken", function() { return NbAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthTokenNotFoundError", function() { return NbAuthTokenNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthIllegalTokenError", function() { return NbAuthIllegalTokenError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthEmptyTokenError", function() { return NbAuthEmptyTokenError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthIllegalJWTTokenError", function() { return NbAuthIllegalJWTTokenError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbAuthCreateToken", function() { return nbAuthCreateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeJwtPayload", function() { return decodeJwtPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleToken", function() { return NbAuthSimpleToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTToken", function() { return NbAuthJWTToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthOAuth2Token", function() { return NbAuthOAuth2Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthOAuth2JWTToken", function() { return NbAuthOAuth2JWTToken; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "iVvT");
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

var NbAuthToken = /** @class */ (function () {
    function NbAuthToken() {
        this.payload = null;
    }
    NbAuthToken.prototype.getName = function () {
        return this.constructor.NAME;
    };
    NbAuthToken.prototype.getPayload = function () {
        return this.payload;
    };
    return NbAuthToken;
}());

var NbAuthTokenNotFoundError = /** @class */ (function (_super) {
    __extends(NbAuthTokenNotFoundError, _super);
    function NbAuthTokenNotFoundError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthTokenNotFoundError;
}(Error));

var NbAuthIllegalTokenError = /** @class */ (function (_super) {
    __extends(NbAuthIllegalTokenError, _super);
    function NbAuthIllegalTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthIllegalTokenError;
}(Error));

var NbAuthEmptyTokenError = /** @class */ (function (_super) {
    __extends(NbAuthEmptyTokenError, _super);
    function NbAuthEmptyTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthEmptyTokenError;
}(NbAuthIllegalTokenError));

var NbAuthIllegalJWTTokenError = /** @class */ (function (_super) {
    __extends(NbAuthIllegalJWTTokenError, _super);
    function NbAuthIllegalJWTTokenError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return NbAuthIllegalJWTTokenError;
}(NbAuthIllegalTokenError));

function nbAuthCreateToken(tokenClass, token, ownerStrategyName, createdAt) {
    return new tokenClass(token, ownerStrategyName, createdAt);
}
function decodeJwtPayload(payload) {
    if (payload.length === 0) {
        throw new NbAuthEmptyTokenError('Cannot extract from an empty payload.');
    }
    var parts = payload.split('.');
    if (parts.length !== 3) {
        throw new NbAuthIllegalJWTTokenError("The payload " + payload + " is not valid JWT payload and must consist of three parts.");
    }
    var decoded;
    try {
        decoded = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["urlBase64Decode"])(parts[1]);
    }
    catch (e) {
        throw new NbAuthIllegalJWTTokenError("The payload " + payload + " is not valid JWT payload and cannot be parsed.");
    }
    if (!decoded) {
        throw new NbAuthIllegalJWTTokenError("The payload " + payload + " is not valid JWT payload and cannot be decoded.");
    }
    return JSON.parse(decoded);
}
/**
 * Wrapper for simple (text) token
 */
var NbAuthSimpleToken = /** @class */ (function (_super) {
    __extends(NbAuthSimpleToken, _super);
    function NbAuthSimpleToken(token, ownerStrategyName, createdAt) {
        var _this = _super.call(this) || this;
        _this.token = token;
        _this.ownerStrategyName = ownerStrategyName;
        _this.createdAt = createdAt;
        try {
            _this.parsePayload();
        }
        catch (err) {
            if (!(err instanceof NbAuthTokenNotFoundError)) {
                // token is present but has got a problem, including illegal
                throw err;
            }
        }
        _this.createdAt = _this.prepareCreatedAt(createdAt);
        return _this;
    }
    NbAuthSimpleToken.prototype.parsePayload = function () {
        this.payload = null;
    };
    NbAuthSimpleToken.prototype.prepareCreatedAt = function (date) {
        return date ? date : new Date();
    };
    /**
     * Returns the token's creation date
     * @returns {Date}
     */
    NbAuthSimpleToken.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Returns the token value
     * @returns string
     */
    NbAuthSimpleToken.prototype.getValue = function () {
        return this.token;
    };
    NbAuthSimpleToken.prototype.getOwnerStrategyName = function () {
        return this.ownerStrategyName;
    };
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    NbAuthSimpleToken.prototype.isValid = function () {
        return !!this.getValue();
    };
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    NbAuthSimpleToken.prototype.toString = function () {
        return !!this.token ? this.token : '';
    };
    NbAuthSimpleToken.NAME = 'nb:auth:simple:token';
    return NbAuthSimpleToken;
}(NbAuthToken));

/**
 * Wrapper for JWT token with additional methods.
 */
var NbAuthJWTToken = /** @class */ (function (_super) {
    __extends(NbAuthJWTToken, _super);
    function NbAuthJWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * for JWT token, the iat (issued at) field of the token payload contains the creation Date
     */
    NbAuthJWTToken.prototype.prepareCreatedAt = function (date) {
        var decoded = this.getPayload();
        return decoded && decoded.iat ? new Date(Number(decoded.iat) * 1000) : _super.prototype.prepareCreatedAt.call(this, date);
    };
    /**
     * Returns payload object
     * @returns any
     */
    NbAuthJWTToken.prototype.parsePayload = function () {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found. ');
        }
        this.payload = decodeJwtPayload(this.token);
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    NbAuthJWTToken.prototype.getTokenExpDate = function () {
        var decoded = this.getPayload();
        if (decoded && !decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp); // 'cause jwt token are set in seconds
        return date;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    NbAuthJWTToken.prototype.isValid = function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    NbAuthJWTToken.NAME = 'nb:auth:jwt:token';
    return NbAuthJWTToken;
}(NbAuthSimpleToken));

var prepareOAuth2Token = function (data) {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        }
        catch (e) { }
    }
    return data;
};
/**
 * Wrapper for OAuth2 token whose access_token is a JWT Token
 */
var NbAuthOAuth2Token = /** @class */ (function (_super) {
    __extends(NbAuthOAuth2Token, _super);
    function NbAuthOAuth2Token(data, ownerStrategyName, createdAt) {
        if (data === void 0) { data = {}; }
        // we may get it as string when retrieving from a storage
        return _super.call(this, prepareOAuth2Token(data), ownerStrategyName, createdAt) || this;
    }
    /**
     * Returns the token value
     * @returns string
     */
    NbAuthOAuth2Token.prototype.getValue = function () {
        return this.token.access_token;
    };
    /**
     * Returns the refresh token
     * @returns string
     */
    NbAuthOAuth2Token.prototype.getRefreshToken = function () {
        return this.token.refresh_token;
    };
    /**
     *  put refreshToken in the token payload
      * @param refreshToken
     */
    NbAuthOAuth2Token.prototype.setRefreshToken = function (refreshToken) {
        this.token.refresh_token = refreshToken;
    };
    /**
     * Parses token payload
     * @returns any
     */
    NbAuthOAuth2Token.prototype.parsePayload = function () {
        if (!this.token) {
            throw new NbAuthTokenNotFoundError('Token not found.');
        }
        else {
            if (!Object.keys(this.token).length) {
                throw new NbAuthEmptyTokenError('Cannot extract payload from an empty token.');
            }
        }
        this.payload = this.token;
    };
    /**
     * Returns the token type
     * @returns string
     */
    NbAuthOAuth2Token.prototype.getType = function () {
        return this.token.token_type;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    NbAuthOAuth2Token.prototype.isValid = function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    NbAuthOAuth2Token.prototype.getTokenExpDate = function () {
        if (!this.token.hasOwnProperty('expires_in')) {
            return null;
        }
        return new Date(this.createdAt.getTime() + Number(this.token.expires_in) * 1000);
    };
    /**
     * Convert to string
     * @returns {string}
     */
    NbAuthOAuth2Token.prototype.toString = function () {
        return JSON.stringify(this.token);
    };
    NbAuthOAuth2Token.NAME = 'nb:auth:oauth2:token';
    return NbAuthOAuth2Token;
}(NbAuthSimpleToken));

/**
 * Wrapper for OAuth2 token embedding JWT tokens
 */
var NbAuthOAuth2JWTToken = /** @class */ (function (_super) {
    __extends(NbAuthOAuth2JWTToken, _super);
    function NbAuthOAuth2JWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbAuthOAuth2JWTToken.prototype.parsePayload = function () {
        _super.prototype.parsePayload.call(this);
        this.parseAccessTokenPayload();
    };
    NbAuthOAuth2JWTToken.prototype.parseAccessTokenPayload = function () {
        var accessToken = this.getValue();
        if (!accessToken) {
            throw new NbAuthTokenNotFoundError('access_token key not found.');
        }
        this.accessTokenPayload = decodeJwtPayload(accessToken);
    };
    /**
     * Returns access token payload
     * @returns any
     */
    NbAuthOAuth2JWTToken.prototype.getAccessTokenPayload = function () {
        return this.accessTokenPayload;
    };
    /**
     * for Oauth2 JWT token, the iat (issued at) field of the access_token payload
     */
    NbAuthOAuth2JWTToken.prototype.prepareCreatedAt = function (date) {
        var payload = this.accessTokenPayload;
        return payload && payload.iat ? new Date(Number(payload.iat) * 1000) : _super.prototype.prepareCreatedAt.call(this, date);
    };
    /**
     * Is token valid
     * @returns {boolean}
     */
    NbAuthOAuth2JWTToken.prototype.isValid = function () {
        return this.accessTokenPayload && _super.prototype.isValid.call(this);
    };
    /**
     * Returns expiration date :
     * - exp if set,
     * - super.getExpDate() otherwise
     * @returns Date
     */
    NbAuthOAuth2JWTToken.prototype.getTokenExpDate = function () {
        if (this.accessTokenPayload && this.accessTokenPayload.hasOwnProperty('exp')) {
            var date = new Date(0);
            date.setUTCSeconds(this.accessTokenPayload.exp);
            return date;
        }
        else {
            return _super.prototype.getTokenExpDate.call(this);
        }
    };
    NbAuthOAuth2JWTToken.NAME = 'nb:auth:oauth2:jwt:token';
    return NbAuthOAuth2JWTToken;
}(NbAuthOAuth2Token));



/***/ }),

/***/ "6y2k":
/*!***************************************************************!*\
  !*** ./src/framework/auth/strategies/dummy/dummy-strategy.ts ***!
  \***************************************************************/
/*! exports provided: NbDummyAuthStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbDummyAuthStrategy", function() { return NbDummyAuthStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-strategy */ "t+5P");
/* harmony import */ var _services_auth_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-result */ "V1Ee");
/* harmony import */ var _dummy_strategy_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dummy-strategy-options */ "x1Qk");
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







/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
var NbDummyAuthStrategy = /** @class */ (function (_super) {
    __extends(NbDummyAuthStrategy, _super);
    function NbDummyAuthStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = _dummy_strategy_options__WEBPACK_IMPORTED_MODULE_5__["dummyStrategyOptions"];
        return _this;
    }
    NbDummyAuthStrategy.setup = function (options) {
        return [NbDummyAuthStrategy, options];
    };
    NbDummyAuthStrategy.prototype.authenticate = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.register = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.requestPassword = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.resetPassword = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.logout = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.refreshToken = function (data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.createDummyResult(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.createDummyResult = function (data) {
        if (this.getOption('alwaysFail')) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_4__["NbAuthResult"](false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        try {
            var token = this.createToken('test token', true);
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_4__["NbAuthResult"](true, this.createSuccessResponse(data), '/', [], ['Successfully logged in.'], token);
        }
        catch (err) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_4__["NbAuthResult"](false, this.createFailResponse(data), null, [err.message]);
        }
    };
    NbDummyAuthStrategy.ɵfac = function NbDummyAuthStrategy_Factory(t) { return ɵNbDummyAuthStrategy_BaseFactory(t || NbDummyAuthStrategy); };
    NbDummyAuthStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbDummyAuthStrategy, factory: NbDummyAuthStrategy.ɵfac });
    return NbDummyAuthStrategy;
}(_auth_strategy__WEBPACK_IMPORTED_MODULE_3__["NbAuthStrategy"]));

var ɵNbDummyAuthStrategy_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NbDummyAuthStrategy);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbDummyAuthStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "89WS":
/*!*************************************************************************!*\
  !*** ./src/framework/auth/strategies/oauth2/oauth2-strategy.options.ts ***!
  \*************************************************************************/
/*! exports provided: NbOAuth2ResponseType, NbOAuth2GrantType, NbOAuth2ClientAuthMethod, NbOAuth2AuthStrategyOptions, auth2StrategyOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2ResponseType", function() { return NbOAuth2ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2GrantType", function() { return NbOAuth2GrantType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2ClientAuthMethod", function() { return NbOAuth2ClientAuthMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2AuthStrategyOptions", function() { return NbOAuth2AuthStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth2StrategyOptions", function() { return auth2StrategyOptions; });
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/token/token */ "4pP6");
/* harmony import */ var _auth_strategy_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-strategy-options */ "NUSx");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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


var NbOAuth2ResponseType;
(function (NbOAuth2ResponseType) {
    NbOAuth2ResponseType["CODE"] = "code";
    NbOAuth2ResponseType["TOKEN"] = "token";
})(NbOAuth2ResponseType || (NbOAuth2ResponseType = {}));
// TODO: client_credentials
var NbOAuth2GrantType;
(function (NbOAuth2GrantType) {
    NbOAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    NbOAuth2GrantType["PASSWORD"] = "password";
    NbOAuth2GrantType["REFRESH_TOKEN"] = "refresh_token";
})(NbOAuth2GrantType || (NbOAuth2GrantType = {}));
var NbOAuth2ClientAuthMethod;
(function (NbOAuth2ClientAuthMethod) {
    NbOAuth2ClientAuthMethod["NONE"] = "none";
    NbOAuth2ClientAuthMethod["BASIC"] = "basic";
    NbOAuth2ClientAuthMethod["REQUEST_BODY"] = "request-body";
})(NbOAuth2ClientAuthMethod || (NbOAuth2ClientAuthMethod = {}));
var NbOAuth2AuthStrategyOptions = /** @class */ (function (_super) {
    __extends(NbOAuth2AuthStrategyOptions, _super);
    function NbOAuth2AuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseEndpoint = '';
        _this.clientId = '';
        _this.clientSecret = '';
        _this.clientAuthMethod = NbOAuth2ClientAuthMethod.NONE;
        _this.redirect = {
            success: '/',
            failure: null,
        };
        _this.defaultErrors = ['Something went wrong, please try again.'];
        _this.defaultMessages = ['You have been successfully authenticated.'];
        _this.authorize = {
            endpoint: 'authorize',
            responseType: NbOAuth2ResponseType.CODE,
            requireValidToken: true,
        };
        _this.token = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
            requireValidToken: true,
            class: _services_token_token__WEBPACK_IMPORTED_MODULE_0__["NbAuthOAuth2Token"],
        };
        _this.refresh = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.REFRESH_TOKEN,
            requireValidToken: true,
        };
        return _this;
    }
    return NbOAuth2AuthStrategyOptions;
}(_auth_strategy_options__WEBPACK_IMPORTED_MODULE_1__["NbAuthStrategyOptions"]));

var auth2StrategyOptions = new NbOAuth2AuthStrategyOptions();


/***/ }),

/***/ "8qs0":
/*!**********************************************************************************!*\
  !*** ./src/framework/auth/components/reset-password/reset-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NbResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbResetPasswordComponent", function() { return NbResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "0ICW");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "iVvT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "BDhN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../theme/components/button/button.component */ "b9/t");
/* harmony import */ var _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../theme/components/alert/alert.component */ "Unyt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













function NbResetPasswordComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r8);
} }
function NbResetPasswordComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbResetPasswordComponent_nb_alert_4_li_5_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NbResetPasswordComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r10);
} }
function NbResetPasswordComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbResetPasswordComponent_nb_alert_5_li_5_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function NbResetPasswordComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbResetPasswordComponent_ng_container_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Password should contains from ", ctx_r12.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r12.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function NbResetPasswordComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbResetPasswordComponent_ng_container_13_p_1_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbResetPasswordComponent_ng_container_13_p_2_Template, 2, 2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));
} }
function NbResetPasswordComponent_ng_container_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password confirmation is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbResetPasswordComponent_ng_container_19_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password does not match the confirm password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbResetPasswordComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbResetPasswordComponent_ng_container_19_p_1_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbResetPasswordComponent_ng_container_19_p_2_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.errors == null ? null : _r5.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.value != _r5.value && !(_r5.errors == null ? null : _r5.errors.required));
} }
var NbResetPasswordComponent = /** @class */ (function () {
    function NbResetPasswordComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.strategy = this.getConfigValue('forms.resetPassword.strategy');
    }
    NbResetPasswordComponent.prototype.resetPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbResetPasswordComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.options, key, null);
    };
    NbResetPasswordComponent.ɵfac = function NbResetPasswordComponent_Factory(t) { return new (t || NbResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NbResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbResetPasswordComponent, selectors: [["nb-reset-password-page"]], decls: 29, vars: 17, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["resetPassForm", "ngForm"], [1, "form-control-group"], ["for", "input-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-password", "name", "password", "placeholder", "New Password", "autofocus", "", "fullWidth", "", "fieldSize", "large", 1, "first", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], [4, "ngIf"], [1, "form-group"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "id", "input-re-password", "name", "rePass", "type", "password", "placeholder", "Confirm Password", "fullWidth", "", "fieldSize", "large", 1, "last", 3, "ngModel", "status", "required", "ngModelChange"], ["rePass", "ngModel"], ["nbButton", "", "status", "primary", "fullWidth", "", "size", "large", 3, "disabled"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], ["routerLink", "../login", 1, "text-link"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function NbResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please set a new password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NbResetPasswordComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbResetPasswordComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NbResetPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.resetPass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbResetPasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NbResetPasswordComponent_ng_container_13_Template, 3, 2, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirm Password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbResetPasswordComponent_Template_input_ngModelChange_17_listener($event) { return ctx.user.confirmPassword = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NbResetPasswordComponent_ng_container_19_Template, 3, 2, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Change password ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Back to Log In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.confirmPassword)("status", _r5.touched ? _r5.invalid || _r3.value != _r5.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !_r2.valid);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXdvcmsvYXV0aC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUFNRTtFQUNFLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2ZyYW1ld29yay9hdXRoL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG46aG9zdCB7XG4gIC5mb3JtLWdyb3VwOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
    return NbResetPasswordComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-reset-password-page',
                styleUrls: ['./reset-password.component.scss'],
                templateUrl: './reset-password.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9S34":
/*!**********************************************************************!*\
  !*** ./src/framework/auth/components/register/register.component.ts ***!
  \**********************************************************************/
/*! exports provided: NbRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRegisterComponent", function() { return NbRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "0ICW");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "iVvT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "BDhN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../theme/components/button/button.component */ "b9/t");
/* harmony import */ var _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../theme/components/alert/alert.component */ "Unyt");
/* harmony import */ var _theme_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../theme/components/checkbox/checkbox.component */ "g1JU");
/* harmony import */ var _theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../theme/components/icon/icon.component */ "FuSZ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */















function NbRegisterComponent_nb_alert_2_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r14);
} }
function NbRegisterComponent_nb_alert_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbRegisterComponent_nb_alert_2_li_5_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NbRegisterComponent_nb_alert_3_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r16);
} }
function NbRegisterComponent_nb_alert_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbRegisterComponent_nb_alert_3_li_5_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function NbRegisterComponent_ng_container_11_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRegisterComponent_ng_container_11_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Full name should contains from ", ctx_r18.getConfigValue("forms.validation.fullName.minLength"), " to ", ctx_r18.getConfigValue("forms.validation.fullName.maxLength"), " characters ");
} }
function NbRegisterComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRegisterComponent_ng_container_11_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_ng_container_11_p_2_Template, 2, 2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));
} }
function NbRegisterComponent_ng_container_17_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRegisterComponent_ng_container_17_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email should be the real one! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRegisterComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRegisterComponent_ng_container_17_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_ng_container_17_p_2_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.pattern);
} }
function NbRegisterComponent_ng_container_23_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRegisterComponent_ng_container_23_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Password should contain from ", ctx_r22.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r22.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function NbRegisterComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRegisterComponent_ng_container_23_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_ng_container_23_p_2_Template, 2, 2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.minlength) || (_r7.errors == null ? null : _r7.errors.maxlength));
} }
function NbRegisterComponent_ng_container_29_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password confirmation is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRegisterComponent_ng_container_29_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password does not match the confirm password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRegisterComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRegisterComponent_ng_container_29_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_ng_container_29_p_2_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.value != _r9.value && !(_r9.errors == null ? null : _r9.errors.required));
} }
function NbRegisterComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbRegisterComponent_div_30_Template_nb_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.user.terms = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Agree to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.user.terms)("required", ctx_r11.getConfigValue("forms.register.terms"));
} }
function NbRegisterComponent_section_33_ng_container_3_a_1_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 43);
} if (rf & 2) {
    var socialLink_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", socialLink_r28.icon);
} }
function NbRegisterComponent_section_33_ng_container_3_a_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    var socialLink_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](socialLink_r28.title);
} }
function NbRegisterComponent_section_33_ng_container_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRegisterComponent_section_33_ng_container_3_a_1_nb_icon_1_Template, 1, 1, "nb-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_section_33_ng_container_3_a_1_ng_template_2_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var socialLink_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("with-icon", socialLink_r28.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", socialLink_r28.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("target", socialLink_r28.target)("class", socialLink_r28.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r28.icon)("ngIfElse", _r32);
} }
function NbRegisterComponent_section_33_ng_container_3_a_2_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 43);
} if (rf & 2) {
    var socialLink_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", socialLink_r28.icon);
} }
function NbRegisterComponent_section_33_ng_container_3_a_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    var socialLink_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](socialLink_r28.title);
} }
function NbRegisterComponent_section_33_ng_container_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRegisterComponent_section_33_ng_container_3_a_2_nb_icon_1_Template, 1, 1, "nb-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_section_33_ng_container_3_a_2_ng_template_2_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var socialLink_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("with-icon", socialLink_r28.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", socialLink_r28.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", socialLink_r28.target)("class", socialLink_r28.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r28.icon)("ngIfElse", _r38);
} }
function NbRegisterComponent_section_33_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRegisterComponent_section_33_ng_container_3_a_1_Template, 4, 7, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_section_33_ng_container_3_a_2_Template, 4, 7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var socialLink_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r28.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r28.url);
} }
function NbRegisterComponent_section_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or enter with: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NbRegisterComponent_section_33_ng_container_3_Template, 3, 2, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.socialLinks);
} }
var NbRegisterComponent = /** @class */ (function () {
    function NbRegisterComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    NbRegisterComponent.prototype.register = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbRegisterComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.options, key, null);
    };
    NbRegisterComponent.ɵfac = function NbRegisterComponent_Factory(t) { return new (t || NbRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NbRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbRegisterComponent, selectors: [["nb-register"]], decls: 38, vars: 31, consts: [["id", "title", 1, "title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-name", 1, "label"], ["nbInput", "", "id", "input-name", "name", "fullName", "placeholder", "Full name", "autofocus", "", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["fullName", "ngModel"], [4, "ngIf"], ["for", "input-email", 1, "label"], ["nbInput", "", "id", "input-email", "name", "email", "pattern", ".+@.+..+", "placeholder", "Email address", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], ["for", "input-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-password", "name", "password", "placeholder", "Password", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "placeholder", "Confirm Password", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["rePass", "ngModel"], ["class", "form-control-group accept-group", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["class", "links", "aria-label", "Social sign in", 4, "ngIf"], ["aria-label", "Sign in", 1, "another-action"], ["routerLink", "../login", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "form-control-group", "accept-group"], ["name", "terms", 3, "ngModel", "required", "ngModelChange"], ["href", "#", "target", "_blank"], ["aria-label", "Social sign in", 1, "links"], [1, "socials"], [4, "ngFor", "ngForOf"], [3, "routerLink", "with-icon", 4, "ngIf"], [3, "with-icon", 4, "ngIf"], [3, "routerLink"], [3, "icon", 4, "ngIf", "ngIfElse"], ["title", ""], [3, "icon"]], template: function NbRegisterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRegisterComponent_nb_alert_2_Template, 6, 1, "nb-alert", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NbRegisterComponent_nb_alert_3_Template, 6, 1, "nb-alert", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NbRegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.register(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.fullName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NbRegisterComponent_ng_container_11_Template, 3, 2, "ng-container", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email address:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NbRegisterComponent_ng_container_17_Template, 3, 2, "ng-container", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NbRegisterComponent_ng_container_23_Template, 3, 2, "ng-container", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Repeat password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbRegisterComponent_Template_input_ngModelChange_27_listener($event) { return ctx.user.confirmPassword = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NbRegisterComponent_ng_container_29_Template, 3, 2, "ng-container", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NbRegisterComponent_div_30_Template, 6, 2, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Register ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NbRegisterComponent_section_33_Template, 4, 1, "section", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Already have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Log in");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.fullName)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.fullName.required"))("minlength", ctx.getConfigValue("forms.validation.fullName.minLength"))("maxlength", ctx.getConfigValue("forms.validation.fullName.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("status", _r7.dirty ? _r7.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r7.invalid && _r7.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.confirmPassword)("status", _r9.dirty ? _r9.invalid || _r7.value != _r9.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r9.invalid && _r9.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getConfigValue("forms.register.terms"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !_r2.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialLinks && ctx.socialLinks.length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _theme_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__["NbCheckboxComponent"], _theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["NbIconComponent"]], styles: ["[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXdvcmsvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUFNRTtFQUNFLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2ZyYW1ld29yay9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG46aG9zdCB7XG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });
    return NbRegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-register',
                styleUrls: ['./register.component.scss'],
                templateUrl: './register.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9XlZ":
/*!******************************************************************!*\
  !*** ./src/framework/auth/components/logout/logout.component.ts ***!
  \******************************************************************/
/*! exports provided: NbLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLogoutComponent", function() { return NbLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "0ICW");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "iVvT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "BDhN");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var NbLogoutComponent = /** @class */ (function () {
    function NbLogoutComponent(service, options, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    NbLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.strategy);
    };
    NbLogoutComponent.prototype.logout = function (strategy) {
        var _this = this;
        this.service.logout(strategy).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLogoutComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.options, key, null);
    };
    NbLogoutComponent.ɵfac = function NbLogoutComponent_Factory(t) { return new (t || NbLogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NbLogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbLogoutComponent, selectors: [["nb-logout"]], decls: 2, vars: 0, template: function NbLogoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logging out, please wait...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return NbLogoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbLogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-logout',
                templateUrl: './logout.component.html',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Abgx":
/*!*******************************************!*\
  !*** ./src/framework/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: nbStrategiesFactory, nbTokensFactory, nbOptionsFactory, nbNoOpInterceptorFilter, NbAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbStrategiesFactory", function() { return nbStrategiesFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbTokensFactory", function() { return nbTokensFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbOptionsFactory", function() { return nbOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbNoOpInterceptorFilter", function() { return nbNoOpInterceptorFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthModule", function() { return NbAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "BDhN");
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/token/token */ "4pP6");
/* harmony import */ var _services_token_token_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/token/token-storage */ "Y4k2");
/* harmony import */ var _services_token_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/token/token.service */ "Bc6B");
/* harmony import */ var _services_token_token_parceler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/token/token-parceler */ "znn7");
/* harmony import */ var _strategies_dummy_dummy_strategy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./strategies/dummy/dummy-strategy */ "6y2k");
/* harmony import */ var _strategies_oauth2_oauth2_strategy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./strategies/oauth2/oauth2-strategy */ "X/Iy");
/* harmony import */ var _strategies_password_password_strategy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./strategies/password/password-strategy */ "++eV");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.options */ "0ICW");
/* harmony import */ var _components_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth.component */ "2Az5");
/* harmony import */ var _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/auth-block/auth-block.component */ "K8rk");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "DYSn");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/register/register.component */ "9S34");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/logout/logout.component */ "9XlZ");
/* harmony import */ var _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/request-password/request-password.component */ "Lu/0");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "8qs0");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers */ "iVvT");























function nbStrategiesFactory(options, injector) {
    var strategies = [];
    options.strategies
        .forEach(function (_a) {
        var strategyClass = _a[0], strategyOptions = _a[1];
        var strategy = injector.get(strategyClass);
        strategy.setOptions(strategyOptions);
        strategies.push(strategy);
    });
    return strategies;
}
function nbTokensFactory(strategies) {
    var tokens = [];
    strategies
        .forEach(function (strategy) {
        tokens.push(strategy.getOption('token.class'));
    });
    return tokens;
}
function nbOptionsFactory(options) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_21__["deepExtend"])(_auth_options__WEBPACK_IMPORTED_MODULE_13__["defaultAuthOptions"], options);
}
function nbNoOpInterceptorFilter(req) {
    return true;
}
var NbAuthModule = /** @class */ (function () {
    function NbAuthModule() {
    }
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule,
            providers: [
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_USER_OPTIONS"], useValue: nbAuthOptions },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_OPTIONS"], useFactory: nbOptionsFactory, deps: [_auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_USER_OPTIONS"]] },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_STRATEGIES"], useFactory: nbStrategiesFactory, deps: [_auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_OPTIONS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]] },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_TOKENS"], useFactory: nbTokensFactory, deps: [_auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_STRATEGIES"]] },
                { provide: _services_token_token_parceler__WEBPACK_IMPORTED_MODULE_9__["NB_AUTH_FALLBACK_TOKEN"], useValue: _services_token_token__WEBPACK_IMPORTED_MODULE_6__["NbAuthSimpleToken"] },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_INTERCEPTOR_HEADER"], useValue: 'Authorization' },
                { provide: _auth_options__WEBPACK_IMPORTED_MODULE_13__["NB_AUTH_TOKEN_INTERCEPTOR_FILTER"], useValue: nbNoOpInterceptorFilter },
                { provide: _services_token_token_storage__WEBPACK_IMPORTED_MODULE_7__["NbTokenStorage"], useClass: _services_token_token_storage__WEBPACK_IMPORTED_MODULE_7__["NbTokenLocalStorage"] },
                _services_token_token_parceler__WEBPACK_IMPORTED_MODULE_9__["NbAuthTokenParceler"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["NbAuthService"],
                _services_token_token_service__WEBPACK_IMPORTED_MODULE_8__["NbTokenService"],
                _strategies_dummy_dummy_strategy__WEBPACK_IMPORTED_MODULE_10__["NbDummyAuthStrategy"],
                _strategies_password_password_strategy__WEBPACK_IMPORTED_MODULE_12__["NbPasswordAuthStrategy"],
                _strategies_oauth2_oauth2_strategy__WEBPACK_IMPORTED_MODULE_11__["NbOAuth2AuthStrategy"],
            ],
        };
    };
    NbAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NbAuthModule });
    NbAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NbAuthModule_Factory(t) { return new (t || NbAuthModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
            ]] });
    return NbAuthModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NbAuthModule, { declarations: [_components_auth_component__WEBPACK_IMPORTED_MODULE_14__["NbAuthComponent"],
        _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_15__["NbAuthBlockComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["NbLoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["NbRegisterComponent"],
        _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_19__["NbRequestPasswordComponent"],
        _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["NbResetPasswordComponent"],
        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["NbLogoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]], exports: [_components_auth_component__WEBPACK_IMPORTED_MODULE_14__["NbAuthComponent"],
        _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_15__["NbAuthBlockComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["NbLoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["NbRegisterComponent"],
        _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_19__["NbRequestPasswordComponent"],
        _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["NbResetPasswordComponent"],
        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["NbLogoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
                ],
                declarations: [
                    _components_auth_component__WEBPACK_IMPORTED_MODULE_14__["NbAuthComponent"],
                    _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_15__["NbAuthBlockComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["NbLoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["NbRegisterComponent"],
                    _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_19__["NbRequestPasswordComponent"],
                    _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["NbResetPasswordComponent"],
                    _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["NbLogoutComponent"],
                ],
                exports: [
                    _components_auth_component__WEBPACK_IMPORTED_MODULE_14__["NbAuthComponent"],
                    _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_15__["NbAuthBlockComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["NbLoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["NbRegisterComponent"],
                    _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_19__["NbRequestPasswordComponent"],
                    _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["NbResetPasswordComponent"],
                    _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["NbLogoutComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "BDhN":
/*!*****************************************************!*\
  !*** ./src/framework/auth/services/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: NbAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthService", function() { return NbAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.options */ "0ICW");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token/token.service */ "Bc6B");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
var NbAuthService = /** @class */ (function () {
    function NbAuthService(tokenService, strategies) {
        this.tokenService = tokenService;
        this.strategies = strategies;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.getToken = function () {
        return this.tokenService.get();
    };
    /**
     * Returns true if auth token is present in the token storage
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.isAuthenticated = function () {
        return this.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (token) { return token.isValid(); }));
    };
    /**
     * Returns true if valid auth token is present in the token storage.
     * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.isAuthenticatedOrRefresh = function () {
        var _this = this;
        return this.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (token) {
            if (token.getValue() && !token.isValid()) {
                return _this.refreshToken(token.getOwnerStrategyName(), token)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (res) {
                    if (res.isSuccess()) {
                        return _this.isAuthenticated();
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                    }
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(token.isValid());
            }
        }));
    };
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    NbAuthService.prototype.onTokenChange = function () {
        return this.tokenService.tokenChange();
    };
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.onAuthenticationChange = function () {
        return this.onTokenChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (token) { return token.isValid(); }));
    };
    /**
     * Authenticates with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.authenticate = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).authenticate(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Registers with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.register = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).register(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Sign outs with the selected strategy
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param strategyName
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.logout = function (strategyName) {
        var _this = this;
        return this.getStrategy(strategyName).logout()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            if (result.isSuccess()) {
                _this.tokenService.clear()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return result; }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        }));
    };
    /**
     * Sends forgot password request to the selected strategy
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.requestPassword = function (strategyName, data) {
        return this.getStrategy(strategyName).requestPassword(data);
    };
    /**
     * Tries to reset password with the selected strategy
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.resetPassword = function (strategyName, data) {
        return this.getStrategy(strategyName).resetPassword(data);
    };
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * refreshToken('email', {token: token})
     *
     * @param {string} strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.refreshToken = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).refreshToken(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    NbAuthService.prototype.getStrategy = function (strategyName) {
        var found = this.strategies.find(function (strategy) { return strategy.getName() === strategyName; });
        if (!found) {
            throw new TypeError("There is no Auth Strategy registered under '" + strategyName + "' name");
        }
        return found;
    };
    NbAuthService.prototype.processResultToken = function (result) {
        if (result.isSuccess() && result.getToken()) {
            return this.tokenService.set(result.getToken())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (token) {
                return result;
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
    };
    NbAuthService.ɵfac = function NbAuthService_Factory(t) { return new (t || NbAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_4__["NbTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_STRATEGIES"])); };
    NbAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbAuthService, factory: NbAuthService.ɵfac });
    return NbAuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _token_token_service__WEBPACK_IMPORTED_MODULE_4__["NbTokenService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_STRATEGIES"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Bc6B":
/*!************************************************************!*\
  !*** ./src/framework/auth/services/token/token.service.ts ***!
  \************************************************************/
/*! exports provided: NbTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTokenService", function() { return NbTokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage */ "Y4k2");






/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
var NbTokenService = /** @class */ (function () {
    function NbTokenService(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.tokenChange = function () {
        return this.token$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (value) { return !!value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.set = function (token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.get = function () {
        var token = this.tokenStorage.get();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(token);
    };
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.clear = function () {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    NbTokenService.prototype.publishStoredToken = function () {
        this.token$.next(this.tokenStorage.get());
    };
    NbTokenService.ɵfac = function NbTokenService_Factory(t) { return new (t || NbTokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage__WEBPACK_IMPORTED_MODULE_3__["NbTokenStorage"])); };
    NbTokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbTokenService, factory: NbTokenService.ɵfac });
    return NbTokenService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbTokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _token_storage__WEBPACK_IMPORTED_MODULE_3__["NbTokenStorage"] }]; }, null); })();


/***/ }),

/***/ "CVWE":
/*!*****************************************************************************!*\
  !*** ./src/framework/auth/strategies/password/password-strategy-options.ts ***!
  \*****************************************************************************/
/*! exports provided: NbPasswordAuthStrategyOptions, passwordStrategyOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbPasswordAuthStrategyOptions", function() { return NbPasswordAuthStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordStrategyOptions", function() { return passwordStrategyOptions; });
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/token/token */ "4pP6");
/* harmony import */ var _auth_strategy_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-strategy-options */ "NUSx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "iVvT");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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



var NbPasswordAuthStrategyOptions = /** @class */ (function (_super) {
    __extends(NbPasswordAuthStrategyOptions, _super);
    function NbPasswordAuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseEndpoint = '/api/auth/';
        _this.login = {
            alwaysFail: false,
            endpoint: 'login',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
        };
        _this.register = {
            alwaysFail: false,
            endpoint: 'register',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
        };
        _this.requestPass = {
            endpoint: 'request-pass',
            method: 'post',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
        };
        _this.resetPass = {
            endpoint: 'reset-pass',
            method: 'put',
            redirect: {
                success: '/',
                failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
        };
        _this.logout = {
            alwaysFail: false,
            endpoint: 'logout',
            method: 'delete',
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        };
        _this.refreshToken = {
            endpoint: 'refresh-token',
            method: 'post',
            requireValidToken: true,
            redirect: {
                success: null,
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your token has been successfully refreshed.'],
        };
        _this.token = {
            class: _services_token_token__WEBPACK_IMPORTED_MODULE_0__["NbAuthSimpleToken"],
            key: 'data.token',
            getter: function (module, res, options) { return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(res.body, options.token.key); },
        };
        _this.errors = {
            key: 'data.errors',
            getter: function (module, res, options) { return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(res.error, options.errors.key, options[module].defaultErrors); },
        };
        _this.messages = {
            key: 'data.messages',
            getter: function (module, res, options) { return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(res.body, options.messages.key, options[module].defaultMessages); },
        };
        return _this;
    }
    return NbPasswordAuthStrategyOptions;
}(_auth_strategy_options__WEBPACK_IMPORTED_MODULE_1__["NbAuthStrategyOptions"]));

var passwordStrategyOptions = new NbPasswordAuthStrategyOptions();


/***/ }),

/***/ "DEW+":
/*!************************************************************************!*\
  !*** ./src/framework/auth/services/interceptors/simple-interceptor.ts ***!
  \************************************************************************/
/*! exports provided: NbAuthSimpleInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleInterceptor", function() { return NbAuthSimpleInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "BDhN");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.options */ "0ICW");





var NbAuthSimpleInterceptor = /** @class */ (function () {
    function NbAuthSimpleInterceptor(injector, headerName) {
        if (headerName === void 0) { headerName = 'Authorization'; }
        this.injector = injector;
        this.headerName = headerName;
    }
    NbAuthSimpleInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (token) {
            var _a;
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: (_a = {},
                        _a[_this.headerName] = token.getValue(),
                        _a),
                });
            }
            return next.handle(req);
        }));
    };
    Object.defineProperty(NbAuthSimpleInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]);
        },
        enumerable: false,
        configurable: true
    });
    NbAuthSimpleInterceptor.ɵfac = function NbAuthSimpleInterceptor_Factory(t) { return new (t || NbAuthSimpleInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_INTERCEPTOR_HEADER"])); };
    NbAuthSimpleInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbAuthSimpleInterceptor, factory: NbAuthSimpleInterceptor.ɵfac });
    return NbAuthSimpleInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAuthSimpleInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_INTERCEPTOR_HEADER"]]
            }] }]; }, null); })();


/***/ }),

/***/ "DYSn":
/*!****************************************************************!*\
  !*** ./src/framework/auth/components/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: NbLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbLoginComponent", function() { return NbLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "0ICW");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "iVvT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "BDhN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../theme/components/button/button.component */ "b9/t");
/* harmony import */ var _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../theme/components/alert/alert.component */ "Unyt");
/* harmony import */ var _theme_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../theme/components/checkbox/checkbox.component */ "g1JU");
/* harmony import */ var _theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../theme/components/icon/icon.component */ "FuSZ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */















function NbLoginComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r10);
} }
function NbLoginComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbLoginComponent_nb_alert_4_li_5_Template, 2, 1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NbLoginComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r12);
} }
function NbLoginComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbLoginComponent_nb_alert_5_li_5_Template, 2, 1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function NbLoginComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbLoginComponent_ng_container_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email should be the real one! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbLoginComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbLoginComponent_ng_container_13_p_1_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbLoginComponent_ng_container_13_p_2_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
function NbLoginComponent_ng_container_22_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbLoginComponent_ng_container_22_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Password should contain from ", ctx_r16.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r16.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function NbLoginComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbLoginComponent_ng_container_22_p_1_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbLoginComponent_ng_container_22_p_2_Template, 2, 2, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.minlength) || (_r5.errors == null ? null : _r5.errors.maxlength));
} }
function NbLoginComponent_nb_checkbox_24_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbLoginComponent_nb_checkbox_24_Template_nb_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.user.rememberMe = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.user.rememberMe);
} }
function NbLoginComponent_section_27_ng_container_3_a_1_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 39);
} if (rf & 2) {
    var socialLink_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", socialLink_r20.icon);
} }
function NbLoginComponent_section_27_ng_container_3_a_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    var socialLink_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](socialLink_r20.title);
} }
function NbLoginComponent_section_27_ng_container_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbLoginComponent_section_27_ng_container_3_a_1_nb_icon_1_Template, 1, 1, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbLoginComponent_section_27_ng_container_3_a_1_ng_template_2_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var socialLink_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("with-icon", socialLink_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", socialLink_r20.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("target", socialLink_r20.target)("class", socialLink_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r20.icon)("ngIfElse", _r24);
} }
function NbLoginComponent_section_27_ng_container_3_a_2_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 39);
} if (rf & 2) {
    var socialLink_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", socialLink_r20.icon);
} }
function NbLoginComponent_section_27_ng_container_3_a_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    var socialLink_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](socialLink_r20.title);
} }
function NbLoginComponent_section_27_ng_container_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbLoginComponent_section_27_ng_container_3_a_2_nb_icon_1_Template, 1, 1, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbLoginComponent_section_27_ng_container_3_a_2_ng_template_2_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var socialLink_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("with-icon", socialLink_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", socialLink_r20.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", socialLink_r20.target)("class", socialLink_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r20.icon)("ngIfElse", _r30);
} }
function NbLoginComponent_section_27_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbLoginComponent_section_27_ng_container_3_a_1_Template, 4, 7, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbLoginComponent_section_27_ng_container_3_a_2_Template, 4, 7, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var socialLink_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r20.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", socialLink_r20.url);
} }
function NbLoginComponent_section_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or enter with: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NbLoginComponent_section_27_ng_container_3_Template, 3, 2, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.socialLinks);
} }
var NbLoginComponent = /** @class */ (function () {
    function NbLoginComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.rememberMe = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    }
    NbLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbLoginComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.options, key, null);
    };
    NbLoginComponent.ɵfac = function NbLoginComponent_Factory(t) { return new (t || NbLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NbLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbLoginComponent, selectors: [["nb-login"]], decls: 32, vars: 19, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "email", "id", "input-email", "pattern", ".+@.+\\..+", "placeholder", "Email address", "fieldSize", "large", "autofocus", "", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["routerLink", "../request-password", 1, "forgot-password", "caption-2"], ["nbInput", "", "fullWidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Password", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], [1, "form-control-group", "accept-group"], ["name", "rememberMe", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["class", "links", "aria-label", "Social sign in", 4, "ngIf"], ["aria-label", "Register", 1, "another-action"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["name", "rememberMe", 3, "ngModel", "ngModelChange"], ["aria-label", "Social sign in", 1, "links"], [1, "socials"], [4, "ngFor", "ngForOf"], [3, "routerLink", "with-icon", 4, "ngIf"], [3, "with-icon", 4, "ngIf"], [3, "routerLink"], [3, "icon", 4, "ngIf", "ngIfElse"], ["title", ""], [3, "icon"]], template: function NbLoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hello! Log in with your email.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NbLoginComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbLoginComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NbLoginComponent_Template_form_ngSubmit_6_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email address:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbLoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NbLoginComponent_ng_container_13_Template, 3, 2, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot Password?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbLoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.user.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NbLoginComponent_ng_container_22_Template, 3, 2, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NbLoginComponent_nb_checkbox_24_Template, 2, 1, "nb-checkbox", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Log In ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NbLoginComponent_section_27_Template, 4, 1, "section", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Don't have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rememberMe);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !_r2.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialLinks && ctx.socialLinks.length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _theme_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__["NbCheckboxComponent"], _theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["NbIconComponent"]], encapsulation: 2, changeDetection: 0 });
    return NbLoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-login',
                templateUrl: './login.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "K8rk":
/*!**************************************************************************!*\
  !*** ./src/framework/auth/components/auth-block/auth-block.component.ts ***!
  \**************************************************************************/
/*! exports provided: NbAuthBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthBlockComponent", function() { return NbAuthBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var _c0 = ["*"];
var NbAuthBlockComponent = /** @class */ (function () {
    function NbAuthBlockComponent() {
    }
    NbAuthBlockComponent.ɵfac = function NbAuthBlockComponent_Factory(t) { return new (t || NbAuthBlockComponent)(); };
    NbAuthBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbAuthBlockComponent, selectors: [["nb-auth-block"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NbAuthBlockComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 35rem;\n}\n[_nghost-%COMP%]     form {\n  width: 100%;\n}\n[_nghost-%COMP%]     .label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .forgot-password {\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]     .caption {\n  margin-top: 0.5rem;\n}\n[_nghost-%COMP%]     .alert {\n  text-align: center;\n}\n[_nghost-%COMP%]     .title {\n  margin-top: 0;\n  margin-bottom: 0.75rem;\n  text-align: center;\n}\n[_nghost-%COMP%]     .sub-title {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n[_nghost-%COMP%]     .form-control-group {\n  margin-bottom: 2rem;\n}\n[_nghost-%COMP%]     .form-control-group.accept-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 2rem 0;\n}\n[_nghost-%COMP%]     .label-with-link {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n[_nghost-%COMP%]     .links {\n  text-align: center;\n  margin-top: 1.75rem;\n}\n[_nghost-%COMP%]     .links .socials {\n  margin-top: 1.5rem;\n}\n[_nghost-%COMP%]     .links .socials a {\n  margin: 0 1rem;\n  text-decoration: none;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]     .links .socials a.with-icon {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]     .another-action {\n  margin-top: 2rem;\n  text-align: center;\n}\n[_nghost-%COMP%]     .sign-in-or-up {\n  margin-top: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n[_nghost-%COMP%]     nb-alert .alert-title, [_nghost-%COMP%]     nb-alert .alert-message {\n  margin: 0 0 0.5rem;\n}\n[_nghost-%COMP%]     nb-alert .alert-message-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXdvcmsvYXV0aC9jb21wb25lbnRzL2F1dGgtYmxvY2svYXV0aC1ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUY7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUlJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBRk47QUFLSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFITjtBQU1JO0VBQ0Usa0JBQUE7QUFKTjtBQU9JO0VBQ0Usa0JBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFOTjtBQVNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVBOO0FBVUk7RUFDRSxtQkFBQTtBQVJOO0FBV0k7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtFQUNBLGNBQUE7QUFUTjtBQVlJO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7QUFWTjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVhOO0FBYU07RUFDRSxrQkFBQTtBQVhSO0FBY007RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVpSO0FBY1E7RUFDRSxlQUFBO0FBWlY7QUFpQkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBZk47QUFrQkk7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7TUFBQSxzQkFBQTtVQUFBLDhCQUFBO0FBaEJOO0FBb0JNOztFQUVFLGtCQUFBO0FBbEJSO0FBb0JNO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQWxCUiIsImZpbGUiOiJzcmMvZnJhbWV3b3JrL2F1dGgvY29tcG9uZW50cy9hdXRoLWJsb2NrL2F1dGgtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1cmVtO1xuXG4gIDo6bmctZGVlcCB7XG4gICAgZm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLmNhcHRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIH1cblxuICAgIC5hbGVydCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zdWItdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250cm9sLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbC1ncm91cC5hY2NlcHQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIH1cblxuICAgIC5sYWJlbC13aXRoLWxpbmsge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAubGlua3Mge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMS43NXJlbTtcblxuICAgICAgLnNvY2lhbHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5zb2NpYWxzIGEge1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICYud2l0aC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW5vdGhlci1hY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2lnbi1pbi1vci11cCB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICBuYi1hbGVydCB7XG4gICAgICAuYWxlcnQtdGl0bGUsXG4gICAgICAuYWxlcnQtbWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbTtcbiAgICAgIH1cbiAgICAgIC5hbGVydC1tZXNzYWdlLWxpc3Qge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return NbAuthBlockComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAuthBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-auth-block',
                styleUrls: ['./auth-block.component.scss'],
                template: "\n    <ng-content></ng-content>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "LMYP":
/*!******************************************!*\
  !*** ./src/framework/auth/public_api.ts ***!
  \******************************************/
/*! exports provided: defaultAuthOptions, NB_AUTH_OPTIONS, NB_AUTH_USER_OPTIONS, NB_AUTH_STRATEGIES, NB_AUTH_TOKENS, NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, nbStrategiesFactory, nbTokensFactory, nbOptionsFactory, nbNoOpInterceptorFilter, NbAuthModule, routes, NbAuthComponent, NbAuthBlockComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbAuthService, NbAuthResult, NbAuthJWTInterceptor, NbAuthSimpleInterceptor, NbAuthToken, NbAuthTokenNotFoundError, NbAuthIllegalTokenError, NbAuthEmptyTokenError, NbAuthIllegalJWTTokenError, nbAuthCreateToken, decodeJwtPayload, NbAuthSimpleToken, NbAuthJWTToken, NbAuthOAuth2Token, NbAuthOAuth2JWTToken, NbTokenStorage, NbTokenLocalStorage, NbTokenService, NB_AUTH_FALLBACK_TOKEN, NbAuthTokenParceler, NbAuthStrategy, NbAuthStrategyOptions, NbDummyAuthStrategy, NbDummyAuthStrategyOptions, dummyStrategyOptions, NbPasswordAuthStrategy, NbPasswordAuthStrategyOptions, passwordStrategyOptions, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbOAuth2GrantType, NbOAuth2ClientAuthMethod, NbOAuth2AuthStrategyOptions, auth2StrategyOptions, NbUser, deepExtend, getDeepFromObject, urlBase64Decode, b64decode, b64DecodeUnicode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.options */ "0ICW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultAuthOptions", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["defaultAuthOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_OPTIONS", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_USER_OPTIONS", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_USER_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_STRATEGIES", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_STRATEGIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_TOKENS", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_TOKENS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_INTERCEPTOR_HEADER", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_INTERCEPTOR_HEADER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_TOKEN_INTERCEPTOR_FILTER", function() { return _auth_options__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_TOKEN_INTERCEPTOR_FILTER"]; });

/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.module */ "Abgx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbStrategiesFactory", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["nbStrategiesFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbTokensFactory", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["nbTokensFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbOptionsFactory", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["nbOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbNoOpInterceptorFilter", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["nbNoOpInterceptorFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["NbAuthModule"]; });

/* harmony import */ var _auth_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.routes */ "QrEH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return _auth_routes__WEBPACK_IMPORTED_MODULE_2__["routes"]; });

/* harmony import */ var _components_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth.component */ "2Az5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthComponent", function() { return _components_auth_component__WEBPACK_IMPORTED_MODULE_3__["NbAuthComponent"]; });

/* harmony import */ var _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth-block/auth-block.component */ "K8rk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthBlockComponent", function() { return _components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_4__["NbAuthBlockComponent"]; });

/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "DYSn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLoginComponent", function() { return _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["NbLoginComponent"]; });

/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logout/logout.component */ "9XlZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbLogoutComponent", function() { return _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["NbLogoutComponent"]; });

/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "9S34");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRegisterComponent", function() { return _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["NbRegisterComponent"]; });

/* harmony import */ var _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/request-password/request-password.component */ "Lu/0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbRequestPasswordComponent", function() { return _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_8__["NbRequestPasswordComponent"]; });

/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "8qs0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbResetPasswordComponent", function() { return _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["NbResetPasswordComponent"]; });

/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "BDhN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthService", function() { return _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["NbAuthService"]; });

/* harmony import */ var _services_auth_result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-result */ "V1Ee");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthResult", function() { return _services_auth_result__WEBPACK_IMPORTED_MODULE_11__["NbAuthResult"]; });

/* harmony import */ var _services_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/interceptors/jwt-interceptor */ "VP2u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTInterceptor", function() { return _services_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["NbAuthJWTInterceptor"]; });

/* harmony import */ var _services_interceptors_simple_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/interceptors/simple-interceptor */ "DEW+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleInterceptor", function() { return _services_interceptors_simple_interceptor__WEBPACK_IMPORTED_MODULE_13__["NbAuthSimpleInterceptor"]; });

/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/token/token */ "4pP6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthToken", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthTokenNotFoundError", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthTokenNotFoundError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthIllegalTokenError", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthIllegalTokenError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthEmptyTokenError", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthEmptyTokenError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthIllegalJWTTokenError", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthIllegalJWTTokenError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbAuthCreateToken", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["nbAuthCreateToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeJwtPayload", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["decodeJwtPayload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthSimpleToken", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthSimpleToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTToken", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthJWTToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthOAuth2Token", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthOAuth2Token"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthOAuth2JWTToken", function() { return _services_token_token__WEBPACK_IMPORTED_MODULE_14__["NbAuthOAuth2JWTToken"]; });

/* harmony import */ var _services_token_token_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/token/token-storage */ "Y4k2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenStorage", function() { return _services_token_token_storage__WEBPACK_IMPORTED_MODULE_15__["NbTokenStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenLocalStorage", function() { return _services_token_token_storage__WEBPACK_IMPORTED_MODULE_15__["NbTokenLocalStorage"]; });

/* harmony import */ var _services_token_token_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/token/token.service */ "Bc6B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbTokenService", function() { return _services_token_token_service__WEBPACK_IMPORTED_MODULE_16__["NbTokenService"]; });

/* harmony import */ var _services_token_token_parceler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/token/token-parceler */ "znn7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_FALLBACK_TOKEN", function() { return _services_token_token_parceler__WEBPACK_IMPORTED_MODULE_17__["NB_AUTH_FALLBACK_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthTokenParceler", function() { return _services_token_token_parceler__WEBPACK_IMPORTED_MODULE_17__["NbAuthTokenParceler"]; });

/* harmony import */ var _strategies_auth_strategy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./strategies/auth-strategy */ "t+5P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthStrategy", function() { return _strategies_auth_strategy__WEBPACK_IMPORTED_MODULE_18__["NbAuthStrategy"]; });

/* harmony import */ var _strategies_auth_strategy_options__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./strategies/auth-strategy-options */ "NUSx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbAuthStrategyOptions", function() { return _strategies_auth_strategy_options__WEBPACK_IMPORTED_MODULE_19__["NbAuthStrategyOptions"]; });

/* harmony import */ var _strategies_dummy_dummy_strategy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./strategies/dummy/dummy-strategy */ "6y2k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbDummyAuthStrategy", function() { return _strategies_dummy_dummy_strategy__WEBPACK_IMPORTED_MODULE_20__["NbDummyAuthStrategy"]; });

/* harmony import */ var _strategies_dummy_dummy_strategy_options__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./strategies/dummy/dummy-strategy-options */ "x1Qk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbDummyAuthStrategyOptions", function() { return _strategies_dummy_dummy_strategy_options__WEBPACK_IMPORTED_MODULE_21__["NbDummyAuthStrategyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dummyStrategyOptions", function() { return _strategies_dummy_dummy_strategy_options__WEBPACK_IMPORTED_MODULE_21__["dummyStrategyOptions"]; });

/* harmony import */ var _strategies_password_password_strategy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./strategies/password/password-strategy */ "++eV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbPasswordAuthStrategy", function() { return _strategies_password_password_strategy__WEBPACK_IMPORTED_MODULE_22__["NbPasswordAuthStrategy"]; });

/* harmony import */ var _strategies_password_password_strategy_options__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./strategies/password/password-strategy-options */ "CVWE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbPasswordAuthStrategyOptions", function() { return _strategies_password_password_strategy_options__WEBPACK_IMPORTED_MODULE_23__["NbPasswordAuthStrategyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passwordStrategyOptions", function() { return _strategies_password_password_strategy_options__WEBPACK_IMPORTED_MODULE_23__["passwordStrategyOptions"]; });

/* harmony import */ var _strategies_oauth2_oauth2_strategy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./strategies/oauth2/oauth2-strategy */ "X/Iy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2AuthStrategy", function() { return _strategies_oauth2_oauth2_strategy__WEBPACK_IMPORTED_MODULE_24__["NbOAuth2AuthStrategy"]; });

/* harmony import */ var _strategies_oauth2_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./strategies/oauth2/oauth2-strategy.options */ "89WS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2ResponseType", function() { return _strategies_oauth2_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_25__["NbOAuth2ResponseType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2GrantType", function() { return _strategies_oauth2_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_25__["NbOAuth2GrantType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2ClientAuthMethod", function() { return _strategies_oauth2_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_25__["NbOAuth2ClientAuthMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2AuthStrategyOptions", function() { return _strategies_oauth2_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_25__["NbOAuth2AuthStrategyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auth2StrategyOptions", function() { return _strategies_oauth2_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_25__["auth2StrategyOptions"]; });

/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./models/user */ "zizt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbUser", function() { return _models_user__WEBPACK_IMPORTED_MODULE_26__["NbUser"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers */ "iVvT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepExtend", function() { return _helpers__WEBPACK_IMPORTED_MODULE_27__["deepExtend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDeepFromObject", function() { return _helpers__WEBPACK_IMPORTED_MODULE_27__["getDeepFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlBase64Decode", function() { return _helpers__WEBPACK_IMPORTED_MODULE_27__["urlBase64Decode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64decode", function() { return _helpers__WEBPACK_IMPORTED_MODULE_27__["b64decode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64DecodeUnicode", function() { return _helpers__WEBPACK_IMPORTED_MODULE_27__["b64DecodeUnicode"]; });

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






























/***/ }),

/***/ "Lu/0":
/*!**************************************************************************************!*\
  !*** ./src/framework/auth/components/request-password/request-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NbRequestPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbRequestPasswordComponent", function() { return NbRequestPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "0ICW");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "iVvT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "BDhN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../theme/components/button/button.component */ "b9/t");
/* harmony import */ var _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../theme/components/alert/alert.component */ "Unyt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













function NbRequestPasswordComponent_nb_alert_4_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r6);
} }
function NbRequestPasswordComponent_nb_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbRequestPasswordComponent_nb_alert_4_li_5_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
function NbRequestPasswordComponent_nb_alert_5_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8);
} }
function NbRequestPasswordComponent_nb_alert_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbRequestPasswordComponent_nb_alert_5_li_5_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
} }
function NbRequestPasswordComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRequestPasswordComponent_ng_container_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email should be the real one! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NbRequestPasswordComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NbRequestPasswordComponent_ng_container_13_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NbRequestPasswordComponent_ng_container_13_p_2_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
var NbRequestPasswordComponent = /** @class */ (function () {
    function NbRequestPasswordComponent(service, options, cd, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.strategy = this.getConfigValue('forms.requestPassword.strategy');
    }
    NbRequestPasswordComponent.prototype.requestPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbRequestPasswordComponent.prototype.getConfigValue = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.options, key, null);
    };
    NbRequestPasswordComponent.ɵfac = function NbRequestPasswordComponent_Factory(t) { return new (t || NbRequestPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NbRequestPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbRequestPasswordComponent, selectors: [["nb-request-password-page"]], decls: 23, vars: 10, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["requestPassForm", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "id", "input-email", "name", "email", "pattern", ".+@.+\\..+", "placeholder", "Email address", "autofocus", "", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], ["routerLink", "../login", 1, "text-link"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function NbRequestPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forgot Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter your email address and we\u2019ll send a link to reset your password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NbRequestPasswordComponent_nb_alert_4_Template, 6, 1, "nb-alert", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NbRequestPasswordComponent_nb_alert_5_Template, 6, 1, "nb-alert", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NbRequestPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.requestPass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter your email address:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NbRequestPasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NbRequestPasswordComponent_ng_container_13_Template, 3, 2, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Request password ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back to Log In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted || !_r2.valid);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXdvcmsvYXV0aC9jb21wb25lbnRzL3JlcXVlc3QtcGFzc3dvcmQvcmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUU7RUFDRSxtQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9mcmFtZXdvcmsvYXV0aC9jb21wb25lbnRzL3JlcXVlc3QtcGFzc3dvcmQvcmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbjpob3N0IHtcbiAgLmZvcm0tZ3JvdXA6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
    return NbRequestPasswordComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbRequestPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-request-password-page',
                styleUrls: ['./request-password.component.scss'],
                templateUrl: './request-password.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "NUSx":
/*!****************************************************************!*\
  !*** ./src/framework/auth/strategies/auth-strategy-options.ts ***!
  \****************************************************************/
/*! exports provided: NbAuthStrategyOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthStrategyOptions", function() { return NbAuthStrategyOptions; });
var NbAuthStrategyOptions = /** @class */ (function () {
    function NbAuthStrategyOptions() {
    }
    return NbAuthStrategyOptions;
}());



/***/ }),

/***/ "QrEH":
/*!*******************************************!*\
  !*** ./src/framework/auth/auth.routes.ts ***!
  \*******************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth.component */ "2Az5");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "DYSn");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "9S34");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logout/logout.component */ "9XlZ");
/* harmony import */ var _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/request-password/request-password.component */ "Lu/0");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "8qs0");






var routes = [
    {
        path: 'auth',
        component: _components_auth_component__WEBPACK_IMPORTED_MODULE_0__["NbAuthComponent"],
        children: [
            {
                path: '',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["NbLoginComponent"],
            },
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["NbLoginComponent"],
            },
            {
                path: 'register',
                component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["NbRegisterComponent"],
            },
            {
                path: 'logout',
                component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["NbLogoutComponent"],
            },
            {
                path: 'request-password',
                component: _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_4__["NbRequestPasswordComponent"],
            },
            {
                path: 'reset-password',
                component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["NbResetPasswordComponent"],
            },
        ],
    },
];


/***/ }),

/***/ "V1Ee":
/*!****************************************************!*\
  !*** ./src/framework/auth/services/auth-result.ts ***!
  \****************************************************/
/*! exports provided: NbAuthResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthResult", function() { return NbAuthResult; });
var NbAuthResult = /** @class */ (function () {
    // TODO: better pass object
    function NbAuthResult(success, response, redirect, errors, messages, token) {
        if (token === void 0) { token = null; }
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.token = token;
    }
    NbAuthResult.prototype.getResponse = function () {
        return this.response;
    };
    NbAuthResult.prototype.getToken = function () {
        return this.token;
    };
    NbAuthResult.prototype.getRedirect = function () {
        return this.redirect;
    };
    NbAuthResult.prototype.getErrors = function () {
        return this.errors.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.getMessages = function () {
        return this.messages.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.isSuccess = function () {
        return this.success;
    };
    NbAuthResult.prototype.isFailure = function () {
        return !this.success;
    };
    return NbAuthResult;
}());



/***/ }),

/***/ "VP2u":
/*!*********************************************************************!*\
  !*** ./src/framework/auth/services/interceptors/jwt-interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: NbAuthJWTInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthJWTInterceptor", function() { return NbAuthJWTInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "BDhN");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.options */ "0ICW");





var NbAuthJWTInterceptor = /** @class */ (function () {
    function NbAuthJWTInterceptor(injector, filter) {
        this.injector = injector;
        this.filter = filter;
    }
    NbAuthJWTInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // do not intercept request whose urls are filtered by the injected filter
        if (!this.filter(req)) {
            return this.authService.isAuthenticatedOrRefresh()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (authenticated) {
                if (authenticated) {
                    return _this.authService.getToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (token) {
                        var JWT = "Bearer " + token.getValue();
                        req = req.clone({
                            setHeaders: {
                                Authorization: JWT,
                            },
                        });
                        return next.handle(req);
                    }));
                }
                else {
                    // Request is sent to server without authentication so that the client code
                    // receives the 401/403 error and can act as desired ('session expired', redirect to login, aso)
                    return next.handle(req);
                }
            }));
        }
        else {
            return next.handle(req);
        }
    };
    Object.defineProperty(NbAuthJWTInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]);
        },
        enumerable: false,
        configurable: true
    });
    NbAuthJWTInterceptor.ɵfac = function NbAuthJWTInterceptor_Factory(t) { return new (t || NbAuthJWTInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_TOKEN_INTERCEPTOR_FILTER"])); };
    NbAuthJWTInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbAuthJWTInterceptor, factory: NbAuthJWTInterceptor.ɵfac });
    return NbAuthJWTInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAuthJWTInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_3__["NB_AUTH_TOKEN_INTERCEPTOR_FILTER"]]
            }] }]; }, null); })();


/***/ }),

/***/ "X/Iy":
/*!*****************************************************************!*\
  !*** ./src/framework/auth/strategies/oauth2/oauth2-strategy.ts ***!
  \*****************************************************************/
/*! exports provided: NbOAuth2AuthStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbOAuth2AuthStrategy", function() { return NbOAuth2AuthStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _auth_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-strategy */ "t+5P");
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/token/token */ "4pP6");
/* harmony import */ var _services_auth_result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth-result */ "V1Ee");
/* harmony import */ var _oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oauth2-strategy.options */ "89WS");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













/**
 * OAuth2 authentication strategy.
 *
 * Strategy settings:
 *
 * ```ts
 * export enum NbOAuth2ResponseType {
 *   CODE = 'code',
 *   TOKEN = 'token',
 * }
 *
 * export enum NbOAuth2GrantType {
 *   AUTHORIZATION_CODE = 'authorization_code',
 *   PASSWORD = 'password',
 *   REFRESH_TOKEN = 'refresh_token',
 * }
 *
 * export class NbOAuth2AuthStrategyOptions {
 *   name: string;
 *   baseEndpoint?: string = '';
 *   clientId: string = '';
 *   clientSecret: string = '';
 *   clientAuthMethod: string = NbOAuth2ClientAuthMethod.NONE;
 *   redirect?: { success?: string; failure?: string } = {
 *     success: '/',
 *     failure: null,
 *   };
 *   defaultErrors?: any[] = ['Something went wrong, please try again.'];
 *   defaultMessages?: any[] = ['You have been successfully authenticated.'];
 *   authorize?: {
 *     endpoint?: string;
 *     redirectUri?: string;
 *     responseType?: string;
 *     requireValidToken: true,
 *     scope?: string;
 *     state?: string;
 *     params?: { [key: string]: string };
 *   } = {
 *     endpoint: 'authorize',
 *     responseType: NbOAuth2ResponseType.CODE,
 *   };
 *   token?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     requireValidToken: true,
 *     redirectUri?: string;
 *     scope?: string;
 *     class: NbAuthTokenClass,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
 *     class: NbAuthOAuth2Token,
 *   };
 *   refresh?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     scope?: string;
 *     requireValidToken: true,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.REFRESH_TOKEN,
 *   };
 * }
 * ```
 *
 */
var NbOAuth2AuthStrategy = /** @class */ (function (_super) {
    __extends(NbOAuth2AuthStrategy, _super);
    function NbOAuth2AuthStrategy(http, route, window) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.window = window;
        _this.redirectResultHandlers = (_a = {},
            _a[_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["NbOAuth2ResponseType"].CODE] = function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.route.snapshot.queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
                    if (params.code) {
                        return _this.requestToken(params.code);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []));
                }));
            },
            _a[_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["NbOAuth2ResponseType"].TOKEN] = function () {
                var module = 'authorize';
                var requireValidToken = _this.getOption(module + ".requireValidToken");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.route.snapshot.fragment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
                    if (!params.error) {
                        return new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](true, params, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(params, requireValidToken));
                    }
                    return new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](false, params, _this.getOption('redirect.failure'), _this.getOption('defaultErrors'), []);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                    var errors = [];
                    if (err instanceof _services_token_token__WEBPACK_IMPORTED_MODULE_7__["NbAuthIllegalTokenError"]) {
                        errors.push(err.message);
                    }
                    else {
                        errors.push('Something went wrong.');
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](false, err, _this.getOption('redirect.failure'), errors));
                }));
            },
            _a);
        _this.redirectResults = (_b = {},
            _b[_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["NbOAuth2ResponseType"].CODE] = function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.route.snapshot.queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return !!(params && (params.code || params.error)); }));
            },
            _b[_oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["NbOAuth2ResponseType"].TOKEN] = function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.route.snapshot.fragment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fragment) { return _this.parseHashAsQueryParams(fragment); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return !!(params && (params.access_token || params.error)); }));
            },
            _b);
        _this.defaultOptions = _oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["auth2StrategyOptions"];
        return _this;
    }
    NbOAuth2AuthStrategy.setup = function (options) {
        return [NbOAuth2AuthStrategy, options];
    };
    Object.defineProperty(NbOAuth2AuthStrategy.prototype, "responseType", {
        get: function () {
            return this.getOption('authorize.responseType');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NbOAuth2AuthStrategy.prototype, "clientAuthMethod", {
        get: function () {
            return this.getOption('clientAuthMethod');
        },
        enumerable: false,
        configurable: true
    });
    NbOAuth2AuthStrategy.prototype.authenticate = function (data) {
        var _this = this;
        if (this.getOption('token.grantType') === _oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["NbOAuth2GrantType"].PASSWORD) {
            return this.passwordToken(data.email, data.password);
        }
        else {
            return this.isRedirectResult()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (result) {
                if (!result) {
                    _this.authorizeRedirect();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](true));
                }
                return _this.getAuthorizationResult();
            }));
        }
    };
    NbOAuth2AuthStrategy.prototype.getAuthorizationResult = function () {
        var redirectResultHandler = this.redirectResultHandlers[this.responseType];
        if (redirectResultHandler) {
            return redirectResultHandler.call(this);
        }
        throw new Error("'" + this.responseType + "' responseType is not supported,\n                      only 'token' and 'code' are supported now");
    };
    NbOAuth2AuthStrategy.prototype.refreshToken = function (token) {
        var _this = this;
        var module = 'refresh';
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        var headers = this.buildAuthHeader() || new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildRefreshRequestData(token), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createRefreshedToken(res, token, requireValidToken));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) { return _this.handleResponseError(res); }));
    };
    NbOAuth2AuthStrategy.prototype.passwordToken = function (username, password) {
        var _this = this;
        var module = 'token';
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        var headers = this.buildAuthHeader() || new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildPasswordRequestData(username, password), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(res, requireValidToken));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) { return _this.handleResponseError(res); }));
    };
    NbOAuth2AuthStrategy.prototype.authorizeRedirect = function () {
        this.window.location.href = this.buildRedirectUrl();
    };
    NbOAuth2AuthStrategy.prototype.isRedirectResult = function () {
        return this.redirectResults[this.responseType].call(this);
    };
    NbOAuth2AuthStrategy.prototype.requestToken = function (code) {
        var _this = this;
        var module = 'token';
        var url = this.getActionEndpoint(module);
        var requireValidToken = this.getOption(module + ".requireValidToken");
        var headers = this.buildAuthHeader() || new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.buildCodeRequestData(code), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](true, res, _this.getOption('redirect.success'), [], _this.getOption('defaultMessages'), _this.createToken(res, requireValidToken));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) { return _this.handleResponseError(res); }));
    };
    NbOAuth2AuthStrategy.prototype.buildCodeRequestData = function (code) {
        var params = {
            grant_type: this.getOption('token.grantType'),
            code: code,
            redirect_uri: this.getOption('token.redirectUri'),
            client_id: this.getOption('clientId'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    };
    NbOAuth2AuthStrategy.prototype.buildRefreshRequestData = function (token) {
        var params = {
            grant_type: this.getOption('refresh.grantType'),
            refresh_token: token.getRefreshToken(),
            scope: this.getOption('refresh.scope'),
            client_id: this.getOption('clientId'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    };
    NbOAuth2AuthStrategy.prototype.buildPasswordRequestData = function (username, password) {
        var params = {
            grant_type: this.getOption('token.grantType'),
            username: username,
            password: password,
            scope: this.getOption('token.scope'),
        };
        return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(params)));
    };
    NbOAuth2AuthStrategy.prototype.buildAuthHeader = function () {
        if (this.clientAuthMethod === _oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["NbOAuth2ClientAuthMethod"].BASIC) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Authorization': 'Basic ' + btoa(this.getOption('clientId') + ':' + this.getOption('clientSecret')),
                });
            }
            else {
                throw Error('For basic client authentication method, please provide both clientId & clientSecret.');
            }
        }
    };
    NbOAuth2AuthStrategy.prototype.cleanParams = function (params) {
        Object.entries(params)
            .forEach(function (_a) {
            var key = _a[0], val = _a[1];
            return !val && delete params[key];
        });
        return params;
    };
    NbOAuth2AuthStrategy.prototype.addCredentialsToParams = function (params) {
        if (this.clientAuthMethod === _oauth2_strategy_options__WEBPACK_IMPORTED_MODULE_9__["NbOAuth2ClientAuthMethod"].REQUEST_BODY) {
            if (this.getOption('clientId') && this.getOption('clientSecret')) {
                return __assign(__assign({}, params), { client_id: this.getOption('clientId'), client_secret: this.getOption('clientSecret') });
            }
            else {
                throw Error('For request body client authentication method, please provide both clientId & clientSecret.');
            }
        }
        return params;
    };
    NbOAuth2AuthStrategy.prototype.handleResponseError = function (res) {
        var errors = [];
        if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            if (res.error.error_description) {
                errors.push(res.error.error_description);
            }
            else {
                errors = this.getOption('defaultErrors');
            }
        }
        else if (res instanceof _services_token_token__WEBPACK_IMPORTED_MODULE_7__["NbAuthIllegalTokenError"]) {
            errors.push(res.message);
        }
        else {
            errors.push('Something went wrong.');
        }
        ;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](false, res, this.getOption('redirect.failure'), errors, []));
    };
    NbOAuth2AuthStrategy.prototype.buildRedirectUrl = function () {
        var params = __assign({ response_type: this.getOption('authorize.responseType'), client_id: this.getOption('clientId'), redirect_uri: this.getOption('authorize.redirectUri'), scope: this.getOption('authorize.scope'), state: this.getOption('authorize.state') }, this.getOption('authorize.params'));
        var endpoint = this.getActionEndpoint('authorize');
        var query = this.urlEncodeParameters(this.cleanParams(params));
        return endpoint + "?" + query;
    };
    NbOAuth2AuthStrategy.prototype.parseHashAsQueryParams = function (hash) {
        return hash ? hash.split('&').reduce(function (acc, part) {
            var item = part.split('=');
            acc[item[0]] = decodeURIComponent(item[1]);
            return acc;
        }, {}) : {};
    };
    NbOAuth2AuthStrategy.prototype.urlEncodeParameters = function (params) {
        return Object.keys(params).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
        }).join('&');
    };
    NbOAuth2AuthStrategy.prototype.createRefreshedToken = function (res, existingToken, requireValidToken) {
        var refreshedToken = this.createToken(res, requireValidToken);
        if (!refreshedToken.getRefreshToken() && existingToken.getRefreshToken()) {
            refreshedToken.setRefreshToken(existingToken.getRefreshToken());
        }
        return refreshedToken;
    };
    NbOAuth2AuthStrategy.prototype.register = function (data) {
        throw new Error('`register` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    };
    NbOAuth2AuthStrategy.prototype.requestPassword = function (data) {
        throw new Error('`requestPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    };
    NbOAuth2AuthStrategy.prototype.resetPassword = function (data) {
        if (data === void 0) { data = {}; }
        throw new Error('`resetPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.');
    };
    NbOAuth2AuthStrategy.prototype.logout = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _services_auth_result__WEBPACK_IMPORTED_MODULE_8__["NbAuthResult"](true));
    };
    NbOAuth2AuthStrategy.ɵfac = function NbOAuth2AuthStrategy_Factory(t) { return new (t || NbOAuth2AuthStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NB_WINDOW"])); };
    NbOAuth2AuthStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbOAuth2AuthStrategy, factory: NbOAuth2AuthStrategy.ɵfac });
    return NbOAuth2AuthStrategy;
}(_auth_strategy__WEBPACK_IMPORTED_MODULE_6__["NbAuthStrategy"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbOAuth2AuthStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NB_WINDOW"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Y4k2":
/*!************************************************************!*\
  !*** ./src/framework/auth/services/token/token-storage.ts ***!
  \************************************************************/
/*! exports provided: NbTokenStorage, NbTokenLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTokenStorage", function() { return NbTokenStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbTokenLocalStorage", function() { return NbTokenLocalStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token_parceler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-parceler */ "znn7");
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




var NbTokenStorage = /** @class */ (function () {
    function NbTokenStorage() {
    }
    return NbTokenStorage;
}());

/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
var NbTokenLocalStorage = /** @class */ (function (_super) {
    __extends(NbTokenLocalStorage, _super);
    function NbTokenLocalStorage(parceler) {
        var _this = _super.call(this) || this;
        _this.parceler = parceler;
        _this.key = 'auth_app_token';
        return _this;
    }
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    NbTokenLocalStorage.prototype.get = function () {
        var raw = localStorage.getItem(this.key);
        return this.parceler.unwrap(raw);
    };
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    NbTokenLocalStorage.prototype.set = function (token) {
        var raw = this.parceler.wrap(token);
        localStorage.setItem(this.key, raw);
    };
    /**
     * Clears token from localStorage
     */
    NbTokenLocalStorage.prototype.clear = function () {
        localStorage.removeItem(this.key);
    };
    NbTokenLocalStorage.ɵfac = function NbTokenLocalStorage_Factory(t) { return new (t || NbTokenLocalStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_parceler__WEBPACK_IMPORTED_MODULE_1__["NbAuthTokenParceler"])); };
    NbTokenLocalStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbTokenLocalStorage, factory: NbTokenLocalStorage.ɵfac });
    return NbTokenLocalStorage;
}(NbTokenStorage));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbTokenLocalStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _token_parceler__WEBPACK_IMPORTED_MODULE_1__["NbAuthTokenParceler"] }]; }, null); })();


/***/ }),

/***/ "iVvT":
/*!***************************************!*\
  !*** ./src/framework/auth/helpers.ts ***!
  \***************************************/
/*! exports provided: deepExtend, getDeepFromObject, urlBase64Decode, b64decode, b64DecodeUnicode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepExtend", function() { return deepExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeepFromObject", function() { return getDeepFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlBase64Decode", function() { return urlBase64Decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64decode", function() { return b64decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64DecodeUnicode", function() { return b64DecodeUnicode; });
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    var clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object || {});
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}


/***/ }),

/***/ "t+5P":
/*!********************************************************!*\
  !*** ./src/framework/auth/strategies/auth-strategy.ts ***!
  \********************************************************/
/*! exports provided: NbAuthStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthStrategy", function() { return NbAuthStrategy; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "iVvT");
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token/token */ "4pP6");



var NbAuthStrategy = /** @class */ (function () {
    function NbAuthStrategy() {
    }
    // we should keep this any and validation should be done in `register` method instead
    // otherwise it won't be possible to pass an empty object
    NbAuthStrategy.prototype.setOptions = function (options) {
        this.options = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["deepExtend"])({}, this.defaultOptions, options);
    };
    NbAuthStrategy.prototype.getOption = function (key) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDeepFromObject"])(this.options, key, null);
    };
    NbAuthStrategy.prototype.createToken = function (value, failWhenInvalidToken) {
        var token = Object(_services_token_token__WEBPACK_IMPORTED_MODULE_2__["nbAuthCreateToken"])(this.getOption('token.class'), value, this.getName());
        // At this point, nbAuthCreateToken failed with NbAuthIllegalTokenError which MUST be intercepted by strategies
        // Or token is created. It MAY be created even if backend did not return any token, in this case it is !Valid
        if (failWhenInvalidToken && !token.isValid()) {
            // If we require a valid token (i.e. isValid), then we MUST throw NbAuthIllegalTokenError so that the strategies
            // intercept it
            throw new _services_token_token__WEBPACK_IMPORTED_MODULE_2__["NbAuthIllegalTokenError"]('Token is empty or invalid.');
        }
        return token;
    };
    NbAuthStrategy.prototype.getName = function () {
        return this.getOption('name');
    };
    NbAuthStrategy.prototype.createFailResponse = function (data) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: {}, status: 401 });
    };
    NbAuthStrategy.prototype.createSuccessResponse = function (data) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: {}, status: 200 });
    };
    NbAuthStrategy.prototype.getActionEndpoint = function (action) {
        var actionEndpoint = this.getOption(action + ".endpoint");
        var baseEndpoint = this.getOption('baseEndpoint');
        return actionEndpoint ? baseEndpoint + actionEndpoint : '';
    };
    return NbAuthStrategy;
}());



/***/ }),

/***/ "x1Qk":
/*!***********************************************************************!*\
  !*** ./src/framework/auth/strategies/dummy/dummy-strategy-options.ts ***!
  \***********************************************************************/
/*! exports provided: NbDummyAuthStrategyOptions, dummyStrategyOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbDummyAuthStrategyOptions", function() { return NbDummyAuthStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyStrategyOptions", function() { return dummyStrategyOptions; });
/* harmony import */ var _auth_strategy_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-strategy-options */ "NUSx");
/* harmony import */ var _services_token_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token/token */ "4pP6");
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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var NbDummyAuthStrategyOptions = /** @class */ (function (_super) {
    __extends(NbDummyAuthStrategyOptions, _super);
    function NbDummyAuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.token = {
            class: _services_token_token__WEBPACK_IMPORTED_MODULE_1__["NbAuthSimpleToken"],
        };
        _this.delay = 1000;
        _this.alwaysFail = false;
        return _this;
    }
    return NbDummyAuthStrategyOptions;
}(_auth_strategy_options__WEBPACK_IMPORTED_MODULE_0__["NbAuthStrategyOptions"]));

var dummyStrategyOptions = new NbDummyAuthStrategyOptions();


/***/ }),

/***/ "zizt":
/*!*******************************************!*\
  !*** ./src/framework/auth/models/user.ts ***!
  \*******************************************/
/*! exports provided: NbUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbUser", function() { return NbUser; });
var NbUser = /** @class */ (function () {
    function NbUser(id, email, password, rememberMe, terms, confirmPassword, fullName) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
        this.terms = terms;
        this.confirmPassword = confirmPassword;
        this.fullName = fullName;
    }
    return NbUser;
}());



/***/ }),

/***/ "znn7":
/*!*************************************************************!*\
  !*** ./src/framework/auth/services/token/token-parceler.ts ***!
  \*************************************************************/
/*! exports provided: NB_AUTH_FALLBACK_TOKEN, NbAuthTokenParceler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_AUTH_FALLBACK_TOKEN", function() { return NB_AUTH_FALLBACK_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbAuthTokenParceler", function() { return NbAuthTokenParceler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ "4pP6");
/* harmony import */ var _auth_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.options */ "0ICW");




var NB_AUTH_FALLBACK_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
var NbAuthTokenParceler = /** @class */ (function () {
    function NbAuthTokenParceler(fallbackClass, tokenClasses) {
        this.fallbackClass = fallbackClass;
        this.tokenClasses = tokenClasses;
    }
    NbAuthTokenParceler.prototype.wrap = function (token) {
        return JSON.stringify({
            name: token.getName(),
            ownerStrategyName: token.getOwnerStrategyName(),
            createdAt: token.getCreatedAt().getTime(),
            value: token.toString(),
        });
    };
    NbAuthTokenParceler.prototype.unwrap = function (value) {
        var tokenClass = this.fallbackClass;
        var tokenValue = '';
        var tokenOwnerStrategyName = '';
        var tokenCreatedAt = null;
        var tokenPack = this.parseTokenPack(value);
        if (tokenPack) {
            tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
            tokenValue = tokenPack.value;
            tokenOwnerStrategyName = tokenPack.ownerStrategyName;
            tokenCreatedAt = new Date(Number(tokenPack.createdAt));
        }
        return Object(_token__WEBPACK_IMPORTED_MODULE_1__["nbAuthCreateToken"])(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
    };
    // TODO: this could be moved to a separate token registry
    NbAuthTokenParceler.prototype.getClassByName = function (name) {
        return this.tokenClasses.find(function (tokenClass) { return tokenClass.NAME === name; });
    };
    NbAuthTokenParceler.prototype.parseTokenPack = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) { }
        return null;
    };
    NbAuthTokenParceler.ɵfac = function NbAuthTokenParceler_Factory(t) { return new (t || NbAuthTokenParceler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NB_AUTH_FALLBACK_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_TOKENS"])); };
    NbAuthTokenParceler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NbAuthTokenParceler, factory: NbAuthTokenParceler.ɵfac });
    return NbAuthTokenParceler;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbAuthTokenParceler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [NB_AUTH_FALLBACK_TOKEN]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_auth_options__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_TOKENS"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03.js.map