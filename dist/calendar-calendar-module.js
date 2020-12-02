(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "6Ksm":
/*!****************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-showcase.component.ts ***!
  \****************************************************************************/
/*! exports provided: CalendarShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarShowcaseComponent", function() { return CalendarShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var CalendarShowcaseComponent = /** @class */ (function () {
    function CalendarShowcaseComponent() {
        this.date = new Date();
    }
    CalendarShowcaseComponent.ɵfac = function CalendarShowcaseComponent_Factory(t) { return new (t || CalendarShowcaseComponent)(); };
    CalendarShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarShowcaseComponent, selectors: [["nb-calendar-showcase"]], decls: 7, vars: 4, consts: [[1, "h5"], [3, "date", "dateChange"]], template: function CalendarShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarShowcaseComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });
    return CalendarShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-showcase',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar [(date)]=\"date\">\n        </nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "JFaw":
/*!**********************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-bounding-month.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CalendarBoundingMonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarBoundingMonthComponent", function() { return CalendarBoundingMonthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var CalendarBoundingMonthComponent = /** @class */ (function () {
    function CalendarBoundingMonthComponent() {
        this.date = new Date();
    }
    CalendarBoundingMonthComponent.ɵfac = function CalendarBoundingMonthComponent_Factory(t) { return new (t || CalendarBoundingMonthComponent)(); };
    CalendarBoundingMonthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarBoundingMonthComponent, selectors: [["nb-calendar-bounding-month"]], decls: 7, vars: 5, consts: [[1, "h5"], [3, "date", "boundingMonth", "dateChange"]], template: function CalendarBoundingMonthComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarBoundingMonthComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date)("boundingMonth", false);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });
    return CalendarBoundingMonthComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarBoundingMonthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-bounding-month',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar [(date)]=\"date\" [boundingMonth]=\"false\"></nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "KTEb":
/*!**********************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-range-showcase.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CalendarRangeShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRangeShowcaseComponent", function() { return CalendarRangeShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar-range.component */ "EoAk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var CalendarRangeShowcaseComponent = /** @class */ (function () {
    function CalendarRangeShowcaseComponent(dateService) {
        this.dateService = dateService;
        this.range = {
            start: this.dateService.addDay(this.monthStart, 3),
            end: this.dateService.addDay(this.monthEnd, -3),
        };
    }
    Object.defineProperty(CalendarRangeShowcaseComponent.prototype, "monthStart", {
        get: function () {
            return this.dateService.getMonthStart(new Date());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarRangeShowcaseComponent.prototype, "monthEnd", {
        get: function () {
            return this.dateService.getMonthEnd(new Date());
        },
        enumerable: false,
        configurable: true
    });
    CalendarRangeShowcaseComponent.ɵfac = function CalendarRangeShowcaseComponent_Factory(t) { return new (t || CalendarRangeShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDateService"])); };
    CalendarRangeShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarRangeShowcaseComponent, selectors: [["nb-calendar-range-showcase"]], decls: 8, vars: 7, consts: [[1, "h5"], [3, "range", "rangeChange"]], template: function CalendarRangeShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-calendar-range", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rangeChange", function CalendarRangeShowcaseComponent_Template_nb_calendar_range_rangeChange_7_listener($event) { return ctx.range = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Selected range: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.range.start), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.range.end), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("range", ctx.range);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_range_component__WEBPACK_IMPORTED_MODULE_3__["NbCalendarRangeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], encapsulation: 2 });
    return CalendarRangeShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarRangeShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-range-showcase',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected range: {{ range.start | date }} - {{ range.end | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar-range [(range)]=\"range\"></nb-calendar-range>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDateService"] }]; }, null); })();


/***/ }),

/***/ "N0Nw":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendar_bounding_month_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-bounding-month.component */ "JFaw");
/* harmony import */ var _calendar_custom_day_cell_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-custom-day-cell-showcase.component */ "uBA0");
/* harmony import */ var _calendar_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-filter.component */ "dRE+");
/* harmony import */ var _calendar_min_max_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-min-max.component */ "yqvl");
/* harmony import */ var _calendar_range_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-range-showcase.component */ "KTEb");
/* harmony import */ var _calendar_showcase_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-showcase.component */ "6Ksm");
/* harmony import */ var _calendar_size_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-size.component */ "duul");
/* harmony import */ var _calendar_start_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-start-view.component */ "cops");
/* harmony import */ var _calendar_without_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar-without-navigation.component */ "jIrA");
/* harmony import */ var _calendar_week_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-week-number.component */ "hQwP");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */














var routes = [
    {
        path: 'calendar-bounding-month.component',
        component: _calendar_bounding_month_component__WEBPACK_IMPORTED_MODULE_2__["CalendarBoundingMonthComponent"],
    },
    {
        path: 'calendar-custom-day-cell-showcase.component',
        component: _calendar_custom_day_cell_showcase_component__WEBPACK_IMPORTED_MODULE_3__["CalendarCustomDayCellShowcaseComponent"],
    },
    {
        path: 'calendar-filter.component',
        component: _calendar_filter_component__WEBPACK_IMPORTED_MODULE_4__["CalendarFilterComponent"],
    },
    {
        path: 'calendar-min-max.component',
        component: _calendar_min_max_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMinMaxComponent"],
    },
    {
        path: 'calendar-range-showcase.component',
        component: _calendar_range_showcase_component__WEBPACK_IMPORTED_MODULE_6__["CalendarRangeShowcaseComponent"],
    },
    {
        path: 'calendar-showcase.component',
        component: _calendar_showcase_component__WEBPACK_IMPORTED_MODULE_7__["CalendarShowcaseComponent"],
    },
    {
        path: 'calendar-size.component',
        component: _calendar_size_component__WEBPACK_IMPORTED_MODULE_8__["CalendarSizeComponent"],
    },
    {
        path: 'calendar-start-view.component',
        component: _calendar_start_view_component__WEBPACK_IMPORTED_MODULE_9__["CalendarStartViewComponent"],
    },
    {
        path: 'calendar-without-navigation.component',
        component: _calendar_without_navigation_component__WEBPACK_IMPORTED_MODULE_10__["CalendarWithoutNavigationComponent"],
    },
    {
        path: 'calendar-week-number.component',
        component: _calendar_week_number_component__WEBPACK_IMPORTED_MODULE_11__["CalendarWeekNumberComponent"],
    },
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
    CalendarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CalendarRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "OZvx":
/*!**********************************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/components/calendar-custom-day-cell.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CalendarCustomDayCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCustomDayCellComponent", function() { return CalendarCustomDayCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CalendarCustomDayCellComponent = /** @class */ (function (_super) {
    __extends(CalendarCustomDayCellComponent, _super);
    function CalendarCustomDayCellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarCustomDayCellComponent.ɵfac = function CalendarCustomDayCellComponent_Factory(t) { return ɵCalendarCustomDayCellComponent_BaseFactory(t || CalendarCustomDayCellComponent); };
    CalendarCustomDayCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarCustomDayCellComponent, selectors: [["nb-calendar-custom-day-cell"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 4, consts: [[1, "cell-content"], [1, "caption"]], template: function CalendarCustomDayCellComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.day);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-control", ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.day + 100) * ctx.day, "$");
        } }, styles: [".cell-content[_ngcontent-%COMP%] {\n      flex-direction: column;\n    }"] });
    return CalendarCustomDayCellComponent;
}(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCalendarDayCellComponent"]));

var ɵCalendarCustomDayCellComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CalendarCustomDayCellComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarCustomDayCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-custom-day-cell',
                styles: ["\n    .cell-content {\n      flex-direction: column;\n    }\n  "],
                template: "\n    <div class=\"cell-content\">\n      <div>{{ day }}</div>\n      <span class=\"caption\" [class.text-control]=\"selected\">{{ (day + 100) * day }}$</span>\n    </div>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "XPUo":
/*!****************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar.module.ts ***!
  \****************************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-routing.module */ "N0Nw");
/* harmony import */ var _calendar_bounding_month_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-bounding-month.component */ "JFaw");
/* harmony import */ var _calendar_custom_day_cell_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-custom-day-cell-showcase.component */ "uBA0");
/* harmony import */ var _calendar_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-filter.component */ "dRE+");
/* harmony import */ var _calendar_min_max_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-min-max.component */ "yqvl");
/* harmony import */ var _calendar_range_showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-range-showcase.component */ "KTEb");
/* harmony import */ var _calendar_showcase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-showcase.component */ "6Ksm");
/* harmony import */ var _calendar_size_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar-size.component */ "duul");
/* harmony import */ var _calendar_start_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-start-view.component */ "cops");
/* harmony import */ var _calendar_without_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar-without-navigation.component */ "jIrA");
/* harmony import */ var _components_calendar_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/calendar-custom-day-cell.component */ "OZvx");
/* harmony import */ var _calendar_week_number_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar-week-number.component */ "hQwP");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
















var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarModule });
    CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarRangeModule"],
                _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalendarRoutingModule"],
            ]] });
    return CalendarModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_calendar_bounding_month_component__WEBPACK_IMPORTED_MODULE_4__["CalendarBoundingMonthComponent"],
        _calendar_custom_day_cell_showcase_component__WEBPACK_IMPORTED_MODULE_5__["CalendarCustomDayCellShowcaseComponent"],
        _calendar_filter_component__WEBPACK_IMPORTED_MODULE_6__["CalendarFilterComponent"],
        _calendar_min_max_component__WEBPACK_IMPORTED_MODULE_7__["CalendarMinMaxComponent"],
        _calendar_range_showcase_component__WEBPACK_IMPORTED_MODULE_8__["CalendarRangeShowcaseComponent"],
        _calendar_showcase_component__WEBPACK_IMPORTED_MODULE_9__["CalendarShowcaseComponent"],
        _calendar_size_component__WEBPACK_IMPORTED_MODULE_10__["CalendarSizeComponent"],
        _calendar_start_view_component__WEBPACK_IMPORTED_MODULE_11__["CalendarStartViewComponent"],
        _calendar_without_navigation_component__WEBPACK_IMPORTED_MODULE_12__["CalendarWithoutNavigationComponent"],
        _components_calendar_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_13__["CalendarCustomDayCellComponent"],
        _calendar_week_number_component__WEBPACK_IMPORTED_MODULE_14__["CalendarWeekNumberComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarRangeModule"],
        _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalendarRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _calendar_bounding_month_component__WEBPACK_IMPORTED_MODULE_4__["CalendarBoundingMonthComponent"],
                    _calendar_custom_day_cell_showcase_component__WEBPACK_IMPORTED_MODULE_5__["CalendarCustomDayCellShowcaseComponent"],
                    _calendar_filter_component__WEBPACK_IMPORTED_MODULE_6__["CalendarFilterComponent"],
                    _calendar_min_max_component__WEBPACK_IMPORTED_MODULE_7__["CalendarMinMaxComponent"],
                    _calendar_range_showcase_component__WEBPACK_IMPORTED_MODULE_8__["CalendarRangeShowcaseComponent"],
                    _calendar_showcase_component__WEBPACK_IMPORTED_MODULE_9__["CalendarShowcaseComponent"],
                    _calendar_size_component__WEBPACK_IMPORTED_MODULE_10__["CalendarSizeComponent"],
                    _calendar_start_view_component__WEBPACK_IMPORTED_MODULE_11__["CalendarStartViewComponent"],
                    _calendar_without_navigation_component__WEBPACK_IMPORTED_MODULE_12__["CalendarWithoutNavigationComponent"],
                    _components_calendar_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_13__["CalendarCustomDayCellComponent"],
                    _calendar_week_number_component__WEBPACK_IMPORTED_MODULE_14__["CalendarWeekNumberComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCalendarRangeModule"],
                    _calendar_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalendarRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "cops":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-start-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalendarStartViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarStartViewComponent", function() { return CalendarStartViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var CalendarStartViewComponent = /** @class */ (function () {
    function CalendarStartViewComponent() {
        this.date = new Date();
    }
    CalendarStartViewComponent.ɵfac = function CalendarStartViewComponent_Factory(t) { return new (t || CalendarStartViewComponent)(); };
    CalendarStartViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarStartViewComponent, selectors: [["nb-calendar-start-view"]], decls: 7, vars: 4, consts: [[1, "h5"], ["startView", "month", 3, "date", "dateChange"]], template: function CalendarStartViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarStartViewComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });
    return CalendarStartViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarStartViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-start-view',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar startView=\"month\" [(date)]=\"date\"></nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "dRE+":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-filter.component.ts ***!
  \**************************************************************************/
/*! exports provided: CalendarFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarFilterComponent", function() { return CalendarFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var CalendarFilterComponent = /** @class */ (function () {
    function CalendarFilterComponent() {
        this.date = new Date();
        this.filter = function (date) { return date.getDay() !== 0 && date.getDay() !== 6; };
    }
    CalendarFilterComponent.ɵfac = function CalendarFilterComponent_Factory(t) { return new (t || CalendarFilterComponent)(); };
    CalendarFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarFilterComponent, selectors: [["nb-calendar-filter"]], decls: 7, vars: 5, consts: [[1, "h5"], [3, "date", "filter", "dateChange"]], template: function CalendarFilterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarFilterComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date)("filter", ctx.filter);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });
    return CalendarFilterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-filter',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar [(date)]=\"date\" [filter]=\"filter\"></nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "duul":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-size.component.ts ***!
  \************************************************************************/
/*! exports provided: CalendarSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarSizeComponent", function() { return CalendarSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var CalendarSizeComponent = /** @class */ (function () {
    function CalendarSizeComponent() {
        this.date = new Date();
    }
    CalendarSizeComponent.ɵfac = function CalendarSizeComponent_Factory(t) { return new (t || CalendarSizeComponent)(); };
    CalendarSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarSizeComponent, selectors: [["nb-calendar-size"]], decls: 7, vars: 4, consts: [[1, "h5"], ["size", "large", 3, "date", "dateChange"]], template: function CalendarSizeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarSizeComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });
    return CalendarSizeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-size',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar size=\"large\" [(date)]=\"date\"></nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "hQwP":
/*!*******************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-week-number.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CalendarWeekNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekNumberComponent", function() { return CalendarWeekNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _framework_theme_components_calendar_calendar_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar-range.component */ "EoAk");








var CalendarWeekNumberComponent = /** @class */ (function () {
    function CalendarWeekNumberComponent(dateService) {
        this.showWeekNumber = false;
        this.size = 'medium';
        this.date = dateService.today();
        var yesterday = dateService.addDay(this.date, -1);
        var tomorrow = dateService.addDay(this.date, 1);
        this.dateRange = { start: yesterday, end: tomorrow };
    }
    CalendarWeekNumberComponent.prototype.toggleWeekNumber = function () {
        this.showWeekNumber = !this.showWeekNumber;
    };
    CalendarWeekNumberComponent.prototype.toggleSize = function () {
        this.size = this.size === 'medium' ? 'large' : 'medium';
    };
    CalendarWeekNumberComponent.ɵfac = function CalendarWeekNumberComponent_Factory(t) { return new (t || CalendarWeekNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDateService"])); };
    CalendarWeekNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarWeekNumberComponent, selectors: [["ng-component"]], decls: 10, vars: 8, consts: [[1, "example-items-rows"], ["nbButton", "", 3, "click"], [3, "date", "showWeekNumber", "size", "dateChange"], [3, "range", "showWeekNumber", "size", "rangeChange"]], template: function CalendarWeekNumberComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarWeekNumberComponent_Template_button_click_3_listener() { return ctx.toggleSize(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarWeekNumberComponent_Template_button_click_5_listener() { return ctx.toggleWeekNumber(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-calendar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarWeekNumberComponent_Template_nb_calendar_dateChange_8_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-calendar-range", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rangeChange", function CalendarWeekNumberComponent_Template_nb_calendar_range_rangeChange_9_listener($event) { return ctx.dateRange = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Change to ", ctx.size === "medium" ? "large" : "medium", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.showWeekNumber ? "Hide" : "Show", " week number column ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date)("showWeekNumber", ctx.showWeekNumber)("size", ctx.size);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("range", ctx.dateRange)("showWeekNumber", ctx.showWeekNumber)("size", ctx.size);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["NbCalendarComponent"], _framework_theme_components_calendar_calendar_range_component__WEBPACK_IMPORTED_MODULE_5__["NbCalendarRangeComponent"]], styles: ["button[_ngcontent-%COMP%] { margin-bottom: 1rem; }"] });
    return CalendarWeekNumberComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWeekNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n        <div class=\"example-items-rows\">\n          <button (click)=\"toggleSize()\" nbButton>\n            Change to {{ this.size === 'medium' ? 'large' : 'medium' }}\n          </button>\n          <button (click)=\"toggleWeekNumber()\" nbButton>\n            {{ this.showWeekNumber ? 'Hide' : 'Show' }} week number column\n          </button>\n        </div>\n\n        <div class=\"example-items-rows\">\n          <nb-calendar [(date)]=\"date\" [showWeekNumber]=\"showWeekNumber\" [size]=\"size\"></nb-calendar>\n          <nb-calendar-range [(range)]=\"dateRange\"\n                             [showWeekNumber]=\"showWeekNumber\"\n                             [size]=\"size\">\n          </nb-calendar-range>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  ",
                styles: [" button { margin-bottom: 1rem; } "],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDateService"] }]; }, null); })();


/***/ }),

/***/ "jIrA":
/*!**************************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-without-navigation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CalendarWithoutNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWithoutNavigationComponent", function() { return CalendarWithoutNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var CalendarWithoutNavigationComponent = /** @class */ (function () {
    function CalendarWithoutNavigationComponent() {
        this.date = new Date();
    }
    CalendarWithoutNavigationComponent.ɵfac = function CalendarWithoutNavigationComponent_Factory(t) { return new (t || CalendarWithoutNavigationComponent)(); };
    CalendarWithoutNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarWithoutNavigationComponent, selectors: [["nb-calendar-without-header"]], decls: 7, vars: 5, consts: [[1, "h5"], ["showWeekNumber", "true", 3, "showNavigation", "date", "dateChange"]], template: function CalendarWithoutNavigationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarWithoutNavigationComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigation", false)("date", ctx.date);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });
    return CalendarWithoutNavigationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarWithoutNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-without-header',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar [showNavigation]=\"false\" [(date)]=\"date\" showWeekNumber=\"true\"></nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "uBA0":
/*!********************************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-custom-day-cell-showcase.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CalendarCustomDayCellShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCustomDayCellShowcaseComponent", function() { return CalendarCustomDayCellShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_calendar_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/calendar-custom-day-cell.component */ "OZvx");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var CalendarCustomDayCellShowcaseComponent = /** @class */ (function () {
    function CalendarCustomDayCellShowcaseComponent() {
        this.date = new Date();
        this.dayCellComponent = _components_calendar_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_1__["CalendarCustomDayCellComponent"];
    }
    CalendarCustomDayCellShowcaseComponent.ɵfac = function CalendarCustomDayCellShowcaseComponent_Factory(t) { return new (t || CalendarCustomDayCellShowcaseComponent)(); };
    CalendarCustomDayCellShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarCustomDayCellShowcaseComponent, selectors: [["nb-calendar-custom-day-cell-showcase"]], decls: 7, vars: 5, consts: [[1, "h5"], ["size", "large", 3, "dayCellComponent", "date", "dateChange"]], template: function CalendarCustomDayCellShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarCustomDayCellShowcaseComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dayCellComponent", ctx.dayCellComponent)("date", ctx.date);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], encapsulation: 2 });
    return CalendarCustomDayCellShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarCustomDayCellShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-custom-day-cell-showcase',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar [dayCellComponent]=\"dayCellComponent\" [(date)]=\"date\" size=\"large\">\n        </nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
                entryComponents: [_components_calendar_custom_day_cell_component__WEBPACK_IMPORTED_MODULE_1__["CalendarCustomDayCellComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yqvl":
/*!***************************************************************************!*\
  !*** ./src/playground/with-layout/calendar/calendar-min-max.component.ts ***!
  \***************************************************************************/
/*! exports provided: CalendarMinMaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMinMaxComponent", function() { return CalendarMinMaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/calendar/calendar.component */ "sWIW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */







var CalendarMinMaxComponent = /** @class */ (function () {
    function CalendarMinMaxComponent(dateService) {
        this.date = dateService.today();
        this.date.setDate(15);
        this.min = dateService.addDay(this.date, -7);
        this.max = dateService.addDay(this.date, 7);
    }
    CalendarMinMaxComponent.ɵfac = function CalendarMinMaxComponent_Factory(t) { return new (t || CalendarMinMaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDateService"])); };
    CalendarMinMaxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarMinMaxComponent, selectors: [["nb-calendar-min-max"]], decls: 7, vars: 6, consts: [[1, "h5"], [3, "date", "min", "max", "dateChange"]], template: function CalendarMinMaxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CalendarMinMaxComponent_Template_nb_calendar_dateChange_6_listener($event) { return ctx.date = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.date), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date)("min", ctx.min)("max", ctx.max);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["NbCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], encapsulation: 2 });
    return CalendarMinMaxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarMinMaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-calendar-min-max',
                template: "\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"h5\">Selected date: {{ date | date }}</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-calendar [(date)]=\"date\" [min]=\"min\" [max]=\"max\"></nb-calendar>\n      </nb-card-body>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map