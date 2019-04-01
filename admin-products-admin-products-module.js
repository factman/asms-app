(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-products-admin-products-module"],{

/***/ "./src/app/admin-products/admin-products.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin-products/admin-products.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsPageModule", function() { return AdminProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-products.page */ "./src/app/admin-products/admin-products.page.ts");







var routes = [
    {
        path: '',
        component: _admin_products_page__WEBPACK_IMPORTED_MODULE_6__["AdminProductsPage"]
    }
];
var AdminProductsPageModule = /** @class */ (function () {
    function AdminProductsPageModule() {
    }
    AdminProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_products_page__WEBPACK_IMPORTED_MODULE_6__["AdminProductsPage"]]
        })
    ], AdminProductsPageModule);
    return AdminProductsPageModule;
}());



/***/ }),

/***/ "./src/app/admin-products/admin-products.page.html":
/*!*********************************************************!*\
  !*** ./src/app/admin-products/admin-products.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Products\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-segment color=\"dark\" [scrollable]=\"true\" mode=\"ios\" (ionChange)=\"switch($event)\">\n  <ion-segment-button mode=\"ios\" value=\"wears\" [checked]=\"true\" layout=\"icon-start\">\n    <ion-label>Wears</ion-label>\n    <ion-icon name=\"shirt\"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button mode=\"ios\" value=\"groceries\" layout=\"icon-start\">\n    <ion-label>Groceries</ion-label>\n    <ion-icon name=\"pizza\"></ion-icon>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content color=\"light\">\n  <div id=\"wears\" #wears>\n\n    <ion-card *ngIf=\"wearItems.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"sad\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">Empty Store</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let wear of wearItems\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-icon class=\"media\" color=\"dark\" name=\"shirt\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" wrap=\"no-wrap\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\">{{wear.name}}</ion-label>\n              <ion-button color=\"danger\" slot=\"end\" fill=\"clear\" shape=\"round\" (click)=\"deleteProduct(wear.id)\">\n                <ion-icon name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"price\">&#8358;{{currency.formatCurrency(wear.price)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"date\" color=\"dark\">Qty: {{wear.quantity}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n\n  <div id=\"groceries\" #groceries>\n\n    <ion-card *ngIf=\"groceriesItems.length < 1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"sad\" slot=\"start\" color=\"medium\"></ion-icon>\n              <ion-label color=\"medium\">Empty Store</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let grocerie of groceriesItems\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-icon class=\"media\" color=\"dark\" name=\"pizza\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" wrap=\"no-wrap\">\n            <ion-item lines=\"none\">\n              <ion-label color=\"dark\">{{grocerie.name}}</ion-label>\n              <ion-button color=\"danger\" slot=\"end\" fill=\"clear\" shape=\"round\" (click)=\"deleteProduct(grocerie.id)\">\n                <ion-icon name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"price\">&#8358;{{currency.formatCurrency(grocerie.price)}}</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"date\" color=\"dark\">Qty: {{grocerie.quantity}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\">\n    <ion-fab-button color=\"dark\" routerLink=\"/admin-add-product\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin-products/admin-products.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin-products/admin-products.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date {\n  display: block;\n  text-align: right;\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3RtYW4vbm9kZVByb2plY3RzL1NhbGVzQXBwL3NyYy9hcHAvYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wcm9kdWN0cy9hZG1pbi1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin-products/admin-products.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin-products/admin-products.page.ts ***!
  \*******************************************************/
/*! exports provided: AdminProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsPage", function() { return AdminProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");





var AdminProductsPage = /** @class */ (function () {
    function AdminProductsPage(router, api, currency) {
        this.router = router;
        this.api = api;
        this.currency = currency;
        this.items = Object.values(this.api.getProducts());
        this.wearItems = [];
        this.groceriesItems = [];
    }
    AdminProductsPage.prototype.ngOnInit = function () {
        var user = this.api.getCurrentUser();
        if (user !== _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["PRIVILEGES"].ADMIN) {
            this.router.navigateByUrl('/home');
        }
        this.categoriesProducts();
    };
    AdminProductsPage.prototype.categoriesProducts = function () {
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
    AdminProductsPage.prototype.switch = function ($event) {
        if ($event.detail.value === 'wears') {
            this.wears.nativeElement.style.display = 'block';
            this.groceries.nativeElement.style.display = 'none';
        }
        else {
            this.wears.nativeElement.style.display = 'none';
            this.groceries.nativeElement.style.display = 'block';
        }
    };
    AdminProductsPage.prototype.deleteProduct = function (id) {
        this.api.deleteProduct(id);
        this.items = Object.values(this.api.getProducts());
        this.categoriesProducts();
    };
    AdminProductsPage.prototype.logout = function () {
        this.api.logout(_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["PRIVILEGES"].ADMIN);
        location.assign('/home');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wears'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdminProductsPage.prototype, "wears", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groceries'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdminProductsPage.prototype, "groceries", void 0);
    AdminProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.page.html */ "./src/app/admin-products/admin-products.page.html"),
            styles: [__webpack_require__(/*! ./admin-products.page.scss */ "./src/app/admin-products/admin-products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_controller_service__WEBPACK_IMPORTED_MODULE_4__["ControllerService"], _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]])
    ], AdminProductsPage);
    return AdminProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-products-admin-products-module.js.map