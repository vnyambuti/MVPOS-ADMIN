(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-method-payment-method-module"],{

/***/ "./src/app/pages/payment-method/payment-method-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageRoutingModule", function() { return PaymentMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/pages/payment-method/payment-method.page.ts");




const routes = [
    {
        path: '',
        component: _payment_method_page__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodPage"]
    }
];
let PaymentMethodPageRoutingModule = class PaymentMethodPageRoutingModule {
};
PaymentMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.module.ts ***!
  \***************************************************************/
/*! exports provided: PaymentMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageModule", function() { return PaymentMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-method-routing.module */ "./src/app/pages/payment-method/payment-method-routing.module.ts");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/pages/payment-method/payment-method.page.ts");







let PaymentMethodPageModule = class PaymentMethodPageModule {
};
PaymentMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]],
    })
], PaymentMethodPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-payment-method-payment-method-module-es2015.js.map