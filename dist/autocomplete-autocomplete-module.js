(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autocomplete-autocomplete-module"],{

/***/ "0YmX":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete.module.ts ***!
  \************************************************************************/
/*! exports provided: AutocompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteModule", function() { return AutocompleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _autocomplete_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete-showcase.component */ "mFZk");
/* harmony import */ var _autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-routing.module */ "qQah");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _autocomplete_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autocomplete-form.component */ "gYOm");
/* harmony import */ var _autocomplete_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete-group.component */ "yz/+");
/* harmony import */ var _autocomplete_custom_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autocomplete-custom-display.component */ "sRDW");
/* harmony import */ var _autocomplete_active_first_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./autocomplete-active-first.component */ "iiBu");
/* harmony import */ var _autocomplete_disabled_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./autocomplete-disabled.component */ "Ij/k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutocompleteModule });
    AutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AutocompleteModule_Factory(t) { return new (t || AutocompleteModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAutocompleteModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                _autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_3__["AutocompleteRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            ]] });
    return AutocompleteModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteModule, { declarations: [_autocomplete_showcase_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteShowcaseComponent"],
        _autocomplete_form_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteFormComponent"],
        _autocomplete_group_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteGroupComponent"],
        _autocomplete_custom_display_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteCustomDisplayComponent"],
        _autocomplete_active_first_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteActiveFirstComponent"],
        _autocomplete_disabled_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteDisabledComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAutocompleteModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
        _autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_3__["AutocompleteRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"]], exports: [_autocomplete_showcase_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteShowcaseComponent"],
        _autocomplete_form_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteFormComponent"],
        _autocomplete_group_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteGroupComponent"],
        _autocomplete_custom_display_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteCustomDisplayComponent"],
        _autocomplete_active_first_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteActiveFirstComponent"],
        _autocomplete_disabled_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteDisabledComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _autocomplete_showcase_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteShowcaseComponent"],
                    _autocomplete_form_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteFormComponent"],
                    _autocomplete_group_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteGroupComponent"],
                    _autocomplete_custom_display_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteCustomDisplayComponent"],
                    _autocomplete_active_first_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteActiveFirstComponent"],
                    _autocomplete_disabled_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteDisabledComponent"],
                ],
                exports: [
                    _autocomplete_showcase_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteShowcaseComponent"],
                    _autocomplete_form_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteFormComponent"],
                    _autocomplete_group_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteGroupComponent"],
                    _autocomplete_custom_display_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteCustomDisplayComponent"],
                    _autocomplete_active_first_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteActiveFirstComponent"],
                    _autocomplete_disabled_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteDisabledComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAutocompleteModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                    _autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_3__["AutocompleteRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Ij/k":
/*!************************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete-disabled.component.ts ***!
  \************************************************************************************/
/*! exports provided: AutocompleteDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteDisabledComponent", function() { return AutocompleteDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.directive */ "Tkqq");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.component */ "Ij6m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/option/option.component */ "vvKt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











function AutocompleteDisabledComponent_nb_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
} }
var AutocompleteDisabledComponent = /** @class */ (function () {
    function AutocompleteDisabledComponent() {
        this.options = ['Option 1', 'Option 2', 'Option 3'];
        this.disabled = true;
        this.inputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    AutocompleteDisabledComponent.prototype.toggleDisabled = function () {
        this.disabled = !this.disabled;
        if (this.disabled) {
            this.inputFormControl.disable();
        }
        else {
            this.inputFormControl.enable();
        }
    };
    AutocompleteDisabledComponent.ɵfac = function AutocompleteDisabledComponent_Factory(t) { return new (t || AutocompleteDisabledComponent)(); };
    AutocompleteDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteDisabledComponent, selectors: [["ng-component"]], decls: 20, vars: 5, consts: [["size", "small"], [1, "example-items-col"], ["nbButton", "", 3, "click"], [1, "label"], ["nbInput", "", "type", "text", "placeholder", "Plain input", 3, "nbAutocomplete", "disabled"], ["nbInput", "", "type", "text", "placeholder", "Form control", 3, "nbAutocomplete", "formControl"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteDisabledComponent_Template_button_click_2_listener() { return ctx.toggleDisabled(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toggle disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Disabled via ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " attribute");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Disabled via ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "formControl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-autocomplete", null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AutocompleteDisabledComponent_nb_option_19_Template, 2, 2, "nb-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r0)("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r0)("formControl", ctx.inputFormControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__["NbAutocompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"]], styles: [".label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtZGlzYWJsZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLWRpc2FibGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
    return AutocompleteDisabledComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './autocomplete-disabled.component.html',
                styleUrls: ['./autocomplete-disabled.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "gYOm":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: AutocompleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteFormComponent", function() { return AutocompleteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.directive */ "Tkqq");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.component */ "Ij6m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/option/option.component */ "vvKt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












function AutocompleteFormComponent_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
} }
function AutocompleteFormComponent_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5, " ");
} }
var AutocompleteFormComponent = /** @class */ (function () {
    function AutocompleteFormComponent() {
    }
    AutocompleteFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = ['Option 1', 'Option 2', 'Option 3'];
        this.filteredControlOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.options);
        this.filteredNgModelOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.options);
        this.inputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredControlOptions$ = this.inputFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filterString) { return _this.filter(filterString); }));
    };
    AutocompleteFormComponent.prototype.filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (optionValue) { return optionValue.toLowerCase().includes(filterValue); });
    };
    AutocompleteFormComponent.prototype.onModelChange = function (value) {
        this.filteredNgModelOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.filter(value));
    };
    AutocompleteFormComponent.ɵfac = function AutocompleteFormComponent_Factory(t) { return new (t || AutocompleteFormComponent)(); };
    AutocompleteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteFormComponent, selectors: [["nb-autocomplete-showcase"]], decls: 12, vars: 10, consts: [["size", "small"], [1, "example-items-rows"], ["nbInput", "", "type", "text", "placeholder", "Form control", 3, "formControl", "nbAutocomplete"], ["autoControl", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "type", "text", "placeholder", "ngModel", 3, "ngModel", "nbAutocomplete", "ngModelChange"], ["autoNgModel", ""], [3, "value"]], template: function AutocompleteFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-autocomplete", null, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteFormComponent_nb_option_5_Template, 2, 2, "nb-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.onModelChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-autocomplete", null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteFormComponent_nb_option_10_Template, 2, 2, "nb-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.inputFormControl)("nbAutocomplete", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.filteredControlOptions$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("nbAutocomplete", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.filteredNgModelOptions$));
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_9__["NbOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
    return AutocompleteFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-autocomplete-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './autocomplete-form.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "iiBu":
/*!****************************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete-active-first.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AutocompleteActiveFirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteActiveFirstComponent", function() { return AutocompleteActiveFirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.directive */ "Tkqq");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.component */ "Ij6m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/option/option.component */ "vvKt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












function AutocompleteActiveFirstComponent_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
} }
var AutocompleteActiveFirstComponent = /** @class */ (function () {
    function AutocompleteActiveFirstComponent() {
    }
    AutocompleteActiveFirstComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = ['Option 1', 'Option 2', 'Option 3'];
        this.filteredOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.options);
        this.inputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredOptions$ = this.inputFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filterString) { return _this.filter(filterString); }));
    };
    AutocompleteActiveFirstComponent.prototype.filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (optionValue) { return optionValue.toLowerCase().includes(filterValue); });
    };
    AutocompleteActiveFirstComponent.ɵfac = function AutocompleteActiveFirstComponent_Factory(t) { return new (t || AutocompleteActiveFirstComponent)(); };
    AutocompleteActiveFirstComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteActiveFirstComponent, selectors: [["nb-autocomplete-active-first"]], decls: 7, vars: 6, consts: [["size", "small"], ["nbInput", "", "type", "text", "placeholder", "Enter value", 3, "formControl", "nbAutocomplete"], [3, "activeFirst"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteActiveFirstComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-autocomplete", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteActiveFirstComponent_nb_option_5_Template, 2, 2, "nb-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.inputFormControl)("nbAutocomplete", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeFirst", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.filteredOptions$));
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_9__["NbOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
    return AutocompleteActiveFirstComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteActiveFirstComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-autocomplete-active-first',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './autocomplete-active-first.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "mFZk":
/*!************************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete-showcase.component.ts ***!
  \************************************************************************************/
/*! exports provided: AutocompleteShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteShowcaseComponent", function() { return AutocompleteShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.directive */ "Tkqq");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.component */ "Ij6m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/option/option.component */ "vvKt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var _c0 = ["autoInput"];
function AutocompleteShowcaseComponent_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
var AutocompleteShowcaseComponent = /** @class */ (function () {
    function AutocompleteShowcaseComponent() {
    }
    AutocompleteShowcaseComponent.prototype.ngOnInit = function () {
        this.options = ['Option 1', 'Option 2', 'Option 3'];
        this.filteredOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.options);
    };
    AutocompleteShowcaseComponent.prototype.filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (optionValue) { return optionValue.toLowerCase().includes(filterValue); });
    };
    AutocompleteShowcaseComponent.prototype.getFilteredOptions = function (value) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (filterString) { return _this.filter(filterString); }));
    };
    AutocompleteShowcaseComponent.prototype.onChange = function () {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    };
    AutocompleteShowcaseComponent.prototype.onSelectionChange = function ($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    };
    AutocompleteShowcaseComponent.ɵfac = function AutocompleteShowcaseComponent_Factory(t) { return new (t || AutocompleteShowcaseComponent)(); };
    AutocompleteShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteShowcaseComponent, selectors: [["nb-autocomplete-showcase"]], viewQuery: function AutocompleteShowcaseComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        } }, decls: 8, vars: 4, consts: [["size", "small"], ["nbInput", "", "type", "text", "placeholder", "Enter value", 3, "nbAutocomplete", "input"], ["autoInput", ""], [3, "selectedChange"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutocompleteShowcaseComponent_Template_input_input_2_listener() { return ctx.onChange(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-autocomplete", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function AutocompleteShowcaseComponent_Template_nb_autocomplete_selectedChange_4_listener($event) { return ctx.onSelectionChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutocompleteShowcaseComponent_nb_option_6_Template, 2, 2, "nb-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.filteredOptions$));
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__["NbAutocompleteDirective"], _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
    return AutocompleteShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-autocomplete-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './autocomplete-showcase.component.html',
            }]
    }], null, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoInput']
        }] }); })();


/***/ }),

/***/ "qQah":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AutocompleteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteRoutingModule", function() { return AutocompleteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _autocomplete_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete-showcase.component */ "mFZk");
/* harmony import */ var _autocomplete_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-form.component */ "gYOm");
/* harmony import */ var _autocomplete_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete-group.component */ "yz/+");
/* harmony import */ var _autocomplete_custom_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autocomplete-custom-display.component */ "sRDW");
/* harmony import */ var _autocomplete_active_first_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete-active-first.component */ "iiBu");
/* harmony import */ var _autocomplete_disabled_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autocomplete-disabled.component */ "Ij/k");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var routes = [
    {
        path: 'autocomplete-showcase.component',
        component: _autocomplete_showcase_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteShowcaseComponent"],
    },
    {
        path: 'autocomplete-form.component',
        component: _autocomplete_form_component__WEBPACK_IMPORTED_MODULE_3__["AutocompleteFormComponent"],
    },
    {
        path: 'autocomplete-group.component',
        component: _autocomplete_group_component__WEBPACK_IMPORTED_MODULE_4__["AutocompleteGroupComponent"],
    },
    {
        path: 'autocomplete-custom-display.component',
        component: _autocomplete_custom_display_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteCustomDisplayComponent"],
    },
    {
        path: 'autocomplete-active-first.component',
        component: _autocomplete_active_first_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteActiveFirstComponent"],
    },
    {
        path: 'autocomplete-disabled.component',
        component: _autocomplete_disabled_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteDisabledComponent"],
    },
];
var AutocompleteRoutingModule = /** @class */ (function () {
    function AutocompleteRoutingModule() {
    }
    AutocompleteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutocompleteRoutingModule });
    AutocompleteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AutocompleteRoutingModule_Factory(t) { return new (t || AutocompleteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AutocompleteRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "sRDW":
/*!******************************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete-custom-display.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AutocompleteCustomDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteCustomDisplayComponent", function() { return AutocompleteCustomDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.directive */ "Tkqq");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.component */ "Ij6m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/option/option.component */ "vvKt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












function AutocompleteCustomDisplayComponent_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
} }
var AutocompleteCustomDisplayComponent = /** @class */ (function () {
    function AutocompleteCustomDisplayComponent() {
    }
    AutocompleteCustomDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = ['Option 1', 'Option 2', 'Option 3'];
        this.filteredOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.options);
        this.inputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredOptions$ = this.inputFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filterString) { return _this.filter(filterString); }));
    };
    AutocompleteCustomDisplayComponent.prototype.filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (optionValue) { return optionValue.toLowerCase().includes(filterValue); });
    };
    AutocompleteCustomDisplayComponent.prototype.viewHandle = function (value) {
        return value.toUpperCase();
    };
    AutocompleteCustomDisplayComponent.ɵfac = function AutocompleteCustomDisplayComponent_Factory(t) { return new (t || AutocompleteCustomDisplayComponent)(); };
    AutocompleteCustomDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteCustomDisplayComponent, selectors: [["nb-autocomplete-custom-display"]], decls: 7, vars: 6, consts: [["size", "small"], ["nbInput", "", "type", "text", "placeholder", "Enter value", 3, "formControl", "nbAutocomplete"], [3, "handleDisplayFn"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteCustomDisplayComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-autocomplete", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteCustomDisplayComponent_nb_option_5_Template, 2, 2, "nb-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.inputFormControl)("nbAutocomplete", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx.viewHandle);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.filteredOptions$));
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_9__["NbOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
    return AutocompleteCustomDisplayComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteCustomDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-autocomplete-custom-display',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './autocomplete-custom-display.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "yz/+":
/*!*********************************************************************************!*\
  !*** ./src/playground/with-layout/autocomplete/autocomplete-group.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AutocompleteGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteGroupComponent", function() { return AutocompleteGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.directive */ "Tkqq");
/* harmony import */ var _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/autocomplete/autocomplete.component */ "Ij6m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_option_option_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/option/option-group.component */ "qk+v");
/* harmony import */ var _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/theme/components/option/option.component */ "vvKt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













function AutocompleteGroupComponent_nb_option_group_5_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
} }
function AutocompleteGroupComponent_nb_option_group_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteGroupComponent_nb_option_group_5_nb_option_1_Template, 2, 2, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", group_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r2.children);
} }
var AutocompleteGroupComponent = /** @class */ (function () {
    function AutocompleteGroupComponent() {
    }
    AutocompleteGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groups = [
            {
                name: 'Group 1',
                children: ['Option 11', 'Option 12', 'Option 13'],
            },
            {
                name: 'Group 2',
                children: ['Option 21', 'Option 22', 'Option 23'],
            },
            {
                name: 'Group 3',
                children: ['Option 31', 'Option 32', 'Option 33'],
            }
        ];
        this.filteredGroups$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.groups);
        this.inputFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredGroups$ = this.inputFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (filterString) { return _this.filter(filterString); }));
    };
    AutocompleteGroupComponent.prototype.filterChildren = function (children, filterValue) {
        return children.filter(function (optionValue) { return optionValue.toLowerCase().includes(filterValue); });
    };
    AutocompleteGroupComponent.prototype.filter = function (value) {
        var _this = this;
        var filterValue = value.toLowerCase();
        return this.groups
            .map(function (group) {
            return {
                name: group.name,
                children: _this.filterChildren(group.children, filterValue),
            };
        })
            .filter(function (group) { return group.children.length; });
    };
    AutocompleteGroupComponent.prototype.trackByFn = function (index, item) {
        return item.name;
    };
    AutocompleteGroupComponent.ɵfac = function AutocompleteGroupComponent_Factory(t) { return new (t || AutocompleteGroupComponent)(); };
    AutocompleteGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteGroupComponent, selectors: [["nb-autocomplete-group"]], decls: 7, vars: 6, consts: [["size", "medium"], ["nbInput", "", "type", "text", "placeholder", "Enter value", 3, "formControl", "nbAutocomplete"], ["auto", ""], [3, "title", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "title"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteGroupComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-autocomplete", null, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteGroupComponent_nb_option_group_5_Template, 2, 2, "nb-option-group", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.inputFormControl)("nbAutocomplete", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.filteredGroups$))("ngForTrackBy", ctx.trackByFn);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _framework_theme_components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _framework_theme_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _framework_theme_components_option_option_group_component__WEBPACK_IMPORTED_MODULE_9__["NbOptionGroupComponent"], _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_10__["NbOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
    return AutocompleteGroupComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-autocomplete-group',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './autocomplete-group.component.html',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=autocomplete-autocomplete-module.js.map