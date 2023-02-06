(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-button slot=\"end\" fill=\"clear\" size=\"small\" (click)=\"goToCart()\">\n            <ion-icon name=\"bag\" style=\"color: #808080;\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        \n        <ion-label class=\"title_header\">Explore</ion-label>\n        <div class=\"search_div\">\n            <ion-icon name=\"search\"></ion-icon>\n            <ion-input type=\"text\" placeholder=\"Search\"></ion-input>\n            <ion-icon name=\"mic\"></ion-icon>\n        </div>\n\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item.img +')'\" (click)=\"goToExploreProducts(item.name)\" *ngFor=\"let item of collections\">\n            <div class=\"abs_div\">\n                <ion-label class=\"bold_lbl\">{{item.name}}</ion-label>\n                <ion-label class=\"small_lbl\">{{item.off}}</ion-label>\n            </div>\n        </div>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/explore/explore-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/explore/explore-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExplorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function() { return ExplorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore.page */ "./src/app/pages/explore/explore.page.ts");




const routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"]
    }
];
let ExplorePageRoutingModule = class ExplorePageRoutingModule {
};
ExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExplorePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/explore/explore.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.module.ts ***!
  \*************************************************/
/*! exports provided: ExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-routing.module */ "./src/app/pages/explore/explore-routing.module.ts");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore.page */ "./src/app/pages/explore/explore.page.ts");







let ExplorePageModule = class ExplorePageModule {
};
ExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExplorePageRoutingModule"]
        ],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
    })
], ExplorePageModule);



/***/ }),

/***/ "./src/app/pages/explore/explore.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/explore/explore.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .title_header {\n  font-size: 26px;\n  font-family: \"semi-bold\";\n  margin-bottom: 10px;\n}\n.main_content_div .search_div {\n  background: #f5f5f5;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 16px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.main_content_div .search_div ion-input {\n  margin-left: 10px;\n}\n.main_content_div .back_image {\n  margin-bottom: 16px;\n  width: 100%;\n  height: 250px;\n  border-radius: 5px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.main_content_div .back_image .abs_div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.main_content_div .back_image .abs_div .bold_lbl {\n  font-size: 24px;\n  color: white;\n  text-align: center;\n  font-family: \"semi-bold\";\n}\n.main_content_div .back_image .abs_div .small_lbl {\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUNJLGlCQUFBO0FBQVo7QUFJSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFGWjtBQUdZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBRGhCO0FBR1k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFEaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBsb3JlL2V4cGxvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnRpdGxlX2hlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5zZWFyY2hfZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmFic19kaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/explore/explore.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/explore/explore.page.ts ***!
  \***********************************************/
/*! exports provided: ExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePage", function() { return ExplorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ExplorePage = class ExplorePage {
    constructor(router) {
        this.router = router;
        this.collections = [
            {
                img: 'assets/imgs/5.jpg',
                name: 'Designer Collection',
                off: 'Up to 70% off'
            },
            {
                img: 'assets/imgs/6.jpg',
                name: 'Women\'s Suit',
                off: 'Up to 40% off'
            },
            {
                img: 'assets/imgs/7.jpg',
                name: 'Winter Collection',
                off: 'Up to 45% off'
            },
            {
                img: 'assets/imgs/8.jpg',
                name: 'Summer Collection',
                off: 'Up to 60% off'
            },
        ];
    }
    ngOnInit() {
    }
    goToCart() {
        this.router.navigate(['/cart']);
    }
    goToExploreProducts(val) {
        const navData = {
            queryParams: {
                value: val
            }
        };
        this.router.navigate(['/explore-products'], navData);
    }
};
ExplorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-explore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore.page.scss */ "./src/app/pages/explore/explore.page.scss")).default]
    })
], ExplorePage);



/***/ })

}]);
//# sourceMappingURL=explore-explore-module-es2015.js.map