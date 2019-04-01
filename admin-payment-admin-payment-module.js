(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-payment-admin-payment-module"],{

/***/ "./src/app/admin-payment/admin-payment.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin-payment/admin-payment.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPaymentPageModule", function() { return AdminPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-payment.page */ "./src/app/admin-payment/admin-payment.page.ts");







var routes = [
    {
        path: '',
        component: _admin_payment_page__WEBPACK_IMPORTED_MODULE_6__["AdminPaymentPage"]
    }
];
var AdminPaymentPageModule = /** @class */ (function () {
    function AdminPaymentPageModule() {
    }
    AdminPaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_payment_page__WEBPACK_IMPORTED_MODULE_6__["AdminPaymentPage"]]
        })
    ], AdminPaymentPageModule);
    return AdminPaymentPageModule;
}());



/***/ }),

/***/ "./src/app/admin-payment/admin-payment.page.html":
/*!*******************************************************!*\
  !*** ./src/app/admin-payment/admin-payment.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Order: {{id}}\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"total-con\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>Order Items ({{order.products.length}})</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"dark\">\n          <p>Total: &#8358;{{currency.formatCurrency(order.total)}}</p>\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-button (click)=\"pay()\" [color]=\"order.payment ? 'danger' : 'success'\" expand=\"full\" shape=\"round\" size=\"small\">\n          <ion-icon name=\"{{order.payment ? 'close' : 'card'}}\" slot=\"start\"></ion-icon>\n          <ion-label>{{order.payment ? 'Reject' : 'Pay'}}</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-content color=\"light\">\n  <div id=\"cart\">\n    <ion-card *ngFor=\"let item of order.products\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-icon class=\"media\" color=\"dark\" name=\"{{item.category === 'wear' ? 'business' : 'pizza'}}\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" wrap=\"no-wrap\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\">{{item.name}}</ion-label>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"price\">&#8358;{{currency.formatCurrency(item.price * item.quantity)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"date\" color=\"dark\">Qty: {{item.quantity}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <br/>\n  </div>\n  <br/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin-payment/admin-payment.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin-payment/admin-payment.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBheW1lbnQvYWRtaW4tcGF5bWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-payment/admin-payment.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-payment/admin-payment.page.ts ***!
  \*****************************************************/
/*! exports provided: AdminPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPaymentPage", function() { return AdminPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");






var AdminPaymentPage = /** @class */ (function () {
    function AdminPaymentPage(router, api, currency, toast) {
        this.router = router;
        this.api = api;
        this.currency = currency;
        this.toast = toast;
        this.id = location.pathname.replace('/admin-payment/', '');
        this.order = this.api.getOrderById(this.id);
    }
    AdminPaymentPage.prototype.ngOnInit = function () {
        var user = this.api.getCurrentUser();
        if (user !== _services_constants_service__WEBPACK_IMPORTED_MODULE_3__["PRIVILEGES"].ADMIN) {
            this.router.navigateByUrl('/home');
        }
    };
    AdminPaymentPage.prototype.pay = function () {
        var _this = this;
        this.order.payment = !this.order.payment;
        this.api.makePay(this.order, this.order.payment);
        if (this.order.payment) {
            this.toast.show('Payment Successful')
                .then(function () {
                _this.router.navigateByUrl('/admin-orders');
            });
        }
        else {
            this.toast.show('Payment Rejected')
                .then(function () {
                _this.router.navigateByUrl('/admin-orders');
            });
        }
    };
    AdminPaymentPage.prototype.logout = function () {
        this.api.logout(_services_constants_service__WEBPACK_IMPORTED_MODULE_3__["PRIVILEGES"].ADMIN);
        location.assign('/home');
    };
    AdminPaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-payment',
            template: __webpack_require__(/*! ./admin-payment.page.html */ "./src/app/admin-payment/admin-payment.page.html"),
            styles: [__webpack_require__(/*! ./admin-payment.page.scss */ "./src/app/admin-payment/admin-payment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_controller_service__WEBPACK_IMPORTED_MODULE_4__["ControllerService"], _services_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], AdminPaymentPage);
    return AdminPaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-payment-admin-payment-module.js.map