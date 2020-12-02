(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "0R99":
/*!*****************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-badge.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBadgeComponent", function() { return MenuBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.component */ "o4D4");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var MenuBadgeComponent = /** @class */ (function () {
    function MenuBadgeComponent() {
        this.items = [
            {
                title: 'Profile',
                expanded: true,
                badge: {
                    text: '30',
                    status: 'primary',
                },
                children: [
                    {
                        title: 'Messages',
                        badge: {
                            text: '99+',
                            status: 'danger',
                        },
                    },
                    {
                        title: 'Notifications',
                        badge: {
                            dotMode: true,
                            status: 'warning',
                        },
                    },
                    {
                        title: 'Emails',
                        badge: {
                            text: 'new',
                            status: 'success',
                        },
                    },
                ],
            },
        ];
    }
    MenuBadgeComponent.ɵfac = function MenuBadgeComponent_Factory(t) { return new (t || MenuBadgeComponent)(); };
    MenuBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuBadgeComponent, selectors: [["nb-menu-badge"]], decls: 2, vars: 1, consts: [[3, "items"]], template: function MenuBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"]], styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L21lbnUvbWVudS1iYWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUE7RUFDRSxZQUFBO0FBQUYiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvbWVudS9tZW51LWJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5uYi1jYXJkIHtcbiAgd2lkdGg6IDIwcmVtO1xufVxuIl19 */"], changeDetection: 0 });
    return MenuBadgeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-badge',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './menu-badge.component.html',
                styleUrls: ['./menu-badge.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "6SXV":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-autocollapse.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuAutoCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAutoCollapseComponent", function() { return MenuAutoCollapseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.component */ "o4D4");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var MenuAutoCollapseComponent = /** @class */ (function () {
    function MenuAutoCollapseComponent() {
        this.items = [
            {
                title: 'Profile',
                expanded: true,
                children: [
                    {
                        title: 'Change Password',
                    },
                    {
                        title: 'Privacy Policy',
                    },
                    {
                        title: 'Logout',
                    },
                ],
            },
            {
                title: 'Shopping Bag',
                children: [
                    {
                        title: 'First Product',
                    },
                    {
                        title: 'Second Product',
                    },
                    {
                        title: 'Third Product',
                    },
                ],
            },
            {
                title: 'Orders',
                children: [
                    {
                        title: 'First Order',
                    },
                    {
                        title: 'Second Order',
                    },
                    {
                        title: 'Third Order',
                    },
                ],
            },
        ];
    }
    MenuAutoCollapseComponent.ɵfac = function MenuAutoCollapseComponent_Factory(t) { return new (t || MenuAutoCollapseComponent)(); };
    MenuAutoCollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuAutoCollapseComponent, selectors: [["nb-menu-autocollapse"]], decls: 2, vars: 1, consts: [["autoCollapse", "true", 3, "items"]], template: function MenuAutoCollapseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"]], encapsulation: 2, changeDetection: 0 });
    return MenuAutoCollapseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuAutoCollapseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-autocollapse',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './menu-autocollapse.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "6hms":
/*!***********************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-link-params.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenuLinkParamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLinkParamsComponent", function() { return MenuLinkParamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.component */ "o4D4");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var MenuLinkParamsComponent = /** @class */ (function () {
    function MenuLinkParamsComponent() {
        this.items = [
            {
                title: 'Menu link with parameters',
                expanded: true,
                children: [
                    {
                        title: 'Goes into angular `routerLink`',
                        link: '',
                    },
                    {
                        title: 'Goes directly into `href` attribute',
                        url: '/example/menu/menu-link-params.component#some-location',
                    },
                    {
                        title: 'Menu item path match `prefix`',
                        link: '/example/menu/menu-link-params.component',
                        queryParams: { someUrlParam: 'true' },
                        pathMatch: 'prefix',
                    },
                    {
                        title: 'Will be opened in new window (target=`_blank`)',
                        url: 'https://github.com/akveo/nebular',
                        target: '_blank',
                    },
                    {
                        title: 'Menu item with icon',
                        link: '/example/menu/menu-link-params.component',
                        icon: 'search-outline',
                    },
                    {
                        title: 'Hidden menu item',
                        link: '',
                        hidden: true,
                    },
                ],
            },
        ];
    }
    MenuLinkParamsComponent.ɵfac = function MenuLinkParamsComponent_Factory(t) { return new (t || MenuLinkParamsComponent)(); };
    MenuLinkParamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuLinkParamsComponent, selectors: [["nb-menu-link-params"]], decls: 2, vars: 1, consts: [[3, "items"]], template: function MenuLinkParamsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"]], encapsulation: 2, changeDetection: 0 });
    return MenuLinkParamsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuLinkParamsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-link-params',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './menu-link-params.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "B/7M":
/*!***************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-service-items.ts ***!
  \***************************************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Home',
        link: '/example/menu/menu-service.component',
        icon: 'home-outline',
        home: true,
    },
    {
        title: 'User account',
        link: '/example/menu/menu-service.component/2',
        icon: 'person-outline',
    },
    {
        title: 'Shop',
        icon: 'shopping-cart-outline',
        expanded: true,
        children: [
            {
                title: 'Services',
                link: '/example/menu/menu-service.component/3/1',
                icon: 'settings-outline',
            },
            {
                title: 'Hardware',
                link: '/example/menu/menu-service.component/3/2',
                icon: 'bulb-outline',
            },
            {
                title: 'Software',
                icon: 'grid-outline',
                expanded: true,
                children: [
                    {
                        title: 'Open Source',
                        link: '/example/menu/menu-service.component/3/3/1',
                        icon: 'grid-outline',
                    },
                    {
                        title: 'Commercial',
                        link: '/example/menu/menu-service.component/3/3/2',
                        icon: 'grid-outline',
                        queryParams: { param: 2 },
                        fragment: 'fragment',
                    },
                ],
            },
        ],
    },
];


/***/ }),

/***/ "Qqi8":
/*!****************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_children_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-children.component */ "jB2+");
/* harmony import */ var _menu_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-showcase.component */ "VHn+");
/* harmony import */ var _menu_autocollapse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-autocollapse.component */ "6SXV");
/* harmony import */ var _menu_link_params_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-link-params.component */ "6hms");
/* harmony import */ var _menu_service_children__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-service-children */ "up73");
/* harmony import */ var _menu_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-service.component */ "a03+");
/* harmony import */ var _menu_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-badge.component */ "0R99");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var routes = [
    {
        path: 'menu-children.component',
        component: _menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuChildrenComponent"],
    },
    {
        path: 'menu-showcase.component',
        component: _menu_showcase_component__WEBPACK_IMPORTED_MODULE_3__["MenuShowcaseComponent"],
    },
    {
        path: 'menu-autocollapse.component',
        component: _menu_autocollapse_component__WEBPACK_IMPORTED_MODULE_4__["MenuAutoCollapseComponent"],
    },
    {
        path: 'menu-link-params.component',
        component: _menu_link_params_component__WEBPACK_IMPORTED_MODULE_5__["MenuLinkParamsComponent"],
    },
    {
        path: 'menu-badge.component',
        component: _menu_badge_component__WEBPACK_IMPORTED_MODULE_8__["MenuBadgeComponent"],
    },
    {
        path: 'menu-service.component',
        component: _menu_service_component__WEBPACK_IMPORTED_MODULE_7__["MenuServiceComponent"],
        children: [
            {
                path: '2',
                component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem2Component"],
            },
            {
                path: '3',
                component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem3Component"],
                children: [
                    {
                        path: '1',
                        component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem31Component"],
                    },
                    {
                        path: '2',
                        component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem32Component"],
                    },
                    {
                        path: '3',
                        component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem33Component"],
                        children: [
                            {
                                path: '1',
                                component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem331Component"],
                            },
                            {
                                path: '2',
                                component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem332Component"],
                            },
                        ],
                    },
                ],
            },
            {
                path: '',
                component: _menu_service_children__WEBPACK_IMPORTED_MODULE_6__["MenuServiceItem1Component"],
            },
        ],
    },
];
var MenuRoutingModule = /** @class */ (function () {
    function MenuRoutingModule() {
    }
    MenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuRoutingModule });
    MenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuRoutingModule_Factory(t) { return new (t || MenuRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MenuRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "VHn+":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-showcase.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuShowcaseComponent", function() { return MenuShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.component */ "o4D4");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var MenuShowcaseComponent = /** @class */ (function () {
    function MenuShowcaseComponent() {
        this.items = [
            {
                title: 'Profile',
                icon: 'person-outline',
            },
            {
                title: 'Change Password',
                icon: 'lock-outline',
            },
            {
                title: 'Privacy Policy',
                icon: { icon: 'checkmark-outline', pack: 'eva' },
            },
            {
                title: 'Logout',
                icon: 'unlock-outline',
            },
        ];
    }
    MenuShowcaseComponent.ɵfac = function MenuShowcaseComponent_Factory(t) { return new (t || MenuShowcaseComponent)(); };
    MenuShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuShowcaseComponent, selectors: [["nb-menu-showcase"]], decls: 2, vars: 1, consts: [[3, "items"]], template: function MenuShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"]], encapsulation: 2, changeDetection: 0 });
    return MenuShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './menu-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "a03+":
/*!*******************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-service.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceComponent", function() { return MenuServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _menu_service_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-service-items */ "B/7M");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.component */ "o4D4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var MenuServiceComponent = /** @class */ (function () {
    function MenuServiceComponent(menuService) {
        this.menuService = menuService;
        this.menuItems = _menu_service_items__WEBPACK_IMPORTED_MODULE_4__["MENU_ITEMS"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    MenuServiceComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    MenuServiceComponent.prototype.addMenuItem = function () {
        this.menuService.addItems([{
                title: '@nebular/theme',
                target: '_blank',
                icon: 'plus-outline',
                url: 'https://github.com/akveo/ngx-admin',
            }], 'menu');
    };
    MenuServiceComponent.prototype.collapseAll = function () {
        this.menuService.collapseAll('menu');
    };
    MenuServiceComponent.prototype.navigateHome = function () {
        this.menuService.navigateHome('menu');
    };
    MenuServiceComponent.prototype.getSelectedItem = function () {
        var _this = this;
        this.menuService.getSelectedItem('menu')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (menuBag) {
            _this.selectedItem = menuBag.item.title;
        });
    };
    MenuServiceComponent.ɵfac = function MenuServiceComponent_Factory(t) { return new (t || MenuServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"])); };
    MenuServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceComponent, selectors: [["nb-menu-services"]], decls: 14, vars: 2, consts: [["size", "giant"], ["tag", "menu", 3, "items"], [1, "control-panel"], [1, "h4"], ["nbButton", "", 3, "click"]], template: function MenuServiceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuServiceComponent_Template_button_click_6_listener() { return ctx.addMenuItem(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Menu Item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuServiceComponent_Template_button_click_8_listener() { return ctx.collapseAll(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Collapse all menu items");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuServiceComponent_Template_button_click_10_listener() { return ctx.navigateHome(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuServiceComponent_Template_button_click_12_listener() { return ctx.getSelectedItem(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Get Selected Item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected item: ", ctx.selectedItem, "");
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["NbMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"]], styles: ["[nbButton][_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.control-panel[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L21lbnUvbWVudS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtBQUVGIiwiZmlsZSI6InNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L21lbnUvbWVudS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW25iQnV0dG9uXSB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmgzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRyb2wtcGFuZWwge1xuICBwYWRkaW5nOiAycmVtO1xufVxuIl19 */"] });
    return MenuServiceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-services',
                template: "\n    <nb-card size=\"giant\">\n      <nb-menu tag=\"menu\" [items]=\"menuItems\"></nb-menu>\n      <div class=\"control-panel\">\n        <router-outlet></router-outlet>\n        <h3 class=\"h4\">Selected item: {{ selectedItem }}</h3>\n        <button nbButton (click)=\"addMenuItem()\">Add Menu Item</button>\n        <button nbButton (click)=\"collapseAll()\">Collapse all menu items</button>\n        <button nbButton (click)=\"navigateHome()\">Home</button>\n        <button nbButton (click)=\"getSelectedItem()\">Get Selected Item</button>\n      </div>\n    </nb-card>\n  ",
                styleUrls: ['./menu-service.component.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"] }]; }, null); })();


/***/ }),

/***/ "cJCJ":
/*!********************************************************!*\
  !*** ./src/playground/with-layout/menu/menu.module.ts ***!
  \********************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-routing.module */ "Qqi8");
/* harmony import */ var _menu_children_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-children.component */ "jB2+");
/* harmony import */ var _menu_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-showcase.component */ "VHn+");
/* harmony import */ var _menu_autocollapse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-autocollapse.component */ "6SXV");
/* harmony import */ var _menu_link_params_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-link-params.component */ "6hms");
/* harmony import */ var _menu_service_children__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-service-children */ "up73");
/* harmony import */ var _menu_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-service.component */ "a03+");
/* harmony import */ var _menu_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-badge.component */ "0R99");
/* harmony import */ var _framework_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.module */ "gM8K");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
    MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            ]] });
    return MenuModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_children_component__WEBPACK_IMPORTED_MODULE_3__["MenuChildrenComponent"],
        _menu_showcase_component__WEBPACK_IMPORTED_MODULE_4__["MenuShowcaseComponent"],
        _menu_autocollapse_component__WEBPACK_IMPORTED_MODULE_5__["MenuAutoCollapseComponent"],
        _menu_link_params_component__WEBPACK_IMPORTED_MODULE_6__["MenuLinkParamsComponent"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem1Component"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem2Component"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem3Component"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem31Component"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem32Component"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem33Component"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem331Component"],
        _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem332Component"],
        _menu_service_component__WEBPACK_IMPORTED_MODULE_8__["MenuServiceComponent"],
        _menu_badge_component__WEBPACK_IMPORTED_MODULE_9__["MenuBadgeComponent"]], imports: [_framework_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _menu_children_component__WEBPACK_IMPORTED_MODULE_3__["MenuChildrenComponent"],
                    _menu_showcase_component__WEBPACK_IMPORTED_MODULE_4__["MenuShowcaseComponent"],
                    _menu_autocollapse_component__WEBPACK_IMPORTED_MODULE_5__["MenuAutoCollapseComponent"],
                    _menu_link_params_component__WEBPACK_IMPORTED_MODULE_6__["MenuLinkParamsComponent"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem1Component"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem2Component"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem3Component"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem31Component"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem32Component"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem33Component"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem331Component"],
                    _menu_service_children__WEBPACK_IMPORTED_MODULE_7__["MenuServiceItem332Component"],
                    _menu_service_component__WEBPACK_IMPORTED_MODULE_8__["MenuServiceComponent"],
                    _menu_badge_component__WEBPACK_IMPORTED_MODULE_9__["MenuBadgeComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "jB2+":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-children.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuChildrenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuChildrenComponent", function() { return MenuChildrenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.component */ "o4D4");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var MenuChildrenComponent = /** @class */ (function () {
    function MenuChildrenComponent() {
        this.items = [
            {
                title: 'Profile',
                expanded: true,
                children: [
                    {
                        title: 'Change Password',
                    },
                    {
                        title: 'Privacy Policy',
                    },
                    {
                        title: 'Logout',
                    },
                ],
            },
            {
                title: 'Shopping Bag',
            },
            {
                title: 'Orders',
            },
        ];
    }
    MenuChildrenComponent.ɵfac = function MenuChildrenComponent_Factory(t) { return new (t || MenuChildrenComponent)(); };
    MenuChildrenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuChildrenComponent, selectors: [["nb-menu-children"]], decls: 2, vars: 1, consts: [[3, "items"]], template: function MenuChildrenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"]], encapsulation: 2, changeDetection: 0 });
    return MenuChildrenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuChildrenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-children',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './menu-children.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "up73":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/menu/menu-service-children.ts ***!
  \******************************************************************/
/*! exports provided: MenuServiceItem1Component, MenuServiceItem2Component, MenuServiceItem3Component, MenuServiceItem31Component, MenuServiceItem32Component, MenuServiceItem33Component, MenuServiceItem331Component, MenuServiceItem332Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem1Component", function() { return MenuServiceItem1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem2Component", function() { return MenuServiceItem2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem3Component", function() { return MenuServiceItem3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem31Component", function() { return MenuServiceItem31Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem32Component", function() { return MenuServiceItem32Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem33Component", function() { return MenuServiceItem33Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem331Component", function() { return MenuServiceItem331Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceItem332Component", function() { return MenuServiceItem332Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var MenuServiceItem1Component = /** @class */ (function () {
    function MenuServiceItem1Component() {
    }
    MenuServiceItem1Component.ɵfac = function MenuServiceItem1Component_Factory(t) { return new (t || MenuServiceItem1Component)(); };
    MenuServiceItem1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem1Component, selectors: [["nb-menu-item1"]], decls: 2, vars: 0, consts: [[1, "h4"]], template: function MenuServiceItem1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuServiceItem1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item1',
                template: "\n    <h1 class=\"h4\">Home</h1>\n  ",
            }]
    }], null, null); })();
var MenuServiceItem2Component = /** @class */ (function () {
    function MenuServiceItem2Component() {
    }
    MenuServiceItem2Component.ɵfac = function MenuServiceItem2Component_Factory(t) { return new (t || MenuServiceItem2Component)(); };
    MenuServiceItem2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem2Component, selectors: [["nb-menu-item2"]], decls: 2, vars: 0, consts: [[1, "h4"]], template: function MenuServiceItem2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuServiceItem2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item2',
                template: "\n    <h1 class=\"h4\">User account</h1>\n  ",
            }]
    }], null, null); })();
var MenuServiceItem3Component = /** @class */ (function () {
    function MenuServiceItem3Component() {
    }
    MenuServiceItem3Component.ɵfac = function MenuServiceItem3Component_Factory(t) { return new (t || MenuServiceItem3Component)(); };
    MenuServiceItem3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem3Component, selectors: [["nb-menu-item3"]], decls: 1, vars: 0, template: function MenuServiceItem3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return MenuServiceItem3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item3',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();
var MenuServiceItem31Component = /** @class */ (function () {
    function MenuServiceItem31Component() {
    }
    MenuServiceItem31Component.ɵfac = function MenuServiceItem31Component_Factory(t) { return new (t || MenuServiceItem31Component)(); };
    MenuServiceItem31Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem31Component, selectors: [["nb-menu-item31"]], decls: 2, vars: 0, consts: [[1, "h4"]], template: function MenuServiceItem31Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuServiceItem31Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem31Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item31',
                template: "\n    <h1 class=\"h4\">Services</h1>\n  ",
            }]
    }], null, null); })();
var MenuServiceItem32Component = /** @class */ (function () {
    function MenuServiceItem32Component() {
    }
    MenuServiceItem32Component.ɵfac = function MenuServiceItem32Component_Factory(t) { return new (t || MenuServiceItem32Component)(); };
    MenuServiceItem32Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem32Component, selectors: [["nb-menu-item32"]], decls: 2, vars: 0, consts: [[1, "h4"]], template: function MenuServiceItem32Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hardware");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuServiceItem32Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem32Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item32',
                template: "\n    <h1 class=\"h4\">Hardware</h1>\n  ",
            }]
    }], null, null); })();
var MenuServiceItem33Component = /** @class */ (function () {
    function MenuServiceItem33Component() {
    }
    MenuServiceItem33Component.ɵfac = function MenuServiceItem33Component_Factory(t) { return new (t || MenuServiceItem33Component)(); };
    MenuServiceItem33Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem33Component, selectors: [["nb-menu-item33"]], decls: 1, vars: 0, template: function MenuServiceItem33Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return MenuServiceItem33Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem33Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item33',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();
var MenuServiceItem331Component = /** @class */ (function () {
    function MenuServiceItem331Component() {
    }
    MenuServiceItem331Component.ɵfac = function MenuServiceItem331Component_Factory(t) { return new (t || MenuServiceItem331Component)(); };
    MenuServiceItem331Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem331Component, selectors: [["nb-menu-item331"]], decls: 2, vars: 0, consts: [[1, "h4"]], template: function MenuServiceItem331Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open Source Software");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuServiceItem331Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem331Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item331',
                template: "\n    <h1 class=\"h4\">Open Source Software</h1>\n  ",
            }]
    }], null, null); })();
var MenuServiceItem332Component = /** @class */ (function () {
    function MenuServiceItem332Component() {
    }
    MenuServiceItem332Component.ɵfac = function MenuServiceItem332Component_Factory(t) { return new (t || MenuServiceItem332Component)(); };
    MenuServiceItem332Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuServiceItem332Component, selectors: [["nb-menu-item332"]], decls: 2, vars: 0, consts: [[1, "h4"]], template: function MenuServiceItem332Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Commercial Software");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuServiceItem332Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuServiceItem332Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item332',
                template: "\n    <h1 class=\"h4\">Commercial Software</h1>\n  ",
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map