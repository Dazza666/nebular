(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tree-grid-tree-grid-module"],{

/***/ "/TEO":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-showcase.component.ts ***!
  \******************************************************************************/
/*! exports provided: TreeGridShowcaseComponent, FsIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridShowcaseComponent", function() { return TreeGridShowcaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FsIconComponent", function() { return FsIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-filter */ "Fgf/");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-sort.component */ "OiVt");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.component */ "ee57");
/* harmony import */ var _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../framework/theme/components/icon/icon.component */ "FuSZ");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
















function TreeGridShowcaseComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
} }
function TreeGridShowcaseComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
function TreeGridShowcaseComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSortHeader", ctx_r2.getSortDirection(ctx_r2.customColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.customColumn, " ");
} }
function TreeGridShowcaseComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-fs-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r6 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("kind", row_r6.data.kind)("expanded", row_r6.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r6.data[ctx_r3.customColumn], " ");
} }
function TreeGridShowcaseComponent_ng_container_11_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSortHeader", ctx_r9.getSortDirection(column_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r7, " ");
} }
function TreeGridShowcaseComponent_ng_container_11_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r12 = ctx.$implicit;
    var column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r12.data[column_r7] || "-");
} }
function TreeGridShowcaseComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridShowcaseComponent_ng_container_11_th_1_Template, 2, 2, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeGridShowcaseComponent_ng_container_11_td_2_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r7 = ctx.$implicit;
    var index_r8 = ctx.index;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r7)("showOn", ctx_r4.getShowOn(index_r8));
} }
function FsIconComponent_nb_tree_grid_row_toggle_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 2);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r0.expanded);
} }
function FsIconComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 3);
} }
var TreeGridShowcaseComponent = /** @class */ (function () {
    function TreeGridShowcaseComponent(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = __spreadArrays([this.customColumn], this.defaultColumns);
        this.sortDirection = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortDirection"].NONE;
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.dataSource = this.dataSourceBuilder.create(this.data);
    }
    TreeGridShowcaseComponent.prototype.updateSort = function (sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    };
    TreeGridShowcaseComponent.prototype.getSortDirection = function (column) {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortDirection"].NONE;
    };
    TreeGridShowcaseComponent.prototype.getShowOn = function (index) {
        var minWithForMultipleColumns = 400;
        var nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
    };
    TreeGridShowcaseComponent.ɵfac = function TreeGridShowcaseComponent_Factory(t) { return new (t || TreeGridShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"])); };
    TreeGridShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridShowcaseComponent, selectors: [["nb-tree-grid-showcase"]], decls: 12, vars: 7, consts: [["for", "search", 1, "search-label"], ["nbInput", "", "id", "search", 1, "search-input", 3, "nbFilterInput"], [3, "nbTreeGrid", "nbSort", "sort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", "showOn", 4, "ngFor", "ngForOf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", ""], [3, "kind", "expanded"], [3, "nbTreeGridColumnDef", "showOn"]], template: function TreeGridShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TreeGridShowcaseComponent_Template_table_sort_5_listener($event) { return ctx.updateSort($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridShowcaseComponent_tr_6_Template, 1, 0, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeGridShowcaseComponent_tr_7_Template, 1, 0, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TreeGridShowcaseComponent_th_9_Template, 2, 2, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TreeGridShowcaseComponent_td_10_Template, 3, 3, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TreeGridShowcaseComponent_ng_container_11_Template, 3, 2, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbFilterInput", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.dataSource)("nbSort", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
        } }, directives: function () { return [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _framework_theme_components_tree_grid_tree_grid_filter__WEBPACK_IMPORTED_MODULE_4__["NbFilterInputDirective"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_6__["NbSortDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridHeaderRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridHeaderCellDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_10__["NbTreeGridHeaderRowComponent"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_10__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_11__["NbTreeGridHeaderCellDirective"], _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_6__["NbSortHeaderComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_11__["NbTreeGridCellDirective"], FsIconComponent]; }, styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */", "button[nbTreeGridRowToggle][_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\n.search-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.nb-column-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (min-width: 400px) {\n  .nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%] {\n    width: 33.333%;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .nb-column-name[_ngcontent-%COMP%] {\n    width: 31%;\n  }\n\n  .nb-column-size[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%], .nb-column-items[_ngcontent-%COMP%] {\n    width: 23%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0U7O0lBRUUsVUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRTs7O0lBR0UsY0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFBRjs7RUFFQTs7O0lBR0UsVUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvdHJlZS1ncmlkL3RyZWUtZ3JpZC1zaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltuYlRyZWVHcmlkUm93VG9nZ2xlXSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZWFyY2gtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubmItY29sdW1uLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLm5iLWNvbHVtbi1uYW1lLFxuICAubmItY29sdW1uLXNpemUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLm5iLWNvbHVtbi1uYW1lLFxuICAubmItY29sdW1uLXNpemUsXG4gIC5uYi1jb2x1bW4ta2luZCB7XG4gICAgd2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm5iLWNvbHVtbi1uYW1lIHtcbiAgICB3aWR0aDogMzElO1xuICB9XG4gIC5uYi1jb2x1bW4tc2l6ZSxcbiAgLm5iLWNvbHVtbi1raW5kLFxuICAubmItY29sdW1uLWl0ZW1zIHtcbiAgICB3aWR0aDogMjMlO1xuICB9XG59XG4iXX0= */"] });
    return TreeGridShowcaseComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-tree-grid-showcase',
                templateUrl: './tree-grid-showcase.component.html',
                styleUrls: ['./tree-grid-shared.scss', './tree-grid-showcase.component.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"] }]; }, null); })();
var FsIconComponent = /** @class */ (function () {
    function FsIconComponent() {
    }
    FsIconComponent.prototype.isDir = function () {
        return this.kind === 'dir';
    };
    FsIconComponent.ɵfac = function FsIconComponent_Factory(t) { return new (t || FsIconComponent)(); };
    FsIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FsIconComponent, selectors: [["nb-fs-icon"]], inputs: { kind: "kind", expanded: "expanded" }, decls: 3, vars: 2, consts: [[3, "expanded", 4, "ngIf", "ngIfElse"], ["fileIcon", ""], [3, "expanded"], ["icon", "file-text-outline"]], template: function FsIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FsIconComponent_nb_tree_grid_row_toggle_0_Template, 1, 1, "nb-tree-grid-row-toggle", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FsIconComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDir())("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_12__["NbTreeGridRowToggleComponent"], _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["NbIconComponent"]], encapsulation: 2 });
    return FsIconComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FsIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nb-fs-icon',
                template: "\n    <nb-tree-grid-row-toggle [expanded]=\"expanded\" *ngIf=\"isDir(); else fileIcon\">\n    </nb-tree-grid-row-toggle>\n    <ng-template #fileIcon>\n      <nb-icon icon=\"file-text-outline\"></nb-icon>\n    </ng-template>\n  ",
            }]
    }], null, { kind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "67ey":
/*!***************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-basic.component.ts ***!
  \***************************************************************************/
/*! exports provided: TreeGridBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridBasicComponent", function() { return TreeGridBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.component */ "ee57");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};










function TreeGridBasicComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 5);
} }
function TreeGridBasicComponent_td_5_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 8);
} if (rf & 2) {
    var row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r4.expanded);
} }
function TreeGridBasicComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridBasicComponent_td_5_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r4.data.kind === "dir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r4.data.name, " ");
} }
function TreeGridBasicComponent_ng_container_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r9 = ctx.$implicit;
    var column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.data[column_r7]);
} }
function TreeGridBasicComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridBasicComponent_ng_container_6_td_1_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r7);
} }
var TreeGridBasicComponent = /** @class */ (function () {
    function TreeGridBasicComponent() {
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = __spreadArrays([this.customColumn], this.defaultColumns);
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
    }
    TreeGridBasicComponent.ɵfac = function TreeGridBasicComponent_Factory(t) { return new (t || TreeGridBasicComponent)(); };
    TreeGridBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridBasicComponent, selectors: [["ng-component"]], decls: 7, vars: 4, consts: [["equalColumnsWidth", "", 3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function TreeGridBasicComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeGridBasicComponent_tr_3_Template, 1, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TreeGridBasicComponent_td_5_Template, 3, 2, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridBasicComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.data);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridRowToggleComponent"]], styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */"] });
    return TreeGridBasicComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n\n        <table [nbTreeGrid]=\"data\" equalColumnsWidth>\n\n          <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n          <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n\n              <nb-tree-grid-row-toggle\n                [expanded]=\"row.expanded\"\n                *ngIf=\"row.data.kind === 'dir'\">\n              </nb-tree-grid-row-toggle>\n\n              {{row.data.name}}\n\n            </td>\n          </ng-container>\n\n          <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column]}}</td>\n          </ng-container>\n\n        </table>\n\n      </nb-card-body>\n    </nb-card>\n  ",
                styleUrls: ['./tree-grid-shared.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "FBsK":
/*!******************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid.module.ts ***!
  \******************************************************************/
/*! exports provided: TreeGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridModule", function() { return TreeGridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _tree_grid_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-grid-showcase.component */ "/TEO");
/* harmony import */ var _tree_grid_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree-grid-routing.module */ "iJbM");
/* harmony import */ var _tree_grid_sortable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-grid-sortable.component */ "ln4Z");
/* harmony import */ var _tree_grid_filterable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-grid-filterable.component */ "b0gk");
/* harmony import */ var _tree_grid_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree-grid-basic.component */ "67ey");
/* harmony import */ var _tree_grid_responsive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree-grid-responsive.component */ "nu+7");
/* harmony import */ var _tree_grid_custom_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree-grid-custom-icons.component */ "Umza");
/* harmony import */ var _tree_grid_disable_click_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tree-grid-disable-click-toggle.component */ "Sr7S");
/* harmony import */ var _tree_grid_custom_node_structure_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tree-grid-custom-node-structure.component */ "PnqS");
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */













var TreeGridModule = /** @class */ (function () {
    function TreeGridModule() {
    }
    TreeGridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TreeGridModule });
    TreeGridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TreeGridModule_Factory(t) { return new (t || TreeGridModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridModule"], _tree_grid_routing_module__WEBPACK_IMPORTED_MODULE_4__["TreeGridRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"]]] });
    return TreeGridModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeGridModule, { declarations: [_tree_grid_showcase_component__WEBPACK_IMPORTED_MODULE_3__["FsIconComponent"],
        _tree_grid_showcase_component__WEBPACK_IMPORTED_MODULE_3__["TreeGridShowcaseComponent"],
        _tree_grid_sortable_component__WEBPACK_IMPORTED_MODULE_5__["TreeGridSortableComponent"],
        _tree_grid_filterable_component__WEBPACK_IMPORTED_MODULE_6__["TreeGridFilterableComponent"],
        _tree_grid_basic_component__WEBPACK_IMPORTED_MODULE_7__["TreeGridBasicComponent"],
        _tree_grid_responsive_component__WEBPACK_IMPORTED_MODULE_8__["TreeGridResponsiveComponent"],
        _tree_grid_custom_icons_component__WEBPACK_IMPORTED_MODULE_9__["TreeGridCustomIconsComponent"],
        _tree_grid_disable_click_toggle_component__WEBPACK_IMPORTED_MODULE_10__["TreeGridDisableClickToggleComponent"],
        _tree_grid_custom_node_structure_component__WEBPACK_IMPORTED_MODULE_11__["TreeGridCustomNodeStructureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridModule"], _tree_grid_routing_module__WEBPACK_IMPORTED_MODULE_4__["TreeGridRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridModule"], _tree_grid_routing_module__WEBPACK_IMPORTED_MODULE_4__["TreeGridRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"]],
                declarations: [
                    _tree_grid_showcase_component__WEBPACK_IMPORTED_MODULE_3__["FsIconComponent"],
                    _tree_grid_showcase_component__WEBPACK_IMPORTED_MODULE_3__["TreeGridShowcaseComponent"],
                    _tree_grid_sortable_component__WEBPACK_IMPORTED_MODULE_5__["TreeGridSortableComponent"],
                    _tree_grid_filterable_component__WEBPACK_IMPORTED_MODULE_6__["TreeGridFilterableComponent"],
                    _tree_grid_basic_component__WEBPACK_IMPORTED_MODULE_7__["TreeGridBasicComponent"],
                    _tree_grid_responsive_component__WEBPACK_IMPORTED_MODULE_8__["TreeGridResponsiveComponent"],
                    _tree_grid_custom_icons_component__WEBPACK_IMPORTED_MODULE_9__["TreeGridCustomIconsComponent"],
                    _tree_grid_disable_click_toggle_component__WEBPACK_IMPORTED_MODULE_10__["TreeGridDisableClickToggleComponent"],
                    _tree_grid_custom_node_structure_component__WEBPACK_IMPORTED_MODULE_11__["TreeGridCustomNodeStructureComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "PnqS":
/*!*******************************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-custom-node-structure.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TreeGridCustomNodeStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridCustomNodeStructureComponent", function() { return TreeGridCustomNodeStructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.component */ "ee57");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};












function TreeGridCustomNodeStructureComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 7);
} }
function TreeGridCustomNodeStructureComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 8);
} }
function TreeGridCustomNodeStructureComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.customColumn);
} }
function TreeGridCustomNodeStructureComponent_td_7_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 12);
} if (rf & 2) {
    var row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r6.expanded);
} }
function TreeGridCustomNodeStructureComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridCustomNodeStructureComponent_td_7_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r6 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r6.data.kind === "dir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r6.data[ctx_r3.customColumn], " ");
} }
function TreeGridCustomNodeStructureComponent_ng_container_8_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r9);
} }
function TreeGridCustomNodeStructureComponent_ng_container_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r13 = ctx.$implicit;
    var column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r13.data[column_r9] || "-");
} }
function TreeGridCustomNodeStructureComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridCustomNodeStructureComponent_ng_container_8_th_1_Template, 2, 1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeGridCustomNodeStructureComponent_ng_container_8_td_2_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r9);
} }
var TreeGridCustomNodeStructureComponent = /** @class */ (function () {
    function TreeGridCustomNodeStructureComponent(dataSourceBuilder) {
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = __spreadArrays([this.customColumn], this.defaultColumns);
        this.data = [
            {
                name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir', expanded: true,
                childEntries: [
                    { name: 'project-1.doc', kind: 'doc', size: '240 KB' },
                    { name: 'project-2.doc', kind: 'doc', size: '290 KB' },
                    {
                        name: 'project-3', kind: 'dir', size: '466 KB', items: 3,
                        childEntries: [
                            { name: 'project-3A.doc', kind: 'doc', size: '200 KB' },
                            { name: 'project-3B.doc', kind: 'doc', size: '266 KB' },
                            { name: 'project-3C.doc', kind: 'doc', size: '0' },
                        ],
                    },
                    { name: 'project-4.docx', kind: 'docx', size: '900 KB' },
                ],
            },
            {
                name: 'Reports', kind: 'dir', size: '400 KB', items: 2,
                childEntries: [
                    {
                        name: 'Report 1', kind: 'dir', size: '100 KB', items: 1,
                        childEntries: [
                            { name: 'report-1.doc', kind: 'doc', size: '100 KB' },
                        ],
                    },
                    {
                        name: 'Report 2', kind: 'dir', size: '300 KB', items: 2,
                        childEntries: [
                            { name: 'report-2.doc', kind: 'doc', size: '290 KB' },
                            { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' },
                        ],
                    },
                ],
            },
            {
                name: 'Other', kind: 'dir', size: '109 MB', items: 2,
                childEntries: [
                    { name: 'backup.bkp', kind: 'bkp', size: '107 MB' },
                    { name: 'secret-note.txt', kind: 'txt', size: '2 MB' },
                ],
            },
        ];
        var getters = {
            dataGetter: function (node) { return node; },
            childrenGetter: function (node) { return node.childEntries || undefined; },
            expandedGetter: function (node) { return !!node.expanded; },
        };
        this.source = dataSourceBuilder.create(this.data, getters);
    }
    TreeGridCustomNodeStructureComponent.ɵfac = function TreeGridCustomNodeStructureComponent_Factory(t) { return new (t || TreeGridCustomNodeStructureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"])); };
    TreeGridCustomNodeStructureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridCustomNodeStructureComponent, selectors: [["ng-component"]], decls: 9, vars: 5, consts: [[3, "nbTreeGrid"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", ""], ["nbTreeGridCell", ""], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function TreeGridCustomNodeStructureComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeGridCustomNodeStructureComponent_tr_3_Template, 1, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TreeGridCustomNodeStructureComponent_tr_4_Template, 1, 0, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridCustomNodeStructureComponent_th_6_Template, 2, 1, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeGridCustomNodeStructureComponent_td_7_Template, 3, 2, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreeGridCustomNodeStructureComponent_ng_container_8_Template, 3, 1, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.source);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridHeaderRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridHeaderCellDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridHeaderRowComponent"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridHeaderCellDirective"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridRowToggleComponent"]], styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */"] });
    return TreeGridCustomNodeStructureComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridCustomNodeStructureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n\n        <table [nbTreeGrid]=\"source\">\n          <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n          <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n          <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>{{customColumn}}</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n\n              <nb-tree-grid-row-toggle\n                [expanded]=\"row.expanded\"\n                *ngIf=\"row.data.kind === 'dir'\">\n              </nb-tree-grid-row-toggle>\n\n              {{row.data[customColumn]}}\n\n            </td>\n          </ng-container>\n\n          <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>{{column}}</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column] || '-'}}</td>\n          </ng-container>\n        </table>\n\n      </nb-card-body>\n    </nb-card>\n  ",
                styleUrls: ['./tree-grid-shared.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"] }]; }, null); })();


/***/ }),

/***/ "Sr7S":
/*!******************************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-disable-click-toggle.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TreeGridDisableClickToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridDisableClickToggleComponent", function() { return TreeGridDisableClickToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.component */ "ee57");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};










function TreeGridDisableClickToggleComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickToToggle", false);
} }
function TreeGridDisableClickToggleComponent_td_5_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 8);
} if (rf & 2) {
    var row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r4.expanded);
} }
function TreeGridDisableClickToggleComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridDisableClickToggleComponent_td_5_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r4.data.kind === "dir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r4.data.name, " ");
} }
function TreeGridDisableClickToggleComponent_ng_container_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r9 = ctx.$implicit;
    var column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.data[column_r7]);
} }
function TreeGridDisableClickToggleComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridDisableClickToggleComponent_ng_container_6_td_1_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r7);
} }
var TreeGridDisableClickToggleComponent = /** @class */ (function () {
    function TreeGridDisableClickToggleComponent() {
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = __spreadArrays([this.customColumn], this.defaultColumns);
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
    }
    TreeGridDisableClickToggleComponent.ɵfac = function TreeGridDisableClickToggleComponent_Factory(t) { return new (t || TreeGridDisableClickToggleComponent)(); };
    TreeGridDisableClickToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridDisableClickToggleComponent, selectors: [["ng-component"]], decls: 7, vars: 4, consts: [["equalColumnsWidth", "", 3, "nbTreeGrid"], ["nbTreeGridRow", "", 3, "clickToToggle", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridRow", "", 3, "clickToToggle"], ["nbTreeGridCell", ""], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function TreeGridDisableClickToggleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeGridDisableClickToggleComponent_tr_3_Template, 1, 1, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TreeGridDisableClickToggleComponent_td_5_Template, 3, 2, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridDisableClickToggleComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.data);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridRowToggleComponent"]], styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */"] });
    return TreeGridDisableClickToggleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridDisableClickToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n\n        <table [nbTreeGrid]=\"data\" equalColumnsWidth>\n\n          <tr nbTreeGridRow [clickToToggle]=\"false\" *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n          <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n\n              <nb-tree-grid-row-toggle\n                [expanded]=\"row.expanded\"\n                *ngIf=\"row.data.kind === 'dir'\">\n              </nb-tree-grid-row-toggle>\n\n              {{row.data.name}}\n\n            </td>\n          </ng-container>\n\n          <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column]}}</td>\n          </ng-container>\n\n        </table>\n\n      </nb-card-body>\n    </nb-card>\n  ",
                styleUrls: ['./tree-grid-shared.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Umza":
/*!**********************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-custom-icons.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TreeGridCustomIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridCustomIconsComponent", function() { return TreeGridCustomIconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-sort.component */ "OiVt");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/theme/components/icon/icon.component */ "FuSZ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.directive */ "/tkb");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};














function TreeGridCustomIconsComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 7);
} }
function TreeGridCustomIconsComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 8);
} }
function TreeGridCustomIconsComponent_th_6_span_2_nb_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 13);
} }
function TreeGridCustomIconsComponent_th_6_span_2_nb_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-icon", 14);
} }
function TreeGridCustomIconsComponent_th_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridCustomIconsComponent_th_6_span_2_nb_icon_1_Template, 1, 0, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeGridCustomIconsComponent_th_6_span_2_nb_icon_2_Template, 1, 0, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var asc_r7 = ctx.isAscending;
    var desc_r8 = ctx.isDescending;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asc_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", desc_r8);
} }
function TreeGridCustomIconsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeGridCustomIconsComponent_th_6_span_2_Template, 3, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.customColumn, " ");
} }
function TreeGridCustomIconsComponent_td_7_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", row_r11.expanded ? "collapse" : "expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", row_r11.expanded ? "chevron-down-outline" : "chevron-right-outline");
} }
function TreeGridCustomIconsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridCustomIconsComponent_td_7_button_1_Template, 2, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r11.hasChildren());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r11.data.name, " ");
} }
function TreeGridCustomIconsComponent_ng_container_8_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r14);
} }
function TreeGridCustomIconsComponent_ng_container_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r18 = ctx.$implicit;
    var column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r18.data[column_r14]);
} }
function TreeGridCustomIconsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridCustomIconsComponent_ng_container_8_th_1_Template, 2, 1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeGridCustomIconsComponent_ng_container_8_td_2_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r14);
} }
var TreeGridCustomIconsComponent = /** @class */ (function () {
    function TreeGridCustomIconsComponent(dataSourceBuilder) {
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = __spreadArrays([this.customColumn], this.defaultColumns);
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.dataSource = dataSourceBuilder.create(this.data);
    }
    TreeGridCustomIconsComponent.ɵfac = function TreeGridCustomIconsComponent_Factory(t) { return new (t || TreeGridCustomIconsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"])); };
    TreeGridCustomIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridCustomIconsComponent, selectors: [["ng-component"]], decls: 9, vars: 6, consts: [["equalColumnsWidth", "", 3, "nbTreeGrid", "nbSort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridHeaderCell", "", "nbSortHeader", "", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", "nbSortHeader", ""], [4, "nbSortHeaderIcon"], ["icon", "chevron-down-outline", "aria-label", "sorted ascending", 4, "ngIf"], ["icon", "chevron-up-outline", "aria-label", "sorted descending", 4, "ngIf"], ["icon", "chevron-down-outline", "aria-label", "sorted ascending"], ["icon", "chevron-up-outline", "aria-label", "sorted descending"], ["nbTreeGridCell", ""], ["nbTreeGridRowToggle", "", 4, "ngIf"], ["nbTreeGridRowToggle", ""], ["aria-hidden", "true", 3, "icon"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridHeaderCell", ""]], template: function TreeGridCustomIconsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeGridCustomIconsComponent_tr_3_Template, 1, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TreeGridCustomIconsComponent_tr_4_Template, 1, 0, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridCustomIconsComponent_th_6_Template, 3, 1, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeGridCustomIconsComponent_td_7_Template, 3, 2, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreeGridCustomIconsComponent_ng_container_8_Template, 3, 1, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.dataSource)("nbSort", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_4__["NbSortDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridHeaderRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridHeaderCellDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridHeaderRowComponent"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridHeaderCellDirective"], _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_4__["NbSortHeaderComponent"], _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_4__["NbSortHeaderIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _framework_theme_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["NbIconComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridCellDirective"], _framework_theme_components_tree_grid_tree_grid_row_toggle_directive__WEBPACK_IMPORTED_MODULE_11__["NbTreeGridRowToggleDirective"]], styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */", "button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\n.nb-column-name[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtY3VzdG9tLWljb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLWN1c3RvbS1pY29ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYi1jb2x1bW4tbmFtZSBuYi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbiJdfQ== */"] });
    return TreeGridCustomIconsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridCustomIconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n\n        <table [nbTreeGrid]=\"dataSource\" [nbSort]=\"dataSource\" equalColumnsWidth>\n\n          <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n          <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n          <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef nbSortHeader>\n              {{customColumn}}\n              <span *nbSortHeaderIcon=\"let asc = isAscending; let desc = isDescending\">\n                <nb-icon *ngIf=\"asc\" icon=\"chevron-down-outline\" aria-label=\"sorted ascending\"></nb-icon>\n                <nb-icon *ngIf=\"desc\" icon=\"chevron-up-outline\" aria-label=\"sorted descending\"></nb-icon>\n              </span>\n            </th>\n\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n              <button nbTreeGridRowToggle\n                      *ngIf=\"row.hasChildren()\"\n                      [attr.aria-label]=\"row.expanded ? 'collapse' : 'expand'\">\n                <nb-icon [icon]=\"row.expanded ? 'chevron-down-outline' : 'chevron-right-outline'\"\n                         aria-hidden=\"true\">\n                </nb-icon>\n              </button>\n              {{row.data.name}}\n            </td>\n\n          </ng-container>\n\n          <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>{{column}}</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column]}}</td>\n          </ng-container>\n\n        </table>\n\n      </nb-card-body>\n    </nb-card>\n  ",
                styleUrls: ['./tree-grid-shared.scss', './tree-grid-custom-icons.component.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"] }]; }, null); })();


/***/ }),

/***/ "b0gk":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-filterable.component.ts ***!
  \********************************************************************************/
/*! exports provided: TreeGridFilterableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridFilterableComponent", function() { return TreeGridFilterableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/input/input.directive */ "Dfz9");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.component */ "ee57");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};













function TreeGridFilterableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
} }
function TreeGridFilterableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
function TreeGridFilterableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.customColumn, " ");
} }
function TreeGridFilterableComponent_td_10_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 14);
} if (rf & 2) {
    var row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r6.expanded);
} }
function TreeGridFilterableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridFilterableComponent_td_10_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r6.data.kind === "dir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r6.data.name, " ");
} }
function TreeGridFilterableComponent_ng_container_11_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r9);
} }
function TreeGridFilterableComponent_ng_container_11_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r13 = ctx.$implicit;
    var column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r13.data[column_r9]);
} }
function TreeGridFilterableComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridFilterableComponent_ng_container_11_th_1_Template, 2, 1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeGridFilterableComponent_ng_container_11_td_2_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r9);
} }
var TreeGridFilterableComponent = /** @class */ (function () {
    function TreeGridFilterableComponent(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = __spreadArrays([this.customColumn], this.defaultColumns);
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.dataSource = this.dataSourceBuilder.create(this.data);
    }
    TreeGridFilterableComponent.prototype.filter = function (event) {
        this.dataSource.filter(event.target.value);
    };
    TreeGridFilterableComponent.ɵfac = function TreeGridFilterableComponent_Factory(t) { return new (t || TreeGridFilterableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"])); };
    TreeGridFilterableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridFilterableComponent, selectors: [["ng-component"]], decls: 12, vars: 5, consts: [["for", "search", 1, "search-label"], ["nbInput", "", "id", "search", 1, "search-input", 3, "input"], ["equalColumnsWidth", "", 3, "nbTreeGrid"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", ""], ["nbTreeGridCell", ""], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function TreeGridFilterableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type to filter:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TreeGridFilterableComponent_Template_input_input_4_listener($event) { return ctx.filter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridFilterableComponent_tr_6_Template, 1, 0, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeGridFilterableComponent_tr_7_Template, 1, 0, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TreeGridFilterableComponent_th_9_Template, 2, 1, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TreeGridFilterableComponent_td_10_Template, 3, 2, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TreeGridFilterableComponent_ng_container_11_Template, 3, 1, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_input_input_directive__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridHeaderRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridHeaderCellDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridHeaderRowComponent"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridHeaderCellDirective"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_10__["NbTreeGridRowToggleComponent"]], styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */", "button[nbTreeGridRowToggle][_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\n.search-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.nb-column-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (min-width: 400px) {\n  .nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%] {\n    width: 33.333%;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .nb-column-name[_ngcontent-%COMP%] {\n    width: 31%;\n  }\n\n  .nb-column-size[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%], .nb-column-items[_ngcontent-%COMP%] {\n    width: 23%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0U7O0lBRUUsVUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRTs7O0lBR0UsY0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFBRjs7RUFFQTs7O0lBR0UsVUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL3BsYXlncm91bmQvd2l0aC1sYXlvdXQvdHJlZS1ncmlkL3RyZWUtZ3JpZC1zaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltuYlRyZWVHcmlkUm93VG9nZ2xlXSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZWFyY2gtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2gtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubmItY29sdW1uLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLm5iLWNvbHVtbi1uYW1lLFxuICAubmItY29sdW1uLXNpemUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLm5iLWNvbHVtbi1uYW1lLFxuICAubmItY29sdW1uLXNpemUsXG4gIC5uYi1jb2x1bW4ta2luZCB7XG4gICAgd2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm5iLWNvbHVtbi1uYW1lIHtcbiAgICB3aWR0aDogMzElO1xuICB9XG4gIC5uYi1jb2x1bW4tc2l6ZSxcbiAgLm5iLWNvbHVtbi1raW5kLFxuICAubmItY29sdW1uLWl0ZW1zIHtcbiAgICB3aWR0aDogMjMlO1xuICB9XG59XG4iXX0= */"] });
    return TreeGridFilterableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridFilterableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n\n        <label class=\"search-label\" for=\"search\">Type to filter:</label>\n        <input nbInput (input)=\"filter($event)\" id=\"search\" class=\"search-input\">\n\n        <table [nbTreeGrid]=\"dataSource\" equalColumnsWidth>\n\n          <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n          <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n          <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>\n              {{customColumn}}\n            </th>\n\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n\n              <nb-tree-grid-row-toggle\n                [expanded]=\"row.expanded\"\n                *ngIf=\"row.data.kind === 'dir'\">\n              </nb-tree-grid-row-toggle>\n\n              {{row.data.name}}\n\n            </td>\n          </ng-container>\n\n          <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>{{column}}</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column]}}</td>\n          </ng-container>\n\n        </table>\n\n      </nb-card-body>\n    </nb-card>\n  ",
                styleUrls: ['./tree-grid-shared.scss', './tree-grid-showcase.component.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"] }]; }, null); })();


/***/ }),

/***/ "iJbM":
/*!**************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: TreeGridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridRoutingModule", function() { return TreeGridRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tree_grid_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-grid-showcase.component */ "/TEO");
/* harmony import */ var _tree_grid_sortable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-grid-sortable.component */ "ln4Z");
/* harmony import */ var _tree_grid_filterable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree-grid-filterable.component */ "b0gk");
/* harmony import */ var _tree_grid_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-grid-basic.component */ "67ey");
/* harmony import */ var _tree_grid_responsive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-grid-responsive.component */ "nu+7");
/* harmony import */ var _tree_grid_custom_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree-grid-custom-icons.component */ "Umza");
/* harmony import */ var _tree_grid_disable_click_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree-grid-disable-click-toggle.component */ "Sr7S");
/* harmony import */ var _tree_grid_custom_node_structure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree-grid-custom-node-structure.component */ "PnqS");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */












var routes = [
    {
        path: 'tree-grid-showcase.component',
        component: _tree_grid_showcase_component__WEBPACK_IMPORTED_MODULE_2__["TreeGridShowcaseComponent"],
    },
    {
        path: 'tree-grid-sortable.component',
        component: _tree_grid_sortable_component__WEBPACK_IMPORTED_MODULE_3__["TreeGridSortableComponent"],
    },
    {
        path: 'tree-grid-filterable.component',
        component: _tree_grid_filterable_component__WEBPACK_IMPORTED_MODULE_4__["TreeGridFilterableComponent"],
    },
    {
        path: 'tree-grid-basic.component',
        component: _tree_grid_basic_component__WEBPACK_IMPORTED_MODULE_5__["TreeGridBasicComponent"],
    },
    {
        path: 'tree-grid-responsive.component',
        component: _tree_grid_responsive_component__WEBPACK_IMPORTED_MODULE_6__["TreeGridResponsiveComponent"],
    },
    {
        path: 'tree-grid-custom-icons.component',
        component: _tree_grid_custom_icons_component__WEBPACK_IMPORTED_MODULE_7__["TreeGridCustomIconsComponent"],
    },
    {
        path: 'tree-grid-disable-click-toggle.component',
        component: _tree_grid_disable_click_toggle_component__WEBPACK_IMPORTED_MODULE_8__["TreeGridDisableClickToggleComponent"],
    },
    {
        path: 'tree-grid-custom-node-structure.component',
        component: _tree_grid_custom_node_structure_component__WEBPACK_IMPORTED_MODULE_9__["TreeGridCustomNodeStructureComponent"],
    },
];
var TreeGridRoutingModule = /** @class */ (function () {
    function TreeGridRoutingModule() {
    }
    TreeGridRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TreeGridRoutingModule });
    TreeGridRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TreeGridRoutingModule_Factory(t) { return new (t || TreeGridRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TreeGridRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeGridRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ln4Z":
/*!******************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-sortable.component.ts ***!
  \******************************************************************************/
/*! exports provided: TreeGridSortableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridSortableComponent", function() { return TreeGridSortableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "V+HM");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-sort.component */ "OiVt");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.component */ "ee57");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};













function TreeGridSortableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 7);
} }
function TreeGridSortableComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 8);
} }
function TreeGridSortableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSortHeader", ctx_r2.getDirection(ctx_r2.customColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.customColumn, " ");
} }
function TreeGridSortableComponent_td_7_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 12);
} if (rf & 2) {
    var row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r6.expanded);
} }
function TreeGridSortableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridSortableComponent_td_7_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r6.data.kind === "dir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r6.data.name, " ");
} }
function TreeGridSortableComponent_ng_container_8_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSortHeader", ctx_r10.getDirection(column_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r9, " ");
} }
function TreeGridSortableComponent_ng_container_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r13 = ctx.$implicit;
    var column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r13.data[column_r9]);
} }
function TreeGridSortableComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridSortableComponent_ng_container_8_th_1_Template, 2, 2, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeGridSortableComponent_ng_container_8_td_2_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r9);
} }
var TreeGridSortableComponent = /** @class */ (function () {
    function TreeGridSortableComponent(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = __spreadArrays([this.customColumn], this.defaultColumns);
        this.sortColumn = '';
        this.sortDirection = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortDirection"].NONE;
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.dataSource = this.dataSourceBuilder.create(this.data);
    }
    TreeGridSortableComponent.prototype.changeSort = function (sortRequest) {
        this.dataSource.sort(sortRequest);
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    };
    TreeGridSortableComponent.prototype.getDirection = function (column) {
        if (column === this.sortColumn) {
            return this.sortDirection;
        }
        return _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortDirection"].NONE;
    };
    TreeGridSortableComponent.ɵfac = function TreeGridSortableComponent_Factory(t) { return new (t || TreeGridSortableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"])); };
    TreeGridSortableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridSortableComponent, selectors: [["ng-component"]], decls: 9, vars: 5, consts: [["nbSort", "", "equalColumnsWidth", "", 3, "nbTreeGrid", "sort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", ""], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function TreeGridSortableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TreeGridSortableComponent_Template_table_sort_2_listener($event) { return ctx.changeSort($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeGridSortableComponent_tr_3_Template, 1, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TreeGridSortableComponent_tr_4_Template, 1, 0, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridSortableComponent_th_6_Template, 2, 2, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeGridSortableComponent_td_7_Template, 3, 2, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreeGridSortableComponent_ng_container_8_Template, 3, 1, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_4__["NbSortDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridHeaderRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridHeaderCellDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridHeaderRowComponent"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridHeaderCellDirective"], _framework_theme_components_tree_grid_tree_grid_sort_component__WEBPACK_IMPORTED_MODULE_4__["NbSortHeaderComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_9__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_10__["NbTreeGridRowToggleComponent"]], styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */"] });
    return TreeGridSortableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridSortableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n\n        <table [nbTreeGrid]=\"dataSource\" nbSort (sort)=\"changeSort($event)\" equalColumnsWidth>\n\n          <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n          <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n          <ng-container [nbTreeGridColumnDef]=\"customColumn\">\n            <th nbTreeGridHeaderCell [nbSortHeader]=\"getDirection(customColumn)\" *nbTreeGridHeaderCellDef>\n              {{customColumn}}\n            </th>\n\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n\n              <nb-tree-grid-row-toggle\n                [expanded]=\"row.expanded\"\n                *ngIf=\"row.data.kind === 'dir'\">\n              </nb-tree-grid-row-toggle>\n\n              {{row.data.name}}\n\n            </td>\n          </ng-container>\n\n          <ng-container *ngFor=\"let column of defaultColumns\" [nbTreeGridColumnDef]=\"column\">\n            <th nbTreeGridHeaderCell [nbSortHeader]=\"getDirection(column)\" *nbTreeGridHeaderCellDef>\n              {{column}}\n            </th>\n\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data[column]}}</td>\n          </ng-container>\n\n        </table>\n\n      </nb-card-body>\n    </nb-card>\n  ",
                styleUrls: ['./tree-grid-shared.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"] }]; }, null); })();


/***/ }),

/***/ "nu+7":
/*!********************************************************************************!*\
  !*** ./src/playground/with-layout/tree-grid/tree-grid-responsive.component.ts ***!
  \********************************************************************************/
/*! exports provided: TreeGridResponsiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeGridResponsiveComponent", function() { return TreeGridResponsiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/theme/components/card/card.component */ "S+eJ");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid.component */ "/iHW");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-def.component */ "U4a8");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-column-def.directive */ "4Dxw");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row.component */ "xVSM");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-cell.component */ "cSWZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/theme/components/tree-grid/tree-grid-row-toggle.component */ "ee57");










function TreeGridResponsiveComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
} }
function TreeGridResponsiveComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
function TreeGridResponsiveComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeGridResponsiveComponent_td_7_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 14);
} if (rf & 2) {
    var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r11.expanded);
} }
function TreeGridResponsiveComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeGridResponsiveComponent_td_7_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r11.data.kind === "dir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r11.data.name, " ");
} }
function TreeGridResponsiveComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeGridResponsiveComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r14.data.size);
} }
function TreeGridResponsiveComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kind");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeGridResponsiveComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r15.data.kind);
} }
function TreeGridResponsiveComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeGridResponsiveComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r16.data.items || "-");
} }
var TreeGridResponsiveComponent = /** @class */ (function () {
    function TreeGridResponsiveComponent() {
        this.allColumns = ['name', 'size', 'kind', 'items'];
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
    }
    TreeGridResponsiveComponent.ɵfac = function TreeGridResponsiveComponent_Factory(t) { return new (t || TreeGridResponsiveComponent)(); };
    TreeGridResponsiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeGridResponsiveComponent, selectors: [["ng-component"]], decls: 17, vars: 6, consts: [["equalColumnsWidth", "", 3, "nbTreeGrid"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], ["nbTreeGridColumnDef", "name"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridColumnDef", "size", 3, "hideOn"], ["nbTreeGridColumnDef", "kind", 3, "hideOn"], ["nbTreeGridColumnDef", "items", 3, "showOn"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", ""], ["nbTreeGridCell", ""], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function TreeGridResponsiveComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeGridResponsiveComponent_tr_3_Template, 1, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TreeGridResponsiveComponent_tr_4_Template, 1, 0, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeGridResponsiveComponent_th_6_Template, 2, 0, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeGridResponsiveComponent_td_7_Template, 3, 2, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TreeGridResponsiveComponent_th_9_Template, 2, 0, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TreeGridResponsiveComponent_td_10_Template, 2, 1, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TreeGridResponsiveComponent_th_12_Template, 2, 0, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TreeGridResponsiveComponent_td_13_Template, 2, 1, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TreeGridResponsiveComponent_th_15_Template, 2, 0, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TreeGridResponsiveComponent_td_16_Template, 2, 1, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.data);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideOn", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideOn", 1000);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showOn", 1200);
        } }, directives: [_framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _framework_theme_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _framework_theme_components_tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridComponent"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridHeaderRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridRowDefDirective"], _framework_theme_components_tree_grid_tree_grid_column_def_directive__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridColumnDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridHeaderCellDefDirective"], _framework_theme_components_tree_grid_tree_grid_def_component__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridCellDefDirective"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridHeaderRowComponent"], _framework_theme_components_tree_grid_tree_grid_row_component__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridRowComponent"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridHeaderCellDirective"], _framework_theme_components_tree_grid_tree_grid_cell_component__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _framework_theme_components_tree_grid_tree_grid_row_toggle_component__WEBPACK_IMPORTED_MODULE_8__["NbTreeGridRowToggleComponent"]], styles: ["body {\n  min-height: 20rem;\n}\n  .nb-tree-grid-header-cell,   .nb-tree-grid-header-cell button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5Z3JvdW5kL3dpdGgtbGF5b3V0L3RyZWUtZ3JpZC90cmVlLWdyaWQtc2hhcmVkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7O0VBRUUsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvcGxheWdyb3VuZC93aXRoLWxheW91dC90cmVlLWdyaWQvdHJlZS1ncmlkLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMjByZW07XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsLFxuICAubmItdHJlZS1ncmlkLWhlYWRlci1jZWxsIGJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbn1cbiJdfQ== */"] });
    return TreeGridResponsiveComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeGridResponsiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: "\n    <nb-card>\n      <nb-card-body>\n\n        <table [nbTreeGrid]=\"data\" equalColumnsWidth>\n\n          <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\n          <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"></tr>\n\n          <ng-container nbTreeGridColumnDef=\"name\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>name</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">\n\n              <nb-tree-grid-row-toggle\n                [expanded]=\"row.expanded\"\n                *ngIf=\"row.data.kind === 'dir'\">\n              </nb-tree-grid-row-toggle>\n\n              {{row.data.name}}\n\n            </td>\n          </ng-container>\n\n          <ng-container nbTreeGridColumnDef=\"size\" [hideOn]=\"600\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>size</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data.size}}</td>\n          </ng-container>\n\n          <ng-container nbTreeGridColumnDef=\"kind\" [hideOn]=\"1000\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>kind</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data.kind}}</td>\n          </ng-container>\n\n          <ng-container nbTreeGridColumnDef=\"items\" [showOn]=\"1200\">\n            <th nbTreeGridHeaderCell *nbTreeGridHeaderCellDef>items</th>\n            <td nbTreeGridCell *nbTreeGridCellDef=\"let row\">{{row.data.items || '-'}}</td>\n          </ng-container>\n        </table>\n\n      </nb-card-body>\n    </nb-card>\n  ",
                styleUrls: ['./tree-grid-shared.scss'],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tree-grid-tree-grid-module.js.map