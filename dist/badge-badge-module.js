(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-badge-module"],{

/***/ "/u9I":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/badge/badge-showcase.component.ts ***!
  \**********************************************************************/
/*! exports provided: BadgeShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeShowcaseComponent", function() { return BadgeShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/badge/badge.component */ "k3KB");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var BadgeShowcaseComponent = /** @class */ (function () {
    function BadgeShowcaseComponent() {
    }
    BadgeShowcaseComponent.ɵfac = function BadgeShowcaseComponent_Factory(t) { return new (t || BadgeShowcaseComponent)(); };
    BadgeShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeShowcaseComponent, selectors: [["nb-badge-showcase"]], decls: 6, vars: 0, consts: [[2, "position", "relative"], ["text", "new", "status", "success", "position", "top right"], ["text", "99+", "status", "danger", "position", "top left"]], template: function BadgeShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-badge", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-badge", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Card body. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_2__["NbBadgeComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"]], encapsulation: 2, changeDetection: 0 });
    return BadgeShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgeShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-badge-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './badge-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "foJv":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/badge/badge-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BadgeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeRoutingModule", function() { return BadgeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _badge_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge-showcase.component */ "/u9I");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: 'badge-showcase.component',
        component: _badge_showcase_component__WEBPACK_IMPORTED_MODULE_2__["BadgeShowcaseComponent"],
    },
];
var BadgeRoutingModule = /** @class */ (function () {
    function BadgeRoutingModule() {
    }
    BadgeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BadgeRoutingModule });
    BadgeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BadgeRoutingModule_Factory(t) { return new (t || BadgeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return BadgeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BadgeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "tx/T":
/*!**********************************************************!*\
  !*** ./src/playground/with-layout/badge/badge.module.ts ***!
  \**********************************************************/
/*! exports provided: BadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _badge_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge-routing.module */ "foJv");
/* harmony import */ var _badge_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge-showcase.component */ "/u9I");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var BadgeModule = /** @class */ (function () {
    function BadgeModule() {
    }
    BadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BadgeModule });
    BadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BadgeModule_Factory(t) { return new (t || BadgeModule)(); }, imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _badge_routing_module__WEBPACK_IMPORTED_MODULE_2__["BadgeRoutingModule"]]] });
    return BadgeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BadgeModule, { declarations: [_badge_showcase_component__WEBPACK_IMPORTED_MODULE_3__["BadgeShowcaseComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _badge_routing_module__WEBPACK_IMPORTED_MODULE_2__["BadgeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _badge_showcase_component__WEBPACK_IMPORTED_MODULE_3__["BadgeShowcaseComponent"],
                ],
                imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _badge_routing_module__WEBPACK_IMPORTED_MODULE_2__["BadgeRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=badge-badge-module.js.map