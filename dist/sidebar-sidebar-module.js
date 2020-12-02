(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar-sidebar-module"],{

/***/ "3FIl":
/*!*************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SidebarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRoutingModule", function() { return SidebarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_compacted_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-compacted.component */ "MVsH");
/* harmony import */ var _sidebar_fixed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-fixed.component */ "i+UO");
/* harmony import */ var _sidebar_one_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar-one-test.component */ "vsnQ");
/* harmony import */ var _sidebar_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-right.component */ "n9OY");
/* harmony import */ var _sidebar_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar-showcase.component */ "sA7N");
/* harmony import */ var _sidebar_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-test.component */ "zCzY");
/* harmony import */ var _sidebar_three_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar-three-test.component */ "HS8O");
/* harmony import */ var _sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar-toggle.component */ "w61w");
/* harmony import */ var _sidebar_two_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar-two-test.component */ "BUMj");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













var routes = [
    {
        path: 'sidebar-compacted.component',
        component: _sidebar_compacted_component__WEBPACK_IMPORTED_MODULE_2__["SidebarCompactedComponent"],
    },
    {
        path: 'sidebar-fixed.component',
        component: _sidebar_fixed_component__WEBPACK_IMPORTED_MODULE_3__["SidebarFixedComponent"],
    },
    {
        path: 'sidebar-one-test.component',
        component: _sidebar_one_test_component__WEBPACK_IMPORTED_MODULE_4__["SidebarOneTestComponent"],
    },
    {
        path: 'sidebar-right.component',
        component: _sidebar_right_component__WEBPACK_IMPORTED_MODULE_5__["SidebarRightComponent"],
    },
    {
        path: 'sidebar-showcase.component',
        component: _sidebar_showcase_component__WEBPACK_IMPORTED_MODULE_6__["SidebarShowcaseComponent"],
    },
    {
        path: 'sidebar-test.component',
        component: _sidebar_test_component__WEBPACK_IMPORTED_MODULE_7__["SidebarTestComponent"],
    },
    {
        path: 'sidebar-three-test.component',
        component: _sidebar_three_test_component__WEBPACK_IMPORTED_MODULE_8__["SidebarThreeTestComponent"],
    },
    {
        path: 'sidebar-toggle.component',
        component: _sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_9__["SidebarToggleComponent"],
    },
    {
        path: 'sidebar-two-test.component',
        component: _sidebar_two_test_component__WEBPACK_IMPORTED_MODULE_10__["SidebarTwoTestComponent"],
    },
];
var SidebarRoutingModule = /** @class */ (function () {
    function SidebarRoutingModule() {
    }
    SidebarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidebarRoutingModule });
    SidebarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidebarRoutingModule_Factory(t) { return new (t || SidebarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SidebarRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ASlj":
/*!*****************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar.module.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routing.module */ "3FIl");
/* harmony import */ var _sidebar_compacted_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-compacted.component */ "MVsH");
/* harmony import */ var _sidebar_fixed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar-fixed.component */ "i+UO");
/* harmony import */ var _sidebar_one_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-one-test.component */ "vsnQ");
/* harmony import */ var _sidebar_right_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar-right.component */ "n9OY");
/* harmony import */ var _sidebar_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-showcase.component */ "sA7N");
/* harmony import */ var _sidebar_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar-test.component */ "zCzY");
/* harmony import */ var _sidebar_three_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar-three-test.component */ "HS8O");
/* harmony import */ var _sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar-toggle.component */ "w61w");
/* harmony import */ var _sidebar_two_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar-two-test.component */ "BUMj");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.module */ "q1xA");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */














var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidebarModule });
    SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidebarModule_Factory(t) { return new (t || SidebarModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_2__["SidebarRoutingModule"],
            ]] });
    return SidebarModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarModule, { declarations: [_sidebar_compacted_component__WEBPACK_IMPORTED_MODULE_3__["SidebarCompactedComponent"],
        _sidebar_fixed_component__WEBPACK_IMPORTED_MODULE_4__["SidebarFixedComponent"],
        _sidebar_one_test_component__WEBPACK_IMPORTED_MODULE_5__["SidebarOneTestComponent"],
        _sidebar_right_component__WEBPACK_IMPORTED_MODULE_6__["SidebarRightComponent"],
        _sidebar_showcase_component__WEBPACK_IMPORTED_MODULE_7__["SidebarShowcaseComponent"],
        _sidebar_test_component__WEBPACK_IMPORTED_MODULE_8__["SidebarTestComponent"],
        _sidebar_three_test_component__WEBPACK_IMPORTED_MODULE_9__["SidebarThreeTestComponent"],
        _sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_10__["SidebarToggleComponent"],
        _sidebar_two_test_component__WEBPACK_IMPORTED_MODULE_11__["SidebarTwoTestComponent"]], imports: [_framework_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_2__["SidebarRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _sidebar_compacted_component__WEBPACK_IMPORTED_MODULE_3__["SidebarCompactedComponent"],
                    _sidebar_fixed_component__WEBPACK_IMPORTED_MODULE_4__["SidebarFixedComponent"],
                    _sidebar_one_test_component__WEBPACK_IMPORTED_MODULE_5__["SidebarOneTestComponent"],
                    _sidebar_right_component__WEBPACK_IMPORTED_MODULE_6__["SidebarRightComponent"],
                    _sidebar_showcase_component__WEBPACK_IMPORTED_MODULE_7__["SidebarShowcaseComponent"],
                    _sidebar_test_component__WEBPACK_IMPORTED_MODULE_8__["SidebarTestComponent"],
                    _sidebar_three_test_component__WEBPACK_IMPORTED_MODULE_9__["SidebarThreeTestComponent"],
                    _sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_10__["SidebarToggleComponent"],
                    _sidebar_two_test_component__WEBPACK_IMPORTED_MODULE_11__["SidebarTwoTestComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _sidebar_routing_module__WEBPACK_IMPORTED_MODULE_2__["SidebarRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "BUMj":
/*!*****************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-two-test.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SidebarTwoTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTwoTestComponent", function() { return SidebarTwoTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var SidebarTwoTestComponent = /** @class */ (function () {
    function SidebarTwoTestComponent() {
    }
    SidebarTwoTestComponent.ɵfac = function SidebarTwoTestComponent_Factory(t) { return new (t || SidebarTwoTestComponent)(); };
    SidebarTwoTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarTwoTestComponent, selectors: [["nb-sidebar-two-test"]], decls: 7, vars: 0, consts: [["right", "", "fixed", ""]], template: function SidebarTwoTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-layout-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-sidebar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-layout-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"]], styles: ["[_nghost-%COMP%]     nb-layout-column {\n      background-color: #76ecff;\n    }"] });
    return SidebarTwoTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTwoTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-two-test',
                styles: [
                    "\n    :host ::ng-deep nb-layout-column {\n      background-color: #76ecff;\n    }\n    ",
                ],
                template: "\n    <nb-layout>\n\n      <nb-layout-header></nb-layout-header>\n\n      <nb-sidebar>\n        Left\n      </nb-sidebar>\n\n      <nb-sidebar right fixed>\n        Right\n      </nb-sidebar>\n\n      <nb-layout-footer></nb-layout-footer>\n\n    </nb-layout>\n",
            }]
    }], null, null); })();


/***/ }),

/***/ "HS8O":
/*!*******************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-three-test.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SidebarThreeTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarThreeTestComponent", function() { return SidebarThreeTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var SidebarThreeTestComponent = /** @class */ (function () {
    function SidebarThreeTestComponent() {
    }
    SidebarThreeTestComponent.ɵfac = function SidebarThreeTestComponent_Factory(t) { return new (t || SidebarThreeTestComponent)(); };
    SidebarThreeTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarThreeTestComponent, selectors: [["nb-sidebar-three-test"]], decls: 7, vars: 0, consts: [["state", "collapsed"], ["state", "compacted", "fixed", "", "right", ""]], template: function SidebarThreeTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-layout-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-sidebar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-sidebar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-layout-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"]], styles: ["[_nghost-%COMP%]     nb-layout-column {\n      background-color: #76ecff;\n    }"] });
    return SidebarThreeTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarThreeTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-three-test',
                styles: [
                    "\n    :host ::ng-deep nb-layout-column {\n      background-color: #76ecff;\n    }\n    ",
                ],
                template: "\n    <nb-layout>\n\n      <nb-layout-header></nb-layout-header>\n\n      <nb-sidebar state=\"collapsed\">\n        Left\n      </nb-sidebar>\n\n      <nb-sidebar state=\"compacted\" fixed right>\n        Right\n      </nb-sidebar>\n\n      <nb-layout-footer></nb-layout-footer>\n\n    </nb-layout>\n",
            }]
    }], null, null); })();


/***/ }),

/***/ "MVsH":
/*!******************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-compacted.component.ts ***!
  \******************************************************************************/
/*! exports provided: SidebarCompactedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarCompactedComponent", function() { return SidebarCompactedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");




var SidebarCompactedComponent = /** @class */ (function () {
    function SidebarCompactedComponent() {
    }
    SidebarCompactedComponent.ɵfac = function SidebarCompactedComponent_Factory(t) { return new (t || SidebarCompactedComponent)(); };
    SidebarCompactedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarCompactedComponent, selectors: [["nb-sidebar-compacted"]], decls: 4, vars: 0, consts: [["state", "compacted"], [1, "colored-column-primary"]], template: function SidebarCompactedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-sidebar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-layout-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Layout Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"]], encapsulation: 2 });
    return SidebarCompactedComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarCompactedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-compacted',
                templateUrl: './sidebar-compacted.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "i+UO":
/*!**************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-fixed.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarFixedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarFixedComponent", function() { return SidebarFixedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");







var SidebarFixedComponent = /** @class */ (function () {
    function SidebarFixedComponent(sidebarService) {
        this.sidebarService = sidebarService;
    }
    SidebarFixedComponent.prototype.toggle = function () {
        this.sidebarService.toggle();
    };
    SidebarFixedComponent.ɵfac = function SidebarFixedComponent_Factory(t) { return new (t || SidebarFixedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"])); };
    SidebarFixedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarFixedComponent, selectors: [["nb-sidebar-fixed"]], decls: 7, vars: 0, consts: [["fixed", ""], ["nbButton", "", "status", "success", "size", "tiny", 3, "click"], [1, "colored-column-info"]], template: function SidebarFixedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarFixedComponent_Template_button_click_2_listener() { return ctx.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toggle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-sidebar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Long layout content so that it is clear that fixed sidebar is shown on top of the content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"]], encapsulation: 2 });
    return SidebarFixedComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarFixedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-fixed',
                templateUrl: './sidebar-fixed.component.html',
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"] }]; }, null); })();


/***/ }),

/***/ "n9OY":
/*!**************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-right.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRightComponent", function() { return SidebarRightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");




var SidebarRightComponent = /** @class */ (function () {
    function SidebarRightComponent() {
    }
    SidebarRightComponent.ɵfac = function SidebarRightComponent_Factory(t) { return new (t || SidebarRightComponent)(); };
    SidebarRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarRightComponent, selectors: [["nb-sidebar-right"]], decls: 5, vars: 0, consts: [["right", ""], [1, "colored-column-warning"]], template: function SidebarRightComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-sidebar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Right Sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Layout Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"]], encapsulation: 2 });
    return SidebarRightComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-right',
                templateUrl: './sidebar-right.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "sA7N":
/*!*****************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-showcase.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SidebarShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarShowcaseComponent", function() { return SidebarShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");




var SidebarShowcaseComponent = /** @class */ (function () {
    function SidebarShowcaseComponent() {
    }
    SidebarShowcaseComponent.ɵfac = function SidebarShowcaseComponent_Factory(t) { return new (t || SidebarShowcaseComponent)(); };
    SidebarShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarShowcaseComponent, selectors: [["nb-sidebar-showcase"]], decls: 5, vars: 0, consts: [[1, "colored-column-success"]], template: function SidebarShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sidebar Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Layout Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"]], encapsulation: 2 });
    return SidebarShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-showcase',
                templateUrl: './sidebar-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "vsnQ":
/*!*****************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-one-test.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SidebarOneTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOneTestComponent", function() { return SidebarOneTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var SidebarOneTestComponent = /** @class */ (function () {
    function SidebarOneTestComponent() {
    }
    SidebarOneTestComponent.ɵfac = function SidebarOneTestComponent_Factory(t) { return new (t || SidebarOneTestComponent)(); };
    SidebarOneTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarOneTestComponent, selectors: [["nb-sidebar-one-test"]], decls: 5, vars: 0, consts: [["right", ""]], template: function SidebarOneTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["NbSidebarComponent"]], styles: ["[_nghost-%COMP%]     nb-layout-column {\n      background-color: #76ecff;\n    }"] });
    return SidebarOneTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarOneTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-one-test',
                styles: [
                    "\n    :host ::ng-deep nb-layout-column {\n      background-color: #76ecff;\n    }\n    ",
                ],
                template: "\n    <nb-layout>\n      <nb-sidebar>\n        Left\n      </nb-sidebar>\n\n      <nb-sidebar right>\n        Right\n      </nb-sidebar>\n    </nb-layout>\n",
            }]
    }], null, null); })();


/***/ }),

/***/ "w61w":
/*!***************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-toggle.component.ts ***!
  \***************************************************************************/
/*! exports provided: SidebarToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleComponent", function() { return SidebarToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");







var SidebarToggleComponent = /** @class */ (function () {
    function SidebarToggleComponent(sidebarService) {
        this.sidebarService = sidebarService;
    }
    SidebarToggleComponent.prototype.toggle = function () {
        this.sidebarService.toggle(false, 'left');
    };
    SidebarToggleComponent.prototype.toggleCompact = function () {
        this.sidebarService.toggle(true, 'right');
    };
    SidebarToggleComponent.ɵfac = function SidebarToggleComponent_Factory(t) { return new (t || SidebarToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"])); };
    SidebarToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarToggleComponent, selectors: [["nb-sidebar-toggle"]], decls: 10, vars: 0, consts: [["fixed", ""], ["nbButton", "", "status", "success", "size", "tiny", 3, "click"], ["nbButton", "", "status", "info", "size", "tiny", 3, "click"], ["tag", "left"], ["right", "", "tag", "right"], [1, "colored-column-warning"]], template: function SidebarToggleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarToggleComponent_Template_button_click_2_listener() { return ctx.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toggle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarToggleComponent_Template_button_click_4_listener() { return ctx.toggleCompact(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle Compact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-sidebar", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-sidebar", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-layout-column", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Layout Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"]], styles: ["[_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n      margin-left: auto;\n    }"] });
    return SidebarToggleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-toggle',
                templateUrl: './sidebar-toggle.component.html',
                styles: ["\n    :host nb-layout-header button:last-child {\n      margin-left: auto;\n    }\n  "],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"] }]; }, null); })();


/***/ }),

/***/ "zCzY":
/*!*************************************************************************!*\
  !*** ./src/playground/without-layout/sidebar/sidebar-test.component.ts ***!
  \*************************************************************************/
/*! exports provided: SidebarTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTestComponent", function() { return SidebarTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var SidebarTestComponent = /** @class */ (function () {
    function SidebarTestComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.content = 'First ';
    }
    SidebarTestComponent.prototype.collapseLeft = function () {
        this.sidebarService.toggle(false, 'left');
    };
    SidebarTestComponent.prototype.collapseRight = function () {
        this.sidebarService.toggle(true, 'right');
    };
    SidebarTestComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 1000; i++) {
            this.content += 'Akveo ';
        }
        this.content += ' Last';
    };
    SidebarTestComponent.ɵfac = function SidebarTestComponent_Factory(t) { return new (t || SidebarTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"])); };
    SidebarTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarTestComponent, selectors: [["nb-sidebar-test"]], decls: 21, vars: 4, consts: [["fixed", ""], ["href", "#", 1, "navbar-brand"], ["id", "collapse-left", 3, "click"], ["id", "collapse-right", 3, "click"], ["state", "collapsed", "fixed", "", "tag", "left"], ["right", "", "state", "compacted", "tag", "right"], ["left", ""]], template: function SidebarTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Akveo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarTestComponent_Template_button_click_4_listener() { return ctx.collapseLeft(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Collapse Left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarTestComponent_Template_button_click_6_listener() { return ctx.collapseRight(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Collapse Right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-sidebar", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-sidebar", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-sidebar-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Some Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-layout-column", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-layout-footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A9 Akveo 2017 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["NbSidebarComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["NbSidebarHeaderComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutFooterComponent"]], styles: ["[_nghost-%COMP%]     nb-layout-column {\n      background-color: #76ecff;\n    }"] });
    return SidebarTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-sidebar-test',
                styles: [
                    "\n    :host ::ng-deep nb-layout-column {\n      background-color: #76ecff;\n    }\n    ",
                ],
                template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <a href=\"#\" class=\"navbar-brand\">Akveo</a>\n\n        <button id=\"collapse-left\" (click)=\"collapseLeft()\">Collapse Left</button>\n        <button id=\"collapse-right\" (click)=\"collapseRight()\">Collapse Right</button>\n      </nb-layout-header>\n\n      <nb-sidebar state=\"collapsed\" fixed tag=\"left\">\n      </nb-sidebar>\n\n      <nb-sidebar right state=\"compacted\" tag=\"right\">\n        <nb-sidebar-header>Some Header</nb-sidebar-header>\n        {{ content }}\n      </nb-sidebar>\n\n      <nb-layout-column left>\n       {{ content }}\n      </nb-layout-column>\n      <nb-layout-column>\n       {{ content }}\n      </nb-layout-column>\n      <nb-layout-column>\n       {{ content }}\n      </nb-layout-column>\n\n\n      <nb-layout-footer fixed>\n        &copy; Akveo 2017\n      </nb-layout-footer>\n    </nb-layout>\n",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=sidebar-sidebar-module.js.map