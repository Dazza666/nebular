(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "4JA7":
/*!****************************************************************!*\
  !*** ./src/playground/with-layout/list/list-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _simple_list_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-list-showcase.component */ "ch61");
/* harmony import */ var _users_list_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-list-showcase.component */ "jdFG");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var routes = [
    {
        path: 'simple-list-showcase.component',
        component: _simple_list_showcase_component__WEBPACK_IMPORTED_MODULE_2__["SimpleListShowcaseComponent"],
    },
    {
        path: 'users-list-showcase.component',
        component: _users_list_showcase_component__WEBPACK_IMPORTED_MODULE_3__["UsersListShowcaseComponent"],
    },
];
var ListRoutingModule = /** @class */ (function () {
    function ListRoutingModule() {
    }
    ListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListRoutingModule });
    ListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListRoutingModule_Factory(t) { return new (t || ListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ListRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ch61":
/*!***************************************************************************!*\
  !*** ./src/playground/with-layout/list/simple-list-showcase.component.ts ***!
  \***************************************************************************/
/*! exports provided: SimpleListShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleListShowcaseComponent", function() { return SimpleListShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fruits_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits-list */ "UB5k");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/list/list.component */ "jXul");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SimpleListShowcaseComponent_nb_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var fruit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fruit_r1, " ");
} }
var SimpleListShowcaseComponent = /** @class */ (function () {
    function SimpleListShowcaseComponent() {
        this.fruits = _fruits_list__WEBPACK_IMPORTED_MODULE_1__["fruits"];
    }
    SimpleListShowcaseComponent.ɵfac = function SimpleListShowcaseComponent_Factory(t) { return new (t || SimpleListShowcaseComponent)(); };
    SimpleListShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleListShowcaseComponent, selectors: [["ng-component"]], decls: 5, vars: 1, consts: [["size", "medium"], [4, "ngFor", "ngForOf"]], template: function SimpleListShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Some fruits ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SimpleListShowcaseComponent_nb_list_item_4_Template, 2, 1, "nb-list-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fruits);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"]], styles: ["nb-card[_ngcontent-%COMP%] {\n  min-width: 10rem;\n  max-width: 20rem;\n  margin: 0 auto 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2xpc3Qvc2ltcGxlLWxpc3Qtc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC9saXN0L3NpbXBsZS1saXN0LXNob3djYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZCB7XG4gIG1pbi13aWR0aDogMTByZW07XG4gIG1heC13aWR0aDogMjByZW07XG4gIG1hcmdpbjogMCBhdXRvIDJyZW07XG59XG4iXX0= */"] });
    return SimpleListShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleListShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card size=\"medium\">\n      <nb-card-header>\n        Some fruits\n      </nb-card-header>\n      <nb-list>\n        <nb-list-item *ngFor=\"let fruit of fruits\">\n          {{ fruit }}\n        </nb-list-item>\n      </nb-list>\n    </nb-card>\n  ",
                styleUrls: ['./simple-list-showcase.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "jdFG":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/list/users-list-showcase.component.ts ***!
  \**************************************************************************/
/*! exports provided: UsersListShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListShowcaseComponent", function() { return UsersListShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/list/list.component */ "jXul");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");






function UsersListShowcaseComponent_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-user", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", user_r1.name)("title", user_r1.title);
} }
var UsersListShowcaseComponent = /** @class */ (function () {
    function UsersListShowcaseComponent() {
        this.users = [
            { name: 'Carla Espinosa', title: 'Nurse' },
            { name: 'Bob Kelso', title: 'Doctor of Medicine' },
            { name: 'Janitor', title: 'Janitor' },
            { name: 'Perry Cox', title: 'Doctor of Medicine' },
            { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
        ];
    }
    UsersListShowcaseComponent.ɵfac = function UsersListShowcaseComponent_Factory(t) { return new (t || UsersListShowcaseComponent)(); };
    UsersListShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListShowcaseComponent, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [["size", "small"], [4, "ngFor", "ngForOf"], [3, "name", "title"]], template: function UsersListShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersListShowcaseComponent_nb_list_item_2_Template, 2, 2, "nb-list-item", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _framework_theme_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["NbListItemComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["NbUserComponent"]], styles: ["nb-card[_ngcontent-%COMP%] {\n  min-width: 10rem;\n  max-width: 20rem;\n  margin: 0 auto 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2xpc3Qvc2ltcGxlLWxpc3Qtc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC9saXN0L3NpbXBsZS1saXN0LXNob3djYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZCB7XG4gIG1pbi13aWR0aDogMTByZW07XG4gIG1heC13aWR0aDogMjByZW07XG4gIG1hcmdpbjogMCBhdXRvIDJyZW07XG59XG4iXX0= */"] });
    return UsersListShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card size=\"small\">\n      <nb-list>\n        <nb-list-item *ngFor=\"let user of users\">\n          <nb-user [name]=\"user.name\" [title]=\"user.title\">\n          </nb-user>\n        </nb-list-item>\n      </nb-list>\n    </nb-card>\n  ",
                styleUrls: ['./simple-list-showcase.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "oWX/":
/*!********************************************************!*\
  !*** ./src/playground/with-layout/list/list.module.ts ***!
  \********************************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-routing.module */ "4JA7");
/* harmony import */ var _simple_list_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-list-showcase.component */ "ch61");
/* harmony import */ var _users_list_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-list-showcase.component */ "jdFG");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListModule });
    ListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListModule_Factory(t) { return new (t || ListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"],
            ]] });
    return ListModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListModule, { declarations: [_simple_list_showcase_component__WEBPACK_IMPORTED_MODULE_4__["SimpleListShowcaseComponent"],
        _users_list_showcase_component__WEBPACK_IMPORTED_MODULE_5__["UsersListShowcaseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _simple_list_showcase_component__WEBPACK_IMPORTED_MODULE_4__["SimpleListShowcaseComponent"],
                    _users_list_showcase_component__WEBPACK_IMPORTED_MODULE_5__["UsersListShowcaseComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                    _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map