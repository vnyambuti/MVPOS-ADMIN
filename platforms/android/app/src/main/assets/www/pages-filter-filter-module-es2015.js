(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-filter-filter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-icon name=\"close\" class=\"close_btn\"></ion-icon>\n\n        <ion-label class=\"bold_lbl\">Filters</ion-label>\n\n        <div class=\"flex_header\">\n            <ion-label class=\"header_lbl\">Price Range</ion-label>\n        </div>\n\n        <ion-range min=\"-200\" max=\"200\" dual-knobs=\"true\" mode=\"ios\">\n            <ion-label slot=\"start\">$ 50</ion-label>\n            <ion-label slot=\"end\">$ 1000</ion-label>\n        </ion-range>\n\n        <div class=\"flex_header\">\n            <ion-label class=\"header_lbl\">Sizes</ion-label>\n        </div>\n        <div class=\"color_flex\">\n            <div class=\"color_div2\" [class.active]=\"currentSize == i\" *ngFor=\"let item of availableSizes; let i = index\" (click)=\"chooseSize(i)\">\n                <ion-label>{{item}}</ion-label>\n            </div>\n        </div>\n\n        <div class=\"flex_header\">\n            <ion-label class=\"header_lbl\">Brands</ion-label>\n            <ion-label class=\"grey_lbl\">Select All</ion-label>\n        </div>\n\n        <div class=\"list_div\">\n            <ion-list>\n                <ion-item *ngFor=\"let brand of brands\">\n                    <ion-label>{{brand}}</ion-label>\n                    <ion-checkbox></ion-checkbox>\n                </ion-item>\n            </ion-list>\n        </div>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/filter/filter-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/filter/filter-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function() { return FilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.page */ "./src/app/pages/filter/filter.page.ts");




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/filter/filter.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.module.ts ***!
  \***********************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-routing.module */ "./src/app/pages/filter/filter-routing.module.ts");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.page */ "./src/app/pages/filter/filter.page.ts");







let FilterPageModule = class FilterPageModule {
};
FilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageRoutingModule"]
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"]]
    })
], FilterPageModule);



/***/ }),

/***/ "./src/app/pages/filter/filter.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #FAFAFA;\n}\n\n.main_content_div {\n  padding: 16px;\n  padding-top: 50px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .close_btn {\n  position: absolute;\n  right: 16px;\n  font-size: 26px;\n}\n\n.main_content_div .bold_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n.main_content_div .flex_header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.main_content_div .flex_header .header_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n\n.main_content_div .flex_header .grey_lbl {\n  color: grey;\n  font-size: 14px;\n}\n\n.main_content_div ion-range {\n  padding: 0px;\n  --knob-size: 15px;\n  --knob-box-shadow: 0px 0px 0px 3px #fff;\n  --knob-background: #8A8A8A;\n  margin-bottom: 20px;\n}\n\n.main_content_div .color_flex {\n  display: flex;\n  overflow: scroll;\n  padding-bottom: 16px;\n}\n\n.main_content_div .color_flex .color_div2 {\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  border-radius: 100%;\n  margin-right: 16px;\n  background: white;\n  position: relative;\n}\n\n.main_content_div .color_flex .color_div2 ion-label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n}\n\n.main_content_div .color_flex .active {\n  background: black;\n}\n\n.main_content_div .color_flex .active ion-label {\n  color: white;\n}\n\n.main_content_div .list_div ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: #FAFAFA;\n  color: grey;\n}\n\n.main_content_div .list_div ion-checkbox {\n  --border-width: 0px;\n  --background: #FAFAFA;\n  --background-checked: #FAFAFA;\n  --checkmark-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUk7RUFDSSxjQUFBO0FBRVI7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBQ0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBRVE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFBWjs7QUFFUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQVo7O0FBSUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFJSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRlI7O0FBSVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZaOztBQUlZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUZoQjs7QUFLUTtFQUNJLGlCQUFBO0FBSFo7O0FBSVk7RUFDSSxZQUFBO0FBRmhCOztBQVFRO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQU5aOztBQVFRO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkNBQUE7QUFOWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbHRlci9maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0ZBRkFGQTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4IDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5jbG9zZV9idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIC5ib2xkX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC5mbGV4X2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAuaGVhZGVyX2xibCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyZXlfbGJsIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXJhbmdlIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAtLWtub2Itc2l6ZTogMTVweDtcbiAgICAgICAgLS1rbm9iLWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjZmZmO1xuICAgICAgICAtLWtub2ItYmFja2dyb3VuZDogIzhBOEE4QTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmNvbG9yX2ZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgXG4gICAgICAgIC5jb2xvcl9kaXYyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxpc3RfZGl2IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNGQUZBRkE7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuICAgICAgICBpb24tY2hlY2tib3gge1xuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRkFGQUZBO1xuICAgICAgICAgICAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/filter/filter.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/filter/filter.page.ts ***!
  \*********************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let FilterPage = class FilterPage {
    constructor(modalCrtl) {
        this.modalCrtl = modalCrtl;
        this.availableSizes = [
            'XS', 'S', 'M', 'L', 'XL'
        ];
        this.brands = [
            'Academy', 'ACNE', 'Ator', 'Baby', 'Bec Bride'
        ];
    }
    ngOnInit() {
    }
    chooseSize(val) {
        this.currentSize = val;
    }
    close() {
        this.modalCrtl.dismiss();
    }
};
FilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
FilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter.page.scss */ "./src/app/pages/filter/filter.page.scss")).default]
    })
], FilterPage);



/***/ })

}]);
//# sourceMappingURL=pages-filter-filter-module-es2015.js.map