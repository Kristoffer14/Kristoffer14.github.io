(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-navbar></page-navbar>\n<main class=\"mainContent\"><router-outlet></router-outlet></main>\n<page-footer></page-footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HaV e-log';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                    },
                    {
                        path: 'home',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                    },
                    {
                        path: 'dashboard',
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
                        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
                    },
                    {
                        path: 'logout',
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
                        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"]
                    }
                ])
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(user) {
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.user.getUserLoggedIn();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/css-helper.service.ts":
/*!***************************************!*\
  !*** ./src/app/css-helper.service.ts ***!
  \***************************************/
/*! exports provided: CssHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssHelperService", function() { return CssHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CssHelperService = /** @class */ (function () {
    function CssHelperService() {
    }
    //Removes boxshadow when screen size < 969
    CssHelperService.prototype.removeBoxShadow = function () {
        var shadow;
        if (window.innerWidth > 969) {
            shadow = "shadow";
        }
        else {
            shadow = '';
        }
        return shadow;
    };
    CssHelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CssHelperService);
    return CssHelperService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thead-green{\r\n    background-color: var(--bgColorGreen);\r\n    color: var(--fontColorWhite);\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"art-home\">\n  <div class=\"container\">\n    <div class=\"card {{shadow}}\">\n      <div class=\"card-header \"><a>E-journalen</a></div>\n      <div class=\"card-body justify-content-center  p-3 mb-5 bg-white rounded\"> \n        <form (submit)=\"getUser($event)\">\n          <div class=\"form-group\">\n            <label for=\"shipEventSelect\">Välj aktivitet i listan</label>\n            <select class=\"form-control\" id=\"shipEventSelect\">\n              <option selected disabled>Välj aktivitet</option>\n              <option>Lämna hamn</option>\n            </select>\n          </div>\n          <button type=\"submit\" class=\"btn\">Bekräfta</button>\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        Behöver du hjälp?\n      </div>\n    </div>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _css_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-helper.service */ "./src/app/css-helper.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user, http, cssHelper) {
        this.user = user;
        this.http = http;
        this.cssHelper = cssHelper;
    }
    // Calls the cssHelper service to remove boxshadow for mobiles and tablets on window resize
    DashboardComponent.prototype.onReize = function (event) {
        this.cssHelper.removeBoxShadow();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // Calls the cssHelper service to remove boxshadow if intitial screensize matches mobile or tablet
        this.cssHelper.removeBoxShadow();
    };
    DashboardComponent.prototype.getUser = function (e) {
        e.preventDefault();
        alert('Din aktivitet är registrerad');
        // this.http.getUserId();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "onReize", null);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _css_helper_service__WEBPACK_IMPORTED_MODULE_2__["CssHelperService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer{\r\n    margin-top: 4em;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small w-75 p-3 mx-auto\">\n  <div class=\"footer-copyright text-center py-1 text-secondary\">© 2018 Copyright: Sogeti Sverige AB</div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"art-home\">\n  <div class=\"container\">\n    <div class=\"card  {{shadow}}\">\n      <div class=\"card-header \"><a>Välkommen till Havs och Vattenmyndighetens websida för yrkesfiskare</a></div>\n      <div class=\"card-body p-3 mb-4 bg-white rounded\"> \n        <h2>E-journalen</h2>\n        <p>Du som fiskare behöver vid varje fiske-tillfälle registrera fartygets samtliga aktiviteter under rutten i vår digitala journal.</p>\n        <figure class=\"figur-art\">\n          <img class=\"art-image rounded mx-auto d-block\" src=\"/src/img/pexels-photo-722995.jpeg\" />\n        </figure>\n      </div>\n      \n      <div class=\"card-footer\">\n        Behöver du hjälp?\n      </div>\n    </div>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _css_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-helper.service */ "./src/app/css-helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(cssHelper) {
        this.cssHelper = cssHelper;
    }
    // Calls the cssHelper service to remove boxshadow for mobiles and tablets on window resize
    HomeComponent.prototype.onReize = function (event) {
        this.cssHelper.removeBoxShadow();
    };
    HomeComponent.prototype.ngOnInit = function () {
        // Calls the cssHelper service to remove boxshadow if intitial screensize matches mobile or tablet
        this.cssHelper.removeBoxShadow();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onReize", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_css_helper_service__WEBPACK_IMPORTED_MODULE_1__["CssHelperService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    /*--------------------------------------------------------------------------------
    - This function should be flexible  and make a synchronous request with the base -
    - url and the url extension provided as the first parameter. Return type has to  -
    - be specified in the second parameter "returnType".                             -                                 -
    --------------------------------------------------------------------------------*/
    HttpService.prototype.httpSyncGET = function (urlExt, returnType) {
        var data;
        var baseURL = 'https://jsonplaceholder.typicode.com/';
        var http = new XMLHttpRequest();
        http.open('GET', baseURL + urlExt, false);
        http.send(null);
        try {
            if (http.status === 200) {
                switch (returnType) {
                    case "obj":
                        data = JSON.parse(http.responseText);
                        break;
                    case "text":
                        data = http.responseText;
                        break;
                    default:
                        throw new Error("Unknown type");
                }
            }
            else {
                throw new Error('Request Failed');
            }
        }
        catch (error) {
            console.log('Error message: ' + error);
        }
        return data;
    };
    /* -----------------------------------------------------------------------------------------------
    -  This logic should be replaced as the API is suposed to take care of authentication.           -
    -  We should pass the email adress and password provided in the login form into the http request -
    -  to the API and allow login if the return value is true.                                       -
    ------------------------------------------------------------------------------------------------*/
    HttpService.prototype.userAuth = function (inputEmail, inputPass) {
        var urlExt = 'users';
        var isRegistered = false;
        var data = this.httpSyncGET(urlExt, 'obj');
        for (var dataset in data) {
            if (inputEmail === data[dataset].email && inputPass === 'pass') {
                isRegistered = true;
                break;
            }
        }
        return isRegistered;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login-state.service.ts":
/*!****************************************!*\
  !*** ./src/app/login-state.service.ts ***!
  \****************************************/
/*! exports provided: LoginStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStateService", function() { return LoginStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginStateService = /** @class */ (function () {
    function LoginStateService() {
        this.logStateSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("Logga in");
        this.loginRoutSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('/login');
        this.currentButtonText = this.logStateSource.asObservable();
        this.currentRout = this.loginRoutSource.asObservable();
    }
    LoginStateService.prototype.ChangeLoginButtonText = function (text) {
        this.logStateSource.next(text);
    };
    LoginStateService.prototype.ChangeLoginRout = function (rout) {
        this.loginRoutSource.next(rout);
    };
    LoginStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoginStateService);
    return LoginStateService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sect-login\">\n  <div class=\"container\">\n      <div class=\"card {{shadow}}\">\n        <div class=\"card-header \"><a class=\"headline\">Logga in för att uppdatera din elektroniska journal</a></div>\n          <div class=\"card-body justify-content-center p-3 mb-5 bg-white rounded\">\n              <form (submit)=\"loginUser($event)\" role=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"mailadress\">Ange e-postadress</label>\n                    <input type=\"email\" class=\"form-control p-3\" id=\"mailadress\" aria-describedby=\"emailHelp\" placeholder=\"e-postadress\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"password\">Ange lösenord</label>\n                    <input type=\"password\" class=\"form-control  p-3\" id=\"password\" placeholder=\"********\">\n                  </div>\n                  <div class=\"form-check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                    <label class=\"form-check-label\" for=\"exampleCheck1\">Kom ihåg mig</label>\n                  </div>\n                  <button type=\"submit\" class=\"btn\">Logga in</button>\n                </form>\n          </div>\n        <div class=\"card-footer\">\n          <!-- Klicka <strong>Här</strong> för att återställa ditt lösenord. -->\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login-state.service */ "./src/app/login-state.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _css_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css-helper.service */ "./src/app/css-helper.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, user, loginState, cssHelper, http) {
        this.router = router;
        this.user = user;
        this.loginState = loginState;
        this.cssHelper = cssHelper;
        this.http = http;
    }
    // Calls the cssHelper service to remove boxshadow for mobiles and tablets on window resize
    LoginComponent.prototype.onReize = function (event) {
        this.cssHelper.removeBoxShadow();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Calls the cssHelper service to remove boxshadow if intitial screensize matches mobile or tablet
        this.cssHelper.removeBoxShadow();
        this.loginState.currentButtonText.subscribe(function (loginStateText) { return _this.loginStateText = loginStateText; });
        this.loginState.currentRout.subscribe(function (loginRout) { return _this.loginRout = loginRout; });
    };
    LoginComponent.prototype.loginUser = function (e) {
        e.preventDefault;
        // Valid email adress is Sincere@april.biz. Valid password is pass (password is hardcoded as the API does not provide a suitable password)
        var email = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        // Authorization and re-direct logic
        if (this.http.userAuth(email, password)) {
            this.user.setUserLoggedIn();
            this.loginState.ChangeLoginButtonText('Logout');
            this.loginState.ChangeLoginRout('/logout');
            this.router.navigate(['/dashboard']);
            alert('Inloggningen lyckades');
        }
        else {
            alert('Inlogningen misslyckades, vänligen kontrollera dina inloggningsuppgifter');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginComponent.prototype, "onReize", null);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_login_state_service__WEBPACK_IMPORTED_MODULE_2__["LoginStateService"],
            _css_helper_service__WEBPACK_IMPORTED_MODULE_4__["CssHelperService"],
            _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"art-home\">\n  <div class=\"container\">\n    <div class=\"card {{shadow}}\">\n      <div class=\"card-header \"><a>Du är nu utloggad</a></div>\n      <div class=\"card-body justify-content-center  p-3 mb-5 bg-white rounded\"> \n        <p>Vet du att journalen finns tillgänglig både via webb för desktop, platta samt mobil. Du kan även ladda ned våran mobilapp från App Store eller Google Play.</p> \n        <br />\n        <p>Välkommen åter.</p> \n      </div>\n      <div class=\"card-footer\">\n        Behöver du hjälp?\n      </div>\n    </div>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/login-state.service */ "./src/app/login-state.service.ts");
/* harmony import */ var _css_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-helper.service */ "./src/app/css-helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(loginState, cssHelper) {
        this.loginState = loginState;
        this.cssHelper = cssHelper;
    }
    // Calls the cssHelper service to remove boxshadow for mobiles and tablets on window resize
    LogoutComponent.prototype.onReize = function (event) {
        this.cssHelper.removeBoxShadow();
    };
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Calls the cssHelper service to remove boxshadow if intitial screensize matches mobile or tablet
        this.cssHelper.removeBoxShadow();
        this.loginState.currentButtonText.subscribe(function (loginStateText) { return _this.loginStateText = loginStateText; });
        this.loginState.currentRout.subscribe(function (loginRout) { return _this.loginRout = loginRout; });
        this.loginState.ChangeLoginButtonText('Logga in');
        this.loginState.ChangeLoginRout('/login');
    };
    LogoutComponent.prototype.ngAfterContentInit = function () {
        alert('Du loggas nu ut.');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LogoutComponent.prototype, "onReize", null);
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_login_state_service__WEBPACK_IMPORTED_MODULE_1__["LoginStateService"], _css_helper_service__WEBPACK_IMPORTED_MODULE_2__["CssHelperService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.text-white{\r\n    font-family: var(--ffArealWhite);\r\n    font-size: var(--fsArealWhite);\r\n}\r\n\r\n.nav-wrapper{\r\n    background: var(--bgColorGray);\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.nav-container{\r\n    margin-top: 0px;\r\n}\r\n\r\n.navbar{\r\n    color: var(--fontColorWhite);\r\n    padding:0px;\r\n    margin:0px;\r\n    /* margin-top: 0.5em; */\r\n}\r\n\r\n.navbar-icon{\r\n    background: none;\r\n    border-style: none;\r\n\r\n}\r\n\r\n.nav-link:hover{\r\n    opacity: .5;\r\n    color: #c5e3ed;    \r\n}\r\n\r\n/* Medium Devices, Desktops */\r\n\r\n@media only screen and (min-width : 970px) {\r\n\r\n    .nav-wrapper{\r\n        height: 4em;\r\n        line-height: 3em;\r\n    }\r\n\r\n    .nav-icon-text{\r\n        display: none;\r\n    }    \r\n\r\n    .form-group {\r\n        width: 25%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper\">\n    <div class=\"container nav-container\">\n        <nav class=\"navbar navbar-expand-md\">\n            <button class=\"navbar-icon justify-content-start\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n                <svg width=\"45\" height=\"45\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <g>\n                        <path stroke=\"#ffffff\" fill=\"#ffffff\" stroke-width=\"0.01\" stroke-opacity=\"null\" fill-opacity=\"null\" d=\"m22.50075,7.58411c-0.75562,0 -1.49925,0.04296 -2.23088,0.12334l-0.05397,-0.24945c-0.03148,-0.14413 -0.08996,-0.2744 -0.16792,-0.3922c0.57121,-0.42684 0.93703,-1.07819 0.93703,-1.80992c0,-1.28468 -1.12594,-2.32546 -2.51574,-2.32546s-2.51574,1.04077 -2.51574,2.32546c0,1.03246 0.72713,1.90693 1.73463,2.21043c-0.03148,0.14552 -0.03148,0.29934 0,0.45456l0.04947,0.23144c-7.99399,1.94712 -13.89054,8.67403 -13.89054,16.67592c0,9.52217 8.35231,17.24135 18.65365,17.24135c10.30134,0 18.65215,-7.71918 18.65215,-17.24135c0.0015,-9.52355 -8.35082,-17.24412 -18.65215,-17.24412zm0.32234,4.10904c6.67915,0 12.26835,4.3183 13.67765,10.09868l-0.86357,0.32429c-0.22189,-0.94376 -1.13193,-1.65055 -2.21889,-1.65055c-1.25487,0 -2.27286,0.94099 -2.27286,2.10095c0,0.10394 0.01199,0.2051 0.02699,0.30627l-4.15442,-0.0388c-0.08096,-0.15937 -0.17091,-0.3132 -0.27286,-0.46149l5.09595,-7.08169l0.08246,-0.11503l-7.14542,5.62516c-0.52774,-0.21758 -1.10944,-0.34369 -1.72114,-0.35478l0.12893,-0.02495l-1.76462,-3.58242c0.95952,-0.2453 1.66567,-1.0574 1.66567,-2.02195c0,-1.15995 -1.01649,-2.09956 -2.27286,-2.09956c-0.11244,0 -0.22039,0.0097 -0.32834,0.02495l0.08696,-0.87863c0.73313,-0.11364 1.48426,-0.17046 2.25037,-0.17046zm-6.33133,-6.43727c0,-1.00751 0.88606,-1.82655 1.97601,-1.82655c1.08995,0 1.97601,0.81904 1.97601,1.82655c0,0.58898 -0.30435,1.11145 -0.77361,1.44544c-0.27436,-0.17046 -0.61919,-0.24391 -0.97001,-0.18016c-0.33883,0.06236 -0.61919,0.24114 -0.8021,0.48366c-0.81259,-0.22728 -1.4063,-0.92575 -1.4063,-1.74894zm-7.68964,19.39773c0,-6.15733 4.64467,-11.31268 10.87255,-12.6334l0.44528,0.79409c-0.91454,0.27163 -1.57571,1.06433 -1.57571,1.99839c0,1.15996 1.01649,2.10095 2.27136,2.10095c0.10195,0 0.2024,-0.00831 0.29985,-0.02079l-0.08696,3.94274l0.07796,-0.01524c-0.66267,0.28271 -1.23538,0.71094 -1.67316,1.24033l0.13943,-0.20372l-2.35982,-0.83567l1.75712,1.71707l0.03898,-0.05821c-0.28486,0.51415 -0.45877,1.09205 -0.48576,1.70321l-0.0045,-0.02217l-3.93253,1.67549c-0.29835,-0.83705 -1.14993,-1.44267 -2.15592,-1.44267c-1.25487,0 -2.27286,0.93961 -2.27286,2.10095c0,0.08869 0.0075,0.17739 0.01949,0.2647l-1.17391,-0.10532c-0.13193,-0.7151 -0.2009,-1.4496 -0.2009,-2.20073zm14.02097,12.96184c-6.64017,0 -12.20088,-4.26564 -13.65216,-9.99336l1.03598,-0.4892c0.21889,0.95069 1.12893,1.66302 2.22189,1.66302c1.25487,0 2.27136,-0.94099 2.27136,-2.10095c0,-0.14551 -0.01649,-0.28687 -0.04648,-0.42546l4.28485,0.04158c0.06747,0.13166 0.14393,0.25915 0.22489,0.38249l-5.17241,7.31312l0.34033,-0.27024l6.7901,-5.43253c0.50375,0.21204 1.05697,0.34369 1.64018,0.36864l-0.02848,0.00554l1.83808,3.64063c-0.98201,0.23005 -1.71214,1.05324 -1.71214,2.03443c0,1.15995 1.01649,2.09956 2.27286,2.09956c0.11394,0 0.22639,-0.0097 0.33733,-0.02495l0.006,0.95346c-0.85757,0.15244 -1.74363,0.23421 -2.65217,0.23421l0,0zm3.43778,-0.39358l-0.58321,-0.83151c0.991,-0.22728 1.72713,-1.05186 1.72713,-2.0372c0,-1.15996 -1.01949,-2.10095 -2.27286,-2.10095c-0.09895,0 -0.1949,0.00693 -0.28935,0.0194l0,-3.96353l-0.03748,0.00554c0.61319,-0.25638 1.15442,-0.6361 1.58171,-1.10591l2.27286,0.91328l-1.65517,-1.80715c0.23688,-0.46426 0.38381,-0.97564 0.41679,-1.5175l3.82608,-1.61313c0.28486,0.85646 1.14842,1.48009 2.16941,1.48009c1.25637,0 2.27286,-0.94099 2.27286,-2.10095c0,-0.09562 -0.00899,-0.18986 -0.02399,-0.28271l0.97451,0.1663c0.13343,0.71648 0.2039,1.45376 0.2039,2.20489c0.0015,6.06447 -4.50075,11.1547 -10.5832,12.57103z\" id=\"svg_18\"/>\n                    </g>\n                </svg>\n            <small class=\"text-white nav-icon-text\">Meny</small>\n        </button>\n            <div class=\"navbar-collapse collapse justify-content-end\" id=\"collapsingNavbar\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link text-white\" routerLink=\"/home\">Hem</a> \n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link text-white\" id=\"login\" routerLink=\"{{loginRout}}\">{{loginStateText}}</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n</div> \n      \n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/login-state.service */ "./src/app/login-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(loginState) {
        this.loginState = loginState;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginState.currentButtonText.subscribe(function (loginStateText) { return _this.loginStateText = loginStateText; });
        this.loginState.currentRout.subscribe(function (loginRout) { return _this.loginRout = loginRout; });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_login_state_service__WEBPACK_IMPORTED_MODULE_1__["LoginStateService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kanderss\Documents\e-log\e-log-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map