(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesShopShopPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    \n    <div class=\"main_content_div\" *ngIf=\"!load\">\n        \n<!-- \n        <ion-slides pager=\"ios\">\n            <ion-slide *ngFor=\"let item of sliders\">\n                <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item +')'\">\n                  <div class=\"overlay_div\">\n                      <div class=\"icn_flex\">\n                          <ion-icon name=\"heart-outline\" style=\"width: 23px;\"></ion-icon>\n                          <ion-icon name=\"wallet\" (click)=\"goToCart()\" ></ion-icon>\n                      </div>\n                      <ion-label class=\"collection_lbl\">SPRING COLLECTION</ion-label>\n                      <div class=\"line_div\"></div>\n                      \n                      <ion-label class=\"off_lbl\">20% OFF</ion-label>\n                      <ion-label class=\"white_lbl\">For selected spring style</ion-label>\n                      <ion-button size=\"small\" shape=\"round\">\n                         Add Product\n                      </ion-button>\n                  </div>\n                </div>\n            </ion-slide>\n        </ion-slides> -->\n        <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/10.jpg)'\">\n            <div class=\"overlay_div\">\n                \n                <div class=\"icn_flex\">\n                    <ion-icon name=\"bag\"></ion-icon>\n                    <ion-icon name=\"wallet\" (click)=\"goToCart()\" ></ion-icon>\n                </div>\n                <ion-label class=\"collection_lbl\">{{shops.name}}</ion-label>\n                <div class=\"line_div\"></div>\n                \n                <ion-label class=\"off_lbl\">{{shops.wallet.balance}}</ion-label>\n                <ion-label class=\"white_lbl\">{{shops.address}}</ion-label>\n                <!-- <ion-spinner *ngIf=\"load\" name=\"crescent\" class=\"ion-text-center\"></ion-spinner> -->\n                <!-- <ion-button size=\"small\" shape=\"round\">\n                   Add Product\n                </ion-button> -->\n            </div>\n        </div>\n        <div class=\"content_div\">\n            <div class=\"header_flex\">\n                <ion-label class=\"bold_lbl\">Categories</ion-label>\n                <ion-label class=\"grey_lbl\">Show All</ion-label>\n            </div>\n            <div class=\"holiday_slider\" *ngIf=\"shops.categories.length > 0\">\n                <div class=\"main_col\" *ngFor=\"let item of cats\" (click)=\"goExplorePro()\">\n                    <div class=\"col_back\" [style.backgroundImage]=\"'url('+ item +')'\">\n                        <div class=\"overlay\">\n                            <ion-label class=\"white_lbl\">Classic women collection</ion-label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"holiday_slider\" > -->\n                <div class=\"nodata\" *ngIf=\"shops.categories.length == 0\">\n                    <!-- <ion-img src=\"/assets/imgs/no-data.png\"></ion-img> -->\n                    <div class=\"but\">\n                        <ion-button class=\"ion-text-center\" size=\"small\" shape=\"round\">\n                            Add Category\n                         </ion-button>\n                    </div>\n                   \n                <!-- </div> -->\n             \n            </div>\n            <div class=\"header_flex\">\n                <ion-label class=\"bold_lbl\">Best Sellers</ion-label>\n                <ion-label class=\"grey_lbl\" (click)=\"goToShopPage()\">Show All</ion-label>\n            </div>\n            <div class=\"trend_slider\">\n                <div class=\"main_col\" *ngFor=\"let item of product\" (click)=\"goToProductDetail()\">\n                    <div class=\"col_back\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\n                    <div class=\"detail_div\">\n                        <ion-label class=\"name_lbl\">Black T-shirt</ion-label>\n                        <ion-label class=\"price_lbl\">$ 40.70</ion-label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"header_flex\">\n                <ion-label class=\"bold_lbl\">Products</ion-label>\n                <ion-label class=\"grey_lbl\" (click)=\"goToShopPage()\">Show All</ion-label>\n            </div>\n            <div class=\"collection_slider\" *ngIf=\"shops.products.length > 0\">\n                <div class=\"main_col\" *ngFor=\"let item of product\" (click)=\"goToProductDetail()\">\n                    <div class=\"col_back\" [style.backgroundImage]=\"'url('+ item +')'\">\n                        <div class=\"round_div\">\n                            <ion-icon name=\"heart\"></ion-icon>\n                        </div>\n                    </div>\n                    <div class=\"detail_div\">\n                        <ion-label class=\"name_lbl\">Black T-shirt</ion-label>\n                        <ion-label class=\"price_lbl\">$ 40.70</ion-label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"imagenodata\">\n                <ion-img src=\"/assets/imgs/no-data.png\"></ion-img>\n            </div>\n            \n\n          \n            \n\n         \n\n\n        </div>\n\n    </div>\n    <div class=\"main_content_div\" *ngIf=\"load\">\n        \n        <!-- \n                <ion-slides pager=\"ios\">\n                    <ion-slide *ngFor=\"let item of sliders\">\n                        <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item +')'\">\n                          <div class=\"overlay_div\">\n                              <div class=\"icn_flex\">\n                                  <ion-icon name=\"heart-outline\" style=\"width: 23px;\"></ion-icon>\n                                  <ion-icon name=\"wallet\" (click)=\"goToCart()\" ></ion-icon>\n                              </div>\n                              <ion-label class=\"collection_lbl\">SPRING COLLECTION</ion-label>\n                              <div class=\"line_div\"></div>\n                              \n                              <ion-label class=\"off_lbl\">20% OFF</ion-label>\n                              <ion-label class=\"white_lbl\">For selected spring style</ion-label>\n                              <ion-button size=\"small\" shape=\"round\">\n                                 Add Product\n                              </ion-button>\n                          </div>\n                        </div>\n                    </ion-slide>\n                </ion-slides> -->\n                <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/10.jpg)'\">\n                    <div class=\"overlay_div\">\n                        \n                        <div class=\"icn_flex\">\n                            <ion-icon name=\"bag\"></ion-icon>\n                            <ion-icon name=\"wallet\" (click)=\"goToCart()\" ></ion-icon>\n                        </div>\n                        <!-- <ion-label class=\"collection_lbl\">SPRING COLLECTION</ion-label> -->\n                        <ion-skeleton-text class=\"collection_lbl\" [animated]=\"true\" style=\"width: 45%;background-color: white;height: 5%;opacity: 0.5;border-radius: 15px;\"></ion-skeleton-text>\n                        <div class=\"line_div\"></div>\n                        \n                        <!-- <ion-label class=\"off_lbl\">20% OFF</ion-label> -->\n                        <ion-skeleton-text class=\"off_lbl\" [animated]=\"true\" style=\"width: 35%;background-color: white;height: 20%;opacity: 0.5;border-radius: 15px;\"></ion-skeleton-text>\n                        <!-- <ion-label class=\"white_lbl\">For selected spring style</ion-label> -->\n                        <ion-skeleton-text class=\"white_lbl\" [animated]=\"true\" style=\"width: 50%;background-color: white;height: 5%;opacity: 0.5;border-radius: 15px;\"></ion-skeleton-text>\n                        <!-- <ion-spinner *ngIf=\"load\" name=\"crescent\" class=\"ion-text-center\"></ion-spinner> -->\n                        <!-- <ion-button size=\"small\" shape=\"round\">\n                           Add Product\n                        </ion-button> -->\n                    </div>\n                </div>\n                <div class=\"content_div\">\n                    <div class=\"header_flex\">\n                        <ion-label class=\"bold_lbl\">Categories</ion-label>\n                        <ion-label class=\"grey_lbl\">Show All</ion-label>\n                    </div>\n                    <div class=\"holiday_slider\">\n                        <!-- <div class=\"main_col\" *ngFor=\"let item of product\" (click)=\"goExplorePro()\">\n                            <div class=\"col_back\" [style.backgroundImage]=\"'url('+ item +')'\">\n                                <div class=\"overlay\">\n                                    <ion-label class=\"white_lbl\">Classic women collection</ion-label>\n                                </div>\n                            </div>\n                        </div> -->\n                       \n                            <div class=\"main_col\"*ngFor=\"let item of product\">\n                                <ion-skeleton-text class=\"col_back\" [animated]=\"true\" style=\"width: 100%;\">\n                                   \n                                </ion-skeleton-text>\n                           \n                                <div class=\"overlay\">\n                                    <ion-skeleton-text  class=\"name_lbl\" [animated]=\"true\" style=\"width: 90%;\"></ion-skeleton-text>\n                                    <ion-skeleton-text class=\"price_lbl\" [animated]=\"true\" style=\"width: 45%;\"></ion-skeleton-text>\n                                </div>\n                            </div>\n                        \n                    </div>\n                    <div class=\"header_flex\">\n                        <ion-label class=\"bold_lbl\">Best Sellers</ion-label>\n                        <ion-label class=\"grey_lbl\" (click)=\"goToShopPage()\">Show All</ion-label>\n                    </div>\n                    <div class=\"trend_slider\">\n                        <div class=\"main_col\" *ngFor=\"let item of product\" (click)=\"goToProductDetail()\">\n                            <div class=\"col_back\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\n                            <div class=\"detail_div\">\n                                <ion-label class=\"name_lbl\">Black T-shirt</ion-label>\n                                <ion-label class=\"price_lbl\">$ 40.70</ion-label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"header_flex\">\n                        <ion-label class=\"bold_lbl\">Products</ion-label>\n                        <ion-label class=\"grey_lbl\" (click)=\"goToShopPage()\">Show All</ion-label>\n                    </div>\n                   \n        \n                    <div class=\"collection_slider\">\n                        <div class=\"main_col\"*ngFor=\"let item of product\">\n                            <ion-skeleton-text class=\"col_back\" [animated]=\"true\" style=\"width: 100%;\">\n                               \n                            </ion-skeleton-text>\n                       \n                            <div class=\"detail_div\">\n                                <ion-skeleton-text  class=\"name_lbl\" [animated]=\"true\" style=\"width: 90%;\"></ion-skeleton-text>\n                                <ion-skeleton-text class=\"price_lbl\" [animated]=\"true\" style=\"width: 45%;\"></ion-skeleton-text>\n                            </div>\n                        </div>\n                    </div>\n                    \n        \n                 \n        \n        \n                </div>\n        \n            </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/shop/shop-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/shop/shop-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ShopPageRoutingModule */

    /***/
    function srcAppPagesShopShopRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopPageRoutingModule", function () {
        return ShopPageRoutingModule;
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


      var _shop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shop.page */
      "./src/app/pages/shop/shop.page.ts");

      var routes = [{
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_3__["ShopPage"]
      }];

      var ShopPageRoutingModule = function ShopPageRoutingModule() {
        _classCallCheck(this, ShopPageRoutingModule);
      };

      ShopPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShopPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/shop/shop.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/shop/shop.module.ts ***!
      \*******************************************/

    /*! exports provided: ShopPageModule */

    /***/
    function srcAppPagesShopShopModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopPageModule", function () {
        return ShopPageModule;
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


      var _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shop-routing.module */
      "./src/app/pages/shop/shop-routing.module.ts");
      /* harmony import */


      var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shop.page */
      "./src/app/pages/shop/shop.page.ts");

      var ShopPageModule = function ShopPageModule() {
        _classCallCheck(this, ShopPageModule);
      };

      ShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopPageRoutingModule"]],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
      })], ShopPageModule);
      /***/
    },

    /***/
    "./src/app/pages/shop/shop.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/shop/shop.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesShopShopPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f3f3f3;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .back_image {\n  width: 100%;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .back_image .overlay_div {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 16px;\n  position: relative;\n}\n\n.main_content_div .back_image .overlay_div .icn_flex {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.main_content_div .back_image .overlay_div .icn_flex ion-icon {\n  margin-right: 16px;\n  color: white;\n  font-size: 20px;\n}\n\n.main_content_div .back_image .overlay_div .collection_lbl {\n  text-transform: uppercase;\n  color: white;\n  text-align: left;\n  font-size: 14px;\n  letter-spacing: 1px;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.main_content_div .back_image .overlay_div .line_div {\n  width: 40px;\n  height: 2px;\n  background: white;\n}\n\n.main_content_div .back_image .overlay_div .off_lbl {\n  color: white;\n  font-size: 36px;\n  font-family: \"semi-bold\";\n  text-align: left;\n  width: 100%;\n}\n\n.main_content_div .back_image .overlay_div .white_lbl {\n  color: white;\n  width: 100%;\n  text-align: left;\n  font-size: 14px;\n}\n\n.main_content_div .back_image .overlay_div ion-button {\n  position: absolute;\n  bottom: 40px;\n  right: 16px;\n  letter-spacing: 1px;\n}\n\n.main_content_div .content_div {\n  padding: 16px;\n}\n\n.main_content_div .content_div ion-img {\n  display: flex;\n  flex-direction: column !important;\n  align-items: center !important;\n  align-content: center !important;\n  justify-content: center !important;\n  width: 30% !important;\n  height: 30% !important;\n}\n\n.main_content_div .content_div .but {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  margin-top: 15%;\n  margin-bottom: 15%;\n}\n\n.main_content_div .content_div .header_flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n.main_content_div .content_div .header_flex .bold_lbl {\n  font-family: \"semi-bold\";\n}\n\n.main_content_div .content_div .header_flex .grey_lbl {\n  font-size: 14px;\n  color: grey;\n}\n\n.main_content_div .content_div .collection_slider {\n  display: flex;\n  overflow: scroll;\n  margin-bottom: 16px;\n}\n\n.main_content_div .content_div .collection_slider .main_col {\n  width: 120px;\n  min-width: 120px;\n  margin-right: 10px;\n}\n\n.main_content_div .content_div .collection_slider .main_col .col_back {\n  width: 100%;\n  height: 140px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  position: relative;\n}\n\n.main_content_div .content_div .collection_slider .main_col .col_back .round_div {\n  height: 30px;\n  width: 30px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n\n.main_content_div .content_div .collection_slider .main_col .col_back .round_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 13px;\n  color: grey;\n}\n\n.main_content_div .content_div .collection_slider .main_col .detail_div {\n  margin-top: 5px;\n}\n\n.main_content_div .content_div .collection_slider .main_col .detail_div .name_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n\n.main_content_div .content_div .collection_slider .main_col .detail_div .price_lbl {\n  font-size: 14px;\n  font-family: \"medium\";\n}\n\n.main_content_div .content_div .trend_slider {\n  display: flex;\n  overflow: scroll;\n  margin-bottom: 16px;\n}\n\n.main_content_div .content_div .trend_slider .main_col {\n  width: 200px;\n  min-width: 200px;\n  margin-right: 16px;\n  display: flex;\n  background: white;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.main_content_div .content_div .trend_slider .main_col .col_back {\n  width: 50px;\n  height: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n\n.main_content_div .content_div .trend_slider .main_col .detail_div {\n  margin-left: 10px;\n}\n\n.main_content_div .content_div .trend_slider .main_col .detail_div .name_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n\n.main_content_div .content_div .trend_slider .main_col .detail_div .price_lbl {\n  font-size: 14px;\n  font-family: \"medium\";\n}\n\n.main_content_div .content_div .holiday_slider {\n  display: flex;\n  overflow: scroll;\n  margin-bottom: 16px;\n}\n\n.main_content_div .content_div .holiday_slider .nodata {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.main_content_div .content_div .holiday_slider .main_col {\n  width: 150px;\n  min-width: 150px;\n  margin-right: 16px;\n  display: flex;\n  background: white;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.main_content_div .content_div .holiday_slider .main_col .col_back {\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n\n.main_content_div .content_div .holiday_slider .main_col .col_back .overlay {\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px;\n}\n\n.main_content_div .content_div .holiday_slider .main_col .col_back .overlay .white_lbl {\n  font-size: 16px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUk7RUFDSSxjQUFBO0FBRVI7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ1o7O0FBQ1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNoQjs7QUFDZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ3BCOztBQUdZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFEaEI7O0FBR1k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRGhCOztBQUdZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURoQjs7QUFHWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRGhCOztBQUdZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRGhCOztBQU1JO0VBQ0ksYUFBQTtBQUpSOztBQU1ZO0VBQ0ksYUFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUpoQjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVRaOztBQVdZO0VBQ0ksd0JBQUE7QUFUaEI7O0FBV1k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQVRoQjs7QUFhUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWFo7O0FBYVk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVhoQjs7QUFhZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFYcEI7O0FBYW9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQVh4Qjs7QUFhd0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVg1Qjs7QUFnQmdCO0VBQ0ksZUFBQTtBQWRwQjs7QUFlb0I7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFieEI7O0FBZW9CO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBYnhCOztBQW1CUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakJaOztBQW1CWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWpCaEI7O0FBbUJnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFqQnBCOztBQW1CZ0I7RUFDSSxpQkFBQTtBQWpCcEI7O0FBa0JvQjtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQWhCeEI7O0FBa0JvQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQWhCeEI7O0FBc0JRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFwQlo7O0FBcUJZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFuQmhCOztBQXFCWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQW5CaEI7O0FBcUJnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFuQnBCOztBQXFCb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBbkJ4Qjs7QUFxQndCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFuQjVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAgICAgLm92ZXJsYXlfZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5pY25fZmxleCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb2xsZWN0aW9uX2xibCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluZV9kaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9mZl9sYmwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2hpdGVfbGJsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudF9kaXYge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAvLyAuaW1hZ2Vub2RhdGF7XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgLy8gfVxuLmJ1dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbn1cblxuICAgICAgICAuaGVhZGVyX2ZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmV5X2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbGxlY3Rpb25fc2xpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgICAgLm1haW5fY29sIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAuY29sX2JhY2sge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgICAgICAucm91bmRfZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbF9kaXYge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIC5uYW1lX2xibCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByaWNlX2xibCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHJlbmRfc2xpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAgICAgLm1haW5fY29sIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5jb2xfYmFjayB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAubmFtZV9sYmwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcmljZV9sYmwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhvbGlkYXlfc2xpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgLm5vZGF0YXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFpbl9jb2wge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLmNvbF9iYWNrIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLndoaXRlX2xibCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/shop/shop.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/shop/shop.page.ts ***!
      \*****************************************/

    /*! exports provided: ShopPage */

    /***/
    function srcAppPagesShopShopPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopPage", function () {
        return ShopPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _main_modal_main_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../main-modal/main-modal.page */
      "./src/app/pages/main-modal/main-modal.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/general.service */
      "./src/app/services/general.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var ShopPage = /*#__PURE__*/function () {
        function ShopPage(router, modalCrtl, HTTP) {
          _classCallCheck(this, ShopPage);

          this.router = router;
          this.modalCrtl = modalCrtl;
          this.HTTP = HTTP;
          this.load = false;
          this.load1 = false;
          this.load2 = false;
          this.sliders = ['assets/imgs/10.jpg', 'assets/imgs/11.jpg', 'assets/imgs/14.jpg'];
          this.product = ['assets/imgs/5.jpg', 'assets/imgs/6.jpg', 'assets/imgs/7.jpg', 'assets/imgs/8.jpg', 'assets/imgs/9.jpg', 'assets/imgs/10.jpg', 'assets/imgs/11.jpg', 'assets/imgs/12.jpg'];
        }

        _createClass(ShopPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // this.openModal();
            this.load = true;
            this.load1 = true;
            this.load2 = true; //--load shop

            this.HTTP.getData(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "shops").subscribe(function (shops) {
              _this.load = false;

              if (shops.success) {
                _this.shops = shops.data.shops[0];
                var store = JSON.stringify(_this.shops);
                localStorage.setItem("shop", store);

                if (_this.shops.categories.length == 0) {
                  _this.goToNewCategory();
                } else {
                  if (_this.shops.products.length == 0) {
                    _this.goToProduct();
                  } else {}
                }

                console.log(shops);
              } else {
                console.log(shops);
              }
            }); //   const newstore=JSON.parse(localStorage.getItem('shop'));
            //   const cat={
            //     shop_id:newstore.id
            //   }
            //   this.HTTP.postData(environment.url + "categories",cat).subscribe((cats:any)=>{
            //     if (cats.success) {
            //       console.log(cats);
            //       this.cats=cats.categories;
            //       console.log(this.cats.length);
            //     } else {
            //     }
            //  })
          }
        }, {
          key: "goToProduct",
          value: function goToProduct() {
            this.router.navigate(['/product']);
          }
        }, {
          key: "goToShopPage",
          value: function goToShopPage() {
            this.router.navigate(['/shop-detail']);
          }
        }, {
          key: "goToProductDetail",
          value: function goToProductDetail() {
            this.router.navigate(['/product-detail']);
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCrtl.create({
                        component: _main_modal_main_modal_page__WEBPACK_IMPORTED_MODULE_1__["MainModalPage"],
                        cssClass: 'main_modal'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goToNewCategory",
          value: function goToNewCategory() {
            this.router.navigate(['/category']);
          }
        }, {
          key: "goExplorePro",
          value: function goExplorePro() {
            var navData = {
              queryParams: {
                value: 'Women Collection'
              }
            };
            this.router.navigate(['/explore-products'], navData);
          }
        }, {
          key: "goToCart",
          value: function goToCart() {
            this.router.navigate(['/cart']);
          }
        }]);

        return ShopPage;
      }();

      ShopPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]
        }];
      };

      ShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./shop.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./shop.page.scss */
        "./src/app/pages/shop/shop.page.scss"))["default"]]
      })], ShopPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shop-shop-module-es5.js.map