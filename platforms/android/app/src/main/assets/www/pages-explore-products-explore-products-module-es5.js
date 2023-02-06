(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-explore-products-explore-products-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-products/explore-products.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-products/explore-products.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesExploreProductsExploreProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-button (click)=\"goToBack()\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n          <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n          Back\n      </ion-button>\n      <ion-button size=\"small\" slot=\"end\" fill=\"clear\">\n          <ion-icon name=\"heart\" style=\"font-size: 20px;\"></ion-icon>\n      </ion-button>\n      <ion-button size=\"small\" slot=\"end\" fill=\"clear\" (click)=\"goToCart()\">\n          <ion-icon name=\"bag\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n      \n      <div class=\"content_div\">\n          <div class=\"header_flex\">\n              <div>\n                  <ion-label class=\"bold_lbl\">{{title}}</ion-label>\n                  <ion-label class=\"grey_lbl\">2000 Items Found</ion-label>\n              </div>\n              <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n          </div>\n\n          <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let item of product\">\n                  <div class=\"main_col\" (click)=\"goToProduct()\">\n                      <div class=\"col_back\" [style.backgroundImage]=\"'url('+ item +')'\">\n                          <div class=\"round_div\">\n                              <ion-icon name=\"heart\"></ion-icon>\n                          </div>\n                      </div>\n                      <div class=\"detail_div\">\n                          <ion-label class=\"brand_lbl\">WEST</ion-label>\n                          <ion-label class=\"name_lbl\">Black T-shirt</ion-label>\n                          <ion-label class=\"price_lbl\">$ 40.70</ion-label>\n                      </div>\n                  </div>\n              </ion-col>\n          </ion-row>\n          \n      </div>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/explore-products/explore-products-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/explore-products/explore-products-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ExploreProductsPageRoutingModule */

    /***/
    function srcAppPagesExploreProductsExploreProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreProductsPageRoutingModule", function () {
        return ExploreProductsPageRoutingModule;
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


      var _explore_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./explore-products.page */
      "./src/app/pages/explore-products/explore-products.page.ts");

      var routes = [{
        path: '',
        component: _explore_products_page__WEBPACK_IMPORTED_MODULE_3__["ExploreProductsPage"]
      }];

      var ExploreProductsPageRoutingModule = function ExploreProductsPageRoutingModule() {
        _classCallCheck(this, ExploreProductsPageRoutingModule);
      };

      ExploreProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExploreProductsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/explore-products/explore-products.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/explore-products/explore-products.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ExploreProductsPageModule */

    /***/
    function srcAppPagesExploreProductsExploreProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreProductsPageModule", function () {
        return ExploreProductsPageModule;
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


      var _explore_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-products-routing.module */
      "./src/app/pages/explore-products/explore-products-routing.module.ts");
      /* harmony import */


      var _explore_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./explore-products.page */
      "./src/app/pages/explore-products/explore-products.page.ts");

      var ExploreProductsPageModule = function ExploreProductsPageModule() {
        _classCallCheck(this, ExploreProductsPageModule);
      };

      ExploreProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _explore_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExploreProductsPageRoutingModule"]],
        declarations: [_explore_products_page__WEBPACK_IMPORTED_MODULE_6__["ExploreProductsPage"]]
      })], ExploreProductsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/explore-products/explore-products.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/explore-products/explore-products.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesExploreProductsExploreProductsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\n.main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .content_div {\n  padding: 16px;\n}\n.main_content_div .content_div .header_flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.main_content_div .content_div .header_flex .bold_lbl {\n  font-family: \"semi-bold\";\n  font-size: 22px;\n}\n.main_content_div .content_div .header_flex .grey_lbl {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .content_div .header_flex ion-icon {\n  font-size: 25px;\n}\n.main_content_div .content_div .main_col {\n  width: 100%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n}\n.main_content_div .content_div .main_col .col_back {\n  width: 100%;\n  height: 180px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  position: relative;\n}\n.main_content_div .content_div .main_col .col_back .round_div {\n  height: 30px;\n  width: 30px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .main_col .col_back .round_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 13px;\n  color: grey;\n}\n.main_content_div .content_div .main_col .detail_div {\n  padding: 5px;\n}\n.main_content_div .content_div .main_col .detail_div .brand_lbl {\n  font-family: \"medium\";\n  font-size: 13px;\n  text-transform: uppercase;\n}\n.main_content_div .content_div .main_col .detail_div .name_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .content_div .main_col .detail_div .price_lbl {\n  font-size: 14px;\n  font-family: \"medium\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwbG9yZS1wcm9kdWN0cy9leHBsb3JlLXByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFNQTtFQUNJLFdBQUE7QUFISjtBQUtJO0VBQ0ksY0FBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0FBSlI7QUFNUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQU1ZO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FBSmhCO0FBTVk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUpoQjtBQU1ZO0VBQ0ksZUFBQTtBQUpoQjtBQVNRO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVNZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7QUFTZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBUHBCO0FBU29CO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFQeEI7QUFXWTtFQUNJLFlBQUE7QUFUaEI7QUFVZ0I7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVJwQjtBQVVnQjtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQVJwQjtBQVVnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQVJwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGxvcmUtcHJvZHVjdHMvZXhwbG9yZS1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICB9XG4gICAgLmJhY2tfYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XG4vLyB9XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuY29udGVudF9kaXYge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgIC5oZWFkZXJfZmxleCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgICAgIC5ib2xkX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ncmV5X2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluX2NvbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgICAgLmNvbF9iYWNrIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnJvdW5kX2RpdiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIC5icmFuZF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmljZV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/explore-products/explore-products.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/explore-products/explore-products.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ExploreProductsPage */

    /***/
    function srcAppPagesExploreProductsExploreProductsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreProductsPage", function () {
        return ExploreProductsPage;
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

      var ExploreProductsPage = /*#__PURE__*/function () {
        function ExploreProductsPage(navCtrl, router, route) {
          var _this = this;

          _classCallCheck(this, ExploreProductsPage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.route = route;
          this.product = ['assets/imgs/5.jpg', 'assets/imgs/6.jpg', 'assets/imgs/7.jpg', 'assets/imgs/8.jpg', 'assets/imgs/9.jpg', 'assets/imgs/10.jpg', 'assets/imgs/11.jpg', 'assets/imgs/12.jpg'];
          this.route.queryParams.subscribe(function (data) {
            _this.title = data.value;
          });
        }

        _createClass(ExploreProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }, {
          key: "goToProduct",
          value: function goToProduct() {
            this.router.navigate(['/product-detail']);
          }
        }, {
          key: "goToCart",
          value: function goToCart() {
            this.router.navigate(['/cart']);
          }
        }]);

        return ExploreProductsPage;
      }();

      ExploreProductsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      };

      ExploreProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-explore-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./explore-products.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-products/explore-products.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./explore-products.page.scss */
        "./src/app/pages/explore-products/explore-products.page.scss"))["default"]]
      })], ExploreProductsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-explore-products-explore-products-module-es5.js.map