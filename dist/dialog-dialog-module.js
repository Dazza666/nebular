(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dialog-dialog-module"],{

/***/ "4qyw":
/*!****************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-has-backdrop.component.ts ***!
  \****************************************************************************/
/*! exports provided: DialogHasBackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogHasBackdropComponent", function() { return DialogHasBackdropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_has_backdrop_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/has-backdrop-dialog.component */ "BHtV");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var DialogHasBackdropComponent = /** @class */ (function () {
    function DialogHasBackdropComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogHasBackdropComponent.prototype.openWithBackdrop = function () {
        this.open(true);
    };
    DialogHasBackdropComponent.prototype.openWithoutBackdrop = function () {
        this.open(false);
    };
    DialogHasBackdropComponent.prototype.open = function (hasBackdrop) {
        this.dialogService.open(_components_has_backdrop_dialog_component__WEBPACK_IMPORTED_MODULE_2__["HasBackdropDialogComponent"], { hasBackdrop: hasBackdrop });
    };
    DialogHasBackdropComponent.ɵfac = function DialogHasBackdropComponent_Factory(t) { return new (t || DialogHasBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogHasBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogHasBackdropComponent, selectors: [["nb-dialog-has-backdrop"]], decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function DialogHasBackdropComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogHasBackdropComponent_Template_button_click_0_listener() { return ctx.openWithBackdrop(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "With backdrop");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogHasBackdropComponent_Template_button_click_2_listener() { return ctx.openWithoutBackdrop(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Without backdrop");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogHasBackdropComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogHasBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-has-backdrop',
                template: "\n    <button nbButton (click)=\"openWithBackdrop()\">With backdrop</button>\n    <button nbButton (click)=\"openWithoutBackdrop()\">Without backdrop</button>\n  ",
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "AQDC":
/*!***********************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/components/showcase-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShowcaseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseDialogComponent", function() { return ShowcaseDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/button/button.component */ "b9/t");






var ShowcaseDialogComponent = /** @class */ (function () {
    function ShowcaseDialogComponent(ref) {
        this.ref = ref;
    }
    ShowcaseDialogComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    ShowcaseDialogComponent.ɵfac = function ShowcaseDialogComponent_Factory(t) { return new (t || ShowcaseDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
    ShowcaseDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowcaseDialogComponent, selectors: [["ng-component"]], inputs: { title: "title" }, decls: 8, vars: 1, consts: [[1, "dialog-card"], ["nbButton", "", "status", "primary", 3, "click"]], template: function ShowcaseDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowcaseDialogComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dismiss Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], encapsulation: 2 });
    return ShowcaseDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card class=\"dialog-card\">\n      <nb-card-header>{{ title }}</nb-card-header>\n      <nb-card-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt.\n        Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum.\n        Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci.\n        Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec\n        iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus,\n        in aliquet massa aliquet et.\n      </nb-card-body>\n      <nb-card-footer>\n        <button nbButton status=\"primary\" (click)=\"dismiss()\">Dismiss Dialog</button>\n      </nb-card-footer>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "BHtV":
/*!***************************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/components/has-backdrop-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HasBackdropDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasBackdropDialogComponent", function() { return HasBackdropDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/button/button.component */ "b9/t");






var HasBackdropDialogComponent = /** @class */ (function () {
    function HasBackdropDialogComponent(ref) {
        this.ref = ref;
    }
    HasBackdropDialogComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    HasBackdropDialogComponent.ɵfac = function HasBackdropDialogComponent_Factory(t) { return new (t || HasBackdropDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
    HasBackdropDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HasBackdropDialogComponent, selectors: [["ng-component"]], inputs: { title: "title" }, decls: 8, vars: 1, consts: [[1, "dialog-card"], ["nbButton", "", "status", "primary", 3, "click"]], template: function HasBackdropDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HasBackdropDialogComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dismiss Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], encapsulation: 2 });
    return HasBackdropDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HasBackdropDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card class=\"dialog-card\">\n      <nb-card-header>{{ title }}</nb-card-header>\n      <nb-card-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt.\n        Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum.\n        Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci.\n        Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec\n        iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus,\n        in aliquet massa aliquet et.\n      </nb-card-body>\n      <nb-card-footer>\n        <button nbButton status=\"primary\" (click)=\"dismiss()\">Dismiss Dialog</button>\n      </nb-card-footer>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Bwbz":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-showcase.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogShowcaseComponent", function() { return DialogShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/showcase-dialog.component */ "AQDC");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var DialogShowcaseComponent = /** @class */ (function () {
    function DialogShowcaseComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogShowcaseComponent.prototype.open = function () {
        this.dialogService.open(_components_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ShowcaseDialogComponent"], {
            context: {
                title: 'This is a title passed to the dialog component',
            },
        });
    };
    DialogShowcaseComponent.ɵfac = function DialogShowcaseComponent_Factory(t) { return new (t || DialogShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogShowcaseComponent, selectors: [["nb-dialog-showcase"]], decls: 2, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function DialogShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogShowcaseComponent_Template_button_click_0_listener() { return ctx.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-showcase',
                template: '<button nbButton (click)="open()">Open Dialog</button>',
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "CIYk":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-result.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogResultComponent", function() { return DialogResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_name_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/name-prompt-dialog.component */ "v/Id");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DialogResultComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var name_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r1);
} }
var DialogResultComponent = /** @class */ (function () {
    function DialogResultComponent(dialogService) {
        this.dialogService = dialogService;
        this.names = [];
    }
    DialogResultComponent.prototype.open = function () {
        var _this = this;
        this.dialogService.open(_components_name_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogNamePromptComponent"])
            .onClose.subscribe(function (name) { return name && _this.names.push(name); });
    };
    DialogResultComponent.ɵfac = function DialogResultComponent_Factory(t) { return new (t || DialogResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogResultComponent, selectors: [["nb-dialog-result"]], decls: 7, vars: 1, consts: [["nbButton", "", "status", "primary", 3, "click"], [1, "h5"], [4, "ngFor", "ngForOf"]], template: function DialogResultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogResultComponent_Template_button_click_0_listener() { return ctx.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Names:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogResultComponent_li_6_Template, 2, 1, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.names);
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogResultComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-result',
                template: "\n    <button nbButton status=\"primary\" (click)=\"open()\">Enter Name</button>\n    <br>\n    <h3 class=\"h5\">Names:</h3>\n    <ul>\n      <li *ngFor=\"let name of names\">{{ name }}</li>\n    </ul>\n  ",
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "D1jT":
/*!*******************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-esc.component.ts ***!
  \*******************************************************************/
/*! exports provided: DialogEscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEscComponent", function() { return DialogEscComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_esc_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/esc-dialog.component */ "aAUz");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var DialogEscComponent = /** @class */ (function () {
    function DialogEscComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogEscComponent.prototype.openWithEscClose = function () {
        this.open(true);
    };
    DialogEscComponent.prototype.openWithoutEscClose = function () {
        this.open(false);
    };
    DialogEscComponent.prototype.open = function (closeOnEsc) {
        this.dialogService.open(_components_esc_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EscDialogComponent"], { closeOnEsc: closeOnEsc });
    };
    DialogEscComponent.ɵfac = function DialogEscComponent_Factory(t) { return new (t || DialogEscComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogEscComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogEscComponent, selectors: [["nb-dialog-esc"]], decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function DialogEscComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogEscComponent_Template_button_click_0_listener() { return ctx.openWithEscClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open with escape close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogEscComponent_Template_button_click_2_listener() { return ctx.openWithoutEscClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Open without escape close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogEscComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogEscComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-esc',
                template: "\n    <button nbButton (click)=\"openWithEscClose()\">Open with escape close</button>\n    <button nbButton (click)=\"openWithoutEscClose()\">Open without escape close</button>\n  ",
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "Rf0Y":
/*!********************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DialogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogRoutingModule", function() { return DialogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dialog_auto_focus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-auto-focus.component */ "kKoF");
/* harmony import */ var _dialog_backdrop_click_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-backdrop-click.component */ "oh7r");
/* harmony import */ var _dialog_esc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-esc.component */ "D1jT");
/* harmony import */ var _dialog_has_backdrop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-has-backdrop.component */ "4qyw");
/* harmony import */ var _dialog_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-result.component */ "CIYk");
/* harmony import */ var _dialog_scroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-scroll.component */ "qQHK");
/* harmony import */ var _dialog_showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-showcase.component */ "Bwbz");
/* harmony import */ var _dialog_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog-template.component */ "na/A");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var routes = [
    {
        path: 'dialog-auto-focus.component',
        component: _dialog_auto_focus_component__WEBPACK_IMPORTED_MODULE_2__["DialogAutoFocusComponent"],
    },
    {
        path: 'dialog-backdrop-click.component',
        component: _dialog_backdrop_click_component__WEBPACK_IMPORTED_MODULE_3__["DialogBackdropClickComponent"],
    },
    {
        path: 'dialog-esc.component',
        component: _dialog_esc_component__WEBPACK_IMPORTED_MODULE_4__["DialogEscComponent"],
    },
    {
        path: 'dialog-has-backdrop.component',
        component: _dialog_has_backdrop_component__WEBPACK_IMPORTED_MODULE_5__["DialogHasBackdropComponent"],
    },
    {
        path: 'dialog-result.component',
        component: _dialog_result_component__WEBPACK_IMPORTED_MODULE_6__["DialogResultComponent"],
    },
    {
        path: 'dialog-scroll.component',
        component: _dialog_scroll_component__WEBPACK_IMPORTED_MODULE_7__["DialogScrollComponent"],
    },
    {
        path: 'dialog-showcase.component',
        component: _dialog_showcase_component__WEBPACK_IMPORTED_MODULE_8__["DialogShowcaseComponent"],
    },
    {
        path: 'dialog-template.component',
        component: _dialog_template_component__WEBPACK_IMPORTED_MODULE_9__["DialogTemplateComponent"],
    },
];
var DialogRoutingModule = /** @class */ (function () {
    function DialogRoutingModule() {
    }
    DialogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DialogRoutingModule });
    DialogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DialogRoutingModule_Factory(t) { return new (t || DialogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DialogRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aAUz":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/components/esc-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: EscDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscDialogComponent", function() { return EscDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/button/button.component */ "b9/t");






var EscDialogComponent = /** @class */ (function () {
    function EscDialogComponent(ref) {
        this.ref = ref;
    }
    EscDialogComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    EscDialogComponent.ɵfac = function EscDialogComponent_Factory(t) { return new (t || EscDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
    EscDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EscDialogComponent, selectors: [["ng-component"]], inputs: { title: "title" }, decls: 8, vars: 1, consts: [[1, "dialog-card"], ["nbButton", "", "status", "primary", 3, "click"]], template: function EscDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EscDialogComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dismiss Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], encapsulation: 2 });
    return EscDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EscDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card class=\"dialog-card\">\n      <nb-card-header>{{ title }}</nb-card-header>\n      <nb-card-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt.\n        Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum.\n        Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci.\n        Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec\n        iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus,\n        in aliquet massa aliquet et.\n      </nb-card-body>\n      <nb-card-footer>\n        <button nbButton status=\"primary\" (click)=\"dismiss()\">Dismiss Dialog</button>\n      </nb-card-footer>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kKoF":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-auto-focus.component.ts ***!
  \**************************************************************************/
/*! exports provided: DialogAutoFocusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAutoFocusComponent", function() { return DialogAutoFocusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_auto_focus_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auto-focus-dialog.component */ "wYcZ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var DialogAutoFocusComponent = /** @class */ (function () {
    function DialogAutoFocusComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogAutoFocusComponent.prototype.openWithAutoFocus = function () {
        this.open(true);
    };
    DialogAutoFocusComponent.prototype.openWithoutAutoFocus = function () {
        this.open(false);
    };
    DialogAutoFocusComponent.prototype.open = function (autoFocus) {
        this.dialogService.open(_components_auto_focus_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AutoFocusDialogComponent"], { autoFocus: autoFocus });
    };
    DialogAutoFocusComponent.ɵfac = function DialogAutoFocusComponent_Factory(t) { return new (t || DialogAutoFocusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogAutoFocusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogAutoFocusComponent, selectors: [["nb-dialog-auto-focus"]], decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function DialogAutoFocusComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogAutoFocusComponent_Template_button_click_0_listener() { return ctx.openWithAutoFocus(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "With auto focus");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogAutoFocusComponent_Template_button_click_2_listener() { return ctx.openWithoutAutoFocus(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Without auto focus");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogAutoFocusComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogAutoFocusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-auto-focus',
                template: "\n    <button nbButton (click)=\"openWithAutoFocus()\">With auto focus</button>\n    <button nbButton (click)=\"openWithoutAutoFocus()\">Without auto focus</button>\n  ",
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "mFI/":
/*!*****************************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/components/backdrop-click-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BackdropClickDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropClickDialogComponent", function() { return BackdropClickDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/button/button.component */ "b9/t");






var BackdropClickDialogComponent = /** @class */ (function () {
    function BackdropClickDialogComponent(ref) {
        this.ref = ref;
    }
    BackdropClickDialogComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    BackdropClickDialogComponent.ɵfac = function BackdropClickDialogComponent_Factory(t) { return new (t || BackdropClickDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
    BackdropClickDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackdropClickDialogComponent, selectors: [["ng-component"]], inputs: { title: "title" }, decls: 8, vars: 1, consts: [[1, "dialog-card"], ["nbButton", "", "status", "primary", 3, "click"]], template: function BackdropClickDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackdropClickDialogComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dismiss Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], encapsulation: 2 });
    return BackdropClickDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackdropClickDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card class=\"dialog-card\">\n      <nb-card-header>{{ title }}</nb-card-header>\n      <nb-card-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt.\n        Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum.\n        Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci.\n        Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec\n        iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus,\n        in aliquet massa aliquet et.\n      </nb-card-body>\n      <nb-card-footer>\n        <button nbButton status=\"primary\" (click)=\"dismiss()\">Dismiss Dialog</button>\n      </nb-card-footer>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "na/A":
/*!************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-template.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTemplateComponent", function() { return DialogTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");






function DialogTemplateComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Template Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogTemplateComponent_ng_template_0_Template_button_click_6_listener() { var ref_r3 = ctx.dialogRef; return ref_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close Dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2);
} }
var DialogTemplateComponent = /** @class */ (function () {
    function DialogTemplateComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogTemplateComponent.prototype.open = function (dialog) {
        this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
    };
    DialogTemplateComponent.ɵfac = function DialogTemplateComponent_Factory(t) { return new (t || DialogTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogTemplateComponent, selectors: [["nb-dialog-template"]], decls: 4, vars: 0, consts: [["dialog", ""], ["nbButton", "", 3, "click"]], template: function DialogTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogTemplateComponent_ng_template_0_Template, 8, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogTemplateComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Open Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogTemplateComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-template',
                template: "\n    <ng-template #dialog let-data let-ref=\"dialogRef\">\n      <nb-card>\n        <nb-card-header>Template Dialog</nb-card-header>\n        <nb-card-body>{{ data }}</nb-card-body>\n        <nb-card-footer>\n          <button nbButton (click)=\"ref.close()\">Close Dialog</button>\n        </nb-card-footer>\n      </nb-card>\n    </ng-template>\n    <button nbButton (click)=\"open(dialog)\">Open Dialog</button>\n  ",
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "oh7r":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-backdrop-click.component.ts ***!
  \******************************************************************************/
/*! exports provided: DialogBackdropClickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBackdropClickComponent", function() { return DialogBackdropClickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_backdrop_click_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/backdrop-click-dialog.component */ "mFI/");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var DialogBackdropClickComponent = /** @class */ (function () {
    function DialogBackdropClickComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogBackdropClickComponent.prototype.openWithBackdropClick = function () {
        this.open(true);
    };
    DialogBackdropClickComponent.prototype.openWithoutBackdropClick = function () {
        this.open(false);
    };
    DialogBackdropClickComponent.prototype.open = function (closeOnBackdropClick) {
        this.dialogService.open(_components_backdrop_click_dialog_component__WEBPACK_IMPORTED_MODULE_2__["BackdropClickDialogComponent"], { closeOnBackdropClick: closeOnBackdropClick });
    };
    DialogBackdropClickComponent.ɵfac = function DialogBackdropClickComponent_Factory(t) { return new (t || DialogBackdropClickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogBackdropClickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogBackdropClickComponent, selectors: [["nb-dialog-backdrop-click"]], decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function DialogBackdropClickComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBackdropClickComponent_Template_button_click_0_listener() { return ctx.openWithBackdropClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "With backdrop click close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBackdropClickComponent_Template_button_click_2_listener() { return ctx.openWithoutBackdropClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Without backdrop click close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogBackdropClickComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogBackdropClickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-backdrop-click',
                template: "\n    <button nbButton (click)=\"openWithBackdropClick()\">With backdrop click close</button>\n    <button nbButton (click)=\"openWithoutBackdropClick()\">Without backdrop click close</button>\n  ",
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "pfEf":
/*!*********************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/components/scroll-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ScrollDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDialogComponent", function() { return ScrollDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/button/button.component */ "b9/t");






var ScrollDialogComponent = /** @class */ (function () {
    function ScrollDialogComponent(ref) {
        this.ref = ref;
    }
    ScrollDialogComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    ScrollDialogComponent.ɵfac = function ScrollDialogComponent_Factory(t) { return new (t || ScrollDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
    ScrollDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollDialogComponent, selectors: [["ng-component"]], inputs: { title: "title" }, decls: 8, vars: 1, consts: [[1, "dialog-card"], ["nbButton", "", "status", "primary", 3, "click"]], template: function ScrollDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollDialogComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dismiss Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], encapsulation: 2 });
    return ScrollDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card class=\"dialog-card\">\n      <nb-card-header>{{ title }}</nb-card-header>\n      <nb-card-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt.\n        Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum.\n        Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci.\n        Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec\n        iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus,\n        in aliquet massa aliquet et.\n      </nb-card-body>\n      <nb-card-footer>\n        <button nbButton status=\"primary\" (click)=\"dismiss()\">Dismiss Dialog</button>\n      </nb-card-footer>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qQHK":
/*!**********************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog-scroll.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogScrollComponent", function() { return DialogScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _components_scroll_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scroll-dialog.component */ "pfEf");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/button/button.component */ "b9/t");






var DialogScrollComponent = /** @class */ (function () {
    function DialogScrollComponent(dialogService) {
        this.dialogService = dialogService;
    }
    DialogScrollComponent.prototype.openWithScroll = function () {
        this.open(true);
    };
    DialogScrollComponent.prototype.openWithoutScroll = function () {
        this.open(false);
    };
    DialogScrollComponent.prototype.open = function (hasScroll) {
        this.dialogService.open(_components_scroll_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ScrollDialogComponent"], { hasScroll: hasScroll });
    };
    DialogScrollComponent.ɵfac = function DialogScrollComponent_Factory(t) { return new (t || DialogScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
    DialogScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogScrollComponent, selectors: [["nb-dialog-scroll"]], decls: 4, vars: 0, consts: [["nbButton", "", 3, "click"]], template: function DialogScrollComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogScrollComponent_Template_button_click_0_listener() { return ctx.openWithScroll(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "With scroll");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogScrollComponent_Template_button_click_2_listener() { return ctx.openWithoutScroll(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Without scroll");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["nb-layout-column {\n  height: 80vw;\n}\n  button + button {\n  margin-left: 1rem;\n}\n  .dialog-card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n@media (min-width: 40rem) {\n    .dialog-card {\n    width: 38rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L2RpYWxvZy9kaWFsb2ctY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFO0lBQ0UsWUFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvZGlhbG9nL2RpYWxvZy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIG5iLWxheW91dC1jb2x1bW4ge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxuXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuZGlhbG9nLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgLmRpYWxvZy1jYXJkIHtcbiAgICAgIHdpZHRoOiAzOHJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return DialogScrollComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-dialog-scroll',
                template: "\n    <button nbButton (click)=\"openWithScroll()\">With scroll</button>\n    <button nbButton (click)=\"openWithoutScroll()\">Without scroll</button>\n  ",
                styleUrls: ['./dialog-common.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"] }]; }, null); })();


/***/ }),

/***/ "v/Id":
/*!**************************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/components/name-prompt-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogNamePromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNamePromptComponent", function() { return DialogNamePromptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../framework/theme/components/button/button.component */ "b9/t");







var DialogNamePromptComponent = /** @class */ (function () {
    function DialogNamePromptComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogNamePromptComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    DialogNamePromptComponent.prototype.submit = function (name) {
        this.dialogRef.close(name);
    };
    DialogNamePromptComponent.ɵfac = function DialogNamePromptComponent_Factory(t) { return new (t || DialogNamePromptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
    DialogNamePromptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogNamePromptComponent, selectors: [["nb-name-prompt"]], decls: 11, vars: 0, consts: [["nbInput", "", "placeholder", "Name"], ["name", ""], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "success", 3, "click"]], template: function DialogNamePromptComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogNamePromptComponent_Template_button_click_7_listener() { return ctx.cancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogNamePromptComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.submit(_r0.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], encapsulation: 2 });
    return DialogNamePromptComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogNamePromptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-name-prompt',
                template: "\n    <nb-card>\n      <nb-card-header>Enter your name</nb-card-header>\n      <nb-card-body>\n        <input #name nbInput placeholder=\"Name\">\n      </nb-card-body>\n      <nb-card-footer>\n        <button nbButton status=\"danger\" (click)=\"cancel()\">Cancel</button>\n        <button nbButton status=\"success\" (click)=\"submit(name.value)\">Submit</button>\n      </nb-card-footer>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, null); })();


/***/ }),

/***/ "wYcZ":
/*!*************************************************************************************!*\
  !*** ./src/playground/with-layout/dialog/components/auto-focus-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AutoFocusDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDialogComponent", function() { return AutoFocusDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/theme/components/button/button.component */ "b9/t");






var AutoFocusDialogComponent = /** @class */ (function () {
    function AutoFocusDialogComponent(ref) {
        this.ref = ref;
    }
    AutoFocusDialogComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    AutoFocusDialogComponent.ɵfac = function AutoFocusDialogComponent_Factory(t) { return new (t || AutoFocusDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
    AutoFocusDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoFocusDialogComponent, selectors: [["ng-component"]], inputs: { title: "title" }, decls: 8, vars: 1, consts: [[1, "dialog-card"], ["nbButton", "", "status", "primary", 3, "click"]], template: function AutoFocusDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoFocusDialogComponent_Template_button_click_6_listener() { return ctx.dismiss(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dismiss Dialog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _framework_theme_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], encapsulation: 2 });
    return AutoFocusDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoFocusDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card class=\"dialog-card\">\n      <nb-card-header>{{ title }}</nb-card-header>\n      <nb-card-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt.\n        Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum.\n        Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci.\n        Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec\n        iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus,\n        in aliquet massa aliquet et.\n      </nb-card-body>\n      <nb-card-footer>\n        <button nbButton status=\"primary\" (click)=\"dismiss()\">Dismiss Dialog</button>\n      </nb-card-footer>\n    </nb-card>\n  ",
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yQ12":
/*!************************************************************!*\
  !*** ./src/playground/with-layout/dialog/dialog.module.ts ***!
  \************************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-routing.module */ "Rf0Y");
/* harmony import */ var _dialog_auto_focus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-auto-focus.component */ "kKoF");
/* harmony import */ var _dialog_backdrop_click_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-backdrop-click.component */ "oh7r");
/* harmony import */ var _dialog_esc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-esc.component */ "D1jT");
/* harmony import */ var _dialog_has_backdrop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-has-backdrop.component */ "4qyw");
/* harmony import */ var _dialog_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-result.component */ "CIYk");
/* harmony import */ var _dialog_scroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog-scroll.component */ "qQHK");
/* harmony import */ var _dialog_showcase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-showcase.component */ "Bwbz");
/* harmony import */ var _dialog_template_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog-template.component */ "na/A");
/* harmony import */ var _components_auto_focus_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auto-focus-dialog.component */ "wYcZ");
/* harmony import */ var _components_backdrop_click_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/backdrop-click-dialog.component */ "mFI/");
/* harmony import */ var _components_esc_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/esc-dialog.component */ "aAUz");
/* harmony import */ var _components_has_backdrop_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/has-backdrop-dialog.component */ "BHtV");
/* harmony import */ var _components_name_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/name-prompt-dialog.component */ "v/Id");
/* harmony import */ var _components_scroll_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/scroll-dialog.component */ "pfEf");
/* harmony import */ var _components_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/showcase-dialog.component */ "AQDC");
/* harmony import */ var _framework_theme_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../framework/theme/components/dialog/dialog.module */ "8P01");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





















var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DialogModule });
    DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__["DialogRoutingModule"],
            ]] });
    return DialogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_dialog_auto_focus_component__WEBPACK_IMPORTED_MODULE_4__["DialogAutoFocusComponent"],
        _dialog_backdrop_click_component__WEBPACK_IMPORTED_MODULE_5__["DialogBackdropClickComponent"],
        _dialog_esc_component__WEBPACK_IMPORTED_MODULE_6__["DialogEscComponent"],
        _dialog_has_backdrop_component__WEBPACK_IMPORTED_MODULE_7__["DialogHasBackdropComponent"],
        _dialog_result_component__WEBPACK_IMPORTED_MODULE_8__["DialogResultComponent"],
        _dialog_scroll_component__WEBPACK_IMPORTED_MODULE_9__["DialogScrollComponent"],
        _dialog_showcase_component__WEBPACK_IMPORTED_MODULE_10__["DialogShowcaseComponent"],
        _dialog_template_component__WEBPACK_IMPORTED_MODULE_11__["DialogTemplateComponent"],
        _components_auto_focus_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AutoFocusDialogComponent"],
        _components_backdrop_click_dialog_component__WEBPACK_IMPORTED_MODULE_13__["BackdropClickDialogComponent"],
        _components_esc_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EscDialogComponent"],
        _components_has_backdrop_dialog_component__WEBPACK_IMPORTED_MODULE_15__["HasBackdropDialogComponent"],
        _components_name_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogNamePromptComponent"],
        _components_scroll_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ScrollDialogComponent"],
        _components_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ShowcaseDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _framework_theme_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_19__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__["DialogRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _dialog_auto_focus_component__WEBPACK_IMPORTED_MODULE_4__["DialogAutoFocusComponent"],
                    _dialog_backdrop_click_component__WEBPACK_IMPORTED_MODULE_5__["DialogBackdropClickComponent"],
                    _dialog_esc_component__WEBPACK_IMPORTED_MODULE_6__["DialogEscComponent"],
                    _dialog_has_backdrop_component__WEBPACK_IMPORTED_MODULE_7__["DialogHasBackdropComponent"],
                    _dialog_result_component__WEBPACK_IMPORTED_MODULE_8__["DialogResultComponent"],
                    _dialog_scroll_component__WEBPACK_IMPORTED_MODULE_9__["DialogScrollComponent"],
                    _dialog_showcase_component__WEBPACK_IMPORTED_MODULE_10__["DialogShowcaseComponent"],
                    _dialog_template_component__WEBPACK_IMPORTED_MODULE_11__["DialogTemplateComponent"],
                    _components_auto_focus_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AutoFocusDialogComponent"],
                    _components_backdrop_click_dialog_component__WEBPACK_IMPORTED_MODULE_13__["BackdropClickDialogComponent"],
                    _components_esc_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EscDialogComponent"],
                    _components_has_backdrop_dialog_component__WEBPACK_IMPORTED_MODULE_15__["HasBackdropDialogComponent"],
                    _components_name_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogNamePromptComponent"],
                    _components_scroll_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ScrollDialogComponent"],
                    _components_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ShowcaseDialogComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _dialog_routing_module__WEBPACK_IMPORTED_MODULE_3__["DialogRoutingModule"],
                ],
                entryComponents: [
                    _components_auto_focus_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AutoFocusDialogComponent"],
                    _components_backdrop_click_dialog_component__WEBPACK_IMPORTED_MODULE_13__["BackdropClickDialogComponent"],
                    _components_esc_dialog_component__WEBPACK_IMPORTED_MODULE_14__["EscDialogComponent"],
                    _components_has_backdrop_dialog_component__WEBPACK_IMPORTED_MODULE_15__["HasBackdropDialogComponent"],
                    _components_name_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogNamePromptComponent"],
                    _components_scroll_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ScrollDialogComponent"],
                    _components_showcase_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ShowcaseDialogComponent"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dialog-dialog-module.js.map