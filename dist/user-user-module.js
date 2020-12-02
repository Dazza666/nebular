(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "2Q3b":
/*!****************************************************************!*\
  !*** ./src/playground/with-layout/user/user-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-showcase.component */ "5+zk");
/* harmony import */ var _user_sizes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-sizes.component */ "py6v");
/* harmony import */ var _user_avatar_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-avatar-settings.component */ "zc++");
/* harmony import */ var _user_hide_captions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-hide-captions.component */ "FeHd");
/* harmony import */ var _user_shape_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-shape.component */ "xZfT");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var routes = [
    {
        path: 'user-showcase.component',
        component: _user_showcase_component__WEBPACK_IMPORTED_MODULE_2__["UserShowcaseComponent"],
    },
    {
        path: 'user-sizes.component',
        component: _user_sizes_component__WEBPACK_IMPORTED_MODULE_3__["UserSizesComponent"],
    },
    {
        path: 'user-avatar-settings.component',
        component: _user_avatar_settings_component__WEBPACK_IMPORTED_MODULE_4__["UserAvatarSettingsComponent"],
    },
    {
        path: 'user-hide-captions.component',
        component: _user_hide_captions_component__WEBPACK_IMPORTED_MODULE_5__["UserHideCaptionsComponent"],
    },
    {
        path: 'user-shape.component',
        component: _user_shape_component__WEBPACK_IMPORTED_MODULE_6__["NbUserShapeComponent"],
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
    UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "5+zk":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/user/user-showcase.component.ts ***!
  \********************************************************************/
/*! exports provided: UserShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShowcaseComponent", function() { return UserShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var UserShowcaseComponent = /** @class */ (function () {
    function UserShowcaseComponent() {
    }
    UserShowcaseComponent.ɵfac = function UserShowcaseComponent_Factory(t) { return new (t || UserShowcaseComponent)(); };
    UserShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserShowcaseComponent, selectors: [["nb-user-showcase"]], decls: 3, vars: 0, consts: [["size", "large", "name", "John Doe", "title", "Engineer", "badgeText", "99+", "badgeStatus", "success", "badgePosition", "bottom right"]], template: function UserShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"]], encapsulation: 2, changeDetection: 0 });
    return UserShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-user-showcase',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './user-showcase.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "FeHd":
/*!*************************************************************************!*\
  !*** ./src/playground/with-layout/user/user-hide-captions.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserHideCaptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHideCaptionsComponent", function() { return UserHideCaptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var UserHideCaptionsComponent = /** @class */ (function () {
    function UserHideCaptionsComponent() {
    }
    UserHideCaptionsComponent.ɵfac = function UserHideCaptionsComponent_Factory(t) { return new (t || UserHideCaptionsComponent)(); };
    UserHideCaptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserHideCaptionsComponent, selectors: [["nb-user-hide-captions"]], decls: 15, vars: 0, consts: [["size", "large", "name", "Jonh Doe", "title", "Engineer", "onlyPicture", ""], ["size", "large", "name", "Jonh Doe", "title", "Engineer", "showName", "false"], ["size", "large", "name", "Jonh Doe", "title", "Engineer", "showTitle", "false"]], template: function UserHideCaptionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Only picture");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name hidden");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-user", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title hidden");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-user", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"]], encapsulation: 2, changeDetection: 0 });
    return UserHideCaptionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHideCaptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-user-hide-captions',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './user-hide-captions.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "diYc":
/*!********************************************************!*\
  !*** ./src/playground/with-layout/user/user.module.ts ***!
  \********************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "2Q3b");
/* harmony import */ var _user_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-showcase.component */ "5+zk");
/* harmony import */ var _user_sizes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-sizes.component */ "py6v");
/* harmony import */ var _user_avatar_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-avatar-settings.component */ "zc++");
/* harmony import */ var _user_hide_captions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-hide-captions.component */ "FeHd");
/* harmony import */ var _user_shape_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-shape.component */ "xZfT");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]]] });
    return UserModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_showcase_component__WEBPACK_IMPORTED_MODULE_3__["UserShowcaseComponent"],
        _user_sizes_component__WEBPACK_IMPORTED_MODULE_4__["UserSizesComponent"],
        _user_avatar_settings_component__WEBPACK_IMPORTED_MODULE_5__["UserAvatarSettingsComponent"],
        _user_hide_captions_component__WEBPACK_IMPORTED_MODULE_6__["UserHideCaptionsComponent"],
        _user_shape_component__WEBPACK_IMPORTED_MODULE_7__["NbUserShapeComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_showcase_component__WEBPACK_IMPORTED_MODULE_3__["UserShowcaseComponent"],
                    _user_sizes_component__WEBPACK_IMPORTED_MODULE_4__["UserSizesComponent"],
                    _user_avatar_settings_component__WEBPACK_IMPORTED_MODULE_5__["UserAvatarSettingsComponent"],
                    _user_hide_captions_component__WEBPACK_IMPORTED_MODULE_6__["UserHideCaptionsComponent"],
                    _user_shape_component__WEBPACK_IMPORTED_MODULE_7__["NbUserShapeComponent"],
                ],
                imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "py6v":
/*!*****************************************************************!*\
  !*** ./src/playground/with-layout/user/user-sizes.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSizesComponent", function() { return UserSizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var UserSizesComponent = /** @class */ (function () {
    function UserSizesComponent() {
    }
    UserSizesComponent.ɵfac = function UserSizesComponent_Factory(t) { return new (t || UserSizesComponent)(); };
    UserSizesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSizesComponent, selectors: [["nb-user-sizes"]], decls: 15, vars: 2, consts: [["size", "tiny", "name", "John Doe", "title", "Engineer", 3, "showTitle"], ["size", "small", "name", "John Doe", "title", "Engineer", 3, "showTitle"], ["size", "medium", "name", "John Doe", "title", "Engineer"], ["size", "large", "name", "John Doe", "title", "Engineer"], ["size", "giant", "name", "John Doe", "title", "Engineer"]], template: function UserSizesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-user", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-user", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nb-user", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-user", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTitle", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTitle", false);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"]], encapsulation: 2, changeDetection: 0 });
    return UserSizesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSizesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-user-sizes',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './user-sizes.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "xZfT":
/*!*****************************************************************!*\
  !*** ./src/playground/with-layout/user/user-shape.component.ts ***!
  \*****************************************************************/
/*! exports provided: NbUserShapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbUserShapeComponent", function() { return NbUserShapeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");




var NbUserShapeComponent = /** @class */ (function () {
    function NbUserShapeComponent() {
    }
    NbUserShapeComponent.ɵfac = function NbUserShapeComponent_Factory(t) { return new (t || NbUserShapeComponent)(); };
    NbUserShapeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NbUserShapeComponent, selectors: [["ng-component"]], decls: 15, vars: 0, consts: [["shape", "rectangle", "name", "John Doe", "title", "Engineer"], ["shape", "semi-round", "name", "John Doe", "title", "Engineer"], ["shape", "round", "name", "John Doe", "title", "Engineer"]], template: function NbUserShapeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rectangle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Semi-round");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-user", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Round");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-user", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"]], encapsulation: 2 });
    return NbUserShapeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NbUserShapeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n        <p>Rectangle</p>\n        <nb-user shape=\"rectangle\" name=\"John Doe\" title=\"Engineer\"></nb-user>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-body>\n        <p>Semi-round</p>\n        <nb-user shape=\"semi-round\" name=\"John Doe\" title=\"Engineer\"></nb-user>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-body>\n        <p>Round</p>\n        <nb-user shape=\"round\" name=\"John Doe\" title=\"Engineer\"></nb-user>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "zc++":
/*!***************************************************************************!*\
  !*** ./src/playground/with-layout/user/user-avatar-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserAvatarSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarSettingsComponent", function() { return UserAvatarSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/user/user.component */ "C74+");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




var UserAvatarSettingsComponent = /** @class */ (function () {
    function UserAvatarSettingsComponent() {
        this.base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
            'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
            'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII=';
    }
    UserAvatarSettingsComponent.ɵfac = function UserAvatarSettingsComponent_Factory(t) { return new (t || UserAvatarSettingsComponent)(); };
    UserAvatarSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAvatarSettingsComponent, selectors: [["nb-user-avatar-settings"]], decls: 20, vars: 1, consts: [["size", "large", "name", "John Doe", "title", "Engineer", "picture", "https://via.placeholder.com/50/4479e7/ffffff?Text=IMG"], ["size", "large", "name", "John Doe", "title", "Engineer", 3, "picture"], ["size", "large", "name", "John Doe", "title", "Engineer", "showInitials", "false"], ["size", "large", "name", "John Doe", "title", "Engineer", "color", "#cccccc"]], template: function UserAvatarSettingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User avatar image set as link");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-user", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User avatar image set as BASE64 string");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-user", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "User avatar image not set and showInitials disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-user", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User avatar with custom background color");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nb-user", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("picture", ctx.base64image);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"]], encapsulation: 2, changeDetection: 0 });
    return UserAvatarSettingsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAvatarSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-user-avatar-settings',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './user-avatar-settings.component.html',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map