(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addresses-addresses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addresses/addresses.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addresses/addresses.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n          <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n          Back\n        </ion-button>\n        <ion-title>Addresses</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-label class=\"add_address\" (click)=\"goToAddAddress('add')\">Add Address</ion-label>\n        <div class=\"address_box\" *ngFor=\"let item of [1,2,3,4,5]; let i = index\" (click)=\"goToAddAddress('edit')\">\n            <div class=\"flex_div\">\n                <ion-label class=\"bold_lbl\">Address {{i+1}}</ion-label>            \n                <ion-label class=\"edit_lbl\">Edit</ion-label>\n            </div>\n            <ion-label class=\"simp_lbl\">1234, Eva surbhi complex, Aksharwadi road, Bhavnagar - 364001</ion-label>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/addresses/addresses-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/addresses/addresses-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddressesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageRoutingModule", function() { return AddressesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addresses.page */ "./src/app/pages/addresses/addresses.page.ts");




const routes = [
    {
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_3__["AddressesPage"]
    }
];
let AddressesPageRoutingModule = class AddressesPageRoutingModule {
};
AddressesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/addresses/addresses.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/addresses/addresses.module.ts ***!
  \*****************************************************/
/*! exports provided: AddressesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function() { return AddressesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addresses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addresses-routing.module */ "./src/app/pages/addresses/addresses-routing.module.ts");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addresses.page */ "./src/app/pages/addresses/addresses.page.ts");







let AddressesPageModule = class AddressesPageModule {
};
AddressesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addresses_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressesPageRoutingModule"]
        ],
        declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]]
    })
], AddressesPageModule);



/***/ }),

/***/ "./src/app/pages/addresses/addresses.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/addresses/addresses.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\nion-content {\n  --background: #f3f3f3;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .add_address {\n  font-family: \"semi-bold\";\n  padding: 16px;\n  text-align: end;\n}\n.main_content_div .address_box {\n  background: white;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.main_content_div .address_box .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main_content_div .address_box .flex_div .bold_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div .address_box .flex_div .edit_lbl {\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div .address_box .simp_lbl {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzc2VzL2FkZHJlc3Nlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBR0E7RUFDSSxxQkFBQTtBQUFKO0FBSUk7RUFDSSxjQUFBO0FBRFI7QUFJSTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFGUjtBQUtJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIWjtBQUtZO0VBQ0ksd0JBQUE7QUFIaEI7QUFNWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBSmhCO0FBU1E7RUFDSSxlQUFBO0FBUFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRyZXNzZXMvYWRkcmVzc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgIH1cbiAgICAuYmFja19idG4ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2YzZjNmMztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IHtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5hZGRfYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5hZGRyZXNzX2JveCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIC5mbGV4X2RpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuZWRpdF9sYmwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLnNpbXBfbGJsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/addresses/addresses.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/addresses/addresses.page.ts ***!
  \***************************************************/
/*! exports provided: AddressesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPage", function() { return AddressesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let AddressesPage = class AddressesPage {
    constructor(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    goToAddAddress(val) {
        const navData = {
            queryParams: {
                value: val
            }
        };
        this.router.navigate(['/add-address'], navData);
    }
};
AddressesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
AddressesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addresses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addresses.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addresses/addresses.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addresses.page.scss */ "./src/app/pages/addresses/addresses.page.scss")).default]
    })
], AddressesPage);



/***/ })

}]);
//# sourceMappingURL=pages-addresses-addresses-module-es2015.js.map