(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["without-layout-without-layout-module"],{

/***/ "Addn":
/*!************************************************************************!*\
  !*** ./src/playground/without-layout/without-layout-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: WithoutLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutLayoutRoutingModule", function() { return WithoutLayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _playground_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playground-base.component */ "K6HW");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: '',
        component: _playground_base_component__WEBPACK_IMPORTED_MODULE_2__["PlaygroundBaseComponent"],
        children: [
            {
                path: 'context-menu',
                loadChildren: function () { return __webpack_require__.e(/*! import() | context-menu-context-menu-module */ "context-menu-context-menu-module").then(__webpack_require__.bind(null, /*! ./context-menu/context-menu.module */ "VaiE")).then(function (m) { return m.ContextMenuModule; }); },
            },
            {
                path: 'layout',
                loadChildren: function () { return __webpack_require__.e(/*! import() | layout-layout-module */ "layout-layout-module").then(__webpack_require__.bind(null, /*! ./layout/layout.module */ "fDqt")).then(function (m) { return m.LayoutModule; }); },
            },
            {
                path: 'scroll',
                loadChildren: function () { return __webpack_require__.e(/*! import() | scroll-scroll-module */ "scroll-scroll-module").then(__webpack_require__.bind(null, /*! ./scroll/scroll.module */ "wiho")).then(function (m) { return m.ScrollModule; }); },
            },
            {
                path: 'search',
                loadChildren: function () { return __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ./search/search.module */ "DR3t")).then(function (m) { return m.SearchModule; }); },
            },
            {
                path: 'sidebar',
                loadChildren: function () { return __webpack_require__.e(/*! import() | sidebar-sidebar-module */ "sidebar-sidebar-module").then(__webpack_require__.bind(null, /*! ./sidebar/sidebar.module */ "ASlj")).then(function (m) { return m.SidebarModule; }); },
            },
            {
                path: 'menu',
                loadChildren: function () { return __webpack_require__.e(/*! import() | menu-menu-test-module */ "menu-menu-test-module").then(__webpack_require__.bind(null, /*! ./menu/menu-test.module */ "nWdf")).then(function (m) { return m.MenuTestModule; }); },
            },
            {
                path: 'user',
                loadChildren: function () { return __webpack_require__.e(/*! import() | user-user-test-module */ "user-user-test-module").then(__webpack_require__.bind(null, /*! ./user/user-test.module */ "eLYW")).then(function (m) { return m.UserTestModule; }); },
            },
            {
                path: 'azure',
                loadChildren: function () { return Promise.all(/*! import() | azure-azure-module */[__webpack_require__.e("default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03"), __webpack_require__.e("azure-azure-module")]).then(__webpack_require__.bind(null, /*! ./azure/azure.module */ "/VH1")).then(function (m) { return m.AzurePlaygroundModule; }); },
            },
            {
                path: 'auth',
                loadChildren: function () { return Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "SM1g")).then(function (m) { return m.AuthPlaygroundModule; }); },
            },
            {
                path: 'firebase',
                loadChildren: function () { return Promise.all(/*! import() | firebase-firebase-module */[__webpack_require__.e("default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03"), __webpack_require__.e("firebase-firebase-module")]).then(__webpack_require__.bind(null, /*! ./firebase/firebase.module */ "Z67I")).then(function (m) { return m.FirebasePlaygroundModule; }); },
            },
            {
                path: 'smart-home',
                loadChildren: function () { return Promise.all(/*! import() | smart-home-app-module */[__webpack_require__.e("default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03"), __webpack_require__.e("smart-home-app-module")]).then(__webpack_require__.bind(null, /*! ./smart-home/app.module */ "31Vr")).then(function (m) { return m.AppModule; }); },
            },
        ],
    },
];
var WithoutLayoutRoutingModule = /** @class */ (function () {
    function WithoutLayoutRoutingModule() {
    }
    WithoutLayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WithoutLayoutRoutingModule });
    WithoutLayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WithoutLayoutRoutingModule_Factory(t) { return new (t || WithoutLayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return WithoutLayoutRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WithoutLayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutLayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "JC2i":
/*!****************************************************************!*\
  !*** ./src/playground/without-layout/without-layout.module.ts ***!
  \****************************************************************/
/*! exports provided: WithoutLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutLayoutModule", function() { return WithoutLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _without_layout_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./without-layout-routing.module */ "Addn");
/* harmony import */ var _playground_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playground-base.component */ "K6HW");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var WithoutLayoutModule = /** @class */ (function () {
    function WithoutLayoutModule() {
    }
    WithoutLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WithoutLayoutModule });
    WithoutLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WithoutLayoutModule_Factory(t) { return new (t || WithoutLayoutModule)(); }, imports: [[_without_layout_routing_module__WEBPACK_IMPORTED_MODULE_1__["WithoutLayoutRoutingModule"]]] });
    return WithoutLayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WithoutLayoutModule, { declarations: [_playground_base_component__WEBPACK_IMPORTED_MODULE_2__["PlaygroundBaseComponent"]], imports: [_without_layout_routing_module__WEBPACK_IMPORTED_MODULE_1__["WithoutLayoutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _playground_base_component__WEBPACK_IMPORTED_MODULE_2__["PlaygroundBaseComponent"],
                ],
                imports: [_without_layout_routing_module__WEBPACK_IMPORTED_MODULE_1__["WithoutLayoutRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "K6HW":
/*!********************************************************************!*\
  !*** ./src/playground/without-layout/playground-base.component.ts ***!
  \********************************************************************/
/*! exports provided: PlaygroundBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundBaseComponent", function() { return PlaygroundBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var style_loader_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-loader!../styles/styles.scss */ "l9ht");
/* harmony import */ var style_loader_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(style_loader_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var PlaygroundBaseComponent = /** @class */ (function () {
    function PlaygroundBaseComponent(themeService) {
        this.themeService = themeService;
    }
    PlaygroundBaseComponent.prototype.ngOnInit = function () {
        this.themeService.changeTheme('default');
    };
    PlaygroundBaseComponent.ɵfac = function PlaygroundBaseComponent_Factory(t) { return new (t || PlaygroundBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"])); };
    PlaygroundBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaygroundBaseComponent, selectors: [["nb-playground-base"]], decls: 1, vars: 0, template: function PlaygroundBaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });
    return PlaygroundBaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-base',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=without-layout-without-layout-module.js.map