(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toggle-toggle-module"],{

/***/ "3leM":
/*!************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle.module.ts ***!
  \************************************************************/
/*! exports provided: ToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleModule", function() { return ToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _toggle_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-form.component */ "9Esk");
/* harmony import */ var _toggle_label_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle-label-position.component */ "d0uU");
/* harmony import */ var _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-routing.module */ "pXCR");
/* harmony import */ var _toggle_disabled_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-disabled.component */ "G2J7");
/* harmony import */ var _toggle_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle-showcase.component */ "wgo3");
/* harmony import */ var _toggle_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle-status.component */ "hMJW");
/* harmony import */ var _toggle_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toggle-test.component */ "PK2t");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var ToggleModule = /** @class */ (function () {
    function ToggleModule() {
    }
    ToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToggleModule });
    ToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToggleModule_Factory(t) { return new (t || ToggleModule)(); }, imports: [[
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToggleModule"],
                _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToggleRoutingModule"],
            ]] });
    return ToggleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToggleModule, { declarations: [_toggle_disabled_component__WEBPACK_IMPORTED_MODULE_6__["ToggleDisabledComponent"],
        _toggle_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ToggleShowcaseComponent"],
        _toggle_status_component__WEBPACK_IMPORTED_MODULE_8__["ToggleStatusComponent"],
        _toggle_test_component__WEBPACK_IMPORTED_MODULE_9__["ToggleTestComponent"],
        _toggle_label_position_component__WEBPACK_IMPORTED_MODULE_4__["ToggleLabelPositionComponent"],
        _toggle_form_component__WEBPACK_IMPORTED_MODULE_3__["ToggleFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToggleModule"],
        _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToggleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _toggle_disabled_component__WEBPACK_IMPORTED_MODULE_6__["ToggleDisabledComponent"],
                    _toggle_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ToggleShowcaseComponent"],
                    _toggle_status_component__WEBPACK_IMPORTED_MODULE_8__["ToggleStatusComponent"],
                    _toggle_test_component__WEBPACK_IMPORTED_MODULE_9__["ToggleTestComponent"],
                    _toggle_label_position_component__WEBPACK_IMPORTED_MODULE_4__["ToggleLabelPositionComponent"],
                    _toggle_form_component__WEBPACK_IMPORTED_MODULE_3__["ToggleFormComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToggleModule"],
                    _toggle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToggleRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "9Esk":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle-form.component.ts ***!
  \********************************************************************/
/*! exports provided: ToggleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFormComponent", function() { return ToggleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/toggle/toggle.component */ "FQVV");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var ToggleFormComponent = /** @class */ (function () {
    function ToggleFormComponent() {
        this.toggleNgModel = true;
        this.toggleFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ToggleFormComponent.ɵfac = function ToggleFormComponent_Factory(t) { return new (t || ToggleFormComponent)(); };
    ToggleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleFormComponent, selectors: [["nb-toggle-form"]], decls: 6, vars: 2, consts: [[1, "example-items-col"], [3, "ngModel", "ngModelChange"], [3, "formControl"]], template: function ToggleFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-toggle", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleFormComponent_Template_nb_toggle_ngModelChange_2_listener($event) { return ctx.toggleNgModel = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toggle with NgModel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-toggle", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle with FormControl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toggleNgModel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.toggleFormControl);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_3__["NbToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2 });
    return ToggleFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toggle-form',
                template: "\n    <nb-card>\n      <nb-card-body class=\"example-items-col\">\n        <nb-toggle [(ngModel)]=\"toggleNgModel\">Toggle with NgModel</nb-toggle>\n        <nb-toggle [formControl]=\"toggleFormControl\">Toggle with FormControl</nb-toggle>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "G2J7":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle-disabled.component.ts ***!
  \************************************************************************/
/*! exports provided: ToggleDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDisabledComponent", function() { return ToggleDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/toggle/toggle.component */ "FQVV");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ToggleDisabledComponent = /** @class */ (function () {
    function ToggleDisabledComponent() {
    }
    ToggleDisabledComponent.ɵfac = function ToggleDisabledComponent_Factory(t) { return new (t || ToggleDisabledComponent)(); };
    ToggleDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleDisabledComponent, selectors: [["nb-toggle-disabled"]], decls: 4, vars: 1, consts: [[1, "example-items-col"], ["disabled", ""], ["disabled", "", 3, "checked"]], template: function ToggleDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-toggle", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-toggle", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["NbToggleComponent"]], encapsulation: 2 });
    return ToggleDisabledComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toggle-disabled',
                template: "\n    <nb-card>\n      <nb-card-body class=\"example-items-col\">\n        <nb-toggle disabled></nb-toggle>\n        <nb-toggle [checked]=\"true\" disabled></nb-toggle>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "PK2t":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle-test.component.ts ***!
  \********************************************************************/
/*! exports provided: ToggleTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTestComponent", function() { return ToggleTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/toggle/toggle.component */ "FQVV");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ToggleTestComponent = /** @class */ (function () {
    function ToggleTestComponent() {
    }
    ToggleTestComponent.ɵfac = function ToggleTestComponent_Factory(t) { return new (t || ToggleTestComponent)(); };
    ToggleTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleTestComponent, selectors: [["nb-app-toggle-test"]], decls: 11, vars: 4, consts: [[1, "example-items-col"], ["id", "first"], ["id", "second", 3, "checked"], ["id", "disabled", 3, "disabled"], [3, "checked", "disabled"], ["id", "primary", "status", "primary"], ["id", "success", "status", "success"], ["id", "warning", "status", "warning"], ["id", "danger", "status", "danger"], ["id", "info", "status", "info"]], template: function ToggleTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-toggle", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-toggle", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-toggle", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-toggle", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-toggle", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-toggle", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-toggle", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nb-toggle", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("disabled", true);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["NbToggleComponent"]], encapsulation: 2 });
    return ToggleTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-app-toggle-test',
                template: "\n    <nb-card>\n      <nb-card-body class=\"example-items-col\">\n        <nb-toggle id=\"first\"></nb-toggle>\n        <nb-toggle id=\"second\" [checked]=\"true\"></nb-toggle>\n        <nb-toggle id=\"disabled\" [disabled]=\"true\"></nb-toggle>\n        <nb-toggle [checked]=\"true\" [disabled]=\"true\"></nb-toggle>\n        <nb-toggle id=\"primary\" status=\"primary\"></nb-toggle>\n        <nb-toggle id=\"success\" status=\"success\"></nb-toggle>\n        <nb-toggle id=\"warning\" status=\"warning\"></nb-toggle>\n        <nb-toggle id=\"danger\" status=\"danger\"></nb-toggle>\n        <nb-toggle id=\"info\" status=\"info\"></nb-toggle>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "d0uU":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle-label-position.component.ts ***!
  \******************************************************************************/
/*! exports provided: ToggleLabelPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLabelPositionComponent", function() { return ToggleLabelPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/toggle/toggle.component */ "FQVV");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ToggleLabelPositionComponent = /** @class */ (function () {
    function ToggleLabelPositionComponent() {
    }
    ToggleLabelPositionComponent.ɵfac = function ToggleLabelPositionComponent_Factory(t) { return new (t || ToggleLabelPositionComponent)(); };
    ToggleLabelPositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleLabelPositionComponent, selectors: [["nb-toggle-label-position"]], decls: 12, vars: 0, consts: [[1, "example-items-col"], ["labelPosition", "start"], ["labelPosition", "end"], ["labelPosition", "right"], ["labelPosition", "left"], ["disabled", ""]], template: function ToggleLabelPositionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-toggle", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Label Start");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-toggle", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Label End");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-toggle", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Label Right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Label Left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-toggle", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Label Default Disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["NbToggleComponent"]], encapsulation: 2 });
    return ToggleLabelPositionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleLabelPositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toggle-label-position',
                template: "\n    <nb-card>\n      <nb-card-body class=\"example-items-col\">\n        <nb-toggle labelPosition=\"start\">Label Start</nb-toggle>\n        <nb-toggle labelPosition=\"end\">Label End</nb-toggle>\n        <nb-toggle labelPosition=\"right\">Label Right</nb-toggle>\n        <nb-toggle labelPosition=\"left\">Label Left</nb-toggle>\n        <nb-toggle disabled>Label Default Disabled</nb-toggle>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "hMJW":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle-status.component.ts ***!
  \**********************************************************************/
/*! exports provided: ToggleStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleStatusComponent", function() { return ToggleStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/toggle/toggle.component */ "FQVV");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ToggleStatusComponent = /** @class */ (function () {
    function ToggleStatusComponent() {
    }
    ToggleStatusComponent.ɵfac = function ToggleStatusComponent_Factory(t) { return new (t || ToggleStatusComponent)(); };
    ToggleStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleStatusComponent, selectors: [["nb-toggle-status"]], decls: 17, vars: 0, consts: [[1, "example-items-rows"], ["status", "basic"], ["status", "primary"], ["status", "success"], ["status", "info"], ["status", "warning"], ["status", "danger"], [1, "control-status-example"], ["status", "control"]], template: function ToggleStatusComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-toggle", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-toggle", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-toggle", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-toggle", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-toggle", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-toggle", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-toggle", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Control");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["NbToggleComponent"]], styles: [".example-items-rows[_ngcontent-%COMP%] {\n      align-items: center;\n    }"] });
    return ToggleStatusComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toggle-status',
                template: "\n    <nb-card>\n      <nb-card-body class=\"example-items-rows\">\n        <nb-toggle status=\"basic\">Basic</nb-toggle>\n        <nb-toggle status=\"primary\">Primary</nb-toggle>\n        <nb-toggle status=\"success\">Success</nb-toggle>\n        <nb-toggle status=\"info\">Info</nb-toggle>\n        <nb-toggle status=\"warning\">Warning</nb-toggle>\n        <nb-toggle status=\"danger\">Danger</nb-toggle>\n        <div class=\"control-status-example\">\n          <nb-toggle status=\"control\">Control</nb-toggle>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  ",
                styles: ["\n    .example-items-rows {\n      align-items: center;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "pXCR":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ToggleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleRoutingModule", function() { return ToggleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toggle_disabled_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-disabled.component */ "G2J7");
/* harmony import */ var _toggle_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-form.component */ "9Esk");
/* harmony import */ var _toggle_label_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle-label-position.component */ "d0uU");
/* harmony import */ var _toggle_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-showcase.component */ "wgo3");
/* harmony import */ var _toggle_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle-status.component */ "hMJW");
/* harmony import */ var _toggle_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle-test.component */ "PK2t");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var routes = [
    {
        path: 'toggle-disabled.component',
        component: _toggle_disabled_component__WEBPACK_IMPORTED_MODULE_2__["ToggleDisabledComponent"],
    },
    {
        path: 'toggle-showcase.component',
        component: _toggle_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ToggleShowcaseComponent"],
    },
    {
        path: 'toggle-status.component',
        component: _toggle_status_component__WEBPACK_IMPORTED_MODULE_6__["ToggleStatusComponent"],
    },
    {
        path: 'toggle-test.component',
        component: _toggle_test_component__WEBPACK_IMPORTED_MODULE_7__["ToggleTestComponent"],
    },
    {
        path: 'toggle-label-position.component',
        component: _toggle_label_position_component__WEBPACK_IMPORTED_MODULE_4__["ToggleLabelPositionComponent"],
    },
    {
        path: 'toggle-form.component',
        component: _toggle_form_component__WEBPACK_IMPORTED_MODULE_3__["ToggleFormComponent"],
    },
];
var ToggleRoutingModule = /** @class */ (function () {
    function ToggleRoutingModule() {
    }
    ToggleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToggleRoutingModule });
    ToggleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToggleRoutingModule_Factory(t) { return new (t || ToggleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ToggleRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToggleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wgo3":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/toggle/toggle-showcase.component.ts ***!
  \************************************************************************/
/*! exports provided: ToggleShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleShowcaseComponent", function() { return ToggleShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/toggle/toggle.component */ "FQVV");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ToggleShowcaseComponent = /** @class */ (function () {
    function ToggleShowcaseComponent() {
    }
    ToggleShowcaseComponent.ɵfac = function ToggleShowcaseComponent_Factory(t) { return new (t || ToggleShowcaseComponent)(); };
    ToggleShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleShowcaseComponent, selectors: [["nb-toggle-showcase"]], decls: 3, vars: 0, template: function ToggleShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-toggle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["NbToggleComponent"]], encapsulation: 2 });
    return ToggleShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toggle-showcase',
                template: "\n    <nb-card>\n      <nb-card-body>\n        <nb-toggle></nb-toggle>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=toggle-toggle-module.js.map