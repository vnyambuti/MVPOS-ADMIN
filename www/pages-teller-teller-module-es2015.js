(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teller-teller-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teller/teller.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teller/teller.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"main_content_div\">\n\n    <ion-label class=\"head_lbl\">Teller</ion-label>\n    <div class=\"stepper_div\">\n      <ion-icon name=\"person-add-outline\" [class.activeTab]=\"tabID >= 1\"></ion-icon>\n      <ion-label [class.activeTab]=\"tabID >= 2\">\n          <span>•</span>\n          <span>•</span>\n          <span>•</span>\n          <span>•</span>\n      </ion-label>\n      <ion-icon name=\"filter-circle-outline\" [class.activeTab]=\"tabID >= 2\"></ion-icon>\n      <ion-label [class.activeTab]=\"tabID == 3\">\n          <span>•</span>\n          <span>•</span>\n          <span>•</span>\n          <span>•</span>\n      </ion-label>\n      <ion-icon name=\"pricetags-outline\" [class.activeTab]=\"tabID == 3\"></ion-icon>\n  </div>\n  <p></p>\n  <ion-label class=\"grey_title\">Basic information</ion-label>\n<p></p>\n      <div class=\"shipping_div\" *ngIf=\"tabID == 1\">\n        <form (ngSubmit)=\"sendTeller()\" [formGroup]=\"tellerForm\">\n          <ion-row>\n            <ion-col size=\"6\" style=\"padding-left: 0px;\">\n                <ion-item class=\"username_box\" lines=\"none\">\n                    <ion-label position=\"floating\">Fistname</ion-label>\n                    <ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\n                </ion-item> \n            </ion-col>\n            <ion-col size=\"6\" style=\"padding-right: 0px;\">\n                <ion-item class=\"username_box\" lines=\"none\">\n                    <ion-label position=\"floating\">lastname</ion-label>\n                    <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n                </ion-item> \n            </ion-col>\n        </ion-row>\n          <ion-item class=\"username_box\" lines=\"none\">\n              <ion-label position=\"floating\">phone</ion-label>\n              <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\n          </ion-item>\n\n       \n          \n          <ion-item class=\"username_box\" lines=\"none\">\n            <ion-label position=\"floating\">email</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item> \n          \n          <ion-item class=\"username_box\" lines=\"none\">\n              <ion-label position=\"floating\">password</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          \n          \n\n          <!-- <div class=\"check_flex\">\n              <ion-checkbox mode=\"md\"></ion-checkbox>\n              <ion-label>Save for faster checkout next time</ion-label>\n          </div> -->\n\n          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!tellerForm.valid\" shape=\"round\">\n            Add\n          </ion-button>\n        </form>\n      </div>\n\n\n\n \n  </div>\n  <ion-spinner *ngIf=\"loading\" name=\"crescent\" class=\"ion-text-center\"></ion-spinner>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/teller/teller-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/teller/teller-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TellerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerPageRoutingModule", function() { return TellerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _teller_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teller.page */ "./src/app/pages/teller/teller.page.ts");




const routes = [
    {
        path: '',
        component: _teller_page__WEBPACK_IMPORTED_MODULE_3__["TellerPage"]
    }
];
let TellerPageRoutingModule = class TellerPageRoutingModule {
};
TellerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TellerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/teller/teller.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/teller/teller.module.ts ***!
  \***********************************************/
/*! exports provided: TellerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerPageModule", function() { return TellerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _teller_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teller-routing.module */ "./src/app/pages/teller/teller-routing.module.ts");
/* harmony import */ var _teller_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teller.page */ "./src/app/pages/teller/teller.page.ts");
/* harmony import */ var _shop_shop_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shop/shop.page */ "./src/app/pages/shop/shop.page.ts");








let TellerPageModule = class TellerPageModule {
};
TellerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _teller_routing_module__WEBPACK_IMPORTED_MODULE_5__["TellerPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_teller_page__WEBPACK_IMPORTED_MODULE_6__["TellerPage"]],
        providers: [_shop_shop_page__WEBPACK_IMPORTED_MODULE_7__["ShopPage"]]
    })
], TellerPageModule);



/***/ }),

/***/ "./src/app/pages/teller/teller.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/teller/teller.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\n.main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .stepper_div {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main_content_div .stepper_div ion-icon {\n  font-size: 22px !important;\n  color: gray;\n}\n.main_content_div .stepper_div ion-label {\n  display: flex;\n  justify-content: space-between;\n  width: 20%;\n  color: gray;\n}\n.main_content_div .stepper_div .activeTab {\n  color: var(--ion-color-primary) !important;\n}\n.main_content_div .stepper_div .activeTab ion-icon {\n  color: var(--ion-color-primary) !important;\n}\n.main_content_div .stepper_div .activeTab ion-label {\n  color: var(--ion-color-primary) !important;\n}\n.main_content_div .head_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 16px;\n  margin-top: 30px;\n}\n.main_content_div .grey_lbl {\n  color: grey;\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n.main_content_div .title_header {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 10px;\n}\n.main_content_div .shipping_div ion-item {\n  border-bottom: 1px solid #CBCBCB;\n  --padding-start: 0px;\n  margin-bottom: 5px;\n}\n.main_content_div .shipping_div ion-item ion-label {\n  color: grey;\n}\n.main_content_div .shipping_div .check_flex {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .shipping_div .check_flex ion-label {\n  color: grey;\n  font-size: 14px;\n  margin-left: 10px;\n}\n.main_content_div .shipping_div ion-button {\n  margin: 0;\n  margin-top: 30px;\n}\n.main_content_div .choose_card_div .card_slider {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .choose_card_div .card_slider ion-slide {\n  margin-right: 16px;\n}\n.main_content_div .choose_card_div .card_slider .card_div {\n  width: 100%;\n  height: 180px;\n  border-radius: 10px;\n  background: #A99884;\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.main_content_div .choose_card_div .card_slider .card_div img {\n  width: 60px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .card_no {\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.main_content_div .choose_card_div .card_slider .card_div .flex_div ion-label {\n  color: white;\n  font-size: 16px;\n  letter-spacing: 0.6px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .bottom_abs {\n  width: 260px;\n  height: 200px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  bottom: -145px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .side_abs {\n  width: 200px;\n  height: 243px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  right: -80px;\n  top: -25px;\n  transform: rotate(45deg);\n}\n.main_content_div .choose_card_div .or_lbl {\n  font-size: 14px;\n  text-align: center;\n  color: grey;\n  margin-bottom: 16px;\n}\n.main_content_div .choose_card_div ion-button {\n  border: 1px solid lightgray;\n  border-radius: 25px;\n  margin: 0px;\n  margin-bottom: 20px;\n}\n.main_content_div .choose_card_div .paypal_btn img {\n  width: 80px;\n}\n.main_content_div .choose_card_div .apple_pay img {\n  width: 25px;\n  margin-right: 10px;\n}\n.main_content_div .choose_card_div .apple_pay ion-label {\n  font-family: \"medium\";\n}\n.main_content_div .congo_div {\n  position: relative;\n}\n.main_content_div .congo_div .congo_bold {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 10px;\n  text-align: center;\n  margin-top: 200px;\n}\n.main_content_div .congo_div .congo_grey {\n  font-size: 14px;\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVsbGVyL3RlbGxlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBR0E7RUFDSSxhQUFBO0FBQUo7QUFFSTtFQUNJLGNBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRFI7QUFHUTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQURaO0FBSVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZaO0FBS1E7RUFDSSwwQ0FBQTtBQUhaO0FBSVk7RUFDSSwwQ0FBQTtBQUZoQjtBQUlZO0VBQ0ksMENBQUE7QUFGaEI7QUFNSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1JO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpSO0FBYUk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQVhSO0FBZVE7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFiWjtBQWVZO0VBQ0ksV0FBQTtBQWJoQjtBQWlCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZlo7QUFpQlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBZmhCO0FBbUJRO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBakJaO0FBdUJRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQXJCWjtBQXVCWTtFQUNJLGtCQUFBO0FBckJoQjtBQXVCWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBckJoQjtBQXVCZ0I7RUFDSSxXQUFBO0FBckJwQjtBQXdCZ0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXRCcEI7QUF5QmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBdkJwQjtBQXlCb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBdkJ4QjtBQTJCZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtGQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF6QnBCO0FBNEJnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0ZBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQTFCcEI7QUErQlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUE3Qlo7QUFnQ1E7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBOUJaO0FBa0NZO0VBQ0ksV0FBQTtBQWhDaEI7QUFvQ1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFsQ2hCO0FBb0NZO0VBQ0kscUJBQUE7QUFsQ2hCO0FBdUNJO0VBQ0ksa0JBQUE7QUFyQ1I7QUF1Q1E7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFyQ1o7QUF1Q1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBckNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVsbGVyL3RlbGxlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICAgIH1cclxuICAgIC5iYWNrX2J0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuc3RlcHBlcl9kaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2ZVRhYiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZF9sYmwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmdyZXlfbGJsIHtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gLmdyZXlfbGJsIHtcclxuICAgIC8vICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAvLyAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAvLyAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIC8vIH1cclxuICAgIC50aXRsZV9oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2hpcHBpbmdfZGl2IHtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0JDQkNCO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hlY2tfZmxleCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNob29zZV9jYXJkX2RpdiB7XHJcblxyXG4gICAgICAgIC5jYXJkX3NsaWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZF9kaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBOTk4ODQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmRfbm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5mbGV4X2RpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuYm90dG9tX2FicyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuMSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xNDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnNpZGVfYWJzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDNweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtODBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9yX2xibCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBheXBhbF9idG4ge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcGxlX3BheSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25nb19kaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmNvbmdvX2JvbGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmdvX2dyZXkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/teller/teller.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/teller/teller.page.ts ***!
  \*********************************************/
/*! exports provided: TellerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TellerPage", function() { return TellerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shop_shop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shop/shop.page */ "./src/app/pages/shop/shop.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let TellerPage = class TellerPage {
    constructor(fb, httpservice, sho, mdctrl) {
        this.fb = fb;
        this.httpservice = httpservice;
        this.sho = sho;
        this.mdctrl = mdctrl;
        this.tabID = 1;
        this.slideCardOpts = {
            slidesPerView: 1.2
        };
        this.loading = false;
    }
    // 'firstname',
    // 'lastname',
    // 'phone',
    // 'email',
    // 'password',
    ngOnInit() {
        this.shop = JSON.parse(localStorage.getItem('shop')).id;
        this.tellerForm = this.fb.group({
            shop_id: [this.shop],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    sendTeller() {
        this.loading = true;
        this.httpservice.postData(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "tellers", this.tellerForm.value).subscribe((res) => {
            if (!res.success) {
                console.log(res.success);
                this.httpservice.presentToast(JSON.stringify(res.error));
                this.loading = false;
                console.log(res);
            }
            else {
                this.mdctrl.dismiss();
                this.sho.ngOnInit();
                this.loading = false;
            }
        });
    }
};
TellerPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] },
    { type: _shop_shop_page__WEBPACK_IMPORTED_MODULE_5__["ShopPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
TellerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teller',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teller.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teller/teller.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teller.page.scss */ "./src/app/pages/teller/teller.page.scss")).default]
    })
], TellerPage);



/***/ })

}]);
//# sourceMappingURL=pages-teller-teller-module-es2015.js.map