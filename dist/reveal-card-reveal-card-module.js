(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reveal-card-reveal-card-module"],{

/***/ "8Vuo":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/reveal-card/reveal-card-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RevealCardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealCardRoutingModule", function() { return RevealCardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reveal_card_accents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reveal-card-accents.component */ "krVZ");
/* harmony import */ var _reveal_card_colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reveal-card-colors.component */ "tqIt");
/* harmony import */ var _reveal_card_full_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reveal-card-full.component */ "J8gA");
/* harmony import */ var _reveal_card_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-card-showcase.component */ "PcXl");
/* harmony import */ var _reveal_card_sizes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reveal-card-sizes.component */ "bT4S");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var routes = [
    {
        path: 'reveal-card-accents.component',
        component: _reveal_card_accents_component__WEBPACK_IMPORTED_MODULE_2__["RevealCardAccentsComponent"],
    },
    {
        path: 'reveal-card-colors.component',
        component: _reveal_card_colors_component__WEBPACK_IMPORTED_MODULE_3__["RevealCardColorsComponent"],
    },
    {
        path: 'reveal-card-full.component',
        component: _reveal_card_full_component__WEBPACK_IMPORTED_MODULE_4__["RevealCardFullComponent"],
    },
    {
        path: 'reveal-card-showcase.component',
        component: _reveal_card_showcase_component__WEBPACK_IMPORTED_MODULE_5__["RevealCardShowcaseComponent"],
    },
    {
        path: 'reveal-card-sizes.component',
        component: _reveal_card_sizes_component__WEBPACK_IMPORTED_MODULE_6__["RevealCardSizesComponent"],
    },
];
var RevealCardRoutingModule = /** @class */ (function () {
    function RevealCardRoutingModule() {
    }
    RevealCardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RevealCardRoutingModule });
    RevealCardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RevealCardRoutingModule_Factory(t) { return new (t || RevealCardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return RevealCardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RevealCardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealCardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "J8gA":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/reveal-card/reveal-card-full.component.ts ***!
  \******************************************************************************/
/*! exports provided: RevealCardFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealCardFullComponent", function() { return RevealCardFullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/reveal-card/reveal-card.component */ "+SQL");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var RevealCardFullComponent = /** @class */ (function () {
    function RevealCardFullComponent() {
    }
    RevealCardFullComponent.ɵfac = function RevealCardFullComponent_Factory(t) { return new (t || RevealCardFullComponent)(); };
    RevealCardFullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevealCardFullComponent, selectors: [["nb-reveal-card-full"]], decls: 17, vars: 0, template: function RevealCardFullComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-reveal-card");
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
        } }, directives: [_framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__["NbRevealCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return RevealCardFullComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealCardFullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-reveal-card-full',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './reveal-card-full.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "PcXl":
/*!**********************************************************************************!*\
  !*** ./src/playground/with-layout/reveal-card/reveal-card-showcase.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RevealCardShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealCardShowcaseComponent", function() { return RevealCardShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/reveal-card/reveal-card.component */ "+SQL");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var RevealCardShowcaseComponent = /** @class */ (function () {
    function RevealCardShowcaseComponent() {
    }
    RevealCardShowcaseComponent.ɵfac = function RevealCardShowcaseComponent_Factory(t) { return new (t || RevealCardShowcaseComponent)(); };
    RevealCardShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevealCardShowcaseComponent, selectors: [["nb-reveal-card-showcase"]], decls: 13, vars: 0, consts: [["accent", "success"], ["accent", "primary"]], template: function RevealCardShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-reveal-card");
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
        } }, directives: [_framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__["NbRevealCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return RevealCardShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealCardShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-reveal-card-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './reveal-card-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "bT4S":
/*!*******************************************************************************!*\
  !*** ./src/playground/with-layout/reveal-card/reveal-card-sizes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RevealCardSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealCardSizesComponent", function() { return RevealCardSizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/reveal-card/reveal-card.component */ "+SQL");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var RevealCardSizesComponent = /** @class */ (function () {
    function RevealCardSizesComponent() {
    }
    RevealCardSizesComponent.ɵfac = function RevealCardSizesComponent_Factory(t) { return new (t || RevealCardSizesComponent)(); };
    RevealCardSizesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevealCardSizesComponent, selectors: [["nb-reveal-card-sizes"]], decls: 26, vars: 0, consts: [["size", "tiny"], ["size", "large"]], template: function RevealCardSizesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-reveal-card");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-reveal-card");
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
        } }, directives: [_framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__["NbRevealCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return RevealCardSizesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealCardSizesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-reveal-card-sizes',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './reveal-card-sizes.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "bqhO":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/reveal-card/reveal-card.module.ts ***!
  \**********************************************************************/
/*! exports provided: RevealCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealCardModule", function() { return RevealCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _reveal_card_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reveal-card-routing.module */ "8Vuo");
/* harmony import */ var _reveal_card_accents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reveal-card-accents.component */ "krVZ");
/* harmony import */ var _reveal_card_colors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reveal-card-colors.component */ "tqIt");
/* harmony import */ var _reveal_card_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-card-full.component */ "J8gA");
/* harmony import */ var _reveal_card_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reveal-card-showcase.component */ "PcXl");
/* harmony import */ var _reveal_card_sizes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reveal-card-sizes.component */ "bT4S");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var RevealCardModule = /** @class */ (function () {
    function RevealCardModule() {
    }
    RevealCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RevealCardModule });
    RevealCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RevealCardModule_Factory(t) { return new (t || RevealCardModule)(); }, imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _reveal_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevealCardRoutingModule"]]] });
    return RevealCardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RevealCardModule, { declarations: [_reveal_card_accents_component__WEBPACK_IMPORTED_MODULE_3__["RevealCardAccentsComponent"],
        _reveal_card_colors_component__WEBPACK_IMPORTED_MODULE_4__["RevealCardColorsComponent"],
        _reveal_card_full_component__WEBPACK_IMPORTED_MODULE_5__["RevealCardFullComponent"],
        _reveal_card_showcase_component__WEBPACK_IMPORTED_MODULE_6__["RevealCardShowcaseComponent"],
        _reveal_card_sizes_component__WEBPACK_IMPORTED_MODULE_7__["RevealCardSizesComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _reveal_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevealCardRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _reveal_card_accents_component__WEBPACK_IMPORTED_MODULE_3__["RevealCardAccentsComponent"],
                    _reveal_card_colors_component__WEBPACK_IMPORTED_MODULE_4__["RevealCardColorsComponent"],
                    _reveal_card_full_component__WEBPACK_IMPORTED_MODULE_5__["RevealCardFullComponent"],
                    _reveal_card_showcase_component__WEBPACK_IMPORTED_MODULE_6__["RevealCardShowcaseComponent"],
                    _reveal_card_sizes_component__WEBPACK_IMPORTED_MODULE_7__["RevealCardSizesComponent"],
                ],
                imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _reveal_card_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevealCardRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "krVZ":
/*!*********************************************************************************!*\
  !*** ./src/playground/with-layout/reveal-card/reveal-card-accents.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RevealCardAccentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealCardAccentsComponent", function() { return RevealCardAccentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/reveal-card/reveal-card.component */ "+SQL");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var RevealCardAccentsComponent = /** @class */ (function () {
    function RevealCardAccentsComponent() {
    }
    RevealCardAccentsComponent.ɵfac = function RevealCardAccentsComponent_Factory(t) { return new (t || RevealCardAccentsComponent)(); };
    RevealCardAccentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevealCardAccentsComponent, selectors: [["nb-reveal-card-accents"]], decls: 13, vars: 0, consts: [["accent", "info", "status", "warning"], ["accent", "primary", "status", "info"]], template: function RevealCardAccentsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-reveal-card");
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
        } }, directives: [_framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__["NbRevealCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return RevealCardAccentsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealCardAccentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-reveal-card-accents',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './reveal-card-accents.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "tqIt":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/reveal-card/reveal-card-colors.component.ts ***!
  \********************************************************************************/
/*! exports provided: RevealCardColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevealCardColorsComponent", function() { return RevealCardColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/reveal-card/reveal-card.component */ "+SQL");
/* harmony import */ var _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/shared/shared.component */ "7Z5H");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var RevealCardColorsComponent = /** @class */ (function () {
    function RevealCardColorsComponent() {
    }
    RevealCardColorsComponent.ɵfac = function RevealCardColorsComponent_Factory(t) { return new (t || RevealCardColorsComponent)(); };
    RevealCardColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevealCardColorsComponent, selectors: [["nb-reveal-card-colors"]], decls: 13, vars: 0, consts: [["status", "success"], ["status", "danger"]], template: function RevealCardColorsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-reveal-card");
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
        } }, directives: [_framework_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_1__["NbRevealCardComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFrontComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_shared_shared_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBackComponent"]], encapsulation: 2, changeDetection: 0 });
    return RevealCardColorsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevealCardColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-reveal-card-colors',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './reveal-card-colors.component.html',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=reveal-card-reveal-card-module.js.map