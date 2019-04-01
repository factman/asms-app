(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-order-my-order-module"],{

/***/ "./src/app/my-order/my-order.module.ts":
/*!*********************************************!*\
  !*** ./src/app/my-order/my-order.module.ts ***!
  \*********************************************/
/*! exports provided: MyOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPageModule", function() { return MyOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-order.page */ "./src/app/my-order/my-order.page.ts");







var routes = [
    {
        path: '',
        component: _my_order_page__WEBPACK_IMPORTED_MODULE_6__["MyOrderPage"]
    }
];
var MyOrderPageModule = /** @class */ (function () {
    function MyOrderPageModule() {
    }
    MyOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_order_page__WEBPACK_IMPORTED_MODULE_6__["MyOrderPage"]]
        })
    ], MyOrderPageModule);
    return MyOrderPageModule;
}());



/***/ }),

/***/ "./src/app/my-order/my-order.page.html":
/*!*********************************************!*\
  !*** ./src/app/my-order/my-order.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Order: {{id}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/cart\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge *ngIf=\"cart.length >= 1\" mode=\"ios\" color=\"primary\" slot=\"end\">{{cart.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"total-con\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>Total Items ({{order.products.length || 0}})</h3>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-button (click)=\"deleteOrder(id)\" fill=\"clear\" color=\"danger\" expand=\"block\" *ngIf=\"!order.payment\" shape=\"round\" size=\"small\">\n          <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n          <ion-label>Delete</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"danger\">\n          <p>Total: &#8358;{{currency.formatCurrency(order.total || 0)}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-content color=\"light\">\n  <div id=\"cart\">\n    <ion-card *ngFor=\"let item of order.products\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-icon class=\"media\" color=\"danger\" name=\"{{item.category === 'wear' ? 'shirt' : 'pizza'}}\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" wrap=\"no-wrap\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"danger\">{{item.name}}</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"price\">&#8358;{{currency.formatCurrency(item.price * item.quantity || 0)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"date\" color=\"danger\">Qty: {{item.quantity}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <br/>\n  </div>\n  <br/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/my-order/my-order.page.scss":
/*!*********************************************!*\
  !*** ./src/app/my-order/my-order.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVyL215LW9yZGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/my-order/my-order.page.ts":
/*!*******************************************!*\
  !*** ./src/app/my-order/my-order.page.ts ***!
  \*******************************************/
/*! exports provided: MyOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPage", function() { return MyOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");





var MyOrderPage = /** @class */ (function () {
    function MyOrderPage(api, router, currency) {
        this.api = api;
        this.router = router;
        this.currency = currency;
        this.id = location.pathname.replace('/my-order/', '');
        this.order = this.api.getOrderById(this.id);
        this.cart = this.api.getCart();
    }
    MyOrderPage.prototype.ngOnInit = function () {
    };
    MyOrderPage.prototype.deleteOrder = function (id) {
        this.api.deleteOrder(id);
        location.assign('/my-orders');
    };
    MyOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-order',
            template: __webpack_require__(/*! ./my-order.page.html */ "./src/app/my-order/my-order.page.html"),
            styles: [__webpack_require__(/*! ./my-order.page.scss */ "./src/app/my-order/my-order.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]])
    ], MyOrderPage);
    return MyOrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-order-my-order-module.js.map