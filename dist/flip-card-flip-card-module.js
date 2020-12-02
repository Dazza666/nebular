(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flip-card-flip-card-module"],{

/***/ "7H7r":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/flip-card/flip-card-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FlipCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardRoutingModule", function() { return FlipCardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _flip_card_accents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flip-card-accents.component */ "W0Zk");
/* harmony import */ var _flip_card_colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip-card-colors.component */ "HMNd");
/* harmony import */ var _flip_card_full_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip-card-full.component */ "HTrH");
/* harmony import */ var _flip_card_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flip-card-showcase.component */ "pxGk");
/* harmony import */ var _flip_card_sizes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flip-card-sizes.component */ "vVEE");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var routes = [
    {
        path: 'flip-card-accents.component',
        component: _flip_card_accents_component__WEBPACK_IMPORTED_MODULE_2__["FlipCardAccentsComponent"],
    },
    {
        path: 'flip-card-colors.component',
        component: _flip_card_colors_component__WEBPACK_IMPORTED_MODULE_3__["FlipCardColorsComponent"],
    },
    {
        path: 'flip-card-full.component',
        component: _flip_card_full_component__WEBPACK_IMPORTED_MODULE_4__["FlipCardFullComponent"],
    },
    {
        path: 'flip-card-showcase.component',
        component: _flip_card_showcase_component__WEBPACK_IMPORTED_MODULE_5__["FlipCardShowcaseComponent"],
    },
    {
        path: 'flip-card-sizes.component',
        component: _flip_card_sizes_component__WEBPACK_IMPORTED_MODULE_6__["FlipCardSizesComponent"],
    },
];
var FlipCardRoutingModule = /** @class */ (function () {
    function FlipCardRoutingModule() {
    }
    FlipCardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlipCardRoutingModule });
    FlipCardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FlipCardRoutingModule_Factory(t) { return new (t || FlipCardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FlipCardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlipCardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "HMNd":
/*!****************************************************************************!*\
  !*** ./src/playground/with-layout/flip-card/flip-card-colors.component.ts ***!
  \****************************************************************************/
/*! exports provided: FlipCardColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardColorsComponent", function() { return FlipCardColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/flip-card/flip-card.component */ "4BIp");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var FlipCardColorsComponent = /** @class */ (function () {
    function FlipCardColorsComponent() {
    }
    FlipCardColorsComponent.ɵfac = function FlipCardColorsComponent_Factory(t) { return new (t || FlipCardColorsComponent)(); };
    FlipCardColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardColorsComponent, selectors: [["nb-flip-card-colors"]], decls: 13, vars: 0, consts: [["status", "success"], ["status", "danger"]], template: function FlipCardColorsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-flip-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-front");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Front Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__["NbFlipCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return FlipCardColorsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-flip-card-colors',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './flip-card-colors.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "HTrH":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/flip-card/flip-card-full.component.ts ***!
  \**************************************************************************/
/*! exports provided: FlipCardFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardFullComponent", function() { return FlipCardFullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/flip-card/flip-card.component */ "4BIp");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var FlipCardFullComponent = /** @class */ (function () {
    function FlipCardFullComponent() {
    }
    FlipCardFullComponent.ɵfac = function FlipCardFullComponent_Factory(t) { return new (t || FlipCardFullComponent)(); };
    FlipCardFullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardFullComponent, selectors: [["nb-flip-card-full"]], decls: 17, vars: 0, template: function FlipCardFullComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-flip-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-front");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nebula");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "By Wikipedia");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nebula");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "By Wikipedia");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__["NbFlipCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return FlipCardFullComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardFullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-flip-card-full',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './flip-card-full.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "W0Zk":
/*!*****************************************************************************!*\
  !*** ./src/playground/with-layout/flip-card/flip-card-accents.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FlipCardAccentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardAccentsComponent", function() { return FlipCardAccentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/flip-card/flip-card.component */ "4BIp");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var FlipCardAccentsComponent = /** @class */ (function () {
    function FlipCardAccentsComponent() {
    }
    FlipCardAccentsComponent.ɵfac = function FlipCardAccentsComponent_Factory(t) { return new (t || FlipCardAccentsComponent)(); };
    FlipCardAccentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardAccentsComponent, selectors: [["nb-flip-card-accents"]], decls: 13, vars: 0, consts: [["accent", "info", "status", "warning"], ["accent", "primary", "status", "info"]], template: function FlipCardAccentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-flip-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-front");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Front Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__["NbFlipCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return FlipCardAccentsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardAccentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-flip-card-accents',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './flip-card-accents.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "mQ2v":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/flip-card/flip-card.module.ts ***!
  \******************************************************************/
/*! exports provided: FlipCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardModule", function() { return FlipCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _flip_card_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flip-card-routing.module */ "7H7r");
/* harmony import */ var _flip_card_accents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip-card-accents.component */ "W0Zk");
/* harmony import */ var _flip_card_colors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip-card-colors.component */ "HMNd");
/* harmony import */ var _flip_card_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flip-card-full.component */ "HTrH");
/* harmony import */ var _flip_card_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flip-card-showcase.component */ "pxGk");
/* harmony import */ var _flip_card_sizes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flip-card-sizes.component */ "vVEE");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var FlipCardModule = /** @class */ (function () {
    function FlipCardModule() {
    }
    FlipCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlipCardModule });
    FlipCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FlipCardModule_Factory(t) { return new (t || FlipCardModule)(); }, imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _flip_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["FlipCardRoutingModule"]]] });
    return FlipCardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlipCardModule, { declarations: [_flip_card_accents_component__WEBPACK_IMPORTED_MODULE_3__["FlipCardAccentsComponent"],
        _flip_card_colors_component__WEBPACK_IMPORTED_MODULE_4__["FlipCardColorsComponent"],
        _flip_card_full_component__WEBPACK_IMPORTED_MODULE_5__["FlipCardFullComponent"],
        _flip_card_showcase_component__WEBPACK_IMPORTED_MODULE_6__["FlipCardShowcaseComponent"],
        _flip_card_sizes_component__WEBPACK_IMPORTED_MODULE_7__["FlipCardSizesComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _flip_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["FlipCardRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _flip_card_accents_component__WEBPACK_IMPORTED_MODULE_3__["FlipCardAccentsComponent"],
                    _flip_card_colors_component__WEBPACK_IMPORTED_MODULE_4__["FlipCardColorsComponent"],
                    _flip_card_full_component__WEBPACK_IMPORTED_MODULE_5__["FlipCardFullComponent"],
                    _flip_card_showcase_component__WEBPACK_IMPORTED_MODULE_6__["FlipCardShowcaseComponent"],
                    _flip_card_sizes_component__WEBPACK_IMPORTED_MODULE_7__["FlipCardSizesComponent"],
                ],
                imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _flip_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["FlipCardRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "pxGk":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/flip-card/flip-card-showcase.component.ts ***!
  \******************************************************************************/
/*! exports provided: FlipCardShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardShowcaseComponent", function() { return FlipCardShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/flip-card/flip-card.component */ "4BIp");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var FlipCardShowcaseComponent = /** @class */ (function () {
    function FlipCardShowcaseComponent() {
    }
    FlipCardShowcaseComponent.ɵfac = function FlipCardShowcaseComponent_Factory(t) { return new (t || FlipCardShowcaseComponent)(); };
    FlipCardShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardShowcaseComponent, selectors: [["nb-flip-card-showcase"]], decls: 9, vars: 0, consts: [["accent", "danger"]], template: function FlipCardShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-flip-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-front");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__["NbFlipCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return FlipCardShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-flip-card-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './flip-card-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "vVEE":
/*!***************************************************************************!*\
  !*** ./src/playground/with-layout/flip-card/flip-card-sizes.component.ts ***!
  \***************************************************************************/
/*! exports provided: FlipCardSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardSizesComponent", function() { return FlipCardSizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/flip-card/flip-card.component */ "4BIp");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var FlipCardSizesComponent = /** @class */ (function () {
    function FlipCardSizesComponent() {
    }
    FlipCardSizesComponent.ɵfac = function FlipCardSizesComponent_Factory(t) { return new (t || FlipCardSizesComponent)(); };
    FlipCardSizesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipCardSizesComponent, selectors: [["nb-flip-card-sizes"]], decls: 26, vars: 0, consts: [["size", "tiny"], ["size", "large"]], template: function FlipCardSizesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-flip-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-front");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Front Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-flip-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card-front");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Front Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card-back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back Card Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_1__["NbFlipCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return FlipCardSizesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardSizesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-flip-card-sizes',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './flip-card-sizes.component.html',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=flip-card-flip-card-module.js.map