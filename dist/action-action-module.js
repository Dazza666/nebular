(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["action-action-module"],{

/***/ "CDSu":
/*!*********************************************************************!*\
  !*** ./src/playground/with-layout/action/action-sizes.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActionSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSizesComponent", function() { return ActionSizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/actions/actions.component */ "ZbP8");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





function ActionSizesComponent_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-actions", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-action", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-action", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-action", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-action", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Some Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var size_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", size_r1);
} }
var ActionSizesComponent = /** @class */ (function () {
    function ActionSizesComponent() {
        this.sizes = ['tiny', 'small', 'medium', 'large', 'giant'];
    }
    ActionSizesComponent.ɵfac = function ActionSizesComponent_Factory(t) { return new (t || ActionSizesComponent)(); };
    ActionSizesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionSizesComponent, selectors: [["nb-action-sizes"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "size"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"]], template: function ActionSizesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ActionSizesComponent_nb_card_0_Template, 9, 1, "nb-card", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizes);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"]], encapsulation: 2, changeDetection: 0 });
    return ActionSizesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionSizesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-action-sizes',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './action-sizes.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "CyvK":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/action/action-showcase.component.ts ***!
  \************************************************************************/
/*! exports provided: ActionShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionShowcaseComponent", function() { return ActionShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/actions/actions.component */ "ZbP8");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ActionShowcaseComponent = /** @class */ (function () {
    function ActionShowcaseComponent() {
        this.disabledIconConfig = { icon: 'settings-2-outline', pack: 'eva' };
    }
    ActionShowcaseComponent.ɵfac = function ActionShowcaseComponent_Factory(t) { return new (t || ActionShowcaseComponent)(); };
    ActionShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionShowcaseComponent, selectors: [["nb-action-showcase"]], decls: 10, vars: 1, consts: [["size", "medium"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], ["disabled", "", 3, "icon"]], template: function ActionShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-actions", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-action", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-action", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-action", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Custom Action ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.disabledIconConfig);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionsComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionComponent"]], encapsulation: 2, changeDetection: 0 });
    return ActionShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-action-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './action-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "SLrz":
/*!************************************************************!*\
  !*** ./src/playground/with-layout/action/action.module.ts ***!
  \************************************************************/
/*! exports provided: ActionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionModule", function() { return ActionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _action_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-routing.module */ "hm2m");
/* harmony import */ var _action_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-badge.component */ "m27f");
/* harmony import */ var _action_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-showcase.component */ "CyvK");
/* harmony import */ var _action_sizes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-sizes.component */ "CDSu");
/* harmony import */ var _action_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-test.component */ "TMET");
/* harmony import */ var _action_width_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-width.component */ "SVkN");
/* harmony import */ var _action_dot_mode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-dot-mode.component */ "Xk1S");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var ActionModule = /** @class */ (function () {
    function ActionModule() {
    }
    ActionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ActionModule });
    ActionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ActionModule_Factory(t) { return new (t || ActionModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _action_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActionRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ]] });
    return ActionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActionModule, { declarations: [_action_badge_component__WEBPACK_IMPORTED_MODULE_4__["ActionBadgeComponent"],
        _action_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ActionShowcaseComponent"],
        _action_sizes_component__WEBPACK_IMPORTED_MODULE_6__["ActionSizesComponent"],
        _action_test_component__WEBPACK_IMPORTED_MODULE_7__["ActionTestComponent"],
        _action_width_component__WEBPACK_IMPORTED_MODULE_8__["ActionWidthComponent"],
        _action_dot_mode_component__WEBPACK_IMPORTED_MODULE_9__["ActionDotModeComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _action_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActionRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _action_badge_component__WEBPACK_IMPORTED_MODULE_4__["ActionBadgeComponent"],
                    _action_showcase_component__WEBPACK_IMPORTED_MODULE_5__["ActionShowcaseComponent"],
                    _action_sizes_component__WEBPACK_IMPORTED_MODULE_6__["ActionSizesComponent"],
                    _action_test_component__WEBPACK_IMPORTED_MODULE_7__["ActionTestComponent"],
                    _action_width_component__WEBPACK_IMPORTED_MODULE_8__["ActionWidthComponent"],
                    _action_dot_mode_component__WEBPACK_IMPORTED_MODULE_9__["ActionDotModeComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                    _action_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActionRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "SVkN":
/*!*********************************************************************!*\
  !*** ./src/playground/with-layout/action/action-width.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActionWidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionWidthComponent", function() { return ActionWidthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/actions/actions.component */ "ZbP8");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ActionWidthComponent = /** @class */ (function () {
    function ActionWidthComponent() {
    }
    ActionWidthComponent.ɵfac = function ActionWidthComponent_Factory(t) { return new (t || ActionWidthComponent)(); };
    ActionWidthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionWidthComponent, selectors: [["nb-action-width"]], decls: 5, vars: 0, consts: [["size", "small", "fullWidth", ""], ["icon", "search-outline"], ["icon", "power-outline"]], template: function ActionWidthComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-actions", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionsComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionComponent"]], encapsulation: 2, changeDetection: 0 });
    return ActionWidthComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionWidthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-action-width',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './action-width.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "TMET":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/action/action-test.component.ts ***!
  \********************************************************************/
/*! exports provided: ActionTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTestComponent", function() { return ActionTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/actions/actions.component */ "ZbP8");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var ActionTestComponent = /** @class */ (function () {
    function ActionTestComponent() {
    }
    ActionTestComponent.prototype.actionOnClick = function (event) {
        console.info(event);
    };
    ActionTestComponent.ɵfac = function ActionTestComponent_Factory(t) { return new (t || ActionTestComponent)(); };
    ActionTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionTestComponent, selectors: [["nb-action-test"]], decls: 61, vars: 0, consts: [["icon", "search-outline", 3, "click"], ["icon", "search-outline"], ["icon", "search-outline", "disabled", ""], ["inverse", ""], ["inverse", "", "size", "medium"], ["inverse", "", "size", "large"], ["size", "large"], ["badgeText", "29", "badgeStatus", "success", "badgePosition", "bottom left"], ["badgeText", "29", "badgeStatus", "danger", "badgePosition", "top left", "icon", "search-outline"], ["badgeText", "29", "badgeStatus", "warning", "badgePosition", "bottom right", "icon", "search-outline"], ["badgeText", "29", "badgeStatus", "success", "badgePosition", "bottom left", "icon", "search-outline"], ["badgeText", "29", "badgeStatus", "info", "badgePosition", "top right", "icon", "search-outline"], ["badgeText", "29", "badgeStatus", "info", "badgePosition", "top right", "icon", "search-outline", "disabled", ""], ["badgeText", "29"]], template: function ActionTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-action", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionTestComponent_Template_nb_action_click_3_listener() { return ctx.actionOnClick("first"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-user");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hello ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-actions", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-action", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionTestComponent_Template_nb_action_click_16_listener() { return ctx.actionOnClick("first"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nb-user");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Hello ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-actions", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-action", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionTestComponent_Template_nb_action_click_28_listener() { return ctx.actionOnClick("first"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nb-user");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Hello ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nb-actions", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-action", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionTestComponent_Template_nb_action_click_40_listener() { return ctx.actionOnClick("first"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "nb-user");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nb-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Hello ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nb-actions", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nb-action", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nb-user");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "nb-action", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "nb-action", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nb-action", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "nb-action", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nb-action", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nb-action", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Badge");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionsComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"]], encapsulation: 2 });
    return ActionTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-action-test',
                template: "\n    <nb-layout>\n      <nb-layout-header>\n        <nb-actions>\n          <nb-action icon=\"search-outline\" (click)=\"actionOnClick('first')\"></nb-action>\n          <nb-action icon=\"search-outline\"></nb-action>\n          <nb-action>\n            <nb-user></nb-user>\n          </nb-action>\n          <nb-action icon=\"search-outline\"></nb-action>\n          <nb-action icon=\"search-outline\"></nb-action>\n          <nb-action icon=\"search-outline\" disabled></nb-action>\n          <nb-action>\n            Hello\n          </nb-action>\n        </nb-actions>\n      </nb-layout-header>\n      <nb-layout-column>\n\n        <nb-card>\n          <nb-card-body>\n            <nb-actions inverse>\n              <nb-action icon=\"search-outline\" (click)=\"actionOnClick('first')\"></nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action>\n                <nb-user></nb-user>\n              </nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action icon=\"search-outline\" disabled></nb-action>\n              <nb-action>\n                Hello\n              </nb-action>\n            </nb-actions>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card>\n          <nb-card-body>\n            <nb-actions inverse size=\"medium\">\n              <nb-action icon=\"search-outline\" (click)=\"actionOnClick('first')\"></nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action>\n                <nb-user></nb-user>\n              </nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action icon=\"search-outline\" disabled></nb-action>\n              <nb-action>\n                Hello\n              </nb-action>\n            </nb-actions>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card>\n          <nb-card-body>\n            <nb-actions inverse size=\"large\">\n              <nb-action icon=\"search-outline\" (click)=\"actionOnClick('first')\"></nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action>\n                <nb-user></nb-user>\n              </nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action icon=\"search-outline\"></nb-action>\n              <nb-action icon=\"search-outline\" disabled></nb-action>\n              <nb-action>\n                Hello\n              </nb-action>\n            </nb-actions>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card>\n          <nb-card-body>\n            <nb-actions size=\"large\">\n              <nb-action\n                badgeText=\"29\"\n                badgeStatus=\"success\"\n                badgePosition=\"bottom left\">\n                <nb-user></nb-user>\n              </nb-action>\n              <nb-action\n                badgeText=\"29\"\n                badgeStatus=\"danger\"\n                badgePosition=\"top left\"\n                icon=\"search-outline\">\n              </nb-action>\n              <nb-action\n                badgeText=\"29\"\n                badgeStatus=\"warning\"\n                badgePosition=\"bottom right\"\n                icon=\"search-outline\">\n              </nb-action>\n              <nb-action\n                badgeText=\"29\"\n                badgeStatus=\"success\"\n                badgePosition=\"bottom left\"\n                icon=\"search-outline\">\n              </nb-action>\n              <nb-action\n                badgeText=\"29\"\n                badgeStatus=\"info\"\n                badgePosition=\"top right\"\n                icon=\"search-outline\">\n              </nb-action>\n              <nb-action\n                badgeText=\"29\"\n                badgeStatus=\"info\"\n                badgePosition=\"top right\"\n                icon=\"search-outline\"\n                disabled>\n              </nb-action>\n              <nb-action badgeText=\"29\">Badge</nb-action>\n            </nb-actions>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "Xk1S":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/action/action-dot-mode.component.ts ***!
  \************************************************************************/
/*! exports provided: ActionDotModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDotModeComponent", function() { return ActionDotModeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/actions/actions.component */ "ZbP8");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ActionDotModeComponent = /** @class */ (function () {
    function ActionDotModeComponent() {
    }
    ActionDotModeComponent.ɵfac = function ActionDotModeComponent_Factory(t) { return new (t || ActionDotModeComponent)(); };
    ActionDotModeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionDotModeComponent, selectors: [["nb-action-dot-mode"]], decls: 7, vars: 0, consts: [["size", "medium"], ["icon", "bell-outline", "badgeDot", "", "badgePosition", "top right", "badgeStatus", "danger"], ["icon", "person-outline", "badgeDot", "", "badgePosition", "top start", "badgeStatus", "warning"], ["icon", "email-outline", "badgeDot", "", "badgePosition", "top left", "badgeStatus", "danger"], ["icon", "calendar-outline", "badgeDot", "", "badgePosition", "top right", "badgeStatus", "info"]], template: function ActionDotModeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-actions", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-action", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-action", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionsComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionComponent"]], encapsulation: 2, changeDetection: 0 });
    return ActionDotModeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionDotModeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-action-dot-mode',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './action-dot-mode.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "hm2m":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/action/action-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ActionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionRoutingModule", function() { return ActionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _action_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-badge.component */ "m27f");
/* harmony import */ var _action_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-showcase.component */ "CyvK");
/* harmony import */ var _action_sizes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-sizes.component */ "CDSu");
/* harmony import */ var _action_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-test.component */ "TMET");
/* harmony import */ var _action_width_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-width.component */ "SVkN");
/* harmony import */ var _action_dot_mode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-dot-mode.component */ "Xk1S");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var routes = [
    {
        path: 'action-badge.component',
        component: _action_badge_component__WEBPACK_IMPORTED_MODULE_2__["ActionBadgeComponent"],
    },
    {
        path: 'action-showcase.component',
        component: _action_showcase_component__WEBPACK_IMPORTED_MODULE_3__["ActionShowcaseComponent"],
    },
    {
        path: 'action-sizes.component',
        component: _action_sizes_component__WEBPACK_IMPORTED_MODULE_4__["ActionSizesComponent"],
    },
    {
        path: 'action-test.component',
        component: _action_test_component__WEBPACK_IMPORTED_MODULE_5__["ActionTestComponent"],
    },
    {
        path: 'action-width.component',
        component: _action_width_component__WEBPACK_IMPORTED_MODULE_6__["ActionWidthComponent"],
    },
    {
        path: 'action-dot-mode.component',
        component: _action_dot_mode_component__WEBPACK_IMPORTED_MODULE_7__["ActionDotModeComponent"],
    },
];
var ActionRoutingModule = /** @class */ (function () {
    function ActionRoutingModule() {
    }
    ActionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ActionRoutingModule });
    ActionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ActionRoutingModule_Factory(t) { return new (t || ActionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ActionRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "m27f":
/*!*********************************************************************!*\
  !*** ./src/playground/with-layout/action/action-badge.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActionBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBadgeComponent", function() { return ActionBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/actions/actions.component */ "ZbP8");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var ActionBadgeComponent = /** @class */ (function () {
    function ActionBadgeComponent() {
    }
    ActionBadgeComponent.ɵfac = function ActionBadgeComponent_Factory(t) { return new (t || ActionBadgeComponent)(); };
    ActionBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionBadgeComponent, selectors: [["nb-action-badge"]], decls: 6, vars: 0, consts: [["size", "medium"], ["icon", "search-outline", "badgeText", "99+", "badgeStatus", "danger"], ["icon", "power-outline", "badgeText", "12", "badgePosition", "bottom right", "badgeStatus", "warning"], ["icon", "person-outline", "badgeText", "M", "badgePosition", "top right", "badgeStatus", "info"]], template: function ActionBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-actions", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-action", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-action", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-action", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionsComponent"], _framework_theme_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_2__["NbActionComponent"]], encapsulation: 2, changeDetection: 0 });
    return ActionBadgeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-action-badge',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './action-badge.component.html',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=action-action-module.js.map