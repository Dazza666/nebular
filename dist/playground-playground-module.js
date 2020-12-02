(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playground-playground-module"],{

/***/ "/fP5":
/*!*********************************************!*\
  !*** ./src/playground/playground.module.ts ***!
  \*********************************************/
/*! exports provided: PlaygroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundModule", function() { return PlaygroundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _playground_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground-routing.module */ "a9X1");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var PlaygroundModule = /** @class */ (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlaygroundModule });
    PlaygroundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlaygroundModule_Factory(t) { return new (t || PlaygroundModule)(); }, imports: [[_playground_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlaygroundRoutingModule"]]] });
    return PlaygroundModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlaygroundModule, { imports: [_playground_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlaygroundRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_playground_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlaygroundRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "a9X1":
/*!*****************************************************!*\
  !*** ./src/playground/playground-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, PlaygroundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundRoutingModule", function() { return PlaygroundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.all(/*! import() | with-layout-with-layout-module */[__webpack_require__.e("default~with-layout-with-layout-module~without-layout-without-layout-module"), __webpack_require__.e("with-layout-with-layout-module")]).then(__webpack_require__.bind(null, /*! ./with-layout/with-layout.module */ "4cn0")).then(function (m) { return m.WithLayoutModule; }); },
    },
    {
        path: '',
        loadChildren: function () { return Promise.all(/*! import() | without-layout-without-layout-module */[__webpack_require__.e("default~with-layout-with-layout-module~without-layout-without-layout-module"), __webpack_require__.e("without-layout-without-layout-module")]).then(__webpack_require__.bind(null, /*! ./without-layout/without-layout.module */ "JC2i")).then(function (m) { return m.WithoutLayoutModule; }); },
    },
    {
        path: '',
        loadChildren: function () { return __webpack_require__.e(/*! import() | without-styles-without-styles-module */ "without-styles-without-styles-module").then(__webpack_require__.bind(null, /*! ./without-styles/without-styles.module */ "WS20")).then(function (m) { return m.WithoutStylesModule; }); },
    },
];
var PlaygroundRoutingModule = /** @class */ (function () {
    function PlaygroundRoutingModule() {
    }
    PlaygroundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlaygroundRoutingModule });
    PlaygroundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlaygroundRoutingModule_Factory(t) { return new (t || PlaygroundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PlaygroundRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlaygroundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=playground-playground-module.js.map