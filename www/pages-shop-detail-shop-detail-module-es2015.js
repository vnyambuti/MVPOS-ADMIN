(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-detail-shop-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-detail/shop-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-detail/shop-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-button (click)=\"goToBack()\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n            <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n            Back\n        </ion-button>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"heart\" style=\"font-size: 20px;\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"bag\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-slides pager=\"ios\">\n            <ion-slide *ngFor=\"let item of sliders\">\n                <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item +')'\">\n                  <div class=\"overlay_div\">\n                        <div class=\"abs_div\">\n                            <ion-label class=\"collection_lbl\">Spring Collection</ion-label>\n                            <ion-label class=\"white_lbl\">50 Designer Brands</ion-label>\n                        </div>\n                  </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n              \n        <div class=\"content_div\">\n            <div class=\"header_flex\">\n                <div>\n                    <ion-label class=\"bold_lbl\">Designer Collection</ion-label>\n                    <ion-label class=\"grey_lbl\">2000 Items Found</ion-label>\n                </div>\n                <ion-icon name=\"options\"></ion-icon>\n            </div>\n\n            <div class=\"cat_slider\">\n                <div *ngFor=\"let item of cats; let i = index\" (click)=\"selCat(i)\" [class.active]=\"selectCat == i\">\n                    <ion-label>{{item}}</ion-label>\n                </div>\n            </div>\n\n            <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let item of product\">\n                    <div class=\"main_col\" (click)=\"goToProduct()\">\n                        <div class=\"col_back\" [style.backgroundImage]=\"'url('+ item +')'\">\n                            <div class=\"round_div\">\n                                <ion-icon name=\"heart\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"detail_div\">\n                            <ion-label class=\"brand_lbl\">WEST</ion-label>\n                            <ion-label class=\"name_lbl\">Black T-shirt</ion-label>\n                            <ion-label class=\"price_lbl\">$ 40.70</ion-label>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            \n        </div>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/shop-detail/shop-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/shop-detail/shop-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShopDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailPageRoutingModule", function() { return ShopDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shop_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-detail.page */ "./src/app/pages/shop-detail/shop-detail.page.ts");




const routes = [
    {
        path: '',
        component: _shop_detail_page__WEBPACK_IMPORTED_MODULE_3__["ShopDetailPage"]
    }
];
let ShopDetailPageRoutingModule = class ShopDetailPageRoutingModule {
};
ShopDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/shop-detail/shop-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/shop-detail/shop-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ShopDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailPageModule", function() { return ShopDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shop_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-detail-routing.module */ "./src/app/pages/shop-detail/shop-detail-routing.module.ts");
/* harmony import */ var _shop_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-detail.page */ "./src/app/pages/shop-detail/shop-detail.page.ts");







let ShopDetailPageModule = class ShopDetailPageModule {
};
ShopDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopDetailPageRoutingModule"]
        ],
        declarations: [_shop_detail_page__WEBPACK_IMPORTED_MODULE_6__["ShopDetailPage"]]
    })
], ShopDetailPageModule);



/***/ }),

/***/ "./src/app/pages/shop-detail/shop-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/shop-detail/shop-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\nion-content {\n  --background: #f3f3f3;\n}\n.main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .back_image {\n  width: 100%;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .back_image .overlay_div {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.main_content_div .back_image .overlay_div .abs_div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.main_content_div .back_image .overlay_div .abs_div .collection_lbl {\n  text-transform: capitalize;\n  color: white;\n  font-size: 20px;\n  letter-spacing: 1px;\n  width: 100%;\n  margin-bottom: 5px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .back_image .overlay_div .abs_div .white_lbl {\n  color: white;\n  width: 100%;\n  font-size: 14px;\n}\n.main_content_div .content_div {\n  padding: 16px;\n}\n.main_content_div .content_div .header_flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.main_content_div .content_div .header_flex .bold_lbl {\n  font-family: \"semi-bold\";\n  font-size: 18px;\n}\n.main_content_div .content_div .header_flex .grey_lbl {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .content_div .header_flex ion-icon {\n  font-size: 25px;\n  color: grey;\n}\n.main_content_div .content_div .cat_slider {\n  display: flex;\n  overflow: scroll;\n  margin-bottom: 16px;\n}\n.main_content_div .content_div .cat_slider div {\n  padding: 3px 20px;\n  margin-right: 16px;\n  border-radius: 25px;\n}\n.main_content_div .content_div .cat_slider div ion-label {\n  white-space: nowrap;\n  font-size: 14px;\n  color: black;\n}\n.main_content_div .content_div .cat_slider .active {\n  background: #8B8A8F;\n}\n.main_content_div .content_div .cat_slider .active ion-label {\n  color: white;\n}\n.main_content_div .content_div .main_col {\n  width: 100%;\n}\n.main_content_div .content_div .main_col .col_back {\n  width: 100%;\n  height: 180px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  position: relative;\n}\n.main_content_div .content_div .main_col .col_back .round_div {\n  height: 30px;\n  width: 30px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .main_col .col_back .round_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 13px;\n  color: grey;\n}\n.main_content_div .content_div .main_col .detail_div {\n  margin-top: 5px;\n}\n.main_content_div .content_div .main_col .detail_div .brand_lbl {\n  font-family: \"medium\";\n  font-size: 13px;\n  text-transform: uppercase;\n}\n.main_content_div .content_div .main_col .detail_div .name_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .content_div .main_col .detail_div .price_lbl {\n  font-size: 14px;\n  font-family: \"medium\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC1kZXRhaWwvc2hvcC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUdBO0VBQ0kscUJBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUFaO0FBRVk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBQWhCO0FBRWdCO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFBcEI7QUFFZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBcEI7QUFNSTtFQUNJLGFBQUE7QUFKUjtBQU1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBTVk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFKaEI7QUFNWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBSmhCO0FBTVk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUpoQjtBQVFRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOWjtBQU9ZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTGhCO0FBT2dCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUxwQjtBQVFZO0VBQ0ksbUJBQUE7QUFOaEI7QUFRZ0I7RUFDSSxZQUFBO0FBTnBCO0FBV1E7RUFDSSxXQUFBO0FBVFo7QUFXWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVRoQjtBQVdnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFUcEI7QUFXb0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVR4QjtBQWFZO0VBQ0ksZUFBQTtBQVhoQjtBQVlnQjtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBVnBCO0FBWWdCO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FBVnBCO0FBWWdCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBVnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvcC1kZXRhaWwvc2hvcC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYm9sZCc7XG4gICAgfVxuICAgIC5iYWNrX2J0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjNmM2YzO1xufVxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgICAgIC5vdmVybGF5X2RpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmFic19kaXYge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2hpdGVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgLmhlYWRlcl9mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmdyZXlfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhdF9zbGlkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4QjhBOEY7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1haW5fY29sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAuY29sX2JhY2sge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnJvdW5kX2RpdiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIC5icmFuZF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmljZV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/shop-detail/shop-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/shop-detail/shop-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ShopDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailPage", function() { return ShopDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ShopDetailPage = class ShopDetailPage {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.sliders = [
            'assets/imgs/10.jpg',
            'assets/imgs/11.jpg',
            'assets/imgs/14.jpg',
        ];
        this.product = [
            'assets/imgs/5.jpg',
            'assets/imgs/6.jpg',
            'assets/imgs/7.jpg',
            'assets/imgs/8.jpg',
            'assets/imgs/9.jpg',
            'assets/imgs/10.jpg',
            'assets/imgs/11.jpg',
            'assets/imgs/12.jpg',
        ];
        this.cats = [
            'Everything',
            'Jackets',
            'Blazers',
            'Dresses',
            'Jeans',
            'T-shirts',
            'Shirts'
        ];
        this.selectCat = 0;
    }
    ngOnInit() {
    }
    goToBack() {
        this.navCtrl.back();
    }
    selCat(val) {
        console.log(val);
        this.selectCat = val;
    }
    goToProduct() {
        this.route.navigate(['/product-detail']);
    }
};
ShopDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ShopDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-shop-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shop-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop-detail/shop-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shop-detail.page.scss */ "./src/app/pages/shop-detail/shop-detail.page.scss")).default]
    })
], ShopDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-shop-detail-shop-detail-module-es2015.js.map