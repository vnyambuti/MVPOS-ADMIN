(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.guard */
      "./src/app/auth.guard.ts");

      var routes = [// {
      //   path: '',
      //   loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderPageModule),
      //   canActivate:[AuthGuard]
      // },
      {
        path: 'welcome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-welcome-welcome-module */
          "pages-welcome-welcome-module").then(__webpack_require__.bind(null,
          /*! ./pages/welcome/welcome.module */
          "./src/app/pages/welcome/welcome.module.ts")).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-register-register-module */
          "pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "./src/app/pages/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'mobile-verify',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-mobile-verify-mobile-verify-module */
          "pages-mobile-verify-mobile-verify-module").then(__webpack_require__.bind(null,
          /*! ./pages/mobile-verify/mobile-verify.module */
          "./src/app/pages/mobile-verify/mobile-verify.module.ts")).then(function (m) {
            return m.MobileVerifyPageModule;
          });
        }
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forgot-forgot-module */
          "pages-forgot-forgot-module").then(__webpack_require__.bind(null,
          /*! ./pages/forgot/forgot.module */
          "./src/app/pages/forgot/forgot.module.ts")).then(function (m) {
            return m.ForgotPageModule;
          });
        }
      }, {
        path: 'shop',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-shop-shop-module */
          [__webpack_require__.e("common"), __webpack_require__.e("shop-shop-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/shop/shop.module */
          "./src/app/pages/shop/shop.module.ts")).then(function (m) {
            return m.ShopPageModule;
          });
        }
      }, {
        path: 'explore',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-explore-explore-module */
          "explore-explore-module").then(__webpack_require__.bind(null,
          /*! ./pages/explore/explore.module */
          "./src/app/pages/explore/explore.module.ts")).then(function (m) {
            return m.ExplorePageModule;
          });
        }
      }, {
        path: 'brands',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-brands-brands-module */
          "brands-brands-module").then(__webpack_require__.bind(null,
          /*! ./pages/brands/brands.module */
          "./src/app/pages/brands/brands.module.ts")).then(function (m) {
            return m.BrandsPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'checkout',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-checkout-checkout-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-checkout-checkout-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/checkout/checkout.module */
          "./src/app/pages/checkout/checkout.module.ts")).then(function (m) {
            return m.CheckoutPageModule;
          });
        }
      }, {
        path: 'payment-method',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-method-payment-method-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-payment-method-payment-method-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment-method/payment-method.module */
          "./src/app/pages/payment-method/payment-method.module.ts")).then(function (m) {
            return m.PaymentMethodPageModule;
          });
        }
      }, {
        path: 'wishlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-wishlist-wishlist-module */
          "pages-wishlist-wishlist-module").then(__webpack_require__.bind(null,
          /*! ./pages/wishlist/wishlist.module */
          "./src/app/pages/wishlist/wishlist.module.ts")).then(function (m) {
            return m.WishlistPageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cart-cart-module */
          "pages-cart-cart-module").then(__webpack_require__.bind(null,
          /*! ./pages/cart/cart.module */
          "./src/app/pages/cart/cart.module.ts")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'filter',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-filter-filter-module */
          "pages-filter-filter-module").then(__webpack_require__.bind(null,
          /*! ./pages/filter/filter.module */
          "./src/app/pages/filter/filter.module.ts")).then(function (m) {
            return m.FilterPageModule;
          });
        }
      }, {
        path: 'shop-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-shop-detail-shop-detail-module */
          "pages-shop-detail-shop-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/shop-detail/shop-detail.module */
          "./src/app/pages/shop-detail/shop-detail.module.ts")).then(function (m) {
            return m.ShopDetailPageModule;
          });
        }
      }, {
        path: 'product-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-product-detail-product-detail-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-product-detail-product-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/product-detail/product-detail.module */
          "./src/app/pages/product-detail/product-detail.module.ts")).then(function (m) {
            return m.ProductDetailPageModule;
          });
        }
      }, {
        path: 'product-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-product-modal-product-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-product-modal-product-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/product-modal/product-modal.module */
          "./src/app/pages/product-modal/product-modal.module.ts")).then(function (m) {
            return m.ProductModalPageModule;
          });
        }
      }, {
        path: 'review',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-review-review-module */
          "pages-review-review-module").then(__webpack_require__.bind(null,
          /*! ./pages/review/review.module */
          "./src/app/pages/review/review.module.ts")).then(function (m) {
            return m.ReviewPageModule;
          });
        }
      }, {
        path: 'explore-products',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-explore-products-explore-products-module */
          "pages-explore-products-explore-products-module").then(__webpack_require__.bind(null,
          /*! ./pages/explore-products/explore-products.module */
          "./src/app/pages/explore-products/explore-products.module.ts")).then(function (m) {
            return m.ExploreProductsPageModule;
          });
        }
      }, {
        path: 'main-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-main-modal-main-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-main-modal-main-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/main-modal/main-modal.module */
          "./src/app/pages/main-modal/main-modal.module.ts")).then(function (m) {
            return m.MainModalPageModule;
          });
        }
      }, {
        path: 'addresses',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-addresses-addresses-module */
          "pages-addresses-addresses-module").then(__webpack_require__.bind(null,
          /*! ./pages/addresses/addresses.module */
          "./src/app/pages/addresses/addresses.module.ts")).then(function (m) {
            return m.AddressesPageModule;
          });
        }
      }, {
        path: 'add-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-address-add-address-module */
          "pages-add-address-add-address-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-address/add-address.module */
          "./src/app/pages/add-address/add-address.module.ts")).then(function (m) {
            return m.AddAddressPageModule;
          });
        }
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-account-account-module */
          "pages-account-account-module").then(__webpack_require__.bind(null,
          /*! ./pages/account/account.module */
          "./src/app/pages/account/account.module.ts")).then(function (m) {
            return m.AccountPageModule;
          });
        }
      }, {
        path: 'change-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-change-password-change-password-module */
          "pages-change-password-change-password-module").then(__webpack_require__.bind(null,
          /*! ./pages/change-password/change-password.module */
          "./src/app/pages/change-password/change-password.module.ts")).then(function (m) {
            return m.ChangePasswordPageModule;
          });
        }
      }, {
        path: 'languages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-languages-languages-module */
          "pages-languages-languages-module").then(__webpack_require__.bind(null,
          /*! ./pages/languages/languages.module */
          "./src/app/pages/languages/languages.module.ts")).then(function (m) {
            return m.LanguagesPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-notification-notification-module */
          "pages-notification-notification-module").then(__webpack_require__.bind(null,
          /*! ./pages/notification/notification.module */
          "./src/app/pages/notification/notification.module.ts")).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'category',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-category-category-module */
          "pages-category-category-module").then(__webpack_require__.bind(null,
          /*! ./pages/category/category.module */
          "./src/app/pages/category/category.module.ts")).then(function (m) {
            return m.CategoryPageModule;
          });
        }
      }, {
        path: 'product',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-product-product-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-product-product-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/product/product.module */
          "./src/app/pages/product/product.module.ts")).then(function (m) {
            return m.ProductPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _interceptors_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./interceptors/interceptor */
      "./src/app/interceptors/interceptor.ts");
      /* harmony import */


      var _angular_compiler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/compiler */
      "./node_modules/@angular/compiler/fesm2015/compiler.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_9__["NgOtpInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        schemas: [_angular_compiler__WEBPACK_IMPORTED_MODULE_12__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/auth.guard.ts":
    /*!*******************************!*\
      !*** ./src/app/auth.guard.ts ***!
      \*******************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(router, state) {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            this.token = localStorage.getItem('token');
            var isExpired = helper.isTokenExpired(this.token);
            console.log(!isExpired);

            if (this.token && !isExpired) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/interceptors/interceptor.ts":
    /*!*********************************************!*\
      !*** ./src/app/interceptors/interceptor.ts ***!
      \*********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function srcAppInterceptorsInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
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


      var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/general.service */
      "./src/app/services/general.service.ts");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(service) {
          _classCallCheck(this, JwtInterceptor);

          this.service = service;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var currentUser = JSON.parse(localStorage.getItem('user'));
            var usertoken = localStorage.getItem('token');

            if (currentUser && usertoken) {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(usertoken)
                }
              });
              console.log(req);
              var data = {};
            }

            return next.handle(req);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ctorParameters = function () {
        return [{
          type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]
        }];
      };

      JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
      /***/
    },

    /***/
    "./src/app/services/general.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/general.service.ts ***!
      \*********************************************/

    /*! exports provided: GeneralService */

    /***/
    function srcAppServicesGeneralServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralService", function () {
        return GeneralService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var GeneralService = /*#__PURE__*/function () {
        function GeneralService(http, toastcontroller) {
          _classCallCheck(this, GeneralService);

          this.http = http;
          this.toastcontroller = toastcontroller;
          this.currentUser = localStorage.getItem('token');
        }

        _createClass(GeneralService, [{
          key: "getData",
          value: function getData(source) {
            return this.http.get(source).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "postWithoutHeadersData",
          value: function postWithoutHeadersData(source, data, isFormData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = this.apiHeaders(headers, isFormData);
            return this.http.post(source, data);
          }
        }, {
          key: "postData",
          value: function postData(source, data, isFormData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = this.apiHeaders(headers, isFormData);
            return this.http.post(source, data);
          }
        }, {
          key: "putData",
          value: function putData(source, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = this.apiHeaders(headers);
            return this.http.put(source, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "patchData",
          value: function patchData(source, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = this.apiHeaders(headers);
            return this.http.patch(source, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "deleteData",
          value: function deleteData(source) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](); // const httpOptions = {
            //   headers: this.apiHeaders(headers),
            //   body: data
            // };

            return this.http["delete"](source).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "apiHeaders",
          value: function apiHeaders(headers, isFormData) {
            if (isFormData !== undefined) {
              headers = headers.append('mimeType', 'multipart/form-data');
            } else {
              headers = headers.append('Content-Type', 'application/json');
            }

            headers = headers.append('Accept', 'application/json'); // console.log(headers);

            return headers;
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            // this.load=false;
            return [this.presentToast(error.error || 'Server error'), null];
          }
        }, {
          key: "presentToast",
          value: function presentToast(arg0) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastcontroller.create({
                        message: arg0,
                        duration: 2000,
                        color: 'danger',
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast(arg0, pos) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastcontroller.create({
                        message: arg0,
                        duration: 2000,
                        color: 'success',
                        position: pos
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setCat",
          value: function setCat(catid) {
            this.id = catid;
          }
        }, {
          key: "getCaT",
          value: function getCaT() {
            return this.id;
          }
        }]);

        return GeneralService;
      }();

      GeneralService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      GeneralService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GeneralService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // url:"http://127.0.0.1:8000/api/"
        url: "https://0abb-102-217-144-110.ngrok.io/api/"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\vic\PROJECTS\mvposAdmin\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map