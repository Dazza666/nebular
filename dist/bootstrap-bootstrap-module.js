(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bootstrap-bootstrap-module"],{

/***/ "07OW":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./src/playground/without-styles/bootstrap/styles.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../../../node_modules/raw-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/resolve-url-loader??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!./styles.scss */ "PMTq");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "1kSV":
/*!***************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js ***!
  \***************************************************************************************/
/*! exports provided: NgbAccordionModule, NgbAccordionConfig, NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle, NgbAlertModule, NgbAlertConfig, NgbAlert, NgbButtonsModule, NgbButtonLabel, NgbCheckBox, NgbRadio, NgbRadioGroup, NgbCarouselModule, NgbCarouselConfig, NgbCarousel, NgbSlide, NgbCollapseModule, NgbCollapse, NgbCalendar, NgbCalendarGregorian, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbCalendarHebrew, NgbCalendarPersian, NgbDatepickerModule, NgbDatepickerI18n, NgbDatepickerI18nHebrew, NgbDatepickerConfig, NgbDate, NgbDateParserFormatter, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter, NgbDatepicker, NgbInputDatepicker, NgbDropdownModule, NgbDropdownAnchor, NgbDropdownConfig, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbDropdown, NgbModalModule, NgbModal, NgbModalConfig, NgbActiveModal, NgbModalRef, ModalDismissReasons, NgbPaginationModule, NgbPaginationConfig, NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPopoverModule, NgbPopoverConfig, NgbPopover, NgbProgressbarModule, NgbProgressbarConfig, NgbProgressbar, NgbRatingModule, NgbRatingConfig, NgbRating, NgbTabsetModule, NgbTabsetConfig, NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTimepickerModule, NgbTimepickerConfig, NgbTimepicker, NgbTimeAdapter, NgbTooltipModule, NgbTooltipConfig, NgbTooltip, NgbHighlight, NgbTypeaheadModule, NgbTypeaheadConfig, NgbTypeahead, NgbModule, ɵa, ɵi, ɵj, ɵd, ɵg, ɵh, ɵs, ɵc, ɵe, ɵf, ɵr, ɵba, ɵb, ɵk, ɵl, ɵt, ɵv, ɵu, ɵm, ɵn, ɵo, ɵp, ɵq, ɵx, ɵy, ɵz, ɵbb, ɵw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function() { return NgbAccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return NgbAccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return NgbAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return NgbPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return NgbPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return NgbPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelHeader", function() { return NgbPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelToggle", function() { return NgbPanelToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function() { return NgbAlertModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return NgbAlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return NgbAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function() { return NgbButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function() { return NgbButtonLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return NgbCheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadio", function() { return NgbRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return NgbRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function() { return NgbCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return NgbCarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return NgbCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return NgbSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function() { return NgbCollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return NgbCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function() { return NgbCalendarGregorian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return NgbCalendarIslamicCivil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return NgbCalendarIslamicUmalqura; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarHebrew", function() { return NgbCalendarHebrew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarPersian", function() { return NgbCalendarPersian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function() { return NgbDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nHebrew", function() { return NgbDatepickerI18nHebrew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return NgbDatepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDate", function() { return NgbDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return NgbDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateNativeAdapter", function() { return NgbDateNativeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateNativeUTCAdapter", function() { return NgbDateNativeUTCAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return NgbDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return NgbInputDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function() { return NgbDropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownAnchor", function() { return NgbDropdownAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return NgbDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownItem", function() { return NgbDropdownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function() { return NgbDropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function() { return NgbDropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return NgbDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function() { return NgbModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return NgbModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalConfig", function() { return NgbModalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return NgbActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return NgbModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return ModalDismissReasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function() { return NgbPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return NgbPaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return NgbPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationEllipsis", function() { return NgbPaginationEllipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationFirst", function() { return NgbPaginationFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationLast", function() { return NgbPaginationLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationNext", function() { return NgbPaginationNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationNumber", function() { return NgbPaginationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationPrevious", function() { return NgbPaginationPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function() { return NgbPopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return NgbPopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return NgbPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function() { return NgbProgressbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return NgbProgressbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return NgbProgressbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function() { return NgbRatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return NgbRatingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return NgbRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function() { return NgbTabsetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return NgbTabsetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return NgbTabset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return NgbTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return NgbTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return NgbTabTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function() { return NgbTimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return NgbTimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return NgbTimepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimeAdapter", function() { return NgbTimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function() { return NgbTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return NgbTooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return NgbTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return NgbHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function() { return NgbTypeaheadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return NgbTypeaheadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return NgbTypeahead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModule", function() { return NgbModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NGB_CAROUSEL_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NGB_DATEPICKER_DATE_ADAPTER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgbDateStructAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgbDatepickerDayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NGB_DATEPICKER_18N_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgbDatepickerI18nDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return NgbDatepickerKeyMapService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgbDatepickerMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgbDatepickerNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgbDatepickerNavigationSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgbDatepickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return NgbCalendarHijri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NGB_DATEPICKER_CALENDAR_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NGB_DATEPICKER_PARSER_FORMATTER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgbDateISOParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return NgbModalBackdrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return NgbModalStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return NgbModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NGB_DATEPICKER_TIME_ADAPTER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgbTimeStructAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgbTypeaheadWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return ARIA_LIVE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return ARIA_LIVE_DELAY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return Live; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ScrollBar; });
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "h4VS");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










function _templateObject34() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.AM\u241F7a15fe3d37ae85ad0d31e40bb0c366e6a6ce6aa9\u241F5815402189639789859:AM"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.PM\u241Fea3531b9e785bbfa3a8e3bac5a63256791fe6742\u241F8786206544894467023:PM"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.decrement-seconds\u241F5db47ac104294243a70eb9124fbea9d0004ddf69\u241F753633511487974857:Decrement seconds"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.increment-seconds\u241F912322ecee7d659d04dcf494a70e22e49d334b26\u241F5364772110539092174:Increment seconds"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.seconds\u241F4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c\u241F8874012390997067175:Seconds"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.SS\u241Febe38d36a40a2383c5fefa9b4608ffbda08bd4a3\u241F3628127143071124194:SS"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.decrement-minutes\u241Fc1a6899e529c096da5b660385d4e77fe1f7ad271\u241F7447789825403243588:Decrement minutes"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.increment-minutes\u241Ff5a4a3bc05e053f6732475d0e74875ec01c3a348\u241F180147720391025024:Increment minutes"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.decrement-hours\u241F147c7a19429da7d999e247d22e33fee370b1691b\u241F3651829882940481818:Decrement hours"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.increment-hours\u241Fcb74bc1d625a6c1742f0d7d47306cf495780c218\u241F5939278348542933629:Increment hours"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.minutes\u241F41e62daa962947c0d23ded0981975d1bddf0bf38\u241F5531237363767747080:Minutes"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.MM\u241F72c8edf6a50068a05bde70991e36b1e881f4ca54\u241F1647282246509919852:MM"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.hours\u241F3bbce5fef7e1151da052a4e529453edb340e3912\u241F8070396816726827304:Hours"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.timepicker.HH\u241Fce676ab1d6d98f85c836381cf100a4a91ef95a1f\u241F4043638465245303811:HH"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.progressbar.value\u241F04d611d19c117c60c9e14d0a04399a027184bc77\u241F5214781723415385277:", ":INTERPOLATION:%"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.last-aria\u241F5c729788ba138508aca1bec050b610f7bf81db3e\u241F4882268002141858767:Last"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.next-aria\u241Ff732c304c7433e5a83ffcd862c3dce709a0f4982\u241F3885497195825665706:Next"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.previous-aria\u241F680d5c75b7fd8d37961083608b9fcdc4167b4c43\u241F4452427314943113135:Previous"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.first-aria\u241Ff2f852318759c6396b5d3d17031d53817d7b38cc\u241F2241508602425256033:First"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.last\u241F49f27a460bc97e7e00be5b37098bfa79884fc7d9\u241F5277020320267646988:\xBB\xBB"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.next\u241Fba9cbb4ff311464308a3627e4f1c3345d9fe6d7d\u241F5458177150283468089:\xBB"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.previous\u241F6e52b6ee77a4848d899dd21b591c6fd499e3aef3\u241F6479320895410098858:\xAB"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.pagination.first\u241F656506dfd46380956a655f919f1498d018f75ca0\u241F6867721956102594380:\xAB\xAB"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.select-year\u241F8ceb09d002bf0c5d1cac171dfbffe1805d2b3962\u241F8852264961585484321:Select year"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.select-year\u241F8ceb09d002bf0c5d1cac171dfbffe1805d2b3962\u241F8852264961585484321:Select year"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.select-month\u241F1dbc84807f35518112f62e5775d1daebd3d8462b\u241F2253869508135064750:Select month"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.select-month\u241F1dbc84807f35518112f62e5775d1daebd3d8462b\u241F2253869508135064750:Select month"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.next-month\u241F4bd046985cfe13040d5ef0cd881edce0968a111a\u241F3628374603023447227:Next month"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.next-month\u241F4bd046985cfe13040d5ef0cd881edce0968a111a\u241F3628374603023447227:Next month"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.previous-month\u241Fc3b08b07b5ab98e7cdcf18df39355690ab7d3884\u241F8586908745456864217:Previous month"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.datepicker.previous-month\u241Fc3b08b07b5ab98e7cdcf18df39355690ab7d3884\u241F8586908745456864217:Previous month"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.carousel.next\u241Ff732c304c7433e5a83ffcd862c3dce709a0f4982\u241F3885497195825665706:Next"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.carousel.previous\u241F680d5c75b7fd8d37961083608b9fcdc4167b4c43\u241F4452427314943113135:Previous"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])([":@@ngb.alert.close\u241Ff4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8\u241F7819314041543176992:Close"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @return {?}
 */





function NgbAccordion_ng_template_0_ng_template_2_Template(rf, ctx) {}

function NgbAccordion_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbAccordion_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var panel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbPanelToggle", panel_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", panel_r3.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", panel_r3.titleTpl == null ? null : panel_r3.titleTpl.templateRef);
  }
}

function NgbAccordion_ng_template_2_ng_template_2_Template(rf, ctx) {}

function NgbAccordion_ng_template_2_div_3_ng_template_2_Template(rf, ctx) {}

function NgbAccordion_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_div_3_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var panel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("show", panel_r5.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("id", panel_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-labelledby", panel_r5.id + "-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", panel_r5.contentTpl == null ? null : panel_r5.contentTpl.templateRef);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    $implicit: a0,
    opened: a1
  };
};

function NgbAccordion_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbAccordion_ng_template_2_div_3_Template, 3, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var panel_r5 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("card-header " + (panel_r5.type ? "bg-" + panel_r5.type : ctx_r2.type ? "bg-" + ctx_r2.type : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "", panel_r5.id, "-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (panel_r5.headerTpl == null ? null : panel_r5.headerTpl.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c0, panel_r5, panel_r5.isOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.destroyOnHide || panel_r5.isOpen);
  }
}

function NgbAlert_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbAlert_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r1.closeHandler();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

var _c3 = ["*"];

function NgbCarousel_ol_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbCarousel_ol_0_li_1_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      var slide_r5 = ctx.$implicit;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r6.select(slide_r5.id);
      return ctx_r6.pauseOnHover && ctx_r6.pause();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var slide_r5 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", slide_r5.id === ctx_r4.activeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", slide_r5.id);
  }
}

function NgbCarousel_ol_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbCarousel_ol_0_li_1_Template, 1, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
  }
}

function NgbCarousel_div_2_ng_template_1_Template(rf, ctx) {}

function NgbCarousel_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbCarousel_div_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var slide_r8 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", slide_r8.id === ctx_r1.activeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", slide_r8.tplRef);
  }
}

function NgbCarousel_a_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbCarousel_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r10.prev();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function NgbCarousel_a_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbCarousel_a_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r12.next();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

var _c8 = ["months"];

function NgbDatepicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 7);
  }

  if (rf & 2) {
    var date_r6 = ctx.date;
    var currentMonth_r7 = ctx.currentMonth;
    var selected_r8 = ctx.selected;
    var disabled_r9 = ctx.disabled;
    var focused_r10 = ctx.focused;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("date", date_r6)("currentMonth", currentMonth_r7)("selected", selected_r8)("disabled", disabled_r9)("focused", focused_r10);
  }
}

function NgbDatepicker_ngb_datepicker_navigation_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngb-datepicker-navigation", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("navigate", function NgbDatepicker_ngb_datepicker_navigation_3_Template_ngb_datepicker_navigation_navigate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r11.onNavigateEvent($event);
    })("select", function NgbDatepicker_ngb_datepicker_navigation_3_Template_ngb_datepicker_navigation_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r13.onNavigateDateSelect($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("date", ctx_r2.model.firstDate)("months", ctx_r2.model.months)("disabled", ctx_r2.model.disabled)("showSelect", ctx_r2.model.navigation === "select")("prevDisabled", ctx_r2.model.prevDisabled)("nextDisabled", ctx_r2.model.nextDisabled)("selectBoxes", ctx_r2.model.selectBoxes);
  }
}

function NgbDatepicker_ng_template_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var month_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r16.i18n.getMonthFullName(month_r14.number, month_r14.year), " ", ctx_r16.i18n.getYearNumerals(month_r14.year), " ");
  }
}

function NgbDatepicker_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbDatepicker_ng_template_6_div_1_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ngb-datepicker-month-view", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("select", function NgbDatepicker_ng_template_6_Template_ngb_datepicker_month_view_select_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r18.onDateSelect($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var month_r14 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.navigation === "none" || ctx_r4.displayMonths > 1 && ctx_r4.navigation === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("month", month_r14)("dayTemplate", ctx_r4.dayTemplate || _r0)("showWeekdays", ctx_r4.showWeekdays)("showWeekNumbers", ctx_r4.showWeekNumbers);
  }
}

function NgbDatepicker_ng_template_7_Template(rf, ctx) {}

function NgbDatepickerMonthView_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 5);
  }
}

function NgbDatepickerMonthView_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var w_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.i18n.getWeekdayShortName(w_r4), " ");
  }
}

function NgbDatepickerMonthView_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbDatepickerMonthView_div_0_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbDatepickerMonthView_div_0_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.showWeekNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.month.weekdays);
  }
}

function NgbDatepickerMonthView_ng_template_1_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var week_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.i18n.getWeekNumerals(week_r5.number));
  }
}

function NgbDatepickerMonthView_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template(rf, ctx) {}

function NgbDatepickerMonthView_ng_template_1_div_0_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbDatepickerMonthView_ng_template_1_div_0_div_2_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 14);
  }

  if (rf & 2) {
    var day_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.dayTemplate)("ngTemplateOutletContext", day_r10.context);
  }
}

function NgbDatepickerMonthView_ng_template_1_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbDatepickerMonthView_ng_template_1_div_0_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      var day_r10 = ctx.$implicit;
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r14.doSelect(day_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbDatepickerMonthView_ng_template_1_div_0_div_2_ng_template_1_Template, 1, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var day_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", day_r10.context.disabled)("hidden", day_r10.hidden)("ngb-dp-today", day_r10.context.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tabindex", day_r10.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", day_r10.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !day_r10.hidden);
  }
}

function NgbDatepickerMonthView_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbDatepickerMonthView_ng_template_1_div_0_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbDatepickerMonthView_ng_template_1_div_0_div_2_Template, 2, 9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var week_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.showWeekNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", week_r5.days);
  }
}

function NgbDatepickerMonthView_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbDatepickerMonthView_ng_template_1_div_0_Template, 3, 2, "div", 7);
  }

  if (rf & 2) {
    var week_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !week_r5.collapsed);
  }
}

function NgbDatepickerNavigation_ngb_datepicker_navigation_select_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngb-datepicker-navigation-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("select", function NgbDatepickerNavigation_ngb_datepicker_navigation_select_4_Template_ngb_datepicker_navigation_select_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r2.select.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("date", ctx_r0.date)("disabled", ctx_r0.disabled)("months", ctx_r0.selectBoxes.months)("years", ctx_r0.selectBoxes.years);
  }
}

function NgbDatepickerNavigation_5_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 0);
  }
}

function NgbDatepickerNavigation_5_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 0);
  }
}

function NgbDatepickerNavigation_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbDatepickerNavigation_5_ng_template_0_div_0_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbDatepickerNavigation_5_ng_template_0_div_3_Template, 1, 0, "div", 10);
  }

  if (rf & 2) {
    var month_r5 = ctx.$implicit;
    var i_r6 = ctx.index;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r6 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r4.i18n.getMonthFullName(month_r5.number, month_r5.year), " ", ctx_r4.i18n.getYearNumerals(month_r5.year), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r6 !== ctx_r4.months.length - 1);
  }
}

function NgbDatepickerNavigation_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbDatepickerNavigation_5_ng_template_0_Template, 4, 4, "ng-template", 9);
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.months);
  }
}

var _c17 = ["ngbDatepickerDayView", ""];

function NgbDatepickerNavigationSelect_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var m_r2 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", m_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", ctx_r0.i18n.getMonthFullName(m_r2, ctx_r0.date == null ? null : ctx_r0.date.year));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.i18n.getMonthShortName(m_r2, ctx_r0.date == null ? null : ctx_r0.date.year));
  }
}

function NgbDatepickerNavigationSelect_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var y_r3 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", y_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.i18n.getYearNumerals(y_r3));
  }
}

function NgbPagination_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "...");
  }
}

function NgbPagination_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function NgbPagination_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbPagination_ng_template_10_span_1_Template, 2, 0, "span", 13);
  }

  if (rf & 2) {
    var page_r17 = ctx.$implicit;
    var currentPage_r18 = ctx.currentPage;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", page_r17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", page_r17 === currentPage_r18);
  }
}

function NgbPagination_li_13_ng_template_3_Template(rf, ctx) {}

var _c36 = function _c36(a0, a1) {
  return {
    disabled: a0,
    currentPage: a1
  };
};

function NgbPagination_li_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbPagination_li_13_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r21.selectPage(1);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbPagination_li_13_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx_r12.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("tabindex", ctx_r12.hasPrevious() ? null : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r12.tplFirst == null ? null : ctx_r12.tplFirst.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c36, ctx_r12.previousDisabled(), ctx_r12.page));
  }
}

function NgbPagination_li_14_ng_template_3_Template(rf, ctx) {}

var _c39 = function _c39(a0) {
  return {
    disabled: a0
  };
};

function NgbPagination_li_14_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbPagination_li_14_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r24.selectPage(ctx_r24.page - 1);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbPagination_li_14_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx_r13.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("tabindex", ctx_r13.hasPrevious() ? null : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r13.tplPrevious == null ? null : ctx_r13.tplPrevious.templateRef) || _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c39, ctx_r13.previousDisabled()));
  }
}

function NgbPagination_li_15_a_1_ng_template_1_Template(rf, ctx) {}

var _c40 = function _c40(a1) {
  return {
    disabled: true,
    currentPage: a1
  };
};

function NgbPagination_li_15_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbPagination_li_15_a_1_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r27.tplEllipsis == null ? null : ctx_r27.tplEllipsis.templateRef) || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c40, ctx_r27.page));
  }
}

function NgbPagination_li_15_a_2_ng_template_1_Template(rf, ctx) {}

var _c41 = function _c41(a0, a1, a2) {
  return {
    disabled: a0,
    $implicit: a1,
    currentPage: a2
  };
};

function NgbPagination_li_15_a_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbPagination_li_15_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      var pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r31.selectPage(pageNumber_r26);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbPagination_li_15_a_2_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r28.tplNumber == null ? null : ctx_r28.tplNumber.templateRef) || _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c41, ctx_r28.disabled, pageNumber_r26, ctx_r28.page));
  }
}

function NgbPagination_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbPagination_li_15_a_1_Template, 2, 4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbPagination_li_15_a_2_Template, 2, 6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pageNumber_r26 = ctx.$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r14.page)("disabled", ctx_r14.isEllipsis(pageNumber_r26) || ctx_r14.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.isEllipsis(pageNumber_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r14.isEllipsis(pageNumber_r26));
  }
}

function NgbPagination_li_16_ng_template_3_Template(rf, ctx) {}

function NgbPagination_li_16_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbPagination_li_16_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r36.selectPage(ctx_r36.page + 1);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbPagination_li_16_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx_r15.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("tabindex", ctx_r15.hasNext() ? null : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r15.tplNext == null ? null : ctx_r15.tplNext.templateRef) || _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c36, ctx_r15.nextDisabled(), ctx_r15.page));
  }
}

function NgbPagination_li_17_ng_template_3_Template(rf, ctx) {}

function NgbPagination_li_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbPagination_li_17_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r39.selectPage(ctx_r39.pageCount);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbPagination_li_17_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx_r16.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("tabindex", ctx_r16.hasNext() ? null : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r16.tplLast == null ? null : ctx_r16.tplLast.templateRef) || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c36, ctx_r16.nextDisabled(), ctx_r16.page));
  }
}

function NgbPopoverWindow_h3_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.title);
  }
}

function NgbPopoverWindow_h3_1_ng_template_3_Template(rf, ctx) {}

function NgbPopoverWindow_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbPopoverWindow_h3_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbPopoverWindow_h3_1_ng_template_3_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : _r1)("ngTemplateOutletContext", ctx_r0.context);
  }
}

function NgbProgressbar_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nExp"](ctx_r0.getPercentValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nApply"](1);
  }
}

function NgbRating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
  }

  if (rf & 2) {
    var fill_r3 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](fill_r3 === 100 ? "\u2605" : "\u2606");
  }
}

function NgbRating_ng_template_2_ng_template_3_Template(rf, ctx) {}

function NgbRating_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mouseenter", function NgbRating_ng_template_2_Template_span_mouseenter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      var index_r4 = ctx.index;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r6.enter(index_r4 + 1);
    })("click", function NgbRating_ng_template_2_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      var index_r4 = ctx.index;
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r8.handleClick(index_r4 + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbRating_ng_template_2_ng_template_3_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var index_r4 = ctx.index;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", index_r4 < ctx_r2.nextRate ? "*" : " ", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("cursor", ctx_r2.readonly || ctx_r2.disabled ? "default" : "pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.starTemplate || ctx_r2.starTemplateFromContent || _r0)("ngTemplateOutletContext", ctx_r2.contexts[index_r4]);
  }
}

function NgbTabset_li_1_ng_template_3_Template(rf, ctx) {}

function NgbTabset_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTabset_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      var tab_r2 = ctx.$implicit;
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r4.select(tab_r2.id);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbTabset_li_1_ng_template_3_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var tab_r2 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", tab_r2.id === ctx_r0.activeId)("disabled", tab_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", tab_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("tabindex", tab_r2.disabled ? "-1" : undefined)("aria-controls", !ctx_r0.destroyOnHide || tab_r2.id === ctx_r0.activeId ? tab_r2.id + "-panel" : null)("aria-expanded", tab_r2.id === ctx_r0.activeId)("aria-disabled", tab_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", tab_r2.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", tab_r2.titleTpl == null ? null : tab_r2.titleTpl.templateRef);
  }
}

function NgbTabset_ng_template_3_div_0_ng_template_1_Template(rf, ctx) {}

function NgbTabset_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbTabset_ng_template_3_div_0_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var tab_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("tab-pane ", tab_r6.id === ctx_r7.activeId ? "active" : null, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "", tab_r6.id, "-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-labelledby", tab_r6.id)("aria-expanded", tab_r6.id === ctx_r7.activeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", tab_r6.contentTpl == null ? null : tab_r6.contentTpl.templateRef);
  }
}

function NgbTabset_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbTabset_ng_template_3_div_0_Template, 2, 7, "div", 7);
  }

  if (rf & 2) {
    var tab_r6 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.destroyOnHide || tab_r6.id === ctx_r1.activeId);
  }
}

function NgbTimepicker_button_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTimepicker_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r8.changeHour(ctx_r8.hourStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-sm", ctx_r0.isSmallSize)("btn-lg", ctx_r0.isLargeSize)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.disabled);
  }
}

function NgbTimepicker_button_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTimepicker_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r10.changeHour(-ctx_r10.hourStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}

function NgbTimepicker_button_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTimepicker_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r12.changeMinute(ctx_r12.minuteStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-sm", ctx_r2.isSmallSize)("btn-lg", ctx_r2.isLargeSize)("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.disabled);
  }
}

function NgbTimepicker_button_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTimepicker_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r14.changeMinute(-ctx_r14.minuteStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-sm", ctx_r3.isSmallSize)("btn-lg", ctx_r3.isLargeSize)("disabled", ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r3.disabled);
  }
}

function NgbTimepicker_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function NgbTimepicker_div_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTimepicker_div_15_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r18.changeSecond(ctx_r18.secondStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-sm", ctx_r16.isSmallSize)("btn-lg", ctx_r16.isLargeSize)("disabled", ctx_r16.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r16.disabled);
  }
}

function NgbTimepicker_div_15_button_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTimepicker_div_15_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r20.changeSecond(-ctx_r20.secondStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](3, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-sm", ctx_r17.isSmallSize)("btn-lg", ctx_r17.isLargeSize)("disabled", ctx_r17.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r17.disabled);
  }
}

function NgbTimepicker_div_15_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbTimepicker_div_15_button_1_Template, 4, 7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](3, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function NgbTimepicker_div_15_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r22.updateSecond($event.target.value);
    })("keydown.ArrowUp", function NgbTimepicker_div_15_Template_input_keydown_ArrowUp_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r24.changeSecond(ctx_r24.secondStep);
      return $event.preventDefault();
    })("keydown.ArrowDown", function NgbTimepicker_div_15_Template_input_keydown_ArrowDown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r25.changeSecond(-ctx_r25.secondStep);
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NgbTimepicker_div_15_button_4_Template, 4, 7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.spinners);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("form-control-sm", ctx_r5.isSmallSize)("form-control-lg", ctx_r5.isLargeSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r5.formatMinSec(ctx_r5.model == null ? null : ctx_r5.model.second))("readonly", ctx_r5.readonlyInputs)("disabled", ctx_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.spinners);
  }
}

function NgbTimepicker_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 6);
  }
}

function NgbTimepicker_div_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}

function NgbTimepicker_div_17_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](0, 29);
  }
}

function NgbTimepicker_div_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbTimepicker_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r29.toggleMeridian();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbTimepicker_div_17_ng_container_2_Template, 2, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbTimepicker_div_17_ng_template_3_Template, 1, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);

    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-sm", ctx_r7.isSmallSize)("btn-lg", ctx_r7.isLargeSize)("disabled", ctx_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r7.model == null ? null : ctx_r7.model.hour) >= 12)("ngIfElse", _r27);
  }
}

function NgbHighlight_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var part_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r3.highlightClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](part_r1);
  }
}

function NgbHighlight_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
  }

  if (rf & 2) {
    var part_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](part_r1);
  }
}

function NgbHighlight_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbHighlight_ng_template_0_span_0_Template, 2, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbHighlight_ng_template_0_ng_template_1_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    var isOdd_r2 = ctx.odd;

    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", isOdd_r2)("ngIfElse", _r4);
  }
}

function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ngb-highlight", 2);
  }

  if (rf & 2) {
    var result_r3 = ctx.result;
    var term_r4 = ctx.term;
    var formatter_r5 = ctx.formatter;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", formatter_r5(result_r3))("term", term_r4);
  }
}

function NgbTypeaheadWindow_ng_template_2_ng_template_1_Template(rf, ctx) {}

var _c76 = function _c76(a0, a1, a2) {
  return {
    result: a0,
    term: a1,
    formatter: a2
  };
};

function NgbTypeaheadWindow_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mouseenter", function NgbTypeaheadWindow_ng_template_2_Template_button_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      var idx_r7 = ctx.index;
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r9.markActive(idx_r7);
    })("click", function NgbTypeaheadWindow_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      var result_r6 = ctx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r11.select(result_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbTypeaheadWindow_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var result_r6 = ctx.$implicit;
    var idx_r7 = ctx.index;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", idx_r7 === ctx_r2.activeIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", ctx_r2.id + "-" + idx_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.resultTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](5, _c76, result_r6, ctx_r2.term, ctx_r2.formatter));
  }
}

function toInteger(value) {
  return parseInt("".concat(value), 10);
}
/**
 * @param {?} value
 * @return {?}
 */


function toString(value) {
  return value !== undefined && value !== null ? "".concat(value) : '';
}
/**
 * @param {?} value
 * @param {?} max
 * @param {?=} min
 * @return {?}
 */


function getValueInRange(value, max) {
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.max(Math.min(value, max), min);
}
/**
 * @param {?} value
 * @return {?}
 */


function isString(value) {
  return typeof value === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */


function isNumber(value) {
  return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {?}
 */


function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * @param {?} value
 * @return {?}
 */


function isDefined(value) {
  return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */


function padNumber(value) {
  if (isNumber(value)) {
    return "0".concat(value).slice(-2);
  } else {
    return '';
  }
}
/**
 * @param {?} text
 * @return {?}
 */


function regExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */


function hasClassName(element, className) {
  return element && element.className && element.className.split && element.className.split(/\s+/).indexOf(className) >= 0;
}

if (typeof Element !== 'undefined' && !Element.prototype.closest) {
  // Polyfill for ie10+
  if (!Element.prototype.matches) {
    // IE uses the non-standard name: msMatchesSelector
    Element.prototype.matches =
    /** @type {?} */
    Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s) {
    /** @type {?} */
    var el = this;

    if (!document.documentElement.contains(el)) {
      return null;
    }

    do {
      if (el.matches(s)) {
        return el;
      }

      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}
/**
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */


function closest(element, selector) {
  if (!selector) {
    return null;
  }

  return element.closest(selector);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */


var NgbAccordionConfig = function NgbAccordionConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbAccordionConfig);

  this.closeOthers = false;
};

NgbAccordionConfig.ɵfac = function NgbAccordionConfig_Factory(t) {
  return new (t || NgbAccordionConfig)();
};

NgbAccordionConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbAccordionConfig,
  factory: NgbAccordionConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbAccordionConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbAccordionConfig_Factory() {
    return new NgbAccordionConfig();
  },
  token: NgbAccordionConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbAccordionConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var nextId = 0;
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * \@since 4.1.0
 */

var NgbPanelToggle = /*#__PURE__*/function () {
  /**
   * @param {?} accordion
   * @param {?} panel
   */
  function NgbPanelToggle(accordion, panel) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPanelToggle);

    this.accordion = accordion;
    this.panel = panel;
  }
  /**
   * @param {?} panel
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbPanelToggle, [{
    key: "ngbPanelToggle",
    set: function set(panel) {
      if (panel) {
        this.panel = panel;
      }
    }
  }]);

  return NgbPanelToggle;
}();

NgbPanelToggle.ɵfac = function NgbPanelToggle_Factory(t) {
  return new (t || NgbPanelToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbAccordion;
  })), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbPanel;
  }), 9));
};

NgbPanelToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPanelToggle,
  selectors: [["button", "ngbPanelToggle", ""]],
  hostAttrs: ["type", "button"],
  hostVars: 5,
  hostBindings: function NgbPanelToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbPanelToggle_click_HostBindingHandler() {
        return ctx.accordion.toggle(ctx.panel.id);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("disabled", ctx.panel.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-expanded", ctx.panel.isOpen)("aria-controls", ctx.panel.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("collapsed", !ctx.panel.isOpen);
    }
  },
  inputs: {
    ngbPanelToggle: "ngbPanelToggle"
  }
});
/** @nocollapse */

NgbPanelToggle.ctorParameters = function () {
  return [{
    type: NgbAccordion,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
        return NgbAccordion;
      })]
    }]
  }, {
    type: NgbPanel,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Host"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
        return NgbPanel;
      })]
    }]
  }];
};

NgbPanelToggle.propDecorators = {
  ngbPanelToggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPanelToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'button[ngbPanelToggle]',
      host: {
        'type': 'button',
        '[disabled]': 'panel.disabled',
        '[class.collapsed]': '!panel.isOpen',
        '[attr.aria-expanded]': 'panel.isOpen',
        '[attr.aria-controls]': 'panel.id',
        '(click)': 'accordion.toggle(panel.id)'
      }
    }]
  }], function () {
    return [{
      type: NgbAccordion,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
          return NgbAccordion;
        })]
      }]
    }, {
      type: NgbPanel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Host"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
          return NgbPanel;
        })]
      }]
    }];
  }, {
    ngbPanelToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * \@since 4.1.0
 */


var NgbPanelHeader =
/**
 * @param {?} templateRef
 */
function NgbPanelHeader(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPanelHeader);

  this.templateRef = templateRef;
};

NgbPanelHeader.ɵfac = function NgbPanelHeader_Factory(t) {
  return new (t || NgbPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPanelHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPanelHeader,
  selectors: [["ng-template", "ngbPanelHeader", ""]]
});
/** @nocollapse */

NgbPanelHeader.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPanelHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPanelHeader]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */


var NgbPanelTitle =
/**
 * @param {?} templateRef
 */
function NgbPanelTitle(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPanelTitle);

  this.templateRef = templateRef;
};

NgbPanelTitle.ɵfac = function NgbPanelTitle_Factory(t) {
  return new (t || NgbPanelTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPanelTitle,
  selectors: [["ng-template", "ngbPanelTitle", ""]]
});
/** @nocollapse */

NgbPanelTitle.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPanelTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPanelTitle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive that wraps the accordion panel content.
 */


var NgbPanelContent =
/**
 * @param {?} templateRef
 */
function NgbPanelContent(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPanelContent);

  this.templateRef = templateRef;
};

NgbPanelContent.ɵfac = function NgbPanelContent_Factory(t) {
  return new (t || NgbPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPanelContent,
  selectors: [["ng-template", "ngbPanelContent", ""]]
});
/** @nocollapse */

NgbPanelContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPanelContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPanelContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */


var NgbPanel = /*#__PURE__*/function () {
  function NgbPanel() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPanel);

    /**
     *  If `true`, the panel is disabled an can't be toggled.
     */
    this.disabled = false;
    /**
     *  An optional id for the panel that must be unique on the page.
     *
     *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
     */

    this.id = "ngb-panel-".concat(nextId++);
    this.isOpen = false;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbPanel, [{
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
      // only @ContentChildren allows us to specify the {descendants: false} option.
      // Without {descendants: false} we are hitting bugs described in:
      // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
      this.titleTpl = this.titleTpls.first;
      this.headerTpl = this.headerTpls.first;
      this.contentTpl = this.contentTpls.first;
    }
  }]);

  return NgbPanel;
}();

NgbPanel.ɵfac = function NgbPanel_Factory(t) {
  return new (t || NgbPanel)();
};

NgbPanel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPanel,
  selectors: [["ngb-panel"]],
  contentQueries: function NgbPanel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPanelTitle, false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPanelHeader, false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPanelContent, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.titleTpls = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.headerTpls = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.contentTpls = _t);
    }
  },
  inputs: {
    disabled: "disabled",
    id: "id",
    title: "title",
    type: "type"
  }
});
NgbPanel.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  titleTpls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbPanelTitle, {
      descendants: false
    }]
  }],
  headerTpls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbPanelHeader, {
      descendants: false
    }]
  }],
  contentTpls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbPanelContent, {
      descendants: false
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ngb-panel'
    }]
  }], function () {
    return [];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    titleTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbPanelTitle, {
        descendants: false
      }]
    }],
    headerTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbPanelHeader, {
        descendants: false
      }]
    }],
    contentTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbPanelContent, {
        descendants: false
      }]
    }]
  });
})();
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */


var NgbAccordion = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function NgbAccordion(config) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbAccordion);

    /**
     * An array or comma separated strings of panel ids that should be opened **initially**.
     *
     * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
     * the `(panelChange)` event.
     */
    this.activeIds = [];
    /**
     * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
     */

    this.destroyOnHide = true;
    /**
     * Event emitted right before the panel toggle happens.
     *
     * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
     */

    this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this.type = config.type;
    this.closeOtherPanels = config.closeOthers;
  }
  /**
   * Checks if a panel with a given id is expanded.
   * @param {?} panelId
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbAccordion, [{
    key: "isExpanded",
    value: function isExpanded(panelId) {
      return this.activeIds.indexOf(panelId) > -1;
    }
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     * @param {?} panelId
     * @return {?}
     */

  }, {
    key: "expand",
    value: function expand(panelId) {
      this._changeOpenState(this._findPanelById(panelId), true);
    }
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     * @return {?}
     */

  }, {
    key: "expandAll",
    value: function expandAll() {
      var _this = this;

      if (this.closeOtherPanels) {
        if (this.activeIds.length === 0 && this.panels.length) {
          this._changeOpenState(this.panels.first, true);
        }
      } else {
        this.panels.forEach(function (panel) {
          return _this._changeOpenState(panel, true);
        });
      }
    }
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     * @param {?} panelId
     * @return {?}
     */

  }, {
    key: "collapse",
    value: function collapse(panelId) {
      this._changeOpenState(this._findPanelById(panelId), false);
    }
    /**
     * Collapses all opened panels.
     * @return {?}
     */

  }, {
    key: "collapseAll",
    value: function collapseAll() {
      var _this2 = this;

      this.panels.forEach(function (panel) {
        _this2._changeOpenState(panel, false);
      });
    }
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     * @param {?} panelId
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle(panelId) {
      /** @type {?} */
      var panel = this._findPanelById(panelId);

      if (panel) {
        this._changeOpenState(panel, !panel.isOpen);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      var _this3 = this;

      // active id updates
      if (isString(this.activeIds)) {
        this.activeIds = this.activeIds.split(/\s*,\s*/);
      } // update panels open states


      this.panels.forEach(function (panel) {
        return panel.isOpen = !panel.disabled && _this3.activeIds.indexOf(panel.id) > -1;
      }); // closeOthers updates

      if (this.activeIds.length > 1 && this.closeOtherPanels) {
        this._closeOthers(this.activeIds[0]);

        this._updateActiveIds();
      }
    }
    /**
     * @param {?} panel
     * @param {?} nextState
     * @return {?}
     */

  }, {
    key: "_changeOpenState",
    value: function _changeOpenState(panel, nextState) {
      if (panel && !panel.disabled && panel.isOpen !== nextState) {
        /** @type {?} */
        var defaultPrevented = false;
        this.panelChange.emit({
          panelId: panel.id,
          nextState: nextState,
          preventDefault: function preventDefault() {
            defaultPrevented = true;
          }
        });

        if (!defaultPrevented) {
          panel.isOpen = nextState;

          if (nextState && this.closeOtherPanels) {
            this._closeOthers(panel.id);
          }

          this._updateActiveIds();
        }
      }
    }
    /**
     * @param {?} panelId
     * @return {?}
     */

  }, {
    key: "_closeOthers",
    value: function _closeOthers(panelId) {
      this.panels.forEach(function (panel) {
        if (panel.id !== panelId) {
          panel.isOpen = false;
        }
      });
    }
    /**
     * @param {?} panelId
     * @return {?}
     */

  }, {
    key: "_findPanelById",
    value: function _findPanelById(panelId) {
      return this.panels.find(function (p) {
        return p.id === panelId;
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "_updateActiveIds",
    value: function _updateActiveIds() {
      this.activeIds = this.panels.filter(function (panel) {
        return panel.isOpen && !panel.disabled;
      }).map(function (panel) {
        return panel.id;
      });
    }
  }]);

  return NgbAccordion;
}();

NgbAccordion.ɵfac = function NgbAccordion_Factory(t) {
  return new (t || NgbAccordion)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbAccordionConfig));
};

NgbAccordion.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbAccordion,
  selectors: [["ngb-accordion"]],
  contentQueries: function NgbAccordion_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPanel, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.panels = _t);
    }
  },
  hostAttrs: ["role", "tablist", 1, "accordion"],
  hostVars: 1,
  hostBindings: function NgbAccordion_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-multiselectable", !ctx.closeOtherPanels);
    }
  },
  inputs: {
    activeIds: "activeIds",
    destroyOnHide: "destroyOnHide",
    type: "type",
    closeOtherPanels: ["closeOthers", "closeOtherPanels"]
  },
  outputs: {
    panelChange: "panelChange"
  },
  exportAs: ["ngbAccordion"],
  decls: 3,
  vars: 1,
  consts: [["ngbPanelHeader", ""], ["t", ""], ["ngFor", "", 3, "ngForOf"], [1, "btn", "btn-link", 3, "ngbPanelToggle"], [3, "ngTemplateOutlet"], [1, "card"], ["role", "tab", 3, "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "tabpanel", "class", "collapse", 3, "id", "show", 4, "ngIf"], ["role", "tabpanel", 1, "collapse", 3, "id"], [1, "card-body"]],
  template: function NgbAccordion_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbAccordion_ng_template_0_Template, 3, 3, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbAccordion_ng_template_2_Template, 4, 9, "ng-template", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.panels);
    }
  },
  directives: [NgbPanelHeader, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], NgbPanelToggle, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
  encapsulation: 2
});
/** @nocollapse */

NgbAccordion.ctorParameters = function () {
  return [{
    type: NgbAccordionConfig
  }];
};

NgbAccordion.propDecorators = {
  panels: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbPanel]
  }],
  activeIds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  closeOtherPanels: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['closeOthers']
  }],
  destroyOnHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  panelChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-accordion',
      exportAs: 'ngbAccordion',
      host: {
        'class': 'accordion',
        'role': 'tablist',
        '[attr.aria-multiselectable]': '!closeOtherPanels'
      },
      template: "\n    <ng-template #t ngbPanelHeader let-panel>\n      <button class=\"btn btn-link\" [ngbPanelToggle]=\"panel\">\n        {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n      </button>\n    </ng-template>\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <ng-template [ngTemplateOutlet]=\"panel.headerTpl?.templateRef || t\"\n                       [ngTemplateOutletContext]=\"{$implicit: panel, opened: panel.isOpen}\"></ng-template>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"collapse\" [class.show]=\"panel.isOpen\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n          <div class=\"card-body\">\n               <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
    }]
  }], function () {
    return [{
      type: NgbAccordionConfig
    }];
  }, {
    activeIds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    panelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    closeOtherPanels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['closeOthers']
    }],
    panels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbPanel]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];

var NgbAccordionModule = /*#__PURE__*/function () {
  function NgbAccordionModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbAccordionModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbAccordionModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbAccordionModule
      };
    }
  }]);

  return NgbAccordionModule;
}();

NgbAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbAccordionModule
});
NgbAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbAccordionModule_Factory(t) {
    return new (t || NgbAccordionModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbAccordionModule, {
    declarations: function declarations() {
      return [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: NGB_ACCORDION_DIRECTIVES,
      exports: NGB_ACCORDION_DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all alerts used in the application.
 */


var NgbAlertConfig = function NgbAlertConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbAlertConfig);

  this.dismissible = true;
  this.type = 'warning';
};

NgbAlertConfig.ɵfac = function NgbAlertConfig_Factory(t) {
  return new (t || NgbAlertConfig)();
};

NgbAlertConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbAlertConfig,
  factory: NgbAlertConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbAlertConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbAlertConfig_Factory() {
    return new NgbAlertConfig();
  },
  token: NgbAlertConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbAlertConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */


var NgbAlert = /*#__PURE__*/function () {
  /**
   * @param {?} config
   * @param {?} _renderer
   * @param {?} _element
   */
  function NgbAlert(config, _renderer, _element) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbAlert);

    this._renderer = _renderer;
    this._element = _element;
    /**
     * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
     */

    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this.dismissible = config.dismissible;
    this.type = config.type;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbAlert, [{
    key: "closeHandler",
    value: function closeHandler() {
      this.close.emit(null);
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      /** @type {?} */
      var typeChange = changes['type'];

      if (typeChange && !typeChange.firstChange) {
        this._renderer.removeClass(this._element.nativeElement, "alert-".concat(typeChange.previousValue));

        this._renderer.addClass(this._element.nativeElement, "alert-".concat(typeChange.currentValue));
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._renderer.addClass(this._element.nativeElement, "alert-".concat(this.type));
    }
  }]);

  return NgbAlert;
}();

NgbAlert.ɵfac = function NgbAlert_Factory(t) {
  return new (t || NgbAlert)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbAlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]));
};

NgbAlert.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbAlert,
  selectors: [["ngb-alert"]],
  hostAttrs: ["role", "alert", 1, "alert"],
  hostVars: 2,
  hostBindings: function NgbAlert_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("alert-dismissible", ctx.dismissible);
    }
  },
  inputs: {
    dismissible: "dismissible",
    type: "type"
  },
  outputs: {
    close: "close"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c3,
  decls: 2,
  vars: 1,
  consts: function consts() {
    var i18n_1;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_alert_close$$FESM2015_NG_BOOTSTRAP_JS__2 = goog.getMsg("Close");
      i18n_1 = MSG_EXTERNAL_ngb_alert_close$$FESM2015_NG_BOOTSTRAP_JS__2;
    } else {
      i18n_1 = $localize(_templateObject());
    }

    return [["type", "button", "class", "close", 3, "click", 4, "ngIf", 6, "aria-label"], ["type", "button", 1, "close", 3, "click", 6, "aria-label"], ["aria-label", i18n_1], ["aria-hidden", "true"]];
  },
  template: function NgbAlert_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbAlert_button_1_Template, 4, 0, "button", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.dismissible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
  styles: ["ngb-alert{display:block}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbAlert.ctorParameters = function () {
  return [{
    type: NgbAlertConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }];
};

NgbAlert.propDecorators = {
  dismissible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  close: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbAlert, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-alert',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      host: {
        'role': 'alert',
        'class': 'alert',
        '[class.alert-dismissible]': 'dismissible'
      },
      template: "\n    <ng-content></ng-content>\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.alert.close\"\n      (click)=\"closeHandler()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    ",
      styles: ["ngb-alert{display:block}"]
    }]
  }], function () {
    return [{
      type: NgbAlertConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }];
  }, {
    close: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    dismissible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbAlertModule = /*#__PURE__*/function () {
  function NgbAlertModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbAlertModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbAlertModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbAlertModule
      };
    }
  }]);

  return NgbAlertModule;
}();

NgbAlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbAlertModule
});
NgbAlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbAlertModule_Factory(t) {
    return new (t || NgbAlertModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbAlertModule, {
    declarations: function declarations() {
      return [NgbAlert];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbAlert];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbAlertModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbAlert],
      exports: [NgbAlert],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
      entryComponents: [NgbAlert]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbButtonLabel = function NgbButtonLabel() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbButtonLabel);
};

NgbButtonLabel.ɵfac = function NgbButtonLabel_Factory(t) {
  return new (t || NgbButtonLabel)();
};

NgbButtonLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbButtonLabel,
  selectors: [["", "ngbButtonLabel", ""]],
  hostVars: 8,
  hostBindings: function NgbButtonLabel_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn", true)("active", ctx.active)("disabled", ctx.disabled)("focus", ctx.focused);
    }
  }
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbButtonLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbButtonLabel]',
      host: {
        '[class.btn]': 'true',
        '[class.active]': 'active',
        '[class.disabled]': 'disabled',
        '[class.focus]': 'focused'
      }
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_CHECKBOX_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbCheckBox;
  }),
  multi: true
};
/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */

var NgbCheckBox = /*#__PURE__*/function () {
  /**
   * @param {?} _label
   * @param {?} _cd
   */
  function NgbCheckBox(_label, _cd) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCheckBox);

    this._label = _label;
    this._cd = _cd;
    /**
     * If `true`, the checkbox button will be disabled
     */

    this.disabled = false;
    /**
     * The form control value when the checkbox is checked.
     */

    this.valueChecked = true;
    /**
     * The form control value when the checkbox is unchecked.
     */

    this.valueUnChecked = false;

    this.onChange = function (_) {};

    this.onTouched = function () {};
  }
  /**
   * @param {?} isFocused
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCheckBox, [{
    key: "onInputChange",

    /**
     * @param {?} $event
     * @return {?}
     */
    value: function onInputChange($event) {
      /** @type {?} */
      var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
      this.onChange(modelToPropagate);
      this.onTouched();
      this.writeValue(modelToPropagate);
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._label.disabled = isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.checked = value === this.valueChecked;
      this._label.active = this.checked; // label won't be updated, if it is inside the OnPush component when [ngModel] changes

      this._cd.markForCheck();
    }
  }, {
    key: "focused",
    set: function set(isFocused) {
      this._label.focused = isFocused;

      if (!isFocused) {
        this.onTouched();
      }
    }
  }]);

  return NgbCheckBox;
}();

NgbCheckBox.ɵfac = function NgbCheckBox_Factory(t) {
  return new (t || NgbCheckBox)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbButtonLabel), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbCheckBox.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbCheckBox,
  selectors: [["", "ngbButton", "", "type", "checkbox"]],
  hostAttrs: ["autocomplete", "off"],
  hostVars: 2,
  hostBindings: function NgbCheckBox_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function NgbCheckBox_change_HostBindingHandler($event) {
        return ctx.onInputChange($event);
      })("focus", function NgbCheckBox_focus_HostBindingHandler() {
        return ctx.focused = true;
      })("blur", function NgbCheckBox_blur_HostBindingHandler() {
        return ctx.focused = false;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("checked", ctx.checked)("disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    valueChecked: "valueChecked",
    valueUnChecked: "valueUnChecked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([NGB_CHECKBOX_VALUE_ACCESSOR])]
});
/** @nocollapse */

NgbCheckBox.ctorParameters = function () {
  return [{
    type: NgbButtonLabel
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbCheckBox.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  valueChecked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  valueUnChecked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCheckBox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbButton][type=checkbox]',
      host: {
        'autocomplete': 'off',
        '[checked]': 'checked',
        '[disabled]': 'disabled',
        '(change)': 'onInputChange($event)',
        '(focus)': 'focused = true',
        '(blur)': 'focused = false'
      },
      providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: NgbButtonLabel
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    valueChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    valueUnChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_RADIO_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbRadioGroup;
  }),
  multi: true
};
/** @type {?} */

var nextId$1 = 0;
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */

var NgbRadioGroup = /*#__PURE__*/function () {
  function NgbRadioGroup() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbRadioGroup);

    this._radios = new Set();
    this._value = null;
    /**
     * Name of the radio group applied to radio input elements.
     *
     * Will be applied to all radio input elements inside the group,
     * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
     *
     * If not provided, will be generated in the `ngb-radio-xx` format.
     */

    this.name = "ngb-radio-".concat(nextId$1++);

    this.onChange = function (_) {};

    this.onTouched = function () {};
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbRadioGroup, [{
    key: "onRadioChange",

    /**
     * @param {?} radio
     * @return {?}
     */
    value: function onRadioChange(radio) {
      this.writeValue(radio.value);
      this.onChange(radio.value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onRadioValueUpdate",
    value: function onRadioValueUpdate() {
      this._updateRadiosValue();
    }
    /**
     * @param {?} radio
     * @return {?}
     */

  }, {
    key: "register",
    value: function register(radio) {
      this._radios.add(radio);
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._disabled = isDisabled;

      this._updateRadiosDisabled();
    }
    /**
     * @param {?} radio
     * @return {?}
     */

  }, {
    key: "unregister",
    value: function unregister(radio) {
      this._radios.delete(radio);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._value = value;

      this._updateRadiosValue();
    }
    /**
     * @return {?}
     */

  }, {
    key: "_updateRadiosValue",
    value: function _updateRadiosValue() {
      var _this4 = this;

      this._radios.forEach(function (radio) {
        return radio.updateValue(_this4._value);
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "_updateRadiosDisabled",
    value: function _updateRadiosDisabled() {
      this._radios.forEach(function (radio) {
        return radio.updateDisabled();
      });
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ,
    set: function set(isDisabled) {
      this.setDisabledState(isDisabled);
    }
  }]);

  return NgbRadioGroup;
}();

NgbRadioGroup.ɵfac = function NgbRadioGroup_Factory(t) {
  return new (t || NgbRadioGroup)();
};

NgbRadioGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbRadioGroup,
  selectors: [["", "ngbRadioGroup", ""]],
  hostAttrs: ["role", "radiogroup"],
  inputs: {
    name: "name"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([NGB_RADIO_VALUE_ACCESSOR])]
});
NgbRadioGroup.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbRadioGroup]',
      host: {
        'role': 'radiogroup'
      },
      providers: [NGB_RADIO_VALUE_ACCESSOR]
    }]
  }], function () {
    return [];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */


var NgbRadio = /*#__PURE__*/function () {
  /**
   * @param {?} _group
   * @param {?} _label
   * @param {?} _renderer
   * @param {?} _element
   * @param {?} _cd
   */
  function NgbRadio(_group, _label, _renderer, _element, _cd) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbRadio);

    this._group = _group;
    this._label = _label;
    this._renderer = _renderer;
    this._element = _element;
    this._cd = _cd;
    this._value = null;

    this._group.register(this);

    this.updateDisabled();
  }
  /**
   * The form control value when current radio button is checked.
   * @param {?} value
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbRadio, [{
    key: "ngOnDestroy",

    /**
     * @return {?}
     */
    value: function ngOnDestroy() {
      this._group.unregister(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onChange",
    value: function onChange() {
      this._group.onRadioChange(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "updateValue",
    value: function updateValue(value) {
      // label won't be updated, if it is inside the OnPush component when [ngModel] changes
      if (this.value !== value) {
        this._cd.markForCheck();
      }

      this._checked = this.value === value;
      this._label.active = this._checked;
    }
    /**
     * @return {?}
     */

  }, {
    key: "updateDisabled",
    value: function updateDisabled() {
      this._label.disabled = this.disabled;
    }
  }, {
    key: "value",
    set: function set(value) {
      this._value = value;
      /** @type {?} */

      var stringValue = value ? value.toString() : '';

      this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);

      this._group.onRadioValueUpdate();
    }
    /**
     * If `true`, current radio button will be disabled.
     * @param {?} isDisabled
     * @return {?}
     */
    ,

    /**
     * @return {?}
     */
    get: function get() {
      return this._value;
    }
    /**
     * @return {?}
     */

  }, {
    key: "disabled",
    set: function set(isDisabled) {
      this._disabled = isDisabled !== false;
      this.updateDisabled();
    }
    /**
     * @param {?} isFocused
     * @return {?}
     */
    ,

    /**
     * @return {?}
     */
    get: function get() {
      return this._group.disabled || this._disabled;
    }
  }, {
    key: "focused",
    set: function set(isFocused) {
      if (this._label) {
        this._label.focused = isFocused;
      }

      if (!isFocused) {
        this._group.onTouched();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "checked",
    get: function get() {
      return this._checked;
    }
  }, {
    key: "nameAttr",
    get: function get() {
      return this.name || this._group.name;
    }
  }]);

  return NgbRadio;
}();

NgbRadio.ɵfac = function NgbRadio_Factory(t) {
  return new (t || NgbRadio)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbRadioGroup), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbButtonLabel), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbRadio.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbRadio,
  selectors: [["", "ngbButton", "", "type", "radio"]],
  hostVars: 3,
  hostBindings: function NgbRadio_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function NgbRadio_change_HostBindingHandler() {
        return ctx.onChange();
      })("focus", function NgbRadio_focus_HostBindingHandler() {
        return ctx.focused = true;
      })("blur", function NgbRadio_blur_HostBindingHandler() {
        return ctx.focused = false;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.nameAttr);
    }
  },
  inputs: {
    value: "value",
    disabled: "disabled",
    name: "name"
  }
});
/** @nocollapse */

NgbRadio.ctorParameters = function () {
  return [{
    type: NgbRadioGroup
  }, {
    type: NgbButtonLabel
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbRadio.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['value']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['disabled']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbRadio, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbButton][type=radio]',
      host: {
        '[checked]': 'checked',
        '[disabled]': 'disabled',
        '[name]': 'nameAttr',
        '(change)': 'onChange()',
        '(focus)': 'focused = true',
        '(blur)': 'focused = false'
      }
    }]
  }], function () {
    return [{
      type: NgbRadioGroup
    }, {
      type: NgbButtonLabel
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['value']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['disabled']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];

var NgbButtonsModule = /*#__PURE__*/function () {
  function NgbButtonsModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbButtonsModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbButtonsModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbButtonsModule
      };
    }
  }]);

  return NgbButtonsModule;
}();

NgbButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbButtonsModule
});
NgbButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbButtonsModule_Factory(t) {
    return new (t || NgbButtonsModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbButtonsModule, {
    declarations: [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio],
    exports: [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbButtonsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: NGB_BUTTON_DIRECTIVES,
      exports: NGB_BUTTON_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */


var NgbCarouselConfig = function NgbCarouselConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCarouselConfig);

  this.interval = 5000;
  this.wrap = true;
  this.keyboard = true;
  this.pauseOnHover = true;
  this.showNavigationArrows = true;
  this.showNavigationIndicators = true;
};

NgbCarouselConfig.ɵfac = function NgbCarouselConfig_Factory(t) {
  return new (t || NgbCarouselConfig)();
};

NgbCarouselConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCarouselConfig,
  factory: NgbCarouselConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbCarouselConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbCarouselConfig_Factory() {
    return new NgbCarouselConfig();
  },
  token: NgbCarouselConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCarouselConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var nextId$2 = 0;
/**
 * A directive that wraps the individual carousel slide.
 */

var NgbSlide =
/**
 * @param {?} tplRef
 */
function NgbSlide(tplRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbSlide);

  this.tplRef = tplRef;
  /**
   * Slide id that must be unique for the entire document.
   *
   * If not provided, will be generated in the `ngb-slide-xx` format.
   */

  this.id = "ngb-slide-".concat(nextId$2++);
};

NgbSlide.ɵfac = function NgbSlide_Factory(t) {
  return new (t || NgbSlide)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbSlide.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbSlide,
  selectors: [["ng-template", "ngbSlide", ""]],
  inputs: {
    id: "id"
  }
});
/** @nocollapse */

NgbSlide.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};

NgbSlide.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbSlide, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbSlide]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */


var NgbCarousel = /*#__PURE__*/function () {
  /**
   * @param {?} config
   * @param {?} _platformId
   * @param {?} _ngZone
   * @param {?} _cd
   */
  function NgbCarousel(config, _platformId, _ngZone, _cd) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCarousel);

    this._platformId = _platformId;
    this._ngZone = _ngZone;
    this._cd = _cd;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    this._start$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    this._stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    /**
     * An event emitted right after the slide transition is completed.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     */

    this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this.interval = config.interval;
    this.wrap = config.wrap;
    this.keyboard = config.keyboard;
    this.pauseOnHover = config.pauseOnHover;
    this.showNavigationArrows = config.showNavigationArrows;
    this.showNavigationIndicators = config.showNavigationIndicators;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCarousel, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this5 = this;

      // setInterval() doesn't play well with SSR and protractor,
      // so we should run it in the browser and outside Angular
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["isPlatformBrowser"])(this._platformId)) {
        this._ngZone.runOutsideAngular(function () {
          _this5._start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {
            return _this5.interval;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (interval) {
            return interval > 0 && _this5.slides.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (interval) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["timer"])(interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(_this5._stop$, _this5._destroy$)));
          })).subscribe(function () {
            return _this5._ngZone.run(function () {
              return _this5.next();
            });
          });

          _this5._start$.next();
        });
      }

      this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy$)).subscribe(function () {
        return _this5._cd.markForCheck();
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      /** @type {?} */
      var activeSlide = this._getSlideById(this.activeId);

      this.activeId = activeSlide ? activeSlide.id : this.slides.length ? this.slides.first.id : null;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy$.next();
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if ('interval' in changes && !changes['interval'].isFirstChange()) {
        this._start$.next();
      }
    }
    /**
     * Navigates to a slide with the specified identifier.
     * @param {?} slideId
     * @return {?}
     */

  }, {
    key: "select",
    value: function select(slideId) {
      this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId));
    }
    /**
     * Navigates to the previous slide.
     * @return {?}
     */

  }, {
    key: "prev",
    value: function prev() {
      this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT);
    }
    /**
     * Navigates to the next slide.
     * @return {?}
     */

  }, {
    key: "next",
    value: function next() {
      this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT);
    }
    /**
     * Pauses cycling through the slides.
     * @return {?}
     */

  }, {
    key: "pause",
    value: function pause() {
      this._stop$.next();
    }
    /**
     * Restarts cycling through the slides from left to right.
     * @return {?}
     */

  }, {
    key: "cycle",
    value: function cycle() {
      this._start$.next();
    }
    /**
     * @param {?} slideIdx
     * @param {?} direction
     * @return {?}
     */

  }, {
    key: "_cycleToSelected",
    value: function _cycleToSelected(slideIdx, direction) {
      /** @type {?} */
      var selectedSlide = this._getSlideById(slideIdx);

      if (selectedSlide && selectedSlide.id !== this.activeId) {
        this.slide.emit({
          prev: this.activeId,
          current: selectedSlide.id,
          direction: direction
        });

        this._start$.next();

        this.activeId = selectedSlide.id;
      } // we get here after the interval fires or any external API call like next(), prev() or select()


      this._cd.markForCheck();
    }
    /**
     * @param {?} currentActiveSlideId
     * @param {?} nextActiveSlideId
     * @return {?}
     */

  }, {
    key: "_getSlideEventDirection",
    value: function _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
      /** @type {?} */
      var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
      /** @type {?} */


      var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);

      return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
    }
    /**
     * @param {?} slideId
     * @return {?}
     */

  }, {
    key: "_getSlideById",
    value: function _getSlideById(slideId) {
      return this.slides.find(function (slide) {
        return slide.id === slideId;
      });
    }
    /**
     * @param {?} slideId
     * @return {?}
     */

  }, {
    key: "_getSlideIdxById",
    value: function _getSlideIdxById(slideId) {
      return this.slides.toArray().indexOf(this._getSlideById(slideId));
    }
    /**
     * @param {?} currentSlideId
     * @return {?}
     */

  }, {
    key: "_getNextSlide",
    value: function _getNextSlide(currentSlideId) {
      /** @type {?} */
      var slideArr = this.slides.toArray();
      /** @type {?} */

      var currentSlideIdx = this._getSlideIdxById(currentSlideId);
      /** @type {?} */


      var isLastSlide = currentSlideIdx === slideArr.length - 1;
      return isLastSlide ? this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id : slideArr[currentSlideIdx + 1].id;
    }
    /**
     * @param {?} currentSlideId
     * @return {?}
     */

  }, {
    key: "_getPrevSlide",
    value: function _getPrevSlide(currentSlideId) {
      /** @type {?} */
      var slideArr = this.slides.toArray();
      /** @type {?} */

      var currentSlideIdx = this._getSlideIdxById(currentSlideId);
      /** @type {?} */


      var isFirstSlide = currentSlideIdx === 0;
      return isFirstSlide ? this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id : slideArr[currentSlideIdx - 1].id;
    }
  }]);

  return NgbCarousel;
}();

NgbCarousel.ɵfac = function NgbCarousel_Factory(t) {
  return new (t || NgbCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbCarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbCarousel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbCarousel,
  selectors: [["ngb-carousel"]],
  contentQueries: function NgbCarousel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbSlide, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    }
  },
  hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"],
  hostVars: 2,
  hostBindings: function NgbCarousel_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mouseenter", function NgbCarousel_mouseenter_HostBindingHandler() {
        return ctx.pauseOnHover && ctx.pause();
      })("mouseleave", function NgbCarousel_mouseleave_HostBindingHandler() {
        return ctx.pauseOnHover && ctx.cycle();
      })("keydown.arrowLeft", function NgbCarousel_keydown_arrowLeft_HostBindingHandler() {
        return ctx.keyboard && ctx.prev();
      })("keydown.arrowRight", function NgbCarousel_keydown_arrowRight_HostBindingHandler() {
        return ctx.keyboard && ctx.next();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("display", "block");
    }
  },
  inputs: {
    interval: "interval",
    wrap: "wrap",
    keyboard: "keyboard",
    pauseOnHover: "pauseOnHover",
    showNavigationArrows: "showNavigationArrows",
    showNavigationIndicators: "showNavigationIndicators",
    activeId: "activeId"
  },
  outputs: {
    slide: "slide"
  },
  exportAs: ["ngbCarousel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 4,
  consts: function consts() {
    var i18n_4;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_carousel_previous$$FESM2015_NG_BOOTSTRAP_JS__5 = goog.getMsg("Previous");
      i18n_4 = MSG_EXTERNAL_ngb_carousel_previous$$FESM2015_NG_BOOTSTRAP_JS__5;
    } else {
      i18n_4 = $localize(_templateObject2());
    }

    var i18n_6;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_carousel_next$$FESM2015_NG_BOOTSTRAP_JS__7 = goog.getMsg("Next");
      i18n_6 = MSG_EXTERNAL_ngb_carousel_next$$FESM2015_NG_BOOTSTRAP_JS__7;
    } else {
      i18n_6 = $localize(_templateObject3());
    }

    return [["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], ["class", "carousel-control-prev", "role", "button", 3, "click", 4, "ngIf"], ["class", "carousel-control-next", "role", "button", 3, "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "id", "active", "click", 4, "ngFor", "ngForOf"], [3, "id", "click"], [1, "carousel-item"], [3, "ngTemplateOutlet"], ["role", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], i18n_4, ["role", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], i18n_6];
  },
  template: function NgbCarousel_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbCarousel_ol_0_Template, 2, 1, "ol", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbCarousel_div_2_Template, 2, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbCarousel_a_3_Template, 4, 0, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NgbCarousel_a_4_Template, 4, 0, "a", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showNavigationIndicators);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.slides);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showNavigationArrows);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showNavigationArrows);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbCarousel.ctorParameters = function () {
  return [{
    type: NgbCarouselConfig
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["PLATFORM_ID"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbCarousel.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbSlide]
  }],
  activeId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  interval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  wrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  keyboard: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  pauseOnHover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showNavigationArrows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showNavigationIndicators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  slide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCarousel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-carousel',
      exportAs: 'ngbCarousel',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      host: {
        'class': 'carousel slide',
        '[style.display]': '"block"',
        'tabIndex': '0',
        '(mouseenter)': 'pauseOnHover && pause()',
        '(mouseleave)': 'pauseOnHover && cycle()',
        '(keydown.arrowLeft)': 'keyboard && prev()',
        '(keydown.arrowRight)': 'keyboard && next()'
      },
      template: "\n    <ol class=\"carousel-indicators\" *ngIf=\"showNavigationIndicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"select(slide.id); pauseOnHover && pause()\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"prev()\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.previous\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"next()\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.next\">Next</span>\n    </a>\n  "
    }]
  }], function () {
    return [{
      type: NgbCarouselConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["PLATFORM_ID"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    slide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    interval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    wrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    pauseOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showNavigationArrows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showNavigationIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    activeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    slides: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbSlide]
    }]
  });
})();
/** @enum {string} */


var NgbSlideEventDirection = {
  LEFT:
  /** @type {?} */
  'left',
  RIGHT:
  /** @type {?} */
  'right'
};
/** @type {?} */

var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

var NgbCarouselModule = /*#__PURE__*/function () {
  function NgbCarouselModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCarouselModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCarouselModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbCarouselModule
      };
    }
  }]);

  return NgbCarouselModule;
}();

NgbCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbCarouselModule
});
NgbCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbCarouselModule_Factory(t) {
    return new (t || NgbCarouselModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbCarouselModule, {
    declarations: function declarations() {
      return [NgbCarousel, NgbSlide];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbCarousel, NgbSlide];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: NGB_CAROUSEL_DIRECTIVES,
      exports: NGB_CAROUSEL_DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A directive to provide a simple way of hiding and showing elements on the page.
 */


var NgbCollapse = function NgbCollapse() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCollapse);

  /**
   * If `true`, will collapse the element or show it otherwise.
   */
  this.collapsed = false;
};

NgbCollapse.ɵfac = function NgbCollapse_Factory(t) {
  return new (t || NgbCollapse)();
};

NgbCollapse.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbCollapse,
  selectors: [["", "ngbCollapse", ""]],
  hostVars: 4,
  hostBindings: function NgbCollapse_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("collapse", true)("show", !ctx.collapsed);
    }
  },
  inputs: {
    collapsed: ["ngbCollapse", "collapsed"]
  },
  exportAs: ["ngbCollapse"]
});
NgbCollapse.propDecorators = {
  collapsed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['ngbCollapse']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCollapse, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbCollapse]',
      exportAs: 'ngbCollapse',
      host: {
        '[class.collapse]': 'true',
        '[class.show]': '!collapsed'
      }
    }]
  }], function () {
    return [];
  }, {
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['ngbCollapse']
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbCollapseModule = /*#__PURE__*/function () {
  function NgbCollapseModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCollapseModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCollapseModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbCollapseModule
      };
    }
  }]);

  return NgbCollapseModule;
}();

NgbCollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbCollapseModule
});
NgbCollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbCollapseModule_Factory(t) {
    return new (t || NgbCollapseModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbCollapseModule, {
    declarations: [NgbCollapse],
    exports: [NgbCollapse]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCollapseModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbCollapse],
      exports: [NgbCollapse]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * \@since 3.0.0
 */


var NgbDate = /*#__PURE__*/function () {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDate, null, [{
    key: "from",

    /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     * @param {?} date
     * @return {?}
     */
    value: function from(date) {
      if (date instanceof NgbDate) {
        return date;
      }

      return date ? new NgbDate(date.year, date.month, date.day) : null;
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     */

  }]);

  function NgbDate(year, month, day) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDate);

    this.year = isInteger(year) ? year : null;
    this.month = isInteger(month) ? month : null;
    this.day = isInteger(day) ? day : null;
  }
  /**
   * Checks if the current date is equal to another date.
   * @param {?} other
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDate, [{
    key: "equals",
    value: function equals(other) {
      return other && this.year === other.year && this.month === other.month && this.day === other.day;
    }
    /**
     * Checks if the current date is before another date.
     * @param {?} other
     * @return {?}
     */

  }, {
    key: "before",
    value: function before(other) {
      if (!other) {
        return false;
      }

      if (this.year === other.year) {
        if (this.month === other.month) {
          return this.day === other.day ? false : this.day < other.day;
        } else {
          return this.month < other.month;
        }
      } else {
        return this.year < other.year;
      }
    }
    /**
     * Checks if the current date is after another date.
     * @param {?} other
     * @return {?}
     */

  }, {
    key: "after",
    value: function after(other) {
      if (!other) {
        return false;
      }

      if (this.year === other.year) {
        if (this.month === other.month) {
          return this.day === other.day ? false : this.day > other.day;
        } else {
          return this.month > other.month;
        }
      } else {
        return this.year > other.year;
      }
    }
  }]);

  return NgbDate;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @param {?} jsDate
 * @return {?}
 */


function fromJSDate(jsDate) {
  return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
/**
 * @param {?} date
 * @return {?}
 */


function toJSDate(date) {
  /** @type {?} */
  var jsDate = new Date(date.year, date.month - 1, date.day, 12); // this is done avoid 30 -> 1930 conversion

  if (!isNaN(jsDate.getTime())) {
    jsDate.setFullYear(date.year);
  }

  return jsDate;
}
/**
 * @return {?}
 */


function NGB_DATEPICKER_CALENDAR_FACTORY() {
  return new NgbCalendarGregorian();
}
/**
 * A service that represents the calendar used by the datepicker.
 *
 * The default implementation uses the Gregorian calendar. You can inject it in your own
 * implementations if necessary to simplify `NgbDate` calculations.
 * @abstract
 */


var NgbCalendar = function NgbCalendar() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCalendar);
};

NgbCalendar.ɵfac = function NgbCalendar_Factory(t) {
  return new (t || NgbCalendar)();
};

NgbCalendar.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCalendar,
  factory: function factory() {
    return NGB_DATEPICKER_CALENDAR_FACTORY();
  },
  providedIn: 'root'
});
/** @nocollapse */

NgbCalendar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: NGB_DATEPICKER_CALENDAR_FACTORY,
  token: NgbCalendar,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCalendar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_CALENDAR_FACTORY
    }]
  }], null, null);
})();

var NgbCalendarGregorian = /*#__PURE__*/function (_NgbCalendar) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbCalendarGregorian, _NgbCalendar);

  var _super = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbCalendarGregorian);

  function NgbCalendarGregorian() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCalendarGregorian);

    return _super.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCalendarGregorian, [{
    key: "getDaysPerWeek",

    /**
     * @return {?}
     */
    value: function getDaysPerWeek() {
      return 7;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getMonths",
    value: function getMonths() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    /**
     * @return {?}
     */

  }, {
    key: "getWeeksPerMonth",
    value: function getWeeksPerMonth() {
      return 6;
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getNext",
    value: function getNext(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      /** @type {?} */
      var jsDate = toJSDate(date);

      switch (period) {
        case 'y':
          return new NgbDate(date.year + number, 1, 1);

        case 'm':
          jsDate = new Date(date.year, date.month + number - 1, 1, 12);
          break;

        case 'd':
          jsDate.setDate(jsDate.getDate() + number);
          break;

        default:
          return date;
      }

      return fromJSDate(jsDate);
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getPrev",
    value: function getPrev(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return this.getNext(date, period, -number);
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "getWeekday",
    value: function getWeekday(date) {
      /** @type {?} */
      var jsDate = toJSDate(date);
      /** @type {?} */

      var day = jsDate.getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

      return day === 0 ? 7 : day;
    }
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */

  }, {
    key: "getWeekNumber",
    value: function getWeekNumber(week, firstDayOfWeek) {
      // in JS Date Sun=0, in ISO 8601 Sun=7
      if (firstDayOfWeek === 7) {
        firstDayOfWeek = 0;
      }
      /** @type {?} */


      var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
      /** @type {?} */

      var date = week[thursdayIndex];
      /** @type {?} */

      var jsDate = toJSDate(date);
      jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
      // Thursday

      /** @type {?} */

      var time = jsDate.getTime();
      jsDate.setMonth(0); // Compare with Jan 1

      jsDate.setDate(1);
      return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getToday",
    value: function getToday() {
      return fromJSDate(new Date());
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "isValid",
    value: function isValid(date) {
      if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
        return false;
      } // year 0 doesn't exist in Gregorian calendar


      if (date.year === 0) {
        return false;
      }
      /** @type {?} */


      var jsDate = toJSDate(date);
      return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
    }
  }]);

  return NgbCalendarGregorian;
}(NgbCalendar);

NgbCalendarGregorian.ɵfac = function NgbCalendarGregorian_Factory(t) {
  return ɵNgbCalendarGregorian_BaseFactory(t || NgbCalendarGregorian);
};

NgbCalendarGregorian.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCalendarGregorian,
  factory: NgbCalendarGregorian.ɵfac
});
var ɵNgbCalendarGregorian_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbCalendarGregorian);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCalendarGregorian, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */


function isChangedDate(prev, next) {
  return !dateComparator(prev, next);
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */


function isChangedMonth(prev, next) {
  return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
/**
 * @param {?} prev
 * @param {?} next
 * @return {?}
 */


function dateComparator(prev, next) {
  return !prev && !next || !!prev && !!next && prev.equals(next);
}
/**
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */


function checkMinBeforeMax(minDate, maxDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error("'maxDate' ".concat(maxDate, " should be greater than 'minDate' ").concat(minDate));
  }
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */


function checkDateInRange(date, minDate, maxDate) {
  if (date && minDate && date.before(minDate)) {
    return minDate;
  }

  if (date && maxDate && date.after(maxDate)) {
    return maxDate;
  }

  return date;
}
/**
 * @param {?} date
 * @param {?} state
 * @return {?}
 */


function isDateSelectable(date, state) {
  var minDate = state.minDate,
      maxDate = state.maxDate,
      disabled = state.disabled,
      markDisabled = state.markDisabled; // clang-format off

  return !(!isDefined(date) || disabled || markDisabled && markDisabled(date, {
    year: date.year,
    month: date.month
  }) || minDate && date.before(minDate) || maxDate && date.after(maxDate)); // clang-format on
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */


function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  /** @type {?} */


  var months = calendar.getMonths(date.year);

  if (minDate && date.year === minDate.year) {
    /** @type {?} */
    var index = months.findIndex(function (month) {
      return month === minDate.month;
    });
    months = months.slice(index);
  }

  if (maxDate && date.year === maxDate.year) {
    /** @type {?} */
    var _index = months.findIndex(function (month) {
      return month === maxDate.month;
    });

    months = months.slice(0, _index + 1);
  }

  return months;
}
/**
 * @param {?} date
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */


function generateSelectBoxYears(date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  /** @type {?} */


  var start = minDate && minDate.year || date.year - 10;
  /** @type {?} */

  var end = maxDate && maxDate.year || date.year + 10;
  return Array.from({
    length: end - start + 1
  }, function (e, i) {
    return start + i;
  });
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} maxDate
 * @return {?}
 */


function nextMonthDisabled(calendar, date, maxDate) {
  return maxDate && calendar.getNext(date, 'm').after(maxDate);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} minDate
 * @return {?}
 */


function prevMonthDisabled(calendar, date, minDate) {
  /** @type {?} */
  var prevDate = calendar.getPrev(date, 'm');
  return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month || prevDate.year < minDate.year && minDate.month === 1);
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?} force
 * @return {?}
 */


function buildMonths(calendar, date, state, i18n, force) {
  var displayMonths = state.displayMonths,
      months = state.months; // move old months to a temporary array

  /** @type {?} */

  var monthsToReuse = months.splice(0, months.length); // generate new first dates, nullify or reuse months

  /** @type {?} */

  var firstDates = Array.from({
    length: displayMonths
  }, function (_, i) {
    /** @type {?} */
    var firstDate = calendar.getNext(date, 'm', i);
    months[i] = null;

    if (!force) {
      /** @type {?} */
      var reusedIndex = monthsToReuse.findIndex(function (month) {
        return month.firstDate.equals(firstDate);
      }); // move reused month back to months

      if (reusedIndex !== -1) {
        months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
      }
    }

    return firstDate;
  }); // rebuild nullified months

  firstDates.forEach(function (firstDate, i) {
    if (months[i] === null) {
      months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() ||
      /** @type {?} */
      {});
    }
  });
  return months;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} state
 * @param {?} i18n
 * @param {?=} month
 * @return {?}
 */


function buildMonth(calendar, date, state, i18n) {
  var month = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] :
  /** @type {?} */
  {};
  var dayTemplateData = state.dayTemplateData,
      minDate = state.minDate,
      maxDate = state.maxDate,
      firstDayOfWeek = state.firstDayOfWeek,
      markDisabled = state.markDisabled,
      outsideDays = state.outsideDays;
  /** @type {?} */

  var calendarToday = calendar.getToday();
  month.firstDate = null;
  month.lastDate = null;
  month.number = date.month;
  month.year = date.year;
  month.weeks = month.weeks || [];
  month.weekdays = month.weekdays || [];
  date = getFirstViewDate(calendar, date, firstDayOfWeek); // month has weeks

  for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
    /** @type {?} */
    var weekObject = month.weeks[week];

    if (!weekObject) {
      weekObject = month.weeks[week] = {
        number: 0,
        days: [],
        collapsed: true
      };
    }
    /** @type {?} */


    var days = weekObject.days; // week has days

    for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0) {
        month.weekdays[day] = calendar.getWeekday(date);
      }
      /** @type {?} */


      var newDate = new NgbDate(date.year, date.month, date.day);
      /** @type {?} */

      var nextDate = calendar.getNext(newDate);
      /** @type {?} */

      var ariaLabel = i18n.getDayAriaLabel(newDate); // marking date as disabled

      /** @type {?} */

      var disabled = !!(minDate && newDate.before(minDate) || maxDate && newDate.after(maxDate));

      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, {
          month: month.number,
          year: month.year
        });
      } // today

      /** @type {?} */


      var today = newDate.equals(calendarToday); // adding user-provided data to the context

      /** @type {?} */

      var contextUserData = dayTemplateData ? dayTemplateData(newDate, {
        month: month.number,
        year: month.year
      }) : undefined; // saving first date of the month

      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      } // saving last date of the month


      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }
      /** @type {?} */


      var dayObject = days[day];

      if (!dayObject) {
        dayObject = days[day] =
        /** @type {?} */
        {};
      }

      dayObject.date = newDate;
      dayObject.context = Object.assign(dayObject.context || {}, {
        $implicit: newDate,
        date: newDate,
        data: contextUserData,
        currentMonth: month.number,
        disabled: disabled,
        focused: false,
        selected: false,
        today: today
      });
      dayObject.tabindex = -1;
      dayObject.ariaLabel = ariaLabel;
      dayObject.hidden = false;
      date = nextDate;
    }

    weekObject.number = calendar.getWeekNumber(days.map(function (day) {
      return day.date;
    }), firstDayOfWeek); // marking week as collapsed

    weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number && days[days.length - 1].date.month !== month.number;
  }

  return month;
}
/**
 * @param {?} calendar
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */


function getFirstViewDate(calendar, date, firstDayOfWeek) {
  /** @type {?} */
  var daysPerWeek = calendar.getDaysPerWeek();
  /** @type {?} */

  var firstMonthDate = new NgbDate(date.year, date.month, 1);
  /** @type {?} */

  var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
  return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @param {?} locale
 * @return {?}
 */


function NGB_DATEPICKER_18N_FACTORY(locale) {
  return new NgbDatepickerI18nDefault(locale);
}
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 * @abstract
 */


var NgbDatepickerI18n = /*#__PURE__*/function () {
  function NgbDatepickerI18n() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerI18n);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerI18n, [{
    key: "getDayNumerals",

    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * \@since 3.0.0
     * @param {?} date
     * @return {?}
     */
    value: function getDayNumerals(date) {
      return "".concat(date.day);
    }
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * \@since 3.0.0
     * @param {?} weekNumber
     * @return {?}
     */

  }, {
    key: "getWeekNumerals",
    value: function getWeekNumerals(weekNumber) {
      return "".concat(weekNumber);
    }
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * \@since 3.0.0
     * @param {?} year
     * @return {?}
     */

  }, {
    key: "getYearNumerals",
    value: function getYearNumerals(year) {
      return "".concat(year);
    }
  }]);

  return NgbDatepickerI18n;
}();

NgbDatepickerI18n.ɵfac = function NgbDatepickerI18n_Factory(t) {
  return new (t || NgbDatepickerI18n)();
};

NgbDatepickerI18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18n,
  factory: function NgbDatepickerI18n_Factory(t) {
    var r = null;

    if (t) {
      r = new t();
    } else {
      r = NGB_DATEPICKER_18N_FACTORY(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"]));
    }

    return r;
  },
  providedIn: 'root'
});
/** @nocollapse */

NgbDatepickerI18n.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbDatepickerI18n_Factory() {
    return NGB_DATEPICKER_18N_FACTORY(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"]));
  },
  token: NgbDatepickerI18n,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerI18n, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_18N_FACTORY,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"]]
    }]
  }], null, null);
})();

var NgbDatepickerI18nDefault = /*#__PURE__*/function (_NgbDatepickerI18n) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbDatepickerI18nDefault, _NgbDatepickerI18n);

  var _super2 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbDatepickerI18nDefault);

  /**
   * @param {?} _locale
   */
  function NgbDatepickerI18nDefault(_locale) {
    var _this6;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerI18nDefault);

    _this6 = _super2.call(this);
    _this6._locale = _locale;
    /** @type {?} */

    var weekdaysStartingOnSunday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["getLocaleDayNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_10__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_10__["TranslationWidth"].Short);
    _this6._weekdaysShort = weekdaysStartingOnSunday.map(function (day, index) {
      return weekdaysStartingOnSunday[(index + 1) % 7];
    });
    _this6._monthsShort = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_10__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_10__["TranslationWidth"].Abbreviated);
    _this6._monthsFull = Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_10__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_10__["TranslationWidth"].Wide);
    return _this6;
  }
  /**
   * @param {?} weekday
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerI18nDefault, [{
    key: "getWeekdayShortName",
    value: function getWeekdayShortName(weekday) {
      return this._weekdaysShort[weekday - 1];
    }
    /**
     * @param {?} month
     * @return {?}
     */

  }, {
    key: "getMonthShortName",
    value: function getMonthShortName(month) {
      return this._monthsShort[month - 1];
    }
    /**
     * @param {?} month
     * @return {?}
     */

  }, {
    key: "getMonthFullName",
    value: function getMonthFullName(month) {
      return this._monthsFull[month - 1];
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "getDayAriaLabel",
    value: function getDayAriaLabel(date) {
      /** @type {?} */
      var jsDate = new Date(date.year, date.month - 1, date.day);
      return Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(jsDate, 'fullDate', this._locale);
    }
  }]);

  return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n);

NgbDatepickerI18nDefault.ɵfac = function NgbDatepickerI18nDefault_Factory(t) {
  return new (t || NgbDatepickerI18nDefault)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"]));
};

NgbDatepickerI18nDefault.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18nDefault,
  factory: NgbDatepickerI18nDefault.ɵfac
});
/** @nocollapse */

NgbDatepickerI18nDefault.ctorParameters = function () {
  return [{
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerI18nDefault, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], function () {
    return [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"]]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbDatepickerService = /*#__PURE__*/function () {
  /**
   * @param {?} _calendar
   * @param {?} _i18n
   */
  function NgbDatepickerService(_calendar, _i18n) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerService);

    this._calendar = _calendar;
    this._i18n = _i18n;
    this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    this._select$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    this._state = {
      disabled: false,
      displayMonths: 1,
      firstDayOfWeek: 1,
      focusVisible: false,
      months: [],
      navigation: 'select',
      outsideDays: 'visible',
      prevDisabled: false,
      nextDisabled: false,
      selectBoxes: {
        years: [],
        months: []
      },
      selectedDate: null
    };
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerService, [{
    key: "focus",

    /**
     * @param {?} date
     * @return {?}
     */
    value: function focus(date) {
      if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
        this._nextState({
          focusDate: date
        });
      }
    }
    /**
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "focusMove",
    value: function focusMove(period, number) {
      this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    }
    /**
     * @return {?}
     */

  }, {
    key: "focusSelect",
    value: function focusSelect() {
      if (isDateSelectable(this._state.focusDate, this._state)) {
        this.select(this._state.focusDate, {
          emitEvent: true
        });
      }
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "open",
    value: function open(date) {
      /** @type {?} */
      var firstDate = this.toValidDate(date, this._calendar.getToday());

      if (!this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, date))) {
        this._nextState({
          firstDate: firstDate
        });
      }
    }
    /**
     * @param {?} date
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "select",
    value: function select(date) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      /** @type {?} */
      var selectedDate = this.toValidDate(date, null);

      if (!this._state.disabled) {
        if (isChangedDate(this._state.selectedDate, selectedDate)) {
          this._nextState({
            selectedDate: selectedDate
          });
        }

        if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
          this._select$.next(selectedDate);
        }
      }
    }
    /**
     * @param {?} date
     * @param {?=} defaultValue
     * @return {?}
     */

  }, {
    key: "toValidDate",
    value: function toValidDate(date, defaultValue) {
      /** @type {?} */
      var ngbDate = NgbDate.from(date);

      if (defaultValue === undefined) {
        defaultValue = this._calendar.getToday();
      }

      return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    }
    /**
     * @param {?} patch
     * @return {?}
     */

  }, {
    key: "_nextState",
    value: function _nextState(patch) {
      /** @type {?} */
      var newState = this._updateState(patch);

      this._patchContexts(newState);

      this._state = newState;

      this._model$.next(this._state);
    }
    /**
     * @param {?} state
     * @return {?}
     */

  }, {
    key: "_patchContexts",
    value: function _patchContexts(state) {
      var months = state.months,
          displayMonths = state.displayMonths,
          selectedDate = state.selectedDate,
          focusDate = state.focusDate,
          focusVisible = state.focusVisible,
          disabled = state.disabled,
          outsideDays = state.outsideDays;
      state.months.forEach(function (month) {
        month.weeks.forEach(function (week) {
          week.days.forEach(function (day) {
            // patch focus flag
            if (focusDate) {
              day.context.focused = focusDate.equals(day.date) && focusVisible;
            } // calculating tabindex


            day.tabindex = !disabled && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1; // override context disabled

            if (disabled === true) {
              day.context.disabled = true;
            } // patch selection flag


            if (selectedDate !== undefined) {
              day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
            } // visibility


            if (month.number !== day.date.month) {
              day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' || displayMonths > 1 && day.date.after(months[0].firstDate) && day.date.before(months[displayMonths - 1].lastDate);
            }
          });
        });
      });
    }
    /**
     * @param {?} patch
     * @return {?}
     */

  }, {
    key: "_updateState",
    value: function _updateState(patch) {
      // patching fields

      /** @type {?} */
      var state = Object.assign({}, this._state, patch);
      /** @type {?} */

      var startDate = state.firstDate; // min/max dates changed

      if ('minDate' in patch || 'maxDate' in patch) {
        checkMinBeforeMax(state.minDate, state.maxDate);
        state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
        state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
        startDate = state.focusDate;
      } // disabled


      if ('disabled' in patch) {
        state.focusVisible = false;
      } // initial rebuild via 'select()'


      if ('selectedDate' in patch && this._state.months.length === 0) {
        startDate = state.selectedDate;
      } // terminate early if only focus visibility was changed


      if ('focusVisible' in patch) {
        return state;
      } // focus date changed


      if ('focusDate' in patch) {
        state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
        startDate = state.focusDate; // nothing to rebuild if only focus changed and it is still visible

        if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) && !state.focusDate.after(state.lastDate)) {
          return state;
        }
      } // first date changed


      if ('firstDate' in patch) {
        state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
        startDate = state.firstDate;
      } // rebuilding months


      if (startDate) {
        /** @type {?} */
        var forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch;
        /** @type {?} */

        var months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild); // updating months and boundary dates

        state.months = months;
        state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
        state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined; // reset selected date if 'markDisabled' returns true

        if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
          state.selectedDate = null;
        } // adjusting focus after months were built


        if ('firstDate' in patch) {
          if (state.focusDate === undefined || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
            state.focusDate = startDate;
          }
        } // adjusting months/years for the select box navigation

        /** @type {?} */


        var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
        /** @type {?} */

        var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;

        if (state.navigation === 'select') {
          // years ->  boundaries (min/max were changed)
          if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
            state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
          } // months -> when current year or boundaries change


          if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
            state.selectBoxes.months = generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
          }
        } else {
          state.selectBoxes = {
            years: [],
            months: []
          };
        } // updating navigation arrows -> boundaries change (min/max) or month/year changes


        if ((state.navigation === 'arrows' || state.navigation === 'select') && (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
          state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
          state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
        }
      }

      return state;
    }
  }, {
    key: "model$",
    get: function get() {
      return this._model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (model) {
        return model.months.length > 0;
      }));
    }
    /**
     * @return {?}
     */

  }, {
    key: "select$",
    get: function get() {
      return this._select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (date) {
        return date !== null;
      }));
    }
    /**
     * @param {?} dayTemplateData
     * @return {?}
     */

  }, {
    key: "dayTemplateData",
    set: function set(dayTemplateData) {
      if (this._state.dayTemplateData !== dayTemplateData) {
        this._nextState({
          dayTemplateData: dayTemplateData
        });
      }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */

  }, {
    key: "disabled",
    set: function set(disabled) {
      if (this._state.disabled !== disabled) {
        this._nextState({
          disabled: disabled
        });
      }
    }
    /**
     * @param {?} displayMonths
     * @return {?}
     */

  }, {
    key: "displayMonths",
    set: function set(displayMonths) {
      displayMonths = toInteger(displayMonths);

      if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
        this._nextState({
          displayMonths: displayMonths
        });
      }
    }
    /**
     * @param {?} firstDayOfWeek
     * @return {?}
     */

  }, {
    key: "firstDayOfWeek",
    set: function set(firstDayOfWeek) {
      firstDayOfWeek = toInteger(firstDayOfWeek);

      if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
        this._nextState({
          firstDayOfWeek: firstDayOfWeek
        });
      }
    }
    /**
     * @param {?} focusVisible
     * @return {?}
     */

  }, {
    key: "focusVisible",
    set: function set(focusVisible) {
      if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
        this._nextState({
          focusVisible: focusVisible
        });
      }
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "maxDate",
    set: function set(date) {
      /** @type {?} */
      var maxDate = this.toValidDate(date, null);

      if (isChangedDate(this._state.maxDate, maxDate)) {
        this._nextState({
          maxDate: maxDate
        });
      }
    }
    /**
     * @param {?} markDisabled
     * @return {?}
     */

  }, {
    key: "markDisabled",
    set: function set(markDisabled) {
      if (this._state.markDisabled !== markDisabled) {
        this._nextState({
          markDisabled: markDisabled
        });
      }
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "minDate",
    set: function set(date) {
      /** @type {?} */
      var minDate = this.toValidDate(date, null);

      if (isChangedDate(this._state.minDate, minDate)) {
        this._nextState({
          minDate: minDate
        });
      }
    }
    /**
     * @param {?} navigation
     * @return {?}
     */

  }, {
    key: "navigation",
    set: function set(navigation) {
      if (this._state.navigation !== navigation) {
        this._nextState({
          navigation: navigation
        });
      }
    }
    /**
     * @param {?} outsideDays
     * @return {?}
     */

  }, {
    key: "outsideDays",
    set: function set(outsideDays) {
      if (this._state.outsideDays !== outsideDays) {
        this._nextState({
          outsideDays: outsideDays
        });
      }
    }
  }]);

  return NgbDatepickerService;
}();

NgbDatepickerService.ɵfac = function NgbDatepickerService_Factory(t) {
  return new (t || NgbDatepickerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](NgbDatepickerI18n));
};

NgbDatepickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDatepickerService,
  factory: NgbDatepickerService.ɵfac
});
/** @nocollapse */

NgbDatepickerService.ctorParameters = function () {
  return [{
    type: NgbCalendar
  }, {
    type: NgbDatepickerI18n
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], function () {
    return [{
      type: NgbCalendar
    }, {
      type: NgbDatepickerI18n
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @enum {number} */


var Key = {
  Tab: 9,
  Enter: 13,
  Escape: 27,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40
};
Key[Key.Tab] = 'Tab';
Key[Key.Enter] = 'Enter';
Key[Key.Escape] = 'Escape';
Key[Key.Space] = 'Space';
Key[Key.PageUp] = 'PageUp';
Key[Key.PageDown] = 'PageDown';
Key[Key.End] = 'End';
Key[Key.Home] = 'Home';
Key[Key.ArrowLeft] = 'ArrowLeft';
Key[Key.ArrowUp] = 'ArrowUp';
Key[Key.ArrowRight] = 'ArrowRight';
Key[Key.ArrowDown] = 'ArrowDown';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

var NgbDatepickerKeyMapService = /*#__PURE__*/function () {
  /**
   * @param {?} _service
   * @param {?} _calendar
   */
  function NgbDatepickerKeyMapService(_service, _calendar) {
    var _this7 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerKeyMapService);

    this._service = _service;
    this._calendar = _calendar;

    _service.model$.subscribe(function (model) {
      _this7._minDate = model.minDate;
      _this7._maxDate = model.maxDate;
      _this7._firstViewDate = model.firstDate;
      _this7._lastViewDate = model.lastDate;
    });
  }
  /**
   * @param {?} event
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerKeyMapService, [{
    key: "processKey",
    value: function processKey(event) {
      // tslint:disable-next-line:deprecation
      switch (event.which) {
        case Key.PageUp:
          this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);

          break;

        case Key.PageDown:
          this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);

          break;

        case Key.End:
          this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);

          break;

        case Key.Home:
          this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);

          break;

        case Key.ArrowLeft:
          this._service.focusMove('d', -1);

          break;

        case Key.ArrowUp:
          this._service.focusMove('d', -this._calendar.getDaysPerWeek());

          break;

        case Key.ArrowRight:
          this._service.focusMove('d', 1);

          break;

        case Key.ArrowDown:
          this._service.focusMove('d', this._calendar.getDaysPerWeek());

          break;

        case Key.Enter:
        case Key.Space:
          this._service.focusSelect();

          break;

        default:
          return;
      } // note 'return' in default case


      event.preventDefault();
      event.stopPropagation();
    }
  }]);

  return NgbDatepickerKeyMapService;
}();

NgbDatepickerKeyMapService.ɵfac = function NgbDatepickerKeyMapService_Factory(t) {
  return new (t || NgbDatepickerKeyMapService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](NgbDatepickerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](NgbCalendar));
};

NgbDatepickerKeyMapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDatepickerKeyMapService,
  factory: NgbDatepickerKeyMapService.ɵfac
});
/** @nocollapse */

NgbDatepickerKeyMapService.ctorParameters = function () {
  return [{
    type: NgbDatepickerService
  }, {
    type: NgbCalendar
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerKeyMapService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], function () {
    return [{
      type: NgbDatepickerService
    }, {
      type: NgbCalendar
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @enum {number} */


var NavigationEvent = {
  PREV: 0,
  NEXT: 1
};
NavigationEvent[NavigationEvent.PREV] = 'PREV';
NavigationEvent[NavigationEvent.NEXT] = 'NEXT';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */

var NgbDatepickerConfig = function NgbDatepickerConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerConfig);

  this.displayMonths = 1;
  this.firstDayOfWeek = 1;
  this.navigation = 'select';
  this.outsideDays = 'visible';
  this.showWeekdays = true;
  this.showWeekNumbers = false;
};

NgbDatepickerConfig.ɵfac = function NgbDatepickerConfig_Factory(t) {
  return new (t || NgbDatepickerConfig)();
};

NgbDatepickerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDatepickerConfig,
  factory: NgbDatepickerConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbDatepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbDatepickerConfig_Factory() {
    return new NgbDatepickerConfig();
  },
  token: NgbDatepickerConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @return {?}
 */


function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 * @abstract
 * @template D
 */


var NgbDateAdapter = function NgbDateAdapter() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDateAdapter);
};

NgbDateAdapter.ɵfac = function NgbDateAdapter_Factory(t) {
  return new (t || NgbDateAdapter)();
};

NgbDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDateAdapter,
  factory: function factory() {
    return NGB_DATEPICKER_DATE_ADAPTER_FACTORY();
  },
  providedIn: 'root'
});
/** @nocollapse */

NgbDateAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY,
  token: NgbDateAdapter,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDateAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY
    }]
  }], null, null);
})();

var NgbDateStructAdapter = /*#__PURE__*/function (_NgbDateAdapter) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbDateStructAdapter, _NgbDateAdapter);

  var _super3 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbDateStructAdapter);

  function NgbDateStructAdapter() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDateStructAdapter);

    return _super3.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDateStructAdapter, [{
    key: "fromModel",

    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */
    value: function fromModel(date) {
      return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
        year: date.year,
        month: date.month,
        day: date.day
      } : null;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "toModel",
    value: function toModel(date) {
      return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
        year: date.year,
        month: date.month,
        day: date.day
      } : null;
    }
  }]);

  return NgbDateStructAdapter;
}(NgbDateAdapter);

NgbDateStructAdapter.ɵfac = function NgbDateStructAdapter_Factory(t) {
  return ɵNgbDateStructAdapter_BaseFactory(t || NgbDateStructAdapter);
};

NgbDateStructAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDateStructAdapter,
  factory: NgbDateStructAdapter.ɵfac
});
var ɵNgbDateStructAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbDateStructAdapter);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDateStructAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_DATEPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbDatepicker;
  }),
  multi: true
};
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */

var NgbDatepicker = /*#__PURE__*/function () {
  /**
   * @param {?} _keyMapService
   * @param {?} _service
   * @param {?} _calendar
   * @param {?} i18n
   * @param {?} config
   * @param {?} _cd
   * @param {?} _elementRef
   * @param {?} _ngbDateAdapter
   * @param {?} _ngZone
   */
  function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter, _ngZone) {
    var _this8 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepicker);

    this._keyMapService = _keyMapService;
    this._service = _service;
    this._calendar = _calendar;
    this.i18n = i18n;
    this._cd = _cd;
    this._elementRef = _elementRef;
    this._ngbDateAdapter = _ngbDateAdapter;
    this._ngZone = _ngZone;
    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    /**
     * An event emitted right before the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */

    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     */

    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();

    this.onChange = function (_) {};

    this.onTouched = function () {};

    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate'].forEach(function (input) {
      return _this8[input] = config[input];
    });

    _service.select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed$)).subscribe(function (date) {
      _this8.select.emit(date);
    });

    _service.model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed$)).subscribe(function (model) {
      /** @type {?} */
      var newDate = model.firstDate;
      /** @type {?} */

      var oldDate = _this8.model ? _this8.model.firstDate : null;
      /** @type {?} */

      var navigationPrevented = false; // emitting navigation event if the first month changes

      if (!newDate.equals(oldDate)) {
        _this8.navigate.emit({
          current: oldDate ? {
            year: oldDate.year,
            month: oldDate.month
          } : null,
          next: {
            year: newDate.year,
            month: newDate.month
          },
          preventDefault: function preventDefault() {
            return navigationPrevented = true;
          }
        }); // can't prevent the very first navigation


        if (navigationPrevented && oldDate !== null) {
          _this8._service.open(oldDate);

          return;
        }
      }
      /** @type {?} */


      var newSelectedDate = model.selectedDate;
      /** @type {?} */

      var newFocusedDate = model.focusDate;
      /** @type {?} */

      var oldFocusedDate = _this8.model ? _this8.model.focusDate : null;
      _this8.model = model; // handling selection change

      if (isChangedDate(newSelectedDate, _this8._controlValue)) {
        _this8._controlValue = newSelectedDate;

        _this8.onTouched();

        _this8.onChange(_this8._ngbDateAdapter.toModel(newSelectedDate));
      } // handling focus change


      if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
        _this8.focus();
      }

      _cd.markForCheck();
    });
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepicker, [{
    key: "focus",
    value: function focus() {
      var _this9 = this;

      this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(function () {
        /** @type {?} */
        var elementToFocus = _this9._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');

        if (elementToFocus) {
          elementToFocus.focus();
        }
      });
    }
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     * @param {?=} date
     * @return {?}
     */

  }, {
    key: "navigateTo",
    value: function navigateTo(date) {
      this._service.open(NgbDate.from(date ? date.day ?
      /** @type {?} */
      date : Object.assign({}, date, {
        day: 1
      }) : null));
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this10 = this;

      this._ngZone.runOutsideAngular(function () {
        /** @type {?} */
        var focusIns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(_this10._monthsEl.nativeElement, 'focusin');
        /** @type {?} */

        var focusOuts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(_this10._monthsEl.nativeElement, 'focusout'); // we're changing 'focusVisible' only when entering or leaving months view
        // and ignoring all focus events where both 'target' and 'related' target are day cells

        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(focusIns$, focusOuts$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (_ref) {
          var target = _ref.target,
              relatedTarget = _ref.relatedTarget;
          return !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day'));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(_this10._destroyed$)).subscribe(function (_ref2) {
          var type = _ref2.type;
          return _this10._ngZone.run(function () {
            return _this10._service.focusVisible = type === 'focusin';
          });
        });
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed$.next();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this11 = this;

      if (this.model === undefined) {
        ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays'].forEach(function (input) {
          return _this11._service[input] = _this11[input];
        });
        this.navigateTo(this.startDate);
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this12 = this;

      ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays'].filter(function (input) {
        return input in changes;
      }).forEach(function (input) {
        return _this12._service[input] = _this12[input];
      });

      if ('startDate' in changes) {
        var _changes$startDate = changes.startDate,
            currentValue = _changes$startDate.currentValue,
            previousValue = _changes$startDate.previousValue;

        if (isChangedMonth(previousValue, currentValue)) {
          this.navigateTo(this.startDate);
        }
      }
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "onDateSelect",
    value: function onDateSelect(date) {
      this._service.focus(date);

      this._service.select(date, {
        emitEvent: true
      });
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      this._keyMapService.processKey(event);
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "onNavigateDateSelect",
    value: function onNavigateDateSelect(date) {
      this._service.open(date);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onNavigateEvent",
    value: function onNavigateEvent(event) {
      switch (event) {
        case NavigationEvent.PREV:
          this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));

          break;

        case NavigationEvent.NEXT:
          this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));

          break;
      }
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._service.disabled = isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));

      this._service.select(this._controlValue);
    }
  }]);

  return NgbDatepicker;
}();

NgbDatepicker.ɵfac = function NgbDatepicker_Factory(t) {
  return new (t || NgbDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerKeyMapService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerI18n), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]));
};

NgbDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbDatepicker,
  selectors: [["ngb-datepicker"]],
  viewQuery: function NgbDatepicker_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c8, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._monthsEl = _t.first);
    }
  },
  inputs: {
    dayTemplate: "dayTemplate",
    dayTemplateData: "dayTemplateData",
    displayMonths: "displayMonths",
    firstDayOfWeek: "firstDayOfWeek",
    footerTemplate: "footerTemplate",
    markDisabled: "markDisabled",
    maxDate: "maxDate",
    minDate: "minDate",
    navigation: "navigation",
    outsideDays: "outsideDays",
    showWeekdays: "showWeekdays",
    showWeekNumbers: "showWeekNumbers",
    startDate: "startDate"
  },
  outputs: {
    navigate: "navigate",
    select: "select"
  },
  exportAs: ["ngbDatepicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService, NgbDatepickerKeyMapService]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 3,
  consts: [["dt", ""], [1, "ngb-dp-header", "bg-light"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select", 4, "ngIf"], [1, "ngb-dp-months", 3, "keydown"], ["months", ""], ["ngFor", "", 3, "ngForOf"], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes", "navigate", "select"], [1, "ngb-dp-month"], ["class", "ngb-dp-month-name bg-light", 4, "ngIf"], [3, "month", "dayTemplate", "showWeekdays", "showWeekNumbers", "select"], [1, "ngb-dp-month-name", "bg-light"]],
  template: function NgbDatepicker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbDatepicker_ng_template_0_Template, 1, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbDatepicker_ngb_datepicker_navigation_3_Template, 1, 7, "ngb-datepicker-navigation", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown", function NgbDatepicker_Template_div_keydown_4_listener($event) {
        return ctx.onKeyDown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, NgbDatepicker_ng_template_6_Template, 3, 5, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, NgbDatepicker_ng_template_7_Template, 0, 0, "ng-template", 6);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.navigation !== "none");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.model.months);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerTemplate);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], NgbDatepickerDayView, NgbDatepickerNavigation, NgbDatepickerMonthView];
  },
  styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbDatepicker.ctorParameters = function () {
  return [{
    type: NgbDatepickerKeyMapService
  }, {
    type: NgbDatepickerService
  }, {
    type: NgbCalendar
  }, {
    type: NgbDatepickerI18n
  }, {
    type: NgbDatepickerConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: NgbDateAdapter
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }];
};

NgbDatepicker.propDecorators = {
  _monthsEl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
    args: ['months']
  }],
  dayTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  dayTemplateData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  displayMonths: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  firstDayOfWeek: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  footerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  markDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  navigation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  outsideDays: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showWeekdays: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showWeekNumbers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  startDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  navigate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      exportAs: 'ngbDatepicker',
      selector: 'ngb-datepicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-light\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div #months class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name bg-light\">\n            {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n\n    <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n  ",
      providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService, NgbDatepickerKeyMapService],
      styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerKeyMapService
    }, {
      type: NgbDatepickerService
    }, {
      type: NgbCalendar
    }, {
      type: NgbDatepickerI18n
    }, {
      type: NgbDatepickerConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: NgbDateAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }];
  }, {
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    _monthsEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
      args: ['months']
    }],
    dayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    dayTemplateData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    displayMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    firstDayOfWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    markDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    navigation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    outsideDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showWeekdays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showWeekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    startDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbDatepickerMonthView = /*#__PURE__*/function () {
  /**
   * @param {?} i18n
   */
  function NgbDatepickerMonthView(i18n) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerMonthView);

    this.i18n = i18n;
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
  }
  /**
   * @param {?} day
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerMonthView, [{
    key: "doSelect",
    value: function doSelect(day) {
      if (!day.context.disabled && !day.hidden) {
        this.select.emit(day.date);
      }
    }
  }]);

  return NgbDatepickerMonthView;
}();

NgbDatepickerMonthView.ɵfac = function NgbDatepickerMonthView_Factory(t) {
  return new (t || NgbDatepickerMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};

NgbDatepickerMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbDatepickerMonthView,
  selectors: [["ngb-datepicker-month-view"]],
  hostAttrs: ["role", "grid"],
  inputs: {
    dayTemplate: "dayTemplate",
    month: "month",
    showWeekdays: "showWeekdays",
    showWeekNumbers: "showWeekNumbers"
  },
  outputs: {
    select: "select"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "ngb-dp-week ngb-dp-weekdays bg-light", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "ngb-dp-week", "ngb-dp-weekdays", "bg-light"], ["class", "ngb-dp-weekday ngb-dp-showweek", 4, "ngIf"], ["class", "ngb-dp-weekday small", 4, "ngFor", "ngForOf"], [1, "ngb-dp-weekday", "ngb-dp-showweek"], [1, "ngb-dp-weekday", "small"], ["class", "ngb-dp-week", "role", "row", 4, "ngIf"], ["role", "row", 1, "ngb-dp-week"], ["class", "ngb-dp-week-number small text-muted", 4, "ngIf"], ["class", "ngb-dp-day", "role", "gridcell", 3, "disabled", "tabindex", "hidden", "ngb-dp-today", "click", 4, "ngFor", "ngForOf"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "tabindex", "click"], [3, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbDatepickerMonthView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbDatepickerMonthView_div_0_Template, 3, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbDatepickerMonthView_ng_template_1_Template, 1, 1, "ng-template", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showWeekdays);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.month.weeks);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"]],
  styles: ["ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}"],
  encapsulation: 2
});
/** @nocollapse */

NgbDatepickerMonthView.ctorParameters = function () {
  return [{
    type: NgbDatepickerI18n
  }];
};

NgbDatepickerMonthView.propDecorators = {
  dayTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  month: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showWeekdays: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showWeekNumbers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerMonthView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-datepicker-month-view',
      host: {
        'role': 'grid'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays bg-light\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!week.collapsed\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ i18n.getWeekNumerals(week.number) }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"day.hidden\"\n          [class.ngb-dp-today]=\"day.context.today\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!day.hidden\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  ",
      styles: ["ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    dayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    month: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showWeekdays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showWeekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbDatepickerNavigation =
/**
 * @param {?} i18n
 */
function NgbDatepickerNavigation(i18n) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerNavigation);

  this.i18n = i18n;
  this.navigation = NavigationEvent;
  this.months = [];
  this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
  this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
};

NgbDatepickerNavigation.ɵfac = function NgbDatepickerNavigation_Factory(t) {
  return new (t || NgbDatepickerNavigation)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};

NgbDatepickerNavigation.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbDatepickerNavigation,
  selectors: [["ngb-datepicker-navigation"]],
  inputs: {
    months: "months",
    date: "date",
    disabled: "disabled",
    showSelect: "showSelect",
    prevDisabled: "prevDisabled",
    nextDisabled: "nextDisabled",
    selectBoxes: "selectBoxes"
  },
  outputs: {
    navigate: "navigate",
    select: "select"
  },
  decls: 10,
  vars: 4,
  consts: function consts() {
    var i18n_9;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_10 = goog.getMsg("Previous month");
      i18n_9 = MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_10;
    } else {
      i18n_9 = $localize(_templateObject4());
    }

    var i18n_11;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_12 = goog.getMsg("Previous month");
      i18n_11 = MSG_EXTERNAL_ngb_datepicker_previous_month$$FESM2015_NG_BOOTSTRAP_JS_12;
    } else {
      i18n_11 = $localize(_templateObject5());
    }

    var i18n_13;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_14 = goog.getMsg("Next month");
      i18n_13 = MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_14;
    } else {
      i18n_13 = $localize(_templateObject6());
    }

    var i18n_15;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_16 = goog.getMsg("Next month");
      i18n_15 = MSG_EXTERNAL_ngb_datepicker_next_month$$FESM2015_NG_BOOTSTRAP_JS_16;
    } else {
      i18n_15 = $localize(_templateObject7());
    }

    return [[1, "ngb-dp-arrow"], ["type", "button", 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "disabled", "click", 6, "aria-label", "title"], ["aria-label", i18n_9, "title", i18n_11], [1, "ngb-dp-navigation-chevron"], ["class", "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select", 4, "ngIf"], [4, "ngIf"], [1, "ngb-dp-arrow", "right"], ["aria-label", i18n_13, "title", i18n_15], [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years", "select"], ["ngFor", "", 3, "ngForOf"], ["class", "ngb-dp-arrow", 4, "ngIf"], [1, "ngb-dp-month-name"]];
  },
  template: function NgbDatepickerNavigation_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbDatepickerNavigation_Template_button_click_1_listener() {
        return ctx.navigate.emit(ctx.navigation.PREV);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NgbDatepickerNavigation_ngb_datepicker_navigation_select_4_Template, 1, 4, "ngb-datepicker-navigation-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, NgbDatepickerNavigation_5_Template, 1, 1, undefined, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbDatepickerNavigation_Template_button_click_7_listener() {
        return ctx.navigate.emit(ctx.navigation.NEXT);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.prevDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.nextDisabled);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], NgbDatepickerNavigationSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]];
  },
  styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbDatepickerNavigation.ctorParameters = function () {
  return [{
    type: NgbDatepickerI18n
  }];
};

NgbDatepickerNavigation.propDecorators = {
  date: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  months: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  prevDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  nextDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  selectBoxes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  navigate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerNavigation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-datepicker-navigation',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      template: "\n    <div class=\"ngb-dp-arrow\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"navigate.emit(navigation.PREV)\" [disabled]=\"prevDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.previous-month\" aria-label=\"Previous month\"\n              i18n-title=\"@@ngb.datepicker.previous-month\" title=\"Previous month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name\">\n        {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"navigate.emit(navigation.NEXT)\" [disabled]=\"nextDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.next-month\" aria-label=\"Next month\"\n              i18n-title=\"@@ngb.datepicker.next-month\" title=\"Next month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    ",
      styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    months: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    prevDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    nextDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    selectBoxes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var isContainedIn = function isContainedIn(element, array) {
  return array ? array.some(function (item) {
    return item.contains(element);
  }) : false;
};
/** @type {?} */


var matchesSelectorIfAny = function matchesSelectorIfAny(element, selector) {
  return !selector || closest(element, selector) != null;
}; // we'll have to use 'touch' events instead of 'mouse' events on iOS and add a more significant delay
// to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID

/** @type {?} */


var iOS = false;

if (typeof navigator !== 'undefined') {
  iOS = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
}
/**
 * @param {?} zone
 * @param {?} document
 * @param {?} type
 * @param {?} close
 * @param {?} closed$
 * @param {?} insideElements
 * @param {?=} ignoreElements
 * @param {?=} insideSelector
 * @return {?}
 */


function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
  // closing on ESC and outside clicks
  if (type) {
    zone.runOutsideAngular(function () {
      /** @type {?} */
      var shouldCloseOnClick = function shouldCloseOnClick(event) {
        /** @type {?} */
        var element =
        /** @type {?} */
        event.target;

        if (event instanceof MouseEvent && event.button === 2 || isContainedIn(element, ignoreElements)) {
          return false;
        }

        if (type === 'inside') {
          return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
        } else if (type === 'outside') {
          return !isContainedIn(element, insideElements);
        } else
          /* if (type === true) */
          {
            return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
          }
      };
      /** @type {?} */


      var escapes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(document, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(closed$), // tslint:disable-next-line:deprecation
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (e) {
        return e.which === Key.Escape;
      })); // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown/touchstart',
      // because on 'mouseup/touchend' DOM nodes might be detached

      /** @type {?} */

      var mouseDowns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(document, iOS ? 'touchstart' : 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(shouldCloseOnClick), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(closed$));
      /** @type {?} */

      var closeableClicks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(document, iOS ? 'touchend' : 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["withLatestFrom"])(mouseDowns$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (_ref3) {
        var _ref4 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, 2),
            _ = _ref4[0],
            shouldClose = _ref4[1];

        return shouldClose;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(iOS ? 16 : 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(closed$));
      Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["race"])([escapes$, closeableClicks$]).subscribe(function () {
        return zone.run(close);
      });
    });
  }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var FOCUSABLE_ELEMENTS_SELECTOR = ['a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])', 'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'].join(', ');
/**
 * Returns first and last focusable elements inside of a given element based on specific CSS selector
 * @param {?} element
 * @return {?}
 */

function getFocusableBoundaryElements(element) {
  /** @type {?} */
  var list = Array.from(
  /** @type {?} */
  element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)).filter(function (el) {
    return el.tabIndex !== -1;
  });
  return [list[0], list[list.length - 1]];
}
/**
 * Function that enforces browser focus to be trapped inside a DOM element.
 *
 * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
 *
 * \@param element The element around which focus will be trapped inside
 * \@param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
 * and free internal resources
 * \@param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
 * false)
 * @type {?}
 */


var ngbFocusTrap = function ngbFocusTrap(element, stopFocusTrap$) {
  var refocusOnClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // last focused element

  /** @type {?} */
  var lastFocusedElement$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(element, 'focusin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (e) {
    return e.target;
  })); // 'tab' / 'shift+tab' stream

  Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(element, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(stopFocusTrap$), // tslint:disable:deprecation
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (e) {
    return e.which === Key.Tab;
  }), // tslint:enable:deprecation
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["withLatestFrom"])(lastFocusedElement$)).subscribe(function (_ref5) {
    var _ref6 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref5, 2),
        tabEvent = _ref6[0],
        focusedElement = _ref6[1];

    var _getFocusableBoundary = getFocusableBoundaryElements(element),
        _getFocusableBoundary2 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_getFocusableBoundary, 2),
        first = _getFocusableBoundary2[0],
        last = _getFocusableBoundary2[1];

    if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
      last.focus();
      tabEvent.preventDefault();
    }

    if (focusedElement === last && !tabEvent.shiftKey) {
      first.focus();
      tabEvent.preventDefault();
    }
  }); // inside click

  if (refocusOnClick) {
    Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(element, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["withLatestFrom"])(lastFocusedElement$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (arr) {
      return (
        /** @type {?} */
        arr[1]
      );
    })).subscribe(function (lastFocusedElement) {
      return lastFocusedElement.focus();
    });
  }
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


var Positioning = /*#__PURE__*/function () {
  function Positioning() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Positioning);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Positioning, [{
    key: "getAllStyles",

    /**
     * @param {?} element
     * @return {?}
     */
    value: function getAllStyles(element) {
      return window.getComputedStyle(element);
    }
    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */

  }, {
    key: "getStyle",
    value: function getStyle(element, prop) {
      return this.getAllStyles(element)[prop];
    }
    /**
     * @param {?} element
     * @return {?}
     */

  }, {
    key: "isStaticPositioned",
    value: function isStaticPositioned(element) {
      return (this.getStyle(element, 'position') || 'static') === 'static';
    }
    /**
     * @param {?} element
     * @return {?}
     */

  }, {
    key: "offsetParent",
    value: function offsetParent(element) {
      /** @type {?} */
      var offsetParentEl =
      /** @type {?} */
      element.offsetParent || document.documentElement;

      while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
        offsetParentEl =
        /** @type {?} */
        offsetParentEl.offsetParent;
      }

      return offsetParentEl || document.documentElement;
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */

  }, {
    key: "position",
    value: function position(element) {
      var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      /** @type {?} */
      var elPosition;
      /** @type {?} */

      var parentOffset = {
        width: 0,
        height: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      };

      if (this.getStyle(element, 'position') === 'fixed') {
        elPosition = element.getBoundingClientRect();
        elPosition = {
          top: elPosition.top,
          bottom: elPosition.bottom,
          left: elPosition.left,
          right: elPosition.right,
          height: elPosition.height,
          width: elPosition.width
        };
      } else {
        /** @type {?} */
        var offsetParentEl = this.offsetParent(element);
        elPosition = this.offset(element, false);

        if (offsetParentEl !== document.documentElement) {
          parentOffset = this.offset(offsetParentEl, false);
        }

        parentOffset.top += offsetParentEl.clientTop;
        parentOffset.left += offsetParentEl.clientLeft;
      }

      elPosition.top -= parentOffset.top;
      elPosition.bottom -= parentOffset.top;
      elPosition.left -= parentOffset.left;
      elPosition.right -= parentOffset.left;

      if (round) {
        elPosition.top = Math.round(elPosition.top);
        elPosition.bottom = Math.round(elPosition.bottom);
        elPosition.left = Math.round(elPosition.left);
        elPosition.right = Math.round(elPosition.right);
      }

      return elPosition;
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */

  }, {
    key: "offset",
    value: function offset(element) {
      var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      /** @type {?} */
      var elBcr = element.getBoundingClientRect();
      /** @type {?} */

      var viewportOffset = {
        top: window.pageYOffset - document.documentElement.clientTop,
        left: window.pageXOffset - document.documentElement.clientLeft
      };
      /** @type {?} */

      var elOffset = {
        height: elBcr.height || element.offsetHeight,
        width: elBcr.width || element.offsetWidth,
        top: elBcr.top + viewportOffset.top,
        bottom: elBcr.bottom + viewportOffset.top,
        left: elBcr.left + viewportOffset.left,
        right: elBcr.right + viewportOffset.left
      };

      if (round) {
        elOffset.height = Math.round(elOffset.height);
        elOffset.width = Math.round(elOffset.width);
        elOffset.top = Math.round(elOffset.top);
        elOffset.bottom = Math.round(elOffset.bottom);
        elOffset.left = Math.round(elOffset.left);
        elOffset.right = Math.round(elOffset.right);
      }

      return elOffset;
    }
    /*
        Return false if the element to position is outside the viewport
      */

    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */

  }, {
    key: "positionElements",
    value: function positionElements(hostElement, targetElement, placement, appendToBody) {
      var _placement$split = placement.split('-'),
          _placement$split2 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_placement$split, 2),
          _placement$split2$ = _placement$split2[0],
          placementPrimary = _placement$split2$ === void 0 ? 'top' : _placement$split2$,
          _placement$split2$2 = _placement$split2[1],
          placementSecondary = _placement$split2$2 === void 0 ? 'center' : _placement$split2$2;
      /** @type {?} */


      var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
      /** @type {?} */

      var targetElStyles = this.getAllStyles(targetElement);
      /** @type {?} */

      var marginTop = parseFloat(targetElStyles.marginTop);
      /** @type {?} */

      var marginBottom = parseFloat(targetElStyles.marginBottom);
      /** @type {?} */

      var marginLeft = parseFloat(targetElStyles.marginLeft);
      /** @type {?} */

      var marginRight = parseFloat(targetElStyles.marginRight);
      /** @type {?} */

      var topPosition = 0;
      /** @type {?} */

      var leftPosition = 0;

      switch (placementPrimary) {
        case 'top':
          topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
          break;

        case 'bottom':
          topPosition = hostElPosition.top + hostElPosition.height;
          break;

        case 'left':
          leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
          break;

        case 'right':
          leftPosition = hostElPosition.left + hostElPosition.width;
          break;
      }

      switch (placementSecondary) {
        case 'top':
          topPosition = hostElPosition.top;
          break;

        case 'bottom':
          topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
          break;

        case 'left':
          leftPosition = hostElPosition.left;
          break;

        case 'right':
          leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
          break;

        case 'center':
          if (placementPrimary === 'top' || placementPrimary === 'bottom') {
            leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
          } else {
            topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
          }

          break;
      } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
      // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


      targetElement.style.transform = "translate(".concat(Math.round(leftPosition), "px, ").concat(Math.round(topPosition), "px)"); // Check if the targetElement is inside the viewport

      /** @type {?} */

      var targetElBCR = targetElement.getBoundingClientRect();
      /** @type {?} */

      var html = document.documentElement;
      /** @type {?} */

      var windowHeight = window.innerHeight || html.clientHeight;
      /** @type {?} */

      var windowWidth = window.innerWidth || html.clientWidth;
      return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
    }
  }]);

  return Positioning;
}();
/** @type {?} */


var placementSeparator = /\s+/;
/** @type {?} */

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */

/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} baseClass
 * @return {?}
 */

function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
  /** @type {?} */
  var placementVals = Array.isArray(placement) ? placement :
  /** @type {?} */
  placement.split(placementSeparator);
  /** @type {?} */

  var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
  /** @type {?} */

  var classList = targetElement.classList;
  /** @type {?} */

  var addClassesToTarget = function addClassesToTarget(targetPlacement) {
    var _targetPlacement$spli = targetPlacement.split('-'),
        _targetPlacement$spli2 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_targetPlacement$spli, 2),
        primary = _targetPlacement$spli2[0],
        secondary = _targetPlacement$spli2[1];
    /** @type {?} */


    var classes = [];

    if (baseClass) {
      classes.push("".concat(baseClass, "-").concat(primary));

      if (secondary) {
        classes.push("".concat(baseClass, "-").concat(primary, "-").concat(secondary));
      }

      classes.forEach(function (classname) {
        classList.add(classname);
      });
    }

    return classes;
  }; // Remove old placement classes to avoid issues


  if (baseClass) {
    allowedPlacements.forEach(function (placementToRemove) {
      classList.remove("".concat(baseClass, "-").concat(placementToRemove));
    });
  } // replace auto placement with other placements

  /** @type {?} */


  var hasAuto = placementVals.findIndex(function (val) {
    return val === 'auto';
  });

  if (hasAuto >= 0) {
    allowedPlacements.forEach(function (obj) {
      if (placementVals.find(function (val) {
        return val.search('^' + obj) !== -1;
      }) == null) {
        placementVals.splice(hasAuto++, 1,
        /** @type {?} */
        obj);
      }
    });
  } // coordinates where to position
  // Required for transform:

  /** @type {?} */


  var style = targetElement.style;
  style.position = 'absolute';
  style.top = '0';
  style.left = '0'; // The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
  // style['will-change'] = 'transform';

  /** @type {?} */

  var testPlacement;
  /** @type {?} */

  var isInViewport = false;

  var _iterator = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(placementVals),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      testPlacement = _step.value;

      /** @type {?} */
      var addedClasses = addClassesToTarget(testPlacement);

      if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
        isInViewport = true;
        break;
      } // Remove the baseClasses for further calculation


      if (baseClass) {
        addedClasses.forEach(function (classname) {
          classList.remove(classname);
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (!isInViewport) {
    // If nothing match, the first placement is the default one
    testPlacement = placementVals[0];
    addClassesToTarget(testPlacement);
    positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
  }

  return testPlacement;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @return {?}
 */


function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
  return new NgbDateISOParserFormatter();
}
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 * @abstract
 */


var NgbDateParserFormatter = function NgbDateParserFormatter() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDateParserFormatter);
};

NgbDateParserFormatter.ɵfac = function NgbDateParserFormatter_Factory(t) {
  return new (t || NgbDateParserFormatter)();
};

NgbDateParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDateParserFormatter,
  factory: function factory() {
    return NGB_DATEPICKER_PARSER_FORMATTER_FACTORY();
  },
  providedIn: 'root'
});
/** @nocollapse */

NgbDateParserFormatter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY,
  token: NgbDateParserFormatter,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDateParserFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY
    }]
  }], null, null);
})();

var NgbDateISOParserFormatter = /*#__PURE__*/function (_NgbDateParserFormatt) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbDateISOParserFormatter, _NgbDateParserFormatt);

  var _super4 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbDateISOParserFormatter);

  function NgbDateISOParserFormatter() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDateISOParserFormatter);

    return _super4.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDateISOParserFormatter, [{
    key: "parse",

    /**
     * @param {?} value
     * @return {?}
     */
    value: function parse(value) {
      if (value) {
        /** @type {?} */
        var dateParts = value.trim().split('-');

        if (dateParts.length === 1 && isNumber(dateParts[0])) {
          return {
            year: toInteger(dateParts[0]),
            month: null,
            day: null
          };
        } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
          return {
            year: toInteger(dateParts[0]),
            month: toInteger(dateParts[1]),
            day: null
          };
        } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
          return {
            year: toInteger(dateParts[0]),
            month: toInteger(dateParts[1]),
            day: toInteger(dateParts[2])
          };
        }
      }

      return null;
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "format",
    value: function format(date) {
      return date ? "".concat(date.year, "-").concat(isNumber(date.month) ? padNumber(date.month) : '', "-").concat(isNumber(date.day) ? padNumber(date.day) : '') : '';
    }
  }]);

  return NgbDateISOParserFormatter;
}(NgbDateParserFormatter);

NgbDateISOParserFormatter.ɵfac = function NgbDateISOParserFormatter_Factory(t) {
  return ɵNgbDateISOParserFormatter_BaseFactory(t || NgbDateISOParserFormatter);
};

NgbDateISOParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDateISOParserFormatter,
  factory: NgbDateISOParserFormatter.ɵfac
});
var ɵNgbDateISOParserFormatter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbDateISOParserFormatter);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDateISOParserFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_DATEPICKER_VALUE_ACCESSOR$1 = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbInputDatepicker;
  }),
  multi: true
};
/** @type {?} */

var NGB_DATEPICKER_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbInputDatepicker;
  }),
  multi: true
};
/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */

var NgbInputDatepicker = /*#__PURE__*/function () {
  /**
   * @param {?} _parserFormatter
   * @param {?} _elRef
   * @param {?} _vcRef
   * @param {?} _renderer
   * @param {?} _cfr
   * @param {?} _ngZone
   * @param {?} _service
   * @param {?} _calendar
   * @param {?} _dateAdapter
   * @param {?} _document
   * @param {?} _changeDetector
   */
  function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, _ngZone, _service, _calendar, _dateAdapter, _document, _changeDetector) {
    var _this13 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbInputDatepicker);

    this._parserFormatter = _parserFormatter;
    this._elRef = _elRef;
    this._vcRef = _vcRef;
    this._renderer = _renderer;
    this._cfr = _cfr;
    this._ngZone = _ngZone;
    this._service = _service;
    this._calendar = _calendar;
    this._dateAdapter = _dateAdapter;
    this._document = _document;
    this._changeDetector = _changeDetector;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    this._cRef = null;
    this._disabled = false;
    /**
     * Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.
     *
     * * `true` - the popup will close on both date selection and outside click.
     * * `false` - the popup can only be closed manually via `close()` or `toggle()` methods.
     * * `"inside"` - the popup will close on date selection, but not outside clicks.
     * * `"outside"` - the popup will close only on the outside click and not on date selection/inside clicks.
     *
     * \@since 3.0.0
     */

    this.autoClose = true;
    /**
     * The preferred placement of the datepicker popup.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
     */

    this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * \@since 1.1.1
     */

    this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /**
     * Event emitted right after the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */

    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();

    this._onChange = function (_) {};

    this._onTouched = function () {};

    this._validatorChange = function () {};

    this._zoneSubscription = _ngZone.onStable.subscribe(function () {
      if (_this13._cRef) {
        positionElements(_this13._elRef.nativeElement, _this13._cRef.location.nativeElement, _this13.placement, _this13.container === 'body');
      }
    });
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbInputDatepicker, [{
    key: "registerOnChange",

    /**
     * @param {?} fn
     * @return {?}
     */
    value: function registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnValidatorChange",
    value: function registerOnValidatorChange(fn) {
      this._validatorChange = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * @param {?} c
     * @return {?}
     */

  }, {
    key: "validate",
    value: function validate(c) {
      /** @type {?} */
      var value = c.value;

      if (value === null || value === undefined) {
        return null;
      }
      /** @type {?} */


      var ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));

      if (!this._calendar.isValid(ngbDate)) {
        return {
          'ngbDate': {
            invalid: c.value
          }
        };
      }

      if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
        return {
          'ngbDate': {
            requiredBefore: this.minDate
          }
        };
      }

      if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
        return {
          'ngbDate': {
            requiredAfter: this.maxDate
          }
        };
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));

      this._writeModelValue(this._model);
    }
    /**
     * @param {?} value
     * @param {?=} updateView
     * @return {?}
     */

  }, {
    key: "manualDateChange",
    value: function manualDateChange(value) {
      var updateView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /** @type {?} */
      var inputValueChanged = value !== this._inputValue;

      if (inputValueChanged) {
        this._inputValue = value;
        this._model = this._fromDateStruct(this._parserFormatter.parse(value));
      }

      if (inputValueChanged || !updateView) {
        this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === '' ? null : value);
      }

      if (updateView && this._model) {
        this._writeModelValue(this._model);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return !!this._cRef;
    }
    /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     * @return {?}
     */

  }, {
    key: "open",
    value: function open() {
      var _this14 = this;

      if (!this.isOpen()) {
        /** @type {?} */
        var cf = this._cfr.resolveComponentFactory(NgbDatepicker);

        this._cRef = this._vcRef.createComponent(cf);

        this._applyPopupStyling(this._cRef.location.nativeElement);

        this._applyDatepickerInputs(this._cRef.instance);

        this._subscribeForDatepickerOutputs(this._cRef.instance);

        this._cRef.instance.ngOnInit();

        this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model)); // date selection event handling


        this._cRef.instance.registerOnChange(function (selectedDate) {
          _this14.writeValue(selectedDate);

          _this14._onChange(selectedDate);

          _this14._onTouched();
        });

        this._cRef.changeDetectorRef.detectChanges();

        this._cRef.instance.setDisabledState(this.disabled);

        if (this.container === 'body') {
          window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
        } // focus handling


        ngbFocusTrap(this._cRef.location.nativeElement, this._closed$, true);

        this._cRef.instance.focus();

        ngbAutoClose(this._ngZone, this._document, this.autoClose, function () {
          return _this14.close();
        }, this._closed$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
      }
    }
    /**
     * Closes the datepicker popup.
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      if (this.isOpen()) {
        this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));

        this._cRef = null;

        this._closed$.next();

        this._changeDetector.markForCheck();
      }
    }
    /**
     * Toggles the datepicker popup.
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     * @param {?=} date
     * @return {?}
     */

  }, {
    key: "navigateTo",
    value: function navigateTo(date) {
      if (this.isOpen()) {
        this._cRef.instance.navigateTo(date);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      this._onTouched();
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['minDate'] || changes['maxDate']) {
        this._validatorChange();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.close();

      this._zoneSubscription.unsubscribe();
    }
    /**
     * @param {?} datepickerInstance
     * @return {?}
     */

  }, {
    key: "_applyDatepickerInputs",
    value: function _applyDatepickerInputs(datepickerInstance) {
      var _this15 = this;

      ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers'].forEach(function (optionName) {
        if (_this15[optionName] !== undefined) {
          datepickerInstance[optionName] = _this15[optionName];
        }
      });
      datepickerInstance.startDate = this.startDate || this._model;
    }
    /**
     * @param {?} nativeElement
     * @return {?}
     */

  }, {
    key: "_applyPopupStyling",
    value: function _applyPopupStyling(nativeElement) {
      this._renderer.addClass(nativeElement, 'dropdown-menu');

      this._renderer.addClass(nativeElement, 'show');

      if (this.container === 'body') {
        this._renderer.addClass(nativeElement, 'ngb-dp-body');
      }
    }
    /**
     * @param {?} datepickerInstance
     * @return {?}
     */

  }, {
    key: "_subscribeForDatepickerOutputs",
    value: function _subscribeForDatepickerOutputs(datepickerInstance) {
      var _this16 = this;

      datepickerInstance.navigate.subscribe(function (navigateEvent) {
        return _this16.navigate.emit(navigateEvent);
      });
      datepickerInstance.select.subscribe(function (date) {
        _this16.dateSelect.emit(date);

        if (_this16.autoClose === true || _this16.autoClose === 'inside') {
          _this16.close();
        }
      });
    }
    /**
     * @param {?} model
     * @return {?}
     */

  }, {
    key: "_writeModelValue",
    value: function _writeModelValue(model) {
      /** @type {?} */
      var value = this._parserFormatter.format(model);

      this._inputValue = value;

      this._renderer.setProperty(this._elRef.nativeElement, 'value', value);

      if (this.isOpen()) {
        this._cRef.instance.writeValue(this._dateAdapter.toModel(model));

        this._onTouched();
      }
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "_fromDateStruct",
    value: function _fromDateStruct(date) {
      /** @type {?} */
      var ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
      return this._calendar.isValid(ngbDate) ? ngbDate : null;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._disabled = value === '' || value && value !== 'false';

      if (this.isOpen()) {
        this._cRef.instance.setDisabledState(this._disabled);
      }
    }
  }]);

  return NgbInputDatepicker;
}();

NgbInputDatepicker.ɵfac = function NgbInputDatepicker_Factory(t) {
  return new (t || NgbInputDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDateParserFormatter), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbInputDatepicker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbInputDatepicker,
  selectors: [["input", "ngbDatepicker", ""]],
  hostVars: 1,
  hostBindings: function NgbInputDatepicker_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function NgbInputDatepicker_input_HostBindingHandler($event) {
        return ctx.manualDateChange($event.target.value);
      })("change", function NgbInputDatepicker_change_HostBindingHandler($event) {
        return ctx.manualDateChange($event.target.value, true);
      })("blur", function NgbInputDatepicker_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    autoClose: "autoClose",
    placement: "placement",
    disabled: "disabled",
    dayTemplate: "dayTemplate",
    dayTemplateData: "dayTemplateData",
    displayMonths: "displayMonths",
    firstDayOfWeek: "firstDayOfWeek",
    footerTemplate: "footerTemplate",
    markDisabled: "markDisabled",
    minDate: "minDate",
    maxDate: "maxDate",
    navigation: "navigation",
    outsideDays: "outsideDays",
    showWeekdays: "showWeekdays",
    showWeekNumbers: "showWeekNumbers",
    startDate: "startDate",
    container: "container"
  },
  outputs: {
    dateSelect: "dateSelect",
    navigate: "navigate"
  },
  exportAs: ["ngbDatepicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR, NgbDatepickerService]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

NgbInputDatepicker.ctorParameters = function () {
  return [{
    type: NgbDateParserFormatter
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: NgbDatepickerService
  }, {
    type: NgbCalendar
  }, {
    type: NgbDateAdapter
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbInputDatepicker.propDecorators = {
  autoClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  dayTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  dayTemplateData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  displayMonths: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  firstDayOfWeek: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  footerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  markDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  navigation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  outsideDays: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showWeekdays: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showWeekNumbers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  startDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  dateSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  navigate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbInputDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'input[ngbDatepicker]',
      exportAs: 'ngbDatepicker',
      host: {
        '(input)': 'manualDateChange($event.target.value)',
        '(change)': 'manualDateChange($event.target.value, true)',
        '(blur)': 'onBlur()',
        '[disabled]': 'disabled'
      },
      providers: [NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR, NgbDatepickerService]
    }]
  }], function () {
    return [{
      type: NgbDateParserFormatter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: NgbDatepickerService
    }, {
      type: NgbCalendar
    }, {
      type: NgbDateAdapter
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    dateSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    navigate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    dayTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    dayTemplateData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    displayMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    firstDayOfWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    markDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    navigation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    outsideDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showWeekdays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showWeekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    startDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbDatepickerDayView = /*#__PURE__*/function () {
  /**
   * @param {?} i18n
   */
  function NgbDatepickerDayView(i18n) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerDayView);

    this.i18n = i18n;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerDayView, [{
    key: "isMuted",
    value: function isMuted() {
      return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
    }
  }]);

  return NgbDatepickerDayView;
}();

NgbDatepickerDayView.ɵfac = function NgbDatepickerDayView_Factory(t) {
  return new (t || NgbDatepickerDayView)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};

NgbDatepickerDayView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbDatepickerDayView,
  selectors: [["", "ngbDatepickerDayView", ""]],
  hostAttrs: [1, "btn-light"],
  hostVars: 10,
  hostBindings: function NgbDatepickerDayView_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-primary", ctx.selected)("text-white", ctx.selected)("text-muted", ctx.isMuted())("outside", ctx.isMuted())("active", ctx.focused);
    }
  },
  inputs: {
    currentMonth: "currentMonth",
    date: "date",
    disabled: "disabled",
    focused: "focused",
    selected: "selected"
  },
  attrs: _c17,
  decls: 1,
  vars: 1,
  template: function NgbDatepickerDayView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.i18n.getDayNumerals(ctx.date));
    }
  },
  styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbDatepickerDayView.ctorParameters = function () {
  return [{
    type: NgbDatepickerI18n
  }];
};

NgbDatepickerDayView.propDecorators = {
  currentMonth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  date: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  focused: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerDayView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: '[ngbDatepickerDayView]',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      host: {
        'class': 'btn-light',
        '[class.bg-primary]': 'selected',
        '[class.text-white]': 'selected',
        '[class.text-muted]': 'isMuted()',
        '[class.outside]': 'isMuted()',
        '[class.active]': 'focused'
      },
      template: "{{ i18n.getDayNumerals(date) }}",
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    currentMonth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    focused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbDatepickerNavigationSelect = /*#__PURE__*/function () {
  /**
   * @param {?} i18n
   */
  function NgbDatepickerNavigationSelect(i18n) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerNavigationSelect);

    this.i18n = i18n;
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
  }
  /**
   * @param {?} month
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerNavigationSelect, [{
    key: "changeMonth",
    value: function changeMonth(month) {
      this.select.emit(new NgbDate(this.date.year, toInteger(month), 1));
    }
    /**
     * @param {?} year
     * @return {?}
     */

  }, {
    key: "changeYear",
    value: function changeYear(year) {
      this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
    }
  }]);

  return NgbDatepickerNavigationSelect;
}();

NgbDatepickerNavigationSelect.ɵfac = function NgbDatepickerNavigationSelect_Factory(t) {
  return new (t || NgbDatepickerNavigationSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDatepickerI18n));
};

NgbDatepickerNavigationSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbDatepickerNavigationSelect,
  selectors: [["ngb-datepicker-navigation-select"]],
  inputs: {
    date: "date",
    disabled: "disabled",
    months: "months",
    years: "years"
  },
  outputs: {
    select: "select"
  },
  decls: 6,
  vars: 6,
  consts: function consts() {
    var i18n_18;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_19 = goog.getMsg("Select month");
      i18n_18 = MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_19;
    } else {
      i18n_18 = $localize(_templateObject8());
    }

    var i18n_20;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_21 = goog.getMsg("Select month");
      i18n_20 = MSG_EXTERNAL_ngb_datepicker_select_month$$FESM2015_NG_BOOTSTRAP_JS_21;
    } else {
      i18n_20 = $localize(_templateObject9());
    }

    var i18n_22;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_23 = goog.getMsg("Select year");
      i18n_22 = MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_23;
    } else {
      i18n_22 = $localize(_templateObject10());
    }

    var i18n_24;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_25 = goog.getMsg("Select year");
      i18n_24 = MSG_EXTERNAL_ngb_datepicker_select_year$$FESM2015_NG_BOOTSTRAP_JS_25;
    } else {
      i18n_24 = $localize(_templateObject11());
    }

    return [[1, "custom-select", 3, "disabled", "value", "change", 6, "aria-label", "title"], ["aria-label", i18n_18, "title", i18n_20], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", i18n_22, "title", i18n_24], [3, "value"]];
  },
  template: function NgbDatepickerNavigationSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function NgbDatepickerNavigationSelect_Template_select_change_0_listener($event) {
        return ctx.changeMonth($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbDatepickerNavigationSelect_option_2_Template, 2, 3, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](4, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function NgbDatepickerNavigationSelect_Template_select_change_3_listener($event) {
        return ctx.changeYear($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, NgbDatepickerNavigationSelect_option_5_Template, 2, 2, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.disabled)("value", ctx.date == null ? null : ctx.date.month);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.months);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.disabled)("value", ctx.date == null ? null : ctx.date.year);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.years);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"]],
  styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}"],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbDatepickerNavigationSelect.ctorParameters = function () {
  return [{
    type: NgbDatepickerI18n
  }];
};

NgbDatepickerNavigationSelect.propDecorators = {
  date: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  months: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  years: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  select: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerNavigationSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-datepicker-navigation-select',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.month\"\n      i18n-aria-label=\"@@ngb.datepicker.select-month\" aria-label=\"Select month\"\n      i18n-title=\"@@ngb.datepicker.select-month\" title=\"Select month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [attr.aria-label]=\"i18n.getMonthFullName(m, date?.year)\"\n                [value]=\"m\">{{ i18n.getMonthShortName(m, date?.year) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.year\"\n      i18n-aria-label=\"@@ngb.datepicker.select-year\" aria-label=\"Select year\"\n      i18n-title=\"@@ngb.datepicker.select-year\" title=\"Select year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ i18n.getYearNumerals(y) }}</option>\n    </select>\n  ",
      styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}"]
    }]
  }], function () {
    return [{
      type: NgbDatepickerI18n
    }];
  }, {
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    months: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    years: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @abstract
 */


var NgbCalendarHijri = /*#__PURE__*/function (_NgbCalendar2) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbCalendarHijri, _NgbCalendar2);

  var _super5 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbCalendarHijri);

  function NgbCalendarHijri() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCalendarHijri);

    return _super5.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCalendarHijri, [{
    key: "getDaysPerWeek",

    /**
     * @return {?}
     */
    value: function getDaysPerWeek() {
      return 7;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getMonths",
    value: function getMonths() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    /**
     * @return {?}
     */

  }, {
    key: "getWeeksPerMonth",
    value: function getWeeksPerMonth() {
      return 6;
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getNext",
    value: function getNext(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      date = new NgbDate(date.year, date.month, date.day);

      switch (period) {
        case 'y':
          date = this._setYear(date, date.year + number);
          date.month = 1;
          date.day = 1;
          return date;

        case 'm':
          date = this._setMonth(date, date.month + number);
          date.day = 1;
          return date;

        case 'd':
          return this._setDay(date, date.day + number);

        default:
          return date;
      }
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getPrev",
    value: function getPrev(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return this.getNext(date, period, -number);
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "getWeekday",
    value: function getWeekday(date) {
      /** @type {?} */
      var day = this.toGregorian(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

      return day === 0 ? 7 : day;
    }
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */

  }, {
    key: "getWeekNumber",
    value: function getWeekNumber(week, firstDayOfWeek) {
      // in JS Date Sun=0, in ISO 8601 Sun=7
      if (firstDayOfWeek === 7) {
        firstDayOfWeek = 0;
      }
      /** @type {?} */


      var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
      /** @type {?} */

      var date = week[thursdayIndex];
      /** @type {?} */

      var jsDate = this.toGregorian(date);
      jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
      // Thursday

      /** @type {?} */

      var time = jsDate.getTime();
      /** @type {?} */

      var MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
      return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getToday",
    value: function getToday() {
      return this.fromGregorian(new Date());
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "isValid",
    value: function isValid(date) {
      return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) && !isNaN(this.toGregorian(date).getTime());
    }
    /**
     * @param {?} date
     * @param {?} day
     * @return {?}
     */

  }, {
    key: "_setDay",
    value: function _setDay(date, day) {
      day = +day;
      /** @type {?} */

      var mDays = this.getDaysPerMonth(date.month, date.year);

      if (day <= 0) {
        while (day <= 0) {
          date = this._setMonth(date, date.month - 1);
          mDays = this.getDaysPerMonth(date.month, date.year);
          day += mDays;
        }
      } else if (day > mDays) {
        while (day > mDays) {
          day -= mDays;
          date = this._setMonth(date, date.month + 1);
          mDays = this.getDaysPerMonth(date.month, date.year);
        }
      }

      date.day = day;
      return date;
    }
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */

  }, {
    key: "_setMonth",
    value: function _setMonth(date, month) {
      month = +month;
      date.year = date.year + Math.floor((month - 1) / 12);
      date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
      return date;
    }
    /**
     * @param {?} date
     * @param {?} year
     * @return {?}
     */

  }, {
    key: "_setYear",
    value: function _setYear(date, year) {
      date.year = +year;
      return date;
    }
  }]);

  return NgbCalendarHijri;
}(NgbCalendar);

NgbCalendarHijri.ɵfac = function NgbCalendarHijri_Factory(t) {
  return ɵNgbCalendarHijri_BaseFactory(t || NgbCalendarHijri);
};

NgbCalendarHijri.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCalendarHijri,
  factory: NgbCalendarHijri.ɵfac
});
var ɵNgbCalendarHijri_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbCalendarHijri);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCalendarHijri, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Checks if islamic year is a leap year
 * @param {?} hYear
 * @return {?}
 */


function isIslamicLeapYear(hYear) {
  return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 * @param {?} gDate
 * @return {?}
 */


function isGregorianLeapYear(gDate) {
  /** @type {?} */
  var year = gDate.getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 * @param {?} hYear
 * @param {?} hMonth
 * @return {?}
 */


function getIslamicMonthStart(hYear, hMonth) {
  return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 * @param {?} year
 * @return {?}
 */


function getIslamicYearStart(year) {
  return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */


function mod(a, b) {
  return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 * @type {?}
 */


var GREGORIAN_EPOCH = 1721425.5;
/** @type {?} */

var ISLAMIC_EPOCH = 1948439.5;

var NgbCalendarIslamicCivil = /*#__PURE__*/function (_NgbCalendarHijri) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbCalendarIslamicCivil, _NgbCalendarHijri);

  var _super6 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbCalendarIslamicCivil);

  function NgbCalendarIslamicCivil() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCalendarIslamicCivil);

    return _super6.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCalendarIslamicCivil, [{
    key: "fromGregorian",

    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    value: function fromGregorian(gDate) {
      /** @type {?} */
      var gYear = gDate.getFullYear();
      /** @type {?} */

      var gMonth = gDate.getMonth();
      /** @type {?} */

      var gDay = gDate.getDate();
      /** @type {?} */

      var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) + -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
      julianDay = Math.floor(julianDay) + 0.5;
      /** @type {?} */

      var days = julianDay - ISLAMIC_EPOCH;
      /** @type {?} */

      var hYear = Math.floor((30 * days + 10646) / 10631.0);
      /** @type {?} */

      var hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
      hMonth = Math.min(hMonth, 11);
      /** @type {?} */

      var hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
      return new NgbDate(hYear, hMonth + 1, hDay);
    }
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     * @param {?} hDate
     * @return {?}
     */

  }, {
    key: "toGregorian",
    value: function toGregorian(hDate) {
      /** @type {?} */
      var hYear = hDate.year;
      /** @type {?} */

      var hMonth = hDate.month - 1;
      /** @type {?} */

      var hDay = hDate.day;
      /** @type {?} */

      var julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
      /** @type {?} */

      var wjd = Math.floor(julianDay - 0.5) + 0.5;
      /** @type {?} */

      var depoch = wjd - GREGORIAN_EPOCH;
      /** @type {?} */

      var quadricent = Math.floor(depoch / 146097);
      /** @type {?} */

      var dqc = mod(depoch, 146097);
      /** @type {?} */

      var cent = Math.floor(dqc / 36524);
      /** @type {?} */

      var dcent = mod(dqc, 36524);
      /** @type {?} */

      var quad = Math.floor(dcent / 1461);
      /** @type {?} */

      var dquad = mod(dcent, 1461);
      /** @type {?} */

      var yindex = Math.floor(dquad / 365);
      /** @type {?} */

      var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;

      if (!(cent === 4 || yindex === 4)) {
        year++;
      }
      /** @type {?} */


      var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
      /** @type {?} */

      var yearday = wjd - gYearStart;
      /** @type {?} */

      var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
      /** @type {?} */

      var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
      /** @type {?} */

      var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
      /** @type {?} */

      var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) + 1);
      /** @type {?} */

      var day = wjd - tjd2 + 1;
      return new Date(year, month - 1, day);
    }
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */

  }, {
    key: "getDaysPerMonth",
    value: function getDaysPerMonth(month, year) {
      year = year + Math.floor(month / 13);
      month = (month - 1) % 12 + 1;
      /** @type {?} */

      var length = 29 + month % 2;

      if (month === 12 && isIslamicLeapYear(year)) {
        length++;
      }

      return length;
    }
  }]);

  return NgbCalendarIslamicCivil;
}(NgbCalendarHijri);

NgbCalendarIslamicCivil.ɵfac = function NgbCalendarIslamicCivil_Factory(t) {
  return ɵNgbCalendarIslamicCivil_BaseFactory(t || NgbCalendarIslamicCivil);
};

NgbCalendarIslamicCivil.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCalendarIslamicCivil,
  factory: NgbCalendarIslamicCivil.ɵfac
});
var ɵNgbCalendarIslamicCivil_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbCalendarIslamicCivil);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCalendarIslamicCivil, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * @type {?}
 */


var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
/** @type {?} */

var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
/** @type {?} */

var HIJRI_BEGIN = 1300;
/** @type {?} */

var HIJRI_END = 1600;
/** @type {?} */

var ONE_DAY = 1000 * 60 * 60 * 24;
/** @type {?} */

var MONTH_LENGTH = [// 1300-1304
'101010101010', '110101010100', '111011001001', '011011010100', '011011101010', // 1305-1309
'001101101100', '101010101101', '010101010101', '011010101001', '011110010010', // 1310-1314
'101110101001', '010111010100', '101011011010', '010101011100', '110100101101', // 1315-1319
'011010010101', '011101001010', '101101010100', '101101101010', '010110101101', // 1320-1324
'010010101110', '101001001111', '010100010111', '011010001011', '011010100101', // 1325-1329
'101011010101', '001011010110', '100101011011', '010010011101', '101001001101', // 1330-1334
'110100100110', '110110010101', '010110101100', '100110110110', '001010111010', // 1335-1339
'101001011011', '010100101011', '101010010101', '011011001010', '101011101001', // 1340-1344
'001011110100', '100101110110', '001010110110', '100101010110', '101011001010', // 1345-1349
'101110100100', '101111010010', '010111011001', '001011011100', '100101101101', // 1350-1354
'010101001101', '101010100101', '101101010010', '101110100101', '010110110100', // 1355-1359
'100110110110', '010101010111', '001010010111', '010101001011', '011010100011', // 1360-1364
'011101010010', '101101100101', '010101101010', '101010101011', '010100101011', // 1365-1369
'110010010101', '110101001010', '110110100101', '010111001010', '101011010110', // 1370-1374
'100101010111', '010010101011', '100101001011', '101010100101', '101101010010', // 1375-1379
'101101101010', '010101110101', '001001110110', '100010110111', '010001011011', // 1380-1384
'010101010101', '010110101001', '010110110100', '100111011010', '010011011101', // 1385-1389
'001001101110', '100100110110', '101010101010', '110101010100', '110110110010', // 1390-1394
'010111010101', '001011011010', '100101011011', '010010101011', '101001010101', // 1395-1399
'101101001001', '101101100100', '101101110001', '010110110100', '101010110101', // 1400-1404
'101001010101', '110100100101', '111010010010', '111011001001', '011011010100', // 1405-1409
'101011101001', '100101101011', '010010101011', '101010010011', '110101001001', // 1410-1414
'110110100100', '110110110010', '101010111001', '010010111010', '101001011011', // 1415-1419
'010100101011', '101010010101', '101100101010', '101101010101', '010101011100', // 1420-1424
'010010111101', '001000111101', '100100011101', '101010010101', '101101001010', // 1425-1429
'101101011010', '010101101101', '001010110110', '100100111011', '010010011011', // 1430-1434
'011001010101', '011010101001', '011101010100', '101101101010', '010101101100', // 1435-1439
'101010101101', '010101010101', '101100101001', '101110010010', '101110101001', // 1440-1444
'010111010100', '101011011010', '010101011010', '101010101011', '010110010101', // 1445-1449
'011101001001', '011101100100', '101110101010', '010110110101', '001010110110', // 1450-1454
'101001010110', '111001001101', '101100100101', '101101010010', '101101101010', // 1455-1459
'010110101101', '001010101110', '100100101111', '010010010111', '011001001011', // 1460-1464
'011010100101', '011010101100', '101011010110', '010101011101', '010010011101', // 1465-1469
'101001001101', '110100010110', '110110010101', '010110101010', '010110110101', // 1470-1474
'001011011010', '100101011011', '010010101101', '010110010101', '011011001010', // 1475-1479
'011011100100', '101011101010', '010011110101', '001010110110', '100101010110', // 1480-1484
'101010101010', '101101010100', '101111010010', '010111011001', '001011101010', // 1485-1489
'100101101101', '010010101101', '101010010101', '101101001010', '101110100101', // 1490-1494
'010110110010', '100110110101', '010011010110', '101010010111', '010101000111', // 1495-1499
'011010010011', '011101001001', '101101010101', '010101101010', '101001101011', // 1500-1504
'010100101011', '101010001011', '110101000110', '110110100011', '010111001010', // 1505-1509
'101011010110', '010011011011', '001001101011', '100101001011', '101010100101', // 1510-1514
'101101010010', '101101101001', '010101110101', '000101110110', '100010110111', // 1515-1519
'001001011011', '010100101011', '010101100101', '010110110100', '100111011010', // 1520-1524
'010011101101', '000101101101', '100010110110', '101010100110', '110101010010', // 1525-1529
'110110101001', '010111010100', '101011011010', '100101011011', '010010101011', // 1530-1534
'011001010011', '011100101001', '011101100010', '101110101001', '010110110010', // 1535-1539
'101010110101', '010101010101', '101100100101', '110110010010', '111011001001', // 1540-1544
'011011010010', '101011101001', '010101101011', '010010101011', '101001010101', // 1545-1549
'110100101001', '110101010100', '110110101010', '100110110101', '010010111010', // 1550-1554
'101000111011', '010010011011', '101001001101', '101010101010', '101011010101', // 1555-1559
'001011011010', '100101011101', '010001011110', '101000101110', '110010011010', // 1560-1564
'110101010101', '011010110010', '011010111001', '010010111010', '101001011101', // 1565-1569
'010100101101', '101010010101', '101101010010', '101110101000', '101110110100', // 1570-1574
'010110111001', '001011011010', '100101011010', '101101001010', '110110100100', // 1575-1579
'111011010001', '011011101000', '101101101010', '010101101101', '010100110101', // 1580-1584
'011010010101', '110101001010', '110110101000', '110111010100', '011011011010', // 1585-1589
'010101011011', '001010011101', '011000101011', '101100010101', '101101001010', // 1590-1594
'101110010101', '010110101010', '101010101110', '100100101110', '110010001111', // 1595-1599
'010100100111', '011010010101', '011010101010', '101011010110', '010101011101', // 1600
'001010011101'];
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */

function getDaysDiff(date1, date2) {
  /** @type {?} */
  var diff = Math.abs(date1.getTime() - date2.getTime());
  return Math.round(diff / ONE_DAY);
}

var NgbCalendarIslamicUmalqura = /*#__PURE__*/function (_NgbCalendarIslamicCi) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbCalendarIslamicUmalqura, _NgbCalendarIslamicCi);

  var _super7 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbCalendarIslamicUmalqura);

  function NgbCalendarIslamicUmalqura() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCalendarIslamicUmalqura);

    return _super7.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCalendarIslamicUmalqura, [{
    key: "fromGregorian",

    /**
     * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
     * `gdate` is s JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    value: function fromGregorian(gDate) {
      /** @type {?} */
      var hDay = 1;
      /** @type {?} */

      var hMonth = 0;
      /** @type {?} */

      var hYear = 1300;
      /** @type {?} */

      var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);

      if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
        /** @type {?} */
        var year = 1300;

        for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
          for (var j = 0; j < 12; j++) {
            /** @type {?} */
            var numOfDays = +MONTH_LENGTH[i][j] + 29;

            if (daysDiff <= numOfDays) {
              hDay = daysDiff + 1;

              if (hDay > numOfDays) {
                hDay = 1;
                j++;
              }

              if (j > 11) {
                j = 0;
                year++;
              }

              hMonth = j;
              hYear = year;
              return new NgbDate(hYear, hMonth + 1, hDay);
            }

            daysDiff = daysDiff - numOfDays;
          }
        }
      } else {
        return Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(NgbCalendarIslamicUmalqura.prototype), "fromGregorian", this).call(this, gDate);
      }
    }
    /**
     * Converts the current Hijri date to Gregorian.
     * @param {?} hDate
     * @return {?}
     */

  }, {
    key: "toGregorian",
    value: function toGregorian(hDate) {
      /** @type {?} */
      var hYear = hDate.year;
      /** @type {?} */

      var hMonth = hDate.month - 1;
      /** @type {?} */

      var hDay = hDate.day;
      /** @type {?} */

      var gDate = new Date(GREGORIAN_FIRST_DATE);
      /** @type {?} */

      var dayDiff = hDay - 1;

      if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
        for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
          for (var m = 0; m < 12; m++) {
            dayDiff += +MONTH_LENGTH[y][m] + 29;
          }
        }

        for (var _m = 0; _m < hMonth; _m++) {
          dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][_m] + 29;
        }

        gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
      } else {
        gDate = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(NgbCalendarIslamicUmalqura.prototype), "toGregorian", this).call(this, hDate);
      }

      return gDate;
    }
    /**
     * Returns the number of days in a specific Hijri hMonth.
     * `hMonth` is 1 for Muharram, 2 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hMonth
     * @param {?} hYear
     * @return {?}
     */

  }, {
    key: "getDaysPerMonth",
    value: function getDaysPerMonth(hMonth, hYear) {
      if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
        /** @type {?} */
        var pos = hYear - HIJRI_BEGIN;
        return +MONTH_LENGTH[pos][hMonth - 1] + 29;
      }

      return Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(NgbCalendarIslamicUmalqura.prototype), "getDaysPerMonth", this).call(this, hMonth, hYear);
    }
  }]);

  return NgbCalendarIslamicUmalqura;
}(NgbCalendarIslamicCivil);

NgbCalendarIslamicUmalqura.ɵfac = function NgbCalendarIslamicUmalqura_Factory(t) {
  return ɵNgbCalendarIslamicUmalqura_BaseFactory(t || NgbCalendarIslamicUmalqura);
};

NgbCalendarIslamicUmalqura.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCalendarIslamicUmalqura,
  factory: NgbCalendarIslamicUmalqura.ɵfac
});
var ɵNgbCalendarIslamicUmalqura_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbCalendarIslamicUmalqura);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCalendarIslamicUmalqura, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Returns the equivalent JS date value for a give input Jalali date.
 * `jalaliDate` is an Jalali date to be converted to Gregorian.
 * @param {?} jalaliDate
 * @return {?}
 */


function toGregorian(jalaliDate) {
  /** @type {?} */
  var jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
  /** @type {?} */

  var date = julianToGregorian(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
/**
 * Returns the equivalent jalali date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to jalali.
 * utc to local
 * @param {?} gdate
 * @return {?}
 */


function fromGregorian(gdate) {
  /** @type {?} */
  var g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return julianToJalali(g2d);
}
/**
 * @param {?} date
 * @param {?} yearValue
 * @return {?}
 */


function setJalaliYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
/**
 * @param {?} date
 * @param {?} month
 * @return {?}
 */


function setJalaliMonth(date, month) {
  month = +month;
  date.year = date.year + Math.floor((month - 1) / 12);
  date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
  return date;
}
/**
 * @param {?} date
 * @param {?} day
 * @return {?}
 */


function setJalaliDay(date, day) {
  /** @type {?} */
  var mDays = getDaysPerMonth(date.month, date.year);

  if (day <= 0) {
    while (day <= 0) {
      date = setJalaliMonth(date, date.month - 1);
      mDays = getDaysPerMonth(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setJalaliMonth(date, date.month + 1);
      mDays = getDaysPerMonth(date.month, date.year);
    }
  }

  date.day = day;
  return date;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */


function mod$1(a, b) {
  return a - b * Math.floor(a / b);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */


function div(a, b) {
  return Math.trunc(a / b);
}
/*
 This function determines if the Jalali (Persian) year is
 leap (366-day long) or is the common year (365 days), and
 finds the day in March (Gregorian calendar) of the first
 day of the Jalali year (jalaliYear).
 @param jalaliYear Jalali calendar year (-61 to 3177)
 @return
 leap: number of years since the last leap year (0 to 4)
 gYear: Gregorian year of the beginning of Jalali year
 march: the March day of Farvardin the 1st (1st day of jalaliYear)
 @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
 @see: http://www.fourmilab.ch/documents/calendar/
 */

/**
 * @param {?} jalaliYear
 * @return {?}
 */


function jalCal(jalaliYear) {
  // Jalali years starting the 33-year rule.

  /** @type {?} */
  var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  /** @type {?} */

  var breaksLength = breaks.length;
  /** @type {?} */

  var gYear = jalaliYear + 621;
  /** @type {?} */

  var leapJ = -14;
  /** @type {?} */

  var jp = breaks[0];

  if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
    throw new Error('Invalid Jalali year ' + jalaliYear);
  } // Find the limiting years for the Jalali year jalaliYear.

  /** @type {?} */


  var jump;

  for (var i = 1; i < breaksLength; i += 1) {
    /** @type {?} */
    var jm = breaks[i];
    jump = jm - jp;

    if (jalaliYear < jm) {
      break;
    }

    leapJ = leapJ + div(jump, 33) * 8 + div(mod$1(jump, 33), 4);
    jp = jm;
  }
  /** @type {?} */


  var n = jalaliYear - jp; // Find the number of leap years from AD 621 to the beginning
  // of the current Jalali year in the Persian calendar.

  leapJ = leapJ + div(n, 33) * 8 + div(mod$1(n, 33) + 3, 4);

  if (mod$1(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  } // And the same in the Gregorian calendar (until the year gYear).

  /** @type {?} */


  var leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150; // Determine the Gregorian date of Farvardin the 1st.

  /** @type {?} */

  var march = 20 + leapJ - leapG; // Find how many years have passed since the last leap year.

  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  /** @type {?} */


  var leap = mod$1(mod$1(n + 1, 33) - 1, 4);

  if (leap === -1) {
    leap = 4;
  }

  return {
    leap: leap,
    gy: gYear,
    march: march
  };
}
/*
 Calculates Gregorian and Julian calendar dates from the Julian Day number
 (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
 calendars) to some millions years ahead of the present.
 @param jdn Julian Day number
 @return
 gYear: Calendar year (years BC numbered 0, -1, -2, ...)
 gMonth: Calendar month (1 to 12)
 gDay: Calendar day of the month M (1 to 28/29/30/31)
 */

/**
 * @param {?} julianDayNumber
 * @return {?}
 */


function julianToGregorian(julianDayNumber) {
  /** @type {?} */
  var j = 4 * julianDayNumber + 139361631;
  j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
  /** @type {?} */

  var i = div(mod$1(j, 1461), 4) * 5 + 308;
  /** @type {?} */

  var gDay = div(mod$1(i, 153), 5) + 1;
  /** @type {?} */

  var gMonth = mod$1(div(i, 153), 12) + 1;
  /** @type {?} */

  var gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
  return new Date(gYear, gMonth - 1, gDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jy Jalali year (1 to 3100)
 @param jm Jalali month (1 to 12)
 @param jd Jalali day (1 to 29/31)
 @return Julian Day number
 */

/**
 * @param {?} gy
 * @param {?} gm
 * @param {?} gd
 * @return {?}
 */


function gregorianToJulian(gy, gm, gd) {
  /** @type {?} */
  var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod$1(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
/*
 Converts the Julian Day number to a date in the Jalali calendar.
 @param julianDayNumber Julian Day number
 @return
 jalaliYear: Jalali year (1 to 3100)
 jalaliMonth: Jalali month (1 to 12)
 jalaliDay: Jalali day (1 to 29/31)
 */

/**
 * @param {?} julianDayNumber
 * @return {?}
 */


function julianToJalali(julianDayNumber) {
  /** @type {?} */
  var gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
  ;
  /** @type {?} */

  var jalaliYear = gy - 621;
  /** @type {?} */

  var r = jalCal(jalaliYear);
  /** @type {?} */

  var gregorianDay = gregorianToJulian(gy, 3, r.march);
  /** @type {?} */

  var jalaliDay;
  /** @type {?} */

  var jalaliMonth;
  /** @type {?} */

  var numberOfDays; // Find number of days that passed since 1 Farvardin.

  numberOfDays = julianDayNumber - gregorianDay;

  if (numberOfDays >= 0) {
    if (numberOfDays <= 185) {
      // The first 6 months.
      jalaliMonth = 1 + div(numberOfDays, 31);
      jalaliDay = mod$1(numberOfDays, 31) + 1;
      return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    } else {
      // The remaining months.
      numberOfDays -= 186;
    }
  } else {
    // Previous Jalali year.
    jalaliYear -= 1;
    numberOfDays += 179;

    if (r.leap === 1) {
      numberOfDays += 1;
    }
  }

  jalaliMonth = 7 + div(numberOfDays, 30);
  jalaliDay = mod$1(numberOfDays, 30) + 1;
  return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
/*
 Converts a date of the Jalali calendar to the Julian Day number.
 @param jYear Jalali year (1 to 3100)
 @param jMonth Jalali month (1 to 12)
 @param jDay Jalali day (1 to 29/31)
 @return Julian Day number
 */

/**
 * @param {?} jYear
 * @param {?} jMonth
 * @param {?} jDay
 * @return {?}
 */


function jalaliToJulian(jYear, jMonth, jDay) {
  /** @type {?} */
  var r = jalCal(jYear);
  return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
/**
 * Returns the number of days in a specific jalali month.
 * @param {?} month
 * @param {?} year
 * @return {?}
 */


function getDaysPerMonth(month, year) {
  if (month <= 6) {
    return 31;
  }

  if (month <= 11) {
    return 30;
  }

  if (jalCal(year).leap === 0) {
    return 30;
  }

  return 29;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbCalendarPersian = /*#__PURE__*/function (_NgbCalendar3) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbCalendarPersian, _NgbCalendar3);

  var _super8 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbCalendarPersian);

  function NgbCalendarPersian() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCalendarPersian);

    return _super8.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCalendarPersian, [{
    key: "getDaysPerWeek",

    /**
     * @return {?}
     */
    value: function getDaysPerWeek() {
      return 7;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getMonths",
    value: function getMonths() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    /**
     * @return {?}
     */

  }, {
    key: "getWeeksPerMonth",
    value: function getWeeksPerMonth() {
      return 6;
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getNext",
    value: function getNext(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      date = new NgbDate(date.year, date.month, date.day);

      switch (period) {
        case 'y':
          date = setJalaliYear(date, date.year + number);
          date.month = 1;
          date.day = 1;
          return date;

        case 'm':
          date = setJalaliMonth(date, date.month + number);
          date.day = 1;
          return date;

        case 'd':
          return setJalaliDay(date, date.day + number);

        default:
          return date;
      }
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getPrev",
    value: function getPrev(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return this.getNext(date, period, -number);
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "getWeekday",
    value: function getWeekday(date) {
      /** @type {?} */
      var day = toGregorian(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

      return day === 0 ? 7 : day;
    }
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */

  }, {
    key: "getWeekNumber",
    value: function getWeekNumber(week, firstDayOfWeek) {
      // in JS Date Sun=0, in ISO 8601 Sun=7
      if (firstDayOfWeek === 7) {
        firstDayOfWeek = 0;
      }
      /** @type {?} */


      var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
      /** @type {?} */

      var date = week[thursdayIndex];
      /** @type {?} */

      var jsDate = toGregorian(date);
      jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
      // Thursday

      /** @type {?} */

      var time = jsDate.getTime();
      /** @type {?} */

      var startDate = toGregorian(new NgbDate(date.year, 1, 1));
      return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getToday",
    value: function getToday() {
      return fromGregorian(new Date());
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "isValid",
    value: function isValid(date) {
      return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian(date).getTime());
    }
  }]);

  return NgbCalendarPersian;
}(NgbCalendar);

NgbCalendarPersian.ɵfac = function NgbCalendarPersian_Factory(t) {
  return ɵNgbCalendarPersian_BaseFactory(t || NgbCalendarPersian);
};

NgbCalendarPersian.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCalendarPersian,
  factory: NgbCalendarPersian.ɵfac
});
var ɵNgbCalendarPersian_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbCalendarPersian);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCalendarPersian, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var PARTS_PER_HOUR = 1080;
/** @type {?} */

var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
/** @type {?} */

var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
/** @type {?} */

var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
/** @type {?} */

var BAHARAD = 11 * PARTS_PER_HOUR + 204;
/** @type {?} */

var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
/** @type {?} */

var GREGORIAN_EPOCH$1 = 1721425.5;
/**
 * @param {?} year
 * @return {?}
 */

function isGregorianLeapYear$1(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * @param {?} year
 * @return {?}
 */


function numberOfFirstDayInYear(year) {
  /** @type {?} */
  var monthsBeforeYear = Math.floor((235 * year - 234) / 19);
  /** @type {?} */

  var fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
  /** @type {?} */

  var dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
  /** @type {?} */

  var timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
  /** @type {?} */

  var dayOfWeek = dayNumber % 7;

  if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
    dayNumber++;
    dayOfWeek = dayNumber % 7;
  }

  if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
    dayNumber += 2;
  } else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
    dayNumber++;
  }

  return dayNumber;
}
/**
 * @param {?} month
 * @param {?} year
 * @return {?}
 */


function getDaysInGregorianMonth(month, year) {
  /** @type {?} */
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isGregorianLeapYear$1(year)) {
    days[1]++;
  }

  return days[month - 1];
}
/**
 * @param {?} year
 * @return {?}
 */


function getHebrewMonths(year) {
  return isHebrewLeapYear(year) ? 13 : 12;
}
/**
 * Returns the number of days in a specific Hebrew year.
 * `year` is any Hebrew year.
 * @param {?} year
 * @return {?}
 */


function getDaysInHebrewYear(year) {
  return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
/**
 * @param {?} year
 * @return {?}
 */


function isHebrewLeapYear(year) {
  /** @type {?} */
  var b = (year * 12 + 17) % 19;
  return b >= (b < 0 ? -7 : 12);
}
/**
 * Returns the number of days in a specific Hebrew month.
 * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
 * `year` is any Hebrew year.
 * @param {?} month
 * @param {?} year
 * @return {?}
 */


function getDaysInHebrewMonth(month, year) {
  /** @type {?} */
  var yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
  /** @type {?} */

  var yearType = (yearLength <= 380 ? yearLength : yearLength - 30) - 353;
  /** @type {?} */

  var leapYear = isHebrewLeapYear(year);
  /** @type {?} */

  var daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];

  if (yearType > 0) {
    daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
  }

  if (yearType > 1) {
    daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
  }

  return daysInMonth[month - 1];
}
/**
 * @param {?} date
 * @return {?}
 */


function getDayNumberInHebrewYear(date) {
  /** @type {?} */
  var numberOfDay = 0;

  for (var i = 1; i < date.month; i++) {
    numberOfDay += getDaysInHebrewMonth(i, date.year);
  }

  return numberOfDay + date.day;
}
/**
 * @param {?} date
 * @param {?} val
 * @return {?}
 */


function setHebrewMonth(date, val) {
  /** @type {?} */
  var after = val >= 0;

  if (!after) {
    val = -val;
  }

  while (val > 0) {
    if (after) {
      if (val > getHebrewMonths(date.year) - date.month) {
        val -= getHebrewMonths(date.year) - date.month + 1;
        date.year++;
        date.month = 1;
      } else {
        date.month += val;
        val = 0;
      }
    } else {
      if (val >= date.month) {
        date.year--;
        val -= date.month;
        date.month = getHebrewMonths(date.year);
      } else {
        date.month -= val;
        val = 0;
      }
    }
  }

  return date;
}
/**
 * @param {?} date
 * @param {?} val
 * @return {?}
 */


function setHebrewDay(date, val) {
  /** @type {?} */
  var after = val >= 0;

  if (!after) {
    val = -val;
  }

  while (val > 0) {
    if (after) {
      if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
        val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
        date.year++;
        date.month = 1;
        date.day = 1;
      } else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
        val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
        date.month++;
        date.day = 1;
      } else {
        date.day += val;
        val = 0;
      }
    } else {
      if (val >= date.day) {
        val -= date.day;
        date.month--;

        if (date.month === 0) {
          date.year--;
          date.month = getHebrewMonths(date.year);
        }

        date.day = getDaysInHebrewMonth(date.month, date.year);
      } else {
        date.day -= val;
        val = 0;
      }
    }
  }

  return date;
}
/**
 * Returns the equivalent Hebrew date value for a give input Gregorian date.
 * `gdate` is a JS Date to be converted to Hebrew date.
 * @param {?} gdate
 * @return {?}
 */


function fromGregorian$1(gdate) {
  /** @type {?} */
  var date = new Date(gdate);
  /** @type {?} */

  var gYear = date.getFullYear();
  /** @type {?} */

  var gMonth = date.getMonth();
  /** @type {?} */

  var gDay = date.getDate();
  /** @type {?} */

  var julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) - Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gYear) ? -1 : -2) + gDay);
  julianDay = Math.floor(julianDay + 0.5);
  /** @type {?} */

  var daysSinceHebEpoch = julianDay - 347997;
  /** @type {?} */

  var monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
  /** @type {?} */

  var hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
  /** @type {?} */

  var firstDayOfThisYear = numberOfFirstDayInYear(hYear);
  /** @type {?} */

  var dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;

  while (dayOfYear < 1) {
    hYear--;
    firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  }
  /** @type {?} */


  var hMonth = 1;
  /** @type {?} */

  var hDay = dayOfYear;

  while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
    hDay -= getDaysInHebrewMonth(hMonth, hYear);
    hMonth++;
  }

  return new NgbDate(hYear, hMonth, hDay);
}
/**
 * Returns the equivalent JS date value for a given Hebrew date.
 * `hebrewDate` is an Hebrew date to be converted to Gregorian.
 * @param {?} hebrewDate
 * @return {?}
 */


function toGregorian$1(hebrewDate) {
  /** @type {?} */
  var hYear = hebrewDate.year;
  /** @type {?} */

  var hMonth = hebrewDate.month;
  /** @type {?} */

  var hDay = hebrewDate.day;
  /** @type {?} */

  var days = numberOfFirstDayInYear(hYear);

  for (var i = 1; i < hMonth; i++) {
    days += getDaysInHebrewMonth(i, hYear);
  }

  days += hDay;
  /** @type {?} */

  var diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
  /** @type {?} */

  var after = diffDays >= 0;

  if (!after) {
    diffDays = -diffDays;
  }
  /** @type {?} */


  var gYear = 1970;
  /** @type {?} */

  var gMonth = 1;
  /** @type {?} */

  var gDay = 1;

  while (diffDays > 0) {
    if (after) {
      if (diffDays >= (isGregorianLeapYear$1(gYear) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear$1(gYear) ? 366 : 365;
        gYear++;
      } else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
        diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        gMonth++;
      } else {
        gDay += diffDays;
        diffDays = 0;
      }
    } else {
      if (diffDays >= (isGregorianLeapYear$1(gYear - 1) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear$1(gYear - 1) ? 366 : 365;
        gYear--;
      } else {
        if (gMonth > 1) {
          gMonth--;
        } else {
          gMonth = 12;
          gYear--;
        }

        if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
          diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        } else {
          gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
          diffDays = 0;
        }
      }
    }
  }

  return new Date(gYear, gMonth - 1, gDay);
}
/**
 * @param {?} numerals
 * @return {?}
 */


function hebrewNumerals(numerals) {
  if (!numerals) {
    return '';
  }
  /** @type {?} */


  var hArray0_9 = ['', "\u05D0", "\u05D1", "\u05D2", "\u05D3", "\u05D4", "\u05D5", "\u05D6", "\u05D7", "\u05D8"];
  /** @type {?} */

  var hArray10_19 = ["\u05D9", "\u05D9\u05D0", "\u05D9\u05D1", "\u05D9\u05D2", "\u05D9\u05D3", "\u05D8\u05D5", "\u05D8\u05D6", "\u05D9\u05D6", "\u05D9\u05D7", "\u05D9\u05D8"];
  /** @type {?} */

  var hArray20_90 = ['', '', "\u05DB", "\u05DC", "\u05DE", "\u05E0", "\u05E1", "\u05E2", "\u05E4", "\u05E6"];
  /** @type {?} */

  var hArray100_900 = ['', "\u05E7", "\u05E8", "\u05E9", "\u05EA", "\u05EA\u05E7", "\u05EA\u05E8", "\u05EA\u05E9", "\u05EA\u05EA", "\u05EA\u05EA\u05E7"];
  /** @type {?} */

  var hArray1000_9000 = ['', "\u05D0", "\u05D1", "\u05D1\u05D0", "\u05D1\u05D1", "\u05D4", "\u05D4\u05D0", "\u05D4\u05D1", "\u05D4\u05D1\u05D0", "\u05D4\u05D1\u05D1"];
  /** @type {?} */

  var geresh = "\u05F3";
  /** @type {?} */

  var gershaim = "\u05F4";
  /** @type {?} */

  var mem = 0;
  /** @type {?} */

  var result = [];
  /** @type {?} */

  var step = 0;

  while (numerals > 0) {
    /** @type {?} */
    var m = numerals % 10;

    if (step === 0) {
      mem = m;
    } else if (step === 1) {
      if (m !== 1) {
        result.unshift(hArray20_90[m], hArray0_9[mem]);
      } else {
        result.unshift(hArray10_19[mem]);
      }
    } else if (step === 2) {
      result.unshift(hArray100_900[m]);
    } else {
      if (m !== 5) {
        result.unshift(hArray1000_9000[m], geresh, ' ');
      }

      break;
    }

    numerals = Math.floor(numerals / 10);

    if (step === 0 && numerals === 0) {
      result.unshift(hArray0_9[m]);
    }

    step++;
  }

  result = result.join('').split('');

  if (result.length === 1) {
    result.push(geresh);
  } else if (result.length > 1) {
    result.splice(result.length - 1, 0, gershaim);
  }

  return result.join('');
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * \@since 3.2.0
 */


var NgbCalendarHebrew = /*#__PURE__*/function (_NgbCalendar4) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbCalendarHebrew, _NgbCalendar4);

  var _super9 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbCalendarHebrew);

  function NgbCalendarHebrew() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbCalendarHebrew);

    return _super9.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbCalendarHebrew, [{
    key: "getDaysPerWeek",

    /**
     * @return {?}
     */
    value: function getDaysPerWeek() {
      return 7;
    }
    /**
     * @param {?=} year
     * @return {?}
     */

  }, {
    key: "getMonths",
    value: function getMonths(year) {
      if (year && isHebrewLeapYear(year)) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      } else {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "getWeeksPerMonth",
    value: function getWeeksPerMonth() {
      return 6;
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "isValid",
    value: function isValid(date) {
      /** @type {?} */
      var b = date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
      b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
      b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
      return b && !isNaN(toGregorian$1(date).getTime());
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getNext",
    value: function getNext(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      date = new NgbDate(date.year, date.month, date.day);

      switch (period) {
        case 'y':
          date.year += number;
          date.month = 1;
          date.day = 1;
          return date;

        case 'm':
          date = setHebrewMonth(date, number);
          date.day = 1;
          return date;

        case 'd':
          return setHebrewDay(date, number);

        default:
          return date;
      }
    }
    /**
     * @param {?} date
     * @param {?=} period
     * @param {?=} number
     * @return {?}
     */

  }, {
    key: "getPrev",
    value: function getPrev(date) {
      var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
      var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return this.getNext(date, period, -number);
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "getWeekday",
    value: function getWeekday(date) {
      /** @type {?} */
      var day = toGregorian$1(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

      return day === 0 ? 7 : day;
    }
    /**
     * @param {?} week
     * @param {?} firstDayOfWeek
     * @return {?}
     */

  }, {
    key: "getWeekNumber",
    value: function getWeekNumber(week, firstDayOfWeek) {
      /** @type {?} */
      var date = week[week.length - 1];
      return Math.ceil(getDayNumberInHebrewYear(date) / 7);
    }
    /**
     * @return {?}
     */

  }, {
    key: "getToday",
    value: function getToday() {
      return fromGregorian$1(new Date());
    }
    /**
     * \@since 3.4.0
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "toGregorian",
    value: function toGregorian(date) {
      return fromJSDate(toGregorian$1(date));
    }
    /**
     * \@since 3.4.0
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "fromGregorian",
    value: function fromGregorian(date) {
      return fromGregorian$1(toJSDate(date));
    }
  }]);

  return NgbCalendarHebrew;
}(NgbCalendar);

NgbCalendarHebrew.ɵfac = function NgbCalendarHebrew_Factory(t) {
  return ɵNgbCalendarHebrew_BaseFactory(t || NgbCalendarHebrew);
};

NgbCalendarHebrew.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbCalendarHebrew,
  factory: NgbCalendarHebrew.ɵfac
});
var ɵNgbCalendarHebrew_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbCalendarHebrew);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbCalendarHebrew, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
/** @type {?} */

var MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/** @type {?} */

var MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
/**
 * \@since 3.2.0
 */

var NgbDatepickerI18nHebrew = /*#__PURE__*/function (_NgbDatepickerI18n2) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbDatepickerI18nHebrew, _NgbDatepickerI18n2);

  var _super10 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbDatepickerI18nHebrew);

  function NgbDatepickerI18nHebrew() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerI18nHebrew);

    return _super10.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerI18nHebrew, [{
    key: "getMonthShortName",

    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */
    value: function getMonthShortName(month, year) {
      return this.getMonthFullName(month, year);
    }
    /**
     * @param {?} month
     * @param {?=} year
     * @return {?}
     */

  }, {
    key: "getMonthFullName",
    value: function getMonthFullName(month, year) {
      return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
    }
    /**
     * @param {?} weekday
     * @return {?}
     */

  }, {
    key: "getWeekdayShortName",
    value: function getWeekdayShortName(weekday) {
      return WEEKDAYS[weekday - 1];
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "getDayAriaLabel",
    value: function getDayAriaLabel(date) {
      return "".concat(hebrewNumerals(date.day), " ").concat(this.getMonthFullName(date.month, date.year), " ").concat(hebrewNumerals(date.year));
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "getDayNumerals",
    value: function getDayNumerals(date) {
      return hebrewNumerals(date.day);
    }
    /**
     * @param {?} weekNumber
     * @return {?}
     */

  }, {
    key: "getWeekNumerals",
    value: function getWeekNumerals(weekNumber) {
      return hebrewNumerals(weekNumber);
    }
    /**
     * @param {?} year
     * @return {?}
     */

  }, {
    key: "getYearNumerals",
    value: function getYearNumerals(year) {
      return hebrewNumerals(year);
    }
  }]);

  return NgbDatepickerI18nHebrew;
}(NgbDatepickerI18n);

NgbDatepickerI18nHebrew.ɵfac = function NgbDatepickerI18nHebrew_Factory(t) {
  return ɵNgbDatepickerI18nHebrew_BaseFactory(t || NgbDatepickerI18nHebrew);
};

NgbDatepickerI18nHebrew.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDatepickerI18nHebrew,
  factory: NgbDatepickerI18nHebrew.ɵfac
});
var ɵNgbDatepickerI18nHebrew_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbDatepickerI18nHebrew);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerI18nHebrew, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */


var NgbDateNativeAdapter = /*#__PURE__*/function (_NgbDateAdapter2) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbDateNativeAdapter, _NgbDateAdapter2);

  var _super11 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbDateNativeAdapter);

  function NgbDateNativeAdapter() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDateNativeAdapter);

    return _super11.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDateNativeAdapter, [{
    key: "fromModel",

    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     * @param {?} date
     * @return {?}
     */
    value: function fromModel(date) {
      return date instanceof Date && !isNaN(date.getTime()) ? this._fromNativeDate(date) : null;
    }
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "toModel",
    value: function toModel(date) {
      return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) : null;
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "_fromNativeDate",
    value: function _fromNativeDate(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      };
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "_toNativeDate",
    value: function _toNativeDate(date) {
      /** @type {?} */
      var jsDate = new Date(date.year, date.month - 1, date.day, 12); // avoid 30 -> 1930 conversion

      jsDate.setFullYear(date.year);
      return jsDate;
    }
  }]);

  return NgbDateNativeAdapter;
}(NgbDateAdapter);

NgbDateNativeAdapter.ɵfac = function NgbDateNativeAdapter_Factory(t) {
  return ɵNgbDateNativeAdapter_BaseFactory(t || NgbDateNativeAdapter);
};

NgbDateNativeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDateNativeAdapter,
  factory: NgbDateNativeAdapter.ɵfac
});
var ɵNgbDateNativeAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbDateNativeAdapter);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDateNativeAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
 *
 * \@since 3.2.0
 */


var NgbDateNativeUTCAdapter = /*#__PURE__*/function (_NgbDateNativeAdapter) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbDateNativeUTCAdapter, _NgbDateNativeAdapter);

  var _super12 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbDateNativeUTCAdapter);

  function NgbDateNativeUTCAdapter() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDateNativeUTCAdapter);

    return _super12.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDateNativeUTCAdapter, [{
    key: "_fromNativeDate",

    /**
     * @param {?} date
     * @return {?}
     */
    value: function _fromNativeDate(date) {
      return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate()
      };
    }
    /**
     * @param {?} date
     * @return {?}
     */

  }, {
    key: "_toNativeDate",
    value: function _toNativeDate(date) {
      /** @type {?} */
      var jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day)); // avoid 30 -> 1930 conversion

      jsDate.setUTCFullYear(date.year);
      return jsDate;
    }
  }]);

  return NgbDateNativeUTCAdapter;
}(NgbDateNativeAdapter);

NgbDateNativeUTCAdapter.ɵfac = function NgbDateNativeUTCAdapter_Factory(t) {
  return ɵNgbDateNativeUTCAdapter_BaseFactory(t || NgbDateNativeUTCAdapter);
};

NgbDateNativeUTCAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDateNativeUTCAdapter,
  factory: NgbDateNativeUTCAdapter.ɵfac
});
var ɵNgbDateNativeUTCAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbDateNativeUTCAdapter);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDateNativeUTCAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbDatepickerModule = /*#__PURE__*/function () {
  function NgbDatepickerModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDatepickerModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDatepickerModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbDatepickerModule
      };
    }
  }]);

  return NgbDatepickerModule;
}();

NgbDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbDatepickerModule
});
NgbDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbDatepickerModule_Factory(t) {
    return new (t || NgbDatepickerModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbDatepickerModule, {
    declarations: function declarations() {
      return [NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView, NgbInputDatepicker];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]];
    },
    exports: function exports() {
      return [NgbDatepicker, NgbInputDatepicker];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDatepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView, NgbInputDatepicker],
      exports: [NgbDatepicker, NgbInputDatepicker],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
      entryComponents: [NgbDatepicker]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */


var NgbDropdownConfig = function NgbDropdownConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDropdownConfig);

  this.autoClose = true;
  this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
};

NgbDropdownConfig.ɵfac = function NgbDropdownConfig_Factory(t) {
  return new (t || NgbDropdownConfig)();
};

NgbDropdownConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbDropdownConfig,
  factory: NgbDropdownConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbDropdownConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbDropdownConfig_Factory() {
    return new NgbDropdownConfig();
  },
  token: NgbDropdownConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDropdownConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A directive you should put put on a dropdown item to enable keyboard navigation.
 * Arrow keys will move focus between items marked with this directive.
 *
 * \@since 4.1.0
 */


var NgbDropdownItem = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   */
  function NgbDropdownItem(elementRef) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDropdownItem);

    this.elementRef = elementRef;
    this._disabled = false;
  }
  /**
   * @param {?} value
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDropdownItem, [{
    key: "disabled",
    set: function set(value) {
      this._disabled =
      /** @type {?} */
      value === '' || value === true; // accept an empty attribute as true
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._disabled;
    }
  }]);

  return NgbDropdownItem;
}();

NgbDropdownItem.ɵfac = function NgbDropdownItem_Factory(t) {
  return new (t || NgbDropdownItem)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]));
};

NgbDropdownItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbDropdownItem,
  selectors: [["", "ngbDropdownItem", ""]],
  hostAttrs: [1, "dropdown-item"],
  hostVars: 2,
  hostBindings: function NgbDropdownItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  }
});
/** @nocollapse */

NgbDropdownItem.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }];
};

NgbDropdownItem.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDropdownItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbDropdownItem]',
      host: {
        'class': 'dropdown-item',
        '[class.disabled]': 'disabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * A directive that wraps dropdown menu content and dropdown items.
 */


var NgbDropdownMenu =
/**
 * @param {?} dropdown
 */
function NgbDropdownMenu(dropdown) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDropdownMenu);

  this.dropdown = dropdown;
  this.placement = 'bottom';
  this.isOpen = false;
};

NgbDropdownMenu.ɵfac = function NgbDropdownMenu_Factory(t) {
  return new (t || NgbDropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbDropdown;
  })));
};

NgbDropdownMenu.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbDropdownMenu,
  selectors: [["", "ngbDropdownMenu", ""]],
  contentQueries: function NgbDropdownMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbDropdownItem, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
    }
  },
  hostVars: 5,
  hostBindings: function NgbDropdownMenu_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown.ArrowUp", function NgbDropdownMenu_keydown_ArrowUp_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.ArrowDown", function NgbDropdownMenu_keydown_ArrowDown_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Home", function NgbDropdownMenu_keydown_Home_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.End", function NgbDropdownMenu_keydown_End_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Enter", function NgbDropdownMenu_keydown_Enter_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Space", function NgbDropdownMenu_keydown_Space_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("x-placement", ctx.placement);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("dropdown-menu", true)("show", ctx.dropdown.isOpen());
    }
  }
});
/** @nocollapse */

NgbDropdownMenu.ctorParameters = function () {
  return [{
    type: NgbDropdown,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
        return NgbDropdown;
      })]
    }]
  }];
};

NgbDropdownMenu.propDecorators = {
  menuItems: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbDropdownItem]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDropdownMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbDropdownMenu]',
      host: {
        '[class.dropdown-menu]': 'true',
        '[class.show]': 'dropdown.isOpen()',
        '[attr.x-placement]': 'placement',
        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
        '(keydown.Home)': 'dropdown.onKeyDown($event)',
        '(keydown.End)': 'dropdown.onKeyDown($event)',
        '(keydown.Enter)': 'dropdown.onKeyDown($event)',
        '(keydown.Space)': 'dropdown.onKeyDown($event)'
      }
    }]
  }], function () {
    return [{
      type: NgbDropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
          return NgbDropdown;
        })]
      }]
    }];
  }, {
    menuItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbDropdownItem]
    }]
  });
})();
/**
 * A directive to mark an element to which dropdown menu will be anchored.
 *
 * This is a simple version of the `NgbDropdownToggle` directive.
 * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
 * for events other than click.
 *
 * \@since 1.1.0
 */


var NgbDropdownAnchor = /*#__PURE__*/function () {
  /**
   * @param {?} dropdown
   * @param {?} _elementRef
   */
  function NgbDropdownAnchor(dropdown, _elementRef) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDropdownAnchor);

    this.dropdown = dropdown;
    this._elementRef = _elementRef;
    this.anchorEl = _elementRef.nativeElement;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDropdownAnchor, [{
    key: "getNativeElement",
    value: function getNativeElement() {
      return this._elementRef.nativeElement;
    }
  }]);

  return NgbDropdownAnchor;
}();

NgbDropdownAnchor.ɵfac = function NgbDropdownAnchor_Factory(t) {
  return new (t || NgbDropdownAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbDropdown;
  })), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]));
};

NgbDropdownAnchor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbDropdownAnchor,
  selectors: [["", "ngbDropdownAnchor", ""]],
  hostAttrs: ["aria-haspopup", "true", 1, "dropdown-toggle"],
  hostVars: 1,
  hostBindings: function NgbDropdownAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen());
    }
  }
});
/** @nocollapse */

NgbDropdownAnchor.ctorParameters = function () {
  return [{
    type: NgbDropdown,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
        return NgbDropdown;
      })]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDropdownAnchor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbDropdownAnchor]',
      host: {
        'class': 'dropdown-toggle',
        'aria-haspopup': 'true',
        '[attr.aria-expanded]': 'dropdown.isOpen()'
      }
    }]
  }], function () {
    return [{
      type: NgbDropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
          return NgbDropdown;
        })]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }];
  }, null);
})();
/**
 * A directive to mark an element that will toggle dropdown via the `click` event.
 *
 * You can also use `NgbDropdownAnchor` as an alternative.
 */


var NgbDropdownToggle = /*#__PURE__*/function (_NgbDropdownAnchor) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbDropdownToggle, _NgbDropdownAnchor);

  var _super13 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbDropdownToggle);

  /**
   * @param {?} dropdown
   * @param {?} elementRef
   */
  function NgbDropdownToggle(dropdown, elementRef) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDropdownToggle);

    return _super13.call(this, dropdown, elementRef);
  }

  return NgbDropdownToggle;
}(NgbDropdownAnchor);

NgbDropdownToggle.ɵfac = function NgbDropdownToggle_Factory(t) {
  return new (t || NgbDropdownToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbDropdown;
  })), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]));
};

NgbDropdownToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbDropdownToggle,
  selectors: [["", "ngbDropdownToggle", ""]],
  hostAttrs: ["aria-haspopup", "true", 1, "dropdown-toggle"],
  hostVars: 1,
  hostBindings: function NgbDropdownToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function NgbDropdownToggle_click_HostBindingHandler() {
        return ctx.dropdown.toggle();
      })("keydown.ArrowUp", function NgbDropdownToggle_keydown_ArrowUp_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.ArrowDown", function NgbDropdownToggle_keydown_ArrowDown_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.Home", function NgbDropdownToggle_keydown_Home_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      })("keydown.End", function NgbDropdownToggle_keydown_End_HostBindingHandler($event) {
        return ctx.dropdown.onKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen());
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: NgbDropdownAnchor,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
      return NgbDropdownToggle;
    })
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]]
});
/** @nocollapse */

NgbDropdownToggle.ctorParameters = function () {
  return [{
    type: NgbDropdown,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
        return NgbDropdown;
      })]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDropdownToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbDropdownToggle]',
      host: {
        'class': 'dropdown-toggle',
        'aria-haspopup': 'true',
        '[attr.aria-expanded]': 'dropdown.isOpen()',
        '(click)': 'dropdown.toggle()',
        '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
        '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
        '(keydown.Home)': 'dropdown.onKeyDown($event)',
        '(keydown.End)': 'dropdown.onKeyDown($event)'
      },
      providers: [{
        provide: NgbDropdownAnchor,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
          return NgbDropdownToggle;
        })
      }]
    }]
  }], function () {
    return [{
      type: NgbDropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
          return NgbDropdown;
        })]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }];
  }, null);
})();
/**
 * A directive that provides contextual overlays for displaying lists of links and more.
 */


var NgbDropdown = /*#__PURE__*/function () {
  /**
   * @param {?} _changeDetector
   * @param {?} config
   * @param {?} _document
   * @param {?} _ngZone
   * @param {?} _elementRef
   * @param {?} _renderer
   */
  function NgbDropdown(_changeDetector, config, _document, _ngZone, _elementRef, _renderer) {
    var _this17 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDropdown);

    this._changeDetector = _changeDetector;
    this._document = _document;
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    /**
     * Defines whether or not the dropdown menu is opened initially.
     */

    this._open = false;
    /**
     * An event fired when the dropdown is opened or closed.
     *
     * The event payload is a `boolean`:
     * * `true` - the dropdown was opened
     * * `false` - the dropdown was closed
     */

    this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this.placement = config.placement;
    this.container = config.container;
    this.autoClose = config.autoClose;
    this._zoneSubscription = _ngZone.onStable.subscribe(function () {
      _this17._positionMenu();
    });
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDropdown, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this._applyPlacementClasses();

      if (this._open) {
        this._setCloseHandlers();
      }
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.container && this._open) {
        this._applyContainer(this.container);
      }

      if (changes.placement && !changes.placement.isFirstChange) {
        this._applyPlacementClasses();
      }
    }
    /**
     * Checks if the dropdown menu is open.
     * @return {?}
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this._open;
    }
    /**
     * Opens the dropdown menu.
     * @return {?}
     */

  }, {
    key: "open",
    value: function open() {
      if (!this._open) {
        this._open = true;

        this._applyContainer(this.container);

        this.openChange.emit(true);

        this._setCloseHandlers();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_setCloseHandlers",
    value: function _setCloseHandlers() {
      var _this18 = this;

      ngbAutoClose(this._ngZone, this._document, this.autoClose, function () {
        return _this18.close();
      }, this._closed$, this._menu ? [this._menuElement.nativeElement] : [], this._anchor ? [this._anchor.getNativeElement()] : [], '.dropdown-item,.dropdown-divider');
    }
    /**
     * Closes the dropdown menu.
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      if (this._open) {
        this._open = false;

        this._resetContainer();

        this._closed$.next();

        this.openChange.emit(false);

        this._changeDetector.markForCheck();
      }
    }
    /**
     * Toggles the dropdown menu.
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._resetContainer();

      this._closed$.next();

      this._zoneSubscription.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var _this19 = this;

      // tslint:disable-next-line:deprecation

      /** @type {?} */
      var key = event.which;
      /** @type {?} */

      var itemElements = this._getMenuElements();
      /** @type {?} */


      var position = -1;
      /** @type {?} */

      var isEventFromItems = false;
      /** @type {?} */

      var isEventFromToggle = this._isEventFromToggle(event);

      if (!isEventFromToggle && itemElements.length) {
        itemElements.forEach(function (itemElement, index) {
          if (itemElement.contains(
          /** @type {?} */
          event.target)) {
            isEventFromItems = true;
          }

          if (itemElement === _this19._document.activeElement) {
            position = index;
          }
        });
      } // closing on Enter / Space


      if (key === Key.Space || key === Key.Enter) {
        if (isEventFromItems && (this.autoClose === true || this.autoClose === 'inside')) {
          this.close();
        }

        return;
      } // opening / navigating


      if (isEventFromToggle || isEventFromItems) {
        this.open();

        if (itemElements.length) {
          switch (key) {
            case Key.ArrowDown:
              position = Math.min(position + 1, itemElements.length - 1);
              break;

            case Key.ArrowUp:
              if (this._isDropup() && position === -1) {
                position = itemElements.length - 1;
                break;
              }

              position = Math.max(position - 1, 0);
              break;

            case Key.Home:
              position = 0;
              break;

            case Key.End:
              position = itemElements.length - 1;
              break;
          }

          itemElements[position].focus();
        }

        event.preventDefault();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_isDropup",
    value: function _isDropup() {
      return this._elementRef.nativeElement.classList.contains('dropup');
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "_isEventFromToggle",
    value: function _isEventFromToggle(event) {
      return this._anchor.getNativeElement().contains(
      /** @type {?} */
      event.target);
    }
    /**
     * @return {?}
     */

  }, {
    key: "_getMenuElements",
    value: function _getMenuElements() {
      if (this._menu == null) {
        return [];
      }

      return this._menu.menuItems.filter(function (item) {
        return !item.disabled;
      }).map(function (item) {
        return item.elementRef.nativeElement;
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "_positionMenu",
    value: function _positionMenu() {
      if (this.isOpen() && this._menu) {
        this._applyPlacementClasses(positionElements(this._anchor.anchorEl, this._bodyContainer || this._menuElement.nativeElement, this.placement, this.container === 'body'));
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_resetContainer",
    value: function _resetContainer() {
      /** @type {?} */
      var renderer = this._renderer;

      if (this._menuElement) {
        /** @type {?} */
        var dropdownElement = this._elementRef.nativeElement;
        /** @type {?} */

        var dropdownMenuElement = this._menuElement.nativeElement;
        renderer.appendChild(dropdownElement, dropdownMenuElement);
        renderer.removeStyle(dropdownMenuElement, 'position');
        renderer.removeStyle(dropdownMenuElement, 'transform');
      }

      if (this._bodyContainer) {
        renderer.removeChild(this._document.body, this._bodyContainer);
        this._bodyContainer = null;
      }
    }
    /**
     * @param {?=} container
     * @return {?}
     */

  }, {
    key: "_applyContainer",
    value: function _applyContainer() {
      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this._resetContainer();

      if (container === 'body') {
        /** @type {?} */
        var renderer = this._renderer;
        /** @type {?} */

        var dropdownMenuElement = this._menuElement.nativeElement;
        /** @type {?} */

        var bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div'); // Override some styles to have the positionning working

        renderer.setStyle(bodyContainer, 'position', 'absolute');
        renderer.setStyle(dropdownMenuElement, 'position', 'static');
        renderer.setStyle(bodyContainer, 'z-index', '1050');
        renderer.appendChild(bodyContainer, dropdownMenuElement);
        renderer.appendChild(this._document.body, bodyContainer);
      }
    }
    /**
     * @param {?=} placement
     * @return {?}
     */

  }, {
    key: "_applyPlacementClasses",
    value: function _applyPlacementClasses(placement) {
      if (this._menu) {
        if (!placement) {
          placement = Array.isArray(this.placement) ? this.placement[0] :
          /** @type {?} */
          this.placement.split(' ')[0];
        }
        /** @type {?} */


        var renderer = this._renderer;
        /** @type {?} */

        var dropdownElement = this._elementRef.nativeElement; // remove the current placement classes

        renderer.removeClass(dropdownElement, 'dropup');
        renderer.removeClass(dropdownElement, 'dropdown');
        this._menu.placement = placement;
        /*
              * apply the new placement
              * in case of top use up-arrow or down-arrow otherwise
              */

        /** @type {?} */

        var dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
        renderer.addClass(dropdownElement, dropdownClass);
        /** @type {?} */

        var bodyContainer = this._bodyContainer;

        if (bodyContainer) {
          renderer.removeClass(bodyContainer, 'dropup');
          renderer.removeClass(bodyContainer, 'dropdown');
          renderer.addClass(bodyContainer, dropdownClass);
        }
      }
    }
  }]);

  return NgbDropdown;
}();

NgbDropdown.ɵfac = function NgbDropdown_Factory(t) {
  return new (t || NgbDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]));
};

NgbDropdown.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbDropdown,
  selectors: [["", "ngbDropdown", ""]],
  contentQueries: function NgbDropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbDropdownMenu, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbDropdownMenu, true, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbDropdownAnchor, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._menu = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._menuElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._anchor = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgbDropdown_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("show", ctx.isOpen());
    }
  },
  inputs: {
    _open: ["open", "_open"],
    placement: "placement",
    container: "container",
    autoClose: "autoClose"
  },
  outputs: {
    openChange: "openChange"
  },
  exportAs: ["ngbDropdown"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

NgbDropdown.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }, {
    type: NgbDropdownConfig
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
  }];
};

NgbDropdown.propDecorators = {
  _menu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbDropdownMenu]
  }],
  _menuElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbDropdownMenu, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }]
  }],
  _anchor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbDropdownAnchor]
  }],
  autoClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  _open: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['open']
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  openChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbDropdown]',
      exportAs: 'ngbDropdown',
      host: {
        '[class.show]': 'isOpen()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }, {
      type: NgbDropdownConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
    }];
  }, {
    _open: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['open']
    }],
    openChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    _menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbDropdownMenu]
    }],
    _menuElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbDropdownMenu, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
      }]
    }],
    _anchor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbDropdownAnchor]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem];

var NgbDropdownModule = /*#__PURE__*/function () {
  function NgbDropdownModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbDropdownModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbDropdownModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbDropdownModule
      };
    }
  }]);

  return NgbDropdownModule;
}();

NgbDropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbDropdownModule
});
NgbDropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbDropdownModule_Factory(t) {
    return new (t || NgbDropdownModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbDropdownModule, {
    declarations: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
    exports: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbDropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: NGB_DROPDOWN_DIRECTIVES,
      exports: NGB_DROPDOWN_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
 *
 * \@since 3.1.0
 */


var NgbModalConfig = function NgbModalConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModalConfig);

  this.backdrop = true;
  this.keyboard = true;
};

NgbModalConfig.ɵfac = function NgbModalConfig_Factory(t) {
  return new (t || NgbModalConfig)();
};

NgbModalConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbModalConfig,
  factory: NgbModalConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbModalConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbModalConfig_Factory() {
    return new NgbModalConfig();
  },
  token: NgbModalConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbModalConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var ContentRef =
/**
 * @param {?} nodes
 * @param {?=} viewRef
 * @param {?=} componentRef
 */
function ContentRef(nodes, viewRef, componentRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, ContentRef);

  this.nodes = nodes;
  this.viewRef = viewRef;
  this.componentRef = componentRef;
};
/**
 * @template T
 */


var PopupService = /*#__PURE__*/function () {
  /**
   * @param {?} _type
   * @param {?} _injector
   * @param {?} _viewContainerRef
   * @param {?} _renderer
   * @param {?} _componentFactoryResolver
   */
  function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, PopupService);

    this._type = _type;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._componentFactoryResolver = _componentFactoryResolver;
  }
  /**
   * @param {?=} content
   * @param {?=} context
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(PopupService, [{
    key: "open",
    value: function open(content, context) {
      if (!this._windowRef) {
        this._contentRef = this._getContentRef(content, context);
        this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
      }

      return this._windowRef;
    }
    /**
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      if (this._windowRef) {
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));

        this._windowRef = null;

        if (this._contentRef.viewRef) {
          this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));

          this._contentRef = null;
        }
      }
    }
    /**
     * @param {?} content
     * @param {?=} context
     * @return {?}
     */

  }, {
    key: "_getContentRef",
    value: function _getContentRef(content, context) {
      if (!content) {
        return new ContentRef([]);
      } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]) {
        /** @type {?} */
        var viewRef = this._viewContainerRef.createEmbeddedView(
        /** @type {?} */
        content, context);

        return new ContentRef([viewRef.rootNodes], viewRef);
      } else {
        return new ContentRef([[this._renderer.createText("".concat(content))]]);
      }
    }
  }]);

  return PopupService;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var noop = function noop() {};
/**
 * Utility to handle the scrollbar.
 *
 * It allows to compensate the lack of a vertical scrollbar by adding an
 * equivalent padding on the right of the body, and to remove this compensation.
 */


var ScrollBar = /*#__PURE__*/function () {
  /**
   * @param {?} _document
   */
  function ScrollBar(_document) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, ScrollBar);

    this._document = _document;
  }
  /**
   * Detects if a scrollbar is present and if yes, already compensates for its
   * removal by adding an equivalent padding on the right of the body.
   *
   * @return {?} a callback used to revert the compensation (noop if there was none,
   * otherwise a function removing the padding)
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollBar, [{
    key: "compensate",
    value: function compensate() {
      return !this._isPresent() ? noop : this._adjustBody(this._getWidth());
    }
    /**
     * Adds a padding of the given width on the right of the body.
     *
     * @param {?} width
     * @return {?} a callback used to revert the padding to its previous value
     */

  }, {
    key: "_adjustBody",
    value: function _adjustBody(width) {
      /** @type {?} */
      var body = this._document.body;
      /** @type {?} */

      var userSetPadding = body.style.paddingRight;
      /** @type {?} */

      var paddingAmount = parseFloat(window.getComputedStyle(body)['padding-right']);
      body.style['padding-right'] = "".concat(paddingAmount + width, "px");
      return function () {
        return body.style['padding-right'] = userSetPadding;
      };
    }
    /**
     * Tells whether a scrollbar is currently present on the body.
     *
     * @return {?} true if scrollbar is present, false otherwise
     */

  }, {
    key: "_isPresent",
    value: function _isPresent() {
      /** @type {?} */
      var rect = this._document.body.getBoundingClientRect();

      return rect.left + rect.right < window.innerWidth;
    }
    /**
     * Calculates and returns the width of a scrollbar.
     *
     * @return {?} the width of a scrollbar on this page
     */

  }, {
    key: "_getWidth",
    value: function _getWidth() {
      /** @type {?} */
      var measurer = this._document.createElement('div');

      measurer.className = 'modal-scrollbar-measure';
      /** @type {?} */

      var body = this._document.body;
      body.appendChild(measurer);
      /** @type {?} */

      var width = measurer.getBoundingClientRect().width - measurer.clientWidth;
      body.removeChild(measurer);
      return width;
    }
  }]);

  return ScrollBar;
}();

ScrollBar.ɵfac = function ScrollBar_Factory(t) {
  return new (t || ScrollBar)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]));
};

ScrollBar.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: ScrollBar,
  factory: ScrollBar.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

ScrollBar.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }];
};
/** @nocollapse */


ScrollBar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function ScrollBar_Factory() {
    return new ScrollBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]));
  },
  token: ScrollBar,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](ScrollBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbModalBackdrop = function NgbModalBackdrop() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModalBackdrop);
};

NgbModalBackdrop.ɵfac = function NgbModalBackdrop_Factory(t) {
  return new (t || NgbModalBackdrop)();
};

NgbModalBackdrop.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbModalBackdrop,
  selectors: [["ngb-modal-backdrop"]],
  hostAttrs: [2, "z-index", "1050"],
  hostVars: 2,
  hostBindings: function NgbModalBackdrop_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("modal-backdrop fade show" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
    }
  },
  inputs: {
    backdropClass: "backdropClass"
  },
  decls: 0,
  vars: 0,
  template: function NgbModalBackdrop_Template(rf, ctx) {},
  encapsulation: 2
});
NgbModalBackdrop.propDecorators = {
  backdropClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbModalBackdrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-modal-backdrop',
      template: '',
      host: {
        '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")',
        'style': 'z-index: 1050'
      }
    }]
  }], null, {
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */


var NgbActiveModal = /*#__PURE__*/function () {
  function NgbActiveModal() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbActiveModal);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbActiveModal, [{
    key: "close",

    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    value: function close(result) {}
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */

  }, {
    key: "dismiss",
    value: function dismiss(reason) {}
  }]);

  return NgbActiveModal;
}();
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */


var NgbModalRef = /*#__PURE__*/function () {
  /**
   * @param {?} _windowCmptRef
   * @param {?} _contentRef
   * @param {?=} _backdropCmptRef
   * @param {?=} _beforeDismiss
   */
  function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    var _this20 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModalRef);

    this._windowCmptRef = _windowCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;

    _windowCmptRef.instance.dismissEvent.subscribe(function (reason) {
      _this20.dismiss(reason);
    });

    this.result = new Promise(function (resolve, reject) {
      _this20._resolve = resolve;
      _this20._reject = reject;
    });
    this.result.then(null, function () {});
  }
  /**
   * The instance of a component used for the modal content.
   *
   * When a `TemplateRef` is used as the content, will return `undefined`.
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbModalRef, [{
    key: "close",

    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     * @param {?=} result
     * @return {?}
     */
    value: function close(result) {
      if (this._windowCmptRef) {
        this._resolve(result);

        this._removeModalElements();
      }
    }
    /**
     * @param {?=} reason
     * @return {?}
     */

  }, {
    key: "_dismiss",
    value: function _dismiss(reason) {
      this._reject(reason);

      this._removeModalElements();
    }
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     * @param {?=} reason
     * @return {?}
     */

  }, {
    key: "dismiss",
    value: function dismiss(reason) {
      var _this21 = this;

      if (this._windowCmptRef) {
        if (!this._beforeDismiss) {
          this._dismiss(reason);
        } else {
          /** @type {?} */
          var dismiss = this._beforeDismiss();

          if (dismiss && dismiss.then) {
            dismiss.then(function (result) {
              if (result !== false) {
                _this21._dismiss(reason);
              }
            }, function () {});
          } else if (dismiss !== false) {
            this._dismiss(reason);
          }
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_removeModalElements",
    value: function _removeModalElements() {
      /** @type {?} */
      var windowNativeEl = this._windowCmptRef.location.nativeElement;
      windowNativeEl.parentNode.removeChild(windowNativeEl);

      this._windowCmptRef.destroy();

      if (this._backdropCmptRef) {
        /** @type {?} */
        var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
        backdropNativeEl.parentNode.removeChild(backdropNativeEl);

        this._backdropCmptRef.destroy();
      }

      if (this._contentRef && this._contentRef.viewRef) {
        this._contentRef.viewRef.destroy();
      }

      this._windowCmptRef = null;
      this._backdropCmptRef = null;
      this._contentRef = null;
    }
  }, {
    key: "componentInstance",
    get: function get() {
      if (this._contentRef.componentRef) {
        return this._contentRef.componentRef.instance;
      }
    }
  }]);

  return NgbModalRef;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @enum {number} */


var ModalDismissReasons = {
  BACKDROP_CLICK: 0,
  ESC: 1
};
ModalDismissReasons[ModalDismissReasons.BACKDROP_CLICK] = 'BACKDROP_CLICK';
ModalDismissReasons[ModalDismissReasons.ESC] = 'ESC';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

var NgbModalWindow = /*#__PURE__*/function () {
  /**
   * @param {?} _document
   * @param {?} _elRef
   */
  function NgbModalWindow(_document, _elRef) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModalWindow);

    this._document = _document;
    this._elRef = _elRef;
    this.backdrop = true;
    this.keyboard = true;
    this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
  }
  /**
   * @param {?} $event
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbModalWindow, [{
    key: "backdropClick",
    value: function backdropClick($event) {
      if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
        this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
      }
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "escKey",
    value: function escKey($event) {
      if (this.keyboard && !$event.defaultPrevented) {
        this.dismiss(ModalDismissReasons.ESC);
      }
    }
    /**
     * @param {?} reason
     * @return {?}
     */

  }, {
    key: "dismiss",
    value: function dismiss(reason) {
      this.dismissEvent.emit(reason);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._elWithFocus = this._document.activeElement;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (!this._elRef.nativeElement.contains(document.activeElement)) {
        /** @type {?} */
        var autoFocusable =
        /** @type {?} */
        this._elRef.nativeElement.querySelector("[ngbAutofocus]");
        /** @type {?} */


        var firstFocusable = getFocusableBoundaryElements(this._elRef.nativeElement)[0];
        /** @type {?} */

        var elementToFocus = autoFocusable || firstFocusable || this._elRef.nativeElement;
        elementToFocus.focus();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      /** @type {?} */
      var body = this._document.body;
      /** @type {?} */

      var elWithFocus = this._elWithFocus;
      /** @type {?} */

      var elementToFocus;

      if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
        elementToFocus = elWithFocus;
      } else {
        elementToFocus = body;
      }

      elementToFocus.focus();
      this._elWithFocus = null;
    }
  }]);

  return NgbModalWindow;
}();

NgbModalWindow.ɵfac = function NgbModalWindow_Factory(t) {
  return new (t || NgbModalWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]));
};

NgbModalWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbModalWindow,
  selectors: [["ngb-modal-window"]],
  hostAttrs: ["role", "dialog", "tabindex", "-1"],
  hostVars: 4,
  hostBindings: function NgbModalWindow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.esc", function NgbModalWindow_keyup_esc_HostBindingHandler($event) {
        return ctx.escKey($event);
      })("click", function NgbModalWindow_click_HostBindingHandler($event) {
        return ctx.backdropClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("modal fade show d-block" + (ctx.windowClass ? " " + ctx.windowClass : ""));
    }
  },
  inputs: {
    backdrop: "backdrop",
    keyboard: "keyboard",
    ariaLabelledBy: "ariaLabelledBy",
    centered: "centered",
    size: "size",
    windowClass: "windowClass"
  },
  outputs: {
    dismissEvent: "dismiss"
  },
  ngContentSelectors: _c3,
  decls: 3,
  vars: 2,
  consts: [["role", "document"], [1, "modal-content"]],
  template: function NgbModalWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("modal-dialog" + (ctx.size ? " modal-" + ctx.size : "") + (ctx.centered ? " modal-dialog-centered" : ""));
    }
  },
  encapsulation: 2
});
/** @nocollapse */

NgbModalWindow.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }];
};

NgbModalWindow.propDecorators = {
  ariaLabelledBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  backdrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  centered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  keyboard: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  windowClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  dismissEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
    args: ['dismiss']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbModalWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-modal-window',
      host: {
        '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
        'role': 'dialog',
        'tabindex': '-1',
        '(keyup.esc)': 'escKey($event)',
        '(click)': 'backdropClick($event)',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'ariaLabelledBy'
      },
      template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }];
  }, {
    backdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    dismissEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
      args: ['dismiss']
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    centered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    windowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbModalStack = /*#__PURE__*/function () {
  /**
   * @param {?} _applicationRef
   * @param {?} _injector
   * @param {?} _document
   * @param {?} _scrollBar
   * @param {?} _rendererFactory
   */
  function NgbModalStack(_applicationRef, _injector, _document, _scrollBar, _rendererFactory) {
    var _this22 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModalStack);

    this._applicationRef = _applicationRef;
    this._injector = _injector;
    this._document = _document;
    this._scrollBar = _scrollBar;
    this._rendererFactory = _rendererFactory;
    this._activeWindowCmptHasChanged = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    this._ariaHiddenValues = new Map();
    this._backdropAttributes = ['backdropClass'];
    this._modalRefs = [];
    this._windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'size', 'windowClass'];
    this._windowCmpts = []; // Trap focus on active WindowCmpt

    this._activeWindowCmptHasChanged.subscribe(function () {
      if (_this22._windowCmpts.length) {
        /** @type {?} */
        var activeWindowCmpt = _this22._windowCmpts[_this22._windowCmpts.length - 1];
        ngbFocusTrap(activeWindowCmpt.location.nativeElement, _this22._activeWindowCmptHasChanged);

        _this22._revertAriaHidden();

        _this22._setAriaHidden(activeWindowCmpt.location.nativeElement);
      }
    });
  }
  /**
   * @param {?} moduleCFR
   * @param {?} contentInjector
   * @param {?} content
   * @param {?} options
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbModalStack, [{
    key: "open",
    value: function open(moduleCFR, contentInjector, content, options) {
      var _this23 = this;

      /** @type {?} */
      var containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
      /** @type {?} */

      var renderer = this._rendererFactory.createRenderer(null, null);
      /** @type {?} */


      var revertPaddingForScrollBar = this._scrollBar.compensate();
      /** @type {?} */


      var removeBodyClass = function removeBodyClass() {
        if (!_this23._modalRefs.length) {
          renderer.removeClass(_this23._document.body, 'modal-open');

          _this23._revertAriaHidden();
        }
      };

      if (!containerEl) {
        throw new Error("The specified modal container \"".concat(options.container || 'body', "\" was not found in the DOM."));
      }
      /** @type {?} */


      var activeModal = new NgbActiveModal();
      /** @type {?} */

      var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);
      /** @type {?} */


      var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
      /** @type {?} */

      var windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
      /** @type {?} */


      var ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

      this._registerModalRef(ngbModalRef);

      this._registerWindowCmpt(windowCmptRef);

      ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
      ngbModalRef.result.then(removeBodyClass, removeBodyClass);

      activeModal.close = function (result) {
        ngbModalRef.close(result);
      };

      activeModal.dismiss = function (reason) {
        ngbModalRef.dismiss(reason);
      };

      this._applyWindowOptions(windowCmptRef.instance, options);

      if (this._modalRefs.length === 1) {
        renderer.addClass(this._document.body, 'modal-open');
      }

      if (backdropCmptRef && backdropCmptRef.instance) {
        this._applyBackdropOptions(backdropCmptRef.instance, options);
      }

      return ngbModalRef;
    }
    /**
     * @param {?=} reason
     * @return {?}
     */

  }, {
    key: "dismissAll",
    value: function dismissAll(reason) {
      this._modalRefs.forEach(function (ngbModalRef) {
        return ngbModalRef.dismiss(reason);
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "hasOpenModals",
    value: function hasOpenModals() {
      return this._modalRefs.length > 0;
    }
    /**
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @return {?}
     */

  }, {
    key: "_attachBackdrop",
    value: function _attachBackdrop(moduleCFR, containerEl) {
      /** @type {?} */
      var backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
      /** @type {?} */

      var backdropCmptRef = backdropFactory.create(this._injector);

      this._applicationRef.attachView(backdropCmptRef.hostView);

      containerEl.appendChild(backdropCmptRef.location.nativeElement);
      return backdropCmptRef;
    }
    /**
     * @param {?} moduleCFR
     * @param {?} containerEl
     * @param {?} contentRef
     * @return {?}
     */

  }, {
    key: "_attachWindowComponent",
    value: function _attachWindowComponent(moduleCFR, containerEl, contentRef) {
      /** @type {?} */
      var windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
      /** @type {?} */

      var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);

      this._applicationRef.attachView(windowCmptRef.hostView);

      containerEl.appendChild(windowCmptRef.location.nativeElement);
      return windowCmptRef;
    }
    /**
     * @param {?} windowInstance
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "_applyWindowOptions",
    value: function _applyWindowOptions(windowInstance, options) {
      this._windowAttributes.forEach(function (optionName) {
        if (isDefined(options[optionName])) {
          windowInstance[optionName] = options[optionName];
        }
      });
    }
    /**
     * @param {?} backdropInstance
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "_applyBackdropOptions",
    value: function _applyBackdropOptions(backdropInstance, options) {
      this._backdropAttributes.forEach(function (optionName) {
        if (isDefined(options[optionName])) {
          backdropInstance[optionName] = options[optionName];
        }
      });
    }
    /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} activeModal
     * @return {?}
     */

  }, {
    key: "_getContentRef",
    value: function _getContentRef(moduleCFR, contentInjector, content, activeModal) {
      if (!content) {
        return new ContentRef([]);
      } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]) {
        return this._createFromTemplateRef(content, activeModal);
      } else if (isString(content)) {
        return this._createFromString(content);
      } else {
        return this._createFromComponent(moduleCFR, contentInjector, content, activeModal);
      }
    }
    /**
     * @param {?} content
     * @param {?} activeModal
     * @return {?}
     */

  }, {
    key: "_createFromTemplateRef",
    value: function _createFromTemplateRef(content, activeModal) {
      /** @type {?} */
      var context = {
        $implicit: activeModal,

        /**
         * @param {?} result
         * @return {?}
         */
        close: function close(result) {
          activeModal.close(result);
        },

        /**
         * @param {?} reason
         * @return {?}
         */
        dismiss: function dismiss(reason) {
          activeModal.dismiss(reason);
        }
      };
      /** @type {?} */

      var viewRef = content.createEmbeddedView(context);

      this._applicationRef.attachView(viewRef);

      return new ContentRef([viewRef.rootNodes], viewRef);
    }
    /**
     * @param {?} content
     * @return {?}
     */

  }, {
    key: "_createFromString",
    value: function _createFromString(content) {
      /** @type {?} */
      var component = this._document.createTextNode("".concat(content));

      return new ContentRef([[component]]);
    }
    /**
     * @param {?} moduleCFR
     * @param {?} contentInjector
     * @param {?} content
     * @param {?} context
     * @return {?}
     */

  }, {
    key: "_createFromComponent",
    value: function _createFromComponent(moduleCFR, contentInjector, content, context) {
      /** @type {?} */
      var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
      /** @type {?} */

      var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"].create({
        providers: [{
          provide: NgbActiveModal,
          useValue: context
        }],
        parent: contentInjector
      });
      /** @type {?} */

      var componentRef = contentCmptFactory.create(modalContentInjector);

      this._applicationRef.attachView(componentRef.hostView);

      return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    }
    /**
     * @param {?} element
     * @return {?}
     */

  }, {
    key: "_setAriaHidden",
    value: function _setAriaHidden(element) {
      var _this24 = this;

      /** @type {?} */
      var parent = element.parentElement;

      if (parent && element !== this._document.body) {
        Array.from(parent.children).forEach(function (sibling) {
          if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
            _this24._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));

            sibling.setAttribute('aria-hidden', 'true');
          }
        });

        this._setAriaHidden(parent);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_revertAriaHidden",
    value: function _revertAriaHidden() {
      this._ariaHiddenValues.forEach(function (value, element) {
        if (value) {
          element.setAttribute('aria-hidden', value);
        } else {
          element.removeAttribute('aria-hidden');
        }
      });

      this._ariaHiddenValues.clear();
    }
    /**
     * @param {?} ngbModalRef
     * @return {?}
     */

  }, {
    key: "_registerModalRef",
    value: function _registerModalRef(ngbModalRef) {
      var _this25 = this;

      /** @type {?} */
      var unregisterModalRef = function unregisterModalRef() {
        /** @type {?} */
        var index = _this25._modalRefs.indexOf(ngbModalRef);

        if (index > -1) {
          _this25._modalRefs.splice(index, 1);
        }
      };

      this._modalRefs.push(ngbModalRef);

      ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
    }
    /**
     * @param {?} ngbWindowCmpt
     * @return {?}
     */

  }, {
    key: "_registerWindowCmpt",
    value: function _registerWindowCmpt(ngbWindowCmpt) {
      var _this26 = this;

      this._windowCmpts.push(ngbWindowCmpt);

      this._activeWindowCmptHasChanged.next();

      ngbWindowCmpt.onDestroy(function () {
        /** @type {?} */
        var index = _this26._windowCmpts.indexOf(ngbWindowCmpt);

        if (index > -1) {
          _this26._windowCmpts.splice(index, 1);

          _this26._activeWindowCmptHasChanged.next();
        }
      });
    }
  }]);

  return NgbModalStack;
}();

NgbModalStack.ɵfac = function NgbModalStack_Factory(t) {
  return new (t || NgbModalStack)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](ScrollBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["RendererFactory2"]));
};

NgbModalStack.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbModalStack,
  factory: NgbModalStack.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbModalStack.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ApplicationRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: ScrollBar
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["RendererFactory2"]
  }];
};
/** @nocollapse */


NgbModalStack.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbModalStack_Factory() {
    return new NgbModalStack(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(ScrollBar), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["RendererFactory2"]));
  },
  token: NgbModalStack,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbModalStack, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ApplicationRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: ScrollBar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["RendererFactory2"]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A service for opening modal windows.
 *
 * Creating a modal is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 */


var NgbModal = /*#__PURE__*/function () {
  /**
   * @param {?} _moduleCFR
   * @param {?} _injector
   * @param {?} _modalStack
   * @param {?} _config
   */
  function NgbModal(_moduleCFR, _injector, _modalStack, _config) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModal);

    this._moduleCFR = _moduleCFR;
    this._injector = _injector;
    this._modalStack = _modalStack;
    this._config = _config;
  }
  /**
   * Opens a new modal window with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
   * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
   *
   * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
   * @param {?} content
   * @param {?=} options
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbModal, [{
    key: "open",
    value: function open(content) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      /** @type {?} */
      var combinedOptions = Object.assign({}, this._config, options);
      return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
    }
    /**
     * Dismisses all currently displayed modal windows with the supplied reason.
     *
     * \@since 3.1.0
     * @param {?=} reason
     * @return {?}
     */

  }, {
    key: "dismissAll",
    value: function dismissAll(reason) {
      this._modalStack.dismissAll(reason);
    }
    /**
     * Indicates if there are currently any open modal windows in the application.
     *
     * \@since 3.3.0
     * @return {?}
     */

  }, {
    key: "hasOpenModals",
    value: function hasOpenModals() {
      return this._modalStack.hasOpenModals();
    }
  }]);

  return NgbModal;
}();

NgbModal.ɵfac = function NgbModal_Factory(t) {
  return new (t || NgbModal)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](NgbModalStack), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](NgbModalConfig));
};

NgbModal.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbModal,
  factory: NgbModal.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbModal.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
  }, {
    type: NgbModalStack
  }, {
    type: NgbModalConfig
  }];
};
/** @nocollapse */


NgbModal.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbModal_Factory() {
    return new NgbModal(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(NgbModalStack), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(NgbModalConfig));
  },
  token: NgbModal,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbModal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
    }, {
      type: NgbModalStack
    }, {
      type: NgbModalConfig
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbModalModule = /*#__PURE__*/function () {
  function NgbModalModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModalModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbModalModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbModalModule
      };
    }
  }]);

  return NgbModalModule;
}();

NgbModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbModalModule
});
NgbModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbModalModule_Factory(t) {
    return new (t || NgbModalModule)();
  },
  providers: [NgbModal]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbModalModule, {
    declarations: [NgbModalBackdrop, NgbModalWindow]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbModalModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbModalBackdrop, NgbModalWindow],
      entryComponents: [NgbModalBackdrop, NgbModalWindow],
      providers: [NgbModal]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */


var NgbPaginationConfig = function NgbPaginationConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationConfig);

  this.disabled = false;
  this.boundaryLinks = false;
  this.directionLinks = true;
  this.ellipses = true;
  this.maxSize = 0;
  this.pageSize = 10;
  this.rotate = false;
};

NgbPaginationConfig.ɵfac = function NgbPaginationConfig_Factory(t) {
  return new (t || NgbPaginationConfig)();
};

NgbPaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbPaginationConfig,
  factory: NgbPaginationConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbPaginationConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbPaginationConfig_Factory() {
    return new NgbPaginationConfig();
  },
  token: NgbPaginationConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A directive to match the 'ellipsis' link template
 *
 * \@since 4.1.0
 */


var NgbPaginationEllipsis =
/**
 * @param {?} templateRef
 */
function NgbPaginationEllipsis(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationEllipsis);

  this.templateRef = templateRef;
};

NgbPaginationEllipsis.ɵfac = function NgbPaginationEllipsis_Factory(t) {
  return new (t || NgbPaginationEllipsis)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPaginationEllipsis.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPaginationEllipsis,
  selectors: [["ng-template", "ngbPaginationEllipsis", ""]]
});
/** @nocollapse */

NgbPaginationEllipsis.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationEllipsis, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPaginationEllipsis]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive to match the 'first' link template
 *
 * \@since 4.1.0
 */


var NgbPaginationFirst =
/**
 * @param {?} templateRef
 */
function NgbPaginationFirst(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationFirst);

  this.templateRef = templateRef;
};

NgbPaginationFirst.ɵfac = function NgbPaginationFirst_Factory(t) {
  return new (t || NgbPaginationFirst)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPaginationFirst.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPaginationFirst,
  selectors: [["ng-template", "ngbPaginationFirst", ""]]
});
/** @nocollapse */

NgbPaginationFirst.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationFirst, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPaginationFirst]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive to match the 'last' link template
 *
 * \@since 4.1.0
 */


var NgbPaginationLast =
/**
 * @param {?} templateRef
 */
function NgbPaginationLast(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationLast);

  this.templateRef = templateRef;
};

NgbPaginationLast.ɵfac = function NgbPaginationLast_Factory(t) {
  return new (t || NgbPaginationLast)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPaginationLast.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPaginationLast,
  selectors: [["ng-template", "ngbPaginationLast", ""]]
});
/** @nocollapse */

NgbPaginationLast.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationLast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPaginationLast]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive to match the 'next' link template
 *
 * \@since 4.1.0
 */


var NgbPaginationNext =
/**
 * @param {?} templateRef
 */
function NgbPaginationNext(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationNext);

  this.templateRef = templateRef;
};

NgbPaginationNext.ɵfac = function NgbPaginationNext_Factory(t) {
  return new (t || NgbPaginationNext)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPaginationNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPaginationNext,
  selectors: [["ng-template", "ngbPaginationNext", ""]]
});
/** @nocollapse */

NgbPaginationNext.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPaginationNext]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive to match the page 'number' link template
 *
 * \@since 4.1.0
 */


var NgbPaginationNumber =
/**
 * @param {?} templateRef
 */
function NgbPaginationNumber(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationNumber);

  this.templateRef = templateRef;
};

NgbPaginationNumber.ɵfac = function NgbPaginationNumber_Factory(t) {
  return new (t || NgbPaginationNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPaginationNumber.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPaginationNumber,
  selectors: [["ng-template", "ngbPaginationNumber", ""]]
});
/** @nocollapse */

NgbPaginationNumber.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationNumber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPaginationNumber]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive to match the 'previous' link template
 *
 * \@since 4.1.0
 */


var NgbPaginationPrevious =
/**
 * @param {?} templateRef
 */
function NgbPaginationPrevious(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationPrevious);

  this.templateRef = templateRef;
};

NgbPaginationPrevious.ɵfac = function NgbPaginationPrevious_Factory(t) {
  return new (t || NgbPaginationPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbPaginationPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPaginationPrevious,
  selectors: [["ng-template", "ngbPaginationPrevious", ""]]
});
/** @nocollapse */

NgbPaginationPrevious.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbPaginationPrevious]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */


var NgbPagination = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function NgbPagination(config) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPagination);

    this.pageCount = 0;
    this.pages = [];
    /**
     *  The current page.
     *
     *  Page numbers start with `1`.
     */

    this.page = 1;
    /**
     *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
     *
     *  Event payload is the number of the newly selected page.
     *
     *  Page numbers start with `1`.
     */

    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](true);
    this.disabled = config.disabled;
    this.boundaryLinks = config.boundaryLinks;
    this.directionLinks = config.directionLinks;
    this.ellipses = config.ellipses;
    this.maxSize = config.maxSize;
    this.pageSize = config.pageSize;
    this.rotate = config.rotate;
    this.size = config.size;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbPagination, [{
    key: "hasPrevious",
    value: function hasPrevious() {
      return this.page > 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "hasNext",
    value: function hasNext() {
      return this.page < this.pageCount;
    }
    /**
     * @return {?}
     */

  }, {
    key: "nextDisabled",
    value: function nextDisabled() {
      return !this.hasNext() || this.disabled;
    }
    /**
     * @return {?}
     */

  }, {
    key: "previousDisabled",
    value: function previousDisabled() {
      return !this.hasPrevious() || this.disabled;
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */

  }, {
    key: "selectPage",
    value: function selectPage(pageNumber) {
      this._updatePages(pageNumber);
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._updatePages(this.page);
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */

  }, {
    key: "isEllipsis",
    value: function isEllipsis(pageNumber) {
      return pageNumber === -1;
    }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     * @param {?} start
     * @param {?} end
     * @return {?}
     */

  }, {
    key: "_applyEllipses",
    value: function _applyEllipses(start, end) {
      if (this.ellipses) {
        if (start > 0) {
          if (start > 1) {
            this.pages.unshift(-1);
          }

          this.pages.unshift(1);
        }

        if (end < this.pageCount) {
          if (end < this.pageCount - 1) {
            this.pages.push(-1);
          }

          this.pages.push(this.pageCount);
        }
      }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @return {?}
     */

  }, {
    key: "_applyRotation",
    value: function _applyRotation() {
      /** @type {?} */
      var start = 0;
      /** @type {?} */

      var end = this.pageCount;
      /** @type {?} */

      var leftOffset = Math.floor(this.maxSize / 2);
      /** @type {?} */

      var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

      if (this.page <= leftOffset) {
        // very beginning, no rotation -> [0..maxSize]
        end = this.maxSize;
      } else if (this.pageCount - this.page < leftOffset) {
        // very end, no rotation -> [len-maxSize..len]
        start = this.pageCount - this.maxSize;
      } else {
        // rotate
        start = this.page - leftOffset - 1;
        end = this.page + rightOffset;
      }

      return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     * @return {?}
     */

  }, {
    key: "_applyPagination",
    value: function _applyPagination() {
      /** @type {?} */
      var page = Math.ceil(this.page / this.maxSize) - 1;
      /** @type {?} */

      var start = page * this.maxSize;
      /** @type {?} */

      var end = start + this.maxSize;
      return [start, end];
    }
    /**
     * @param {?} newPageNo
     * @return {?}
     */

  }, {
    key: "_setPageInRange",
    value: function _setPageInRange(newPageNo) {
      /** @type {?} */
      var prevPageNo = this.page;
      this.page = getValueInRange(newPageNo, this.pageCount, 1);

      if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
        this.pageChange.emit(this.page);
      }
    }
    /**
     * @param {?} newPage
     * @return {?}
     */

  }, {
    key: "_updatePages",
    value: function _updatePages(newPage) {
      this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

      if (!isNumber(this.pageCount)) {
        this.pageCount = 0;
      } // fill-in model needed to render pages


      this.pages.length = 0;

      for (var i = 1; i <= this.pageCount; i++) {
        this.pages.push(i);
      } // set page within 1..max range


      this._setPageInRange(newPage); // apply maxSize if necessary


      if (this.maxSize > 0 && this.pageCount > this.maxSize) {
        /** @type {?} */
        var start = 0;
        /** @type {?} */

        var end = this.pageCount; // either paginating or rotating page numbers

        if (this.rotate) {
          var _this$_applyRotation = this._applyRotation();

          var _this$_applyRotation2 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$_applyRotation, 2);

          start = _this$_applyRotation2[0];
          end = _this$_applyRotation2[1];
        } else {
          var _this$_applyPaginatio = this._applyPagination();

          var _this$_applyPaginatio2 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$_applyPaginatio, 2);

          start = _this$_applyPaginatio2[0];
          end = _this$_applyPaginatio2[1];
        }

        this.pages = this.pages.slice(start, end); // adding ellipses

        this._applyEllipses(start, end);
      }
    }
  }]);

  return NgbPagination;
}();

NgbPagination.ɵfac = function NgbPagination_Factory(t) {
  return new (t || NgbPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbPaginationConfig));
};

NgbPagination.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbPagination,
  selectors: [["ngb-pagination"]],
  contentQueries: function NgbPagination_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPaginationEllipsis, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPaginationFirst, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPaginationLast, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPaginationNext, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPaginationNumber, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbPaginationPrevious, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tplEllipsis = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tplFirst = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tplLast = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tplNext = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tplNumber = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tplPrevious = _t.first);
    }
  },
  hostAttrs: ["role", "navigation"],
  inputs: {
    page: "page",
    disabled: "disabled",
    boundaryLinks: "boundaryLinks",
    directionLinks: "directionLinks",
    ellipses: "ellipses",
    maxSize: "maxSize",
    pageSize: "pageSize",
    rotate: "rotate",
    size: "size",
    collectionSize: "collectionSize"
  },
  outputs: {
    pageChange: "pageChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  decls: 18,
  vars: 7,
  consts: function consts() {
    var i18n_26;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_first$$FESM2015_NG_BOOTSTRAP_JS__27 = goog.getMsg("\xAB\xAB");
      i18n_26 = MSG_EXTERNAL_ngb_pagination_first$$FESM2015_NG_BOOTSTRAP_JS__27;
    } else {
      i18n_26 = $localize(_templateObject12());
    }

    var i18n_28;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_previous$$FESM2015_NG_BOOTSTRAP_JS__29 = goog.getMsg("\xAB");
      i18n_28 = MSG_EXTERNAL_ngb_pagination_previous$$FESM2015_NG_BOOTSTRAP_JS__29;
    } else {
      i18n_28 = $localize(_templateObject13());
    }

    var i18n_30;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_next$$FESM2015_NG_BOOTSTRAP_JS__31 = goog.getMsg("\xBB");
      i18n_30 = MSG_EXTERNAL_ngb_pagination_next$$FESM2015_NG_BOOTSTRAP_JS__31;
    } else {
      i18n_30 = $localize(_templateObject14());
    }

    var i18n_32;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_last$$FESM2015_NG_BOOTSTRAP_JS__33 = goog.getMsg("\xBB\xBB");
      i18n_32 = MSG_EXTERNAL_ngb_pagination_last$$FESM2015_NG_BOOTSTRAP_JS__33;
    } else {
      i18n_32 = $localize(_templateObject15());
    }

    var i18n_34;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_first_aria$$FESM2015_NG_BOOTSTRAP_JS__35 = goog.getMsg("First");
      i18n_34 = MSG_EXTERNAL_ngb_pagination_first_aria$$FESM2015_NG_BOOTSTRAP_JS__35;
    } else {
      i18n_34 = $localize(_templateObject16());
    }

    var i18n_37;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_previous_aria$$FESM2015_NG_BOOTSTRAP_JS__38 = goog.getMsg("Previous");
      i18n_37 = MSG_EXTERNAL_ngb_pagination_previous_aria$$FESM2015_NG_BOOTSTRAP_JS__38;
    } else {
      i18n_37 = $localize(_templateObject17());
    }

    var i18n_42;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_next_aria$$FESM2015_NG_BOOTSTRAP_JS__43 = goog.getMsg("Next");
      i18n_42 = MSG_EXTERNAL_ngb_pagination_next_aria$$FESM2015_NG_BOOTSTRAP_JS__43;
    } else {
      i18n_42 = $localize(_templateObject18());
    }

    var i18n_44;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_pagination_last_aria$$FESM2015_NG_BOOTSTRAP_JS__45 = goog.getMsg("Last");
      i18n_44 = MSG_EXTERNAL_ngb_pagination_last_aria$$FESM2015_NG_BOOTSTRAP_JS__45;
    } else {
      i18n_44 = $localize(_templateObject19());
    }

    return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["class", "page-item", 3, "disabled", 4, "ngIf"], ["class", "page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], i18n_26, i18n_28, i18n_30, i18n_32, ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], [1, "page-item"], ["href", "", 1, "page-link", 3, "click", 6, "aria-label"], ["aria-label", i18n_34], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", i18n_37], ["class", "page-link", 4, "ngIf"], ["class", "page-link", "href", "", 3, "click", 4, "ngIf"], [1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_42], ["aria-label", i18n_44]];
  },
  template: function NgbPagination_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbPagination_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbPagination_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, NgbPagination_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, NgbPagination_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, NgbPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, NgbPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, NgbPagination_li_13_Template, 4, 8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, NgbPagination_li_14_Template, 4, 7, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, NgbPagination_li_15_Template, 3, 6, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, NgbPagination_li_16_Template, 4, 8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, NgbPagination_li_17_Template, 4, 8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("pagination" + (ctx.size ? " pagination-" + ctx.size : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbPagination.ctorParameters = function () {
  return [{
    type: NgbPaginationConfig
  }];
};

NgbPagination.propDecorators = {
  tplEllipsis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbPaginationEllipsis]
  }],
  tplFirst: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbPaginationFirst]
  }],
  tplLast: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbPaginationLast]
  }],
  tplNext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbPaginationNext]
  }],
  tplNumber: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbPaginationNumber]
  }],
  tplPrevious: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [NgbPaginationPrevious]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  boundaryLinks: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  directionLinks: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  ellipses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  rotate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  collectionSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  maxSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  pageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  pageChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPagination, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-pagination',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      host: {
        'role': 'navigation'
      },
      template: "\n    <ng-template #first><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.first\">&laquo;&laquo;</span></ng-template>\n    <ng-template #previous><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.previous\">&laquo;</span></ng-template>\n    <ng-template #next><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.next\">&raquo;</span></ng-template>\n    <ng-template #last><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.last\">&raquo;&raquo;</span></ng-template>\n    <ng-template #ellipsis>...</ng-template>\n    <ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\n      {{ page }}\n      <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\n    </ng-template>\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"First\" i18n-aria-label=\"@@ngb.pagination.first-aria\" class=\"page-link\" href\n          (click)=\"selectPage(1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"Previous\" i18n-aria-label=\"@@ngb.pagination.previous-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page-1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled()}\"></ng-template>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">\n          <ng-template [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\n                       [ngTemplateOutletContext]=\"{disabled: true, currentPage: page}\"></ng-template>\n        </a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"selectPage(pageNumber); $event.preventDefault()\">\n          <ng-template [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\n                       [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pageNumber, currentPage: page}\"></ng-template>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Next\" i18n-aria-label=\"@@ngb.pagination.next-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page+1); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Last\" i18n-aria-label=\"@@ngb.pagination.last-aria\" class=\"page-link\" href\n          (click)=\"selectPage(pageCount); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n    </ul>\n  "
    }]
  }], function () {
    return [{
      type: NgbPaginationConfig
    }];
  }, {
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    boundaryLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    ellipses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    rotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    tplEllipsis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbPaginationEllipsis]
    }],
    tplFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbPaginationFirst]
    }],
    tplLast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbPaginationLast]
    }],
    tplNext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbPaginationNext]
    }],
    tplNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbPaginationNumber]
    }],
    tplPrevious: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [NgbPaginationPrevious]
    }],
    collectionSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var DIRECTIVES = [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious];

var NgbPaginationModule = /*#__PURE__*/function () {
  function NgbPaginationModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPaginationModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbPaginationModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbPaginationModule
      };
    }
  }]);

  return NgbPaginationModule;
}();

NgbPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbPaginationModule
});
NgbPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbPaginationModule_Factory(t) {
    return new (t || NgbPaginationModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbPaginationModule, {
    declarations: function declarations() {
      return [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: DIRECTIVES,
      exports: DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var Trigger = /*#__PURE__*/function () {
  /**
   * @param {?} open
   * @param {?=} close
   */
  function Trigger(open, close) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Trigger);

    this.open = open;
    this.close = close;

    if (!close) {
      this.close = open;
    }
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Trigger, [{
    key: "isManual",
    value: function isManual() {
      return this.open === 'manual' || this.close === 'manual';
    }
  }]);

  return Trigger;
}();
/** @type {?} */


var DEFAULT_ALIASES = {
  'hover': ['mouseenter', 'mouseleave'],
  'focus': ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */

function parseTriggers(triggers) {
  var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

  /** @type {?} */
  var trimmedTriggers = (triggers || '').trim();

  if (trimmedTriggers.length === 0) {
    return [];
  }
  /** @type {?} */


  var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) {
    return trigger.split(':');
  }).map(function (triggerPair) {
    /** @type {?} */
    var alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  /** @type {?} */

  var manualTriggers = parsedTriggers.filter(function (triggerPair) {
    return triggerPair.isManual();
  });

  if (manualTriggers.length > 1) {
    throw 'Triggers parse error: only one manual trigger is allowed';
  }

  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
  }

  return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {?} triggers
 * @param {?} isOpenedFn
 * @return {?}
 */


function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_12__["Observable"](function (subscriber) {
    /** @type {?} */
    var listeners = [];
    /** @type {?} */

    var openFn = function openFn() {
      return subscriber.next(true);
    };
    /** @type {?} */


    var closeFn = function closeFn() {
      return subscriber.next(false);
    };
    /** @type {?} */


    var toggleFn = function toggleFn() {
      return subscriber.next(!isOpenedFn());
    };

    triggers.forEach(function (trigger) {
      if (trigger.open === trigger.close) {
        listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
      } else {
        listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
      }
    });
    return function () {
      listeners.forEach(function (unsubscribeFn) {
        return unsubscribeFn();
      });
    };
  });
}
/** @type {?} */


var delayOrNoop = function delayOrNoop(time) {
  return time > 0 ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(time) : function (a) {
    return a;
  };
};
/**
 * @param {?} openDelay
 * @param {?} closeDelay
 * @param {?} isOpenedFn
 * @return {?}
 */


function triggerDelay(openDelay, closeDelay, isOpenedFn) {
  return function (input$) {
    /** @type {?} */
    var pending = null;
    /** @type {?} */

    var filteredInput$ = input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (open) {
      return {
        open: open
      };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (event) {
      /** @type {?} */
      var currentlyOpen = isOpenedFn();

      if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
        pending = event;
        return true;
      }

      if (pending && pending.open !== event.open) {
        pending = null;
      }

      return false;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["share"])());
    /** @type {?} */

    var delayedOpen$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (event) {
      return event.open;
    }), delayOrNoop(openDelay));
    /** @type {?} */

    var delayedClose$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (event) {
      return !event.open;
    }), delayOrNoop(closeDelay));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(delayedOpen$, delayedClose$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (event) {
      if (event === pending) {
        pending = null;
        return event.open !== isOpenedFn();
      }

      return false;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (event) {
      return event.open;
    }));
  };
}
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {?} triggers
 * @param {?} isOpenedFn
 * @param {?} openFn
 * @param {?} closeFn
 * @param {?=} openDelay
 * @param {?=} closeDelay
 * @return {?}
 */


function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn) {
  var openDelay = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var closeDelay = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

  /** @type {?} */
  var parsedTriggers = parseTriggers(triggers);

  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return function () {};
  }
  /** @type {?} */


  var subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn).pipe(triggerDelay(openDelay, closeDelay, isOpenedFn)).subscribe(function (open) {
    return open ? openFn() : closeFn();
  });
  return function () {
    return subscription.unsubscribe();
  };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */


var NgbPopoverConfig = function NgbPopoverConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPopoverConfig);

  this.autoClose = true;
  this.placement = 'auto';
  this.triggers = 'click';
  this.disablePopover = false;
  this.openDelay = 0;
  this.closeDelay = 0;
};

NgbPopoverConfig.ɵfac = function NgbPopoverConfig_Factory(t) {
  return new (t || NgbPopoverConfig)();
};

NgbPopoverConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbPopoverConfig,
  factory: NgbPopoverConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbPopoverConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbPopoverConfig_Factory() {
    return new NgbPopoverConfig();
  },
  token: NgbPopoverConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPopoverConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var nextId$3 = 0;

var NgbPopoverWindow = /*#__PURE__*/function () {
  function NgbPopoverWindow() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPopoverWindow);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbPopoverWindow, [{
    key: "isTitleTemplate",

    /**
     * @return {?}
     */
    value: function isTitleTemplate() {
      return this.title instanceof _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"];
    }
  }]);

  return NgbPopoverWindow;
}();

NgbPopoverWindow.ɵfac = function NgbPopoverWindow_Factory(t) {
  return new (t || NgbPopoverWindow)();
};

NgbPopoverWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbPopoverWindow,
  selectors: [["ngb-popover-window"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 3,
  hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
    }
  },
  inputs: {
    title: "title",
    id: "id",
    popoverClass: "popoverClass",
    context: "context"
  },
  ngContentSelectors: _c3,
  decls: 4,
  vars: 1,
  consts: [[1, "arrow"], ["class", "popover-header", 4, "ngIf"], [1, "popover-body"], [1, "popover-header"], ["simpleTitle", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbPopoverWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbPopoverWindow_h3_1_Template, 4, 2, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.title != null);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"]],
  styles: ["ngb-popover-window.bs-popover-bottom .arrow,ngb-popover-window.bs-popover-top .arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left .arrow,ngb-popover-window.bs-popover-top-left .arrow{left:2em}ngb-popover-window.bs-popover-bottom-right .arrow,ngb-popover-window.bs-popover-top-right .arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left .arrow,ngb-popover-window.bs-popover-right .arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top .arrow,ngb-popover-window.bs-popover-right-top .arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom .arrow,ngb-popover-window.bs-popover-right-bottom .arrow{top:auto;bottom:.7em}"],
  encapsulation: 2,
  changeDetection: 0
});
NgbPopoverWindow.propDecorators = {
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  popoverClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  context: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPopoverWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-popover-window',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      host: {
        '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")',
        'role': 'tooltip',
        '[id]': 'id'
      },
      template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\" *ngIf=\"title != null\">\n      <ng-template #simpleTitle>{{title}}</ng-template>\n      <ng-template [ngTemplateOutlet]=\"isTitleTemplate() ? title : simpleTitle\" [ngTemplateOutletContext]=\"context\"></ng-template>\n    </h3>\n    <div class=\"popover-body\"><ng-content></ng-content></div>",
      styles: ["ngb-popover-window.bs-popover-bottom .arrow,ngb-popover-window.bs-popover-top .arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left .arrow,ngb-popover-window.bs-popover-top-left .arrow{left:2em}ngb-popover-window.bs-popover-bottom-right .arrow,ngb-popover-window.bs-popover-top-right .arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left .arrow,ngb-popover-window.bs-popover-right .arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top .arrow,ngb-popover-window.bs-popover-right-top .arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom .arrow,ngb-popover-window.bs-popover-right-bottom .arrow{top:auto;bottom:.7em}"]
    }]
  }], null, {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    popoverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * A lightweight and extensible directive for fancy popover creation.
 */


var NgbPopover = /*#__PURE__*/function () {
  /**
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} injector
   * @param {?} componentFactoryResolver
   * @param {?} viewContainerRef
   * @param {?} config
   * @param {?} _ngZone
   * @param {?} _document
   * @param {?} _changeDetector
   */
  function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector) {
    var _this27 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPopover);

    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._document = _document;
    this._changeDetector = _changeDetector;
    /**
     * An event emitted when the popover is shown. Contains no payload.
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /**
     * An event emitted when the popover is hidden. Contains no payload.
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this._ngbPopoverWindowId = "ngb-popover-".concat(nextId$3++);
    this.autoClose = config.autoClose;
    this.placement = config.placement;
    this.triggers = config.triggers;
    this.container = config.container;
    this.disablePopover = config.disablePopover;
    this.popoverClass = config.popoverClass;
    this.openDelay = config.openDelay;
    this.closeDelay = config.closeDelay;
    this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
    this._zoneSubscription = _ngZone.onStable.subscribe(function () {
      if (_this27._windowRef) {
        positionElements(_this27._elementRef.nativeElement, _this27._windowRef.location.nativeElement, _this27.placement, _this27.container === 'body', 'bs-popover');
      }
    });
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbPopover, [{
    key: "_isDisabled",
    value: function _isDisabled() {
      if (this.disablePopover) {
        return true;
      }

      if (!this.ngbPopover && !this.popoverTitle) {
        return true;
      }

      return false;
    }
    /**
     * Opens the popover.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the popover template when it is created.
     * @param {?=} context
     * @return {?}
     */

  }, {
    key: "open",
    value: function open(context) {
      var _this28 = this;

      if (!this._windowRef && !this._isDisabled()) {
        this._windowRef = this._popupService.open(this.ngbPopover, context);
        this._windowRef.instance.title = this.popoverTitle;
        this._windowRef.instance.context = context;
        this._windowRef.instance.popoverClass = this.popoverClass;
        this._windowRef.instance.id = this._ngbPopoverWindowId;

        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);

        if (this.container === 'body') {
          this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
        } // We need to detect changes, because we don't know where .open() might be called from.
        // Ex. opening popover from one of lifecycle hooks that run after the CD
        // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception


        this._windowRef.changeDetectorRef.detectChanges(); // We need to mark for check, because popover won't work inside the OnPush component.
        // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
        // inside the template of an OnPush component and we change the popover from
        // open -> closed, the expression in question won't be updated unless we explicitly
        // mark the parent component to be checked.


        this._windowRef.changeDetectorRef.markForCheck();

        ngbAutoClose(this._ngZone, this._document, this.autoClose, function () {
          return _this28.close();
        }, this.hidden, [this._windowRef.location.nativeElement]);
        this.shown.emit();
      }
    }
    /**
     * Closes the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      if (this._windowRef) {
        this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');

        this._popupService.close();

        this._windowRef = null;
        this.hidden.emit();

        this._changeDetector.markForCheck();
      }
    }
    /**
     * Toggles the popover.
     *
     * This is considered to be a "manual" triggering of the popover.
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this._windowRef) {
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Returns `true`, if the popover is currently shown.
     * @return {?}
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this._windowRef != null;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // close popover if title and content become empty, or disablePopover set to true
      if ((changes['ngbPopover'] || changes['popoverTitle'] || changes['disablePopover']) && this._isDisabled()) {
        this.close();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.close(); // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
      // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199

      if (this._unregisterListenersFn) {
        this._unregisterListenersFn();
      }

      this._zoneSubscription.unsubscribe();
    }
  }]);

  return NgbPopover;
}();

NgbPopover.ɵfac = function NgbPopover_Factory(t) {
  return new (t || NgbPopover)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbPopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbPopover.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbPopover,
  selectors: [["", "ngbPopover", ""]],
  inputs: {
    autoClose: "autoClose",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    disablePopover: "disablePopover",
    popoverClass: "popoverClass",
    openDelay: "openDelay",
    closeDelay: "closeDelay",
    ngbPopover: "ngbPopover",
    popoverTitle: "popoverTitle"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbPopover"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

NgbPopover.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
  }, {
    type: NgbPopoverConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbPopover.propDecorators = {
  autoClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  ngbPopover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  popoverTitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disablePopover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  popoverClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  openDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  closeDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  shown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  hidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPopover, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbPopover]',
      exportAs: 'ngbPopover'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
    }, {
      type: NgbPopoverConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    disablePopover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    popoverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    openDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    closeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    ngbPopover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    popoverTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbPopoverModule = /*#__PURE__*/function () {
  function NgbPopoverModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbPopoverModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbPopoverModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbPopoverModule
      };
    }
  }]);

  return NgbPopoverModule;
}();

NgbPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbPopoverModule
});
NgbPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbPopoverModule_Factory(t) {
    return new (t || NgbPopoverModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbPopoverModule, {
    declarations: function declarations() {
      return [NgbPopover, NgbPopoverWindow];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbPopover];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbPopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbPopover, NgbPopoverWindow],
      exports: [NgbPopover],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
      entryComponents: [NgbPopoverWindow]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */


var NgbProgressbarConfig = function NgbProgressbarConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbProgressbarConfig);

  this.max = 100;
  this.animated = false;
  this.striped = false;
  this.showValue = false;
};

NgbProgressbarConfig.ɵfac = function NgbProgressbarConfig_Factory(t) {
  return new (t || NgbProgressbarConfig)();
};

NgbProgressbarConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbProgressbarConfig,
  factory: NgbProgressbarConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbProgressbarConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbProgressbarConfig_Factory() {
    return new NgbProgressbarConfig();
  },
  token: NgbProgressbarConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbProgressbarConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A directive that provides feedback on the progress of a workflow or an action.
 */


var NgbProgressbar = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function NgbProgressbar(config) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbProgressbar);

    /**
     * The current value for the progress bar.
     *
     * Should be in the `[0, max]` range.
     */
    this.value = 0;
    this.max = config.max;
    this.animated = config.animated;
    this.striped = config.striped;
    this.type = config.type;
    this.showValue = config.showValue;
    this.height = config.height;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbProgressbar, [{
    key: "getValue",
    value: function getValue() {
      return getValueInRange(this.value, this.max);
    }
    /**
     * @return {?}
     */

  }, {
    key: "getPercentValue",
    value: function getPercentValue() {
      return 100 * this.getValue() / this.max;
    }
  }]);

  return NgbProgressbar;
}();

NgbProgressbar.ɵfac = function NgbProgressbar_Factory(t) {
  return new (t || NgbProgressbar)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbProgressbarConfig));
};

NgbProgressbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbProgressbar,
  selectors: [["ngb-progressbar"]],
  inputs: {
    value: "value",
    max: "max",
    animated: "animated",
    striped: "striped",
    type: "type",
    showValue: "showValue",
    height: "height"
  },
  ngContentSelectors: _c3,
  decls: 4,
  vars: 12,
  consts: function consts() {
    var i18n_46;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_progressbar_value$$FESM2015_NG_BOOTSTRAP_JS__47 = goog.getMsg("{$interpolation}%", {
        "interpolation": "\uFFFD0\uFFFD"
      });
      i18n_46 = MSG_EXTERNAL_ngb_progressbar_value$$FESM2015_NG_BOOTSTRAP_JS__47;
    } else {
      i18n_46 = $localize(_templateObject20(), "\uFFFD0\uFFFD");
    }

    return [[1, "progress"], ["role", "progressbar", "aria-valuemin", "0"], [4, "ngIf"], i18n_46];
  },
  template: function NgbProgressbar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbProgressbar_span_2_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("height", ctx.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate3"]("progress-bar", ctx.type ? " bg-" + ctx.type : "", "", ctx.animated ? " progress-bar-animated" : "", "", ctx.striped ? " progress-bar-striped" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", ctx.getPercentValue(), "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showValue);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbProgressbar.ctorParameters = function () {
  return [{
    type: NgbProgressbarConfig
  }];
};

NgbProgressbar.propDecorators = {
  max: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  animated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  striped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  height: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbProgressbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-progressbar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\" i18n=\"@@ngb.progressbar.value\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: NgbProgressbarConfig
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    animated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    striped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbProgressbarModule = /*#__PURE__*/function () {
  function NgbProgressbarModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbProgressbarModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbProgressbarModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbProgressbarModule
      };
    }
  }]);

  return NgbProgressbarModule;
}();

NgbProgressbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbProgressbarModule
});
NgbProgressbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbProgressbarModule_Factory(t) {
    return new (t || NgbProgressbarModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbProgressbarModule, {
    declarations: function declarations() {
      return [NgbProgressbar];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbProgressbar];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbProgressbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbProgressbar],
      exports: [NgbProgressbar],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */


var NgbRatingConfig = function NgbRatingConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbRatingConfig);

  this.max = 10;
  this.readonly = false;
  this.resettable = false;
};

NgbRatingConfig.ɵfac = function NgbRatingConfig_Factory(t) {
  return new (t || NgbRatingConfig)();
};

NgbRatingConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbRatingConfig,
  factory: NgbRatingConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbRatingConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbRatingConfig_Factory() {
    return new NgbRatingConfig();
  },
  token: NgbRatingConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbRatingConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_RATING_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbRating;
  }),
  multi: true
};
/**
 * A directive that helps visualising and interacting with a star rating bar.
 */

var NgbRating = /*#__PURE__*/function () {
  /**
   * @param {?} config
   * @param {?} _changeDetectorRef
   */
  function NgbRating(config, _changeDetectorRef) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbRating);

    this._changeDetectorRef = _changeDetectorRef;
    this.contexts = [];
    this.disabled = false;
    /**
     * An event emitted when the user is hovering over a given rating.
     *
     * Event payload equals to the rating being hovered over.
     */

    this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /**
     * An event emitted when the user stops hovering over a given rating.
     *
     * Event payload equals to the rating of the last item being hovered over.
     */

    this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /**
     * An event emitted when the user selects a new rating.
     *
     * Event payload equals to the newly selected rating.
     */

    this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](true);

    this.onChange = function (_) {};

    this.onTouched = function () {};

    this.max = config.max;
    this.readonly = config.readonly;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbRating, [{
    key: "ariaValueText",
    value: function ariaValueText() {
      return "".concat(this.nextRate, " out of ").concat(this.max);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "enter",
    value: function enter(value) {
      if (!this.readonly && !this.disabled) {
        this._updateState(value);
      }

      this.hover.emit(value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.update(this.resettable && this.rate === value ? 0 : value);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      // tslint:disable-next-line:deprecation
      switch (event.which) {
        case Key.ArrowDown:
        case Key.ArrowLeft:
          this.update(this.rate - 1);
          break;

        case Key.ArrowUp:
        case Key.ArrowRight:
          this.update(this.rate + 1);
          break;

        case Key.Home:
          this.update(0);
          break;

        case Key.End:
          this.update(this.max);
          break;

        default:
          return;
      } // note 'return' in default case


      event.preventDefault();
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['rate']) {
        this.update(this.rate);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.contexts = Array.from({
        length: this.max
      }, function (v, k) {
        return {
          fill: 0,
          index: k
        };
      });

      this._updateState(this.rate);
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @return {?}
     */

  }, {
    key: "reset",
    value: function reset() {
      this.leave.emit(this.nextRate);

      this._updateState(this.rate);
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */

  }, {
    key: "update",
    value: function update(value) {
      var internalChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      /** @type {?} */
      var newRate = getValueInRange(value, this.max, 0);

      if (!this.readonly && !this.disabled && this.rate !== newRate) {
        this.rate = newRate;
        this.rateChange.emit(this.rate);
      }

      if (internalChange) {
        this.onChange(this.rate);
        this.onTouched();
      }

      this._updateState(this.rate);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.update(value, false);

      this._changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "_getFillValue",
    value: function _getFillValue(index) {
      /** @type {?} */
      var diff = this.nextRate - index;

      if (diff >= 1) {
        return 100;
      }

      if (diff < 1 && diff > 0) {
        return parseInt((diff * 100).toFixed(2), 10);
      }

      return 0;
    }
    /**
     * @param {?} nextValue
     * @return {?}
     */

  }, {
    key: "_updateState",
    value: function _updateState(nextValue) {
      var _this29 = this;

      this.nextRate = nextValue;
      this.contexts.forEach(function (context, index) {
        return context.fill = _this29._getFillValue(index);
      });
    }
  }]);

  return NgbRating;
}();

NgbRating.ɵfac = function NgbRating_Factory(t) {
  return new (t || NgbRating)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbRatingConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbRating.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbRating,
  selectors: [["ngb-rating"]],
  contentQueries: function NgbRating_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.starTemplateFromContent = _t.first);
    }
  },
  hostAttrs: ["tabindex", "0", "role", "slider", "aria-valuemin", "0", 1, "d-inline-flex"],
  hostVars: 4,
  hostBindings: function NgbRating_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("blur", function NgbRating_blur_HostBindingHandler() {
        return ctx.handleBlur();
      })("keydown", function NgbRating_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      })("mouseleave", function NgbRating_mouseleave_HostBindingHandler() {
        return ctx.reset();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-valuemax", ctx.max)("aria-valuenow", ctx.nextRate)("aria-valuetext", ctx.ariaValueText())("aria-disabled", ctx.readonly ? true : null);
    }
  },
  inputs: {
    max: "max",
    readonly: "readonly",
    rate: "rate",
    resettable: "resettable",
    starTemplate: "starTemplate"
  },
  outputs: {
    hover: "hover",
    leave: "leave",
    rateChange: "rateChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([NGB_RATING_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 1,
  consts: [["t", ""], ["ngFor", "", 3, "ngForOf"], [1, "sr-only"], [3, "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbRating_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbRating_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbRating_ng_template_2_Template, 4, 5, "ng-template", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.contexts);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"]],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

NgbRating.ctorParameters = function () {
  return [{
    type: NgbRatingConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbRating.propDecorators = {
  max: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  rate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  resettable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  starTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  starTemplateFromContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]]
  }],
  hover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  leave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  rateChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbRating, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-rating',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      host: {
        'class': 'd-inline-flex',
        'tabindex': '0',
        'role': 'slider',
        'aria-valuemin': '0',
        '[attr.aria-valuemax]': 'max',
        '[attr.aria-valuenow]': 'nextRate',
        '[attr.aria-valuetext]': 'ariaValueText()',
        '[attr.aria-disabled]': 'readonly ? true : null',
        '(blur)': 'handleBlur()',
        '(keydown)': 'handleKeyDown($event)',
        '(mouseleave)': 'reset()'
      },
      template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || starTemplateFromContent || t\" [ngTemplateOutletContext]=\"contexts[index]\">\n        </ng-template>\n      </span>\n    </ng-template>\n  ",
      providers: [NGB_RATING_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: NgbRatingConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    hover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    leave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    rateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    rate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    resettable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    starTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    starTemplateFromContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbRatingModule = /*#__PURE__*/function () {
  function NgbRatingModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbRatingModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbRatingModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbRatingModule
      };
    }
  }]);

  return NgbRatingModule;
}();

NgbRatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbRatingModule
});
NgbRatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbRatingModule_Factory(t) {
    return new (t || NgbRatingModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbRatingModule, {
    declarations: function declarations() {
      return [NgbRating];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbRating];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbRatingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbRating],
      exports: [NgbRating],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbTabset`](#/components/tabset/api#NgbTabset) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */


var NgbTabsetConfig = function NgbTabsetConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTabsetConfig);

  this.justify = 'start';
  this.orientation = 'horizontal';
  this.type = 'tabs';
};

NgbTabsetConfig.ɵfac = function NgbTabsetConfig_Factory(t) {
  return new (t || NgbTabsetConfig)();
};

NgbTabsetConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbTabsetConfig,
  factory: NgbTabsetConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbTabsetConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbTabsetConfig_Factory() {
    return new NgbTabsetConfig();
  },
  token: NgbTabsetConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTabsetConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var nextId$4 = 0;
/**
 * A directive to wrap tab titles that need to contain HTML markup or other directives.
 *
 * Alternatively you could use the `NgbTab.title` input for string titles.
 */

var NgbTabTitle =
/**
 * @param {?} templateRef
 */
function NgbTabTitle(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTabTitle);

  this.templateRef = templateRef;
};

NgbTabTitle.ɵfac = function NgbTabTitle_Factory(t) {
  return new (t || NgbTabTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbTabTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbTabTitle,
  selectors: [["ng-template", "ngbTabTitle", ""]]
});
/** @nocollapse */

NgbTabTitle.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTabTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbTabTitle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive to wrap content to be displayed in a tab.
 */


var NgbTabContent =
/**
 * @param {?} templateRef
 */
function NgbTabContent(templateRef) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTabContent);

  this.templateRef = templateRef;
};

NgbTabContent.ɵfac = function NgbTabContent_Factory(t) {
  return new (t || NgbTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]));
};

NgbTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbTabContent,
  selectors: [["ng-template", "ngbTabContent", ""]]
});
/** @nocollapse */

NgbTabContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTabContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ng-template[ngbTabContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }];
  }, null);
})();
/**
 * A directive representing an individual tab.
 */


var NgbTab = /*#__PURE__*/function () {
  function NgbTab() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTab);

    /**
     * The tab identifier.
     *
     * Must be unique for the entire document for proper accessibility support.
     */
    this.id = "ngb-tab-".concat(nextId$4++);
    /**
     * If `true`, the current tab is disabled and can't be toggled.
     */

    this.disabled = false;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTab, [{
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
      // only @ContentChildren allows us to specify the {descendants: false} option.
      // Without {descendants: false} we are hitting bugs described in:
      // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
      this.titleTpl = this.titleTpls.first;
      this.contentTpl = this.contentTpls.first;
    }
  }]);

  return NgbTab;
}();

NgbTab.ɵfac = function NgbTab_Factory(t) {
  return new (t || NgbTab)();
};

NgbTab.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbTab,
  selectors: [["ngb-tab"]],
  contentQueries: function NgbTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbTabTitle, false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbTabContent, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.titleTpls = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.contentTpls = _t);
    }
  },
  inputs: {
    id: "id",
    disabled: "disabled",
    title: "title"
  }
});
NgbTab.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  titleTpls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbTabTitle, {
      descendants: false
    }]
  }],
  contentTpls: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbTabContent, {
      descendants: false
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'ngb-tab'
    }]
  }], function () {
    return [];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    titleTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbTabTitle, {
        descendants: false
      }]
    }],
    contentTpls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbTabContent, {
        descendants: false
      }]
    }]
  });
})();
/**
 * A component that makes it easy to create tabbed interface.
 */


var NgbTabset = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function NgbTabset(config) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTabset);

    /**
     * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
     */
    this.destroyOnHide = true;
    /**
     * A tab change event emitted right before the tab change happens.
     *
     * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
     */

    this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this.type = config.type;
    this.justify = config.justify;
    this.orientation = config.orientation;
  }
  /**
   * The horizontal alignment of the tabs with flexbox utilities.
   * @param {?} className
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTabset, [{
    key: "select",

    /**
     * Selects the tab with the given id and shows its associated content panel.
     *
     * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
     * hidden depending on the `destroyOnHide` value.
     * @param {?} tabId
     * @return {?}
     */
    value: function select(tabId) {
      /** @type {?} */
      var selectedTab = this._getTabById(tabId);

      if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
        /** @type {?} */
        var defaultPrevented = false;
        this.tabChange.emit({
          activeId: this.activeId,
          nextId: selectedTab.id,
          preventDefault: function preventDefault() {
            defaultPrevented = true;
          }
        });

        if (!defaultPrevented) {
          this.activeId = selectedTab.id;
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      // auto-correct activeId that might have been set incorrectly as input

      /** @type {?} */
      var activeTab = this._getTabById(this.activeId);

      this.activeId = activeTab ? activeTab.id : this.tabs.length ? this.tabs.first.id : null;
    }
    /**
     * @param {?} id
     * @return {?}
     */

  }, {
    key: "_getTabById",
    value: function _getTabById(id) {
      /** @type {?} */
      var tabsWithId = this.tabs.filter(function (tab) {
        return tab.id === id;
      });
      return tabsWithId.length ? tabsWithId[0] : null;
    }
  }, {
    key: "justify",
    set: function set(className) {
      if (className === 'fill' || className === 'justified') {
        this.justifyClass = "nav-".concat(className);
      } else {
        this.justifyClass = "justify-content-".concat(className);
      }
    }
  }]);

  return NgbTabset;
}();

NgbTabset.ɵfac = function NgbTabset_Factory(t) {
  return new (t || NgbTabset)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbTabsetConfig));
};

NgbTabset.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbTabset,
  selectors: [["ngb-tabset"]],
  contentQueries: function NgbTabset_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, NgbTab, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    }
  },
  inputs: {
    destroyOnHide: "destroyOnHide",
    type: "type",
    justify: "justify",
    orientation: "orientation",
    activeId: "activeId"
  },
  outputs: {
    tabChange: "tabChange"
  },
  exportAs: ["ngbTabset"],
  decls: 4,
  vars: 4,
  consts: [["role", "tablist"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["ngFor", "", 3, "ngForOf"], [1, "nav-item"], ["href", "", "role", "tab", 1, "nav-link", 3, "id", "click"], [3, "ngTemplateOutlet"], ["role", "tabpanel", 3, "class", "id", 4, "ngIf"], ["role", "tabpanel", 3, "id"]],
  template: function NgbTabset_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, NgbTabset_li_1_Template, 4, 11, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbTabset_ng_template_3_Template, 1, 1, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("nav nav-" + ctx.type + (ctx.orientation == "horizontal" ? " " + ctx.justifyClass : " flex-column"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.tabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.tabs);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
  encapsulation: 2
});
/** @nocollapse */

NgbTabset.ctorParameters = function () {
  return [{
    type: NgbTabsetConfig
  }];
};

NgbTabset.propDecorators = {
  tabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [NgbTab]
  }],
  activeId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  destroyOnHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  justify: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  orientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  tabChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTabset, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-tabset',
      exportAs: 'ngbTabset',
      template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"select(tab.id); $event.preventDefault()\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: NgbTabsetConfig
    }];
  }, {
    destroyOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    tabChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    justify: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    activeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [NgbTab]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];

var NgbTabsetModule = /*#__PURE__*/function () {
  function NgbTabsetModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTabsetModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTabsetModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbTabsetModule
      };
    }
  }]);

  return NgbTabsetModule;
}();

NgbTabsetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbTabsetModule
});
NgbTabsetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbTabsetModule_Factory(t) {
    return new (t || NgbTabsetModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbTabsetModule, {
    declarations: function declarations() {
      return [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTabsetModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: NGB_TABSET_DIRECTIVES,
      exports: NGB_TABSET_DIRECTIVES,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbTime = /*#__PURE__*/function () {
  /**
   * @param {?=} hour
   * @param {?=} minute
   * @param {?=} second
   */
  function NgbTime(hour, minute, second) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTime);

    this.hour = toInteger(hour);
    this.minute = toInteger(minute);
    this.second = toInteger(second);
  }
  /**
   * @param {?=} step
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTime, [{
    key: "changeHour",
    value: function changeHour() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    }
    /**
     * @param {?} hour
     * @return {?}
     */

  }, {
    key: "updateHour",
    value: function updateHour(hour) {
      if (isNumber(hour)) {
        this.hour = (hour < 0 ? 24 + hour : hour) % 24;
      } else {
        this.hour = NaN;
      }
    }
    /**
     * @param {?=} step
     * @return {?}
     */

  }, {
    key: "changeMinute",
    value: function changeMinute() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    }
    /**
     * @param {?} minute
     * @return {?}
     */

  }, {
    key: "updateMinute",
    value: function updateMinute(minute) {
      if (isNumber(minute)) {
        this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
        this.changeHour(Math.floor(minute / 60));
      } else {
        this.minute = NaN;
      }
    }
    /**
     * @param {?=} step
     * @return {?}
     */

  }, {
    key: "changeSecond",
    value: function changeSecond() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    }
    /**
     * @param {?} second
     * @return {?}
     */

  }, {
    key: "updateSecond",
    value: function updateSecond(second) {
      if (isNumber(second)) {
        this.second = second < 0 ? 60 + second % 60 : second % 60;
        this.changeMinute(Math.floor(second / 60));
      } else {
        this.second = NaN;
      }
    }
    /**
     * @param {?=} checkSecs
     * @return {?}
     */

  }, {
    key: "isValid",
    value: function isValid() {
      var checkSecs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
    }
    /**
     * @return {?}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.hour || 0, ":").concat(this.minute || 0, ":").concat(this.second || 0);
    }
  }]);

  return NgbTime;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */


var NgbTimepickerConfig = function NgbTimepickerConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTimepickerConfig);

  this.meridian = false;
  this.spinners = true;
  this.seconds = false;
  this.hourStep = 1;
  this.minuteStep = 1;
  this.secondStep = 1;
  this.disabled = false;
  this.readonlyInputs = false;
  this.size = 'medium';
};

NgbTimepickerConfig.ɵfac = function NgbTimepickerConfig_Factory(t) {
  return new (t || NgbTimepickerConfig)();
};

NgbTimepickerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbTimepickerConfig,
  factory: NgbTimepickerConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbTimepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbTimepickerConfig_Factory() {
    return new NgbTimepickerConfig();
  },
  token: NgbTimepickerConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTimepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @return {?}
 */


function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
  return new NgbTimeStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
 * any provided user time model `T`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding timepicker to a form control,
 * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
 *
 * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
 *
 * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
 *
 * \@since 2.2.0
 * @abstract
 * @template T
 */


var NgbTimeAdapter = function NgbTimeAdapter() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTimeAdapter);
};

NgbTimeAdapter.ɵfac = function NgbTimeAdapter_Factory(t) {
  return new (t || NgbTimeAdapter)();
};

NgbTimeAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbTimeAdapter,
  factory: function factory() {
    return NGB_DATEPICKER_TIME_ADAPTER_FACTORY();
  },
  providedIn: 'root'
});
/** @nocollapse */

NgbTimeAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY,
  token: NgbTimeAdapter,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTimeAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root',
      useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY
    }]
  }], null, null);
})();

var NgbTimeStructAdapter = /*#__PURE__*/function (_NgbTimeAdapter) {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NgbTimeStructAdapter, _NgbTimeAdapter);

  var _super14 = Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(NgbTimeStructAdapter);

  function NgbTimeStructAdapter() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTimeStructAdapter);

    return _super14.apply(this, arguments);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTimeStructAdapter, [{
    key: "fromModel",

    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */
    value: function fromModel(time) {
      return time && isInteger(time.hour) && isInteger(time.minute) ? {
        hour: time.hour,
        minute: time.minute,
        second: isInteger(time.second) ? time.second : null
      } : null;
    }
    /**
     * Converts a NgbTimeStruct value into NgbTimeStruct value
     * @param {?} time
     * @return {?}
     */

  }, {
    key: "toModel",
    value: function toModel(time) {
      return time && isInteger(time.hour) && isInteger(time.minute) ? {
        hour: time.hour,
        minute: time.minute,
        second: isInteger(time.second) ? time.second : null
      } : null;
    }
  }]);

  return NgbTimeStructAdapter;
}(NgbTimeAdapter);

NgbTimeStructAdapter.ɵfac = function NgbTimeStructAdapter_Factory(t) {
  return ɵNgbTimeStructAdapter_BaseFactory(t || NgbTimeStructAdapter);
};

NgbTimeStructAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbTimeStructAdapter,
  factory: NgbTimeStructAdapter.ɵfac
});
var ɵNgbTimeStructAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](NgbTimeStructAdapter);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTimeStructAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_TIMEPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbTimepicker;
  }),
  multi: true
};
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */

var NgbTimepicker = /*#__PURE__*/function () {
  /**
   * @param {?} _config
   * @param {?} _ngbTimeAdapter
   * @param {?} _cd
   */
  function NgbTimepicker(_config, _ngbTimeAdapter, _cd) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTimepicker);

    this._config = _config;
    this._ngbTimeAdapter = _ngbTimeAdapter;
    this._cd = _cd;

    this.onChange = function (_) {};

    this.onTouched = function () {};

    this.meridian = _config.meridian;
    this.spinners = _config.spinners;
    this.seconds = _config.seconds;
    this.hourStep = _config.hourStep;
    this.minuteStep = _config.minuteStep;
    this.secondStep = _config.secondStep;
    this.disabled = _config.disabled;
    this.readonlyInputs = _config.readonlyInputs;
    this.size = _config.size;
  }
  /**
   * The number of hours to add/subtract when clicking hour spinners.
   * @param {?} step
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTimepicker, [{
    key: "writeValue",

    /**
     * @param {?} value
     * @return {?}
     */
    value: function writeValue(value) {
      /** @type {?} */
      var structValue = this._ngbTimeAdapter.fromModel(value);

      this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();

      if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
        this.model.second = 0;
      }

      this._cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * @param {?} step
     * @return {?}
     */

  }, {
    key: "changeHour",
    value: function changeHour(step) {
      this.model.changeHour(step);
      this.propagateModelChange();
    }
    /**
     * @param {?} step
     * @return {?}
     */

  }, {
    key: "changeMinute",
    value: function changeMinute(step) {
      this.model.changeMinute(step);
      this.propagateModelChange();
    }
    /**
     * @param {?} step
     * @return {?}
     */

  }, {
    key: "changeSecond",
    value: function changeSecond(step) {
      this.model.changeSecond(step);
      this.propagateModelChange();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */

  }, {
    key: "updateHour",
    value: function updateHour(newVal) {
      /** @type {?} */
      var isPM = this.model.hour >= 12;
      /** @type {?} */

      var enteredHour = toInteger(newVal);

      if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
        this.model.updateHour(enteredHour + 12);
      } else {
        this.model.updateHour(enteredHour);
      }

      this.propagateModelChange();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */

  }, {
    key: "updateMinute",
    value: function updateMinute(newVal) {
      this.model.updateMinute(toInteger(newVal));
      this.propagateModelChange();
    }
    /**
     * @param {?} newVal
     * @return {?}
     */

  }, {
    key: "updateSecond",
    value: function updateSecond(newVal) {
      this.model.updateSecond(toInteger(newVal));
      this.propagateModelChange();
    }
    /**
     * @return {?}
     */

  }, {
    key: "toggleMeridian",
    value: function toggleMeridian() {
      if (this.meridian) {
        this.changeHour(12);
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "formatHour",
    value: function formatHour(value) {
      if (isNumber(value)) {
        if (this.meridian) {
          return padNumber(value % 12 === 0 ? 12 : value % 12);
        } else {
          return padNumber(value % 24);
        }
      } else {
        return padNumber(NaN);
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "formatMinSec",
    value: function formatMinSec(value) {
      return padNumber(value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnChanges",

    /**
     * @param {?} changes
     * @return {?}
     */
    value: function ngOnChanges(changes) {
      if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
        this.model.second = 0;
        this.propagateModelChange(false);
      }
    }
    /**
     * @param {?=} touched
     * @return {?}
     */

  }, {
    key: "propagateModelChange",
    value: function propagateModelChange() {
      var touched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (touched) {
        this.onTouched();
      }

      if (this.model.isValid(this.seconds)) {
        this.onChange(this._ngbTimeAdapter.toModel({
          hour: this.model.hour,
          minute: this.model.minute,
          second: this.model.second
        }));
      } else {
        this.onChange(this._ngbTimeAdapter.toModel(null));
      }
    }
  }, {
    key: "hourStep",
    set: function set(step) {
      this._hourStep = isInteger(step) ? step : this._config.hourStep;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._hourStep;
    }
    /**
     * The number of minutes to add/subtract when clicking minute spinners.
     * @param {?} step
     * @return {?}
     */

  }, {
    key: "minuteStep",
    set: function set(step) {
      this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._minuteStep;
    }
    /**
     * The number of seconds to add/subtract when clicking second spinners.
     * @param {?} step
     * @return {?}
     */

  }, {
    key: "secondStep",
    set: function set(step) {
      this._secondStep = isInteger(step) ? step : this._config.secondStep;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._secondStep;
    }
  }, {
    key: "isSmallSize",
    get: function get() {
      return this.size === 'small';
    }
    /**
     * @return {?}
     */

  }, {
    key: "isLargeSize",
    get: function get() {
      return this.size === 'large';
    }
  }]);

  return NgbTimepicker;
}();

NgbTimepicker.ɵfac = function NgbTimepicker_Factory(t) {
  return new (t || NgbTimepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbTimepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbTimeAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbTimepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbTimepicker,
  selectors: [["ngb-timepicker"]],
  inputs: {
    meridian: "meridian",
    spinners: "spinners",
    seconds: "seconds",
    hourStep: "hourStep",
    minuteStep: "minuteStep",
    secondStep: "secondStep",
    readonlyInputs: "readonlyInputs",
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([NGB_TIMEPICKER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  decls: 18,
  vars: 25,
  consts: function consts() {
    var i18n_48;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_HH$$FESM2015_NG_BOOTSTRAP_JS_49 = goog.getMsg("HH");
      i18n_48 = MSG_EXTERNAL_ngb_timepicker_HH$$FESM2015_NG_BOOTSTRAP_JS_49;
    } else {
      i18n_48 = $localize(_templateObject21());
    }

    var i18n_50;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_hours$$FESM2015_NG_BOOTSTRAP_JS_51 = goog.getMsg("Hours");
      i18n_50 = MSG_EXTERNAL_ngb_timepicker_hours$$FESM2015_NG_BOOTSTRAP_JS_51;
    } else {
      i18n_50 = $localize(_templateObject22());
    }

    var i18n_52;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_MM$$FESM2015_NG_BOOTSTRAP_JS_53 = goog.getMsg("MM");
      i18n_52 = MSG_EXTERNAL_ngb_timepicker_MM$$FESM2015_NG_BOOTSTRAP_JS_53;
    } else {
      i18n_52 = $localize(_templateObject23());
    }

    var i18n_54;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_minutes$$FESM2015_NG_BOOTSTRAP_JS_55 = goog.getMsg("Minutes");
      i18n_54 = MSG_EXTERNAL_ngb_timepicker_minutes$$FESM2015_NG_BOOTSTRAP_JS_55;
    } else {
      i18n_54 = $localize(_templateObject24());
    }

    var i18n_56;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_increment_hours$$FESM2015_NG_BOOTSTRAP_JS__57 = goog.getMsg("Increment hours");
      i18n_56 = MSG_EXTERNAL_ngb_timepicker_increment_hours$$FESM2015_NG_BOOTSTRAP_JS__57;
    } else {
      i18n_56 = $localize(_templateObject25());
    }

    var i18n_58;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_decrement_hours$$FESM2015_NG_BOOTSTRAP_JS__59 = goog.getMsg("Decrement hours");
      i18n_58 = MSG_EXTERNAL_ngb_timepicker_decrement_hours$$FESM2015_NG_BOOTSTRAP_JS__59;
    } else {
      i18n_58 = $localize(_templateObject26());
    }

    var i18n_60;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_increment_minutes$$FESM2015_NG_BOOTSTRAP_JS__61 = goog.getMsg("Increment minutes");
      i18n_60 = MSG_EXTERNAL_ngb_timepicker_increment_minutes$$FESM2015_NG_BOOTSTRAP_JS__61;
    } else {
      i18n_60 = $localize(_templateObject27());
    }

    var i18n_62;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_decrement_minutes$$FESM2015_NG_BOOTSTRAP_JS__63 = goog.getMsg("Decrement minutes");
      i18n_62 = MSG_EXTERNAL_ngb_timepicker_decrement_minutes$$FESM2015_NG_BOOTSTRAP_JS__63;
    } else {
      i18n_62 = $localize(_templateObject28());
    }

    var i18n_64;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_SS$$FESM2015_NG_BOOTSTRAP_JS__65 = goog.getMsg("SS");
      i18n_64 = MSG_EXTERNAL_ngb_timepicker_SS$$FESM2015_NG_BOOTSTRAP_JS__65;
    } else {
      i18n_64 = $localize(_templateObject29());
    }

    var i18n_66;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_seconds$$FESM2015_NG_BOOTSTRAP_JS__67 = goog.getMsg("Seconds");
      i18n_66 = MSG_EXTERNAL_ngb_timepicker_seconds$$FESM2015_NG_BOOTSTRAP_JS__67;
    } else {
      i18n_66 = $localize(_templateObject30());
    }

    var i18n_68;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_increment_seconds$$FESM2015_NG_BOOTSTRAP_JS___69 = goog.getMsg("Increment seconds");
      i18n_68 = MSG_EXTERNAL_ngb_timepicker_increment_seconds$$FESM2015_NG_BOOTSTRAP_JS___69;
    } else {
      i18n_68 = $localize(_templateObject31());
    }

    var i18n_70;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_decrement_seconds$$FESM2015_NG_BOOTSTRAP_JS___71 = goog.getMsg("Decrement seconds");
      i18n_70 = MSG_EXTERNAL_ngb_timepicker_decrement_seconds$$FESM2015_NG_BOOTSTRAP_JS___71;
    } else {
      i18n_70 = $localize(_templateObject32());
    }

    var i18n_72;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_PM$$FESM2015_NG_BOOTSTRAP_JS___73 = goog.getMsg("PM");
      i18n_72 = MSG_EXTERNAL_ngb_timepicker_PM$$FESM2015_NG_BOOTSTRAP_JS___73;
    } else {
      i18n_72 = $localize(_templateObject33());
    }

    var i18n_74;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      var MSG_EXTERNAL_ngb_timepicker_AM$$FESM2015_NG_BOOTSTRAP_JS___75 = goog.getMsg("AM");
      i18n_74 = MSG_EXTERNAL_ngb_timepicker_AM$$FESM2015_NG_BOOTSTRAP_JS___75;
    } else {
      i18n_74 = $localize(_templateObject34());
    }

    return [[3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", "class", "btn btn-link", 3, "btn-sm", "btn-lg", "disabled", "click", 4, "ngIf"], ["type", "text", "maxlength", "2", 1, "ngb-tp-input", "form-control", 3, "value", "readonly", "disabled", "change", "keydown.ArrowUp", "keydown.ArrowDown", 6, "placeholder", "aria-label"], ["placeholder", i18n_48, "aria-label", i18n_50], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["placeholder", i18n_52, "aria-label", i18n_54], ["class", "ngb-tp-spacer", 4, "ngIf"], ["class", "ngb-tp-input-container ngb-tp-second", 4, "ngIf"], ["class", "ngb-tp-meridian", 4, "ngIf"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "disabled", "click"], [1, "chevron", "ngb-tp-chevron"], [1, "sr-only"], i18n_56, [1, "chevron", "ngb-tp-chevron", "bottom"], i18n_58, i18n_60, i18n_62, [1, "ngb-tp-input-container", "ngb-tp-second"], ["placeholder", i18n_64, "aria-label", i18n_66], i18n_68, i18n_70, [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["am", ""], i18n_72, i18n_74];
  },
  template: function NgbTimepicker_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "fieldset", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, NgbTimepicker_button_3_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function NgbTimepicker_Template_input_change_4_listener($event) {
        return ctx.updateHour($event.target.value);
      })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_4_listener($event) {
        ctx.changeHour(ctx.hourStep);
        return $event.preventDefault();
      })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_4_listener($event) {
        ctx.changeHour(-ctx.hourStep);
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, NgbTimepicker_button_6_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, NgbTimepicker_button_10_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nAttributes"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function NgbTimepicker_Template_input_change_11_listener($event) {
        return ctx.updateMinute($event.target.value);
      })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_11_listener($event) {
        ctx.changeMinute(ctx.minuteStep);
        return $event.preventDefault();
      })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_11_listener($event) {
        ctx.changeMinute(-ctx.minuteStep);
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, NgbTimepicker_button_13_Template, 4, 7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, NgbTimepicker_div_14_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, NgbTimepicker_div_15_Template, 5, 9, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, NgbTimepicker_div_16_Template, 1, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, NgbTimepicker_div_17_Template, 5, 9, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.formatHour(ctx.model == null ? null : ctx.model.hour))("readonly", ctx.readonlyInputs)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.formatMinSec(ctx.model == null ? null : ctx.model.minute))("readonly", ctx.readonlyInputs)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.spinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.seconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.seconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.meridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.meridian);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
  styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:'';display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"],
  encapsulation: 2
});
/** @nocollapse */

NgbTimepicker.ctorParameters = function () {
  return [{
    type: NgbTimepickerConfig
  }, {
    type: NgbTimeAdapter
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbTimepicker.propDecorators = {
  meridian: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  spinners: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  seconds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  hourStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  minuteStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  secondStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  readonlyInputs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  size: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTimepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-timepicker',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-input-container ngb-tp-hour\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-hours\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"HH\" i18n-placeholder=\"@@ngb.timepicker.HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\" i18n-aria-label=\"@@ngb.timepicker.hours\"\n            (keydown.ArrowUp)=\"changeHour(hourStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeHour(-hourStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(-hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-hours\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-input-container ngb-tp-minute\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-minutes\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"MM\" i18n-placeholder=\"@@ngb.timepicker.MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\" i18n-aria-label=\"@@ngb.timepicker.minutes\"\n            (keydown.ArrowUp)=\"changeMinute(minuteStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeMinute(-minuteStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(-minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\"  i18n=\"@@ngb.timepicker.decrement-minutes\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-input-container ngb-tp-second\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-seconds\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"SS\" i18n-placeholder=\"@@ngb.timepicker.SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\" i18n-aria-label=\"@@ngb.timepicker.seconds\"\n            (keydown.ArrowUp)=\"changeSecond(secondStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeSecond(-secondStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(-secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-seconds\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n                  (click)=\"toggleMeridian()\">\n            <ng-container *ngIf=\"model?.hour >= 12; else am\" i18n=\"@@ngb.timepicker.PM\">PM</ng-container>\n            <ng-template #am i18n=\"@@ngb.timepicker.AM\">AM</ng-template>\n          </button>\n        </div>\n      </div>\n    </fieldset>\n  ",
      providers: [NGB_TIMEPICKER_VALUE_ACCESSOR],
      styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:'';display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"]
    }]
  }], function () {
    return [{
      type: NgbTimepickerConfig
    }, {
      type: NgbTimeAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    meridian: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    spinners: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    seconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    hourStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    minuteStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    secondStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    readonlyInputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbTimepickerModule = /*#__PURE__*/function () {
  function NgbTimepickerModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTimepickerModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTimepickerModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbTimepickerModule
      };
    }
  }]);

  return NgbTimepickerModule;
}();

NgbTimepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbTimepickerModule
});
NgbTimepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbTimepickerModule_Factory(t) {
    return new (t || NgbTimepickerModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbTimepickerModule, {
    declarations: function declarations() {
      return [NgbTimepicker];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbTimepicker];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTimepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbTimepicker],
      exports: [NgbTimepicker],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */


var NgbTooltipConfig = function NgbTooltipConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTooltipConfig);

  this.autoClose = true;
  this.placement = 'auto';
  this.triggers = 'hover focus';
  this.disableTooltip = false;
  this.openDelay = 0;
  this.closeDelay = 0;
};

NgbTooltipConfig.ɵfac = function NgbTooltipConfig_Factory(t) {
  return new (t || NgbTooltipConfig)();
};

NgbTooltipConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbTooltipConfig,
  factory: NgbTooltipConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbTooltipConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbTooltipConfig_Factory() {
    return new NgbTooltipConfig();
  },
  token: NgbTooltipConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTooltipConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var nextId$5 = 0;

var NgbTooltipWindow = function NgbTooltipWindow() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTooltipWindow);
};

NgbTooltipWindow.ɵfac = function NgbTooltipWindow_Factory(t) {
  return new (t || NgbTooltipWindow)();
};

NgbTooltipWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbTooltipWindow,
  selectors: [["ngb-tooltip-window"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 3,
  hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"]("tooltip show" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
    }
  },
  inputs: {
    id: "id",
    tooltipClass: "tooltipClass"
  },
  ngContentSelectors: _c3,
  decls: 3,
  vars: 0,
  consts: [[1, "arrow"], [1, "tooltip-inner"]],
  template: function NgbTooltipWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
  },
  styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"],
  encapsulation: 2,
  changeDetection: 0
});
NgbTooltipWindow.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  tooltipClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTooltipWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-tooltip-window',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      host: {
        '[class]': '"tooltip show" + (tooltipClass ? " " + tooltipClass : "")',
        'role': 'tooltip',
        '[id]': 'id'
      },
      template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
      styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"]
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */


var NgbTooltip = /*#__PURE__*/function () {
  /**
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} injector
   * @param {?} componentFactoryResolver
   * @param {?} viewContainerRef
   * @param {?} config
   * @param {?} _ngZone
   * @param {?} _document
   * @param {?} _changeDetector
   */
  function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector) {
    var _this30 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTooltip);

    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._ngZone = _ngZone;
    this._document = _document;
    this._changeDetector = _changeDetector;
    /**
     * An event emitted when the tooltip is shown. Contains no payload.
     */

    this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /**
     * An event emitted when the popover is hidden. Contains no payload.
     */

    this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this._ngbTooltipWindowId = "ngb-tooltip-".concat(nextId$5++);
    this.autoClose = config.autoClose;
    this.placement = config.placement;
    this.triggers = config.triggers;
    this.container = config.container;
    this.disableTooltip = config.disableTooltip;
    this.tooltipClass = config.tooltipClass;
    this.openDelay = config.openDelay;
    this.closeDelay = config.closeDelay;
    this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
    this._zoneSubscription = _ngZone.onStable.subscribe(function () {
      if (_this30._windowRef) {
        positionElements(_this30._elementRef.nativeElement, _this30._windowRef.location.nativeElement, _this30.placement, _this30.container === 'body', 'bs-tooltip');
      }
    });
  }
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
   *
   * If the content if falsy, the tooltip won't open.
   * @param {?} value
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTooltip, [{
    key: "open",

    /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     * @param {?=} context
     * @return {?}
     */
    value: function open(context) {
      var _this31 = this;

      if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
        this._windowRef = this._popupService.open(this._ngbTooltip, context);
        this._windowRef.instance.tooltipClass = this.tooltipClass;
        this._windowRef.instance.id = this._ngbTooltipWindowId;

        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);

        if (this.container === 'body') {
          this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
        } // We need to detect changes, because we don't know where .open() might be called from.
        // Ex. opening tooltip from one of lifecycle hooks that run after the CD
        // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception


        this._windowRef.changeDetectorRef.detectChanges(); // We need to mark for check, because tooltip won't work inside the OnPush component.
        // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
        // inside the template of an OnPush component and we change the tooltip from
        // open -> closed, the expression in question won't be updated unless we explicitly
        // mark the parent component to be checked.


        this._windowRef.changeDetectorRef.markForCheck();

        ngbAutoClose(this._ngZone, this._document, this.autoClose, function () {
          return _this31.close();
        }, this.hidden, [this._windowRef.location.nativeElement]);
        this.shown.emit();
      }
    }
    /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     * @return {?}
     */

  }, {
    key: "close",
    value: function close() {
      if (this._windowRef != null) {
        this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');

        this._popupService.close();

        this._windowRef = null;
        this.hidden.emit();

        this._changeDetector.markForCheck();
      }
    }
    /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this._windowRef) {
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Returns `true`, if the popover is currently shown.
     * @return {?}
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this._windowRef != null;
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.close(); // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
      // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199

      if (this._unregisterListenersFn) {
        this._unregisterListenersFn();
      }

      this._zoneSubscription.unsubscribe();
    }
  }, {
    key: "ngbTooltip",
    set: function set(value) {
      this._ngbTooltip = value;

      if (!value && this._windowRef) {
        this.close();
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._ngbTooltip;
    }
  }]);

  return NgbTooltip;
}();

NgbTooltip.ɵfac = function NgbTooltip_Factory(t) {
  return new (t || NgbTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbTooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbTooltip,
  selectors: [["", "ngbTooltip", ""]],
  inputs: {
    autoClose: "autoClose",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    disableTooltip: "disableTooltip",
    tooltipClass: "tooltipClass",
    openDelay: "openDelay",
    closeDelay: "closeDelay",
    ngbTooltip: "ngbTooltip"
  },
  outputs: {
    shown: "shown",
    hidden: "hidden"
  },
  exportAs: ["ngbTooltip"]
});
/** @nocollapse */

NgbTooltip.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
  }, {
    type: NgbTooltipConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbTooltip.propDecorators = {
  autoClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disableTooltip: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  tooltipClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  openDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  closeDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  shown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  hidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  ngbTooltip: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[ngbTooltip]',
      exportAs: 'ngbTooltip'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
    }, {
      type: NgbTooltipConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    shown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    disableTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    openDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    closeDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    ngbTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbTooltipModule = /*#__PURE__*/function () {
  function NgbTooltipModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTooltipModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTooltipModule, null, [{
    key: "forRoot",

    /**
     * No need in forRoot anymore with tree-shakeable services
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbTooltipModule
      };
    }
  }]);

  return NgbTooltipModule;
}();

NgbTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbTooltipModule
});
NgbTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbTooltipModule_Factory(t) {
    return new (t || NgbTooltipModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbTooltipModule, {
    declarations: [NgbTooltip, NgbTooltipWindow],
    exports: [NgbTooltip]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbTooltip, NgbTooltipWindow],
      exports: [NgbTooltip],
      entryComponents: [NgbTooltipWindow]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A component that helps with text highlighting.
 *
 * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
 * highlighting:
 *
 * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
 */


var NgbHighlight = /*#__PURE__*/function () {
  function NgbHighlight() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbHighlight);

    /**
     * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
     */
    this.highlightClass = 'ngb-highlight';
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbHighlight, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      /** @type {?} */
      var resultStr = toString(this.result);
      /** @type {?} */

      var resultLC = resultStr.toLowerCase();
      /** @type {?} */

      var termLC = toString(this.term).toLowerCase();
      /** @type {?} */

      var currentIdx = 0;

      if (termLC.length > 0) {
        this.parts = resultLC.split(new RegExp("(".concat(regExpEscape(termLC), ")"))).map(function (part) {
          /** @type {?} */
          var originalPart = resultStr.substr(currentIdx, part.length);
          currentIdx += part.length;
          return originalPart;
        });
      } else {
        this.parts = [resultStr];
      }
    }
  }]);

  return NgbHighlight;
}();

NgbHighlight.ɵfac = function NgbHighlight_Factory(t) {
  return new (t || NgbHighlight)();
};

NgbHighlight.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbHighlight,
  selectors: [["ngb-highlight"]],
  inputs: {
    highlightClass: "highlightClass",
    result: "result",
    term: "term"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["ngFor", "", 3, "ngForOf"], [3, "class", 4, "ngIf", "ngIfElse"], ["even", ""]],
  template: function NgbHighlight_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbHighlight_ng_template_0_Template, 3, 2, "ng-template", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.parts);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
  styles: [".ngb-highlight{font-weight:700}"],
  encapsulation: 2,
  changeDetection: 0
});
NgbHighlight.propDecorators = {
  highlightClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  result: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  term: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbHighlight, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-highlight',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" + "<span *ngIf=\"isOdd; else even\" [class]=\"highlightClass\">{{part}}</span><ng-template #even>{{part}}</ng-template>" + "</ng-template>",
      styles: [".ngb-highlight{font-weight:700}"]
    }]
  }], function () {
    return [];
  }, {
    highlightClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    result: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    term: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbTypeaheadWindow = /*#__PURE__*/function () {
  function NgbTypeaheadWindow() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTypeaheadWindow);

    this.activeIdx = 0;
    /**
     * Flag indicating if the first row should be active initially
     */

    this.focusFirst = true;
    /**
     * A function used to format a given result before display. This function should return a formatted string without any
     * HTML markup
     */

    this.formatter = toString;
    /**
     * Event raised when user selects a particular result row
     */

    this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTypeaheadWindow, [{
    key: "hasActive",
    value: function hasActive() {
      return this.activeIdx > -1 && this.activeIdx < this.results.length;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getActive",
    value: function getActive() {
      return this.results[this.activeIdx];
    }
    /**
     * @param {?} activeIdx
     * @return {?}
     */

  }, {
    key: "markActive",
    value: function markActive(activeIdx) {
      this.activeIdx = activeIdx;

      this._activeChanged();
    }
    /**
     * @return {?}
     */

  }, {
    key: "next",
    value: function next() {
      if (this.activeIdx === this.results.length - 1) {
        this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
      } else {
        this.activeIdx++;
      }

      this._activeChanged();
    }
    /**
     * @return {?}
     */

  }, {
    key: "prev",
    value: function prev() {
      if (this.activeIdx < 0) {
        this.activeIdx = this.results.length - 1;
      } else if (this.activeIdx === 0) {
        this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
      } else {
        this.activeIdx--;
      }

      this._activeChanged();
    }
    /**
     * @return {?}
     */

  }, {
    key: "resetActive",
    value: function resetActive() {
      this.activeIdx = this.focusFirst ? 0 : -1;

      this._activeChanged();
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "select",
    value: function select(item) {
      this.selectEvent.emit(item);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.resetActive();
    }
    /**
     * @return {?}
     */

  }, {
    key: "_activeChanged",
    value: function _activeChanged() {
      this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    }
  }]);

  return NgbTypeaheadWindow;
}();

NgbTypeaheadWindow.ɵfac = function NgbTypeaheadWindow_Factory(t) {
  return new (t || NgbTypeaheadWindow)();
};

NgbTypeaheadWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: NgbTypeaheadWindow,
  selectors: [["ngb-typeahead-window"]],
  hostAttrs: ["role", "listbox", 1, "dropdown-menu", "show"],
  hostVars: 1,
  hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) {
        return $event.preventDefault();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("id", ctx.id);
    }
  },
  inputs: {
    focusFirst: "focusFirst",
    formatter: "formatter",
    id: "id",
    results: "results",
    term: "term",
    resultTemplate: "resultTemplate"
  },
  outputs: {
    selectEvent: "select",
    activeChangeEvent: "activeChange"
  },
  exportAs: ["ngbTypeaheadWindow"],
  decls: 3,
  vars: 1,
  consts: [["rt", ""], ["ngFor", "", 3, "ngForOf"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "id", "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NgbTypeaheadWindow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, NgbTypeaheadWindow_ng_template_2_Template, 2, 9, "ng-template", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.results);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"]],
  encapsulation: 2
});
NgbTypeaheadWindow.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  focusFirst: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  results: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  term: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  formatter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  resultTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  selectEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
    args: ['select']
  }],
  activeChangeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
    args: ['activeChange']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTypeaheadWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'ngb-typeahead-window',
      exportAs: 'ngbTypeaheadWindow',
      host: {
        '(mousedown)': '$event.preventDefault()',
        'class': 'dropdown-menu show',
        'role': 'listbox',
        '[id]': 'id'
      },
      template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
    }]
  }], function () {
    return [];
  }, {
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    formatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    selectEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
      args: ['select']
    }],
    activeChangeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
      args: ['activeChange']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    results: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    term: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    resultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('live announcer delay', {
  providedIn: 'root',
  factory: ARIA_LIVE_DELAY_FACTORY
});
/**
 * @return {?}
 */

function ARIA_LIVE_DELAY_FACTORY() {
  return 100;
}
/**
 * @param {?} document
 * @param {?=} lazyCreate
 * @return {?}
 */


function getLiveElement(document) {
  var lazyCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  /** @type {?} */
  var element =
  /** @type {?} */
  document.body.querySelector('#ngb-live');

  if (element == null && lazyCreate) {
    element = document.createElement('div');
    element.setAttribute('id', 'ngb-live');
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    element.classList.add('sr-only');
    document.body.appendChild(element);
  }

  return element;
}

var Live = /*#__PURE__*/function () {
  /**
   * @param {?} _document
   * @param {?} _delay
   */
  function Live(_document, _delay) {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Live);

    this._document = _document;
    this._delay = _delay;
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Live, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      /** @type {?} */
      var element = getLiveElement(this._document);

      if (element) {
        element.parentElement.removeChild(element);
      }
    }
    /**
     * @param {?} message
     * @return {?}
     */

  }, {
    key: "say",
    value: function say(message) {
      /** @type {?} */
      var element = getLiveElement(this._document, true);
      /** @type {?} */

      var delay$$1 = this._delay;
      element.textContent = '';
      /** @type {?} */

      var setText = function setText() {
        return element.textContent = message;
      };

      if (delay$$1 === null) {
        setText();
      } else {
        setTimeout(setText, delay$$1);
      }
    }
  }]);

  return Live;
}();

Live.ɵfac = function Live_Factory(t) {
  return new (t || Live)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](ARIA_LIVE_DELAY));
};

Live.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: Live,
  factory: Live.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

Live.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [ARIA_LIVE_DELAY]
    }]
  }];
};
/** @nocollapse */


Live.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function Live_Factory() {
    return new Live(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["inject"])(ARIA_LIVE_DELAY));
  },
  token: Live,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](Live, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [ARIA_LIVE_DELAY]
      }]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */


var NgbTypeaheadConfig = function NgbTypeaheadConfig() {
  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTypeaheadConfig);

  this.editable = true;
  this.focusFirst = true;
  this.showHint = false;
  this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
};

NgbTypeaheadConfig.ɵfac = function NgbTypeaheadConfig_Factory(t) {
  return new (t || NgbTypeaheadConfig)();
};

NgbTypeaheadConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: NgbTypeaheadConfig,
  factory: NgbTypeaheadConfig.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgbTypeaheadConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["defineInjectable"])({
  factory: function NgbTypeaheadConfig_Factory() {
    return new NgbTypeaheadConfig();
  },
  token: NgbTypeaheadConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTypeaheadConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
    return NgbTypeahead;
  }),
  multi: true
};
/** @type {?} */

var nextWindowId = 0;
/**
 * A directive providing a simple way of creating powerful typeaheads from any text input.
 */

var NgbTypeahead = /*#__PURE__*/function () {
  /**
   * @param {?} _elementRef
   * @param {?} _viewContainerRef
   * @param {?} _renderer
   * @param {?} _injector
   * @param {?} componentFactoryResolver
   * @param {?} config
   * @param {?} ngZone
   * @param {?} _live
   * @param {?} _document
   * @param {?} _ngZone
   * @param {?} _changeDetector
   */
  function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector) {
    var _this32 = this;

    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTypeahead);

    this._elementRef = _elementRef;
    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._injector = _injector;
    this._live = _live;
    this._document = _document;
    this._ngZone = _ngZone;
    this._changeDetector = _changeDetector;
    this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    /**
     * The value for the `autocomplete` attribute for the `<input>` element.
     *
     * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
     *
     * \@since 2.1.0
     */

    this.autocomplete = 'off';
    /**
     * The preferred placement of the typeahead.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"bottom-left bottom-right top-left top-right"`
     */

    this.placement = 'bottom-left';
    /**
     * An event emitted right before an item is selected from the result list.
     *
     * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
     */

    this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    this.popupId = "ngb-typeahead-".concat(nextWindowId++);

    this._onTouched = function () {};

    this._onChange = function (_) {};

    this.container = config.container;
    this.editable = config.editable;
    this.focusFirst = config.focusFirst;
    this.showHint = config.showHint;
    this.placement = config.placement;
    this._valueChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(_elementRef.nativeElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function ($event) {
      return (
        /** @type {?} */
        $event.target.value
      );
    }));
    this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"](null);
    this._popupService = new PopupService(NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver);
    this._zoneSubscription = ngZone.onStable.subscribe(function () {
      if (_this32.isPopupOpen()) {
        positionElements(_this32._elementRef.nativeElement, _this32._windowRef.location.nativeElement, _this32.placement, _this32.container === 'body');
      }
    });
  }
  /**
   * @return {?}
   */


  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTypeahead, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this33 = this;

      /** @type {?} */
      var inputValues$ = this._valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(function (value) {
        _this33._inputValueBackup = _this33.showHint ? value : null;

        if (_this33.editable) {
          _this33._onChange(value);
        }
      }));
      /** @type {?} */


      var results$ = inputValues$.pipe(this.ngbTypeahead);
      /** @type {?} */

      var processedResults$ = results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(function () {
        if (!_this33.editable) {
          _this33._onChange(undefined);
        }
      }));
      /** @type {?} */

      var userInput$ = this._resubscribeTypeahead.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function () {
        return processedResults$;
      }));

      this._subscription = this._subscribeToUserInput(userInput$);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._closePopup();

      this._unsubscribeFromUserInput();

      this._zoneSubscription.unsubscribe();
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._writeInputValue(this._formatItemForInput(value));

      if (this.showHint) {
        this._inputValueBackup = value;
      }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * Dismisses typeahead popup window
     * @return {?}
     */

  }, {
    key: "dismissPopup",
    value: function dismissPopup() {
      if (this.isPopupOpen()) {
        this._resubscribeTypeahead.next(null);

        this._closePopup();

        if (this.showHint && this._inputValueBackup !== null) {
          this._writeInputValue(this._inputValueBackup);
        }

        this._changeDetector.markForCheck();
      }
    }
    /**
     * Returns true if the typeahead popup window is displayed
     * @return {?}
     */

  }, {
    key: "isPopupOpen",
    value: function isPopupOpen() {
      return this._windowRef != null;
    }
    /**
     * @return {?}
     */

  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this._resubscribeTypeahead.next(null);

      this._onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (!this.isPopupOpen()) {
        return;
      } // tslint:disable-next-line:deprecation


      switch (event.which) {
        case Key.ArrowDown:
          event.preventDefault();

          this._windowRef.instance.next();

          this._showHint();

          break;

        case Key.ArrowUp:
          event.preventDefault();

          this._windowRef.instance.prev();

          this._showHint();

          break;

        case Key.Enter:
        case Key.Tab:
          /** @type {?} */
          var result = this._windowRef.instance.getActive();

          if (isDefined(result)) {
            event.preventDefault();
            event.stopPropagation();

            this._selectResult(result);
          }

          this._closePopup();

          break;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_openPopup",
    value: function _openPopup() {
      var _this34 = this;

      if (!this.isPopupOpen()) {
        this._inputValueBackup = this._elementRef.nativeElement.value;
        this._windowRef = this._popupService.open();
        this._windowRef.instance.id = this.popupId;

        this._windowRef.instance.selectEvent.subscribe(function (result) {
          return _this34._selectResultClosePopup(result);
        });

        this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) {
          return _this34.activeDescendant = activeId;
        });

        if (this.container === 'body') {
          window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
        }

        this._changeDetector.markForCheck();

        ngbAutoClose(this._ngZone, this._document, 'outside', function () {
          return _this34.dismissPopup();
        }, this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_closePopup",
    value: function _closePopup() {
      this._closed$.next();

      this._popupService.close();

      this._windowRef = null;
      this.activeDescendant = undefined;
    }
    /**
     * @param {?} result
     * @return {?}
     */

  }, {
    key: "_selectResult",
    value: function _selectResult(result) {
      /** @type {?} */
      var defaultPrevented = false;
      this.selectItem.emit({
        item: result,
        preventDefault: function preventDefault() {
          defaultPrevented = true;
        }
      });

      this._resubscribeTypeahead.next(null);

      if (!defaultPrevented) {
        this.writeValue(result);

        this._onChange(result);
      }
    }
    /**
     * @param {?} result
     * @return {?}
     */

  }, {
    key: "_selectResultClosePopup",
    value: function _selectResultClosePopup(result) {
      this._selectResult(result);

      this._closePopup();
    }
    /**
     * @return {?}
     */

  }, {
    key: "_showHint",
    value: function _showHint() {
      if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
        /** @type {?} */
        var userInputLowerCase = this._inputValueBackup.toLowerCase();
        /** @type {?} */


        var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());

        if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
          this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));

          this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
        } else {
          this._writeInputValue(formattedVal);
        }
      }
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "_formatItemForInput",
    value: function _formatItemForInput(item) {
      return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_writeInputValue",
    value: function _writeInputValue(value) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
    }
    /**
     * @param {?} userInput$
     * @return {?}
     */

  }, {
    key: "_subscribeToUserInput",
    value: function _subscribeToUserInput(userInput$) {
      var _this35 = this;

      return userInput$.subscribe(function (results) {
        if (!results || results.length === 0) {
          _this35._closePopup();
        } else {
          _this35._openPopup();

          _this35._windowRef.instance.focusFirst = _this35.focusFirst;
          _this35._windowRef.instance.results = results;
          _this35._windowRef.instance.term = _this35._elementRef.nativeElement.value;

          if (_this35.resultFormatter) {
            _this35._windowRef.instance.formatter = _this35.resultFormatter;
          }

          if (_this35.resultTemplate) {
            _this35._windowRef.instance.resultTemplate = _this35.resultTemplate;
          }

          _this35._windowRef.instance.resetActive(); // The observable stream we are subscribing to might have async steps
          // and if a component containing typeahead is using the OnPush strategy
          // the change detection turn wouldn't be invoked automatically.


          _this35._windowRef.changeDetectorRef.detectChanges();

          _this35._showHint();
        } // live announcer

        /** @type {?} */


        var count = results ? results.length : 0;

        _this35._live.say(count === 0 ? 'No results available' : "".concat(count, " result").concat(count === 1 ? '' : 's', " available"));
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "_unsubscribeFromUserInput",
    value: function _unsubscribeFromUserInput() {
      if (this._subscription) {
        this._subscription.unsubscribe();
      }

      this._subscription = null;
    }
  }]);

  return NgbTypeahead;
}();

NgbTypeahead.ɵfac = function NgbTypeahead_Factory(t) {
  return new (t || NgbTypeahead)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](NgbTypeaheadConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](Live), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]));
};

NgbTypeahead.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: NgbTypeahead,
  selectors: [["input", "ngbTypeahead", ""]],
  hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox", "aria-multiline", "false"],
  hostVars: 7,
  hostBindings: function NgbTypeahead_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("blur", function NgbTypeahead_blur_HostBindingHandler() {
        return ctx.handleBlur();
      })("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("open", ctx.isPopupOpen());
    }
  },
  inputs: {
    autocomplete: "autocomplete",
    placement: "placement",
    container: "container",
    editable: "editable",
    focusFirst: "focusFirst",
    showHint: "showHint",
    inputFormatter: "inputFormatter",
    ngbTypeahead: "ngbTypeahead",
    resultFormatter: "resultFormatter",
    resultTemplate: "resultTemplate"
  },
  outputs: {
    selectItem: "selectItem"
  },
  exportAs: ["ngbTypeahead"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([NGB_TYPEAHEAD_VALUE_ACCESSOR])]
});
/** @nocollapse */

NgbTypeahead.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
  }, {
    type: NgbTypeaheadConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: Live
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }];
};

NgbTypeahead.propDecorators = {
  autocomplete: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  focusFirst: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  inputFormatter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  ngbTypeahead: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  resultFormatter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  resultTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  showHint: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  selectItem: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTypeahead, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'input[ngbTypeahead]',
      exportAs: 'ngbTypeahead',
      host: {
        '(blur)': 'handleBlur()',
        '[class.open]': 'isPopupOpen()',
        '(keydown)': 'handleKeyDown($event)',
        '[autocomplete]': 'autocomplete',
        'autocapitalize': 'off',
        'autocorrect': 'off',
        'role': 'combobox',
        'aria-multiline': 'false',
        '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
        '[attr.aria-activedescendant]': 'activeDescendant',
        '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
        '[attr.aria-expanded]': 'isPopupOpen()'
      },
      providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injector"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryResolver"]
    }, {
      type: NgbTypeaheadConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: Live
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }];
  }, {
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    selectItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    showHint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    inputFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    ngbTypeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    resultFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    resultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


var NgbTypeaheadModule = /*#__PURE__*/function () {
  function NgbTypeaheadModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbTypeaheadModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbTypeaheadModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbTypeaheadModule
      };
    }
  }]);

  return NgbTypeaheadModule;
}();

NgbTypeaheadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbTypeaheadModule
});
NgbTypeaheadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbTypeaheadModule_Factory(t) {
    return new (t || NgbTypeaheadModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbTypeaheadModule, {
    declarations: function declarations() {
      return [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]];
    },
    exports: function exports() {
      return [NgbTypeahead, NgbHighlight];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbTypeaheadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
      exports: [NgbTypeahead, NgbHighlight],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
      entryComponents: [NgbTypeaheadWindow]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */


var NGB_MODULES = [NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule];

var NgbModule = /*#__PURE__*/function () {
  function NgbModule() {
    Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, NgbModule);
  }

  Object(_Users_darrennye_Documents_Work_minutia_nebular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NgbModule, null, [{
    key: "forRoot",

    /**
     * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
     * Will be removed in 4.0.0.
     *
     * @deprecated 3.0.0
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: NgbModule
      };
    }
  }]);

  return NgbModule;
}();

NgbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgbModule
});
NgbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function NgbModule_Factory(t) {
    return new (t || NgbModule)();
  },
  imports: [NGB_MODULES, NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NgbModule, {
    imports: [NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule],
    exports: [NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      imports: NGB_MODULES,
      exports: NGB_MODULES
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */




/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "PMTq":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./src/playground/without-styles/bootstrap/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "U9q0":
/*!*********************************************************************!*\
  !*** ./src/playground/without-styles/bootstrap/bootstrap.module.ts ***!
  \*********************************************************************/
/*! exports provided: BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap-routing.module */ "j459");
/* harmony import */ var _bootstrap_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap-test.component */ "eh6X");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BootstrapModule });
    BootstrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BootstrapModule_Factory(t) { return new (t || BootstrapModule)(); }, imports: [[
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                _bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            ]] });
    return BootstrapModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BootstrapModule, { declarations: [_bootstrap_test_component__WEBPACK_IMPORTED_MODULE_4__["BootstrapTestComponent"]], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
        _bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _bootstrap_test_component__WEBPACK_IMPORTED_MODULE_4__["BootstrapTestComponent"],
                ],
                imports: [
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                    _bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "eh6X":
/*!*****************************************************************************!*\
  !*** ./src/playground/without-styles/bootstrap/bootstrap-test.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BootstrapTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTestComponent", function() { return BootstrapTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var style_loader_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-loader!./styles.scss */ "07OW");
/* harmony import */ var style_loader_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_loader_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/layout/layout.component */ "vuB0");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/icon/icon.component */ "FuSZ");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










function BootstrapTestComponent_ng_template_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapTestComponent_ng_template_248_Template_button_click_3_listener() { var modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Modal body ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Footer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var BootstrapTestComponent = /** @class */ (function () {
    function BootstrapTestComponent(themeService, modalService) {
        this.themeService = themeService;
        this.modalService = modalService;
    }
    BootstrapTestComponent.prototype.ngOnInit = function () {
        this.themeService.changeTheme('default');
    };
    BootstrapTestComponent.prototype.openModal = function (content) {
        this.modalService.open(content);
    };
    BootstrapTestComponent.ɵfac = function BootstrapTestComponent_Factory(t) { return new (t || BootstrapTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
    BootstrapTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BootstrapTestComponent, selectors: [["nb-bootstrap-test"]], decls: 250, vars: 8, consts: [[1, "row"], [1, "col-lg-12"], [1, "btn", "btn-primary"], [1, "btn", "btn-success"], [1, "btn", "btn-info"], [1, "btn", "btn-warning"], [1, "btn", "btn-danger"], [1, "btn", "btn-hero-primary"], [1, "btn", "btn-hero-success"], [1, "btn", "btn-hero-info"], [1, "btn", "btn-hero-warning"], [1, "btn", "btn-hero-danger"], [1, "btn", "btn-outline-primary"], [1, "btn", "btn-outline-success"], [1, "btn", "btn-outline-info"], [1, "btn", "btn-outline-warning"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-primary", "btn-icon"], ["icon", "heart-outline"], [1, "btn", "btn-success", "btn-icon"], [1, "btn", "btn-info", "btn-icon"], [1, "btn", "btn-warning", "btn-icon"], [1, "btn", "btn-danger", "btn-icon"], [1, "btn", "btn-primary", "btn-with-icon"], [1, "btn", "btn-success", "btn-with-icon"], [1, "btn", "btn-info", "btn-with-icon"], [1, "btn", "btn-warning", "btn-with-icon"], [1, "btn", "btn-danger", "btn-with-icon"], [1, "btn-group", "btn-group-toggle", "btn-outline-toggle-group", "btn-group-full-width", "btn-toggle-radio-group"], [1, "btn", "btn-outline-primary", "active"], ["type", "radio", "value", "left"], ["type", "radio", "value", "middle"], ["type", "radio", "value", "right"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "btn-group-full-width"], [1, "btn", "btn-primary", "active"], ["type", "checkbox"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "btn-outline-toggle-group"], [1, "btn", "btn-outline-success", "active"], ["type", "radio", 3, "value"], [1, "btn-group", "btn-group-toggle", "btn-divided-group", "btn-outline-divided-group"], [1, "input-group"], ["type", "text", "placeholder", "Project", 1, "form-control"], [1, "row", "full-name-inputs"], [1, "col-sm-6", "input-group"], ["type", "text", "placeholder", "Nick", 1, "form-control"], ["type", "text", "placeholder", "Last Name", 1, "form-control"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "input-group", "has-person-icon"], ["type", "text", "placeholder", "With Icon", 1, "form-control"], [1, "input-group", "input-group-rounded"], ["type", "text", "placeholder", "Rounded border", 1, "form-control"], [1, "form-group"], [1, "form-text"], ["type", "text", "placeholder", "Disabled input", "disabled", "", 1, "form-control"], ["rows", "5", "placeholder", "Text Area", 1, "form-control"], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Small Input", 1, "form-control"], [1, "input-group", "input-group-lg"], ["type", "text", "placeholder", "Large Input", 1, "form-control"], [1, "form-control"], ["multiple", "", 1, "form-control"], [1, "input-group", "input-group-border-only"], ["type", "text", "placeholder", "Border Only", 1, "form-control"], ["type", "text", "placeholder", "Default Input", 1, "form-control"], [1, "input-group", "input-group-fill-only"], ["type", "text", "placeholder", "Fill Only", 1, "form-control"], ["type", "text", "placeholder", "Input with Success", 1, "form-control", "form-control-success"], ["type", "text", "placeholder", "Input with Warning", 1, "form-control", "form-control-warning"], ["type", "text", "placeholder", "Input with Danger", 1, "form-control", "form-control-danger"], [1, "form-group", "has-success"], ["type", "text", "placeholder", "Input with Success Icon", 1, "form-control", "form-control-success"], [1, "form-group", "has-warning"], ["type", "text", "placeholder", "Input with Warning Icon", 1, "form-control", "form-control-warning"], [1, "form-group", "has-danger"], ["type", "text", "placeholder", "Input with Danger Icon", 1, "form-control", "form-control-danger"], [2, "height", "15rem"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", ""], [1, "btn", "btn-primary", 3, "click"], ["modalContent", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"]], template: function BootstrapTestComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Filled Buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hero Buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Outline Buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Icon buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Icon buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Button Group");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Middle ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Middle ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " 3 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " 4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " 5 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " 1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " 3 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Default Inputs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "input", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "small", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "A block of help text that breaks into a new line and may extend beyond one line. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "textarea", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "input", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Selects");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Simple Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "select", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Minsk");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Gomel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Brest");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Grodno");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Mogilev");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Multiple Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "select", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Item 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Item 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Item 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Item 4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Item 5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Input Styles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "input", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Validation States");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "input", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "input", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "input", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "input", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "input", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "nb-card", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Dropdowns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "button", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Toggle dropdown");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "button", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Action - 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "button", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Another Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Something else is here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Modal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapTestComponent_Template_button_click_246_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](249); return ctx.openModal(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Open modal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](248, BootstrapTestComponent_ng_template_248_Template, 10, 0, "ng-template", null, 81, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
        } }, directives: [_framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _framework_theme_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["NbIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]], styles: ["button[_ngcontent-%COMP%] {\n      margin-right: 1rem;\n    }\n\n    .input-group[_ngcontent-%COMP%] {\n      margin-bottom: 1rem;\n    }"] });
    return BootstrapTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-bootstrap-test',
                styles: [
                    "\n    button {\n      margin-right: 1rem;\n    }\n\n    .input-group {\n      margin-bottom: 1rem;\n    }\n    ",
                ],
                templateUrl: './bootstrap-test.component.html',
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "h4VS":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "j459":
/*!*****************************************************************************!*\
  !*** ./src/playground/without-styles/bootstrap/bootstrap-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BootstrapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapRoutingModule", function() { return BootstrapRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bootstrap_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap-test.component */ "eh6X");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var routes = [
    {
        path: 'bootstrap-test.component',
        component: _bootstrap_test_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapTestComponent"],
    },
];
var BootstrapRoutingModule = /** @class */ (function () {
    function BootstrapRoutingModule() {
    }
    BootstrapRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BootstrapRoutingModule });
    BootstrapRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BootstrapRoutingModule_Factory(t) { return new (t || BootstrapRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return BootstrapRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BootstrapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=bootstrap-bootstrap-module.js.map