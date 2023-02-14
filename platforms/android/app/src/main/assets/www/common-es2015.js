(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"main_content_div\">\n        <form  [formGroup]=\"colorForm\" (ngSubmit)=\"addColour()\">\n      \n            <!-- <ion-icon name=\"chevron-back\" class=\"back_btn\" (click)=\"goToBack()\"></ion-icon> -->\n            <ion-label class=\"grey_title\">Colour</ion-label>\n            <!-- <ion-item > -->\n              <ion-input type=\"text\" class=\"custom\" formControlName=\"color\" placeholder=\"Red\">\n                <!-- <ion-icon name=\"clipboard-outline\"></ion-icon> -->\n            </ion-input>\n            <ion-label class=\"grey_title\">Stock</ion-label>\n         \n              <ion-input type=\"number\" class=\"custom\" formControlName=\"stock\" placeholder=\"10\">\n                <!-- <ion-icon name=\"pricetag-outline\"></ion-icon> -->\n            </ion-input>  \n            <ion-label class=\"grey_title\">Low Stock</ion-label>\n            <ion-input type=\"number\" class=\"custom\" formControlName=\"lowstock\" placeholder=\"10\">\n                <!-- <ion-icon name=\"pricetag-outline\"></ion-icon> -->\n            </ion-input>\n           \n\n\n        <ion-button *ngIf=\"!kala\" expand=\"block\" shape=\"round\" type=\"submit\" [disabled]=\"!colorForm.valid\" >\n            Add\n        </ion-button>\n        <ion-button *ngIf=\"kala\" expand=\"block\" shape=\"round\" type=\"submit\" [disabled]=\"!colorForm.valid\" >\n            Update\n        </ion-button>\n    </form>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-modal/product-modal.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-modal/product-modal.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"main_content_div\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/11.jpg)'\">\n            <div class=\"close_btn\" (click)=\"close()\">\n              <ion-icon name=\"close\"></ion-icon>\n            </div>\n        </div>\n        <div class=\"content_div\">\n            <ion-label>Success ! You've added this item to your bag.</ion-label>\n\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"goToCart()\">\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n              Checkout\n            </ion-button>\n\n            <ion-button expand=\"block\" shape=\"round\" class=\"shop_btn\" (click)=\"goToShop()\">\n              Continue Shopping\n            </ion-button>\n\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n}\n.main_content_div .title_lbl {\n  font-size: 20px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .flex_div {\n  border-bottom: 1px solid lightgrey;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 25px;\n}\n.main_content_div .flex_div .price_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div ion-button {\n  margin: 0px;\n  margin-top: 16px;\n}\n.main_content_div .sc-ion-input-md-h {\n  border: 2px solid grey;\n  border-radius: 5px;\n  padding-left: 10px !important;\n}\n.main_content_div .grey_title {\n  color: grey;\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7QUFDUjtBQUVJO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDSSx3QkFBQTtBQUFaO0FBSUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBSFI7QUFLSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnRpdGxlX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgIH1cblxuICAgIC5mbGV4X2RpdiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gICAgICAgIC5wcmljZV9sYmwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cblxuICAgIC5zYy1pb24taW5wdXQtbWQtaHtcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCBncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZ3JleV90aXRsZSB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAvLyAuY3VzdG9te1xuICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgLy8gfVxuXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.ts ***!
  \*************************************************************/
/*! exports provided: PaymentMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPage", function() { return PaymentMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let PaymentMethodPage = class PaymentMethodPage {
    constructor(modalCtrl, router, fb) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.fb = fb;
    }
    ngOnInit() {
        console.log(this.kala);
        if (this.kala) {
            this.colorForm = this.fb.group({
                color: [this.kala.color, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    ]],
                stock: [this.kala.stock, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    ]],
                lowstock: [this.kala.lowstock, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    ]],
            });
        }
        else {
            this.colorForm = this.fb.group({
                color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    ]],
                stock: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    ]],
                lowstock: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    ]],
            });
        }
    }
    modalClose() {
        this.modalCtrl.dismiss({
            tabID: 2
        });
        // this.modalCtrl.dismiss();
    }
    addColour() {
        let color = localStorage.getItem("Colors");
        if (this.kala) {
            let existing = JSON.parse(color);
            existing.find((obj, index) => {
                if (obj.color === this.kala.color) {
                    console.log(index);
                    localStorage.removeItem(index);
                }
            });
            console.log(color);
        }
        else {
            if (!color) {
                let newset = [];
                var colors = {
                    color: this.colorForm.controls.color.value,
                    stock: this.colorForm.controls.stock.value,
                    lowstock: this.colorForm.controls.lowstock.value
                };
                newset.push(colors);
                localStorage.setItem("Colors", JSON.stringify(newset));
                // let replacec = );
                console.log(this.newcolor);
                // localStorage.setItem("Colours", JSON.stringify());
            }
            else {
                const colors = {
                    color: this.colorForm.controls.color.value,
                    stock: this.colorForm.controls.stock.value,
                    lowstock: this.colorForm.controls.lowstock.value
                };
                let oldcolor = JSON.parse(color);
                oldcolor.push(colors);
                localStorage.setItem("Colors", JSON.stringify(oldcolor));
            }
        }
        this.modalCtrl.dismiss().then(() => {
        });
    }
};
PaymentMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PaymentMethodPage.propDecorators = {
    newcolor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    kala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PaymentMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-method',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-method.page.scss */ "./src/app/pages/payment-method/payment-method.page.scss")).default]
    })
], PaymentMethodPage);



/***/ }),

/***/ "./src/app/pages/product-modal/product-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/product-modal/product-modal.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div ion-label {\n  display: block;\n}\n.main_content_div .back_image {\n  width: 100%;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: relative;\n}\n.main_content_div .back_image .close_btn {\n  height: 25px;\n  width: 25px;\n  border-radius: 100%;\n  background: #969696;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.main_content_div .back_image .close_btn ion-icon {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 53%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div .content_div {\n  padding: 20px;\n}\n.main_content_div .content_div ion-label {\n  font-family: \"semi-bold\";\n  text-align: center;\n}\n.main_content_div .content_div ion-button {\n  margin: 0;\n  margin-top: 20px;\n}\n.main_content_div .content_div .shop_btn {\n  --background: #F1F0F6;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQUE7QUFBUjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFaO0FBRVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQWhCO0FBVUk7RUFDSSxhQUFBO0FBUlI7QUFVUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7QUFSWjtBQVdRO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBVFo7QUFZUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQVZaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jbG9zZV9idG4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzk2OTY5NjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MyU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW9uLWljb24ge1xuICAgICAgICAvLyAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAvLyAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgLmNvbnRlbnRfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNob3BfYnRuIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0YxRjBGNjtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/product-modal/product-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-modal/product-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: ProductModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModalPage", function() { return ProductModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ProductModalPage = class ProductModalPage {
    constructor(modalCtrl, route) {
        this.modalCtrl = modalCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    close() {
        this.modalCtrl.dismiss();
    }
    goToShop() {
        this.modalCtrl.dismiss();
        this.route.navigate(['tabs']);
    }
    goToCart() {
        this.modalCtrl.dismiss();
        this.route.navigate(['/cart']);
    }
};
ProductModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ProductModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-product-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-modal/product-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-modal.page.scss */ "./src/app/pages/product-modal/product-modal.page.scss")).default]
    })
], ProductModalPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map