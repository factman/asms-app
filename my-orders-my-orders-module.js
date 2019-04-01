(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"],{

/***/ "./src/app/my-orders/my-orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.module.ts ***!
  \***********************************************/
/*! exports provided: MyOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/my-orders/my-orders.page.ts");







var routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]
    }
];
var MyOrdersPageModule = /** @class */ (function () {
    function MyOrdersPageModule() {
    }
    MyOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
        })
    ], MyOrdersPageModule);
    return MyOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.page.html":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      My Orders\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/cart\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge *ngIf=\"cart.length >= 1\" mode=\"ios\" color=\"primary\" slot=\"end\">{{cart.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"total-con\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>Total Orders: {{keys.length}}</h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-content color=\"light\">\n  <div id=\"cart\">\n    <ion-card *ngIf=\"orders.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"basket\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">No Orders yet</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let item of keys\" color=\"{{orders[item].payment ? 'success' : 'warning'}}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\" routerLink=\"/my-order/{{orders[item].id}}\" color=\"{{orders[item].payment ? 'success' : 'warning'}}\">\n              <ion-label color=\"dark\">\n                <strong>Order ID:</strong> {{orders[item].id}}\n              </ion-label>\n              <ion-badge mode=\"ios\" slot=\"end\" color=\"dark\">Qty: {{orders[item].products.length}}</ion-badge>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label color=\"dark\" class=\"price\">&#8358;{{currency.formatCurrency(orders[item].total)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"date\" color=\"dark\">{{orders[item].createdAt}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <br/>\n  </div>\n  <br/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/my-orders/my-orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.ts ***!
  \*********************************************/
/*! exports provided: MyOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function() { return MyOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");





var MyOrdersPage = /** @class */ (function () {
    function MyOrdersPage(router, api, currency) {
        this.router = router;
        this.api = api;
        this.currency = currency;
        this.cart = this.api.getCart();
        this.orders = this.api.getOrders() || [];
        this.keys = Object.keys(this.orders).reverse();
    }
    MyOrdersPage.prototype.ngOnInit = function () {
    };
    MyOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.page.html */ "./src/app/my-orders/my-orders.page.html"),
            styles: [__webpack_require__(/*! ./my-orders.page.scss */ "./src/app/my-orders/my-orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_controller_service__WEBPACK_IMPORTED_MODULE_4__["ControllerService"], _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]])
    ], MyOrdersPage);
    return MyOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-orders-my-orders-module.js.map