(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mobile-verify-mobile-verify-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-verify/mobile-verify.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-verify/mobile-verify.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"main_content_div\">\n      <ion-icon name=\"chevron-back\" (click)=\"goBack()\" class=\"back_btn\"></ion-icon>\n      <ion-label class=\"head_lbl\">Enter the Code <br> to reset Your Password</ion-label>\n      <ion-label class=\"grey_lbl\">We have sent you an email with a code to <br> your email</ion-label>\n      \n      <div style=\"text-align: center;\">\n          <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"  [config]=\"{length:6}\"></ng-otp-input>\n      </div>\n      \n<p></p>\n<p></p>\n<p></p>\n<div></div>\n      <ion-label class=\"small_lbl\" color=\"danger\" (click)=\"goBack()\">Send a new code</ion-label>\n\n  </div>\n  <ion-spinner *ngIf=\"loading\" name=\"crescent\" class=\"ion-text-center\"></ion-spinner>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MobileVerifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyPageRoutingModule", function() { return MobileVerifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mobile_verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-verify.page */ "./src/app/pages/mobile-verify/mobile-verify.page.ts");




const routes = [
    {
        path: '',
        component: _mobile_verify_page__WEBPACK_IMPORTED_MODULE_3__["MobileVerifyPage"]
    }
];
let MobileVerifyPageRoutingModule = class MobileVerifyPageRoutingModule {
};
MobileVerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MobileVerifyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify.module.ts ***!
  \*************************************************************/
/*! exports provided: MobileVerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyPageModule", function() { return MobileVerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mobile_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-verify-routing.module */ "./src/app/pages/mobile-verify/mobile-verify-routing.module.ts");
/* harmony import */ var _mobile_verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-verify.page */ "./src/app/pages/mobile-verify/mobile-verify.page.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");








let MobileVerifyPageModule = class MobileVerifyPageModule {
};
MobileVerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobile_verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["MobileVerifyPageRoutingModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]
        ],
        declarations: [_mobile_verify_page__WEBPACK_IMPORTED_MODULE_6__["MobileVerifyPage"]]
    })
], MobileVerifyPageModule);



/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .back_btn {\n  margin-top: 20px;\n  font-size: 30px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .head_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 16px;\n  margin-top: 30px;\n}\n.main_content_div .grey_lbl {\n  color: grey;\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n.main_content_div ng-otp-input {\n  display: block;\n  margin: auto;\n}\n.main_content_div ion-button {\n  margin: 0;\n  margin-top: 40px;\n  margin-bottom: 30px;\n}\n.main_content_div .small_lbl {\n  font-size: 14px;\n  border-bottom: 1px solid;\n  text-align: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9iaWxlLXZlcmlmeS9tb2JpbGUtdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFHSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTUk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2JpbGUtdmVyaWZ5L21vYmlsZS12ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuYmFja19idG4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmhlYWRfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICAgIC5ncmV5X2xibCB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgbmctb3RwLWlucHV0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgLnNtYWxsX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/mobile-verify/mobile-verify.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mobile-verify/mobile-verify.page.ts ***!
  \***********************************************************/
/*! exports provided: MobileVerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyPage", function() { return MobileVerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let MobileVerifyPage = class MobileVerifyPage {
    constructor(route, loc, httpservice) {
        this.route = route;
        this.loc = loc;
        this.httpservice = httpservice;
        this.loading = false;
    }
    ngOnInit() {
    }
    onOtpChange(eve) {
        try {
            const res = {
                code: eve
            };
            if (eve.length === 6) {
                this.loading = true;
                this.httpservice.postData(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + 'resetcode', res).subscribe((res) => {
                    this.loading = false;
                    if (!res.success) {
                        this.httpservice.presentToast(res.error);
                    }
                    else {
                        this.httpservice.presentSuccessToast(res.message, "bottom");
                        localStorage.setItem('code', res.code);
                        this.route.navigate(['/change-password']);
                    }
                });
            }
        }
        catch (error) {
            this.loading = false;
            this.httpservice.presentToast(error);
        }
    }
    goToTabs() {
        this.route.navigate(['/tabs']);
    }
    goBack() {
        this.loc.back();
    }
};
MobileVerifyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"] }
];
MobileVerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mobile-verify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mobile-verify.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-verify/mobile-verify.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mobile-verify.page.scss */ "./src/app/pages/mobile-verify/mobile-verify.page.scss")).default]
    })
], MobileVerifyPage);



/***/ })

}]);
//# sourceMappingURL=pages-mobile-verify-mobile-verify-module-es2015.js.map