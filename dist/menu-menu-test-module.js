(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-test-module"],{

/***/ "9CUB":
/*!************************************************************************!*\
  !*** ./src/playground/without-layout/menu/menu-test-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MenuTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTestRoutingModule", function() { return MenuTestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-children.component */ "9LYd");
/* harmony import */ var _menu_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-test.component */ "bs6J");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var routes = [
    {
        path: 'menu-test.component',
        component: _menu_test_component__WEBPACK_IMPORTED_MODULE_3__["MenuTestComponent"],
        children: [
            {
                path: '',
                redirectTo: '1',
                pathMatch: 'full',
            },
            {
                path: '1',
                component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem1Component"],
            },
            {
                path: '2',
                component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem2Component"],
            },
            {
                path: '12',
                component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem1Component"],
            },
            {
                path: '3',
                component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem3Component"],
                children: [
                    {
                        path: '',
                        redirectTo: '1',
                        pathMatch: 'full',
                    },
                    {
                        path: '1',
                        component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem31Component"],
                    },
                    {
                        path: '2',
                        component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem32Component"],
                    },
                    {
                        path: '3',
                        component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem33Component"],
                        children: [
                            {
                                path: '',
                                redirectTo: '1',
                                pathMatch: 'full',
                            },
                            {
                                path: '1',
                                component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem331Component"],
                            },
                            {
                                path: '2',
                                component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem332Component"],
                            },
                        ],
                    },
                ],
            },
            {
                path: '4',
                component: _components_menu_children_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem4Component"],
            },
        ],
    },
];
var MenuTestRoutingModule = /** @class */ (function () {
    function MenuTestRoutingModule() {
    }
    MenuTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuTestRoutingModule });
    MenuTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuTestRoutingModule_Factory(t) { return new (t || MenuTestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MenuTestRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuTestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "9LYd":
/*!**********************************************************************************!*\
  !*** ./src/playground/without-layout/menu/components/menu-children.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MenuItem1Component, MenuItem2Component, MenuItem3Component, MenuItem31Component, MenuItem32Component, MenuItem33Component, MenuItem331Component, MenuItem332Component, MenuItem4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem1Component", function() { return MenuItem1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem2Component", function() { return MenuItem2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem3Component", function() { return MenuItem3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem31Component", function() { return MenuItem31Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem32Component", function() { return MenuItem32Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem33Component", function() { return MenuItem33Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem331Component", function() { return MenuItem331Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem332Component", function() { return MenuItem332Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem4Component", function() { return MenuItem4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



var MenuItem1Component = /** @class */ (function () {
    function MenuItem1Component() {
    }
    MenuItem1Component.ɵfac = function MenuItem1Component_Factory(t) { return new (t || MenuItem1Component)(); };
    MenuItem1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem1Component, selectors: [["nb-menu-item1"]], decls: 2, vars: 0, template: function MenuItem1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Item #1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuItem1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item1',
                template: "\n    <h1>Menu Item #1</h1>\n  ",
            }]
    }], null, null); })();
var MenuItem2Component = /** @class */ (function () {
    function MenuItem2Component() {
    }
    MenuItem2Component.ɵfac = function MenuItem2Component_Factory(t) { return new (t || MenuItem2Component)(); };
    MenuItem2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem2Component, selectors: [["nb-menu-item2"]], decls: 2, vars: 0, template: function MenuItem2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Item #2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuItem2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item2',
                template: "\n    <h1>Menu Item #2</h1>\n  ",
            }]
    }], null, null); })();
var MenuItem3Component = /** @class */ (function () {
    function MenuItem3Component() {
    }
    MenuItem3Component.ɵfac = function MenuItem3Component_Factory(t) { return new (t || MenuItem3Component)(); };
    MenuItem3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem3Component, selectors: [["nb-menu-item3"]], decls: 1, vars: 0, template: function MenuItem3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return MenuItem3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item3',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();
var MenuItem31Component = /** @class */ (function () {
    function MenuItem31Component() {
    }
    MenuItem31Component.ɵfac = function MenuItem31Component_Factory(t) { return new (t || MenuItem31Component)(); };
    MenuItem31Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem31Component, selectors: [["nb-menu-item31"]], decls: 2, vars: 0, template: function MenuItem31Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Item #3.1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuItem31Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem31Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item31',
                template: "\n    <h1>Menu Item #3.1</h1>\n  ",
            }]
    }], null, null); })();
var MenuItem32Component = /** @class */ (function () {
    function MenuItem32Component() {
    }
    MenuItem32Component.ɵfac = function MenuItem32Component_Factory(t) { return new (t || MenuItem32Component)(); };
    MenuItem32Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem32Component, selectors: [["nb-menu-item32"]], decls: 2, vars: 0, template: function MenuItem32Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Item #3.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuItem32Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem32Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item32',
                template: "\n    <h1>Menu Item #3.2</h1>\n  ",
            }]
    }], null, null); })();
var MenuItem33Component = /** @class */ (function () {
    function MenuItem33Component() {
    }
    MenuItem33Component.ɵfac = function MenuItem33Component_Factory(t) { return new (t || MenuItem33Component)(); };
    MenuItem33Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem33Component, selectors: [["nb-menu-item33"]], decls: 1, vars: 0, template: function MenuItem33Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return MenuItem33Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem33Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item33',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();
var MenuItem331Component = /** @class */ (function () {
    function MenuItem331Component() {
    }
    MenuItem331Component.ɵfac = function MenuItem331Component_Factory(t) { return new (t || MenuItem331Component)(); };
    MenuItem331Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem331Component, selectors: [["nb-menu-item331"]], decls: 2, vars: 0, template: function MenuItem331Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Item #3.3.1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuItem331Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem331Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item331',
                template: "\n    <h1>Menu Item #3.3.1</h1>\n  ",
            }]
    }], null, null); })();
var MenuItem332Component = /** @class */ (function () {
    function MenuItem332Component() {
    }
    MenuItem332Component.ɵfac = function MenuItem332Component_Factory(t) { return new (t || MenuItem332Component)(); };
    MenuItem332Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem332Component, selectors: [["nb-menu-item332"]], decls: 2, vars: 0, template: function MenuItem332Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Item #3.3.2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuItem332Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem332Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item332',
                template: "\n    <h1>Menu Item #3.3.2</h1>\n  ",
            }]
    }], null, null); })();
var MenuItem4Component = /** @class */ (function () {
    function MenuItem4Component() {
    }
    MenuItem4Component.ɵfac = function MenuItem4Component_Factory(t) { return new (t || MenuItem4Component)(); };
    MenuItem4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItem4Component, selectors: [["nb-menu-item4"]], decls: 2, vars: 0, template: function MenuItem4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Menu Item #4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return MenuItem4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItem4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-item4',
                template: "\n    <h1>Menu Item #4</h1>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "bs6J":
/*!*******************************************************************!*\
  !*** ./src/playground/without-layout/menu/menu-test.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTestComponent", function() { return MenuTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/* harmony import */ var _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.component */ "o4D4");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var MenuTestComponent = /** @class */ (function () {
    function MenuTestComponent(menuService) {
        this.menuService = menuService;
        this.sidebarMenuItems = [
            {
                title: 'Menu Items',
                group: true,
                icon: 'home-outline',
            },
            {
                title: 'Menu #1',
                link: '/menu/menu-test.component/1',
                icon: 'home-outline',
                queryParams: { param: 1 },
                fragment: '#fragment',
            },
            {
                title: 'Menu #2',
                link: '/menu/menu-test.component/2',
                icon: 'home-outline',
            },
            {
                title: 'Menu #3',
                icon: 'home-outline',
                children: [
                    {
                        title: 'Menu #3.1',
                        link: '/menu/menu-test.component/3/1',
                    },
                    {
                        title: 'Menu #3.2',
                        link: '/menu/menu-test.component/3/2',
                    },
                    {
                        title: 'Menu #3.3',
                        children: [
                            {
                                title: 'Menu #3.3.1',
                                link: '/menu/menu-test.component/3/3/1',
                            },
                            {
                                title: 'Menu #3.3.2',
                                link: '/menu/menu-test.component/3/3/2',
                                queryParams: { param: 2 },
                                fragment: '#fragment',
                                home: true,
                            },
                            {
                                title: '@nebular/theme',
                                target: '_blank',
                                url: 'https://github.com/akveo/ng2-admin',
                            },
                        ],
                    },
                ],
            },
        ];
        this.firstMenuItems = [
            {
                title: 'Menu Items',
                group: true,
                icon: 'home-outline',
            },
            {
                title: 'Menu #1',
                link: '/menu/menu-test.component/1',
                icon: 'home-outline',
                queryParams: { param: 1 },
                fragment: '#fragment',
            },
            {
                title: 'Menu #2',
                link: '/menu/menu-test.component/2',
                icon: 'home-outline',
            },
        ];
        this.secondMenuItems = [
            {
                title: 'Menu items with fragments ',
                group: true,
            },
            {
                title: 'Menu #1',
                link: '/menu/menu-test.component/1',
                icon: 'home-outline',
                pathMatch: 'prefix',
            },
            {
                title: 'Menu #12 + fragment',
                link: '/menu/menu-test.component/12',
                fragment: 'fragment',
                icon: 'home-outline',
            },
            {
                title: 'Menu #3',
                link: '/menu/menu-test.component/3',
                icon: 'home-outline',
            },
        ];
        this.thirdMenuItems = [
            {
                title: 'Menu #1',
            },
            {
                title: 'Menu #2',
                children: [
                    {
                        title: 'Menu #2.1',
                    },
                    {
                        title: 'Hidden Submenu Item',
                        hidden: true,
                    },
                ],
            },
            {
                title: 'Hidden Menu Item',
                hidden: true,
            },
        ];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MenuTestComponent.prototype.ngOnInit = function () {
        this.menuService
            .onItemClick()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe(function (data) { return console.info(data); });
        this.menuService
            .onItemSelect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe(function (data) { return console.info(data); });
        // this.itemHoverSubscription = this.menuService.onItemHover()
        //   .subscribe((data: { tag: string, item: NbMenuItem }) => console.info(data));
        this.menuService
            .onSubmenuToggle()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe(function (data) { return console.info(data); });
        this.menuService.addItems([
            {
                title: 'Menu #3',
                icon: 'home-outline',
                children: [
                    {
                        title: 'Menu #3.1',
                        link: '/menu/menu-test.component/3/1',
                    },
                    {
                        title: 'Menu #3.2',
                        link: '/menu/menu-test.component/3/2',
                    },
                    {
                        title: 'Menu #3.3',
                        children: [
                            {
                                title: 'Menu #3.3.1',
                                link: '/menu/menu-test.component/3/3/1',
                            },
                            {
                                title: 'Menu #3.3.2',
                                link: '/menu/menu-test.component/3/3/2',
                                queryParams: { param: 2 },
                                fragment: '#fragment',
                                home: true,
                            },
                            {
                                title: '@nebular/theme',
                                target: '_blank',
                                url: 'https://github.com/akveo/ng2-admin',
                            },
                        ],
                    },
                ],
            },
        ], 'firstMenu');
    };
    MenuTestComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    MenuTestComponent.prototype.addMenuItem = function () {
        this.menuService.addItems([{ title: 'New Menu Item' }], 'firstMenu');
    };
    MenuTestComponent.prototype.navigateHome = function () {
        this.menuService.navigateHome('firstMenu');
    };
    MenuTestComponent.ɵfac = function MenuTestComponent_Factory(t) { return new (t || MenuTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"])); };
    MenuTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuTestComponent, selectors: [["nb-menu-test"]], decls: 23, vars: 5, consts: [["state", "compacted"], ["id", "menu-sidebar", "tag", "sidebarMenu", 3, "items"], ["size", "giant"], ["id", "menu-first", "tag", "firstMenu", 3, "items", "autoCollapse"], ["nbButton", "", "id", "addBtn", 3, "click"], ["nbButton", "", "id", "homeBtn", 3, "click"], ["id", "menu-second", "tag", "SecondMenu", 3, "items"], ["id", "menu-third", "tag", "thirdMenu", 3, "items"]], template: function MenuTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-sidebar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-menu", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-menu", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuTestComponent_Template_button_click_8_listener() { return ctx.addMenuItem(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuTestComponent_Template_button_click_10_listener() { return ctx.navigateHome(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-menu", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuTestComponent_Template_button_click_16_listener() { return ctx.addMenuItem(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuTestComponent_Template_button_click_18_listener() { return ctx.navigateHome(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nb-menu", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.sidebarMenuItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.firstMenuItems)("autoCollapse", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.secondMenuItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.thirdMenuItems);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["NbSidebarComponent"], _framework_theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["NbMenuComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], encapsulation: 2 });
    return MenuTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-menu-test',
                template: "\n    <nb-layout>\n      <nb-sidebar state=\"compacted\">\n        <nb-menu id=\"menu-sidebar\" tag=\"sidebarMenu\" [items]=\"sidebarMenuItems\"></nb-menu>\n      </nb-sidebar>\n      <nb-layout-column>\n        <nb-card size=\"giant\">\n          <nb-card-body>\n            <nb-menu id=\"menu-first\" tag=\"firstMenu\" [items]=\"firstMenuItems\" [autoCollapse]=\"true\"></nb-menu>\n            <router-outlet></router-outlet>\n            <button nbButton id=\"addBtn\" (click)=\"addMenuItem()\">Add</button>\n            <button nbButton id=\"homeBtn\" (click)=\"navigateHome()\">Home</button>\n          </nb-card-body>\n        </nb-card>\n        <nb-card size=\"giant\">\n          <nb-card-body>\n            <nb-menu id=\"menu-second\" tag=\"SecondMenu\" [items]=\"secondMenuItems\"></nb-menu>\n            <router-outlet></router-outlet>\n            <button nbButton id=\"addBtn\" (click)=\"addMenuItem()\">Add</button>\n            <button nbButton id=\"homeBtn\" (click)=\"navigateHome()\">Home</button>\n          </nb-card-body>\n        </nb-card>\n        <nb-card size=\"giant\">\n          <nb-card-body>\n            <nb-menu id=\"menu-third\" tag=\"thirdMenu\" [items]=\"thirdMenuItems\"></nb-menu>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"] }]; }, null); })();


/***/ }),

/***/ "nWdf":
/*!****************************************************************!*\
  !*** ./src/playground/without-layout/menu/menu-test.module.ts ***!
  \****************************************************************/
/*! exports provided: MenuTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTestModule", function() { return MenuTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _menu_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-test-routing.module */ "9CUB");
/* harmony import */ var _menu_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-test.component */ "bs6J");
/* harmony import */ var _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-children.component */ "9LYd");
/* harmony import */ var _framework_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.module */ "gM8K");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.module */ "q1xA");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */








var MenuTestModule = /** @class */ (function () {
    function MenuTestModule() {
    }
    MenuTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuTestModule });
    MenuTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuTestModule_Factory(t) { return new (t || MenuTestModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _menu_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuTestRoutingModule"],
            ]] });
    return MenuTestModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuTestModule, { declarations: [_menu_test_component__WEBPACK_IMPORTED_MODULE_3__["MenuTestComponent"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem1Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem2Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem3Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem31Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem32Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem33Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem331Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem332Component"],
        _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem4Component"]], imports: [_framework_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"], _framework_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _menu_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuTestRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _menu_test_component__WEBPACK_IMPORTED_MODULE_3__["MenuTestComponent"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem1Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem2Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem3Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem31Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem32Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem33Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem331Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem332Component"],
                    _components_menu_children_component__WEBPACK_IMPORTED_MODULE_4__["MenuItem4Component"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _menu_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["MenuTestRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=menu-menu-test-module.js.map