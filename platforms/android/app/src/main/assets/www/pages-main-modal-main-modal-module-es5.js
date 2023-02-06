(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-modal-main-modal-module"], {
    /***/
    "./src/app/pages/main-modal/main-modal-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/main-modal/main-modal-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: MainModalPageRoutingModule */

    /***/
    function srcAppPagesMainModalMainModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainModalPageRoutingModule", function () {
        return MainModalPageRoutingModule;
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


      var _main_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main-modal.page */
      "./src/app/pages/main-modal/main-modal.page.ts");

      var routes = [{
        path: '',
        component: _main_modal_page__WEBPACK_IMPORTED_MODULE_3__["MainModalPage"]
      }];

      var MainModalPageRoutingModule = function MainModalPageRoutingModule() {
        _classCallCheck(this, MainModalPageRoutingModule);
      };

      MainModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MainModalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/main-modal/main-modal.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/main-modal/main-modal.module.ts ***!
      \*******************************************************/

    /*! exports provided: MainModalPageModule */

    /***/
    function srcAppPagesMainModalMainModalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainModalPageModule", function () {
        return MainModalPageModule;
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


      var _main_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./main-modal-routing.module */
      "./src/app/pages/main-modal/main-modal-routing.module.ts");
      /* harmony import */


      var _main_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./main-modal.page */
      "./src/app/pages/main-modal/main-modal.page.ts");

      var MainModalPageModule = function MainModalPageModule() {
        _classCallCheck(this, MainModalPageModule);
      };

      MainModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _main_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainModalPageRoutingModule"]],
        declarations: [_main_modal_page__WEBPACK_IMPORTED_MODULE_6__["MainModalPage"]]
      })], MainModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-main-modal-main-modal-module-es5.js.map