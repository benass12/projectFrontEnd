"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require("./app.component");
var admin_loan_menu_component_1 = require("./admin-loan-menu/admin-loan-menu.component");
var appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent,
        data: { title: 'Main' }
    },
    {
        path: 'admin',
        component: admin_loan_menu_component_1.AdminLoanMenuComponent,
        data: { title: 'Loan list' }
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
