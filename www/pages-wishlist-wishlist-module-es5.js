(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesWishlistWishlistPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-button (click)=\"goToBack()\" slot=\"start\" fill=\"clear\" size=\"small\" class=\"back_btn\">\n            <ion-icon slot=\"start\" name=\"chevron-back\"></ion-icon>\n            Back\n        </ion-button>\n        <ion-title>Wishlist</ion-title>\n        <ion-button fill=\"clear\" size=\"small\" slot=\"end\" style=\"font-family: 'semi-bold';\">Edit</ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-segment value=\"all\" (ionChange)=\"segmentChanged($event)\" mode=\"md\">\n            <ion-segment-button value=\"all\">\n                <ion-label>All Items</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"boards\">\n                <ion-label>Boards</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div class=\"all_div\" *ngIf=\"tabID == 'all'\">\n            <div class=\"flex_header\">\n                <ion-label>54 items found</ion-label>\n                <ion-icon name=\"options-sharp\"></ion-icon>\n            </div>\n\n            <div class=\"item_div\" *ngFor=\"let item of items\">\n                <div class=\"back_image\" [style.backgroundImage]=\"'url('+ item.img +')'\"></div>\n                <div class=\"detail_div\">\n                    <ion-label class=\"name_lbl\">Fold knitted sweater</ion-label>\n                    <ion-label class=\"price_lbl\">$30.23</ion-label>\n                    <ion-label class=\"grey_lbl\">Size : M | Color : grey</ion-label>\n                    <ion-button fill=\"outline\" shape=\"round\" size=\"small\">\n                      Move to bag\n                    </ion-button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"board_div\" *ngIf=\"tabID == 'boards'\">\n            <div class=\"single_board\" *ngFor=\"let item of items\">\n                <div class=\"image_flex\">\n                    <div class=\"back_board\" [style.backgroundImage]=\"'url(assets/imgs/5.jpg)'\"></div>\n                    <div class=\"back_board\" [style.backgroundImage]=\"'url(assets/imgs/6.jpg)'\"></div>\n                    <div class=\"back_grid\">\n                        <div class=\"inner_flex\" style=\"margin-right: 5px;\">\n                            <div class=\"small_back1\" style=\"margin-bottom: 5px;\" [style.backgroundImage]=\"'url(assets/imgs/7.jpg)'\"></div>\n                            <div class=\"small_back2\" [style.backgroundImage]=\"'url(assets/imgs/8.jpg)'\"></div>\n                        </div>\n                        <div class=\"inner_flex\">\n                            <div class=\"small_back2\" style=\"margin-bottom: 5px;\" [style.backgroundImage]=\"'url(assets/imgs/9.jpg)'\"></div>\n                            <div class=\"small_back1\" [style.backgroundImage]=\"'url(assets/imgs/10.jpg)'\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"board_name_div\">\n                    <ion-label class=\"board_name\">Going-out out</ion-label>\n                    <ion-label class=\"grey_lbl\">25 Items</ion-label>\n                    <ion-icon name=\"chevron-forward\"></ion-icon>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/wishlist/wishlist-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/wishlist/wishlist-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: WishlistPageRoutingModule */

    /***/
    function srcAppPagesWishlistWishlistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function () {
        return WishlistPageRoutingModule;
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


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/pages/wishlist/wishlist.page.ts");

      var routes = [{
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
      }];

      var WishlistPageRoutingModule = function WishlistPageRoutingModule() {
        _classCallCheck(this, WishlistPageRoutingModule);
      };

      WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WishlistPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/wishlist/wishlist.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
      \***************************************************/

    /*! exports provided: WishlistPageModule */

    /***/
    function srcAppPagesWishlistWishlistModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function () {
        return WishlistPageModule;
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


      var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wishlist-routing.module */
      "./src/app/pages/wishlist/wishlist-routing.module.ts");
      /* harmony import */


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/pages/wishlist/wishlist.page.ts");

      var WishlistPageModule = function WishlistPageModule() {
        _classCallCheck(this, WishlistPageModule);
      };

      WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
      })], WishlistPageModule);
      /***/
    },

    /***/
    "./src/app/pages/wishlist/wishlist.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/wishlist/wishlist.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesWishlistWishlistPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar ion-button {\n  margin: 0;\n  font-family: \"bold\";\n}\nion-toolbar .back_btn {\n  font-size: 14px;\n}\n.main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div ion-segment ion-label {\n  text-transform: capitalize;\n  font-family: \"medium\";\n}\n.main_content_div .all_div {\n  padding: 16px;\n}\n.main_content_div .all_div .flex_header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.main_content_div .all_div .flex_header ion-label {\n  color: grey;\n}\n.main_content_div .all_div .flex_header ion-icon {\n  color: grey;\n  font-size: 20px;\n}\n.main_content_div .all_div .item_div {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid lightgrey;\n  display: flex;\n}\n.main_content_div .all_div .item_div .back_image {\n  height: 100px;\n  width: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n}\n.main_content_div .all_div .item_div .detail_div {\n  padding-left: 10px;\n}\n.main_content_div .all_div .item_div .detail_div .name_lbl {\n  font-family: \"semi-bold\";\n  font-size: 15px;\n}\n.main_content_div .all_div .item_div .detail_div .price_lbl {\n  font-family: \"medium\";\n  font-size: 14px;\n}\n.main_content_div .all_div .item_div .detail_div .grey_lbl {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .board_div {\n  padding: 16px;\n}\n.main_content_div .board_div .single_board {\n  border-bottom: 1px solid lightgrey;\n  margin-bottom: 16px;\n}\n.main_content_div .board_div .single_board .image_flex {\n  display: flex;\n  justify-content: space-between;\n}\n.main_content_div .board_div .single_board .image_flex .back_board {\n  height: 130px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 10px;\n}\n.main_content_div .board_div .single_board .image_flex .back_grid {\n  height: 130px;\n  width: 100%;\n  display: flex;\n}\n.main_content_div .board_div .single_board .image_flex .back_grid .inner_flex {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.main_content_div .board_div .single_board .image_flex .back_grid .small_back1 {\n  height: 55%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .board_div .single_board .image_flex .back_grid .small_back2 {\n  height: 45%;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .board_div .single_board .board_name_div {\n  position: relative;\n  padding-bottom: 8px;\n}\n.main_content_div .board_div .single_board .board_name_div .board_name {\n  font-size: 24px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .board_div .single_board .board_name_div .grey_lbl {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .board_div .single_board .board_name_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 8px;\n  color: #CBCBCB;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7QUFBUjtBQUdBO0VBQ0ksV0FBQTtBQUFKO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFJUTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUFGWjtBQU1JO0VBQ0ksYUFBQTtBQUpSO0FBTVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUpaO0FBTVk7RUFDSSxXQUFBO0FBSmhCO0FBTVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUpoQjtBQVFRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQU5aO0FBUVk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBTmhCO0FBUVk7RUFDSSxrQkFBQTtBQU5oQjtBQVFnQjtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQU5wQjtBQVFnQjtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQU5wQjtBQVFnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBTnBCO0FBWUk7RUFDSSxhQUFBO0FBVlI7QUFXUTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7QUFUWjtBQVdZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBVGhCO0FBV2dCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVRwQjtBQVlnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVZwQjtBQWFvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWHhCO0FBY29CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFaeEI7QUFjb0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQVp4QjtBQWdCWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFkaEI7QUFnQmdCO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBZHBCO0FBZ0JnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBZHBCO0FBZ0JnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWRwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgIH1cbiAgICAuYmFja19idG4ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWxsX2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgLmZsZXhfaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtX2RpdiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXRhaWxfZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAubmFtZV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNlX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JleV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib2FyZF9kaXYge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAuc2luZ2xlX2JvYXJkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaW1hZ2VfZmxleCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgICAgICAuYmFja19ib2FyZCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJhY2tfZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lcl9mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc21hbGxfYmFjazEge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFsbF9iYWNrMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9hcmRfbmFtZV9kaXYge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgIC5ib2FyZF9uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmV5X2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0JDQkNCO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/wishlist/wishlist.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/wishlist/wishlist.page.ts ***!
      \*************************************************/

    /*! exports provided: WishlistPage */

    /***/
    function srcAppPagesWishlistWishlistPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPage", function () {
        return WishlistPage;
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

      var WishlistPage = /*#__PURE__*/function () {
        function WishlistPage(navCtrl) {
          _classCallCheck(this, WishlistPage);

          this.navCtrl = navCtrl;
          this.tabID = 'all';
          this.items = [{
            img: 'assets/imgs/5.jpg',
            name: ''
          }, {
            img: 'assets/imgs/6.jpg',
            name: ''
          }, {
            img: 'assets/imgs/7.jpg',
            name: ''
          }, {
            img: 'assets/imgs/8.jpg',
            name: ''
          }, {
            img: 'assets/imgs/9.jpg',
            name: ''
          }, {
            img: 'assets/imgs/10.jpg',
            name: ''
          }];
        }

        _createClass(WishlistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "segmentChanged",
          value: function segmentChanged(eve) {
            this.tabID = eve.detail.value;
            console.log(eve.detail.value);
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.navCtrl.back();
          }
        }]);

        return WishlistPage;
      }();

      WishlistPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wishlist.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wishlist.page.scss */
        "./src/app/pages/wishlist/wishlist.page.scss"))["default"]]
      })], WishlistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-wishlist-wishlist-module-es5.js.map