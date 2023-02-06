(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-detail/product-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"main_content_div\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/9.jpg)'\">\n            <div class=\"icn_flex\">\n                <ion-icon name=\"chevron-back\" style=\"font-size: 30px;\" (click)=\"goToBack()\"></ion-icon>\n                <ion-icon name=\"heart-outline\" style=\"font-size: 25px;\"></ion-icon>\n            </div>\n        </div>\n        <div class=\"content_div\">\n\n            <div class=\"name_flex\">\n                <ion-label class=\"name_lbl\">Edition valencia Linen Shirt</ion-label>\n                <div style=\"margin-left: 25px;\">\n                    <ion-label class=\"off_lbl\">$ 40.00</ion-label>\n                    <ion-label class=\"price_lbl\">$ 24.50</ion-label>\n                </div>\n            </div>\n\n            <div class=\"rating_div\">\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-label>13 Reviews</ion-label>\n            </div>\n\n            <ion-label class=\"grey_title\">Color</ion-label>\n            <div class=\"color_flex\">\n                <div class=\"color_div\" [style.backgroundColor]=\"item\" [class.active]=\"currentColor == i\" *ngFor=\"let item of colors; let i = index\" (click)=\"chooseColor(i)\">\n                    <ion-icon name=\"checkmark\" *ngIf=\"currentColor == i\"></ion-icon>\n                </div>\n            </div>\n            \n            <ion-label class=\"grey_title\">Size</ion-label>\n            <div class=\"color_flex\">\n                <div class=\"color_div2\" [class.active]=\"currentSize == i\" *ngFor=\"let item of availableSizes; let i = index\" (click)=\"chooseSize(i)\">\n                    <ion-label>{{item}}</ion-label>\n                </div>\n            </div>\n\n            <ion-button expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"openModal()\">\n                <ion-icon name=\"bag\"></ion-icon>\n                Add to Bag\n            </ion-button>\n\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function() { return ProductDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/product-detail/product-detail.page.ts");




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/pages/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/pages/product-detail/product-detail.page.ts");







let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"]
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
    })
], ProductDetailPageModule);



/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div ion-label {\n  display: block;\n}\n.main_content_div .back_image {\n  width: 100%;\n  height: 350px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .back_image .icn_flex {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main_content_div .content_div {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background: white;\n  margin-top: -10px;\n  padding: 16px;\n}\n.main_content_div .content_div .name_flex {\n  display: flex;\n}\n.main_content_div .content_div .name_flex .name_lbl {\n  font-size: 24px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .content_div .name_flex .off_lbl {\n  color: grey;\n  text-decoration: line-through;\n  font-size: 14px;\n  white-space: nowrap;\n  margin-top: 10px;\n}\n.main_content_div .content_div .name_flex .price_lbl {\n  font-family: \"semi-bold\";\n  white-space: nowrap;\n}\n.main_content_div .content_div .rating_div {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.main_content_div .content_div .rating_div ion-icon {\n  color: orange;\n  margin-right: 3px;\n}\n.main_content_div .content_div .rating_div ion-label {\n  margin-left: 16px;\n  color: grey;\n}\n.main_content_div .content_div .grey_title {\n  color: grey;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .color_flex {\n  display: flex;\n  overflow: scroll;\n  padding-bottom: 10px;\n}\n.main_content_div .content_div .color_flex .color_div {\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  border-radius: 100%;\n  margin-right: 16px;\n  position: relative;\n}\n.main_content_div .content_div .color_flex .color_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div .content_div .color_flex .color_div2 {\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  border-radius: 100%;\n  margin-right: 16px;\n  background: #ECEBF1;\n  position: relative;\n}\n.main_content_div .content_div .color_flex .color_div2 ion-label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n}\n.main_content_div .content_div .color_flex .active {\n  border: 3px solid white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n}\n.main_content_div .content_div ion-button {\n  margin: 0px;\n  margin-top: 20px;\n}\n.main_content_div .content_div ion-button ion-icon {\n  margin-right: 10px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksY0FBQTtBQURSO0FBR0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQURSO0FBR1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURaO0FBSUk7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFGUjtBQUlRO0VBQ0ksYUFBQTtBQUZaO0FBSVk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7QUFGaEI7QUFJWTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRmhCO0FBSVk7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FBRmhCO0FBTVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBTVk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFKaEI7QUFNWTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUpoQjtBQVFRO0VBQ0ksV0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVNRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFQWjtBQVNZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUGhCO0FBU2dCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBUHBCO0FBVVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJoQjtBQVVnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFScEI7QUFXWTtFQUNJLHVCQUFBO0VBQ0EsMENBQUE7QUFUaEI7QUFhUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQVhaO0FBYVk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFYaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdiB7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgICAgIC5pY25fZmxleCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudF9kaXYge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgIC5uYW1lX2ZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9mZl9sYmwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2VfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yYXRpbmdfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmdyZXlfdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb2xvcl9mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5jb2xvcl9kaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbG9yX2RpdjIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0VDRUJGMTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product-detail/product-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_modal_product_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../product-modal/product-modal.page */ "./src/app/pages/product-modal/product-modal.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ProductDetailPage = class ProductDetailPage {
    constructor(modalCrtl, navCtrl) {
        this.modalCrtl = modalCrtl;
        this.navCtrl = navCtrl;
        this.colors = [
            '#F1F0F4',
            '#E5D2C4',
            '#deda97',
            '#b9ede0',
            '#DDE7F1',
            '#D6E6E0',
            '#BBBBBB',
            '#E6CBCA',
            '#e5d1eb'
        ];
        this.availableSizes = [
            'XS', 'S', 'M', 'L'
        ];
    }
    ngOnInit() {
    }
    chooseColor(val) {
        this.currentColor = val;
    }
    chooseSize(val) {
        this.currentSize = val;
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCrtl.create({
                component: _product_modal_product_modal_page__WEBPACK_IMPORTED_MODULE_1__["ProductModalPage"],
                cssClass: 'center_modal'
            });
            return yield modal.present();
        });
    }
    goToBack() {
        this.navCtrl.back();
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-product-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-detail/product-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/pages/product-detail/product-detail.page.scss")).default]
    })
], ProductDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-detail-product-detail-module-es2015.js.map