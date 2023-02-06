(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-languages-languages-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLanguagesLanguagesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n        <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n        Back\n      </ion-button>\n      <ion-title>Languages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-label class=\"bold_lbl\">Choose Language</ion-label>\n\n        <ion-list mode=\"md\">\n            <ion-radio-group name=\"lang\" value=\"english\">\n              <ion-item>\n                  <ion-label>English</ion-label>\n                  <ion-radio value=\"english\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Hindi</ion-label>\n                  <ion-radio value=\"hindi\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                  <ion-label>French</ion-label>\n                  <ion-radio value=\"french\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Spanish</ion-label>\n                  <ion-radio value=\"spanish\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n        </ion-list>\n\n        <ion-button expand=\"block\" shape=\"round\">\n            Set Language\n        </ion-button>\n      \n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/languages/languages-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/languages/languages-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: LanguagesPageRoutingModule */

    /***/
    function srcAppPagesLanguagesLanguagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagesPageRoutingModule", function () {
        return LanguagesPageRoutingModule;
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


      var _languages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./languages.page */
      "./src/app/pages/languages/languages.page.ts");

      var routes = [{
        path: '',
        component: _languages_page__WEBPACK_IMPORTED_MODULE_3__["LanguagesPage"]
      }];

      var LanguagesPageRoutingModule = function LanguagesPageRoutingModule() {
        _classCallCheck(this, LanguagesPageRoutingModule);
      };

      LanguagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LanguagesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/languages/languages.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/languages/languages.module.ts ***!
      \*****************************************************/

    /*! exports provided: LanguagesPageModule */

    /***/
    function srcAppPagesLanguagesLanguagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagesPageModule", function () {
        return LanguagesPageModule;
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


      var _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./languages-routing.module */
      "./src/app/pages/languages/languages-routing.module.ts");
      /* harmony import */


      var _languages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./languages.page */
      "./src/app/pages/languages/languages.page.ts");

      var LanguagesPageModule = function LanguagesPageModule() {
        _classCallCheck(this, LanguagesPageModule);
      };

      LanguagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagesPageRoutingModule"]],
        declarations: [_languages_page__WEBPACK_IMPORTED_MODULE_6__["LanguagesPage"]]
      })], LanguagesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/languages/languages.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/languages/languages.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLanguagesLanguagesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\n.main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .bold_lbl {\n  font-family: \"semi-bold\";\n  margin-bottom: 20px;\n}\n.main_content_div ion-item {\n  --padding-start: 0px;\n}\n.main_content_div ion-button {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBR0E7RUFDSSxhQUFBO0FBQUo7QUFFSTtFQUNJLGNBQUE7QUFBUjtBQUdJO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxvQkFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtBQUhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICB9XG4gICAgLmJhY2tfYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5ib2xkX2xibCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/languages/languages.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/languages/languages.page.ts ***!
      \***************************************************/

    /*! exports provided: LanguagesPage */

    /***/
    function srcAppPagesLanguagesLanguagesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagesPage", function () {
        return LanguagesPage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LanguagesPage = /*#__PURE__*/function () {
        function LanguagesPage(navCtrl) {
          _classCallCheck(this, LanguagesPage);

          this.navCtrl = navCtrl;
        }

        _createClass(LanguagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return LanguagesPage;
      }();

      LanguagesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      LanguagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-languages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./languages.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./languages.page.scss */
        "./src/app/pages/languages/languages.page.scss"))["default"]]
      })], LanguagesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-languages-languages-module-es5.js.map