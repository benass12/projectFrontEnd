webpackJsonp([2,4],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_loan_service__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminLoanComponent = (function () {
    function AdminLoanComponent(adminLoanService) {
        this.adminLoanService = adminLoanService;
        this.loans = [{
                "value": 150000,
                "name": 'Vilius Zukauskas',
                "status": 'Confirmed',
                "date": '2017-02-25'
            },
            {
                "value": 50000,
                "name": 'Mykolas kazkoks',
                "status": 'Rejected',
                "date": '2015-02-25'
            },
            {
                "value": 1000,
                "name": 'Vardenis pavardenis',
                "status": 'Patvirtinta',
                "date": '2016-01-27'
            }];
        this.cols = [
            { field: 'value', header: 'Amount', sortable: true },
            { field: 'name', header: 'Name' },
            { field: 'status', header: 'Status' },
            { field: 'date', header: 'Date' }
        ];
        this.rows = [{
                "amount": 150000,
                "name": 'Vilius Zukauskas',
                "status": 'Confirmed',
                "date": '2017-02-25'
            },
            {
                "amount": 50000,
                "name": 'Mykolas kazkoks',
                "status": 'Rejected',
                "date": '2015-02-25'
            },
            {
                "amount": 1000,
                "name": 'Vardenis pavardenis',
                "status": 'Patvirtinta',
                "date": '2016-01-27'
            }];
        this.length = 0;
        this.config = {
            paging: true,
            className: ['table-striped', 'table-bordered']
        };
        this.length = this.rows.length;
    }
    AdminLoanComponent.prototype.ngOnInit = function () {
        this.getLoans();
    };
    AdminLoanComponent.prototype.getLoans = function () {
        var _this = this;
        this.adminLoanService.getLoans()
            .then(function (loans) {
            _this.loans = loans;
        })
            .catch(function (error) {
            _this.error = error;
            console.log('error getting loans from server');
        });
    };
    ;
    AdminLoanComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-loan',
            template: __webpack_require__(603),
            styles: [__webpack_require__(598)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__admin_loan_service__["a" /* AdminLoanService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__admin_loan_service__["a" /* AdminLoanService */]) === 'function' && _a) || Object])
    ], AdminLoanComponent);
    return AdminLoanComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/admin-loan.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoanService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLoanService = (function () {
    function AdminLoanService(http) {
        this.http = http;
    }
    AdminLoanService.prototype.getLoans = function () {
        return this.http.get("https://frozen-hamlet-97469.herokuapp.com/loans")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AdminLoanService.prototype.handleError = function (error) {
        console.error('Klaida', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AdminLoanService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AdminLoanService);
    return AdminLoanService;
    var _a;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/admin-loan.service.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(605),
            styles: [__webpack_require__(600)]
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/calculator.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(606),
            styles: [__webpack_require__(601)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/form.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(607),
            styles: [__webpack_require__(602)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/login.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 355;


/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(474);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/main.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "hello";
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(604),
            styles: [__webpack_require__(599)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/app.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_loan_admin_loan_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_loan_admin_loan_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calculator_calculator_component__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__admin_loan_admin_loan_component__["a" /* AdminLoanComponent */],
                __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__calculator_calculator_component__["a" /* CalculatorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["SharedModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__admin_loan_admin_loan_service__["a" /* AdminLoanService */]],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/app.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_loan_admin_loan_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_form_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calculator_calculator_component__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_loan_admin_loan_component__["a" /* AdminLoanComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_loan_admin_loan_component__["a" /* AdminLoanComponent */]
    },
    {
        path: 'form',
        component: __WEBPACK_IMPORTED_MODULE_3__form_form_component__["a" /* FormComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'calculator',
        component: __WEBPACK_IMPORTED_MODULE_5__calculator_calculator_component__["a" /* CalculatorComponent */]
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/routing.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/mores/Desktop/NewFrontEnd/src/environment.js.map

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "\r\n.custom-checkbox\r\n{\r\n  margin-left: 10px;\r\n}\r\n\r\n.head-button\r\n{\r\n  width: 80px;\r\n  height: 30px;\r\n}\r\n\r\n.swedfont\r\n{\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: darkorange;\r\n  padding-bottom: 10px;\r\n}\r\n.swedbackground\r\n{\r\n  background-color: darkorange;\r\n}\r\n\r\n.basicfont\r\n{\r\n  font-size: 18px;\r\n}\r\n.button\r\n{\r\n  margin-top: 25px;\r\n  width: 120px;\r\n  height: 40px;\r\n  font-size: 14px;\r\n  margin-right: 18px;\r\n}\r\n.buttonmid\r\n{\r\n}\r\n.buttonleft\r\n{\r\n  margin-left: 35%;\r\n\r\n}\r\n.buttonright\r\n{\r\n\r\n}\r\n"

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = ".plotis{\r\n\r\n  padding-left: 1000px;\r\n}\r\n.col-4{\r\n  padding-left: 100px;\r\n  margin-right: 80%;\r\n}\r\n.your-class input{\r\n  float:left;\r\n}\r\nbody {\r\n  background-color: #eee;\r\n}\r\n\r\n*[role=\"form\"] {\r\n  max-width: 530px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  border-radius: 0.3em;\r\n}\r\n\r\n*[role=\"form\"] h2 {\r\n  margin-left: 5em;\r\n  margin-bottom: 1em;\r\n}\r\n.form-group.required .control-label:after {\r\n  content:\"*\";\r\n  color:red;\r\n}\r\n.bold{\r\n  font-weight: bold;\r\n}\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  margin: 0;\r\n}\r\n.button2 {\r\n  background-color: Darkorange;\r\n}\r\n.forFieldsToChooseBCOLOR{\r\n  background-color: PaleGoldenRod  ;\r\n}\r\n.button-marging-right{\r\n  margin-left:38%;\r\n}\r\n.logo-marging-right{\r\n  margin-left:45%;\r\n}\r\n.logo{\r\n  -o-border-image: url('../assets/image/fb_share_img.png');\r\n     border-image: url('../assets/image/fb_share_img.png');\r\n}\r\n.button-size{\r\n  height:50px;\r\n  width:100px;\r\n}\r\n"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n  background: #eee !important;\r\n}\r\n\r\n.wrapper {\r\n  margin-top: 80px;\r\n  margin-bottom: 80px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 380px;\r\n  padding: 15px 35px 45px;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n.form-signin-heading,\r\n.checkbox {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.checkbox {\r\n  font-weight: normal;\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n@include box-sizing(border-box);\r\n\r\n\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  margin-bottom: 20px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"swedfont\"> Loans</h1>\r\n\r\n\r\n\r\n<p-dataTable [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"5\" selectionMode=\"single\" exportFilename=\"loans\"\r\n             [rowsPerPageOptions]=\"[5,10,20]\" [value]=\"loans\" [globalFilter]=\"gb\" #dt>\r\n\r\n\r\n  <p-header>\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n      <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      <button pButton label=\"CSV\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\r\n    </div>\r\n\r\n  </p-header>\r\n\r\n\r\n\r\n  <p-column field=\"value\" header=\"Amount\" sortable=\"true\"></p-column>\r\n  <p-column field=\"name\" header=\"Name\" sortable=\"true\"></p-column>\r\n  <p-column field=\"status\" header=\"Status\" sortable=\"true\"></p-column>\r\n  <p-column field=\"date\" header=\"Date\" sortable=\"true\"></p-column>\r\n\r\n</p-dataTable>\r\n\r\n\r\n<button type=\"button\" class=\"btn btn-primary buttonleft button\">\r\n  Patvirtinti\r\n</button>\r\n<button type=\"button\" class=\"btn btn-primary button buttonmid\">\r\n  Reject\r\n</button>\r\n<button type=\"button\" class=\"btn btn-primary buttonright button\">\r\n  Delete\r\n</button>\r\n\r\n\r\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n  <div><li><a routerLink=\"/admin\">To admin page</a></li></div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<p>\n  calculator works!\n</p>\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<br>\r\n<img src=\"/assets/image/fb_share_img.png\" alt=\"Swed-logo\" style=\"width:205px;height:200px;\" class=\"logo-marging-right\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h2>Registration form</h2>\r\n    <hr>\r\n  </div>\r\n  <br>\r\n  <br>\r\n\r\n  <form class=\"form-horizontal\">\r\n    <fieldset>\r\n      <!--  Kiek saibu nori-->\r\n\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"Loan amount\"  >Loan amount</label>\r\n        <div class=\"col-md-6\" >\r\n          <input  name=\"number\" type=\"number\" min=\"100\" max=\"1000\"  class=\"form-control input-md\" required=\"\">\r\n          <span class=\"help-block\">EUR</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"Loan term\" required=\"true\">Loan termn</label>\r\n        <div class=\"col-md-2\" >\r\n          <select id=\"Years\" name=\"Years\" class=\"form-control forFieldsToChooseBCOLOR\" required=\"true\">\r\n            <option value=\"0\">Years</option>\r\n            <option value=\"1\">1</option>\r\n            <option value=\"2\">2</option>\r\n            <option value=\"3\">3</option>\r\n            <option value=\"4\">4</option>\r\n            <option value=\"5\">5</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <select id=\"Month\" name=\"Month\" class=\"form-control forFieldsToChooseBCOLOR\" required=\"true\">\r\n            <option value=\"0\">Month</option>\r\n            <option value=\"1\">January</option>\r\n            <option value=\"2\">February</option>\r\n            <option value=\"3\">March</option>\r\n            <option value=\"4\">April</option>\r\n            <option value=\"5\">May</option>\r\n            <option value=\"6\">June</option>\r\n            <option value=\"7\">July</option>\r\n            <option value=\"8\">August</option>\r\n            <option value=\"9\">September</option>\r\n            <option value=\"10\">October</option>\r\n            <option value=\"11\">November</option>\r\n            <option value=\"12\">December</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\"  for=\"Loan termn\" required=\"true\">Loan and interest repayment day</label>\r\n        <div class=\"col-md-2\">\r\n          <select id=\"Day\" name=\"Day\" class=\"form-control forFieldsToChooseBCOLOR\" required=\"true\">\r\n            <option value=\"0\">Day</option>\r\n            <option value=\"1\">1</option>\r\n            <option value=\"2\">2</option>\r\n            <option value=\"3\">3</option>\r\n            <option value=\"4\">4</option>\r\n            <option value=\"5\">5</option>\r\n            <option value=\"6\">6</option>\r\n            <option value=\"7\">7</option>\r\n            <option value=\"8\">8</option>\r\n            <option value=\"9\">9</option>\r\n            <option value=\"10\">10</option>\r\n            <option value=\"11\">11</option>\r\n            <option value=\"12\">12</option>\r\n            <option value=\"13\">13</option>\r\n            <option value=\"14\">14</option>\r\n            <option value=\"15\">15</option>\r\n            <option value=\"16\">16</option>\r\n            <option value=\"17\">17</option>\r\n            <option value=\"18\">17</option>\r\n            <option value=\"19\">19</option>\r\n            <option value=\"20\">20</option>\r\n            <option value=\"21\">21</option>\r\n            <option value=\"22\">22</option>\r\n            <option value=\"23\">23</option>\r\n            <option value=\"24\">24</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"26\">26</option>\r\n            <option value=\"27\">27</option>\r\n            <option value=\"28\">28</option>\r\n            <option value=\"29\">29</option>\r\n            <option value=\"30\">30</option>\r\n            <option value=\"31\">31</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Vardas-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"name\" required=\"true\">Name</label>\r\n        <div class=\"col-md-6\">\r\n          <input id=\"name\" name=\"name\"  class=\"form-control input-md\" required=\"\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <!-- Pavarde-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"surname\" required=\"true\">Surname</label>\r\n        <div class=\"col-md-6\">\r\n          <input id=\"surname\" name=\"surname\"  class=\"form-control input-md\" required=\"\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <!-- Asmns kodas-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"code\" required=\"true\">Personal code</label>\r\n        <div class=\"col-md-6\">\r\n          <input id=\"code\" name=\"code\" type=\"number\" maxlength=\"11\"  class=\"form-control input-md\" required=\"\">\r\n        </div>\r\n      </div>      <!-- Asmens dokumento tipas-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"code\" required=\"true\">Document type</label>\r\n        <div class=\"col-md-6\">\r\n          <select id=\"document\" name=\"document\"  required=\"true\"  class=\"form-control input-md forFieldsToChooseBCOLOR\">\r\n            <option value=\"0\">Document type</option>\r\n            <option value=\"1\">Passport</option>\r\n            <option value=\"2\">Identity card</option>    </select>\r\n        </div>\r\n      </div>        <!-- Dokumento numeris-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"tempatlahir\" required=\"true\">Document No.</label>\r\n        <div class=\"col-md-6\">\r\n          <input  class=\"form-control input-md\" required=\"\" type=\"number\">\r\n        </div>\r\n      </div>\r\n\r\n      <h4 class=\"bold\">Contact information</h4>\r\n      <hr>\r\n      <br>\r\n\r\n      <!--Salis-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"code\" required=\"true\">Country</label>\r\n        <div class=\"col-md-6\">\r\n          <select id=\"country\" name=\"country\"  required=\"true\"  class=\"form-control input-md forFieldsToChooseBCOLOR\">\r\n            <option value=\"0\">Country</option>\r\n            <option value=\"1\">Lithuania</option>\r\n            <option value=\"2\">Latvia</option>\r\n            <option value=\"3\">Estonia</option>\r\n            <option value=\"4\">Sweden</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Regionas-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"code\" required=\"true\">City or district</label>\r\n        <div class=\"col-md-6\">\r\n          <select id=\"City or district\" name=\"City or district\"  required=\"true\"  class=\"form-control input-md forFieldsToChooseBCOLOR\">\r\n            <option value=\"0\">City or district</option>\r\n            <option value=\"1\">Vilnius</option>\r\n            <option value=\"2\">Ryga</option>\r\n            <option value=\"3\">Talin</option>\r\n            <option value=\"4\">Stockholm</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Adresas-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"surname\" required=\"true\">Adddress</label>\r\n        <div class=\"col-md-6\">\r\n          <input id=\"address\" name=\"address\"  class=\"form-control input-md\" required=\"\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <!--Telefonas 1-->\r\n      <!-- country codes (ISO 3166) and Dial codes. -->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"code\" required=\"true\">Telephone 1</label>\r\n        <div class=\"col-md-2\">\r\n          <select name=\"countryCode\" id=\"370\" required=\"true\"  class=\"form-control input-md forFieldsToChooseBCOLOR\">\r\n            <option data-countryCode=\"LT\" value=\"370\" selected>Lithuania (+370)</option>\r\n            <optgroup label=\"Other countries\">\r\n              <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option>\r\n              <option data-countryCode=\"US\" value=\"1\">USA (+1)</option>\r\n              <option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</option>\r\n              <option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</option>\r\n              <option data-countryCode=\"AO\" value=\"244\">Angola (+244)</option>\r\n              <option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</option>\r\n              <option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</option>\r\n              <option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</option>\r\n              <option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</option>\r\n              <option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</option>\r\n              <option data-countryCode=\"AU\" value=\"61\">Australia (+61)</option>\r\n              <option data-countryCode=\"AT\" value=\"43\">Austria (+43)</option>\r\n              <option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</option>\r\n              <option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</option>\r\n              <option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</option>\r\n              <option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</option>\r\n              <option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</option>\r\n              <option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</option>\r\n              <option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</option>\r\n              <option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</option>\r\n              <option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</option>\r\n              <option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</option>\r\n              <option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</option>\r\n              <option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</option>\r\n              <option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</option>\r\n              <option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</option>\r\n              <option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</option>\r\n              <option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</option>\r\n              <option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</option>\r\n              <option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</option>\r\n              <option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</option>\r\n              <option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</option>\r\n              <option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</option>\r\n              <option data-countryCode=\"CA\" value=\"1\">Canada (+1)</option>\r\n              <option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</option>\r\n              <option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</option>\r\n              <option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</option>\r\n              <option data-countryCode=\"CL\" value=\"56\">Chile (+56)</option>\r\n              <option data-countryCode=\"CN\" value=\"86\">China (+86)</option>\r\n              <option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</option>\r\n              <option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</option>\r\n              <option data-countryCode=\"CG\" value=\"242\">Congo (+242)</option>\r\n              <option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</option>\r\n              <option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</option>\r\n              <option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</option>\r\n              <option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</option>\r\n              <option data-countryCode=\"CY\" value=\"90392\">Cyprus North (+90392)</option>\r\n              <option data-countryCode=\"CY\" value=\"357\">Cyprus South (+357)</option>\r\n              <option data-countryCode=\"CZ\" value=\"42\">Czech Republic (+42)</option>\r\n              <option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</option>\r\n              <option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</option>\r\n              <option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</option>\r\n              <option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</option>\r\n              <option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</option>\r\n              <option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</option>\r\n              <option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</option>\r\n              <option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</option>\r\n              <option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</option>\r\n              <option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</option>\r\n              <option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</option>\r\n              <option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</option>\r\n              <option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</option>\r\n              <option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</option>\r\n              <option data-countryCode=\"FI\" value=\"358\">Finland (+358)</option>\r\n              <option data-countryCode=\"FR\" value=\"33\">France (+33)</option>\r\n              <option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</option>\r\n              <option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</option>\r\n              <option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</option>\r\n              <option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</option>\r\n              <option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</option>\r\n              <option data-countryCode=\"DE\" value=\"49\">Germany (+49)</option>\r\n              <option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</option>\r\n              <option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</option>\r\n              <option data-countryCode=\"GR\" value=\"30\">Greece (+30)</option>\r\n              <option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</option>\r\n              <option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</option>\r\n              <option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</option>\r\n              <option data-countryCode=\"GU\" value=\"671\">Guam (+671)</option>\r\n              <option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</option>\r\n              <option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</option>\r\n              <option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</option>\r\n              <option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</option>\r\n              <option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</option>\r\n              <option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</option>\r\n              <option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</option>\r\n              <option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</option>\r\n              <option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</option>\r\n              <option data-countryCode=\"IN\" value=\"91\">India (+91)</option>\r\n              <option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</option>\r\n              <option data-countryCode=\"IR\" value=\"98\">Iran (+98)</option>\r\n              <option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</option>\r\n              <option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</option>\r\n              <option data-countryCode=\"IL\" value=\"972\">Israel (+972)</option>\r\n              <option data-countryCode=\"IT\" value=\"39\">Italy (+39)</option>\r\n              <option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</option>\r\n              <option data-countryCode=\"JP\" value=\"81\">Japan (+81)</option>\r\n              <option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</option>\r\n              <option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</option>\r\n              <option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</option>\r\n              <option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</option>\r\n              <option data-countryCode=\"KP\" value=\"850\">Korea North (+850)</option>\r\n              <option data-countryCode=\"KR\" value=\"82\">Korea South (+82)</option>\r\n              <option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</option>\r\n              <option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</option>\r\n              <option data-countryCode=\"LA\" value=\"856\">Laos (+856)</option>\r\n              <option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</option>\r\n              <option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</option>\r\n              <option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</option>\r\n              <option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</option>\r\n              <option data-countryCode=\"LY\" value=\"218\">Libya (+218)</option>\r\n              <option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</option>\r\n              <option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</option>\r\n              <option data-countryCode=\"MO\" value=\"853\">Macao (+853)</option>\r\n              <option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</option>\r\n              <option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</option>\r\n              <option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</option>\r\n              <option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</option>\r\n              <option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</option>\r\n              <option data-countryCode=\"ML\" value=\"223\">Mali (+223)</option>\r\n              <option data-countryCode=\"MT\" value=\"356\">Malta (+356)</option>\r\n              <option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</option>\r\n              <option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</option>\r\n              <option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</option>\r\n              <option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</option>\r\n              <option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</option>\r\n              <option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</option>\r\n              <option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</option>\r\n              <option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</option>\r\n              <option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</option>\r\n              <option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</option>\r\n              <option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</option>\r\n              <option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</option>\r\n              <option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</option>\r\n              <option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</option>\r\n              <option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</option>\r\n              <option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</option>\r\n              <option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</option>\r\n              <option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</option>\r\n              <option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</option>\r\n              <option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</option>\r\n              <option data-countryCode=\"NE\" value=\"227\">Niger (+227)</option>\r\n              <option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</option>\r\n              <option data-countryCode=\"NU\" value=\"683\">Niue (+683)</option>\r\n              <option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</option>\r\n              <option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</option>\r\n              <option data-countryCode=\"NO\" value=\"47\">Norway (+47)</option>\r\n              <option data-countryCode=\"OM\" value=\"968\">Oman (+968)</option>\r\n              <option data-countryCode=\"PW\" value=\"680\">Palau (+680)</option>\r\n              <option data-countryCode=\"PA\" value=\"507\">Panama (+507)</option>\r\n              <option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</option>\r\n              <option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</option>\r\n              <option data-countryCode=\"PE\" value=\"51\">Peru (+51)</option>\r\n              <option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</option>\r\n              <option data-countryCode=\"PL\" value=\"48\">Poland (+48)</option>\r\n              <option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</option>\r\n              <option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</option>\r\n              <option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</option>\r\n              <option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</option>\r\n              <option data-countryCode=\"RO\" value=\"40\">Romania (+40)</option>\r\n              <option data-countryCode=\"RU\" value=\"7\">Russia (+7)</option>\r\n              <option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</option>\r\n              <option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</option>\r\n              <option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</option>\r\n              <option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</option>\r\n              <option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</option>\r\n              <option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</option>\r\n              <option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</option>\r\n              <option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</option>\r\n              <option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</option>\r\n              <option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</option>\r\n              <option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</option>\r\n              <option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</option>\r\n              <option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</option>\r\n              <option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</option>\r\n              <option data-countryCode=\"ES\" value=\"34\">Spain (+34)</option>\r\n              <option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</option>\r\n              <option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</option>\r\n              <option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</option>\r\n              <option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</option>\r\n              <option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</option>\r\n              <option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</option>\r\n              <option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</option>\r\n              <option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</option>\r\n              <option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</option>\r\n              <option data-countryCode=\"SI\" value=\"963\">Syria (+963)</option>\r\n              <option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</option>\r\n              <option data-countryCode=\"TJ\" value=\"7\">Tajikstan (+7)</option>\r\n              <option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</option>\r\n              <option data-countryCode=\"TG\" value=\"228\">Togo (+228)</option>\r\n              <option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</option>\r\n              <option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</option>\r\n              <option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</option>\r\n              <option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</option>\r\n              <option data-countryCode=\"TM\" value=\"7\">Turkmenistan (+7)</option>\r\n              <option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</option>\r\n              <option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)</option>\r\n              <option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</option>\r\n              <option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</option>\r\n              <!-- <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option> -->\r\n              <option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</option>\r\n              <option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</option>\r\n              <option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</option>\r\n              <!-- <option data-countryCode=\"US\" value=\"1\">USA (+1)</option> -->\r\n              <option data-countryCode=\"UZ\" value=\"7\">Uzbekistan (+7)</option>\r\n              <option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</option>\r\n              <option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</option>\r\n              <option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</option>\r\n              <option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</option>\r\n              <option data-countryCode=\"VG\" value=\"84\">Virgin Islands - British (+1284)</option>\r\n              <option data-countryCode=\"VI\" value=\"84\">Virgin Islands - US (+1340)</option>\r\n              <option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</option>\r\n              <option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</option>\r\n              <option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</option>\r\n              <option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</option>\r\n              <option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</option>\r\n            </optgroup>\r\n          </select>\r\n        </div>\r\n        <!--Numeris-->\r\n        <div class=\"col-md-2\">\r\n          <input id=\"telephone1\" name=\"telephone1\" class=\"col-4\"  class=\"form-control input-md\" required=\"\" type=\"number\">\r\n        </div>\r\n      </div>\r\n\r\n      <!--Telefonas 2-->\r\n      <!-- country codes (ISO 3166) and Dial codes. -->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"code\" required=\"true\">Telephone 2</label>\r\n        <div class=\"col-md-2\">\r\n          <select name=\"countryCode\" id=\"+370\" required=\"true\"  class=\"form-control input-md forFieldsToChooseBCOLOR\">\r\n            <option data-countryCode=\"LT\" value=\"370\" selected>Lithuania (+370)</option>\r\n            <optgroup label=\"Other countries\">\r\n              <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option>\r\n              <option data-countryCode=\"US\" value=\"1\">USA (+1)</option>\r\n              <option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</option>\r\n              <option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</option>\r\n              <option data-countryCode=\"AO\" value=\"244\">Angola (+244)</option>\r\n              <option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</option>\r\n              <option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</option>\r\n              <option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</option>\r\n              <option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</option>\r\n              <option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</option>\r\n              <option data-countryCode=\"AU\" value=\"61\">Australia (+61)</option>\r\n              <option data-countryCode=\"AT\" value=\"43\">Austria (+43)</option>\r\n              <option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</option>\r\n              <option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</option>\r\n              <option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</option>\r\n              <option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</option>\r\n              <option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</option>\r\n              <option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</option>\r\n              <option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</option>\r\n              <option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</option>\r\n              <option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</option>\r\n              <option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</option>\r\n              <option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</option>\r\n              <option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</option>\r\n              <option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</option>\r\n              <option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</option>\r\n              <option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</option>\r\n              <option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</option>\r\n              <option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</option>\r\n              <option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</option>\r\n              <option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</option>\r\n              <option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</option>\r\n              <option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</option>\r\n              <option data-countryCode=\"CA\" value=\"1\">Canada (+1)</option>\r\n              <option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</option>\r\n              <option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</option>\r\n              <option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</option>\r\n              <option data-countryCode=\"CL\" value=\"56\">Chile (+56)</option>\r\n              <option data-countryCode=\"CN\" value=\"86\">China (+86)</option>\r\n              <option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</option>\r\n              <option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</option>\r\n              <option data-countryCode=\"CG\" value=\"242\">Congo (+242)</option>\r\n              <option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</option>\r\n              <option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</option>\r\n              <option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</option>\r\n              <option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</option>\r\n              <option data-countryCode=\"CY\" value=\"90392\">Cyprus North (+90392)</option>\r\n              <option data-countryCode=\"CY\" value=\"357\">Cyprus South (+357)</option>\r\n              <option data-countryCode=\"CZ\" value=\"42\">Czech Republic (+42)</option>\r\n              <option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</option>\r\n              <option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</option>\r\n              <option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</option>\r\n              <option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</option>\r\n              <option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</option>\r\n              <option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</option>\r\n              <option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</option>\r\n              <option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</option>\r\n              <option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</option>\r\n              <option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</option>\r\n              <option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</option>\r\n              <option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</option>\r\n              <option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</option>\r\n              <option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</option>\r\n              <option data-countryCode=\"FI\" value=\"358\">Finland (+358)</option>\r\n              <option data-countryCode=\"FR\" value=\"33\">France (+33)</option>\r\n              <option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</option>\r\n              <option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</option>\r\n              <option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</option>\r\n              <option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</option>\r\n              <option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</option>\r\n              <option data-countryCode=\"DE\" value=\"49\">Germany (+49)</option>\r\n              <option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</option>\r\n              <option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</option>\r\n              <option data-countryCode=\"GR\" value=\"30\">Greece (+30)</option>\r\n              <option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</option>\r\n              <option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</option>\r\n              <option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</option>\r\n              <option data-countryCode=\"GU\" value=\"671\">Guam (+671)</option>\r\n              <option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</option>\r\n              <option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</option>\r\n              <option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</option>\r\n              <option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</option>\r\n              <option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</option>\r\n              <option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</option>\r\n              <option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</option>\r\n              <option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</option>\r\n              <option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</option>\r\n              <option data-countryCode=\"IN\" value=\"91\">India (+91)</option>\r\n              <option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</option>\r\n              <option data-countryCode=\"IR\" value=\"98\">Iran (+98)</option>\r\n              <option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</option>\r\n              <option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</option>\r\n              <option data-countryCode=\"IL\" value=\"972\">Israel (+972)</option>\r\n              <option data-countryCode=\"IT\" value=\"39\">Italy (+39)</option>\r\n              <option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</option>\r\n              <option data-countryCode=\"JP\" value=\"81\">Japan (+81)</option>\r\n              <option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</option>\r\n              <option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</option>\r\n              <option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</option>\r\n              <option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</option>\r\n              <option data-countryCode=\"KP\" value=\"850\">Korea North (+850)</option>\r\n              <option data-countryCode=\"KR\" value=\"82\">Korea South (+82)</option>\r\n              <option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</option>\r\n              <option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</option>\r\n              <option data-countryCode=\"LA\" value=\"856\">Laos (+856)</option>\r\n              <option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</option>\r\n              <option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</option>\r\n              <option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</option>\r\n              <option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</option>\r\n              <option data-countryCode=\"LY\" value=\"218\">Libya (+218)</option>\r\n              <option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</option>\r\n              <option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</option>\r\n              <option data-countryCode=\"MO\" value=\"853\">Macao (+853)</option>\r\n              <option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</option>\r\n              <option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</option>\r\n              <option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</option>\r\n              <option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</option>\r\n              <option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</option>\r\n              <option data-countryCode=\"ML\" value=\"223\">Mali (+223)</option>\r\n              <option data-countryCode=\"MT\" value=\"356\">Malta (+356)</option>\r\n              <option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</option>\r\n              <option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</option>\r\n              <option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</option>\r\n              <option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</option>\r\n              <option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</option>\r\n              <option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</option>\r\n              <option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</option>\r\n              <option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</option>\r\n              <option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</option>\r\n              <option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</option>\r\n              <option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</option>\r\n              <option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</option>\r\n              <option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</option>\r\n              <option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</option>\r\n              <option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</option>\r\n              <option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</option>\r\n              <option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</option>\r\n              <option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</option>\r\n              <option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</option>\r\n              <option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</option>\r\n              <option data-countryCode=\"NE\" value=\"227\">Niger (+227)</option>\r\n              <option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</option>\r\n              <option data-countryCode=\"NU\" value=\"683\">Niue (+683)</option>\r\n              <option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</option>\r\n              <option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</option>\r\n              <option data-countryCode=\"NO\" value=\"47\">Norway (+47)</option>\r\n              <option data-countryCode=\"OM\" value=\"968\">Oman (+968)</option>\r\n              <option data-countryCode=\"PW\" value=\"680\">Palau (+680)</option>\r\n              <option data-countryCode=\"PA\" value=\"507\">Panama (+507)</option>\r\n              <option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</option>\r\n              <option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</option>\r\n              <option data-countryCode=\"PE\" value=\"51\">Peru (+51)</option>\r\n              <option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</option>\r\n              <option data-countryCode=\"PL\" value=\"48\">Poland (+48)</option>\r\n              <option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</option>\r\n              <option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</option>\r\n              <option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</option>\r\n              <option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</option>\r\n              <option data-countryCode=\"RO\" value=\"40\">Romania (+40)</option>\r\n              <option data-countryCode=\"RU\" value=\"7\">Russia (+7)</option>\r\n              <option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</option>\r\n              <option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</option>\r\n              <option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</option>\r\n              <option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</option>\r\n              <option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</option>\r\n              <option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</option>\r\n              <option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</option>\r\n              <option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</option>\r\n              <option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</option>\r\n              <option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</option>\r\n              <option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</option>\r\n              <option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</option>\r\n              <option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</option>\r\n              <option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</option>\r\n              <option data-countryCode=\"ES\" value=\"34\">Spain (+34)</option>\r\n              <option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</option>\r\n              <option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</option>\r\n              <option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</option>\r\n              <option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</option>\r\n              <option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</option>\r\n              <option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</option>\r\n              <option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</option>\r\n              <option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</option>\r\n              <option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</option>\r\n              <option data-countryCode=\"SI\" value=\"963\">Syria (+963)</option>\r\n              <option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</option>\r\n              <option data-countryCode=\"TJ\" value=\"7\">Tajikstan (+7)</option>\r\n              <option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</option>\r\n              <option data-countryCode=\"TG\" value=\"228\">Togo (+228)</option>\r\n              <option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</option>\r\n              <option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</option>\r\n              <option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</option>\r\n              <option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</option>\r\n              <option data-countryCode=\"TM\" value=\"7\">Turkmenistan (+7)</option>\r\n              <option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</option>\r\n              <option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)</option>\r\n              <option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</option>\r\n              <option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</option>\r\n              <!-- <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option> -->\r\n              <option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</option>\r\n              <option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</option>\r\n              <option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</option>\r\n              <!-- <option data-countryCode=\"US\" value=\"1\">USA (+1)</option> -->\r\n              <option data-countryCode=\"UZ\" value=\"7\">Uzbekistan (+7)</option>\r\n              <option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</option>\r\n              <option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</option>\r\n              <option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</option>\r\n              <option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</option>\r\n              <option data-countryCode=\"VG\" value=\"84\">Virgin Islands - British (+1284)</option>\r\n              <option data-countryCode=\"VI\" value=\"84\">Virgin Islands - US (+1340)</option>\r\n              <option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</option>\r\n              <option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</option>\r\n              <option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</option>\r\n              <option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</option>\r\n              <option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</option>\r\n            </optgroup>\r\n          </select>\r\n        </div>\r\n        <!--Numeris2-->\r\n        <div class=\"col-md-2\">\r\n          <input id=\"telephone2\" name=\"telephone2\" class=\"col-4\"  class=\"form-control input-md\" required=\"\" type=\"number\">\r\n        </div>\r\n      </div>\r\n\r\n      <!--Email-->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\" for=\"surname\" required=\"true\">E-mail</label>\r\n        <div class=\"col-md-6\">\r\n          <input id=\"email\" name=\"email\"  class=\"form-control input-md\" required=\"\" type=\"text\">\r\n        </div>\r\n      </div>\r\n\r\n      <!--Pajamos per menesi-->\r\n      <div class=\"form-group required\">\r\n        <label class=\"col-md-4 control-label\" for=\"Loan amount\"  >Monthly income after taxes</label>\r\n        <div class=\"col-md-6\" >\r\n          <input  name=\"number\" type=\"number\"  class=\"form-control input-md\" required=\"\">\r\n          <span class=\"help-block\">EUR</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Button-->\r\n      <div class=\"form-group\" class=\"form-horizontal button-marging-right \">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button type=\"submit\" class=\"btn button2 button-size\">\r\n            <span class=\"glyphicon glyphicon-star\"></span> Submit!\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n\r\n    </fieldset>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <form class=\"form-signin\">\r\n    <h2 class=\"form-signin-heading\">Please login</h2>\r\n    <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required=\"\" autofocus=\"\" />\r\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\"/>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ })

},[630]);
//# sourceMappingURL=main.bundle.map