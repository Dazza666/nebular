(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tooltip-tooltip-module"],{

/***/ "Ofio":
/*!**************************************************************!*\
  !*** ./src/playground/with-layout/tooltip/tooltip.module.ts ***!
  \**************************************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-routing.module */ "Yj0c");
/* harmony import */ var _tooltip_colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-colors.component */ "m5CJ");
/* harmony import */ var _tooltip_placements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-placements.component */ "oaj9");
/* harmony import */ var _tooltip_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip-showcase.component */ "ROUn");
/* harmony import */ var _tooltip_with_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip-with-icon.component */ "szLv");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TooltipModule });
    TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_2__["TooltipRoutingModule"]]] });
    return TooltipModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, { declarations: [_tooltip_colors_component__WEBPACK_IMPORTED_MODULE_3__["TooltipColorsComponent"],
        _tooltip_placements_component__WEBPACK_IMPORTED_MODULE_4__["TooltipPlacementsComponent"],
        _tooltip_showcase_component__WEBPACK_IMPORTED_MODULE_5__["TooltipShowcaseComponent"],
        _tooltip_with_icon_component__WEBPACK_IMPORTED_MODULE_6__["TooltipWithIconComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_2__["TooltipRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _tooltip_colors_component__WEBPACK_IMPORTED_MODULE_3__["TooltipColorsComponent"],
                    _tooltip_placements_component__WEBPACK_IMPORTED_MODULE_4__["TooltipPlacementsComponent"],
                    _tooltip_showcase_component__WEBPACK_IMPORTED_MODULE_5__["TooltipShowcaseComponent"],
                    _tooltip_with_icon_component__WEBPACK_IMPORTED_MODULE_6__["TooltipWithIconComponent"],
                ],
                imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _tooltip_routing_module__WEBPACK_IMPORTED_MODULE_2__["TooltipRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ROUn":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/tooltip/tooltip-showcase.component.ts ***!
  \**************************************************************************/
/*! exports provided: TooltipShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipShowcaseComponent", function() { return TooltipShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tooltip/tooltip.directive */ "etHN");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var TooltipShowcaseComponent = /** @class */ (function () {
    function TooltipShowcaseComponent() {
    }
    TooltipShowcaseComponent.ɵfac = function TooltipShowcaseComponent_Factory(t) { return new (t || TooltipShowcaseComponent)(); };
    TooltipShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipShowcaseComponent, selectors: [["nb-tooltip-showcase"]], decls: 4, vars: 0, consts: [["nbTooltip", "This is a tooltip", "nbTooltipStatus", "primary", "nbButton", "", "status", "primary"]], template: function TooltipShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show Tooltip");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3Rvb2x0aXAvdG9vbHRpcC1leGFtcGxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvdG9vbHRpcC90b29sdGlwLWV4YW1wbGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5iLWNhcmQge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
    return TooltipShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tooltip-showcase',
                templateUrl: './tooltip-showcase.component.html',
                styleUrls: ['./tooltip-examples.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Yj0c":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/tooltip/tooltip-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TooltipRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipRoutingModule", function() { return TooltipRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tooltip_colors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-colors.component */ "m5CJ");
/* harmony import */ var _tooltip_placements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-placements.component */ "oaj9");
/* harmony import */ var _tooltip_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-showcase.component */ "ROUn");
/* harmony import */ var _tooltip_with_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip-with-icon.component */ "szLv");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var routes = [
    {
        path: 'tooltip-colors.component',
        component: _tooltip_colors_component__WEBPACK_IMPORTED_MODULE_2__["TooltipColorsComponent"],
    },
    {
        path: 'tooltip-placements.component',
        component: _tooltip_placements_component__WEBPACK_IMPORTED_MODULE_3__["TooltipPlacementsComponent"],
    },
    {
        path: 'tooltip-showcase.component',
        component: _tooltip_showcase_component__WEBPACK_IMPORTED_MODULE_4__["TooltipShowcaseComponent"],
    },
    {
        path: 'tooltip-with-icon.component',
        component: _tooltip_with_icon_component__WEBPACK_IMPORTED_MODULE_5__["TooltipWithIconComponent"],
    },
];
var TooltipRoutingModule = /** @class */ (function () {
    function TooltipRoutingModule() {
    }
    TooltipRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TooltipRoutingModule });
    TooltipRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TooltipRoutingModule_Factory(t) { return new (t || TooltipRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TooltipRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "m5CJ":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/tooltip/tooltip-colors.component.ts ***!
  \************************************************************************/
/*! exports provided: TooltipColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipColorsComponent", function() { return TooltipColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tooltip/tooltip.directive */ "etHN");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var TooltipColorsComponent = /** @class */ (function () {
    function TooltipColorsComponent() {
    }
    TooltipColorsComponent.ɵfac = function TooltipColorsComponent_Factory(t) { return new (t || TooltipColorsComponent)(); };
    TooltipColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipColorsComponent, selectors: [["nb-tooltip-colors"]], decls: 18, vars: 0, consts: [[1, "example-items-rows"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbButton", "", "status", "basic"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "basic", "nbButton", "", "status", "basic"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "primary", "nbButton", "", "status", "primary"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "success", "nbButton", "", "status", "success"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "danger", "nbButton", "", "status", "danger"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "info", "nbButton", "", "status", "info"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "warning", "nbButton", "", "status", "warning"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbTooltipStatus", "control", "nbButton", "", "status", "control"]], template: function TooltipColorsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Basic ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Control ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3Rvb2x0aXAvdG9vbHRpcC1leGFtcGxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvdG9vbHRpcC90b29sdGlwLWV4YW1wbGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5iLWNhcmQge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
    return TooltipColorsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tooltip-colors',
                templateUrl: './tooltip-colors.component.html',
                styleUrls: ['./tooltip-examples.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "oaj9":
/*!****************************************************************************!*\
  !*** ./src/playground/with-layout/tooltip/tooltip-placements.component.ts ***!
  \****************************************************************************/
/*! exports provided: TooltipPlacementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPlacementsComponent", function() { return TooltipPlacementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tooltip/tooltip.directive */ "etHN");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var TooltipPlacementsComponent = /** @class */ (function () {
    function TooltipPlacementsComponent() {
    }
    TooltipPlacementsComponent.ɵfac = function TooltipPlacementsComponent_Factory(t) { return new (t || TooltipPlacementsComponent)(); };
    TooltipPlacementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipPlacementsComponent, selectors: [["nb-tooltip-placements"]], decls: 14, vars: 0, consts: [[1, "example-items-rows"], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "top", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "right", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "end", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "bottom", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "left", "nbButton", ""], ["nbTooltip", "This is a tooltip", "nbTooltipPlacement", "start", "nbButton", ""]], template: function TooltipPlacementsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Top");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "End");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bottom");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3Rvb2x0aXAvdG9vbHRpcC1leGFtcGxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvdG9vbHRpcC90b29sdGlwLWV4YW1wbGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5iLWNhcmQge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
    return TooltipPlacementsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipPlacementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tooltip-placements',
                templateUrl: './tooltip-placements.component.html',
                styleUrls: ['./tooltip-examples.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "szLv":
/*!***************************************************************************!*\
  !*** ./src/playground/with-layout/tooltip/tooltip-with-icon.component.ts ***!
  \***************************************************************************/
/*! exports provided: TooltipWithIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipWithIconComponent", function() { return TooltipWithIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tooltip/tooltip.directive */ "etHN");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var _c0 = function () { return { icon: "alert-triangle-outline", pack: "eva" }; };
var TooltipWithIconComponent = /** @class */ (function () {
    function TooltipWithIconComponent() {
    }
    TooltipWithIconComponent.ɵfac = function TooltipWithIconComponent_Factory(t) { return new (t || TooltipWithIconComponent)(); };
    TooltipWithIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipWithIconComponent, selectors: [["nb-tooltip-with-icon"]], decls: 8, vars: 2, consts: [[1, "example-items-rows"], ["nbTooltip", "This is a tooltip", "nbTooltipIcon", "home-outline", "nbButton", ""], ["nbTooltip", "", "nbTooltipIcon", "alert-triangle-outline", "nbTooltipStatus", "danger", "nbButton", ""], ["nbTooltip", "", "nbTooltipStatus", "danger", "nbButton", "", 3, "nbTooltipIcon"]], template: function TooltipWithIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show Tooltip");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Show Tooltip");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Show Tooltip ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTooltipIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3Rvb2x0aXAvdG9vbHRpcC1leGFtcGxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvdG9vbHRpcC90b29sdGlwLWV4YW1wbGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5iLWNhcmQge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
    return TooltipWithIconComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipWithIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tooltip-with-icon',
                templateUrl: './tooltip-with-icon.component.html',
                styleUrls: ['./tooltip-examples.scss'],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tooltip-tooltip-module.js.map