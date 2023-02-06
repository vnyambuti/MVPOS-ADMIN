(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brands.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brands.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBrandsBrandsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>brands</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/brands/brands-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/brands/brands-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: BrandsPageRoutingModule */

    /***/
    function srcAppPagesBrandsBrandsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandsPageRoutingModule", function () {
        return BrandsPageRoutingModule;
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


      var _brands_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brands.page */
      "./src/app/pages/brands/brands.page.ts");

      var routes = [{
        path: '',
        component: _brands_page__WEBPACK_IMPORTED_MODULE_3__["BrandsPage"]
      }];

      var BrandsPageRoutingModule = function BrandsPageRoutingModule() {
        _classCallCheck(this, BrandsPageRoutingModule);
      };

      BrandsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BrandsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/brands/brands.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/brands/brands.module.ts ***!
      \***********************************************/

    /*! exports provided: BrandsPageModule */

    /***/
    function srcAppPagesBrandsBrandsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandsPageModule", function () {
        return BrandsPageModule;
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


      var _brands_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./brands-routing.module */
      "./src/app/pages/brands/brands-routing.module.ts");
      /* harmony import */


      var _brands_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./brands.page */
      "./src/app/pages/brands/brands.page.ts");

      var BrandsPageModule = function BrandsPageModule() {
        _classCallCheck(this, BrandsPageModule);
      };

      BrandsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _brands_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrandsPageRoutingModule"]],
        declarations: [_brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]]
      })], BrandsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/brands/brands.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/brands/brands.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBrandsBrandsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5kcy9icmFuZHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/brands/brands.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/brands/brands.page.ts ***!
      \*********************************************/

    /*! exports provided: BrandsPage */

    /***/
    function srcAppPagesBrandsBrandsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandsPage", function () {
        return BrandsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BrandsPage = /*#__PURE__*/function () {
        function BrandsPage() {
          _classCallCheck(this, BrandsPage);
        }

        _createClass(BrandsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BrandsPage;
      }();

      BrandsPage.ctorParameters = function () {
        return [];
      };

      BrandsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brands',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./brands.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brands/brands.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./brands.page.scss */
        "./src/app/pages/brands/brands.page.scss"))["default"]]
      })], BrandsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=brands-brands-module-es5.js.map