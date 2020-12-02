(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["without-styles-without-styles-module"],{

/***/ "JEzs":
/*!*******************************************************************!*\
  !*** ./src/playground/without-styles/without-styles.component.ts ***!
  \*******************************************************************/
/*! exports provided: WithoutStylesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutStylesComponent", function() { return WithoutStylesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var WithoutStylesComponent = /** @class */ (function () {
    function WithoutStylesComponent() {
    }
    WithoutStylesComponent.ɵfac = function WithoutStylesComponent_Factory(t) { return new (t || WithoutStylesComponent)(); };
    WithoutStylesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WithoutStylesComponent, selectors: [["nb-custom"]], decls: 1, vars: 0, template: function WithoutStylesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return WithoutStylesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutStylesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-custom',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "RLpY":
/*!************************************************************************!*\
  !*** ./src/playground/without-styles/without-styles-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: WithoutStylesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutStylesRoutingModule", function() { return WithoutStylesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _without_styles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./without-styles.component */ "JEzs");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: '',
        component: _without_styles_component__WEBPACK_IMPORTED_MODULE_2__["WithoutStylesComponent"],
        children: [
            {
                path: 'bootstrap',
                loadChildren: function () { return __webpack_require__.e(/*! import() | bootstrap-bootstrap-module */ "bootstrap-bootstrap-module").then(__webpack_require__.bind(null, /*! ./bootstrap/bootstrap.module */ "U9q0")).then(function (m) { return m.BootstrapModule; }); },
            },
        ],
    },
];
var WithoutStylesRoutingModule = /** @class */ (function () {
    function WithoutStylesRoutingModule() {
    }
    WithoutStylesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WithoutStylesRoutingModule });
    WithoutStylesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WithoutStylesRoutingModule_Factory(t) { return new (t || WithoutStylesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return WithoutStylesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WithoutStylesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutStylesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "WS20":
/*!****************************************************************!*\
  !*** ./src/playground/without-styles/without-styles.module.ts ***!
  \****************************************************************/
/*! exports provided: WithoutStylesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutStylesModule", function() { return WithoutStylesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _without_styles_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./without-styles-routing.module */ "RLpY");
/* harmony import */ var _without_styles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./without-styles.component */ "JEzs");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var WithoutStylesModule = /** @class */ (function () {
    function WithoutStylesModule() {
    }
    WithoutStylesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WithoutStylesModule });
    WithoutStylesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WithoutStylesModule_Factory(t) { return new (t || WithoutStylesModule)(); }, imports: [[
                _without_styles_routing_module__WEBPACK_IMPORTED_MODULE_1__["WithoutStylesRoutingModule"],
            ]] });
    return WithoutStylesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WithoutStylesModule, { declarations: [_without_styles_component__WEBPACK_IMPORTED_MODULE_2__["WithoutStylesComponent"]], imports: [_without_styles_routing_module__WEBPACK_IMPORTED_MODULE_1__["WithoutStylesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithoutStylesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _without_styles_component__WEBPACK_IMPORTED_MODULE_2__["WithoutStylesComponent"],
                ],
                imports: [
                    _without_styles_routing_module__WEBPACK_IMPORTED_MODULE_1__["WithoutStylesRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=without-styles-without-styles-module.js.map