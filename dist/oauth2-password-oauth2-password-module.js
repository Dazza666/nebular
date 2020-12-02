(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oauth2-password-oauth2-password-module"],{

/***/ "7g0b":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/oauth2-password/oauth2-password.module.ts ***!
  \******************************************************************************/
/*! exports provided: OAuth2PasswordPlaygroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2PasswordPlaygroundModule", function() { return OAuth2PasswordPlaygroundModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _oauth2_password_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oauth2-password-login.component */ "KKxo");
/* harmony import */ var _oauth2_password_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oauth2-password-routing.module */ "TgS1");
/* harmony import */ var _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/auth/auth.module */ "Abgx");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var OAuth2PasswordPlaygroundModule = /** @class */ (function () {
    function OAuth2PasswordPlaygroundModule() {
    }
    OAuth2PasswordPlaygroundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OAuth2PasswordPlaygroundModule });
    OAuth2PasswordPlaygroundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OAuth2PasswordPlaygroundModule_Factory(t) { return new (t || OAuth2PasswordPlaygroundModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                    forms: {
                        login: {
                            redirectDelay: 3000,
                            showMessages: {
                                error: true,
                                success: false,
                            },
                            strategy: 'password',
                        },
                    },
                    strategies: [
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2AuthStrategy"].setup({
                            name: 'password',
                            clientId: 'Aladdin',
                            clientSecret: 'open sesame',
                            clientAuthMethod: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2ClientAuthMethod"].BASIC,
                            baseEndpoint: 'http://localhost:4400/api/auth/',
                            token: {
                                endpoint: 'token',
                                grantType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2GrantType"].PASSWORD,
                                class: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthOAuth2JWTToken"],
                                requireValidToken: true,
                            },
                            redirect: {
                                success: '/oauth2-password',
                            },
                        }),
                    ],
                }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                _oauth2_password_routing_module__WEBPACK_IMPORTED_MODULE_7__["Oauth2PasswordRoutingModule"],
            ]] });
    return OAuth2PasswordPlaygroundModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OAuth2PasswordPlaygroundModule, { declarations: [_oauth2_password_login_component__WEBPACK_IMPORTED_MODULE_6__["OAuth2PasswordLoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["NbAuthModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
        _oauth2_password_routing_module__WEBPACK_IMPORTED_MODULE_7__["Oauth2PasswordRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OAuth2PasswordPlaygroundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"].forRoot({
                        forms: {
                            login: {
                                redirectDelay: 3000,
                                showMessages: {
                                    error: true,
                                    success: false,
                                },
                                strategy: 'password',
                            },
                        },
                        strategies: [
                            _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2AuthStrategy"].setup({
                                name: 'password',
                                clientId: 'Aladdin',
                                clientSecret: 'open sesame',
                                clientAuthMethod: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2ClientAuthMethod"].BASIC,
                                baseEndpoint: 'http://localhost:4400/api/auth/',
                                token: {
                                    endpoint: 'token',
                                    grantType: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbOAuth2GrantType"].PASSWORD,
                                    class: _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthOAuth2JWTToken"],
                                    requireValidToken: true,
                                },
                                redirect: {
                                    success: '/oauth2-password',
                                },
                            }),
                        ],
                    }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
                    _oauth2_password_routing_module__WEBPACK_IMPORTED_MODULE_7__["Oauth2PasswordRoutingModule"],
                ],
                declarations: [
                    _oauth2_password_login_component__WEBPACK_IMPORTED_MODULE_6__["OAuth2PasswordLoginComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "KKxo":
/*!***************************************************************************************!*\
  !*** ./src/playground/with-layout/oauth2-password/oauth2-password-login.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OAuth2PasswordLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2PasswordLoginComponent", function() { return OAuth2PasswordLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _framework_auth_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/auth/helpers */ "iVvT");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_auth_components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/auth/components/auth-block/auth-block.component */ "K8rk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/theme/components/alert/alert.component */ "Unyt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */














function OAuth2PasswordLoginComponent_nb_card_2_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OAuth2PasswordLoginComponent_nb_card_2_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OAuth2PasswordLoginComponent_nb_card_2_nb_card_body_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No User Authenticated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OAuth2PasswordLoginComponent_nb_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You are currently authenticated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OAuth2PasswordLoginComponent_nb_card_2_button_14_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OAuth2PasswordLoginComponent_nb_card_2_nb_card_body_15_Template, 3, 0, "nb-card-body", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current User Access Token: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r0.token.getValue()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current User Access Token Payload : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx_r0.getClaims(ctx_r0.token.getValue())), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current User Refresh Token: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, ctx_r0.token.getRefreshToken()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.token);
} }
function OAuth2PasswordLoginComponent_nb_card_3_nb_alert_7_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var error_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r14);
} }
function OAuth2PasswordLoginComponent_nb_card_3_nb_alert_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OAuth2PasswordLoginComponent_nb_card_3_nb_alert_7_li_5_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.errors);
} }
function OAuth2PasswordLoginComponent_nb_card_3_nb_alert_8_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r16);
} }
function OAuth2PasswordLoginComponent_nb_card_3_nb_alert_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OAuth2PasswordLoginComponent_nb_card_3_nb_alert_8_li_5_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.messages);
} }
function OAuth2PasswordLoginComponent_nb_card_3_ng_container_16_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OAuth2PasswordLoginComponent_nb_card_3_ng_container_16_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email should be the real one! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OAuth2PasswordLoginComponent_nb_card_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OAuth2PasswordLoginComponent_nb_card_3_ng_container_16_p_1_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OAuth2PasswordLoginComponent_nb_card_3_ng_container_16_p_2_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.pattern);
} }
function OAuth2PasswordLoginComponent_nb_card_3_ng_container_22_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OAuth2PasswordLoginComponent_nb_card_3_ng_container_22_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Password should contains from ", ctx_r20.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r20.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function OAuth2PasswordLoginComponent_nb_card_3_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OAuth2PasswordLoginComponent_nb_card_3_ng_container_22_p_1_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OAuth2PasswordLoginComponent_nb_card_3_ng_container_22_p_2_Template, 2, 2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.minlength) || (_r11.errors == null ? null : _r11.errors.maxlength));
} }
function OAuth2PasswordLoginComponent_nb_card_3_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-auth-block", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OAuth2 Sign In with email/password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hello! Sign in with your username or email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OAuth2PasswordLoginComponent_nb_card_3_nb_alert_7_Template, 6, 1, "nb-alert", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OAuth2PasswordLoginComponent_nb_card_3_nb_alert_8_Template, 6, 1, "nb-alert", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OAuth2PasswordLoginComponent_nb_card_3_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OAuth2PasswordLoginComponent_nb_card_3_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OAuth2PasswordLoginComponent_nb_card_3_ng_container_16_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OAuth2PasswordLoginComponent_nb_card_3_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OAuth2PasswordLoginComponent_nb_card_3_ng_container_22_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showMessages.error && (ctx_r1.errors == null ? null : ctx_r1.errors.length) > 0 && !ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showMessages.success && (ctx_r1.messages == null ? null : ctx_r1.messages.length) > 0 && !ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.user.email)("status", _r9.dirty ? _r9.invalid ? "danger" : "success" : "basic")("required", ctx_r1.getConfigValue("forms.validation.email.required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r9.invalid && _r9.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.user.password)("status", _r11.dirty ? _r11.invalid ? "danger" : "success" : "basic")("required", ctx_r1.getConfigValue("forms.validation.password.required"))("minlength", ctx_r1.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx_r1.getConfigValue("forms.validation.password.maxLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r11.invalid && _r11.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.submitted || !_r8.valid);
} }
var OAuth2PasswordLoginComponent = /** @class */ (function () {
    function OAuth2PasswordLoginComponent(authService, options, router) {
        if (options === void 0) { options = {}; }
        this.authService = authService;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        /**this.authService.onTokenChange()
          .subscribe((token: NbAuthOAuth2Token) => {
            this.token = null;
            if (token && token.isValid()) {
              this.token = token;
            }
          }); **/
    }
    OAuth2PasswordLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.authService.authenticate(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            _this.token = result.getToken();
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
        });
    };
    OAuth2PasswordLoginComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout('password')
            .subscribe(function (authResult) {
            _this.token = null;
        });
    };
    OAuth2PasswordLoginComponent.prototype.getConfigValue = function (key) {
        return Object(_framework_auth_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(this.options, key, null);
    };
    OAuth2PasswordLoginComponent.prototype.getClaims = function (rawToken) {
        if (!rawToken) {
            return null;
        }
        return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["nbAuthCreateToken"])(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthJWTToken"], rawToken, this.strategy).getPayload();
    };
    OAuth2PasswordLoginComponent.ɵfac = function OAuth2PasswordLoginComponent_Factory(t) { return new (t || OAuth2PasswordLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    OAuth2PasswordLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OAuth2PasswordLoginComponent, selectors: [["nb-playground-auth"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "title"], ["nbButton", "", "status", "warning", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "warning", 3, "click"], ["aria-labelledby", "title"], ["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "email", "id", "input-email", "pattern", ".+@.+..+", "placeholder", "Email address", "autofocus", "", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], ["for", "input-password", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Password", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["nbButton", "", "fullWidth", "", "status", "success", 3, "disabled"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function OAuth2PasswordLoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OAuth2PasswordLoginComponent_nb_card_2_Template, 16, 11, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OAuth2PasswordLoginComponent_nb_card_3_Template, 25, 17, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.token);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.token);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _framework_auth_components_auth_block_auth_block_component__WEBPACK_IMPORTED_MODULE_7__["NbAuthBlockComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_9__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _framework_theme_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["[_nghost-%COMP%]   nb-auth-block[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L29hdXRoMi1wYXNzd29yZC9vYXV0aDItcGFzc3dvcmQtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvb2F1dGgyLXBhc3N3b3JkL29hdXRoMi1wYXNzd29yZC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IG5iLWF1dGgtYmxvY2sge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"] });
    return OAuth2PasswordLoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OAuth2PasswordLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-auth',
                templateUrl: './oauth2-password-login.component.html',
                styleUrls: ['./oauth2-password-login.component.scss'],
            }]
    }], function () { return [{ type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "TgS1":
/*!**************************************************************************************!*\
  !*** ./src/playground/with-layout/oauth2-password/oauth2-password-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: Oauth2PasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth2PasswordRoutingModule", function() { return Oauth2PasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _oauth2_password_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oauth2-password-login.component */ "KKxo");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: '',
        component: _oauth2_password_login_component__WEBPACK_IMPORTED_MODULE_2__["OAuth2PasswordLoginComponent"],
    },
];
var Oauth2PasswordRoutingModule = /** @class */ (function () {
    function Oauth2PasswordRoutingModule() {
    }
    Oauth2PasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Oauth2PasswordRoutingModule });
    Oauth2PasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Oauth2PasswordRoutingModule_Factory(t) { return new (t || Oauth2PasswordRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return Oauth2PasswordRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Oauth2PasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Oauth2PasswordRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=oauth2-password-oauth2-password-module.js.map