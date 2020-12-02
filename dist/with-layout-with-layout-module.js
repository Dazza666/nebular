(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["with-layout-with-layout-module"],{

/***/ "4cn0":
/*!**********************************************************!*\
  !*** ./src/playground/with-layout/with-layout.module.ts ***!
  \**********************************************************/
/*! exports provided: WithLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLayoutModule", function() { return WithLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _with_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-layout-routing.module */ "LG2o");
/* harmony import */ var _playground_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playground-layout.component */ "mO/8");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var WithLayoutModule = /** @class */ (function () {
    function WithLayoutModule() {
    }
    WithLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WithLayoutModule });
    WithLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WithLayoutModule_Factory(t) { return new (t || WithLayoutModule)(); }, imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"], _with_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["WithLayoutRoutingModule"]]] });
    return WithLayoutModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WithLayoutModule, { declarations: [_playground_layout_component__WEBPACK_IMPORTED_MODULE_3__["PlaygroundLayoutComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"], _with_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["WithLayoutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _playground_layout_component__WEBPACK_IMPORTED_MODULE_3__["PlaygroundLayoutComponent"],
                ],
                imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"], _with_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["WithLayoutRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "LG2o":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/with-layout-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: WithLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLayoutRoutingModule", function() { return WithLayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _playground_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playground-layout.component */ "mO/8");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: '',
        component: _playground_layout_component__WEBPACK_IMPORTED_MODULE_2__["PlaygroundLayoutComponent"],
        children: [
            {
                path: 'accordion',
                loadChildren: function () { return __webpack_require__.e(/*! import() | accordion-accordion-module */ "accordion-accordion-module").then(__webpack_require__.bind(null, /*! ./accordion/accordion.module */ "Vx/Z")).then(function (m) { return m.AccordionModule; }); },
            },
            {
                path: 'action',
                loadChildren: function () { return __webpack_require__.e(/*! import() | action-action-module */ "action-action-module").then(__webpack_require__.bind(null, /*! ./action/action.module */ "SLrz")).then(function (m) { return m.ActionModule; }); },
            },
            {
                path: 'alert',
                loadChildren: function () { return __webpack_require__.e(/*! import() | alert-alert-module */ "alert-alert-module").then(__webpack_require__.bind(null, /*! ./alert/alert.module */ "6MnM")).then(function (m) { return m.AlertModule; }); },
            },
            {
                path: 'autocomplete',
                loadChildren: function () { return __webpack_require__.e(/*! import() | autocomplete-autocomplete-module */ "autocomplete-autocomplete-module").then(__webpack_require__.bind(null, /*! ./autocomplete/autocomplete.module */ "0YmX")).then(function (m) { return m.AutocompleteModule; }); },
            },
            {
                path: 'badge',
                loadChildren: function () { return __webpack_require__.e(/*! import() | badge-badge-module */ "badge-badge-module").then(__webpack_require__.bind(null, /*! ./badge/badge.module */ "tx/T")).then(function (m) { return m.BadgeModule; }); },
            },
            {
                path: 'button',
                loadChildren: function () { return __webpack_require__.e(/*! import() | button-button-module */ "button-button-module").then(__webpack_require__.bind(null, /*! ./button/button.module */ "n3yr")).then(function (m) { return m.ButtonModule; }); },
            },
            {
                path: 'calendar',
                loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "XPUo")).then(function (m) { return m.CalendarModule; }); },
            },
            {
                path: 'calendar-kit',
                loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-kit-calendar-kit-module */ "calendar-kit-calendar-kit-module").then(__webpack_require__.bind(null, /*! ./calendar-kit/calendar-kit.module */ "zTG+")).then(function (m) { return m.CalendarKitModule; }); },
            },
            {
                path: 'card',
                loadChildren: function () { return Promise.all(/*! import() | card-card-module */[__webpack_require__.e("common"), __webpack_require__.e("card-card-module")]).then(__webpack_require__.bind(null, /*! ./card/card.module */ "pW8h")).then(function (m) { return m.CardModule; }); },
            },
            {
                path: 'chat',
                loadChildren: function () { return __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "/EDb")).then(function (m) { return m.ChatModule; }); },
            },
            {
                path: 'checkbox',
                loadChildren: function () { return __webpack_require__.e(/*! import() | checkbox-checkbox-module */ "checkbox-checkbox-module").then(__webpack_require__.bind(null, /*! ./checkbox/checkbox.module */ "CR9i")).then(function (m) { return m.CheckboxModule; }); },
            },
            {
                path: 'datepicker',
                loadChildren: function () { return __webpack_require__.e(/*! import() | datepicker-datepicker-module */ "datepicker-datepicker-module").then(__webpack_require__.bind(null, /*! ./datepicker/datepicker.module */ "lBG2")).then(function (m) { return m.DatepickerModule; }); },
            },
            {
                path: 'timepicker',
                loadChildren: function () { return __webpack_require__.e(/*! import() | timepicker-timepicker-module */ "timepicker-timepicker-module").then(__webpack_require__.bind(null, /*! ./timepicker/timepicker.module */ "eT8c")).then(function (m) { return m.TimepickerModule; }); },
            },
            {
                path: 'dialog',
                loadChildren: function () { return __webpack_require__.e(/*! import() | dialog-dialog-module */ "dialog-dialog-module").then(__webpack_require__.bind(null, /*! ./dialog/dialog.module */ "yQ12")).then(function (m) { return m.DialogModule; }); },
            },
            {
                path: 'flip-card',
                loadChildren: function () { return __webpack_require__.e(/*! import() | flip-card-flip-card-module */ "flip-card-flip-card-module").then(__webpack_require__.bind(null, /*! ./flip-card/flip-card.module */ "mQ2v")).then(function (m) { return m.FlipCardModule; }); },
            },
            {
                path: 'infinite-list',
                loadChildren: function () { return __webpack_require__.e(/*! import() | infinite-list-infinite-list-module */ "infinite-list-infinite-list-module").then(__webpack_require__.bind(null, /*! ./infinite-list/infinite-list.module */ "YLNe")).then(function (m) { return m.InfiniteListModule; }); },
            },
            {
                path: 'input',
                loadChildren: function () { return __webpack_require__.e(/*! import() | input-input-module */ "input-input-module").then(__webpack_require__.bind(null, /*! ./input/input.module */ "LTGu")).then(function (m) { return m.InputModule; }); },
            },
            {
                path: 'list',
                loadChildren: function () { return Promise.all(/*! import() | list-list-module */[__webpack_require__.e("common"), __webpack_require__.e("list-list-module")]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "oWX/")).then(function (m) { return m.ListModule; }); },
            },
            {
                path: 'menu',
                loadChildren: function () { return __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ./menu/menu.module */ "cJCJ")).then(function (m) { return m.MenuModule; }); },
            },
            {
                path: 'overlay',
                loadChildren: function () { return __webpack_require__.e(/*! import() | overlay-overlay-module */ "overlay-overlay-module").then(__webpack_require__.bind(null, /*! ./overlay/overlay.module */ "LVf3")).then(function (m) { return m.OverlayModule; }); },
            },
            {
                path: 'popover',
                loadChildren: function () { return __webpack_require__.e(/*! import() | popover-popover-module */ "popover-popover-module").then(__webpack_require__.bind(null, /*! ./popover/popover.module */ "zTZc")).then(function (m) { return m.PopoverModule; }); },
            },
            {
                path: 'progress-bar',
                loadChildren: function () { return __webpack_require__.e(/*! import() | progress-bar-progress-bar-module */ "progress-bar-progress-bar-module").then(__webpack_require__.bind(null, /*! ./progress-bar/progress-bar.module */ "h1SY")).then(function (m) { return m.ProgressBarModule; }); },
            },
            {
                path: 'radio',
                loadChildren: function () { return __webpack_require__.e(/*! import() | radio-radio-module */ "radio-radio-module").then(__webpack_require__.bind(null, /*! ./radio/radio.module */ "PdiC")).then(function (m) { return m.RadioModule; }); },
            },
            {
                path: 'reveal-card',
                loadChildren: function () { return __webpack_require__.e(/*! import() | reveal-card-reveal-card-module */ "reveal-card-reveal-card-module").then(__webpack_require__.bind(null, /*! ./reveal-card/reveal-card.module */ "bqhO")).then(function (m) { return m.RevealCardModule; }); },
            },
            {
                path: 'select',
                loadChildren: function () { return __webpack_require__.e(/*! import() | select-select-module */ "select-select-module").then(__webpack_require__.bind(null, /*! ./select/select.module */ "m67o")).then(function (m) { return m.SelectModule; }); },
            },
            {
                path: 'spinner',
                loadChildren: function () { return __webpack_require__.e(/*! import() | spinner-spinner-module */ "spinner-spinner-module").then(__webpack_require__.bind(null, /*! ./spinner/spinner.module */ "7iqs")).then(function (m) { return m.SpinnerModule; }); },
            },
            {
                path: 'stepper',
                loadChildren: function () { return __webpack_require__.e(/*! import() | stepper-stepper-module */ "stepper-stepper-module").then(__webpack_require__.bind(null, /*! ./stepper/stepper.module */ "sTDk")).then(function (m) { return m.StepperModule; }); },
            },
            {
                path: 'tabset',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tabset-tabset-module */ "tabset-tabset-module").then(__webpack_require__.bind(null, /*! ./tabset/tabset.module */ "7AKX")).then(function (m) { return m.TabsetModule; }); },
            },
            {
                path: 'toastr',
                loadChildren: function () { return __webpack_require__.e(/*! import() | toastr-toastr-module */ "toastr-toastr-module").then(__webpack_require__.bind(null, /*! ./toastr/toastr.module */ "1P2v")).then(function (m) { return m.ToastrModule; }); },
            },
            {
                path: 'tooltip',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tooltip-tooltip-module */ "tooltip-tooltip-module").then(__webpack_require__.bind(null, /*! ./tooltip/tooltip.module */ "Ofio")).then(function (m) { return m.TooltipModule; }); },
            },
            {
                path: 'user',
                loadChildren: function () { return __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "diYc")).then(function (m) { return m.UserModule; }); },
            },
            {
                path: 'window',
                loadChildren: function () { return __webpack_require__.e(/*! import() | window-window-module */ "window-window-module").then(__webpack_require__.bind(null, /*! ./window/window.module */ "+ygO")).then(function (m) { return m.WindowModule; }); },
            },
            {
                path: 'oauth2',
                loadChildren: function () { return Promise.all(/*! import() | oauth2-oauth2-module */[__webpack_require__.e("default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03"), __webpack_require__.e("oauth2-oauth2-module")]).then(__webpack_require__.bind(null, /*! ./oauth2/oauth2.module */ "cqwV")).then(function (m) { return m.OAuth2PlaygroundModule; }); },
            },
            {
                path: 'oauth2-password',
                loadChildren: function () { return Promise.all(/*! import() | oauth2-password-oauth2-password-module */[__webpack_require__.e("default~auth-auth-module~azure-azure-module~firebase-firebase-module~oauth2-oauth2-module~oauth2-pas~b1b2bb03"), __webpack_require__.e("oauth2-password-oauth2-password-module")]).then(__webpack_require__.bind(null, /*! ./oauth2-password/oauth2-password.module */ "7g0b"))
                    .then(function (m) { return m.OAuth2PasswordPlaygroundModule; }); },
            },
            {
                path: 'tree-grid',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tree-grid-tree-grid-module */ "tree-grid-tree-grid-module").then(__webpack_require__.bind(null, /*! ./tree-grid/tree-grid.module */ "FBsK")).then(function (m) { return m.TreeGridModule; }); },
            },
            {
                path: 'icon',
                loadChildren: function () { return __webpack_require__.e(/*! import() | icon-icon-module */ "icon-icon-module").then(__webpack_require__.bind(null, /*! ./icon/icon.module */ "X/Xx")).then(function (m) { return m.IconModule; }); },
            },
            {
                path: 'toggle',
                loadChildren: function () { return __webpack_require__.e(/*! import() | toggle-toggle-module */ "toggle-toggle-module").then(__webpack_require__.bind(null, /*! ./toggle/toggle.module */ "3leM")).then(function (m) { return m.ToggleModule; }); },
            },
            {
                path: 'form-field',
                loadChildren: function () { return __webpack_require__.e(/*! import() | form-field-form-field-module */ "form-field-form-field-module").then(__webpack_require__.bind(null, /*! ./form-field/form-field.module */ "/nMg")).then(function (m) { return m.FormFieldModule; }); },
            },
        ],
    },
];
var WithLayoutRoutingModule = /** @class */ (function () {
    function WithLayoutRoutingModule() {
    }
    WithLayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WithLayoutRoutingModule });
    WithLayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WithLayoutRoutingModule_Factory(t) { return new (t || WithLayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return WithLayoutRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WithLayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithLayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "mO/8":
/*!*******************************************************************!*\
  !*** ./src/playground/with-layout/playground-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlaygroundLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundLayoutComponent", function() { return PlaygroundLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var style_loader_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-loader!../styles/styles.scss */ "l9ht");
/* harmony import */ var style_loader_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(style_loader_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var PlaygroundLayoutComponent = /** @class */ (function () {
    function PlaygroundLayoutComponent(themeService) {
        this.themeService = themeService;
    }
    PlaygroundLayoutComponent.prototype.ngOnInit = function () {
        this.themeService.changeTheme('default');
    };
    PlaygroundLayoutComponent.ɵfac = function PlaygroundLayoutComponent_Factory(t) { return new (t || PlaygroundLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"])); };
    PlaygroundLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaygroundLayoutComponent, selectors: [["nb-playground-layout"]], decls: 3, vars: 0, template: function PlaygroundLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });
    return PlaygroundLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-playground-layout',
                template: "\n    <nb-layout>\n      <nb-layout-column>\n        <router-outlet></router-outlet>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=with-layout-with-layout-module.js.map