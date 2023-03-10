(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n    <div class=\"main_content_div\">\n        \n        <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/14.jpg)'\">\n            <div class=\"overlay_div\">\n                <div class=\"icn_flex\">\n                    <ion-icon  (click)=\"goToCart()\"></ion-icon>\n                </div>\n                <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/7.jpg)'\"></div>\n                <ion-label class=\"name_lbl\">{{user.firstname}} {{user.lastname}}</ion-label>\n                <ion-label class=\"white_lbl\">{{user.email}}</ion-label>\n                <ion-label class=\"white_lbl\">{{user.phone}}</ion-label>\n            </div>\n        </div>\n\n        <div class=\"content_div\">\n            \n            <div class=\"white_box\" style=\"margin-top: -40px;\">\n                <div class=\"item_div\" (click)=\"goToAddresses()\">\n                    <ion-icon name=\"business-outline\" class=\"first_icn\"></ion-icon>\n                    <ion-label>My Shop</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div>\n                <div class=\"item_div\" style=\"border: 0px;\" (click)=\"goToAccount()\">\n                    <ion-icon name=\"people\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Account</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div>\n            </div>\n\n            <div class=\"white_box\">\n                <div class=\"item_div\" (click)=\"goToReview()\">\n                    <ion-icon name=\"wallet\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Wallet</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div>\n                <!-- <div class=\"item_div\" (click)=\"goToWishlist()\">\n                    <ion-icon name=\"heart\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Wishlist</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div> -->\n                <div class=\"item_div\" (click)=\"goToNotification()\">\n                    <ion-icon name=\"notifications\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Notifications</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div>\n                <!-- <div class=\"item_div\">\n                    <ion-icon name=\"phone-portrait-outline\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Devices</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div> -->\n                <div class=\"item_div\" (click)=\"goToPassword()\">\n                    <ion-icon name=\"key\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Passwords</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div>\n                <!-- <div class=\"item_div\" (click)=\"goToLanguages()\">\n                    <ion-icon name=\"chatbox\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Languages</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div> -->\n                <div class=\"item_div\" style=\"border: 0px;\" (click)=\"logout()\">\n                    <ion-icon name=\"power\" class=\"first_icn\"></ion-icon>\n                    <ion-label>Logout</ion-label>\n                    <ion-icon name=\"chevron-forward\" class=\"last_icn\"></ion-icon>\n                </div>\n            </div>\n           \n               \n                <ion-spinner *ngIf=\"load\" name=\"crescent\" class=\"ion-text-center\"></ion-spinner>\n              \n        </div>\n\n        \n\n\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f3f3f3;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .back_image {\n  width: 100%;\n  height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main_content_div .back_image .overlay_div {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main_content_div .back_image .overlay_div .icn_flex {\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.main_content_div .back_image .overlay_div .icn_flex ion-icon {\n  margin-right: 16px;\n  color: white;\n  font-size: 20px;\n}\n\n.main_content_div .back_image .overlay_div .user_back {\n  height: 80px;\n  width: 80px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: 16px;\n}\n\n.main_content_div .back_image .overlay_div .name_lbl {\n  font-family: \"semi-bold\";\n  color: white;\n  margin-top: 10px;\n}\n\n.main_content_div .back_image .overlay_div .white_lbl {\n  color: white;\n  width: 70%;\n  font-size: 14px;\n  text-align: center;\n}\n\n.main_content_div .content_div {\n  padding: 16px;\n}\n\n.main_content_div .content_div .white_box {\n  background: white;\n  border-radius: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 16px;\n}\n\n.main_content_div .content_div .white_box .item_div {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #CBCBCB;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.main_content_div .content_div .white_box .item_div .first_icn {\n  font-size: 20px;\n  color: #CBCBCB;\n}\n\n.main_content_div .content_div .white_box .item_div ion-label {\n  margin-left: 16px;\n}\n\n.main_content_div .content_div .white_box .item_div .last_icn {\n  font-size: 20px;\n  color: #CBCBCB;\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUk7RUFDSSxjQUFBO0FBRVI7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ1o7O0FBQ1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNoQjs7QUFDZ0I7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ3BCOztBQUdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRGhCOztBQUdZO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFEaEI7O0FBR1k7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURoQjs7QUFNSTtFQUNJLGFBQUE7QUFKUjs7QUFNUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKWjs7QUFNWTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSmhCOztBQU1nQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLGlCQUFBO0FBSnBCOztBQU1nQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBSnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAgICAgLm92ZXJsYXlfZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAuaWNuX2ZsZXgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXNlcl9iYWNrIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZV9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53aGl0ZV9sYmwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudF9kaXYge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgIC53aGl0ZV9ib3gge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgXG4gICAgICAgICAgICAuaXRlbV9kaXYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0JDQkNCO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgICAgICAgICAgICAgLmZpcnN0X2ljbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDQkNCQ0I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGFzdF9pY24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0JDQkNCO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ProfilePage = class ProfilePage {
    constructor(router) {
        this.router = router;
        this.load = false;
    }
    ngOnInit() {
        this.load = true;
        const user = localStorage.getItem('user');
        this.user = JSON.parse(user);
        console.log(this.user);
        if (user) {
            this.load = false;
        }
        else {
            this.load = false;
            localStorage.clear();
            this.router.navigate(['/login']);
        }
    }
    goToReview() {
        this.router.navigate(['/review']);
    }
    goToWishlist() {
        this.router.navigate(['/wishlist']);
    }
    goToAddresses() {
        this.router.navigate(['/addresses']);
    }
    goToPassword() {
        this.router.navigate(['/change-password']);
    }
    goToLanguages() {
        this.router.navigate(['/languages']);
    }
    goToAccount() {
        this.router.navigate(['/account']);
    }
    goToNotification() {
        this.router.navigate(['/notification']);
    }
    goToCart() {
        this.router.navigate(['/cart']);
    }
    logout() {
        // this.load=true;
        localStorage.clear();
        this.router.navigate(['/login']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map