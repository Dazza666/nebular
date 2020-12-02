(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overlay-overlay-module"],{

/***/ "LVf3":
/*!**************************************************************!*\
  !*** ./src/playground/with-layout/overlay/overlay.module.ts ***!
  \**************************************************************/
/*! exports provided: OverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _overlay_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay-routing.module */ "M4xt");
/* harmony import */ var _overlay_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay-showcase.component */ "YWqx");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OverlayModule });
    OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OverlayModule_Factory(t) { return new (t || OverlayModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _overlay_routing_module__WEBPACK_IMPORTED_MODULE_2__["OverlayRoutingModule"],
            ]] });
    return OverlayModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OverlayModule, { declarations: [_overlay_showcase_component__WEBPACK_IMPORTED_MODULE_3__["OverlayShowcaseComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _overlay_routing_module__WEBPACK_IMPORTED_MODULE_2__["OverlayRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _overlay_showcase_component__WEBPACK_IMPORTED_MODULE_3__["OverlayShowcaseComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _overlay_routing_module__WEBPACK_IMPORTED_MODULE_2__["OverlayRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "M4xt":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/overlay/overlay-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: OverlayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRoutingModule", function() { return OverlayRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _overlay_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay-showcase.component */ "YWqx");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: 'overlay-showcase.component',
        component: _overlay_showcase_component__WEBPACK_IMPORTED_MODULE_2__["OverlayShowcaseComponent"],
    },
];
var OverlayRoutingModule = /** @class */ (function () {
    function OverlayRoutingModule() {
    }
    OverlayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OverlayRoutingModule });
    OverlayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OverlayRoutingModule_Factory(t) { return new (t || OverlayRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return OverlayRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OverlayRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "YWqx":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/overlay/overlay-showcase.component.ts ***!
  \**************************************************************************/
/*! exports provided: OverlayShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayShowcaseComponent", function() { return OverlayShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");






var _c0 = ["overlay"];
function OverlayShowcaseComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is overlay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverlayShowcaseComponent_ng_template_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.dismissOverlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dismiss overlay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var OverlayShowcaseComponent = /** @class */ (function () {
    function OverlayShowcaseComponent(overlay, positionBuilder, vcr) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.vcr = vcr;
    }
    OverlayShowcaseComponent.prototype.ngOnInit = function () {
        var positionStrategy = this.positionBuilder.global().centerHorizontally().centerVertically();
        this.ref = this.overlay.create({ positionStrategy: positionStrategy, hasBackdrop: true });
    };
    OverlayShowcaseComponent.prototype.createOverlay = function () {
        if (this.ref.hasAttached()) {
            return;
        }
        this.ref.attach(new _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTemplatePortal"](this.overlayTemplate, this.vcr));
    };
    OverlayShowcaseComponent.prototype.dismissOverlay = function () {
        this.ref.detach();
    };
    OverlayShowcaseComponent.ɵfac = function OverlayShowcaseComponent_Factory(t) { return new (t || OverlayShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbOverlayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPositionBuilderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
    OverlayShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverlayShowcaseComponent, selectors: [["nb-overlay-showcase"]], viewQuery: function OverlayShowcaseComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayTemplate = _t.first);
        } }, decls: 4, vars: 0, consts: [["overlay", ""], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "success", 3, "click"]], template: function OverlayShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OverlayShowcaseComponent_ng_template_0_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverlayShowcaseComponent_Template_button_click_2_listener() { return ctx.createOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create overlay");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"]], encapsulation: 2 });
    return OverlayShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-overlay-showcase',
                template: "\n    <ng-template #overlay>\n      <nb-card>\n        <nb-card-header>This is overlay</nb-card-header>\n        <nb-card-body>\n          <button nbButton status=\"success\" (click)=\"dismissOverlay()\">Dismiss overlay</button>\n        </nb-card-body>\n      </nb-card>\n    </ng-template>\n    <button nbButton status=\"primary\" (click)=\"createOverlay()\">Create overlay</button>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbOverlayService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbPositionBuilderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { overlayTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['overlay']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=overlay-overlay-module.js.map