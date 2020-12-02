(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toastr-toastr-module"],{

/***/ "1P2v":
/*!************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr.module.ts ***!
  \************************************************************/
/*! exports provided: ToastrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _toastr_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastr-routing.module */ "SDiO");
/* harmony import */ var _toastr_destroy_by_click_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastr-destroy-by-click.component */ "Y72A");
/* harmony import */ var _toastr_duration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toastr-duration.component */ "xpZV");
/* harmony import */ var _toastr_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toastr-icon.component */ "j1EP");
/* harmony import */ var _toastr_positions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toastr-positions.component */ "mbS/");
/* harmony import */ var _toastr_prevent_duplicates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toastr-prevent-duplicates.component */ "7rUW");
/* harmony import */ var _toastr_showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toastr-showcase.component */ "IGy9");
/* harmony import */ var _toastr_statuses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toastr-statuses.component */ "iluQ");
/* harmony import */ var _toastr_limit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toastr-limit.component */ "zvlZ");
/* harmony import */ var _toastr_prevent_duplicates_behaviour_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toastr-prevent-duplicates-behaviour.component */ "M/aA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _framework_theme_components_toastr_toastr_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../framework/theme/components/toastr/toastr.module */ "MAiu");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
















var ToastrModule = /** @class */ (function () {
    function ToastrModule() {
    }
    ToastrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToastrModule });
    ToastrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToastrModule_Factory(t) { return new (t || ToastrModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _toastr_routing_module__WEBPACK_IMPORTED_MODULE_2__["ToastrRoutingModule"],
            ]] });
    return ToastrModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastrModule, { declarations: [_toastr_destroy_by_click_component__WEBPACK_IMPORTED_MODULE_3__["ToastrDestroyByClickComponent"],
        _toastr_duration_component__WEBPACK_IMPORTED_MODULE_4__["ToastrDurationComponent"],
        _toastr_icon_component__WEBPACK_IMPORTED_MODULE_5__["ToastrIconComponent"],
        _toastr_positions_component__WEBPACK_IMPORTED_MODULE_6__["ToastrPositionsComponent"],
        _toastr_prevent_duplicates_component__WEBPACK_IMPORTED_MODULE_7__["ToastrPreventDuplicatesComponent"],
        _toastr_prevent_duplicates_behaviour_component__WEBPACK_IMPORTED_MODULE_11__["ToastrPreventDuplicatesBehaviourComponent"],
        _toastr_showcase_component__WEBPACK_IMPORTED_MODULE_8__["ToastrShowcaseComponent"],
        _toastr_statuses_component__WEBPACK_IMPORTED_MODULE_9__["ToastrStatusesComponent"],
        _toastr_limit_component__WEBPACK_IMPORTED_MODULE_10__["ToastrLimitComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _framework_theme_components_toastr_toastr_module__WEBPACK_IMPORTED_MODULE_14__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _toastr_routing_module__WEBPACK_IMPORTED_MODULE_2__["ToastrRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _toastr_destroy_by_click_component__WEBPACK_IMPORTED_MODULE_3__["ToastrDestroyByClickComponent"],
                    _toastr_duration_component__WEBPACK_IMPORTED_MODULE_4__["ToastrDurationComponent"],
                    _toastr_icon_component__WEBPACK_IMPORTED_MODULE_5__["ToastrIconComponent"],
                    _toastr_positions_component__WEBPACK_IMPORTED_MODULE_6__["ToastrPositionsComponent"],
                    _toastr_prevent_duplicates_component__WEBPACK_IMPORTED_MODULE_7__["ToastrPreventDuplicatesComponent"],
                    _toastr_prevent_duplicates_behaviour_component__WEBPACK_IMPORTED_MODULE_11__["ToastrPreventDuplicatesBehaviourComponent"],
                    _toastr_showcase_component__WEBPACK_IMPORTED_MODULE_8__["ToastrShowcaseComponent"],
                    _toastr_statuses_component__WEBPACK_IMPORTED_MODULE_9__["ToastrStatusesComponent"],
                    _toastr_limit_component__WEBPACK_IMPORTED_MODULE_10__["ToastrLimitComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _toastr_routing_module__WEBPACK_IMPORTED_MODULE_2__["ToastrRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "7rUW":
/*!**********************************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-prevent-duplicates.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ToastrPreventDuplicatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrPreventDuplicatesComponent", function() { return ToastrPreventDuplicatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var ToastrPreventDuplicatesComponent = /** @class */ (function () {
    function ToastrPreventDuplicatesComponent(toastrService) {
        this.toastrService = toastrService;
        this.classes = 'example-items-rows';
    }
    ToastrPreventDuplicatesComponent.prototype.showToast = function (preventDuplicates) {
        this.toastrService.show('This is super toast message', "This is toast title", { preventDuplicates: preventDuplicates });
    };
    ToastrPreventDuplicatesComponent.ɵfac = function ToastrPreventDuplicatesComponent_Factory(t) { return new (t || ToastrPreventDuplicatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrPreventDuplicatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrPreventDuplicatesComponent, selectors: [["nb-toastr-prevent-duplicates"]], hostVars: 2, hostBindings: function ToastrPreventDuplicatesComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        } }, decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function ToastrPreventDuplicatesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPreventDuplicatesComponent_Template_button_click_0_listener() { return ctx.showToast(true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Prevent duplicates");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPreventDuplicatesComponent_Template_button_click_2_listener() { return ctx.showToast(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Without prevent duplicates");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrPreventDuplicatesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrPreventDuplicatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-prevent-duplicates',
                template: "\n    <button nbButton (click)=\"showToast(true)\">Prevent duplicates</button>\n    <button nbButton (click)=\"showToast(false)\">Without prevent duplicates</button>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "IGy9":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-showcase.component.ts ***!
  \************************************************************************/
/*! exports provided: ToastrShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrShowcaseComponent", function() { return ToastrShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var ToastrShowcaseComponent = /** @class */ (function () {
    function ToastrShowcaseComponent(toastrService) {
        this.toastrService = toastrService;
        this.index = 0;
        this.classes = 'example-items-rows';
    }
    ToastrShowcaseComponent.prototype.showToast = function (position, status) {
        this.index += 1;
        this.toastrService.show(status || 'Success', "Toast " + this.index, { position: position, status: status });
    };
    ToastrShowcaseComponent.ɵfac = function ToastrShowcaseComponent_Factory(t) { return new (t || ToastrShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrShowcaseComponent, selectors: [["nb-toastr-showcase"]], hostVars: 2, hostBindings: function ToastrShowcaseComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        } }, decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function ToastrShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrShowcaseComponent_Template_button_click_0_listener() { return ctx.showToast("top-right", "success"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrShowcaseComponent_Template_button_click_2_listener() { return ctx.showToast("bottom-left", "info"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bottom left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-showcase',
                template: "\n    <button nbButton (click)=\"showToast('top-right', 'success')\">Top Right</button>\n    <button nbButton (click)=\"showToast('bottom-left', 'info')\">Bottom left</button>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "M/aA":
/*!********************************************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-prevent-duplicates-behaviour.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ToastrPreventDuplicatesBehaviourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrPreventDuplicatesBehaviourComponent", function() { return ToastrPreventDuplicatesBehaviourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/radio/radio-group.component */ "2K72");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/radio/radio.component */ "XdkA");









function ToastrPreventDuplicatesBehaviourComponent_nb_radio_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
} }
var ToastrPreventDuplicatesBehaviourComponent = /** @class */ (function () {
    function ToastrPreventDuplicatesBehaviourComponent(toastrService) {
        this.toastrService = toastrService;
        this.classes = 'example-items-rows';
        this.options = [
            { value: 'previous', label: 'Duplicate previous', checked: true },
            { value: 'all', label: 'Duplicate all' },
        ];
        this.option = 'previous';
    }
    ToastrPreventDuplicatesBehaviourComponent.prototype.showToast = function (message, status) {
        this.toastrService.show(message, "This is toast title", { preventDuplicates: true, duplicatesBehaviour: this.option, status: status });
    };
    ToastrPreventDuplicatesBehaviourComponent.ɵfac = function ToastrPreventDuplicatesBehaviourComponent_Factory(t) { return new (t || ToastrPreventDuplicatesBehaviourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrPreventDuplicatesBehaviourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrPreventDuplicatesBehaviourComponent, selectors: [["nb-toastr-prevent-duplicates-behaviour"]], hostVars: 2, hostBindings: function ToastrPreventDuplicatesBehaviourComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        } }, decls: 6, vars: 2, consts: [["nbButton", "", 3, "click"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ToastrPreventDuplicatesBehaviourComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPreventDuplicatesBehaviourComponent_Template_button_click_0_listener() { return ctx.showToast("Toast 1", "success"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show toast 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPreventDuplicatesBehaviourComponent_Template_button_click_2_listener() { return ctx.showToast("Toast 2", "danger"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show toast 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-radio-group", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToastrPreventDuplicatesBehaviourComponent_Template_nb_radio_group_ngModelChange_4_listener($event) { return ctx.option = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToastrPreventDuplicatesBehaviourComponent_nb_radio_5_Template, 2, 2, "nb-radio", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.option);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_3__["NbRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _framework_theme_components_radio_radio_component__WEBPACK_IMPORTED_MODULE_6__["NbRadioComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrPreventDuplicatesBehaviourComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrPreventDuplicatesBehaviourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-prevent-duplicates-behaviour',
                template: "\n    <button nbButton (click)=\"showToast('Toast 1', 'success')\">Show toast 1</button>\n    <button nbButton (click)=\"showToast('Toast 2', 'danger')\">Show toast 2</button>\n\n    <nb-radio-group [(ngModel)]=\"option\">\n      <nb-radio\n        *ngFor=\"let option of options\"\n        [value]=\"option.value\">\n        {{ option.label }}\n      </nb-radio>\n    </nb-radio-group>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "SDiO":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ToastrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrRoutingModule", function() { return ToastrRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toastr_destroy_by_click_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastr-destroy-by-click.component */ "Y72A");
/* harmony import */ var _toastr_duration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastr-duration.component */ "xpZV");
/* harmony import */ var _toastr_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toastr-icon.component */ "j1EP");
/* harmony import */ var _toastr_positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toastr-positions.component */ "mbS/");
/* harmony import */ var _toastr_prevent_duplicates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toastr-prevent-duplicates.component */ "7rUW");
/* harmony import */ var _toastr_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toastr-showcase.component */ "IGy9");
/* harmony import */ var _toastr_statuses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toastr-statuses.component */ "iluQ");
/* harmony import */ var _toastr_prevent_duplicates_behaviour_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toastr-prevent-duplicates-behaviour.component */ "M/aA");
/* harmony import */ var _toastr_limit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toastr-limit.component */ "zvlZ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













var routes = [
    {
        path: 'toastr-destroy-by-click.component',
        component: _toastr_destroy_by_click_component__WEBPACK_IMPORTED_MODULE_2__["ToastrDestroyByClickComponent"],
    },
    {
        path: 'toastr-duration.component',
        component: _toastr_duration_component__WEBPACK_IMPORTED_MODULE_3__["ToastrDurationComponent"],
    },
    {
        path: 'toastr-icon.component',
        component: _toastr_icon_component__WEBPACK_IMPORTED_MODULE_4__["ToastrIconComponent"],
    },
    {
        path: 'toastr-positions.component',
        component: _toastr_positions_component__WEBPACK_IMPORTED_MODULE_5__["ToastrPositionsComponent"],
    },
    {
        path: 'toastr-prevent-duplicates.component',
        component: _toastr_prevent_duplicates_component__WEBPACK_IMPORTED_MODULE_6__["ToastrPreventDuplicatesComponent"],
    },
    {
        path: 'toastr-prevent-duplicates-behaviour.component',
        component: _toastr_prevent_duplicates_behaviour_component__WEBPACK_IMPORTED_MODULE_9__["ToastrPreventDuplicatesBehaviourComponent"],
    },
    {
        path: 'toastr-showcase.component',
        component: _toastr_showcase_component__WEBPACK_IMPORTED_MODULE_7__["ToastrShowcaseComponent"],
    },
    {
        path: 'toastr-statuses.component',
        component: _toastr_statuses_component__WEBPACK_IMPORTED_MODULE_8__["ToastrStatusesComponent"],
    },
    {
        path: 'toastr-limit.component',
        component: _toastr_limit_component__WEBPACK_IMPORTED_MODULE_10__["ToastrLimitComponent"],
    },
];
var ToastrRoutingModule = /** @class */ (function () {
    function ToastrRoutingModule() {
    }
    ToastrRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToastrRoutingModule });
    ToastrRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToastrRoutingModule_Factory(t) { return new (t || ToastrRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ToastrRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastrRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Y72A":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-destroy-by-click.component.ts ***!
  \********************************************************************************/
/*! exports provided: ToastrDestroyByClickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrDestroyByClickComponent", function() { return ToastrDestroyByClickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var ToastrDestroyByClickComponent = /** @class */ (function () {
    function ToastrDestroyByClickComponent(toastrService) {
        this.toastrService = toastrService;
        this.index = 0;
        this.className = 'example-items-rows';
    }
    ToastrDestroyByClickComponent.prototype.showToast = function (destroyByClick) {
        this.toastrService.show('This is super toast message', "This is toast number: " + ++this.index, { destroyByClick: destroyByClick });
    };
    ToastrDestroyByClickComponent.ɵfac = function ToastrDestroyByClickComponent_Factory(t) { return new (t || ToastrDestroyByClickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrDestroyByClickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrDestroyByClickComponent, selectors: [["nb-toastr-destroy-by-click"]], hostVars: 2, hostBindings: function ToastrDestroyByClickComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        } }, decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function ToastrDestroyByClickComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrDestroyByClickComponent_Template_button_click_0_listener() { return ctx.showToast(true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destroy by click");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrDestroyByClickComponent_Template_button_click_2_listener() { return ctx.showToast(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Destroy by timeout only");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrDestroyByClickComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrDestroyByClickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-destroy-by-click',
                template: "\n    <button nbButton (click)=\"showToast(true)\">Destroy by click</button>\n    <button nbButton (click)=\"showToast(false)\">Destroy by timeout only</button>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "iluQ":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-statuses.component.ts ***!
  \************************************************************************/
/*! exports provided: ToastrStatusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrStatusesComponent", function() { return ToastrStatusesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var ToastrStatusesComponent = /** @class */ (function () {
    function ToastrStatusesComponent(toastrService) {
        this.toastrService = toastrService;
        this.index = 0;
        this.classes = 'example-items-rows';
    }
    ToastrStatusesComponent.prototype.showToast = function (status) {
        this.toastrService.show(status, "Toast: " + ++this.index, { status: status });
    };
    ToastrStatusesComponent.ɵfac = function ToastrStatusesComponent_Factory(t) { return new (t || ToastrStatusesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrStatusesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrStatusesComponent, selectors: [["nb-toastr-statuses"]], hostVars: 2, hostBindings: function ToastrStatusesComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        } }, decls: 16, vars: 0, consts: [[1, "example-items-rows"], ["nbButton", "", "status", "basic", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "info", 3, "click"], ["nbButton", "", "status", "warning", 3, "click"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "control", 3, "click"]], template: function ToastrStatusesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrStatusesComponent_Template_button_click_2_listener() { return ctx.showToast("basic"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrStatusesComponent_Template_button_click_4_listener() { return ctx.showToast("primary"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrStatusesComponent_Template_button_click_6_listener() { return ctx.showToast("success"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrStatusesComponent_Template_button_click_8_listener() { return ctx.showToast("info"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrStatusesComponent_Template_button_click_10_listener() { return ctx.showToast("warning"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrStatusesComponent_Template_button_click_12_listener() { return ctx.showToast("danger"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrStatusesComponent_Template_button_click_14_listener() { return ctx.showToast("control"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Control");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrStatusesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrStatusesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-statuses',
                template: "\n    <nb-card>\n      <nb-card-body class=\"example-items-rows\">\n        <button nbButton status=\"basic\" (click)=\"showToast('basic')\">Basic</button>\n        <button nbButton status=\"primary\" (click)=\"showToast('primary')\">Primary</button>\n        <button nbButton status=\"success\" (click)=\"showToast('success')\">Success</button>\n        <button nbButton status=\"info\" (click)=\"showToast('info')\">Info</button>\n        <button nbButton status=\"warning\" (click)=\"showToast('warning')\">Warning</button>\n        <button nbButton status=\"danger\" (click)=\"showToast('danger')\">Danger</button>\n        <button nbButton status=\"control\" (click)=\"showToast('control')\">Control</button>\n      </nb-card-body>\n    </nb-card>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "j1EP":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-icon.component.ts ***!
  \********************************************************************/
/*! exports provided: ToastrIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrIconComponent", function() { return ToastrIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var ToastrIconComponent = /** @class */ (function () {
    function ToastrIconComponent(toastrService) {
        this.toastrService = toastrService;
        this.index = 0;
        this.className = 'example-items-rows';
    }
    ToastrIconComponent.prototype.showDefaultIcon = function () {
        this.toastrService.show('Message', "Toast: " + ++this.index);
    };
    ToastrIconComponent.prototype.showToast = function (iconName) {
        var iconConfig = { icon: iconName, pack: 'eva' };
        this.toastrService.show('Message', "Toast: " + ++this.index, iconConfig);
    };
    ToastrIconComponent.ɵfac = function ToastrIconComponent_Factory(t) { return new (t || ToastrIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrIconComponent, selectors: [["nb-toastr-icon"]], hostVars: 2, hostBindings: function ToastrIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        } }, decls: 6, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function ToastrIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrIconComponent_Template_button_click_0_listener() { return ctx.showDefaultIcon(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "With icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrIconComponent_Template_button_click_2_listener() { return ctx.showToast(""); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Without icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrIconComponent_Template_button_click_4_listener() { return ctx.showToast("headphones-outline"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Custom icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrIconComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-icon',
                template: "\n    <button nbButton (click)=\"showDefaultIcon()\">With icon</button>\n    <button nbButton (click)=\"showToast('')\">Without icon</button>\n    <button nbButton (click)=\"showToast('headphones-outline')\">Custom icon</button>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "mbS/":
/*!*************************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-positions.component.ts ***!
  \*************************************************************************/
/*! exports provided: ToastrPositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrPositionsComponent", function() { return ToastrPositionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var ToastrPositionsComponent = /** @class */ (function () {
    function ToastrPositionsComponent(toastrService) {
        this.toastrService = toastrService;
        this.index = 0;
        this.classes = 'example-items-rows';
    }
    ToastrPositionsComponent.prototype.showToast = function (position) {
        this.toastrService.show('This is super toast message', "This is toast number: " + ++this.index, { position: position });
    };
    ToastrPositionsComponent.ɵfac = function ToastrPositionsComponent_Factory(t) { return new (t || ToastrPositionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrPositionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrPositionsComponent, selectors: [["nb-toastr-positions"]], hostVars: 2, hostBindings: function ToastrPositionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        } }, decls: 16, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function ToastrPositionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_0_listener() { return ctx.showToast("top-right"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_2_listener() { return ctx.showToast("bottom-right"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bottom Right");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_4_listener() { return ctx.showToast("top-left"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Top Left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_6_listener() { return ctx.showToast("bottom-left"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bottom Left");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_8_listener() { return ctx.showToast("top-end"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Top End");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_10_listener() { return ctx.showToast("bottom-end"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Bottom End");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_12_listener() { return ctx.showToast("top-start"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Top Start");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrPositionsComponent_Template_button_click_14_listener() { return ctx.showToast("bottom-start"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bottom Start");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrPositionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrPositionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-positions',
                template: "\n    <button nbButton (click)=\"showToast('top-right')\">Top Right</button>\n    <button nbButton (click)=\"showToast('bottom-right')\">Bottom Right</button>\n    <button nbButton (click)=\"showToast('top-left')\">Top Left</button>\n    <button nbButton (click)=\"showToast('bottom-left')\">Bottom Left</button>\n    <button nbButton (click)=\"showToast('top-end')\">Top End</button>\n    <button nbButton (click)=\"showToast('bottom-end')\">Bottom End</button>\n    <button nbButton (click)=\"showToast('top-start')\">Top Start</button>\n    <button nbButton (click)=\"showToast('bottom-start')\">Bottom Start</button>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "xpZV":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-duration.component.ts ***!
  \************************************************************************/
/*! exports provided: ToastrDurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrDurationComponent", function() { return ToastrDurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var ToastrDurationComponent = /** @class */ (function () {
    function ToastrDurationComponent(toastrService) {
        this.toastrService = toastrService;
        this.index = 0;
        this.className = 'example-items-rows';
    }
    ToastrDurationComponent.prototype.showToast = function (duration) {
        this.toastrService.show('This is super toast message', "This is toast number: " + ++this.index, { duration: duration });
    };
    ToastrDurationComponent.ɵfac = function ToastrDurationComponent_Factory(t) { return new (t || ToastrDurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
    ToastrDurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrDurationComponent, selectors: [["nb-toastr-duration"]], hostVars: 2, hostBindings: function ToastrDurationComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        } }, decls: 6, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function ToastrDurationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrDurationComponent_Template_button_click_0_listener() { return ctx.showToast(3000); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Default 3000ms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrDurationComponent_Template_button_click_2_listener() { return ctx.showToast(1000); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1000ms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastrDurationComponent_Template_button_click_4_listener() { return ctx.showToast(0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Infinite");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrDurationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrDurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-toastr-duration',
                template: "\n    <button nbButton (click)=\"showToast(3000)\">Default 3000ms</button>\n    <button nbButton (click)=\"showToast(1000)\">1000ms</button>\n    <button nbButton (click)=\"showToast(0)\">Infinite</button>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "zvlZ":
/*!*********************************************************************!*\
  !*** ./src/playground/with-layout/toastr/toastr-limit.component.ts ***!
  \*********************************************************************/
/*! exports provided: ToastrLimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrLimitComponent", function() { return ToastrLimitComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var ToastrLimitComponent = /** @class */ (function () {
    function ToastrLimitComponent(toastrService) {
        this.toastrService = toastrService;
        this.i = 1;
    }
    ToastrLimitComponent.prototype.showToast = function () {
        this.toastrService.show("Toast number " + this.i, "Toast with the limit", { limit: 3, position: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].TOP_END });
        this.i++;
    };
    ToastrLimitComponent.ɵfac = function ToastrLimitComponent_Factory(t) { return new (t || ToastrLimitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"])); };
    ToastrLimitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToastrLimitComponent, selectors: [["nb-toastr-limit"]], decls: 2, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function ToastrLimitComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastrLimitComponent_Template_button_click_0_listener() { return ctx.showToast(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Show only 3 toasts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n        height: 80vw;\n      }"] });
    return ToastrLimitComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastrLimitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nb-toastr-limit',
                template: "\n    <button nbButton (click)=\"showToast()\">Show only 3 toasts</button>\n  ",
                styles: [
                    "\n      ::ng-deep nb-layout-column {\n        height: 80vw;\n      }\n    ",
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=toastr-toastr-module.js.map