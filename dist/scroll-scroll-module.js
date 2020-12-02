(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scroll-scroll-module"],{

/***/ "YcJj":
/*!***********************************************************************!*\
  !*** ./src/playground/without-layout/scroll/scroll-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ScrollRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollRoutingModule", function() { return ScrollRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scroll_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-window.component */ "o4ML");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: 'scroll-window.component',
        component: _scroll_window_component__WEBPACK_IMPORTED_MODULE_2__["ScrollWindowComponent"],
    },
];
var ScrollRoutingModule = /** @class */ (function () {
    function ScrollRoutingModule() {
    }
    ScrollRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScrollRoutingModule });
    ScrollRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScrollRoutingModule_Factory(t) { return new (t || ScrollRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ScrollRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "o4ML":
/*!*************************************************************************!*\
  !*** ./src/playground/without-layout/scroll/scroll-window.component.ts ***!
  \*************************************************************************/
/*! exports provided: ScrollWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollWindowComponent", function() { return ScrollWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");






var LayoutMode;
(function (LayoutMode) {
    LayoutMode["WINDOW"] = "window";
    LayoutMode["LAYOUT"] = "layout";
})(LayoutMode || (LayoutMode = {}));
var ScrollWindowComponent = /** @class */ (function () {
    function ScrollWindowComponent(scroll, ruler) {
        this.scroll = scroll;
        this.ruler = ruler;
        this.mode = LayoutMode.WINDOW;
        this.text = 'Hello World! '.repeat(1024 * 10);
        this.scroll.onScroll()
            .subscribe(function (event) { return console.info('Scroll', event); });
    }
    ScrollWindowComponent.prototype.changeMode = function () {
        this.mode = this.mode === LayoutMode.WINDOW ? LayoutMode.LAYOUT : LayoutMode.WINDOW;
    };
    ScrollWindowComponent.prototype.scrollTo = function (x, y) {
        this.scroll.scrollTo(x, y);
        this.ruler.getDimensions()
            .subscribe(function (position) { return console.info('Content Dimensions', position); });
        this.scroll.getPosition()
            .subscribe(function (size) { return console.info('Scroll Position', size); });
    };
    ScrollWindowComponent.ɵfac = function ScrollWindowComponent_Factory(t) { return new (t || ScrollWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutRulerService"])); };
    ScrollWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollWindowComponent, selectors: [["nb-scroll-window"]], decls: 13, vars: 3, consts: [[3, "withScroll"], ["nbButton", "", "size", "tiny", 3, "click"]], template: function ScrollWindowComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollWindowComponent_Template_button_click_4_listener() { return ctx.changeMode(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Mode");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollWindowComponent_Template_button_click_7_listener() { return ctx.scrollTo(10, 20); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scroll to 10, 20");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollWindowComponent_Template_button_click_9_listener() { return ctx.scrollTo(0, 0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scroll to 0, 0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("withScroll", ctx.mode === "layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Current: ", ctx.mode, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"]], encapsulation: 2 });
    return ScrollWindowComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-scroll-window',
                templateUrl: './scroll-window.component.html',
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutScrollService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutRulerService"] }]; }, null); })();


/***/ }),

/***/ "wiho":
/*!***************************************************************!*\
  !*** ./src/playground/without-layout/scroll/scroll.module.ts ***!
  \***************************************************************/
/*! exports provided: ScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollModule", function() { return ScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _scroll_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-routing.module */ "YcJj");
/* harmony import */ var _scroll_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-window.component */ "o4ML");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var ScrollModule = /** @class */ (function () {
    function ScrollModule() {
    }
    ScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScrollModule });
    ScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScrollModule_Factory(t) { return new (t || ScrollModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _scroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScrollRoutingModule"],
            ]] });
    return ScrollModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollModule, { declarations: [_scroll_window_component__WEBPACK_IMPORTED_MODULE_3__["ScrollWindowComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _scroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScrollRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _scroll_window_component__WEBPACK_IMPORTED_MODULE_3__["ScrollWindowComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _scroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScrollRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=scroll-scroll-module.js.map