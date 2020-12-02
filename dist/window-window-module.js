(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["window-window-module"],{

/***/ "+ygO":
/*!************************************************************!*\
  !*** ./src/playground/with-layout/window/window.module.ts ***!
  \************************************************************/
/*! exports provided: WindowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowModule", function() { return WindowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _window_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-routing.module */ "IEzb");
/* harmony import */ var _template_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-window.component */ "v8Rk");
/* harmony import */ var _window_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window-showcase.component */ "QvDs");
/* harmony import */ var _windows_backdrop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./windows-backdrop.component */ "OKTD");
/* harmony import */ var _components_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form.component */ "7iL0");
/* harmony import */ var _framework_theme_components_window_window_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/window/window.module */ "WhSR");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var WindowModule = /** @class */ (function () {
    function WindowModule() {
    }
    WindowModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WindowModule });
    WindowModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WindowModule_Factory(t) { return new (t || WindowModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                _window_routing_module__WEBPACK_IMPORTED_MODULE_2__["WindowRoutingModule"],
            ]] });
    return WindowModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WindowModule, { declarations: [_template_window_component__WEBPACK_IMPORTED_MODULE_3__["TemplateWindowComponent"],
        _window_showcase_component__WEBPACK_IMPORTED_MODULE_4__["WindowShowcaseComponent"],
        _windows_backdrop_component__WEBPACK_IMPORTED_MODULE_5__["WindowsBackdropComponent"],
        _components_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]], imports: [_framework_theme_components_window_window_module__WEBPACK_IMPORTED_MODULE_7__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
        _window_routing_module__WEBPACK_IMPORTED_MODULE_2__["WindowRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _template_window_component__WEBPACK_IMPORTED_MODULE_3__["TemplateWindowComponent"],
                    _window_showcase_component__WEBPACK_IMPORTED_MODULE_4__["WindowShowcaseComponent"],
                    _windows_backdrop_component__WEBPACK_IMPORTED_MODULE_5__["WindowsBackdropComponent"],
                    _components_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                    _window_routing_module__WEBPACK_IMPORTED_MODULE_2__["WindowRoutingModule"],
                ],
                entryComponents: [_components_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "7iL0":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/window/components/form.component.ts ***!
  \************************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/input/input.directive */ "Dfz9");





var FormComponent = /** @class */ (function () {
    function FormComponent(windowRef) {
        this.windowRef = windowRef;
    }
    FormComponent.prototype.close = function () {
        this.windowRef.close();
    };
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowRef"])); };
    FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [[1, "form"], ["for", "subject"], ["nbInput", "", "id", "subject", "type", "text"], ["for", "text", 1, "text-label"], ["nbInput", "", "id", "text"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"]], encapsulation: 2 });
    return FormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <form class=\"form\">\n      <label for=\"subject\">Subject:</label>\n      <input nbInput id=\"subject\" type=\"text\">\n\n      <label class=\"text-label\" for=\"text\">Text:</label>\n      <textarea nbInput id=\"text\"></textarea>\n    </form>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowRef"] }]; }, null); })();


/***/ }),

/***/ "IEzb":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/window/window-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: WindowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRoutingModule", function() { return WindowRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _template_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-window.component */ "v8Rk");
/* harmony import */ var _window_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./window-showcase.component */ "QvDs");
/* harmony import */ var _windows_backdrop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./windows-backdrop.component */ "OKTD");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var routes = [
    {
        path: 'template-window.component',
        component: _template_window_component__WEBPACK_IMPORTED_MODULE_2__["TemplateWindowComponent"],
    },
    {
        path: 'window-showcase.component',
        component: _window_showcase_component__WEBPACK_IMPORTED_MODULE_3__["WindowShowcaseComponent"],
    },
    {
        path: 'windows-backdrop.component',
        component: _windows_backdrop_component__WEBPACK_IMPORTED_MODULE_4__["WindowsBackdropComponent"],
    },
];
var WindowRoutingModule = /** @class */ (function () {
    function WindowRoutingModule() {
    }
    WindowRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WindowRoutingModule });
    WindowRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WindowRoutingModule_Factory(t) { return new (t || WindowRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return WindowRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WindowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "OKTD":
/*!*************************************************************************!*\
  !*** ./src/playground/with-layout/window/windows-backdrop.component.ts ***!
  \*************************************************************************/
/*! exports provided: WindowsBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsBackdropComponent", function() { return WindowsBackdropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var _c0 = ["escClose"];
var _c1 = ["disabledEsc"];
function WindowsBackdropComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Disabled close on escape click. ");
} }
function WindowsBackdropComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Click escape to close. ");
} }
var WindowsBackdropComponent = /** @class */ (function () {
    function WindowsBackdropComponent(windowService) {
        this.windowService = windowService;
    }
    WindowsBackdropComponent.prototype.openWindowWithBackdrop = function () {
        this.windowService.open(this.escCloseTemplate, { title: 'Window with backdrop', hasBackdrop: true });
    };
    WindowsBackdropComponent.prototype.openWindowWithoutBackdrop = function () {
        this.windowService.open(this.disabledEscTemplate, { title: 'Window without backdrop', hasBackdrop: false, closeOnEsc: false });
    };
    WindowsBackdropComponent.ɵfac = function WindowsBackdropComponent_Factory(t) { return new (t || WindowsBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"])); };
    WindowsBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WindowsBackdropComponent, selectors: [["ng-component"]], viewQuery: function WindowsBackdropComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.escCloseTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.disabledEscTemplate = _t.first);
        } }, decls: 8, vars: 0, consts: [["nbButton", "", 3, "click"], ["disabledEsc", ""], ["escClose", ""]], template: function WindowsBackdropComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowsBackdropComponent_Template_button_click_0_listener() { return ctx.openWindowWithBackdrop(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open window with backdrop");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowsBackdropComponent_Template_button_click_2_listener() { return ctx.openWindowWithoutBackdrop(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Open window without backdrop");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WindowsBackdropComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WindowsBackdropComponent_ng_template_6_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 400px;\n}\n\n  .form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n  .form .text-label {\n  margin-top: 1.5rem;\n}\n\nbutton[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3dpbmRvdy93aW5kb3cuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3dpbmRvdy93aW5kb3cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAudGV4dC1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG59XG5cbmJ1dHRvbiArIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuIl19 */"] });
    return WindowsBackdropComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowsBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <button (click)=\"openWindowWithBackdrop()\" nbButton>Open window with backdrop</button>\n    <button (click)=\"openWindowWithoutBackdrop()\" nbButton>Open window without backdrop</button>\n\n    <ng-template #disabledEsc>\n      Disabled close on escape click.\n    </ng-template>\n    <ng-template #escClose>\n      Click escape to close.\n    </ng-template>\n  ",
                styleUrls: ['./window.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"] }]; }, { escCloseTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['escClose', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], disabledEscTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['disabledEsc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }] }); })();


/***/ }),

/***/ "QvDs":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/window/window-showcase.component.ts ***!
  \************************************************************************/
/*! exports provided: WindowShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowShowcaseComponent", function() { return WindowShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form.component */ "7iL0");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var WindowShowcaseComponent = /** @class */ (function () {
    function WindowShowcaseComponent(windowService) {
        this.windowService = windowService;
    }
    WindowShowcaseComponent.prototype.openWindow = function () {
        this.windowService.open(_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], { title: "Window" });
    };
    WindowShowcaseComponent.ɵfac = function WindowShowcaseComponent_Factory(t) { return new (t || WindowShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"])); };
    WindowShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WindowShowcaseComponent, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function WindowShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowShowcaseComponent_Template_button_click_0_listener() { return ctx.openWindow(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open window");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 400px;\n}\n\n  .form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n  .form .text-label {\n  margin-top: 1.5rem;\n}\n\nbutton[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3dpbmRvdy93aW5kb3cuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3dpbmRvdy93aW5kb3cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAudGV4dC1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG59XG5cbmJ1dHRvbiArIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuIl19 */"] });
    return WindowShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "<button (click)=\"openWindow()\" nbButton>Open window</button>",
                styleUrls: ['./window.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"] }]; }, null); })();


/***/ }),

/***/ "v8Rk":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/window/template-window.component.ts ***!
  \************************************************************************/
/*! exports provided: TemplateWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateWindowComponent", function() { return TemplateWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");





var _c0 = ["contentTemplate"];
function TemplateWindowComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Here is the text provided via config: \"", data_r2.text, "\"");
} }
var TemplateWindowComponent = /** @class */ (function () {
    function TemplateWindowComponent(windowService) {
        this.windowService = windowService;
    }
    TemplateWindowComponent.prototype.openWindow = function () {
        this.windowService.open(this.contentTemplate, { title: 'Window content from template', context: { text: 'some text to pass into template' } });
    };
    TemplateWindowComponent.ɵfac = function TemplateWindowComponent_Factory(t) { return new (t || TemplateWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"])); };
    TemplateWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateWindowComponent, selectors: [["ng-component"]], viewQuery: function TemplateWindowComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
        } }, decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"], ["contentTemplate", ""]], template: function TemplateWindowComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateWindowComponent_Template_button_click_0_listener() { return ctx.openWindow(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open window");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TemplateWindowComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 400px;\n}\n\n  .form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n  .form .text-label {\n  margin-top: 1.5rem;\n}\n\nbutton[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3dpbmRvdy93aW5kb3cuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3dpbmRvdy93aW5kb3cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuYi1sYXlvdXQtY29sdW1uIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAudGV4dC1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG59XG5cbmJ1dHRvbiArIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuIl19 */"] });
    return TemplateWindowComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <button (click)=\"openWindow()\" nbButton>Open window</button>\n\n    <ng-template #contentTemplate let-data>\n      <p>Here is the text provided via config: \"{{ data.text }}\"</p>\n    </ng-template>\n  ",
                styleUrls: ['./window.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"] }]; }, { contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentTemplate']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=window-window-module.js.map