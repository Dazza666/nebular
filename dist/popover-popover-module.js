(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popover-popover-module"],{

/***/ "7yw4":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PopoverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverRoutingModule", function() { return PopoverRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _popover_custom_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-custom-component.component */ "alyP");
/* harmony import */ var _popover_modes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-modes.component */ "8WcO");
/* harmony import */ var _popover_placements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-placements.component */ "jxg6");
/* harmony import */ var _popover_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-showcase.component */ "ah8W");
/* harmony import */ var _popover_template_ref_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover-template-ref.component */ "zR9v");
/* harmony import */ var _popover_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover-test.component */ "sCnZ");
/* harmony import */ var _popover_noop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-noop.component */ "r3Y1");
/* harmony import */ var _popover_dynamic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-dynamic.component */ "DKj7");
/* harmony import */ var _popover_dynamic_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover-dynamic-code.component */ "QQrm");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













var routes = [
    {
        path: 'popover-custom-component.component',
        component: _popover_custom_component_component__WEBPACK_IMPORTED_MODULE_2__["PopoverCustomComponentComponent"],
    },
    {
        path: 'popover-modes.component',
        component: _popover_modes_component__WEBPACK_IMPORTED_MODULE_3__["PopoverModesComponent"],
    },
    {
        path: 'popover-placements.component',
        component: _popover_placements_component__WEBPACK_IMPORTED_MODULE_4__["PopoverPlacementsComponent"],
    },
    {
        path: 'popover-showcase.component',
        component: _popover_showcase_component__WEBPACK_IMPORTED_MODULE_5__["PopoverShowcaseComponent"],
    },
    {
        path: 'popover-template-ref.component',
        component: _popover_template_ref_component__WEBPACK_IMPORTED_MODULE_6__["PopoverTemplateRefComponent"],
    },
    {
        path: 'popover-test.component',
        component: _popover_test_component__WEBPACK_IMPORTED_MODULE_7__["PopoverTestComponent"],
    },
    {
        path: 'popover-noop.component',
        component: _popover_noop_component__WEBPACK_IMPORTED_MODULE_8__["PopoverNoopComponent"],
    },
    {
        path: 'popover-dynamic.component',
        component: _popover_dynamic_component__WEBPACK_IMPORTED_MODULE_9__["PopoverDynamicComponent"],
    },
    {
        path: 'popover-dynamic-code.component',
        component: _popover_dynamic_code_component__WEBPACK_IMPORTED_MODULE_10__["PopoverDynamicCodeComponent"],
    },
];
var PopoverRoutingModule = /** @class */ (function () {
    function PopoverRoutingModule() {
    }
    PopoverRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopoverRoutingModule });
    PopoverRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopoverRoutingModule_Factory(t) { return new (t || PopoverRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PopoverRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "8WcO":
/*!***********************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-modes.component.ts ***!
  \***********************************************************************/
/*! exports provided: PopoverModesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModesComponent", function() { return PopoverModesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var PopoverModesComponent = /** @class */ (function () {
    function PopoverModesComponent() {
    }
    PopoverModesComponent.ɵfac = function PopoverModesComponent_Factory(t) { return new (t || PopoverModesComponent)(); };
    PopoverModesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverModesComponent, selectors: [["nb-popover-modes"]], decls: 7, vars: 0, consts: [[1, "btn-group", "btn-divided-group", "btn-outline-divided-group"], ["nbButton", "", "nbPopover", "Click Mode", "nbPopoverTrigger", "click", "nbPopoverPlacement", "bottom"], ["nbButton", "", "nbPopover", "Hint Mode", "nbPopoverTrigger", "hint", "nbPopoverPlacement", "bottom"], ["nbButton", "", "nbPopover", "Hover Mode", "nbPopoverTrigger", "hover", "nbPopoverPlacement", "bottom"]], template: function PopoverModesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Click Mode ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hint Mode ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hover Mode ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__["NbPopoverDirective"]], styles: ["[_nghost-%COMP%] {\n      display: block;\n      padding-bottom: 5rem;\n    }\n\n    button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n      margin-left: 1rem;\n    }"] });
    return PopoverModesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-modes',
                templateUrl: './popover-modes.component.html',
                styles: ["\n    :host {\n      display: block;\n      padding-bottom: 5rem;\n    }\n\n    button + button {\n      margin-left: 1rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "BLZk":
/*!*****************************************************************************!*\
  !*** ./src/playground/with-layout/popover/components/dynamic.components.ts ***!
  \*****************************************************************************/
/*! exports provided: DynamicToAddComponent, PopoverListComponent, PopoverTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicToAddComponent", function() { return DynamicToAddComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverListComponent", function() { return PopoverListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTabsComponent", function() { return PopoverTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/list/list.component */ "jXul");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/tabset/tabset.component */ "T76v");





var _c0 = "nb-card[_ngcontent-%COMP%] {\n      border: 0;\n      margin-bottom: 0;\n    }";
var DynamicToAddComponent = /** @class */ (function () {
    function DynamicToAddComponent() {
        this.text = '';
    }
    DynamicToAddComponent.ɵfac = function DynamicToAddComponent_Factory(t) { return new (t || DynamicToAddComponent)(); };
    DynamicToAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicToAddComponent, selectors: [["nb-dynamic-to-add"]], inputs: { text: "text" }, decls: 3, vars: 1, template: function DynamicToAddComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello from custom component: ", ctx.text, "");
        } }, encapsulation: 2 });
    return DynamicToAddComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicToAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dynamic-to-add',
                template: "\n    <div>\n      <strong>Hello from custom component: {{ text }}</strong>\n    </div>\n  ",
            }]
    }], null, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
var PopoverListComponent = /** @class */ (function () {
    function PopoverListComponent() {
    }
    PopoverListComponent.ɵfac = function PopoverListComponent_Factory(t) { return new (t || PopoverListComponent)(); };
    PopoverListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverListComponent, selectors: [["nb-popover-list"]], decls: 8, vars: 0, template: function PopoverListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Component Shopping list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Apple");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Orange");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["NbListComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["NbListItemComponent"]], styles: [_c0] });
    return PopoverListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-list',
                styles: ["\n    nb-card {\n      border: 0;\n      margin-bottom: 0;\n    }\n  "],
                template: "\n    <nb-card>\n      <nb-card-header>Component Shopping list</nb-card-header>\n      <nb-list>\n        <nb-list-item>Apple</nb-list-item>\n        <nb-list-item>Orange</nb-list-item>\n      </nb-list>\n    </nb-card>\n  ",
            }]
    }], null, null); })();
var PopoverTabsComponent = /** @class */ (function () {
    function PopoverTabsComponent() {
    }
    PopoverTabsComponent.ɵfac = function PopoverTabsComponent_Factory(t) { return new (t || PopoverTabsComponent)(); };
    PopoverTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverTabsComponent, selectors: [["nb-popover-tabs"]], decls: 12, vars: 0, consts: [["tabTitle", "Fruits"], ["tabTitle", "Vegetables"]], template: function PopoverTabsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Component Shopping list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fruits list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vegetables list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_3__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"]], styles: [_c0] });
    return PopoverTabsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverTabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-tabs',
                styles: ["\n    nb-card {\n      border: 0;\n      margin-bottom: 0;\n    }\n  "],
                template: "\n    <nb-card>\n      <nb-card-header>Component Shopping list</nb-card-header>\n      <nb-tabset>\n        <nb-tab tabTitle=\"Fruits\">\n          <nb-card>\n            <nb-card-body>Fruits list</nb-card-body>\n          </nb-card>\n        </nb-tab>\n        <nb-tab tabTitle=\"Vegetables\">\n          <nb-card>\n            <nb-card-body>Vegetables list</nb-card-body>\n          </nb-card>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "DKj7":
/*!*************************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-dynamic.component.ts ***!
  \*************************************************************************/
/*! exports provided: PopoverDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDynamicComponent", function() { return PopoverDynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_dynamic_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dynamic.components */ "BLZk");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/* harmony import */ var _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/list/list.component */ "jXul");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var _c0 = ["tabs"];
var _c1 = ["list"];
function PopoverDynamicComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.startRuntimeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable Runtime Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverDynamicComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.stopRuntimeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disable Runtime Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverDynamicComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Template Shopping list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tabset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fruits list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vegetables list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverDynamicComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Template Shopping list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Apple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Orange");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PopoverDynamicComponent = /** @class */ (function () {
    function PopoverDynamicComponent() {
        this.componentList = _components_dynamic_components__WEBPACK_IMPORTED_MODULE_2__["PopoverListComponent"];
        this.componentTabs = _components_dynamic_components__WEBPACK_IMPORTED_MODULE_2__["PopoverTabsComponent"];
        this.textContent = 'Hello World';
        this.component = this.componentList;
        this.trigger = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTrigger"].CLICK;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPosition"].BOTTOM;
        this.items = [];
    }
    PopoverDynamicComponent.prototype.stopRuntimeChange = function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };
    PopoverDynamicComponent.prototype.changeComponent = function (component) {
        this.component = component;
    };
    PopoverDynamicComponent.prototype.changeTrigger = function (trigger) {
        this.trigger = trigger;
    };
    PopoverDynamicComponent.prototype.changePlacement = function (placement) {
        this.position = placement;
    };
    PopoverDynamicComponent.prototype.startRuntimeChange = function () {
        var _this = this;
        if (!this.interval) {
            this.interval = setInterval(function () {
                var random = _this.items[Math.floor(Math.random() * _this.items.length)];
                _this.changeComponent(random);
            }, 2000);
        }
    };
    PopoverDynamicComponent.prototype.ngAfterViewInit = function () {
        this.items = [
            this.componentList,
            this.componentTabs,
            this.templateList,
            this.templateTabs,
            this.textContent,
        ];
    };
    PopoverDynamicComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    PopoverDynamicComponent.ɵfac = function PopoverDynamicComponent_Factory(t) { return new (t || PopoverDynamicComponent)(); };
    PopoverDynamicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverDynamicComponent, selectors: [["nb-popover-dynamic"]], viewQuery: function PopoverDynamicComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateTabs = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateList = _t.first);
        } }, decls: 45, vars: 5, consts: [[1, "popover-container"], ["nbButton", "", 3, "nbPopover", "nbPopoverPlacement", "nbPopoverTrigger"], [1, "section"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["nbButton", "", "size", "small", "status", "warning", 3, "click", 4, "ngIf"], ["tabs", ""], ["list", ""], ["nbButton", "", "size", "small", "status", "warning", 3, "click"], [1, "margin-bottom-0"], ["tabTitle", "Fruits"], ["tabTitle", "Vegetables"]], template: function PopoverDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_6_listener() { return ctx.changeComponent(ctx.componentList); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Use List Component");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_8_listener() { return ctx.changeComponent(ctx.componentTabs); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Use Tabs Component");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.changeComponent(_r4); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Use List Template");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return ctx.changeComponent(_r2); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Use Tabs Template");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_14_listener() { return ctx.changeComponent(ctx.textContent); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Use String");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PopoverDynamicComponent_button_16_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PopoverDynamicComponent_button_17_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "When \"Runtime Change\" is enabled, open the Popover to see a component change every 2 seconds.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Change trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_24_listener() { return ctx.changeTrigger("click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Click Trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_26_listener() { return ctx.changeTrigger("hover"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hover Trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_28_listener() { return ctx.changeTrigger("hint"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hint Trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Change placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_33_listener() { return ctx.changePlacement("top"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Top Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_35_listener() { return ctx.changePlacement("right"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Right Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_37_listener() { return ctx.changePlacement("bottom"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bottom Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicComponent_Template_button_click_39_listener() { return ctx.changePlacement("left"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Left Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PopoverDynamicComponent_ng_template_41_Template, 12, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PopoverDynamicComponent_ng_template_43_Template, 8, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", ctx.component)("nbPopoverPlacement", ctx.position)("nbPopoverTrigger", ctx.trigger);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.interval);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.interval);
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_4__["NbPopoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__["NbTabComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["NbListComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["NbListItemComponent"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.margin-bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.popover-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 12rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-top: 1rem;\n}\n\n  nb-popover nb-card {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3BvcG92ZXIvcG9wb3Zlci1keW5hbWljLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7TUFBQSxxQkFBQTtVQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQUtGIiwiZmlsZSI6InNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3BvcG92ZXIvcG9wb3Zlci1keW5hbWljLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWFyZ2luLWJvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5wb3BvdmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnJlbTtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuOjpuZy1kZWVwIG5iLXBvcG92ZXIgbmItY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
    return PopoverDynamicComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDynamicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-dynamic',
                templateUrl: './popover-dynamic.component.html',
                styleUrls: ['./popover-dynamic.scss'],
            }]
    }], null, { popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"]]
        }], templateTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabs', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], templateList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }] }); })();


/***/ }),

/***/ "QQrm":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-dynamic-code.component.ts ***!
  \******************************************************************************/
/*! exports provided: PopoverDynamicCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDynamicCodeComponent", function() { return PopoverDynamicCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dynamic.components */ "BLZk");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/* harmony import */ var _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/list/list.component */ "jXul");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var _c0 = ["tabs"];
var _c1 = ["list"];
function PopoverDynamicCodeComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.startRuntimeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable Runtime Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverDynamicCodeComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.stopRuntimeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disable Runtime Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverDynamicCodeComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Template Shopping list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tabset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fruits list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vegetables list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverDynamicCodeComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Template Shopping list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Apple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Orange");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PopoverDynamicCodeComponent = /** @class */ (function () {
    function PopoverDynamicCodeComponent() {
        this.componentList = _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__["PopoverListComponent"];
        this.componentTabs = _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__["PopoverTabsComponent"];
        this.textContent = 'Hello World';
        this.component = this.componentList;
        this.items = [];
    }
    PopoverDynamicCodeComponent.prototype.stopRuntimeChange = function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };
    PopoverDynamicCodeComponent.prototype.changeComponent = function (component) {
        this.popover.content = component;
        this.popover.rebuild();
    };
    PopoverDynamicCodeComponent.prototype.changeTrigger = function (trigger) {
        this.popover.trigger = trigger;
        this.popover.rebuild();
    };
    PopoverDynamicCodeComponent.prototype.changePlacement = function (placement) {
        this.popover.position = placement;
        this.popover.rebuild();
    };
    PopoverDynamicCodeComponent.prototype.startRuntimeChange = function () {
        var _this = this;
        if (!this.interval) {
            this.interval = setInterval(function () {
                var random = _this.items[Math.floor(Math.random() * _this.items.length)];
                _this.changeComponent(random);
            }, 2000);
        }
    };
    PopoverDynamicCodeComponent.prototype.ngAfterViewInit = function () {
        this.items = [
            this.componentList,
            this.componentTabs,
            this.templateList,
            this.templateTabs,
            this.textContent,
        ];
    };
    PopoverDynamicCodeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    PopoverDynamicCodeComponent.ɵfac = function PopoverDynamicCodeComponent_Factory(t) { return new (t || PopoverDynamicCodeComponent)(); };
    PopoverDynamicCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverDynamicCodeComponent, selectors: [["nb-popover-dynamic-code"]], viewQuery: function PopoverDynamicCodeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateTabs = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateList = _t.first);
        } }, decls: 45, vars: 3, consts: [[1, "popover-container"], ["nbPopoverPlacement", "bottom", "nbButton", "", 3, "nbPopover"], [1, "section"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["nbButton", "", "size", "small", "status", "warning", 3, "click", 4, "ngIf"], ["tabs", ""], ["list", ""], ["nbButton", "", "size", "small", "status", "warning", 3, "click"], [1, "margin-bottom-0"], ["tabTitle", "Fruits"], ["tabTitle", "Vegetables"]], template: function PopoverDynamicCodeComponent_Template(rf, ctx) { if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Component");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_6_listener() { return ctx.changeComponent(ctx.componentList); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Use List Component");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_8_listener() { return ctx.changeComponent(ctx.componentTabs); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Use Tabs Component");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.changeComponent(_r4); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Use List Template");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return ctx.changeComponent(_r2); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Use Tabs Template");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_14_listener() { return ctx.changeComponent(ctx.textContent); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Use String");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PopoverDynamicCodeComponent_button_16_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PopoverDynamicCodeComponent_button_17_Template, 2, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "When \"Runtime Change\" is enabled, open the Popover to see a component change every 2 seconds.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Change trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_24_listener() { return ctx.changeTrigger("click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Click Trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_26_listener() { return ctx.changeTrigger("hover"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hover Trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_28_listener() { return ctx.changeTrigger("hint"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hint Trigger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Change placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_33_listener() { return ctx.changePlacement("top"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Top Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_35_listener() { return ctx.changePlacement("right"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Right Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_37_listener() { return ctx.changePlacement("bottom"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bottom Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDynamicCodeComponent_Template_button_click_39_listener() { return ctx.changePlacement("left"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Left Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PopoverDynamicCodeComponent_ng_template_41_Template, 12, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PopoverDynamicCodeComponent_ng_template_43_Template, 8, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", ctx.componentList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.interval);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.interval);
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_4__["NbPopoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_7__["NbTabComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["NbListComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["NbListItemComponent"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.margin-bottom-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.popover-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 12rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-top: 1rem;\n}\n\n  nb-popover nb-card {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3BvcG92ZXIvcG9wb3Zlci1keW5hbWljLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7TUFBQSxxQkFBQTtVQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQUtGIiwiZmlsZSI6InNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3BvcG92ZXIvcG9wb3Zlci1keW5hbWljLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWFyZ2luLWJvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5wb3BvdmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnJlbTtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuOjpuZy1kZWVwIG5iLXBvcG92ZXIgbmItY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
    return PopoverDynamicCodeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDynamicCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-dynamic-code',
                templateUrl: './popover-dynamic-code.component.html',
                styleUrls: ['./popover-dynamic.scss'],
            }]
    }], null, { popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverDirective"]]
        }], templateTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabs', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], templateList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }] }); })();


/***/ }),

/***/ "ah8W":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-showcase.component.ts ***!
  \**************************************************************************/
/*! exports provided: PopoverShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverShowcaseComponent", function() { return PopoverShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var PopoverShowcaseComponent = /** @class */ (function () {
    function PopoverShowcaseComponent() {
    }
    PopoverShowcaseComponent.ɵfac = function PopoverShowcaseComponent_Factory(t) { return new (t || PopoverShowcaseComponent)(); };
    PopoverShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverShowcaseComponent, selectors: [["nb-popover-showcase"]], decls: 2, vars: 0, consts: [["nbButton", "", "nbPopover", "Hi, I'm popover!", "nbPopoverPlacement", "bottom"]], template: function PopoverShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open Popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__["NbPopoverDirective"]], styles: ["[_nghost-%COMP%] {\n      display: block;\n      padding-bottom: 5rem;\n    }"] });
    return PopoverShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-showcase',
                templateUrl: './popover-showcase.component.html',
                styles: ["\n    :host {\n      display: block;\n      padding-bottom: 5rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "alyP":
/*!**********************************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-custom-component.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PopoverCustomComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverCustomComponentComponent", function() { return PopoverCustomComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dynamic.components */ "BLZk");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var _c0 = function () { return { text: "Example context" }; };
var PopoverCustomComponentComponent = /** @class */ (function () {
    function PopoverCustomComponentComponent() {
        this.customComponent = _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__["DynamicToAddComponent"];
    }
    PopoverCustomComponentComponent.ɵfac = function PopoverCustomComponentComponent_Factory(t) { return new (t || PopoverCustomComponentComponent)(); };
    PopoverCustomComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverCustomComponentComponent, selectors: [["nb-popover-custom-component"]], decls: 2, vars: 3, consts: [["nbButton", "", 3, "nbPopover", "nbPopoverContext"]], template: function PopoverCustomComponentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Custom component\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", ctx.customComponent)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"]], styles: ["[_nghost-%COMP%] {\n      display: block;\n      padding-bottom: 3rem;\n    }\n\n      nb-popover {\n      padding: 1rem;\n    }"] });
    return PopoverCustomComponentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverCustomComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-custom-component',
                templateUrl: './popover-custom-component.component.html',
                styles: ["\n    :host {\n      display: block;\n      padding-bottom: 3rem;\n    }\n\n    ::ng-deep nb-popover {\n      padding: 1rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "jxg6":
/*!****************************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-placements.component.ts ***!
  \****************************************************************************/
/*! exports provided: PopoverPlacementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPlacementsComponent", function() { return PopoverPlacementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var PopoverPlacementsComponent = /** @class */ (function () {
    function PopoverPlacementsComponent() {
    }
    PopoverPlacementsComponent.ɵfac = function PopoverPlacementsComponent_Factory(t) { return new (t || PopoverPlacementsComponent)(); };
    PopoverPlacementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverPlacementsComponent, selectors: [["nb-popover-placements"]], decls: 12, vars: 0, consts: [["nbButton", "", "nbPopover", "Bottom Popover!", "nbPopoverPlacement", "bottom"], ["nbButton", "", "nbPopover", "Right Popover!", "nbPopoverPlacement", "right"], ["nbButton", "", "nbPopover", "Left Popover!", "nbPopoverPlacement", "left"], ["nbButton", "", "nbPopover", "End Popover!", "nbPopoverPlacement", "end"], ["nbButton", "", "nbPopover", "Start Popover!", "nbPopoverPlacement", "start"], ["nbButton", "", "nbPopover", "Top Popover!", "nbPopoverPlacement", "top"]], template: function PopoverPlacementsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bottom\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Right\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Left\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " End\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Start\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Top\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__["NbPopoverDirective"]], styles: ["[_nghost-%COMP%] {\n      display: block;\n      margin: 4rem 0;\n    }\n\n    button[_ngcontent-%COMP%] {\n      margin: 1rem;\n    }"] });
    return PopoverPlacementsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverPlacementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-placements',
                templateUrl: './popover-placements.component.html',
                styles: ["\n    :host {\n      display: block;\n      margin: 4rem 0;\n    }\n\n    button {\n      margin: 1rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "r3Y1":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-noop.component.ts ***!
  \**********************************************************************/
/*! exports provided: PopoverNoopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverNoopComponent", function() { return PopoverNoopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var PopoverNoopComponent = /** @class */ (function () {
    function PopoverNoopComponent() {
    }
    PopoverNoopComponent.prototype.open = function () {
        this.popover.show();
    };
    PopoverNoopComponent.prototype.close = function () {
        this.popover.hide();
    };
    PopoverNoopComponent.ɵfac = function PopoverNoopComponent_Factory(t) { return new (t || PopoverNoopComponent)(); };
    PopoverNoopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverNoopComponent, selectors: [["nb-popover-noop"]], viewQuery: function PopoverNoopComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
        } }, decls: 6, vars: 0, consts: [["placeholder", "Enter your username", "nbInput", "", "nbPopover", "Username is already taken", "nbPopoverTrigger", "noop"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"]], template: function PopoverNoopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverNoopComponent_Template_button_click_2_listener() { return ctx.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Open Popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverNoopComponent_Template_button_click_4_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close Popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], styles: ["button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }"] });
    return PopoverNoopComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverNoopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-noop',
                templateUrl: './popover-noop.component.html',
                styles: ["\n    button {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }\n  "],
            }]
    }], null, { popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPopoverDirective"]]
        }] }); })();


/***/ }),

/***/ "sCnZ":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-test.component.ts ***!
  \**********************************************************************/
/*! exports provided: PopoverTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTestComponent", function() { return PopoverTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dynamic.components */ "BLZk");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






function PopoverTestComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Help text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var text_r4 = ctx.text;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", 0, "px")("box-shadow", "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](text_r4);
} }
function PopoverTestComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-dynamic-to-add", 21);
} if (rf & 2) {
    var text_r5 = ctx.text;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", text_r5);
} }
var _c0 = function () { return { text: "Example context" }; };
var PopoverTestComponent = /** @class */ (function () {
    function PopoverTestComponent() {
        this.customPopoverComponent = _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__["DynamicToAddComponent"];
        this.items = [{ title: 'Profile', link: '/card' }, { title: 'Log out', link: '/auth' }];
    }
    PopoverTestComponent.ɵfac = function PopoverTestComponent_Factory(t) { return new (t || PopoverTestComponent)(); };
    PopoverTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverTestComponent, selectors: [["nb-popover-example"]], decls: 84, vars: 9, consts: [["nbPopoverPlacement", "right", 3, "nbPopover", "nbPopoverContext"], ["popoverTemplate", ""], [1, "btn", "btn-warning", 3, "nbPopover", "nbPopoverContext"], ["popoverTemplateWithContext", ""], ["nbPopover", "Hi, I'm popover!", "nbPopoverPlacement", "bottom", 1, "btn", "btn-primary"], ["nbPopover", "Right Popover!", "nbPopoverPlacement", "right"], ["nbPopover", "Bottom Popover!", "nbPopoverPlacement", "bottom"], ["nbPopover", "Top Popover!", "nbPopoverPlacement", "top"], ["nbPopover", "Left Popover!", "nbPopoverPlacement", "left"], ["nbPopover", "Start Popover!", "nbPopoverPlacement", "start"], ["nbPopover", "End Popover!", "nbPopoverPlacement", "end"], ["nbPopover", "Right Popover!", "nbPopoverTrigger", "hint"], ["nbPopover", "Bottom Popover!", "nbPopoverTrigger", "hint"], ["nbPopover", "Top Popover!", "nbPopoverTrigger", "hint"], ["nbPopover", "Left Popover!", "nbPopoverTrigger", "hint"], ["nbPopover", "Click Popover!"], ["nbPopover", "Hover Popover!", "nbPopoverTrigger", "hover"], ["nbPopover", "Hint Popover!", "nbPopoverTrigger", "hint"], ["for", "success-form-control", 1, "form-control-label"], ["id", "success-form-control", "placeholder", "Success Form Control", 1, "form-control", "form-control-success"], [1, "form-control-feedback"], [3, "text"]], template: function PopoverTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Content Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Template Ref Test ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopoverTestComponent_ng_template_6_Template, 7, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Component with context test ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Template with context test ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PopoverTestComponent_ng_template_12_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "String Test ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Placement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Bottom ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Top ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Start ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " End ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Multiple Hints");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " show hint ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Trigger mode");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Click ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Hover ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " HInt ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Popover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Show me popover ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", _r0)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", ctx.customPopoverComponent)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", _r2)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"], _components_dynamic_components__WEBPACK_IMPORTED_MODULE_1__["DynamicToAddComponent"]], encapsulation: 2, changeDetection: 0 });
    return PopoverTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-example',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: "\n    <nb-card>\n      <nb-card-header>Content Type</nb-card-header>\n      <nb-card-body>\n        <button [nbPopover]=\"popoverTemplate\"\n                [nbPopoverContext]=\"{text: 'Example context'}\"\n                nbPopoverPlacement=\"right\">\n          Template Ref Test\n        </button>\n        <ng-template #popoverTemplate let-text=\"text\">\n          <nb-card [style.margin.px]=\"0\" [style.boxShadow]=\"'none'\">\n            <nb-card-body>\n              <label class=\"form-control-label\" for=\"success-form-control\">{{text}}</label>\n              <input class=\"form-control form-control-success\" id=\"success-form-control\"\n                     placeholder=\"Success Form Control\">\n              <span class=\"form-control-feedback\">Help text</span>\n            </nb-card-body>\n          </nb-card>\n        </ng-template>\n        <button class=\"btn btn-warning\" [nbPopover]=\"customPopoverComponent\"\n                [nbPopoverContext]=\"{text: 'Example context'}\">\n          Component with context test\n        </button>\n        <button class=\"btn btn-warning\" [nbPopover]=\"popoverTemplateWithContext\"\n                [nbPopoverContext]=\"{text: 'Example context'}\">\n          Template with context test\n        </button>\n        <ng-template #popoverTemplateWithContext let-text=\"text\">\n          <nb-dynamic-to-add [text]=\"text\"></nb-dynamic-to-add>\n        </ng-template>\n        <button class=\"btn btn-primary\" nbPopover=\"Hi, I'm popover!\" nbPopoverPlacement=\"bottom\">String Test\n        </button>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>Placement</nb-card-header>\n      <nb-card-body>\n        <button nbPopover=\"Right Popover!\" nbPopoverPlacement=\"right\">\n          Right\n        </button>\n        <button nbPopover=\"Bottom Popover!\" nbPopoverPlacement=\"bottom\">\n          Bottom\n        </button>\n        <button nbPopover=\"Top Popover!\" nbPopoverPlacement=\"top\">\n          Top\n        </button>\n        <button nbPopover=\"Left Popover!\" nbPopoverPlacement=\"left\">\n          Left\n        </button>\n        <button nbPopover=\"Start Popover!\" nbPopoverPlacement=\"start\">\n          Start\n        </button>\n        <button nbPopover=\"End Popover!\" nbPopoverPlacement=\"end\">\n          End\n        </button>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>Multiple Hints</nb-card-header>\n      <nb-card-body>\n        <button nbPopover=\"Right Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Bottom Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Top Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Left Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Right Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Bottom Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Top Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Left Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Right Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Bottom Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Top Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Left Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Right Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Bottom Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Top Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n        <button nbPopover=\"Left Popover!\" nbPopoverTrigger=\"hint\">\n          show hint\n        </button>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>Trigger mode</nb-card-header>\n      <nb-card-body>\n        <button nbPopover=\"Click Popover!\">\n          Click\n        </button>\n        <button nbPopover=\"Hover Popover!\" nbPopoverTrigger=\"hover\">\n          Hover\n        </button>\n        <button nbPopover=\"Hint Popover!\" nbPopoverTrigger=\"hint\">\n          HInt\n        </button>\n      </nb-card-body>\n    </nb-card>\n    <nb-card>\n      <nb-card-header>Popover</nb-card-header>\n      <nb-card-body>\n        <button nbPopover=\"Click Popover!\">\n          Show me popover\n        </button>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "zR9v":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover-template-ref.component.ts ***!
  \******************************************************************************/
/*! exports provided: PopoverTemplateRefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTemplateRefComponent", function() { return PopoverTemplateRefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/popover/popover.directive */ "nc1R");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





function PopoverTemplateRefComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Template Ref with context: ", data_r2.text, "");
} }
var _c0 = function () { return { text: "Example context" }; };
var PopoverTemplateRefComponent = /** @class */ (function () {
    function PopoverTemplateRefComponent() {
    }
    PopoverTemplateRefComponent.ɵfac = function PopoverTemplateRefComponent_Factory(t) { return new (t || PopoverTemplateRefComponent)(); };
    PopoverTemplateRefComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverTemplateRefComponent, selectors: [["nb-popover-template-ref"]], decls: 4, vars: 3, consts: [["nbButton", "", "nbPopoverPlacement", "right", 3, "nbPopover", "nbPopoverContext"], ["template", ""], [1, "popover-card"]], template: function PopoverTemplateRefComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Template Ref\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverTemplateRefComponent_ng_template_2_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", _r0)("nbPopoverContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _framework_theme_components_popover_popover_directive__WEBPACK_IMPORTED_MODULE_2__["NbPopoverDirective"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"]], styles: ["[_nghost-%COMP%] {\n      display: block;\n      margin-bottom: 5rem;\n    }"] });
    return PopoverTemplateRefComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverTemplateRefComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-popover-template-ref',
                templateUrl: './popover-template-ref.component.html',
                styles: ["\n    :host {\n      display: block;\n      margin-bottom: 5rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "zTZc":
/*!**************************************************************!*\
  !*** ./src/playground/with-layout/popover/popover.module.ts ***!
  \**************************************************************/
/*! exports provided: PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dynamic.components */ "BLZk");
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-routing.module */ "7yw4");
/* harmony import */ var _popover_custom_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-custom-component.component */ "alyP");
/* harmony import */ var _popover_modes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover-modes.component */ "8WcO");
/* harmony import */ var _popover_placements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover-placements.component */ "jxg6");
/* harmony import */ var _popover_showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-showcase.component */ "ah8W");
/* harmony import */ var _popover_template_ref_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-template-ref.component */ "zR9v");
/* harmony import */ var _popover_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover-test.component */ "sCnZ");
/* harmony import */ var _popover_noop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popover-noop.component */ "r3Y1");
/* harmony import */ var _popover_dynamic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popover-dynamic.component */ "DKj7");
/* harmony import */ var _popover_dynamic_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popover-dynamic-code.component */ "QQrm");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */















var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopoverModule });
    PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                _popover_routing_module__WEBPACK_IMPORTED_MODULE_4__["PopoverRoutingModule"],
            ]] });
    return PopoverModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, { declarations: [_components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["DynamicToAddComponent"],
        _popover_custom_component_component__WEBPACK_IMPORTED_MODULE_5__["PopoverCustomComponentComponent"],
        _popover_modes_component__WEBPACK_IMPORTED_MODULE_6__["PopoverModesComponent"],
        _popover_placements_component__WEBPACK_IMPORTED_MODULE_7__["PopoverPlacementsComponent"],
        _popover_showcase_component__WEBPACK_IMPORTED_MODULE_8__["PopoverShowcaseComponent"],
        _popover_template_ref_component__WEBPACK_IMPORTED_MODULE_9__["PopoverTemplateRefComponent"],
        _popover_test_component__WEBPACK_IMPORTED_MODULE_10__["PopoverTestComponent"],
        _popover_noop_component__WEBPACK_IMPORTED_MODULE_11__["PopoverNoopComponent"],
        _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["PopoverListComponent"],
        _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["PopoverTabsComponent"],
        _popover_dynamic_component__WEBPACK_IMPORTED_MODULE_12__["PopoverDynamicComponent"],
        _popover_dynamic_code_component__WEBPACK_IMPORTED_MODULE_13__["PopoverDynamicCodeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
        _popover_routing_module__WEBPACK_IMPORTED_MODULE_4__["PopoverRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["DynamicToAddComponent"],
                    _popover_custom_component_component__WEBPACK_IMPORTED_MODULE_5__["PopoverCustomComponentComponent"],
                    _popover_modes_component__WEBPACK_IMPORTED_MODULE_6__["PopoverModesComponent"],
                    _popover_placements_component__WEBPACK_IMPORTED_MODULE_7__["PopoverPlacementsComponent"],
                    _popover_showcase_component__WEBPACK_IMPORTED_MODULE_8__["PopoverShowcaseComponent"],
                    _popover_template_ref_component__WEBPACK_IMPORTED_MODULE_9__["PopoverTemplateRefComponent"],
                    _popover_test_component__WEBPACK_IMPORTED_MODULE_10__["PopoverTestComponent"],
                    _popover_noop_component__WEBPACK_IMPORTED_MODULE_11__["PopoverNoopComponent"],
                    _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["PopoverListComponent"],
                    _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["PopoverTabsComponent"],
                    _popover_dynamic_component__WEBPACK_IMPORTED_MODULE_12__["PopoverDynamicComponent"],
                    _popover_dynamic_code_component__WEBPACK_IMPORTED_MODULE_13__["PopoverDynamicCodeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
                    _popover_routing_module__WEBPACK_IMPORTED_MODULE_4__["PopoverRoutingModule"],
                ],
                entryComponents: [_components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["DynamicToAddComponent"], _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["PopoverListComponent"], _components_dynamic_components__WEBPACK_IMPORTED_MODULE_3__["PopoverTabsComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=popover-popover-module.js.map