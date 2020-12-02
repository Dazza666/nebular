(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-field-form-field-module"],{

/***/ "/nMg":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/form-field/form-field.module.ts ***!
  \********************************************************************/
/*! exports provided: FormFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldModule", function() { return FormFieldModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _form_field_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-field-routing.module */ "lPa0");
/* harmony import */ var _form_field_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-field-showcase.component */ "fKWA");
/* harmony import */ var _form_field_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-field-password.component */ "V7MJ");
/* harmony import */ var _form_field_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-field-input.component */ "5W/5");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var FormFieldModule = /** @class */ (function () {
    function FormFieldModule() {
    }
    FormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormFieldModule });
    FormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormFieldModule_Factory(t) { return new (t || FormFieldModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                _form_field_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormFieldRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return FormFieldModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormFieldModule, { declarations: [_form_field_showcase_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldShowcaseComponent"],
        _form_field_password_component__WEBPACK_IMPORTED_MODULE_5__["FormFieldPasswordComponent"],
        _form_field_input_component__WEBPACK_IMPORTED_MODULE_6__["FormFieldInputComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _form_field_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormFieldRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _form_field_showcase_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldShowcaseComponent"],
                    _form_field_password_component__WEBPACK_IMPORTED_MODULE_5__["FormFieldPasswordComponent"],
                    _form_field_input_component__WEBPACK_IMPORTED_MODULE_6__["FormFieldInputComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                    _form_field_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormFieldRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "5W/5":
/*!*****************************************************************************!*\
  !*** ./src/playground/with-layout/form-field/form-field-input.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormFieldInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldInputComponent", function() { return FormFieldInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/form-field/form-field.component */ "7C7g");
/* harmony import */ var _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/icon/icon.component */ "FuSZ");
/* harmony import */ var _framework_theme_components_form_field_prefix_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/form-field/prefix.directive */ "HD+4");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");







var FormFieldInputComponent = /** @class */ (function () {
    function FormFieldInputComponent() {
    }
    FormFieldInputComponent.ɵfac = function FormFieldInputComponent_Factory(t) { return new (t || FormFieldInputComponent)(); };
    FormFieldInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldInputComponent, selectors: [["ng-component"]], decls: 5, vars: 0, consts: [["size", "small"], ["nbPrefix", "", "icon", "at-outline", "pack", "eva"], ["type", "text", "nbInput", ""]], template: function FormFieldInputComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldComponent"], _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _framework_theme_components_form_field_prefix_directive__WEBPACK_IMPORTED_MODULE_4__["NbPrefixDirective"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"]], encapsulation: 2 });
    return FormFieldInputComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card size=\"small\">\n      <nb-card-body>\n\n        <nb-form-field>\n          <nb-icon nbPrefix icon=\"at-outline\" pack=\"eva\"></nb-icon>\n          <input type=\"text\" nbInput>\n        </nb-form-field>\n\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "V7MJ":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/form-field/form-field-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: FormFieldPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldPasswordComponent", function() { return FormFieldPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/form-field/form-field.component */ "7C7g");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_form_field_suffix_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/form-field/suffix.directive */ "uLhn");
/* harmony import */ var _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/icon/icon.component */ "FuSZ");








var FormFieldPasswordComponent = /** @class */ (function () {
    function FormFieldPasswordComponent() {
        this.showPassword = true;
    }
    FormFieldPasswordComponent.prototype.getInputType = function () {
        if (this.showPassword) {
            return 'text';
        }
        return 'password';
    };
    FormFieldPasswordComponent.prototype.toggleShowPassword = function () {
        this.showPassword = !this.showPassword;
    };
    FormFieldPasswordComponent.ɵfac = function FormFieldPasswordComponent_Factory(t) { return new (t || FormFieldPasswordComponent)(); };
    FormFieldPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldPasswordComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [["size", "small"], ["nbInput", "", 3, "type"], ["nbSuffix", "", "nbButton", "", "ghost", "", 3, "click"], ["pack", "eva", 3, "icon"]], template: function FormFieldPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFieldPasswordComponent_Template_button_click_4_listener() { return ctx.toggleShowPassword(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.getInputType());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.showPassword ? "eye-outline" : "eye-off-2-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.showPassword ? "hide password" : "show password");
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _framework_theme_components_form_field_suffix_directive__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["NbIconComponent"]], encapsulation: 2 });
    return FormFieldPasswordComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n   <nb-card size=\"small\">\n     <nb-card-body>\n\n       <nb-form-field>\n         <input [type]=\"getInputType()\" nbInput>\n         <button nbSuffix nbButton ghost (click)=\"toggleShowPassword()\">\n           <nb-icon [icon]=\"showPassword ? 'eye-outline' : 'eye-off-2-outline'\"\n                    pack=\"eva\"\n                    [attr.aria-label]=\"showPassword ? 'hide password' : 'show password'\">\n           </nb-icon>\n         </button>\n       </nb-form-field>\n\n     </nb-card-body>\n   </nb-card>\n ",
            }]
    }], null, null); })();


/***/ }),

/***/ "fKWA":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/form-field/form-field-showcase.component.ts ***!
  \********************************************************************************/
/*! exports provided: FormFieldShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldShowcaseComponent", function() { return FormFieldShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/form-field/form-field.component */ "7C7g");
/* harmony import */ var _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/icon/icon.component */ "FuSZ");
/* harmony import */ var _framework_theme_components_form_field_prefix_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/form-field/prefix.directive */ "HD+4");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_form_field_suffix_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/form-field/suffix.directive */ "uLhn");
/* harmony import */ var _framework_theme_components_select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/select/select.component */ "iNKj");
/* harmony import */ var _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/option/option.component */ "vvKt");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var FormFieldShowcaseComponent = /** @class */ (function () {
    function FormFieldShowcaseComponent() {
    }
    FormFieldShowcaseComponent.ɵfac = function FormFieldShowcaseComponent_Factory(t) { return new (t || FormFieldShowcaseComponent)(); };
    FormFieldShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldShowcaseComponent, selectors: [["form-field-showcase-component"]], decls: 12, vars: 0, consts: [[1, "example-items-col"], ["nbPrefix", "", "icon", "star", "pack", "eva"], ["nbInput", "", "type", "text"], ["nbSuffix", "", "icon", "star", "pack", "eva"]], template: function FormFieldShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nb-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldComponent"], _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _framework_theme_components_form_field_prefix_directive__WEBPACK_IMPORTED_MODULE_4__["NbPrefixDirective"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _framework_theme_components_form_field_suffix_directive__WEBPACK_IMPORTED_MODULE_6__["NbSuffixDirective"], _framework_theme_components_select_select_component__WEBPACK_IMPORTED_MODULE_7__["NbSelectComponent"], _framework_theme_components_option_option_component__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"]], encapsulation: 2 });
    return FormFieldShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-field-showcase-component',
                template: "\n    <nb-card>\n      <nb-card-body class=\"example-items-col\">\n\n        <nb-form-field>\n          <nb-icon nbPrefix icon=\"star\" pack=\"eva\"></nb-icon>\n          <input nbInput type=\"text\">\n          <nb-icon nbSuffix icon=\"star\" pack=\"eva\"></nb-icon>\n        </nb-form-field>\n\n        <nb-form-field>\n          <nb-icon nbPrefix icon=\"star\" pack=\"eva\"></nb-icon>\n          <nb-select>\n            <nb-option>1</nb-option>\n          </nb-select>\n          <nb-icon nbSuffix icon=\"star\" pack=\"eva\"></nb-icon>\n        </nb-form-field>\n\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "lPa0":
/*!****************************************************************************!*\
  !*** ./src/playground/with-layout/form-field/form-field-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FormFieldRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldRoutingModule", function() { return FormFieldRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_field_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field-showcase.component */ "fKWA");
/* harmony import */ var _form_field_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-field-password.component */ "V7MJ");
/* harmony import */ var _form_field_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-field-input.component */ "5W/5");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var routes = [
    {
        path: 'form-field-showcase.component',
        component: _form_field_showcase_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldShowcaseComponent"],
    },
    {
        path: 'form-field-password.component',
        component: _form_field_password_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldPasswordComponent"],
    },
    {
        path: 'form-field-input.component',
        component: _form_field_input_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldInputComponent"],
    },
];
var FormFieldRoutingModule = /** @class */ (function () {
    function FormFieldRoutingModule() {
    }
    FormFieldRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormFieldRoutingModule });
    FormFieldRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormFieldRoutingModule_Factory(t) { return new (t || FormFieldRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FormFieldRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormFieldRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=form-field-form-field-module.js.map