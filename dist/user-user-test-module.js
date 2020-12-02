(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-test-module"],{

/***/ "eLYW":
/*!****************************************************************!*\
  !*** ./src/playground/without-layout/user/user-test.module.ts ***!
  \****************************************************************/
/*! exports provided: UserTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTestModule", function() { return UserTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _user_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-test-routing.module */ "peLV");
/* harmony import */ var _user_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-test.component */ "ndb/");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var UserTestModule = /** @class */ (function () {
    function UserTestModule() {
    }
    UserTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserTestModule });
    UserTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserTestModule_Factory(t) { return new (t || UserTestModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                _user_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserTestRoutingModule"],
            ]] });
    return UserTestModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserTestModule, { declarations: [_user_test_component__WEBPACK_IMPORTED_MODULE_3__["UserTestComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
        _user_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserTestRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_test_component__WEBPACK_IMPORTED_MODULE_3__["UserTestComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                    _user_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserTestRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ndb/":
/*!*******************************************************************!*\
  !*** ./src/playground/without-layout/user/user-test.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTestComponent", function() { return UserTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var UserTestComponent = /** @class */ (function () {
    function UserTestComponent() {
    }
    UserTestComponent.ɵfac = function UserTestComponent_Factory(t) { return new (t || UserTestComponent)(); };
    UserTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserTestComponent, selectors: [["nb-user-test"]], decls: 38, vars: 1, consts: [["id", "layout-fluid"], ["fixed", ""], ["showInitials", "", "size", "medium", "name", "Dmitry Nehaychik", "title", "Worker"], [1, "test-row"], ["inverse", ""], ["inverse", "", "showInitials", ""], ["inverse", "", "size", "large", "name", "Dmitry Nehaychik"], ["inverse", "", "name", "Dmitry Nehaychik", "title", "Worker"], ["inverse", "", "size", "small", "name", "Dmitry Nehaychik", "title", "Worker", "showTitle", "false"], ["inverse", "", "onlyPicture", "", "size", "medium", "name", "Dmitry Nehaychik", "title", "Worker"], ["inverse", "", "size", "medium", "name", "Dmitry Nehaychik", "title", "Worker"], ["inverse", "", "size", "large", "picture", "http://lorempixel.com/400/200/animals/", "name", "Dmitry Nehaychik", "title", "Worker"], ["inverse", "", "showInitials", "", "size", "medium", "name", "Dmitry Nehaychik", "title", "Worker"], ["inverse", "", "size", "large", "name", "Dmitry Nehaychik", "badgeText", "29"], ["inverse", "", "name", "Dmitry Nehaychik", "title", "Worker", "badgeText", "29", "badgeStatus", "info", "badgePosition", "top left"], ["inverse", "", "size", "small", "name", "Dmitry Nehaychik", "title", "Worker", "showTitle", "false", "badgeText", "29", "badgeStatus", "success", "badgePosition", "bottom right"], ["inverse", "", "onlyPicture", "", "size", "medium", "name", "Dmitry Nehaychik", "title", "Worker", "badgeText", "29", "badgeStatus", "warning", "badgePosition", "bottom left"], ["inverse", "", "size", "large", "picture", "http://lorempixel.com/400/200/animals/", "name", "Dmitry Nehaychik", "title", "Worker", "badgeText", "29", "badgeStatus", "danger", "badgePosition", "top left"], ["id", "base64-image", 1, "test-row"], [3, "picture"], ["size", "large", "picture", "http://lorempixel.com/400/200/animals/", "name", "Dmitry Nehaychik", "title", "Worker", "badgeText", "29", "badgeStatus", "danger", "badgePosition", "top start"]], template: function UserTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-user", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-user", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-user", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-user", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nb-user", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nb-user", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nb-user", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nb-user", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nb-user", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nb-user", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nb-user", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nb-user", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nb-user", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nb-user", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nb-user", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nb-user", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nb-user", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nb-user", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("picture", "data:image/png;base64,aaa");
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"]], styles: [".test-row[_ngcontent-%COMP%] {\n        margin: 20px;\n      }"] });
    return UserTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-user-test',
                styles: [
                    "\n      .test-row {\n        margin: 20px;\n      }\n    ",
                ],
                template: "\n    <nb-layout id=\"layout-fluid\">\n      <nb-layout-header fixed>\n        <nb-user showInitials size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"></nb-user>\n      </nb-layout-header>\n\n\n      <nb-layout-column>\n        <div class=\"test-row\">\n          <nb-user inverse></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse showInitials></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse size=\"large\" name=\"Dmitry Nehaychik\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse name=\"Dmitry Nehaychik\" title=\"Worker\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse size=\"small\" name=\"Dmitry Nehaychik\" title=\"Worker\" showTitle=\"false\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse onlyPicture size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse onlyPicture size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse size=\"large\" picture=\"http://lorempixel.com/400/200/animals/\"\n                   name=\"Dmitry Nehaychik\" title=\"Worker\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse showInitials size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"></nb-user>\n        </div>\n\n        <div class=\"test-row\">\n          <nb-user inverse size=\"large\" name=\"Dmitry Nehaychik\" badgeText=\"29\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse\n            name=\"Dmitry Nehaychik\"\n            title=\"Worker\"\n            badgeText=\"29\"\n            badgeStatus=\"info\"\n            badgePosition=\"top left\">\n          </nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse\n            size=\"small\"\n            name=\"Dmitry Nehaychik\"\n            title=\"Worker\"\n            showTitle=\"false\"\n            badgeText=\"29\"\n            badgeStatus=\"success\"\n            badgePosition=\"bottom right\">\n          </nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse\n            onlyPicture\n            size=\"medium\"\n            name=\"Dmitry Nehaychik\"\n            title=\"Worker\"\n            badgeText=\"29\"\n            badgeStatus=\"warning\"\n            badgePosition=\"bottom left\">\n          </nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user inverse\n            size=\"large\"\n            picture=\"http://lorempixel.com/400/200/animals/\"\n            name=\"Dmitry Nehaychik\"\n            title=\"Worker\"\n            badgeText=\"29\"\n            badgeStatus=\"danger\"\n            badgePosition=\"top left\">\n          </nb-user>\n        </div>\n        <div class=\"test-row\" id=\"base64-image\">\n          <nb-user\n            [picture]=\"'data:image/png;base64,aaa'\"></nb-user>\n        </div>\n        <div class=\"test-row\">\n          <nb-user\n            size=\"large\"\n            picture=\"http://lorempixel.com/400/200/animals/\"\n            name=\"Dmitry Nehaychik\"\n            title=\"Worker\"\n            badgeText=\"29\"\n            badgeStatus=\"danger\"\n            badgePosition=\"top start\">\n          </nb-user>\n        </div>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "peLV":
/*!************************************************************************!*\
  !*** ./src/playground/without-layout/user/user-test-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTestRoutingModule", function() { return UserTestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-test.component */ "ndb/");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: 'user-test.component',
        component: _user_test_component__WEBPACK_IMPORTED_MODULE_2__["UserTestComponent"],
    },
];
var UserTestRoutingModule = /** @class */ (function () {
    function UserTestRoutingModule() {
    }
    UserTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserTestRoutingModule });
    UserTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserTestRoutingModule_Factory(t) { return new (t || UserTestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserTestRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=user-user-test-module.js.map