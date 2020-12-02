(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["smart-home-app-module"],{

/***/ "31Vr":
/*!****************************************************************!*\
  !*** ./src/playground/without-layout/smart-home/app.module.ts ***!
  \****************************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ "LMYP");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "VMUz");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "XGPU");
/* harmony import */ var _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/auth/auth.module */ "Abgx");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRouting"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthModule"].forRoot({
                    strategies: [
                        _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbDummyAuthStrategy"].setup({
                            name: 'email',
                            alwaysFail: true,
                            delay: 1000,
                        }),
                    ],
                }),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRouting"], _framework_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["NbAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRouting"],
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbAuthModule"].forRoot({
                        strategies: [
                            _nebular_auth__WEBPACK_IMPORTED_MODULE_4__["NbDummyAuthStrategy"].setup({
                                name: 'email',
                                alwaysFail: true,
                                delay: 1000,
                            }),
                        ],
                    }),
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "VMUz":
/*!*******************************************************************!*\
  !*** ./src/playground/without-layout/smart-home/app.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ngx-app"]], decls: 6, vars: 0, consts: [["nbButton", "", "routerLink", "auth/login"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-app',
                template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <a nbButton routerLink=\"auth/login\">Login</a>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "XGPU":
/*!************************************************************************!*\
  !*** ./src/playground/without-layout/smart-home/app-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: routes, AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "VMUz");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    },
    {
        path: 'auth',
        loadChildren: function () { return __webpack_require__.e(/*! import() | auth-smart-home-auth-module */ "auth-smart-home-auth-module").then(__webpack_require__.bind(null, /*! ./auth/smart-home-auth.module */ "D2n3")).then(function (m) { return m.AuthModule; }); },
    },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRouting });
    AppRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRouting_Factory(t) { return new (t || AppRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRouting;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=smart-home-app-module.js.map