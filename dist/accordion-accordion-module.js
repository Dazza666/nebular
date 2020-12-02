(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion-accordion-module"],{

/***/ "+N6v":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/accordion/accordion-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AccordionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionRoutingModule", function() { return AccordionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _accordion_multi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion-multi.component */ "pl7t");
/* harmony import */ var _accordion_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-showcase.component */ "9xNZ");
/* harmony import */ var _accordion_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion-test.component */ "l+Kq");
/* harmony import */ var _accordion_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion-toggle.component */ "iwX6");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var routes = [
    {
        path: 'accordion-multi.component',
        component: _accordion_multi_component__WEBPACK_IMPORTED_MODULE_2__["AccordionMultiComponent"],
    },
    {
        path: 'accordion-showcase.component',
        component: _accordion_showcase_component__WEBPACK_IMPORTED_MODULE_3__["AccordionShowcaseComponent"],
    },
    {
        path: 'accordion-test.component',
        component: _accordion_test_component__WEBPACK_IMPORTED_MODULE_4__["AccordionTestComponent"],
    },
    {
        path: 'accordion-toggle.component',
        component: _accordion_toggle_component__WEBPACK_IMPORTED_MODULE_5__["AccordionToggleComponent"],
    },
];
var AccordionRoutingModule = /** @class */ (function () {
    function AccordionRoutingModule() {
    }
    AccordionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccordionRoutingModule });
    AccordionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccordionRoutingModule_Factory(t) { return new (t || AccordionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AccordionRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccordionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "9xNZ":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/accordion/accordion-showcase.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccordionShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionShowcaseComponent", function() { return AccordionShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion.component */ "cpx9");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item.component */ "/iZf");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-header.component */ "LxN7");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-body.component */ "eGgC");






var AccordionShowcaseComponent = /** @class */ (function () {
    function AccordionShowcaseComponent() {
    }
    AccordionShowcaseComponent.ɵfac = function AccordionShowcaseComponent_Factory(t) { return new (t || AccordionShowcaseComponent)(); };
    AccordionShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionShowcaseComponent, selectors: [["nb-accordion-showcase"]], decls: 16, vars: 0, consts: [["disabled", "true"]], template: function AccordionShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Product Details ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Reviews ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-accordion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Edit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__["NbAccordionComponent"], _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_2__["NbAccordionItemComponent"], _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemHeaderComponent"], _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_4__["NbAccordionItemBodyComponent"]], encapsulation: 2, changeDetection: 0 });
    return AccordionShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-accordion-showcase',
                templateUrl: './accordion-showcase.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "Vx/Z":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/accordion/accordion.module.ts ***!
  \******************************************************************/
/*! exports provided: AccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _accordion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion-routing.module */ "+N6v");
/* harmony import */ var _accordion_multi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-multi.component */ "pl7t");
/* harmony import */ var _accordion_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion-showcase.component */ "9xNZ");
/* harmony import */ var _accordion_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion-test.component */ "l+Kq");
/* harmony import */ var _accordion_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accordion-toggle.component */ "iwX6");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccordionModule });
    AccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _accordion_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccordionRoutingModule"],
            ]] });
    return AccordionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccordionModule, { declarations: [_accordion_multi_component__WEBPACK_IMPORTED_MODULE_3__["AccordionMultiComponent"],
        _accordion_showcase_component__WEBPACK_IMPORTED_MODULE_4__["AccordionShowcaseComponent"],
        _accordion_test_component__WEBPACK_IMPORTED_MODULE_5__["AccordionTestComponent"],
        _accordion_toggle_component__WEBPACK_IMPORTED_MODULE_6__["AccordionToggleComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _accordion_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccordionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _accordion_multi_component__WEBPACK_IMPORTED_MODULE_3__["AccordionMultiComponent"],
                    _accordion_showcase_component__WEBPACK_IMPORTED_MODULE_4__["AccordionShowcaseComponent"],
                    _accordion_test_component__WEBPACK_IMPORTED_MODULE_5__["AccordionTestComponent"],
                    _accordion_toggle_component__WEBPACK_IMPORTED_MODULE_6__["AccordionToggleComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _accordion_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccordionRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "iwX6":
/*!****************************************************************************!*\
  !*** ./src/playground/with-layout/accordion/accordion-toggle.component.ts ***!
  \****************************************************************************/
/*! exports provided: AccordionToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionToggleComponent", function() { return AccordionToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion.component */ "cpx9");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item.component */ "/iZf");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-header.component */ "LxN7");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-body.component */ "eGgC");








var _c0 = ["item"];
var AccordionToggleComponent = /** @class */ (function () {
    function AccordionToggleComponent() {
    }
    AccordionToggleComponent.prototype.toggle = function () {
        this.accordion.toggle();
    };
    AccordionToggleComponent.ɵfac = function AccordionToggleComponent_Factory(t) { return new (t || AccordionToggleComponent)(); };
    AccordionToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionToggleComponent, selectors: [["nb-accordion-toggle"]], viewQuery: function AccordionToggleComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        } }, hostAttrs: [1, "example-height-60"], decls: 21, vars: 0, consts: [["nbButton", "", 3, "click"], ["item", ""]], template: function AccordionToggleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionToggleComponent_Template_button_click_2_listener() { return ctx.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toggle First Item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-accordion-item", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Product Details ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Reviews ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Edit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__["NbAccordionComponent"], _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_4__["NbAccordionItemComponent"], _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_5__["NbAccordionItemHeaderComponent"], _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_6__["NbAccordionItemBodyComponent"]], encapsulation: 2, changeDetection: 0 });
    return AccordionToggleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-accordion-toggle',
                templateUrl: './accordion-toggle.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: { class: 'example-height-60' },
            }]
    }], null, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['item']
        }] }); })();


/***/ }),

/***/ "l+Kq":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/accordion/accordion-test.component.ts ***!
  \**************************************************************************/
/*! exports provided: AccordionTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTestComponent", function() { return AccordionTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion.component */ "cpx9");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item.component */ "/iZf");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-header.component */ "LxN7");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-body.component */ "eGgC");






var AccordionTestComponent = /** @class */ (function () {
    function AccordionTestComponent() {
    }
    AccordionTestComponent.ɵfac = function AccordionTestComponent_Factory(t) { return new (t || AccordionTestComponent)(); };
    AccordionTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionTestComponent, selectors: [["nb-accordion-test"]], decls: 21, vars: 0, consts: [["expanded", ""], ["disabled", ""]], template: function AccordionTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-accordion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Accordion #1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Accordion #2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-accordion-item", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Accordion #3 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-accordion-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Accordion #4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__["NbAccordionComponent"], _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_2__["NbAccordionItemComponent"], _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemHeaderComponent"], _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_4__["NbAccordionItemBodyComponent"]], encapsulation: 2, changeDetection: 0 });
    return AccordionTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-accordion-test',
                template: "\n    <nb-accordion>\n      <nb-accordion-item>\n        <nb-accordion-item-header>\n          Accordion #1\n        </nb-accordion-item-header>\n        <nb-accordion-item-body>\n          A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.\n          Originally, nebula was a name for any diffuse astronomical object,\n          including galaxies beyond the Milky Way.\n        </nb-accordion-item-body>\n      </nb-accordion-item>\n\n      <nb-accordion-item>\n        <nb-accordion-item-header>\n          Accordion #2\n        </nb-accordion-item-header>\n        <nb-accordion-item-body>\n          A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.\n          Originally, nebula was a name for any diffuse astronomical object,\n          including galaxies beyond the Milky Way.\n        </nb-accordion-item-body>\n      </nb-accordion-item>\n\n      <nb-accordion-item expanded>\n        <nb-accordion-item-header>\n          Accordion #3\n        </nb-accordion-item-header>\n        <nb-accordion-item-body>\n          A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.\n          Originally, nebula was a name for any diffuse astronomical object,\n          including galaxies beyond the Milky Way.\n        </nb-accordion-item-body>\n      </nb-accordion-item>\n\n      <nb-accordion-item disabled>\n        <nb-accordion-item-header>\n          Accordion #4\n        </nb-accordion-item-header>\n        <nb-accordion-item-body>\n          A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.\n          Originally, nebula was a name for any diffuse astronomical object,\n          including galaxies beyond the Milky Way.\n        </nb-accordion-item-body>\n      </nb-accordion-item>\n    </nb-accordion>\n  ",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "pl7t":
/*!***************************************************************************!*\
  !*** ./src/playground/with-layout/accordion/accordion-multi.component.ts ***!
  \***************************************************************************/
/*! exports provided: AccordionMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionMultiComponent", function() { return AccordionMultiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion.component */ "cpx9");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item.component */ "/iZf");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-header.component */ "LxN7");
/* harmony import */ var _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/accordion/accordion-item-body.component */ "eGgC");






var AccordionMultiComponent = /** @class */ (function () {
    function AccordionMultiComponent() {
    }
    AccordionMultiComponent.ɵfac = function AccordionMultiComponent_Factory(t) { return new (t || AccordionMultiComponent)(); };
    AccordionMultiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionMultiComponent, selectors: [["nb-accordion-multi"]], decls: 16, vars: 0, consts: [["multi", ""]], template: function AccordionMultiComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-accordion", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Product Details ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Reviews ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-accordion-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Edit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-accordion-item-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_1__["NbAccordionComponent"], _framework_theme_components_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_2__["NbAccordionItemComponent"], _framework_theme_components_accordion_accordion_item_header_component__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemHeaderComponent"], _framework_theme_components_accordion_accordion_item_body_component__WEBPACK_IMPORTED_MODULE_4__["NbAccordionItemBodyComponent"]], encapsulation: 2, changeDetection: 0 });
    return AccordionMultiComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionMultiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-accordion-multi',
                templateUrl: './accordion-multi.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=accordion-accordion-module.js.map