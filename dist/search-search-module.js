(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "1mg2":
/*!***********************************************************************************!*\
  !*** ./src/playground/without-layout/search/search-with-input-event.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchWithInputEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWithInputEventComponent", function() { return SearchWithInputEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/search/search.component */ "Q/ca");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");









var SearchWithInputEventComponent = /** @class */ (function () {
    function SearchWithInputEventComponent(searchService) {
        this.searchService = searchService;
    }
    SearchWithInputEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.onSearchInput().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (data) {
            _this.value = data.term;
        });
    };
    SearchWithInputEventComponent.ɵfac = function SearchWithInputEventComponent_Factory(t) { return new (t || SearchWithInputEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"])); };
    SearchWithInputEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchWithInputEventComponent, selectors: [["nb-search-with-input-event"]], decls: 11, vars: 1, consts: [["fixed", ""], ["type", "rotate-layout", "tag", "search-input-event"], [1, "colored-column-basic"], ["accent", "info"]], template: function SearchWithInputEventComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-search", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-layout-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You searched for:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value || "-");
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutHeaderComponent"], _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["NbSearchComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"]], encapsulation: 2 });
    return SearchWithInputEventComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchWithInputEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-search-with-input-event',
                template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <nb-search type=\"rotate-layout\" tag=\"search-input-event\"></nb-search>\n      </nb-layout-header>\n      <nb-sidebar>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"colored-column-basic\">\n        <nb-card accent=\"info\">\n          <nb-card-header>You searched for:</nb-card-header>\n          <nb-card-body>\n            <h3>{{ value || '-' }}</h3>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"] }]; }, null); })();


/***/ }),

/***/ "DR3t":
/*!***************************************************************!*\
  !*** ./src/playground/without-layout/search/search.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-routing.module */ "GT3x");
/* harmony import */ var _search_customized_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-customized-test.component */ "EhnA");
/* harmony import */ var _search_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-event.component */ "d/wR");
/* harmony import */ var _search_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-showcase.component */ "xvu7");
/* harmony import */ var _search_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-test.component */ "sUEb");
/* harmony import */ var _search_with_input_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-with-input-event.component */ "1mg2");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.module */ "q1xA");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
    SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"],
            ]] });
    return SearchModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_customized_test_component__WEBPACK_IMPORTED_MODULE_3__["SearchCustomizedTestComponent"],
        _search_event_component__WEBPACK_IMPORTED_MODULE_4__["SearchEventComponent"],
        _search_showcase_component__WEBPACK_IMPORTED_MODULE_5__["SearchShowcaseComponent"],
        _search_test_component__WEBPACK_IMPORTED_MODULE_6__["SearchTestComponent"],
        _search_with_input_event_component__WEBPACK_IMPORTED_MODULE_7__["SearchWithInputEventComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"], _framework_theme_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _search_customized_test_component__WEBPACK_IMPORTED_MODULE_3__["SearchCustomizedTestComponent"],
                    _search_event_component__WEBPACK_IMPORTED_MODULE_4__["SearchEventComponent"],
                    _search_showcase_component__WEBPACK_IMPORTED_MODULE_5__["SearchShowcaseComponent"],
                    _search_test_component__WEBPACK_IMPORTED_MODULE_6__["SearchTestComponent"],
                    _search_with_input_event_component__WEBPACK_IMPORTED_MODULE_7__["SearchWithInputEventComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "EhnA":
/*!**********************************************************************************!*\
  !*** ./src/playground/without-layout/search/search-customized-test.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SearchCustomizedTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCustomizedTestComponent", function() { return SearchCustomizedTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/search/search.component */ "Q/ca");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var SearchCustomizedTestComponent = /** @class */ (function () {
    function SearchCustomizedTestComponent(searchService) {
        this.searchService = searchService;
    }
    SearchCustomizedTestComponent.prototype.ngOnInit = function () {
        this.searchService.onSearchSubmit().subscribe(function (data) {
            console.info("term: " + data.term + ", from search: " + data.tag);
        });
    };
    SearchCustomizedTestComponent.ɵfac = function SearchCustomizedTestComponent_Factory(t) { return new (t || SearchCustomizedTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"])); };
    SearchCustomizedTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchCustomizedTestComponent, selectors: [["nb-search-test-customized"]], decls: 46, vars: 0, consts: [["fixed", ""], ["href", "#", 1, "navbar-brand"], ["id", "customized-search", "type", "rotate-layout", "tag", "header-search-customized", "hint", "Custom hint", "placeholder", "Type here."], ["size", "small"], ["size", "medium"], ["size", "large"]], template: function SearchCustomizedTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ngx-admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-search", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-card", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["NbSearchComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"]], encapsulation: 2 });
    return SearchCustomizedTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchCustomizedTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-search-test-customized',
                template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <a class=\"navbar-brand\" href=\"#\">ngx-admin</a>\n        <nb-search id=\"customized-search\"\n                   type=\"rotate-layout\"\n                   tag=\"header-search-customized\"\n                   hint=\"Custom hint\"\n                   placeholder=\"Type here.\"></nb-search>\n      </nb-layout-header>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n        <nb-card size=\"small\">\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n        <nb-card size=\"medium\">\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n        <nb-card size=\"large\">\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"] }]; }, null); })();


/***/ }),

/***/ "GT3x":
/*!***********************************************************************!*\
  !*** ./src/playground/without-layout/search/search-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_customized_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-customized-test.component */ "EhnA");
/* harmony import */ var _search_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-event.component */ "d/wR");
/* harmony import */ var _search_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-showcase.component */ "xvu7");
/* harmony import */ var _search_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-test.component */ "sUEb");
/* harmony import */ var _search_with_input_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-with-input-event.component */ "1mg2");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */









var routes = [
    {
        path: 'search-customized-test.component',
        component: _search_customized_test_component__WEBPACK_IMPORTED_MODULE_2__["SearchCustomizedTestComponent"],
    },
    {
        path: 'search-event.component',
        component: _search_event_component__WEBPACK_IMPORTED_MODULE_3__["SearchEventComponent"],
    },
    {
        path: 'search-showcase.component',
        component: _search_showcase_component__WEBPACK_IMPORTED_MODULE_4__["SearchShowcaseComponent"],
    },
    {
        path: 'search-test.component',
        component: _search_test_component__WEBPACK_IMPORTED_MODULE_5__["SearchTestComponent"],
    },
    {
        path: 'search-with-input-event.component',
        component: _search_with_input_event_component__WEBPACK_IMPORTED_MODULE_6__["SearchWithInputEventComponent"],
    },
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
    SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SearchRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "d/wR":
/*!************************************************************************!*\
  !*** ./src/playground/without-layout/search/search-event.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEventComponent", function() { return SearchEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/search/search.component */ "Q/ca");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");








var SearchEventComponent = /** @class */ (function () {
    function SearchEventComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.value = '';
        this.searchService.onSearchSubmit()
            .subscribe(function (data) {
            _this.value = data.term;
        });
    }
    SearchEventComponent.ɵfac = function SearchEventComponent_Factory(t) { return new (t || SearchEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"])); };
    SearchEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchEventComponent, selectors: [["nb-search-event"]], decls: 11, vars: 1, consts: [["fixed", ""], ["type", "rotate-layout"], [1, "colored-column-basic"], ["accent", "info"]], template: function SearchEventComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-search", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-layout-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You searched for:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value || "-");
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["NbSearchComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"]], encapsulation: 2 });
    return SearchEventComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-search-event',
                templateUrl: './search-event.component.html',
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"] }]; }, null); })();


/***/ }),

/***/ "sUEb":
/*!***********************************************************************!*\
  !*** ./src/playground/without-layout/search/search-test.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTestComponent", function() { return SearchTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/search/search.component */ "Q/ca");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var SearchTestComponent = /** @class */ (function () {
    function SearchTestComponent(searchService) {
        this.searchService = searchService;
    }
    SearchTestComponent.prototype.ngOnInit = function () {
        this.searchService.onSearchSubmit().subscribe(function (data) {
            console.info("term: " + data.term + ", from search: " + data.tag);
        });
    };
    SearchTestComponent.ɵfac = function SearchTestComponent_Factory(t) { return new (t || SearchTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"])); };
    SearchTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchTestComponent, selectors: [["nb-search-test"]], decls: 46, vars: 0, consts: [["fixed", ""], ["href", "#", 1, "navbar-brand"], ["type", "rotate-layout", "tag", "header-search"], ["size", "small"], ["size", "medium"], ["size", "large"]], template: function SearchTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ngx-admin");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-search", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-card", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["NbSearchComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"]], encapsulation: 2 });
    return SearchTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-search-test',
                template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <a class=\"navbar-brand\" href=\"#\">ngx-admin</a>\n        <nb-search type=\"rotate-layout\" tag=\"header-search\"></nb-search>\n      </nb-layout-header>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n        <nb-card size=\"small\">\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n        <nb-card size=\"medium\">\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n        <nb-card size=\"large\">\n          <nb-card-header>\n            <span>Header</span>\n          </nb-card-header>\n          <nb-card-body>\n            <span>Body</span>\n          </nb-card-body>\n          <nb-card-footer>\n            <span>Footer</span>\n          </nb-card-footer>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSearchService"] }]; }, null); })();


/***/ }),

/***/ "xvu7":
/*!***************************************************************************!*\
  !*** ./src/playground/without-layout/search/search-showcase.component.ts ***!
  \***************************************************************************/
/*! exports provided: SearchShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchShowcaseComponent", function() { return SearchShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/search/search.component */ "Q/ca");
/* harmony import */ var _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/sidebar/sidebar.component */ "2CvD");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");






var SearchShowcaseComponent = /** @class */ (function () {
    function SearchShowcaseComponent() {
    }
    SearchShowcaseComponent.ɵfac = function SearchShowcaseComponent_Factory(t) { return new (t || SearchShowcaseComponent)(); };
    SearchShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchShowcaseComponent, selectors: [["nb-search-showcase"]], decls: 11, vars: 0, consts: [["fixed", ""], ["type", "rotate-layout"], [1, "colored-column-basic"], ["accent", "info"]], template: function SearchShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-search", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Interstellar Cloud");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _framework_theme_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__["NbSearchComponent"], _framework_theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["NbSidebarComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"]], encapsulation: 2 });
    return SearchShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-search-showcase',
                templateUrl: './search-showcase.component.html',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map