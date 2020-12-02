(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabset-tabset-module"],{

/***/ "7AKX":
/*!************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset.module.ts ***!
  \************************************************************/
/*! exports provided: TabsetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetModule", function() { return TabsetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _tabset_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabset-routing.module */ "oTr7");
/* harmony import */ var _route_tabset_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-tabset-showcase.component */ "U9U8");
/* harmony import */ var _tabset_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabset-badge.component */ "cOaX");
/* harmony import */ var _tabset_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabset-icon.component */ "ebVm");
/* harmony import */ var _tabset_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabset-showcase.component */ "oMgl");
/* harmony import */ var _tabset_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabset-test.component */ "hWKW");
/* harmony import */ var _tabset_width_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabset-width.component */ "zKpX");
/* harmony import */ var _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/route-tabset-children.component */ "wk7b");
/* harmony import */ var _tabset_disabled_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabset-disabled.component */ "OR1g");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var TabsetModule = /** @class */ (function () {
    function TabsetModule() {
    }
    TabsetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TabsetModule });
    TabsetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TabsetModule_Factory(t) { return new (t || TabsetModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRouteTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _tabset_routing_module__WEBPACK_IMPORTED_MODULE_2__["TabsetRoutingModule"],
            ]] });
    return TabsetModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsetModule, { declarations: [_route_tabset_showcase_component__WEBPACK_IMPORTED_MODULE_3__["RouteTabsetShowcaseComponent"],
        _tabset_badge_component__WEBPACK_IMPORTED_MODULE_4__["TabsetBadgeComponent"],
        _tabset_icon_component__WEBPACK_IMPORTED_MODULE_5__["TabsetIconComponent"],
        _tabset_showcase_component__WEBPACK_IMPORTED_MODULE_6__["TabsetShowcaseComponent"],
        _tabset_test_component__WEBPACK_IMPORTED_MODULE_7__["TabsetTestComponent"],
        _tabset_width_component__WEBPACK_IMPORTED_MODULE_8__["TabsetWidthComponent"],
        _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_9__["RouteTabsetShowcaseChild1Component"],
        _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_9__["RouteTabsetShowcaseChild2Component"],
        _tabset_disabled_component__WEBPACK_IMPORTED_MODULE_10__["TabsetDisabledComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRouteTabsetModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _tabset_routing_module__WEBPACK_IMPORTED_MODULE_2__["TabsetRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _route_tabset_showcase_component__WEBPACK_IMPORTED_MODULE_3__["RouteTabsetShowcaseComponent"],
                    _tabset_badge_component__WEBPACK_IMPORTED_MODULE_4__["TabsetBadgeComponent"],
                    _tabset_icon_component__WEBPACK_IMPORTED_MODULE_5__["TabsetIconComponent"],
                    _tabset_showcase_component__WEBPACK_IMPORTED_MODULE_6__["TabsetShowcaseComponent"],
                    _tabset_test_component__WEBPACK_IMPORTED_MODULE_7__["TabsetTestComponent"],
                    _tabset_width_component__WEBPACK_IMPORTED_MODULE_8__["TabsetWidthComponent"],
                    _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_9__["RouteTabsetShowcaseChild1Component"],
                    _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_9__["RouteTabsetShowcaseChild2Component"],
                    _tabset_disabled_component__WEBPACK_IMPORTED_MODULE_10__["TabsetDisabledComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRouteTabsetModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _tabset_routing_module__WEBPACK_IMPORTED_MODULE_2__["TabsetRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "OR1g":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset-disabled.component.ts ***!
  \************************************************************************/
/*! exports provided: TabsetDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetDisabledComponent", function() { return TabsetDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var TabsetDisabledComponent = /** @class */ (function () {
    function TabsetDisabledComponent() {
    }
    TabsetDisabledComponent.ɵfac = function TabsetDisabledComponent_Factory(t) { return new (t || TabsetDisabledComponent)(); };
    TabsetDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsetDisabledComponent, selectors: [["nb-tabset-disabled"]], decls: 16, vars: 0, consts: [["tabTitle", "Users"], ["tabTitle", "Orders"], ["tabTitle", "Disabled Tab", "disabled", ""]], template: function TabsetDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"]], styles: ["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }"], changeDetection: 0 });
    return TabsetDisabledComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tabset-disabled',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './tabset-disabled.component.html',
                styles: ["\n    :host nb-tab {\n      padding: 1.25rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "U9U8":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/tabset/route-tabset-showcase.component.ts ***!
  \******************************************************************************/
/*! exports provided: RouteTabsetShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteTabsetShowcaseComponent", function() { return RouteTabsetShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_route_tabset_route_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/route-tabset/route-tabset.component */ "H5xO");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var RouteTabsetShowcaseComponent = /** @class */ (function () {
    function RouteTabsetShowcaseComponent() {
        this.tabs = [
            {
                title: 'Users',
                icon: 'person',
                route: './tab1',
            },
            {
                title: 'Orders',
                icon: 'paper-plane-outline',
                responsive: true,
                route: ['./tab2'],
            },
            {
                title: 'Transaction',
                icon: 'flash-outline',
                responsive: true,
                disabled: true,
            },
        ];
    }
    RouteTabsetShowcaseComponent.ɵfac = function RouteTabsetShowcaseComponent_Factory(t) { return new (t || RouteTabsetShowcaseComponent)(); };
    RouteTabsetShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteTabsetShowcaseComponent, selectors: [["nb-route-tabset-showcase"]], decls: 3, vars: 1, consts: [["fullWidth", "", 3, "tabs"]], template: function RouteTabsetShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-route-tabset", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.tabs);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_route_tabset_route_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbRouteTabsetComponent"]], encapsulation: 2 });
    return RouteTabsetShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteTabsetShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-route-tabset-showcase',
                template: "\n    <nb-card>\n      <nb-card-body>\n        <nb-route-tabset [tabs]=\"tabs\" fullWidth></nb-route-tabset>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "cOaX":
/*!*********************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset-badge.component.ts ***!
  \*********************************************************************/
/*! exports provided: TabsetBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetBadgeComponent", function() { return TabsetBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var TabsetBadgeComponent = /** @class */ (function () {
    function TabsetBadgeComponent() {
    }
    TabsetBadgeComponent.ɵfac = function TabsetBadgeComponent_Factory(t) { return new (t || TabsetBadgeComponent)(); };
    TabsetBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsetBadgeComponent, selectors: [["nb-tabset-badge"]], decls: 27, vars: 0, consts: [["tabTitle", "Users", "badgeText", "99+", "badgeStatus", "danger"], ["tabTitle", "Orders", "badgeText", "12", "badgePosition", "bottom right", "badgeStatus", "warning"], ["tabTitle", "Transactions", "badgeText", "new", "badgePosition", "top right", "badgeStatus", "success"], ["tabTitle", "Notifications", "badgeDot", "", "badgePosition", "center start", "badgeStatus", "danger"]], template: function TabsetBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-tab", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"]], styles: ["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }"], changeDetection: 0 });
    return TabsetBadgeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tabset-badge',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './tabset-badge.component.html',
                styles: ["\n    :host nb-tab {\n      padding: 1.25rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "ebVm":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset-icon.component.ts ***!
  \********************************************************************/
/*! exports provided: TabsetIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetIconComponent", function() { return TabsetIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var TabsetIconComponent = /** @class */ (function () {
    function TabsetIconComponent() {
        this.bellIconConfig = { icon: 'bell-outline', pack: 'eva' };
    }
    TabsetIconComponent.ɵfac = function TabsetIconComponent_Factory(t) { return new (t || TabsetIconComponent)(); };
    TabsetIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsetIconComponent, selectors: [["nb-tabset-icon"]], decls: 63, vars: 1, consts: [["tabIcon", "person-outline"], [3, "tabIcon"], ["tabIcon", "email-outline"], ["fullWidth", ""], ["tabIcon", "bell-outline"], ["tabTitle", "Users", "tabIcon", "person-outline", "responsive", ""], ["tabTitle", "Orders", "tabIcon", "bell-outline", "responsive", ""], ["tabTitle", "Transactions", "tabIcon", "email-outline", "responsive", ""]], template: function TabsetIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-tabset", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-tab", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nb-tab", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nb-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nb-tab", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIcon", ctx.bellIconConfig);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"]], styles: ["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }"], changeDetection: 0 });
    return TabsetIconComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tabset-icon',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './tabset-icon.component.html',
                styles: ["\n    :host nb-tab {\n      padding: 1.25rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "hWKW":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset-test.component.ts ***!
  \********************************************************************/
/*! exports provided: TabsetTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetTestComponent", function() { return TabsetTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var TabsetTestComponent = /** @class */ (function () {
    function TabsetTestComponent(router) {
        this.router = router;
    }
    TabsetTestComponent.prototype.changeTab = function ($event) {
        this.router.navigate(['tabset', 'tabset-test.component', $event.route]);
    };
    TabsetTestComponent.ɵfac = function TabsetTestComponent_Factory(t) { return new (t || TabsetTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    TabsetTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsetTestComponent, selectors: [["nb-tabset-test"]], decls: 95, vars: 2, consts: [["tabTitle", "Tab #1"], ["tabTitle", "Tab #2"], ["tabTitle", "Tab #3"], ["tabTitle", "Tab #2", 3, "active"], ["tabTitle", "Tab #3", 3, "active"], ["routeParam", "tab", 3, "changeTab"], ["tabTitle", "Tab #1", "route", "tab1"], ["tabTitle", "Tab #2", "route", "tab2"], ["tabTitle", "Tab #3", "route", "tab3"], ["fullWidth", ""], ["tabTitle", "Tab #1", "badgeText", "29"], ["tabTitle", "Tab #2", "badgeText", "29", "badgeStatus", "info", "badgePosition", "top left"], ["tabTitle", "Tab #3", "badgeText", "29", "badgeStatus", "success", "badgePosition", "bottom right"], ["tabTitle", "Tab #4", "badgeText", "29", "badgeStatus", "danger", "badgePosition", "bottom left"], ["tabTitle", "Tab #5", "badgeText", "29", "badgeStatus", "warning", "badgePosition", "bottom right"], ["tabTitle", "Tab #2", "badgeText", "29", "badgeStatus", "info", "badgePosition", "bottom right"], ["tabTitle", "Tab #3", "badgeText", "29", "badgeStatus", "success", "badgePosition", "top left"], ["tabTitle", "Tab #3", "lazyLoad", ""], ["tabTitle", "Tab #4", "lazyLoad", ""]], template: function TabsetTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-tab", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-tab", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-tabset", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeTab", function TabsetTestComponent_Template_nb_tabset_changeTab_30_listener($event) { return ctx.changeTab($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-tab", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-tab", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-tabset", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nb-tabset", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nb-tab", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nb-tab", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nb-tab", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nb-tab", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Content #4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nb-tab", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Content #5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nb-tab", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-tab", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nb-tab", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nb-tab", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Content #4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nb-tab", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Content #5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Content #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Content #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nb-tab", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Content #3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "nb-tab", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Content #4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", true);
        } }, directives: [_framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"]], styles: ["nb-tabset[_ngcontent-%COMP%] {\n        margin-bottom: 40px;\n      }"] });
    return TabsetTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tabset-test',
                styles: [
                    "\n      nb-tabset {\n        margin-bottom: 40px;\n      }\n    ",
                ],
                template: "\n    <nb-tabset>\n      <nb-tab tabTitle=\"Tab #1\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\">\n        <span>Content #3</span>\n      </nb-tab>\n    </nb-tabset>\n    <nb-tabset>\n      <nb-tab tabTitle=\"Tab #1\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\" [active]=\"true\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\">\n        <span>Content #3</span>\n      </nb-tab>\n    </nb-tabset>\n    <nb-tabset>\n      <nb-tab tabTitle=\"Tab #1\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\" [active]=\"true\">\n        <span>Content #3</span>\n      </nb-tab>\n    </nb-tabset>\n    <nb-tabset (changeTab)=\"changeTab($event)\" routeParam=\"tab\">\n      <nb-tab tabTitle=\"Tab #1\" route=\"tab1\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\" route=\"tab2\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\" route=\"tab3\">\n        <span>Content #3</span>\n      </nb-tab>\n    </nb-tabset>\n    <nb-tabset fullWidth>\n      <nb-tab tabTitle=\"Tab #1\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\">\n        <span>Content #3</span>\n      </nb-tab>\n    </nb-tabset>\n    <nb-tabset fullWidth>\n      <nb-tab tabTitle=\"Tab #1\" badgeText=\"29\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\"\n        badgeText=\"29\"\n        badgeStatus=\"info\"\n        badgePosition=\"top left\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\"\n        badgeText=\"29\"\n        badgeStatus=\"success\"\n        badgePosition=\"bottom right\">\n        <span>Content #3</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #4\"\n        badgeText=\"29\"\n        badgeStatus=\"danger\"\n        badgePosition=\"bottom left\">\n        <span>Content #4</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #5\"\n        badgeText=\"29\"\n        badgeStatus=\"warning\"\n        badgePosition=\"bottom right\">\n        <span>Content #5</span>\n      </nb-tab>\n    </nb-tabset>\n    <nb-tabset>\n      <nb-tab tabTitle=\"Tab #1\" badgeText=\"29\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\"\n        badgeText=\"29\"\n        badgeStatus=\"info\"\n        badgePosition=\"bottom right\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\"\n        badgeText=\"29\"\n        badgeStatus=\"success\"\n        badgePosition=\"top left\">\n        <span>Content #3</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #4\"\n        badgeText=\"29\"\n        badgeStatus=\"danger\"\n        badgePosition=\"bottom left\">\n        <span>Content #4</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #5\"\n        badgeText=\"29\"\n        badgeStatus=\"warning\"\n        badgePosition=\"bottom right\">\n        <span>Content #5</span>\n      </nb-tab>\n    </nb-tabset>\n    <nb-tabset>\n      <nb-tab tabTitle=\"Tab #1\">\n        <span>Content #1</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #2\">\n        <span>Content #2</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #3\" lazyLoad>\n        <span>Content #3</span>\n      </nb-tab>\n      <nb-tab tabTitle=\"Tab #4\" lazyLoad>\n        <span>Content #4</span>\n      </nb-tab>\n    </nb-tabset>\n  ",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "oMgl":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset-showcase.component.ts ***!
  \************************************************************************/
/*! exports provided: TabsetShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetShowcaseComponent", function() { return TabsetShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var TabsetShowcaseComponent = /** @class */ (function () {
    function TabsetShowcaseComponent() {
    }
    TabsetShowcaseComponent.ɵfac = function TabsetShowcaseComponent_Factory(t) { return new (t || TabsetShowcaseComponent)(); };
    TabsetShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsetShowcaseComponent, selectors: [["nb-tabset-showcase"]], decls: 21, vars: 0, consts: [["tabTitle", "Users"], ["tabTitle", "Orders"], ["tabTitle", "Transactions", "disabled", ""]], template: function TabsetShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tab", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"]], styles: ["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }"], changeDetection: 0 });
    return TabsetShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tabset-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './tabset-showcase.component.html',
                styles: ["\n    :host nb-tab {\n      padding: 1.25rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "oTr7":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TabsetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetRoutingModule", function() { return TabsetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/route-tabset-children.component */ "wk7b");
/* harmony import */ var _route_tabset_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-tabset-showcase.component */ "U9U8");
/* harmony import */ var _tabset_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabset-badge.component */ "cOaX");
/* harmony import */ var _tabset_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabset-icon.component */ "ebVm");
/* harmony import */ var _tabset_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabset-showcase.component */ "oMgl");
/* harmony import */ var _tabset_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabset-test.component */ "hWKW");
/* harmony import */ var _tabset_width_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabset-width.component */ "zKpX");
/* harmony import */ var _tabset_disabled_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabset-disabled.component */ "OR1g");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var routes = [
    {
        path: 'route-tabset-showcase.component',
        component: _route_tabset_showcase_component__WEBPACK_IMPORTED_MODULE_3__["RouteTabsetShowcaseComponent"],
        children: [
            {
                path: '',
                redirectTo: 'tab1',
                pathMatch: 'full',
            },
            {
                path: 'tab1',
                component: _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_2__["RouteTabsetShowcaseChild1Component"],
            },
            {
                path: 'tab2',
                component: _components_route_tabset_children_component__WEBPACK_IMPORTED_MODULE_2__["RouteTabsetShowcaseChild2Component"],
            },
        ],
    },
    {
        path: 'tabset-badge.component',
        component: _tabset_badge_component__WEBPACK_IMPORTED_MODULE_4__["TabsetBadgeComponent"],
    },
    {
        path: 'tabset-icon.component',
        component: _tabset_icon_component__WEBPACK_IMPORTED_MODULE_5__["TabsetIconComponent"],
    },
    {
        path: 'tabset-showcase.component',
        component: _tabset_showcase_component__WEBPACK_IMPORTED_MODULE_6__["TabsetShowcaseComponent"],
    },
    {
        path: 'tabset-test.component',
        component: _tabset_test_component__WEBPACK_IMPORTED_MODULE_7__["TabsetTestComponent"],
    },
    {
        path: 'tabset-test.component/:tab',
        component: _tabset_test_component__WEBPACK_IMPORTED_MODULE_7__["TabsetTestComponent"],
    },
    {
        path: 'tabset-width.component',
        component: _tabset_width_component__WEBPACK_IMPORTED_MODULE_8__["TabsetWidthComponent"],
    },
    {
        path: 'tabset-disabled.component',
        component: _tabset_disabled_component__WEBPACK_IMPORTED_MODULE_9__["TabsetDisabledComponent"],
    },
];
var TabsetRoutingModule = /** @class */ (function () {
    function TabsetRoutingModule() {
    }
    TabsetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TabsetRoutingModule });
    TabsetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TabsetRoutingModule_Factory(t) { return new (t || TabsetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TabsetRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wk7b":
/*!*****************************************************************************************!*\
  !*** ./src/playground/with-layout/tabset/components/route-tabset-children.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RouteTabsetShowcaseChild1Component, RouteTabsetShowcaseChild2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteTabsetShowcaseChild1Component", function() { return RouteTabsetShowcaseChild1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteTabsetShowcaseChild2Component", function() { return RouteTabsetShowcaseChild2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var _c0 = "[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }";
var RouteTabsetShowcaseChild1Component = /** @class */ (function () {
    function RouteTabsetShowcaseChild1Component() {
    }
    RouteTabsetShowcaseChild1Component.ɵfac = function RouteTabsetShowcaseChild1Component_Factory(t) { return new (t || RouteTabsetShowcaseChild1Component)(); };
    RouteTabsetShowcaseChild1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteTabsetShowcaseChild1Component, selectors: [["nb-route-tabset-showcase-child1"]], decls: 5, vars: 0, template: function RouteTabsetShowcaseChild1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [_c0] });
    return RouteTabsetShowcaseChild1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteTabsetShowcaseChild1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-route-tabset-showcase-child1',
                template: "<p>List of <strong>users</strong>.</p>",
                styles: ["\n    :host p {\n      padding: 1.25rem;\n    }\n  "],
            }]
    }], null, null); })();
var RouteTabsetShowcaseChild2Component = /** @class */ (function () {
    function RouteTabsetShowcaseChild2Component() {
    }
    RouteTabsetShowcaseChild2Component.ɵfac = function RouteTabsetShowcaseChild2Component_Factory(t) { return new (t || RouteTabsetShowcaseChild2Component)(); };
    RouteTabsetShowcaseChild2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RouteTabsetShowcaseChild2Component, selectors: [["nb-route-tabset-showcase-child2"]], decls: 5, vars: 0, template: function RouteTabsetShowcaseChild2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [_c0] });
    return RouteTabsetShowcaseChild2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteTabsetShowcaseChild2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-route-tabset-showcase-child2',
                template: "<p>List of <strong>orders</strong>.</p>",
                styles: ["\n    :host p {\n      padding: 1.25rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "zKpX":
/*!*********************************************************************!*\
  !*** ./src/playground/with-layout/tabset/tabset-width.component.ts ***!
  \*********************************************************************/
/*! exports provided: TabsetWidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetWidthComponent", function() { return TabsetWidthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tabset/tabset.component */ "T76v");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var TabsetWidthComponent = /** @class */ (function () {
    function TabsetWidthComponent() {
    }
    TabsetWidthComponent.ɵfac = function TabsetWidthComponent_Factory(t) { return new (t || TabsetWidthComponent)(); };
    TabsetWidthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsetWidthComponent, selectors: [["nb-tabset-width"]], decls: 15, vars: 0, consts: [["fullWidth", ""], ["tabTitle", "Users"], ["tabTitle", "Orders"]], template: function TabsetWidthComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tabset", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "List of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"], _framework_theme_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"]], styles: ["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n      padding: 1.25rem;\n    }"], changeDetection: 0 });
    return TabsetWidthComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetWidthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tabset-width',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './tabset-width.component.html',
                styles: ["\n    :host nb-tab {\n      padding: 1.25rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tabset-tabset-module.js.map