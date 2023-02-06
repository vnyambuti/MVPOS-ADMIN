(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n          <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n          Back\n        </ion-button>\n        <ion-title>My Bag</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-list>\n            <ion-item-sliding *ngFor=\"let item of cart\">\n                <ion-item lines=\"none\">\n                    <div class=\"item_div\">\n                        <div class=\"back_img\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\n                        <div class=\"detail_div\">\n                            <ion-label class=\"name_lbl\">Fold knitted sweater</ion-label>\n                            <ion-label class=\"price_lbl\">$ 24.90</ion-label>\n                            <ion-label class=\"grey_lbl\">Size : M | Color: Grey</ion-label>\n                        </div>\n                        <div class=\"add_remove_div\">\n                            <ion-icon name=\"remove\" (click)=\"minus()\" ></ion-icon>\n                            <ion-label>{{qty}}</ion-label>\n                            <ion-icon name=\"add\" (click)=\"plus()\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-item>\n\n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\">\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class=\"footer_div\">\n        <div class=\"grey_div\" style=\"border-bottom: 1px solid lightgrey;\">\n            <ion-label class=\"small_lbl\">Promo Code</ion-label>\n            <ion-label class=\"bold_lbl\">Springsell</ion-label>\n        </div>\n        <div class=\"grey_div\">\n          <ion-label class=\"small_lbl\">Total Amount</ion-label>\n          <ion-label class=\"bold_lbl\">$ 230</ion-label>\n        </div>\n        <div class=\"btn_div\">\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"goToCheckout()\">\n                Continue\n            </ion-button>\n        </div>\n    </div>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/cart/cart-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/cart/cart-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function srcAppPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
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


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/pages/cart/cart.page.ts");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cart/cart.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.module.ts ***!
      \*******************************************/

    /*! exports provided: CartPageModule */

    /***/
    function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
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


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "./src/app/pages/cart/cart-routing.module.ts");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/pages/cart/cart.page.ts");

      var CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cart/cart.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\n.main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n.main_content_div .item_div {\n  display: flex;\n  border-bottom: 1px solid lightgrey;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  position: relative;\n  width: 100%;\n}\n.main_content_div .item_div .back_img {\n  width: 60px;\n  height: 60px;\n  border-radius: 5px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .item_div .detail_div {\n  padding-left: 10px;\n  position: relative;\n}\n.main_content_div .item_div .detail_div .name_lbl {\n  font-family: \"semi-bold\";\n  font-size: 15px;\n}\n.main_content_div .item_div .detail_div .price_lbl {\n  font-family: \"medium\";\n  font-size: 15px;\n}\n.main_content_div .item_div .detail_div .grey_lbl {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .item_div .add_remove_div {\n  background: #F3F2F8;\n  border-radius: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 30px;\n  width: 100px;\n  padding-left: 15px;\n  padding-right: 15px;\n  position: absolute;\n  right: 0;\n}\n.main_content_div .item_div .add_remove_div ion-label {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.footer_div .grey_div {\n  background: #F3F2F8;\n  padding: 25px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer_div .grey_div .small_lbl {\n  color: grey;\n  font-family: \"medium\";\n}\n.footer_div .grey_div .bold_lbl {\n  font-family: \"semi-bold\";\n}\n.footer_div .btn_div {\n  padding: 16px;\n  background: #F3F2F8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFHQTtFQUNJLGFBQUE7QUFBSjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBR0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRlI7QUFJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFGWjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUZaO0FBR1k7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFEaEI7QUFHWTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQURoQjtBQUdZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFEaEI7QUFJUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUZaO0FBSVk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFGaEI7QUFVSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVBSO0FBU1E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUFQWjtBQVVRO0VBQ0ksd0JBQUE7QUFSWjtBQVdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBVFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYm9sZCc7XG4gICAgfVxuICAgIC5iYWNrX2J0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlvbi1pdGVte1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cblxuICAgIC5pdGVtX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuYmFja19pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAubmFtZV9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2VfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmdyZXlfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFkZF9yZW1vdmVfZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGM0YyRjg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlcl9kaXYge1xuICAgIC8vIHBhZGRpbmc6IDE2cHg7XG4gICAgLmdyZXlfZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZDogI0YzRjJGODtcbiAgICAgICAgcGFkZGluZzogMjVweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib2xkX2xibCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bl9kaXYge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjNGMkY4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/cart/cart.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/cart/cart.page.ts ***!
      \*****************************************/

    /*! exports provided: CartPage */

    /***/
    function srcAppPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CartPage = /*#__PURE__*/function () {
        function CartPage(route, navCtrl) {
          _classCallCheck(this, CartPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.cart = ['assets/imgs/10.jpg', 'assets/imgs/11.jpg', 'assets/imgs/12.jpg'];
          this.qty = 1;
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToCheckout",
          value: function goToCheckout() {
            this.route.navigate(['/checkout']);
          }
        }, {
          key: "minus",
          value: function minus() {
            if (this.qty > 1) {
              this.qty = this.qty - 1;
            }
          }
        }, {
          key: "plus",
          value: function plus() {
            this.qty = this.qty + 1;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart.page.scss */
        "./src/app/pages/cart/cart.page.scss"))["default"]]
      })], CartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cart-cart-module-es5.js.map