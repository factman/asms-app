(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./src/app/shop/shop.module.ts":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/shop/shop.page.ts");







var routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
    }
];
var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
        })
    ], ShopPageModule);
    return ShopPageModule;
}());



/***/ }),

/***/ "./src/app/shop/shop.page.html":
/*!*************************************!*\
  !*** ./src/app/shop/shop.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Shop\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/cart\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge *ngIf=\"cart.length >= 1\" mode=\"ios\" color=\"primary\" slot=\"end\">{{cart.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-segment color=\"danger\" [scrollable]=\"true\" mode=\"ios\" (ionChange)=\"switch($event)\">\n  <ion-segment-button mode=\"ios\" value=\"wears\" [checked]=\"true\" layout=\"icon-start\">\n    <ion-label>Wears</ion-label>\n    <ion-icon name=\"shirt\"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button mode=\"ios\" value=\"groceries\" layout=\"icon-start\">\n    <ion-label>Groceries</ion-label>\n    <ion-icon name=\"pizza\"></ion-icon>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content color=\"light\">\n  <div id=\"wears\" #wears>\n\n    <ion-card *ngIf=\"wearItems.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"sad\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">Empty Store</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let wear of wearItems\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-icon class=\"media\" color=\"danger\" name=\"business\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" wrap=\"no-wrap\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"danger\">{{wear.name}}</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"price\">&#8358;{{currency.formatCurrency(wear.price)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-button *ngIf=\"!cartItems.includes(wear.id)\" expand=\"full\" (click)=\"addToCart(wear)\" shape=\"round\" color=\"{{wear.quantity === 0 ? 'danger' : 'danger'}}\" size=\"small\" [disabled]=\"!!(wear.quantity === 0)\">\n                  <ion-icon name=\"cart\" slot=\"start\"></ion-icon>\n                  <ion-label>{{wear.quantity === 0 ? 'Out' : 'Buy'}}</ion-label>\n                </ion-button>\n                <ion-button *ngIf=\"cartItems.includes(wear.id)\" routerLink=\"/cart\" expand=\"full\" shape=\"round\" color=\"success\" size=\"small\">\n                  <ion-icon name=\"cart\" slot=\"start\"></ion-icon>\n                  <ion-label>Cart</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n\n  <div id=\"groceries\" #groceries>\n\n    <ion-card *ngIf=\"groceriesItems.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"sad\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">Empty Store</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let groceries of groceriesItems\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-icon class=\"media\" color=\"danger\" name=\"pizza\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" wrap=\"no-wrap\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"danger\">{{groceries.name}}</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"price\">&#8358;{{currency.formatCurrency(groceries.price)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-button *ngIf=\"!cartItems.includes(groceries.id)\" expand=\"full\" (click)=\"addToCart(groceries)\" shape=\"round\" color=\"{{groceries.quantity === 0 ? 'danger' : 'danger'}}\" size=\"small\" [disabled]=\"!!(groceries.quantity === 0)\">\n                  <ion-icon name=\"cart\" slot=\"start\"></ion-icon>\n                  <ion-label>{{groceries.quantity === 0 ? 'Out' : 'Buy'}}</ion-label>\n                </ion-button>\n                <ion-button *ngIf=\"cartItems.includes(groceries.id)\" routerLink=\"/cart\" expand=\"full\" shape=\"round\" color=\"success\" size=\"small\">\n                  <ion-icon name=\"card\" slot=\"start\"></ion-icon>\n                  <ion-label>Pay</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shop/shop.page.scss":
/*!*************************************!*\
  !*** ./src/app/shop/shop.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shop/shop.page.ts":
/*!***********************************!*\
  !*** ./src/app/shop/shop.page.ts ***!
  \***********************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ShopPage = /** @class */ (function () {
    function ShopPage(api, router, currency) {
        this.api = api;
        this.router = router;
        this.currency = currency;
        this.items = Object.values(this.api.getProducts());
        this.wearItems = [];
        this.groceriesItems = [];
        this.cart = this.api.getCart();
        this.cartItems = [];
    }
    ShopPage.prototype.ngOnInit = function () {
        this.categoriesProducts();
        this.initCartItems();
    };
    ShopPage.prototype.categoriesProducts = function () {
        var _this = this;
        this.wearItems = [];
        this.groceriesItems = [];
        this.items.forEach(function (item) {
            if (item.category === 'wears') {
                _this.wearItems.push(item);
            }
            else if (item.category === 'groceries') {
                _this.groceriesItems.push(item);
            }
        });
    };
    ShopPage.prototype.initCartItems = function () {
        var _this = this;
        this.cartItems = [];
        this.cart.forEach(function (value) {
            _this.cartItems.push(value.id);
        });
    };
    ShopPage.prototype.switch = function ($event) {
        if ($event.detail.value === 'wears') {
            this.wears.nativeElement.style.display = 'block';
            this.groceries.nativeElement.style.display = 'none';
        }
        else {
            this.wears.nativeElement.style.display = 'none';
            this.groceries.nativeElement.style.display = 'block';
        }
    };
    ShopPage.prototype.addToCart = function (item) {
        this.api.addToCart({
            name: item.name,
            price: item.price,
            quantity: 1,
            available: item.quantity,
            category: item.category,
            id: item.id,
        });
        this.cart = this.api.getCart();
        this.initCartItems();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wears'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShopPage.prototype, "wears", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groceries'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShopPage.prototype, "groceries", void 0);
    ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.page.html */ "./src/app/shop/shop.page.html"),
            styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/shop/shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]])
    ], ShopPage);
    return ShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=shop-shop-module.js.map