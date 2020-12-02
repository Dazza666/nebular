(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["context-menu-context-menu-module"],{

/***/ "1MFy":
/*!***********************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu-test.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContextMenuTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTestComponent", function() { return ContextMenuTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/* harmony import */ var _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/context-menu/context-menu.directive */ "a0Ii");






var ContextMenuTestComponent = /** @class */ (function () {
    function ContextMenuTestComponent() {
        this.items = [
            { title: 'Profile', link: '/user' },
            { title: 'Logout', link: '/popover' },
            { title: 'Another action' },
        ];
        this.itemsWithIcons = [
            { title: 'Profile', link: '/user', icon: 'person-outline' },
            { title: 'Logout', link: '/popover', icon: 'settings-outline' },
        ];
    }
    ContextMenuTestComponent.ɵfac = function ContextMenuTestComponent_Factory(t) { return new (t || ContextMenuTestComponent)(); };
    ContextMenuTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuTestComponent, selectors: [["nb-context-menu-test"]], decls: 12, vars: 2, consts: [["name", "Nikita Poltoratsky", "title", "full-stack developer", 3, "nbContextMenu"]], template: function ContextMenuTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Context Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Context Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.itemsWithIcons);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuDirective"]], encapsulation: 2 });
    return ContextMenuTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-context-menu-test',
                template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>Context Menu</nb-card-header>\n          <nb-card-body>\n            <nb-user name=\"Nikita Poltoratsky\" title=\"full-stack developer\" [nbContextMenu]=\"items\">\n            </nb-user>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card>\n          <nb-card-header>Context Menu</nb-card-header>\n          <nb-card-body>\n            <nb-user name=\"Nikita Poltoratsky\" title=\"full-stack developer\" [nbContextMenu]=\"itemsWithIcons\">\n            </nb-user>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "7kUF":
/*!************************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu-click.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContextMenuClickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuClickComponent", function() { return ContextMenuClickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/* harmony import */ var _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/context-menu/context-menu.directive */ "a0Ii");








var ContextMenuClickComponent = /** @class */ (function () {
    function ContextMenuClickComponent(nbMenuService, window) {
        this.nbMenuService = nbMenuService;
        this.window = window;
        this.items = [
            { title: 'Profile' },
            { title: 'Logout' },
        ];
    }
    ContextMenuClickComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nbMenuService.onItemClick()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
            var tag = _a.tag;
            return tag === 'my-context-menu';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var title = _a.item.title;
            return title;
        }))
            .subscribe(function (title) { return _this.window.alert(title + " was clicked!"); });
    };
    ContextMenuClickComponent.ɵfac = function ContextMenuClickComponent_Factory(t) { return new (t || ContextMenuClickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NB_WINDOW"])); };
    ContextMenuClickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuClickComponent, selectors: [["nb-context-menu-click"]], decls: 5, vars: 1, consts: [["name", "Nikita Poltoratsky", "title", "full-stack developer", "nbContextMenuTag", "my-context-menu", 3, "nbContextMenu"], [1, "colored-column-basic"]], template: function ContextMenuClickComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello World!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutHeaderComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["NbUserComponent"], _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_5__["NbContextMenuDirective"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"]], styles: ["[_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav {\n      justify-content: flex-end;\n    }"] });
    return ContextMenuClickComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuClickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-context-menu-click',
                templateUrl: './context-menu-click.component.html',
                styles: ["\n    :host nb-layout-header ::ng-deep nav {\n      justify-content: flex-end;\n    }\n  "],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NB_WINDOW"]]
            }] }]; }, null); })();


/***/ }),

/***/ "8pdo":
/*!***************************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu-showcase.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ContextMenuShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuShowcaseComponent", function() { return ContextMenuShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/context-menu/context-menu.directive */ "a0Ii");





var ContextMenuShowcaseComponent = /** @class */ (function () {
    function ContextMenuShowcaseComponent() {
        this.items = [
            { title: 'Profile' },
            { title: 'Logout' },
        ];
    }
    ContextMenuShowcaseComponent.ɵfac = function ContextMenuShowcaseComponent_Factory(t) { return new (t || ContextMenuShowcaseComponent)(); };
    ContextMenuShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuShowcaseComponent, selectors: [["nb-context-menu-showcase"]], decls: 6, vars: 1, consts: [["outline", "", "nbButton", "", 3, "nbContextMenu"], [1, "colored-column-basic"]], template: function ContextMenuShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-layout-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hello World!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuDirective"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"]], styles: ["[_nghost-%COMP%]   nb-layout-header[_ngcontent-%COMP%]     nav {\n      justify-content: flex-end;\n    }"] });
    return ContextMenuShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-context-menu-showcase',
                templateUrl: './context-menu-showcase.component.html',
                styles: ["\n    :host nb-layout-header ::ng-deep nav {\n      justify-content: flex-end;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "CFtX":
/*!******************************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu-right-click.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContextMenuRightClickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuRightClickComponent", function() { return ContextMenuRightClickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/context-menu/context-menu.directive */ "a0Ii");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var ContextMenuRightClickComponent = /** @class */ (function () {
    function ContextMenuRightClickComponent() {
        this.items = [
            { title: 'Profile' },
            { title: 'Logout' },
        ];
    }
    ContextMenuRightClickComponent.prototype.open = function () {
        this.contextMenu.show();
        return false;
    };
    ContextMenuRightClickComponent.prototype.close = function () {
        this.contextMenu.hide();
    };
    ContextMenuRightClickComponent.ɵfac = function ContextMenuRightClickComponent_Factory(t) { return new (t || ContextMenuRightClickComponent)(); };
    ContextMenuRightClickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuRightClickComponent, selectors: [["nb-context-menu-right-click"]], viewQuery: function ContextMenuRightClickComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuDirective"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
        } }, hostBindings: function ContextMenuRightClickComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuRightClickComponent_click_HostBindingHandler() { return ctx.close(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        } }, decls: 4, vars: 1, consts: [[1, "colored-column-basic"], ["nbButton", "", "nbContextMenuTrigger", "noop", 1, "menu-target", 3, "nbContextMenu", "contextmenu"]], template: function ContextMenuRightClickComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ContextMenuRightClickComponent_Template_button_contextmenu_2_listener() { return ctx.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Right Click ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuDirective"]], styles: ["button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }"] });
    return ContextMenuRightClickComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuRightClickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-context-menu-right-click',
                templateUrl: './context-menu-right-click.component.html',
                styles: ["\n    button {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }\n  "],
            }]
    }], null, { contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuDirective"]]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click']
        }] }); })();


/***/ }),

/***/ "JCmX":
/*!************************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu-modes.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContextMenuModesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModesComponent", function() { return ContextMenuModesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/context-menu/context-menu.directive */ "a0Ii");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var ContextMenuModesComponent = /** @class */ (function () {
    function ContextMenuModesComponent() {
        this.items = [
            { title: 'Profile' },
            { title: 'Logout' },
        ];
    }
    ContextMenuModesComponent.ɵfac = function ContextMenuModesComponent_Factory(t) { return new (t || ContextMenuModesComponent)(); };
    ContextMenuModesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuModesComponent, selectors: [["nb-context-menu-modes"]], decls: 8, vars: 3, consts: [["nbButton", "", "nbContextMenuTrigger", "click", 3, "nbContextMenu"], ["nbButton", "", "nbContextMenuTrigger", "focus", 3, "nbContextMenu"], ["nbButton", "", "nbContextMenuTrigger", "hover", 3, "nbContextMenu"]], template: function ContextMenuModesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Click Mode ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Focus (Tab) Mode ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hover Mode ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuDirective"]], styles: ["[_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%] {\n      height: 50vw;\n    }\n\n    button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n    }"] });
    return ContextMenuModesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuModesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-context-menu-modes',
                templateUrl: './context-menu-modes.component.html',
                styles: ["\n    :host nb-layout-column {\n      height: 50vw;\n    }\n\n    button {\n      margin-right: 1rem;\n    }\n  "],
            }]
    }], null, null); })();


/***/ }),

/***/ "Rh34":
/*!***********************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu-noop.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContextMenuNoopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuNoopComponent", function() { return ContextMenuNoopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/context-menu/context-menu.directive */ "a0Ii");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var ContextMenuNoopComponent = /** @class */ (function () {
    function ContextMenuNoopComponent() {
        this.items = [
            { title: 'Profile' },
            { title: 'Logout' },
        ];
    }
    ContextMenuNoopComponent.prototype.open = function () {
        this.contextMenu.show();
    };
    ContextMenuNoopComponent.prototype.close = function () {
        this.contextMenu.hide();
    };
    ContextMenuNoopComponent.ɵfac = function ContextMenuNoopComponent_Factory(t) { return new (t || ContextMenuNoopComponent)(); };
    ContextMenuNoopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuNoopComponent, selectors: [["nb-context-menu-noop"]], viewQuery: function ContextMenuNoopComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuDirective"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
        } }, decls: 9, vars: 1, consts: [["nbButton", "", "nbContextMenuTrigger", "noop", 1, "menu-target", 3, "nbContextMenu"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"]], template: function ContextMenuNoopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Target");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuNoopComponent_Template_button_click_5_listener() { return ctx.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Open Context Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuNoopComponent_Template_button_click_7_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close Context Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx.items);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_context_menu_context_menu_directive__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuDirective"]], styles: ["[_nghost-%COMP%]   nb-layout-column[_ngcontent-%COMP%] {\n      height: 50vw;\n    }\n    .menu-target[_ngcontent-%COMP%] {\n      margin-bottom: 7rem;\n    }\n    button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }"] });
    return ContextMenuNoopComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuNoopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-context-menu-noop',
                templateUrl: './context-menu-noop.component.html',
                styles: ["\n    :host nb-layout-column {\n      height: 50vw;\n    }\n    .menu-target {\n      margin-bottom: 7rem;\n    }\n    button {\n      margin-right: 1rem;\n      margin-top: 1rem;\n    }\n  "],
            }]
    }], null, { contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuDirective"]]
        }] }); })();


/***/ }),

/***/ "VaiE":
/*!***************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu.module.ts ***!
  \***************************************************************************/
/*! exports provided: ContextMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return ContextMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _context_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu-routing.module */ "fgpp");
/* harmony import */ var _context_menu_click_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-menu-click.component */ "7kUF");
/* harmony import */ var _context_menu_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context-menu-showcase.component */ "8pdo");
/* harmony import */ var _context_menu_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context-menu-test.component */ "1MFy");
/* harmony import */ var _context_menu_modes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context-menu-modes.component */ "JCmX");
/* harmony import */ var _context_menu_noop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context-menu-noop.component */ "Rh34");
/* harmony import */ var _context_menu_right_click_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context-menu-right-click.component */ "CFtX");
/* harmony import */ var _framework_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/menu/menu.module */ "gM8K");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule() {
    }
    ContextMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContextMenuModule });
    ContextMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContextMenuModule_Factory(t) { return new (t || ContextMenuModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"].forRoot(),
                _context_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContextMenuRoutingModule"],
            ]] });
    return ContextMenuModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContextMenuModule, { declarations: [_context_menu_click_component__WEBPACK_IMPORTED_MODULE_3__["ContextMenuClickComponent"],
        _context_menu_showcase_component__WEBPACK_IMPORTED_MODULE_4__["ContextMenuShowcaseComponent"],
        _context_menu_test_component__WEBPACK_IMPORTED_MODULE_5__["ContextMenuTestComponent"],
        _context_menu_modes_component__WEBPACK_IMPORTED_MODULE_6__["ContextMenuModesComponent"],
        _context_menu_noop_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuNoopComponent"],
        _context_menu_right_click_component__WEBPACK_IMPORTED_MODULE_8__["ContextMenuRightClickComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _framework_theme_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__["NbMenuModule"], _context_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContextMenuRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _context_menu_click_component__WEBPACK_IMPORTED_MODULE_3__["ContextMenuClickComponent"],
                    _context_menu_showcase_component__WEBPACK_IMPORTED_MODULE_4__["ContextMenuShowcaseComponent"],
                    _context_menu_test_component__WEBPACK_IMPORTED_MODULE_5__["ContextMenuTestComponent"],
                    _context_menu_modes_component__WEBPACK_IMPORTED_MODULE_6__["ContextMenuModesComponent"],
                    _context_menu_noop_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuNoopComponent"],
                    _context_menu_right_click_component__WEBPACK_IMPORTED_MODULE_8__["ContextMenuRightClickComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbContextMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"].forRoot(),
                    _context_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContextMenuRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "fgpp":
/*!***********************************************************************************!*\
  !*** ./src/playground/without-layout/context-menu/context-menu-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ContextMenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuRoutingModule", function() { return ContextMenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _context_menu_click_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu-click.component */ "7kUF");
/* harmony import */ var _context_menu_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-menu-showcase.component */ "8pdo");
/* harmony import */ var _context_menu_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context-menu-test.component */ "1MFy");
/* harmony import */ var _context_menu_modes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context-menu-modes.component */ "JCmX");
/* harmony import */ var _context_menu_noop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context-menu-noop.component */ "Rh34");
/* harmony import */ var _context_menu_right_click_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context-menu-right-click.component */ "CFtX");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var routes = [
    {
        path: 'context-menu-click.component',
        component: _context_menu_click_component__WEBPACK_IMPORTED_MODULE_2__["ContextMenuClickComponent"],
    },
    {
        path: 'context-menu-showcase.component',
        component: _context_menu_showcase_component__WEBPACK_IMPORTED_MODULE_3__["ContextMenuShowcaseComponent"],
    },
    {
        path: 'context-menu-test.component',
        component: _context_menu_test_component__WEBPACK_IMPORTED_MODULE_4__["ContextMenuTestComponent"],
    },
    {
        path: 'context-menu-modes.component',
        component: _context_menu_modes_component__WEBPACK_IMPORTED_MODULE_5__["ContextMenuModesComponent"],
    },
    {
        path: 'context-menu-noop.component',
        component: _context_menu_noop_component__WEBPACK_IMPORTED_MODULE_6__["ContextMenuNoopComponent"],
    },
    {
        path: 'context-menu-right-click.component',
        component: _context_menu_right_click_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuRightClickComponent"],
    },
];
var ContextMenuRoutingModule = /** @class */ (function () {
    function ContextMenuRoutingModule() {
    }
    ContextMenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContextMenuRoutingModule });
    ContextMenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContextMenuRoutingModule_Factory(t) { return new (t || ContextMenuRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ContextMenuRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContextMenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=context-menu-context-menu-module.js.map