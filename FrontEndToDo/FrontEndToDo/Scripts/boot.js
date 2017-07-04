"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="./../typings/globals/core-js/index.d.ts"/>
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import { AppComponent } from './app';
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var todos_1 = require("./todos");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        providers: [],
        declarations: [todos_1.TodosComponent],
        bootstrap: [todos_1.TodosComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=boot.js.map