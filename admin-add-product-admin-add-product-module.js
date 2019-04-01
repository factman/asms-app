(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-add-product-admin-add-product-module"],{

/***/ "./src/app/admin-add-product/admin-add-product.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin-add-product/admin-add-product.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminAddProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddProductPageModule", function() { return AdminAddProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-add-product.page */ "./src/app/admin-add-product/admin-add-product.page.ts");







var routes = [
    {
        path: '',
        component: _admin_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AdminAddProductPage"]
    }
];
var AdminAddProductPageModule = /** @class */ (function () {
    function AdminAddProductPageModule() {
    }
    AdminAddProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AdminAddProductPage"]]
        })
    ], AdminAddProductPageModule);
    return AdminAddProductPageModule;
}());



/***/ }),

/***/ "./src/app/admin-add-product/admin-add-product.page.html":
/*!***************************************************************!*\
  !*** ./src/app/admin-add-product/admin-add-product.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Add Product\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <br/>\n  <div class=\"body\">\n    <br/>\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-icon slot=\"start\" name=\"cube\" color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" name=\"name\" minlength=\"3\" required [(ngModel)]=\"form.name\" color=\"dark\" placeholder=\"Product Name\"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-icon slot=\"start\" name=\"cash\" color=\"dark\"></ion-icon>\n      <ion-input type=\"number\" min=\"10\" max=\"100000\" required [(ngModel)]=\"form.price\" name=\"price\" color=\"dark\" placeholder=\"Unit Price\"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-icon slot=\"start\" name=\"pie\" color=\"dark\"></ion-icon>\n      <ion-label>Category</ion-label>\n      <ion-select name=\"category\" placeholder=\"Select Category...\" [(ngModel)]=\"form.category\">\n        <ion-select-option value=\"wears\">Wears</ion-select-option>\n        <ion-select-option value=\"groceries\">Groceries</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <br/>\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-icon slot=\"start\" name=\"stats\" color=\"dark\"></ion-icon>\n      <ion-input type=\"number\" min=\"1\" max=\"100000\" required [(ngModel)]=\"form.quantity\" name=\"quantity\" color=\"dark\" placeholder=\"Quantity\"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-button color=\"dark\" shape=\"round\"\n      [disabled]=\"!!(form.name.length < 3 || form.price.length < 2 || form.category.length < 4 || form.quantity.length < 1)\" (click)=\"add()\"\n      expand=\"block\"\n    >\n      <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n      <ion-label>Add Product</ion-label>\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin-add-product/admin-add-product.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin-add-product/admin-add-product.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWFkZC1wcm9kdWN0L2FkbWluLWFkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-add-product/admin-add-product.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-add-product/admin-add-product.page.ts ***!
  \*************************************************************/
/*! exports provided: AdminAddProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddProductPage", function() { return AdminAddProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AdminAddProductPage = /** @class */ (function () {
    function AdminAddProductPage(api, toast, router) {
        this.api = api;
        this.toast = toast;
        this.router = router;
        this.form = {
            name: '',
            price: '',
            category: '',
            quantity: '',
        };
    }
    AdminAddProductPage.prototype.ngOnInit = function () {
        var user = this.api.getCurrentUser();
        if (user !== _services_constants_service__WEBPACK_IMPORTED_MODULE_2__["PRIVILEGES"].ADMIN) {
            this.router.navigateByUrl('/home');
        }
    };
    AdminAddProductPage.prototype.add = function () {
        var _this = this;
        if (this.api.addProduct(this.form)) {
            this.toast.show('Product Created Successfully.')
                .then(function () {
                _this.form = {
                    name: '',
                    price: '',
                    category: '',
                    quantity: '',
                };
                _this.router.navigateByUrl('/admin-products');
            });
        }
        else {
            this.toast.show('Error Creating Product');
        }
    };
    AdminAddProductPage.prototype.logout = function () {
        this.api.logout(_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["PRIVILEGES"].ADMIN);
        location.assign('/home');
    };
    AdminAddProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add-product',
            template: __webpack_require__(/*! ./admin-add-product.page.html */ "./src/app/admin-add-product/admin-add-product.page.html"),
            styles: [__webpack_require__(/*! ./admin-add-product.page.scss */ "./src/app/admin-add-product/admin-add-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_controller_service__WEBPACK_IMPORTED_MODULE_3__["ControllerService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminAddProductPage);
    return AdminAddProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-add-product-admin-add-product-module.js.map