(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n            <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n            Back\n        </ion-button>\n        <ion-title>Checkout</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"stepper_div\">\n            <ion-icon name=\"location-sharp\" [class.activeTab]=\"tabID >= 1\"></ion-icon>\n            <ion-label [class.activeTab]=\"tabID >= 2\">\n                <span>•</span>\n                <span>•</span>\n                <span>•</span>\n                <span>•</span>\n            </ion-label>\n            <ion-icon name=\"card\" [class.activeTab]=\"tabID >= 2\"></ion-icon>\n            <ion-label [class.activeTab]=\"tabID == 3\">\n                <span>•</span>\n                <span>•</span>\n                <span>•</span>\n                <span>•</span>\n            </ion-label>\n            <ion-icon name=\"checkmark-circle\" [class.activeTab]=\"tabID == 3\"></ion-icon>\n        </div>\n\n        <div class=\"shipping_div\" *ngIf=\"tabID == 1\">\n            <ion-label class=\"grey_lbl\">Step 1</ion-label>\n            <ion-label class=\"title_header\">Shipping</ion-label>\n\n            <ion-item class=\"username_box\" lines=\"none\">\n                <ion-label position=\"floating\">Full Name</ion-label>\n                <ion-input></ion-input>\n            </ion-item>\n\n            <ion-item class=\"username_box\" lines=\"none\">\n                <ion-label position=\"floating\">Address</ion-label>\n                <ion-input></ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-col size=\"6\" style=\"padding-left: 0px;\">\n                    <ion-item class=\"username_box\" lines=\"none\">\n                        <ion-label position=\"floating\">City</ion-label>\n                        <ion-input></ion-input>\n                    </ion-item> \n                </ion-col>\n                <ion-col size=\"6\" style=\"padding-right: 0px;\">\n                    <ion-item class=\"username_box\" lines=\"none\">\n                        <ion-label position=\"floating\">Zip Code</ion-label>\n                        <ion-input></ion-input>\n                    </ion-item> \n                </ion-col>\n            </ion-row>\n            \n            <ion-item class=\"username_box\" lines=\"none\">\n                <ion-label position=\"floating\">Country</ion-label>\n                <ion-input></ion-input>\n            </ion-item>\n            \n            <ion-item class=\"username_box\" lines=\"none\">\n                <ion-label position=\"floating\">Country</ion-label>\n                <ion-input></ion-input>\n            </ion-item>\n            \n            <ion-item class=\"username_box\" lines=\"none\">\n                <ion-label position=\"floating\">Shipping Method</ion-label>\n                <ion-input></ion-input>\n            </ion-item>\n\n            <div class=\"check_flex\">\n                <ion-checkbox mode=\"md\"></ion-checkbox>\n                <ion-label>Save for faster checkout next time</ion-label>\n            </div>\n\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"openPaymentModel()\">\n                Continue to Payment\n            </ion-button>\n\n        </div>\n\n        <div class=\"choose_card_div\" *ngIf=\"tabID == 2\">\n            <ion-label class=\"grey_lbl\">Step 2</ion-label>\n            <ion-label class=\"title_header\">Payment</ion-label>\n\n            <ion-slides mode=\"ios\" scrollbar=\"ios\" class=\"card_slider\" [options]=\"slideCardOpts\">\n                <ion-slide>\n                    <div class=\"card_div\">\n                        <img src=\"assets/imgs/mastercard.png\">\n                        <ion-label class=\"card_no\">••••  ••••  ••••  0113</ion-label>\n                        <div class=\"flex_div\">\n                            <ion-label>JONATHAN DAVIS</ion-label>\n                            <ion-label>11/22</ion-label>\n                        </div>\n                        <div class=\"side_abs\"></div>\n                        <div class=\"bottom_abs\"></div>\n                    </div>\n                </ion-slide>\n                <ion-slide>\n                    <div class=\"card_div\">\n                        <img src=\"assets/imgs/mastercard.png\">\n                        <ion-label class=\"card_no\">••••  ••••  ••••  0113</ion-label>\n                        <div class=\"flex_div\">\n                            <ion-label>JONATHAN DAVIS</ion-label>\n                            <ion-label>11/22</ion-label>\n                        </div>\n                        <div class=\"side_abs\"></div>\n                        <div class=\"bottom_abs\"></div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n\n            <ion-label class=\"or_lbl\">or checkout with</ion-label>\n\n            <ion-button (click)=\"tabID = 3\" expand=\"block\" fill=\"clear\" shape=\"round\" class=\"paypal_btn\">\n                <img src=\"assets/imgs/paypal.png\">\n            </ion-button>\n\n            <ion-button (click)=\"tabID = 3\" expand=\"block\" fill=\"clear\" shape=\"round\" class=\"apple_pay\">\n                <img src=\"assets/imgs/apple-logo.png\">\n                <ion-label>Pay</ion-label>\n            </ion-button>\n\n        </div>\n\n        <div class=\"congo_div\" *ngIf=\"tabID == 3\">\n            <div class=\"abs_div\">\n                <ion-label class=\"congo_bold\">Congrats !</ion-label>\n                <ion-label class=\"congo_grey\">Thank you for purchasing. Your order will be shipped in 2-4 working days.</ion-label>\n            </div>\n        </div>\n\n    </div>\n</ion-content>\n\n<ion-footer *ngIf=\"tabID == 3\" class=\"ion-no-border\">\n    <ion-toolbar style=\"padding: 16px;\">\n        <ion-button expand=\"block\" shape=\"round\" style=\"margin-bottom: 30px;\" (click)=\"goToTabs()\">\n            Continue Shopping\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/pages/checkout/checkout-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CheckoutPageRoutingModule */

    /***/
    function srcAppPagesCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
        return CheckoutPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/pages/checkout/checkout.page.ts");

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
      }];

      var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/checkout/checkout.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/checkout/checkout.module.ts ***!
      \***************************************************/

    /*! exports provided: CheckoutPageModule */

    /***/
    function srcAppPagesCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
        return CheckoutPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout-routing.module */
      "./src/app/pages/checkout/checkout-routing.module.ts");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/pages/checkout/checkout.page.ts");

      var CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
      })], CheckoutPageModule);
      /***/
    },

    /***/
    "./src/app/pages/checkout/checkout.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/checkout/checkout.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\n.main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .stepper_div {\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main_content_div .stepper_div ion-icon {\n  font-size: 22px !important;\n  color: gray;\n}\n.main_content_div .stepper_div ion-label {\n  display: flex;\n  justify-content: space-between;\n  width: 20%;\n  color: gray;\n}\n.main_content_div .stepper_div .activeTab {\n  color: var(--ion-color-primary) !important;\n}\n.main_content_div .stepper_div .activeTab ion-icon {\n  color: var(--ion-color-primary) !important;\n}\n.main_content_div .stepper_div .activeTab ion-label {\n  color: var(--ion-color-primary) !important;\n}\n.main_content_div .grey_lbl {\n  font-size: 12px;\n  color: grey;\n  text-transform: uppercase;\n}\n.main_content_div .title_header {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 10px;\n}\n.main_content_div .shipping_div ion-item {\n  border-bottom: 1px solid #CBCBCB;\n  --padding-start: 0px;\n  margin-bottom: 5px;\n}\n.main_content_div .shipping_div ion-item ion-label {\n  color: grey;\n}\n.main_content_div .shipping_div .check_flex {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .shipping_div .check_flex ion-label {\n  color: grey;\n  font-size: 14px;\n  margin-left: 10px;\n}\n.main_content_div .shipping_div ion-button {\n  margin: 0;\n  margin-top: 30px;\n}\n.main_content_div .choose_card_div .card_slider {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .choose_card_div .card_slider ion-slide {\n  margin-right: 16px;\n}\n.main_content_div .choose_card_div .card_slider .card_div {\n  width: 100%;\n  height: 180px;\n  border-radius: 10px;\n  background: #A99884;\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.main_content_div .choose_card_div .card_slider .card_div img {\n  width: 60px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .card_no {\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.main_content_div .choose_card_div .card_slider .card_div .flex_div ion-label {\n  color: white;\n  font-size: 16px;\n  letter-spacing: 0.6px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .bottom_abs {\n  width: 260px;\n  height: 200px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  bottom: -145px;\n}\n.main_content_div .choose_card_div .card_slider .card_div .side_abs {\n  width: 200px;\n  height: 243px;\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);\n  border-radius: 100%;\n  position: absolute;\n  right: -80px;\n  top: -25px;\n  transform: rotate(45deg);\n}\n.main_content_div .choose_card_div .or_lbl {\n  font-size: 14px;\n  text-align: center;\n  color: grey;\n  margin-bottom: 16px;\n}\n.main_content_div .choose_card_div ion-button {\n  border: 1px solid lightgray;\n  border-radius: 25px;\n  margin: 0px;\n  margin-bottom: 20px;\n}\n.main_content_div .choose_card_div .paypal_btn img {\n  width: 80px;\n}\n.main_content_div .choose_card_div .apple_pay img {\n  width: 25px;\n  margin-right: 10px;\n}\n.main_content_div .choose_card_div .apple_pay ion-label {\n  font-family: \"medium\";\n}\n.main_content_div .congo_div {\n  position: relative;\n}\n.main_content_div .congo_div .congo_bold {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 10px;\n  text-align: center;\n  margin-top: 200px;\n}\n.main_content_div .congo_div .congo_grey {\n  font-size: 14px;\n  color: grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUdBO0VBQ0ksYUFBQTtBQUFKO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURSO0FBR1E7RUFDSSwwQkFBQTtFQUNBLFdBQUE7QUFEWjtBQUlRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFGWjtBQUtRO0VBQ0ksMENBQUE7QUFIWjtBQUlZO0VBQ0ksMENBQUE7QUFGaEI7QUFJWTtFQUNJLDBDQUFBO0FBRmhCO0FBT0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBTFI7QUFPSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFTUTtFQUNJLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVBaO0FBU1k7RUFDSSxXQUFBO0FBUGhCO0FBV1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVRaO0FBV1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVGhCO0FBYVE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUFYWjtBQWlCUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFmWjtBQWlCWTtFQUNJLGtCQUFBO0FBZmhCO0FBaUJZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFmaEI7QUFpQmdCO0VBQ0ksV0FBQTtBQWZwQjtBQWtCZ0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhCcEI7QUFtQmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBakJwQjtBQW1Cb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBakJ4QjtBQXFCZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtGQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFuQnBCO0FBc0JnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0ZBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQXBCcEI7QUF5QlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF2Qlo7QUEwQlE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBeEJaO0FBNEJZO0VBQ0ksV0FBQTtBQTFCaEI7QUE4Qlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUE1QmhCO0FBOEJZO0VBQ0kscUJBQUE7QUE1QmhCO0FBaUNJO0VBQ0ksa0JBQUE7QUEvQlI7QUFpQ1E7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEvQlo7QUFpQ1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBL0JaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYm9sZCc7XG4gICAgfVxuICAgIC5iYWNrX2J0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zdGVwcGVyX2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlVGFiIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncmV5X2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIC50aXRsZV9oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuc2hpcHBpbmdfZGl2IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQkNCQ0I7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVja19mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hvb3NlX2NhcmRfZGl2IHtcblxuICAgICAgICAuY2FyZF9zbGlkZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgXG4gICAgICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkX2RpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBOTk4ODQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIFxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuY2FyZF9ubyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAuYm90dG9tX2FicyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuMSksIHRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xNDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLnNpZGVfYWJzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0M3B4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSwgdHJhbnNwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtODBweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vcl9sYmwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBheXBhbF9idG4ge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYXBwbGVfcGF5IHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uZ29fZGl2IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jb25nb19ib2xkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29uZ29fZ3JleSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/checkout/checkout.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/checkout/checkout.page.ts ***!
      \*************************************************/

    /*! exports provided: CheckoutPage */

    /***/
    function srcAppPagesCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
        return CheckoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _payment_method_payment_method_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../payment-method/payment-method.page */
      "./src/app/pages/payment-method/payment-method.page.ts");

      var CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(modalCtrl, route, navCtrl) {
          _classCallCheck(this, CheckoutPage);

          this.modalCtrl = modalCtrl;
          this.route = route;
          this.navCtrl = navCtrl;
          this.tabID = 1;
          this.slideCardOpts = {
            slidesPerView: 1.2
          };
        }

        _createClass(CheckoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openPaymentModel",
          value: function openPaymentModel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _payment_method_payment_method_page__WEBPACK_IMPORTED_MODULE_4__["PaymentMethodPage"],
                        cssClass: 'custom_modal'
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('=========', data.data.tabID);
                        _this.tabID = data.data.tabID;
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goToTabs",
          value: function goToTabs() {
            this.route.navigate(['tabs']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return CheckoutPage;
      }();

      CheckoutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkout.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkout.page.scss */
        "./src/app/pages/checkout/checkout.page.scss"))["default"]]
      })], CheckoutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-checkout-checkout-module-es5.js.map