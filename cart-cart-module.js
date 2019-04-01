(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Shopping Cart\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/cart\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge *ngIf=\"cart.length >= 1\" mode=\"ios\" color=\"primary\" slot=\"end\">{{cart.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"total-con\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>Cart Items ({{cart.length}})</h3>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-button (click)=\"reset()\" fill=\"clear\" shape=\"round\" color=\"danger\" expand=\"full\" size=\"small\">\n          <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n          <ion-label>Empty</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"danger\">\n          <p>Total: &#8358;{{currency.formatCurrency(total.toString())}}</p>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-button (click)=\"placeOrder()\" color=\"danger\" expand=\"full\" shape=\"round\" size=\"small\">\n          <ion-icon name=\"card\" slot=\"start\"></ion-icon>\n          <ion-label>Pay</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-content color=\"light\">\n  <div id=\"cart\">\n\n    <ion-card *ngIf=\"cart.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"sad\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">Empty Cart</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let item of cart\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-icon class=\"media\" color=\"danger\" name=\"{{item.category == 'wear' ? 'shirt' : 'pizza'}}\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" wrap=\"no-wrap\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"danger\">{{item.name}}</ion-label>\n              <ion-button (click)=\"removeFromCart(item)\" slot=\"end\" fill=\"clear\" shape=\"round\" color=\"danger\">\n                <ion-icon name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"price\">&#8358;{{currency.formatCurrency(item.price * item.quantity)}}</ion-label>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-input class=\"qty\" placeholder=\"Qty\" type=\"number\" min=\"1\" [value]=\"item.quantity\" [max]=\"item.available\" (ionChange)=\"setQuantity($event, item)\"></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <br/>\n  </div>\n  <br/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CartPage = /** @class */ (function () {
    function CartPage(api, toast, router, currency) {
        this.api = api;
        this.toast = toast;
        this.router = router;
        this.currency = currency;
        this.cart = this.api.getCart();
        this.total = 0;
    }
    CartPage.prototype.ngOnInit = function () {
        this.calculateTotal();
    };
    CartPage.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.cart.forEach(function (item) {
            var subTotal = item.price * item.quantity;
            _this.total += subTotal;
        });
    };
    CartPage.prototype.setQuantity = function ($event, item) {
        item.quantity = $event.detail.value;
        this.calculateTotal();
        this.api.updateCart(this.cart);
    };
    CartPage.prototype.removeFromCart = function (item) {
        this.cart = this.cart.filter(function (val) { return val.id !== item.id; });
        this.calculateTotal();
        this.api.updateCart(this.cart);
    };
    CartPage.prototype.reset = function () {
        this.api.resetCart();
        this.cart = this.api.getCart();
        this.toast.show('Cart Emptied.');
        this.calculateTotal();
    };
    CartPage.prototype.placeOrder = function () {
        var order = this.api.createOrder({
            payment: true,
            total: this.total,
            products: this.cart,
            createdAt: new Date().toLocaleDateString(),
        });
        this.api.makePay(order, true);
        this.api.resetCart();
        this.router.navigateByUrl('/my-orders');
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map