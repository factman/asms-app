(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-orders-admin-orders-module"],{

/***/ "./src/app/admin-orders/admin-orders.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-orders/admin-orders.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersPageModule", function() { return AdminOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-orders.page */ "./src/app/admin-orders/admin-orders.page.ts");







var routes = [
    {
        path: '',
        component: _admin_orders_page__WEBPACK_IMPORTED_MODULE_6__["AdminOrdersPage"]
    }
];
var AdminOrdersPageModule = /** @class */ (function () {
    function AdminOrdersPageModule() {
    }
    AdminOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_orders_page__WEBPACK_IMPORTED_MODULE_6__["AdminOrdersPage"]]
        })
    ], AdminOrdersPageModule);
    return AdminOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/admin-orders/admin-orders.page.html":
/*!*****************************************************!*\
  !*** ./src/app/admin-orders/admin-orders.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Orders\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"total-con\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>Total Orders: {{orders.length}}</h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-content color=\"light\">\n  <div id=\"cart\">\n\n    <ion-card *ngIf=\"orders.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"basket\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">No Orders yet</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let item of orders\" color=\"{{item.payment ? 'success' : 'warning'}}\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\" routerLink=\"/admin-payment/{{item.id}}\" color=\"{{item.payment ? 'success' : 'warning'}}\">\n              <ion-label color=\"dark\">\n                <strong>Order ID:</strong> {{item.id}}\n              </ion-label>\n              <ion-badge mode=\"ios\" slot=\"end\" color=\"dark\">Qty: {{item.products.length}}</ion-badge>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label color=\"dark\" class=\"price\">&#8358;{{currency.formatCurrency(item.total)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"date\" color=\"dark\">{{item.createdAt}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <br/>\n  </div>\n  <br/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin-orders/admin-orders.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin-orders/admin-orders.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW9yZGVycy9hZG1pbi1vcmRlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-orders/admin-orders.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-orders/admin-orders.page.ts ***!
  \***************************************************/
/*! exports provided: AdminOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersPage", function() { return AdminOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AdminOrdersPage = /** @class */ (function () {
    function AdminOrdersPage(api, router, currency) {
        this.api = api;
        this.router = router;
        this.currency = currency;
        this.orders = Object.values(this.api.getOrders());
    }
    AdminOrdersPage.prototype.ngOnInit = function () {
        var user = this.api.getCurrentUser();
        if (user !== _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["PRIVILEGES"].ADMIN) {
            this.router.navigateByUrl('/home');
        }
    };
    AdminOrdersPage.prototype.logout = function () {
        this.api.logout(_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["PRIVILEGES"].ADMIN);
        location.assign('/home');
    };
    AdminOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! ./admin-orders.page.html */ "./src/app/admin-orders/admin-orders.page.html"),
            styles: [__webpack_require__(/*! ./admin-orders.page.scss */ "./src/app/admin-orders/admin-orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_controller_service__WEBPACK_IMPORTED_MODULE_3__["ControllerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]])
    ], AdminOrdersPage);
    return AdminOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-orders-admin-orders-module.js.map