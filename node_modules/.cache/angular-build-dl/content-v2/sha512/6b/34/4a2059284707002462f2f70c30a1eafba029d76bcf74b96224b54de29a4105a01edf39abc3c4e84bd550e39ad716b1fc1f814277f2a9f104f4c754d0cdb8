(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review/review.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review/review.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n            <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n            Back\n        </ion-button>\n        <ion-title>Review</ion-title>\n        <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"product_div\">\n            <div class=\"back_img\" [style.backgroundImage]=\"'url(assets/imgs/12.jpg)'\"></div>\n            <div class=\"detail_div\">\n                <ion-label>Edition Valencia Linen shirt</ion-label>\n            </div>\n            <ion-label class=\"price_lbl\">$24.50</ion-label>\n        </div>\n\n        <div class=\"content_div\">\n            <div class=\"rating_div\">\n                <ion-label class=\"head_lbl\">4.9 <sub>out of 5</sub></ion-label>\n                <div>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-label class=\"rate_lbl\">124 Ratings</ion-label>\n                </div>\n            </div>\n\n            <div class=\"rating_bar\">\n                <div class=\"rate_flex\" *ngFor=\"let review of reviews\">\n                    <ion-label class=\"no_lbl\">{{review.no}}</ion-label>\n                    <ion-icon name=\"star\"></ion-icon>\n                    <div class=\"bar_div\"\n                        [style.background]=\"getBackground(0, review.per)\"\n                    ></div>\n                    <ion-label class=\"per_lbl\">{{review.per}}%</ion-label>\n                </div>\n            </div>\n\n            <div class=\"flex_header\">\n                <ion-label>13 Reviews</ion-label>\n                <ion-label>Write a review</ion-label>\n            </div>\n\n            <div class=\"review_div\" *ngFor=\"let item of users\">\n                <div class=\"round_user\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\n                <div class=\"user_detail\">\n                    <ion-label class=\"name_lbl\">Carly west</ion-label>\n                    <div class=\"rating_flex\">\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star\"></ion-icon>\n                        <ion-icon name=\"star-outline\"></ion-icon>\n                        <ion-label>4 out off 5, oct 20, 2020</ion-label>\n                    </div>\n                    <ion-label class=\"review_lbl\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ion-label>\n                </div>\n            </div>\n\n        </div>\n\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/review/review-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/review/review-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageRoutingModule", function() { return ReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review.page */ "./src/app/pages/review/review.page.ts");




const routes = [
    {
        path: '',
        component: _review_page__WEBPACK_IMPORTED_MODULE_3__["ReviewPage"]
    }
];
let ReviewPageRoutingModule = class ReviewPageRoutingModule {
};
ReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReviewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/review/review.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/review/review.module.ts ***!
  \***********************************************/
/*! exports provided: ReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-routing.module */ "./src/app/pages/review/review-routing.module.ts");
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review.page */ "./src/app/pages/review/review.page.ts");







let ReviewPageModule = class ReviewPageModule {
};
ReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _review_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewPageRoutingModule"]
        ],
        declarations: [_review_page__WEBPACK_IMPORTED_MODULE_6__["ReviewPage"]]
    })
], ReviewPageModule);



/***/ }),

/***/ "./src/app/pages/review/review.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/review/review.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .product_div {\n  padding: 16px;\n  display: flex;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n}\n.main_content_div .product_div .back_img {\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .product_div .detail_div {\n  padding-left: 10px;\n}\n.main_content_div .product_div .detail_div ion-label {\n  font-family: \"semi-bold\";\n  width: 70%;\n}\n.main_content_div .product_div .price_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div .content_div {\n  padding: 16px;\n}\n.main_content_div .content_div .rating_div {\n  display: flex;\n  justify-content: space-between;\n}\n.main_content_div .content_div .rating_div .head_lbl {\n  font-size: 30px;\n  font-family: \"bold\";\n}\n.main_content_div .content_div .rating_div sub {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: grey;\n}\n.main_content_div .content_div .rating_div ion-icon {\n  color: orange;\n  margin-right: 3px;\n}\n.main_content_div .content_div .rating_div .rate_lbl {\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div .content_div .rating_bar {\n  margin-top: 16px;\n}\n.main_content_div .content_div .rating_bar .rate_flex {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .rating_bar .rate_flex .no_lbl {\n  color: grey;\n  font-size: 14px;\n  width: 20px;\n  text-align: left;\n}\n.main_content_div .content_div .rating_bar .rate_flex ion-icon {\n  color: orange;\n  margin-right: 10px;\n  font-size: 17px;\n}\n.main_content_div .content_div .rating_bar .rate_flex .bar_div {\n  height: 4px;\n  width: 100%;\n}\n.main_content_div .content_div .rating_bar .rate_flex .per_lbl {\n  font-size: 13px;\n  margin-left: 10px;\n}\n.main_content_div .content_div .flex_header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n}\n.main_content_div .content_div .flex_header ion-label {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .content_div .review_div {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid lightgrey;\n  display: flex;\n}\n.main_content_div .content_div .review_div .round_user {\n  height: 45px;\n  width: 45px;\n  min-width: 45px;\n  border-radius: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .content_div .review_div .user_detail {\n  padding-left: 10px;\n}\n.main_content_div .content_div .review_div .user_detail .name_lbl {\n  font-size: 15px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .content_div .review_div .user_detail .rating_flex {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .content_div .review_div .user_detail .rating_flex ion-icon {\n  margin-right: 3px;\n  color: orange;\n}\n.main_content_div .content_div .review_div .user_detail .rating_flex ion-label {\n  margin-left: 10px;\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .content_div .review_div .user_detail .review_lbl {\n  margin-top: 2px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBSUk7RUFDSSxjQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7QUFEUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQURaO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBSVk7RUFDSSx3QkFBQTtFQUNBLFVBQUE7QUFGaEI7QUFLUTtFQUNJLHdCQUFBO0FBSFo7QUFNSTtFQUNJLGFBQUE7QUFKUjtBQU1RO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBSlo7QUFNWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUpoQjtBQU1ZO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUpoQjtBQU1ZO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBSmhCO0FBTVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUpoQjtBQVFRO0VBQ0ksZ0JBQUE7QUFOWjtBQU9ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMaEI7QUFNZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQUxwQjtBQVFnQjtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFOcEI7QUFTZ0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQVBwQjtBQWtCZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFoQnBCO0FBcUJRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW5CWjtBQW9CWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBbEJoQjtBQXNCUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUFwQlo7QUFzQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQXBCaEI7QUFzQlk7RUFDSSxrQkFBQTtBQXBCaEI7QUFzQmdCO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBcEJwQjtBQXNCZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFwQnBCO0FBc0JvQjtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQXBCeEI7QUFzQm9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXBCeEI7QUF1QmdCO0VBRUksZUFBQTtFQUNBLGVBQUE7QUF0QnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICB9XG4gICAgLmJhY2tfYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnByb2R1Y3RfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuXG4gICAgICAgIC5iYWNrX2ltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbF9kaXYge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcmljZV9sYmwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgLnJhdGluZ19kaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgLmhlYWRfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlX2xibCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJhdGluZ19iYXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICAgIC5yYXRlX2ZsZXgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgLm5vX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5iYXJfZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRvIHJpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwJSwgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgNjAlLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICNFRUVFRUUgNTAlLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICNFRUVFRUUgMTAwJVxuICAgICAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wZXJfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleF9oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmV2aWV3X2RpdiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIC5yb3VuZF91c2VyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyX2RldGFpbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yYXRpbmdfZmxleCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZXZpZXdfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/review/review.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/review/review.page.ts ***!
  \*********************************************/
/*! exports provided: ReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPage", function() { return ReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ReviewPage = class ReviewPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.users = [
            'assets/imgs/user1.jpg',
            'assets/imgs/user2.jpg',
            'assets/imgs/user3.jpg',
            'assets/imgs/user4.jpg',
            'assets/imgs/user5.jpg',
        ];
        this.reviews = [
            {
                no: '5',
                per: 70
            },
            {
                no: '4',
                per: 62
            },
            {
                no: '3',
                per: 57
            },
            {
                no: '2',
                per: 42
            },
            {
                no: '1',
                per: 37
            },
        ];
    }
    ngOnInit() {
    }
    getBackground(start, end) {
        // const style = { background : `linear-gradient(${start},${end})`};
        // const style = 'linear-gradient(to right, black 0%, black 60%, #EEEEEE 50%, #EEEEEE 100%)';
        const style = 'linear-gradient(to right, black 0%, black ' + end + '%, #EEEEEE ' + end + '% , #EEEEEE 100%)';
        console.log(start, end, style);
        return (style);
    }
    goToBack() {
        this.navCtrl.back();
    }
};
ReviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review/review.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./review.page.scss */ "./src/app/pages/review/review.page.scss")).default]
    })
], ReviewPage);



/***/ })

}]);
//# sourceMappingURL=pages-review-review-module-es2015.js.map