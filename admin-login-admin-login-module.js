(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-login-admin-login-module"],{

/***/ "./src/app/admin-login/admin-login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-login/admin-login.module.ts ***!
  \***************************************************/
/*! exports provided: AdminLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginPageModule", function() { return AdminLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-login.page */ "./src/app/admin-login/admin-login.page.ts");







var routes = [
    {
        path: '',
        component: _admin_login_page__WEBPACK_IMPORTED_MODULE_6__["AdminLoginPage"]
    }
];
var AdminLoginPageModule = /** @class */ (function () {
    function AdminLoginPageModule() {
    }
    AdminLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_login_page__WEBPACK_IMPORTED_MODULE_6__["AdminLoginPage"]]
        })
    ], AdminLoginPageModule);
    return AdminLoginPageModule;
}());



/***/ }),

/***/ "./src/app/admin-login/admin-login.page.html":
/*!***************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Admin Log In\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div class=\"body\">\n    <div class=\"logo-con\">\n      <ion-img src=\"../../assets/images/Logo.png\" alt=\"Logo\"></ion-img>\n    </div>\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-icon slot=\"start\" name=\"contact\" color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" name=\"username\" minlength=\"4\" required [(ngModel)]=\"form.username\" color=\"dark\" placeholder=\"Username\"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-item lines=\"full\" color=\"light\">\n      <ion-icon slot=\"start\" name=\"key\" color=\"dark\"></ion-icon>\n      <ion-input type=\"password\" minlength=\"6\" required [(ngModel)]=\"form.password\" name=\"password\" color=\"dark\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-button color=\"dark\" shape=\"round\" [disabled]=\"!!(form.username.length < 4 || form.password.length < 6)\" (click)=\"login()\" expand=\"block\">\n      <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n      <ion-label>Login</ion-label>\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin-login/admin-login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-login/admin-login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/admin-login/admin-login.page.ts ***!
  \*************************************************/
/*! exports provided: AdminLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginPage", function() { return AdminLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/controller.service */ "./src/app/services/controller.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constants.service */ "./src/app/services/constants.service.ts");





var AdminLoginPage = /** @class */ (function () {
    function AdminLoginPage(api, toast) {
        this.api = api;
        this.toast = toast;
        this.form = {
            username: '',
            password: '',
        };
    }
    AdminLoginPage.prototype.ngOnInit = function () {
    };
    AdminLoginPage.prototype.login = function () {
        if (this.api.login(this.form.username, this.form.password, _services_constants_service__WEBPACK_IMPORTED_MODULE_4__["PRIVILEGES"].ADMIN)) {
            this.toast.show('Log In Successfully')
                .then(function () {
                location.assign('/admin-home');
            });
        }
        else {
            this.toast.show('Invalid Credentials.');
        }
    };
    AdminLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.page.html */ "./src/app/admin-login/admin-login.page.html"),
            styles: [__webpack_require__(/*! ./admin-login.page.scss */ "./src/app/admin-login/admin-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_controller_service__WEBPACK_IMPORTED_MODULE_2__["ControllerService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AdminLoginPage);
    return AdminLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-login-admin-login-module.js.map