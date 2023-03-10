(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"main_content_div\">\n        <form (ngSubmit)=\"newPassword()()\" [formGroup]=\"passwordForm\">\n        \n            <ion-icon name=\"chevron-back\" class=\"back_btn\" (click)=\"goToBack()\"></ion-icon>\n            <ion-label class=\"head_lbl\">Change Password ?</ion-label>\n            <ion-label class=\"grey_lbl\">provide a new memorable password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" placeholder=\"New Password\">\n                <ion-icon name=\"lock-open-outline\"></ion-icon>\n            </ion-input>\n            <p></p>\n            <p></p>\n            <p></p>\n            <p></p>\n            <p></p>\n            <p></p>\n            <div></div>\n            <ion-input type=\"password\" formControlName=\"password_confirmation\" placeholder=\"Confirm Password\">\n                <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            </ion-input>\n            <p></p>\n            <p></p>\n            <ion-button expand=\"block\" shape=\"round\" type=\"submit\" [disabled]=\"!passwordForm.valid\">\n              Change Password\n            </ion-button>\n            </form>\n    </div>\n  \n    <ion-spinner *ngIf=\"loading\" name=\"crescent\" class=\"ion-text-center\"></ion-spinner>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChangePasswordPageRoutingModule */

    /***/
    function srcAppPagesChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
        return ChangePasswordPageRoutingModule;
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/pages/change-password/change-password.page.ts");

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
      }];

      var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      };

      ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/change-password/change-password.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChangePasswordPageModule */

    /***/
    function srcAppPagesChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
        return ChangePasswordPageModule;
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-password-routing.module */
      "./src/app/pages/change-password/change-password-routing.module.ts");
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/pages/change-password/change-password.page.ts");

      var ChangePasswordPageModule = function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      };

      ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
      })], ChangePasswordPageModule);
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/change-password/change-password.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .back_btn {\n  margin-top: 20px;\n  font-size: 30px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .head_lbl {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 16px;\n  margin-top: 30px;\n}\n.main_content_div .grey_lbl {\n  color: grey;\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n.main_content_div ion-input {\n  border-bottom: 1px solid lightgrey;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-family: \"regular\";\n}\n.main_content_div ion-input ion-icon {\n  font-size: 24px;\n}\n.main_content_div ion-button {\n  margin: 0;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlJO0VBQ0ksa0NBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUdRO0VBQ0ksZUFBQTtBQURaO0FBS0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUFIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuYmFja19idG4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmhlYWRfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICAgIC5ncmV5X2xibCB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/change-password/change-password.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/change-password/change-password.page.ts ***!
      \***************************************************************/

    /*! exports provided: ChangePasswordPage */

    /***/
    function srcAppPagesChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
        return ChangePasswordPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/general.service */
      "./src/app/services/general.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(fb, route, router, httpservice) {
          _classCallCheck(this, ChangePasswordPage);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.httpservice = httpservice;
          this.loading = false;
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var code = localStorage.getItem('code');

            if (!code) {
              this.route.navigate(['/mobile-verify']);
            }

            this.passwordForm = this.fb.group({
              code: [localStorage.getItem('code'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
              password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, {
              validator: this.ConfirmedValidator('password', 'password_confirmation')
            });
          }
        }, {
          key: "ConfirmedValidator",
          value: function ConfirmedValidator(controlName, matchingControlName) {
            return function (formGroup) {
              var control = formGroup.controls[controlName];
              var matchingControl = formGroup.controls[matchingControlName];

              if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
              }

              if (control.value !== matchingControl.value) {
                matchingControl.setErrors({
                  confirmedValidator: true
                });
              } else {
                matchingControl.setErrors(null);
              }
            };
          }
        }, {
          key: "newPassword",
          // goBack() {
          //     this.navCtrl.back();
          // }
          value: function newPassword() {
            var _this = this;

            try {
              this.loading = true;
              this.httpservice.postWithoutHeadersData(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + 'password-changed', this.passwordForm.value).subscribe(function (res) {
                _this.loading = false;

                if (!res.success) {
                  _this.httpservice.presentToast(res.message);
                } else {
                  localStorage.removeItem('code');

                  _this.httpservice.presentSuccessToast(res.message, "bottom");

                  _this.route.navigate(['login']);
                }
              });
            } catch (error) {
              this.loading = false;
              this.httpservice.presentToast(error);
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.passwordForm.controls;
          }
        }]);

        return ChangePasswordPage;
      }();

      ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]
        }];
      };

      ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./change-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./change-password.page.scss */
        "./src/app/pages/change-password/change-password.page.scss"))["default"]]
      })], ChangePasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-change-password-change-password-module-es5.js.map