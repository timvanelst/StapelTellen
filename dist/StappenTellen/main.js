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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Stapeltellen</h2>\r\n<!-- <div [formGroup]=\"form\" >\r\n  <input type=\"text\" formControlName=\"input\" />\r\n  <div>\r\n    {{input}}\r\n  </div>\r\n</div> -->\r\n<div >\r\n  <input type=\"button\" (click)=\"generate()\" value=\"Nieuw\" />\r\n  <input type=\"number\" [(ngModel)]=\"input\" /><input type=\"submit\" (click)=\"calculate()\" value=\"Reken uit!\" />\r\n  <app-result-component [result]=\"result\"></app-result-component>\r\n</div>"

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
/* harmony import */ var _stapel_tellen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stapel-tellen */ "./src/app/stapel-tellen.ts");
/* harmony import */ var _random_number_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random-number-generator */ "./src/app/random-number-generator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    // stapelTellen;
    // constructor(private builder: FormBuilder) { }
    function AppComponent(stapelTellen) {
        this.stapelTellen = stapelTellen;
        this.title = 'app';
        this.input = '';
        // form = this.builder.group({
        //   input: ['']
        // });
        this.result = this.calculateInternal();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.generate();
    };
    AppComponent.prototype.generate = function () {
        var random = _random_number_generator__WEBPACK_IMPORTED_MODULE_2__["RandomNumberGenerator"].getRandomNumber();
        this.input = random.toString();
    };
    AppComponent.prototype.calculate = function () {
        this.result = this.calculateInternal();
    };
    AppComponent.prototype.calculateInternal = function () {
        if (this.input != '') {
            return this.stapelTellen.calculate(this.input.toString());
        }
        return [];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_stapel_tellen__WEBPACK_IMPORTED_MODULE_1__["StapelTellen"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _result_component_result_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result-component/result-component.component */ "./src/app/result-component/result-component.component.ts");
/* harmony import */ var _stapel_tellen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stapel-tellen */ "./src/app/stapel-tellen.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _result_component_result_component_component__WEBPACK_IMPORTED_MODULE_4__["ResultComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production })
            ],
            providers: [
                _stapel_tellen__WEBPACK_IMPORTED_MODULE_5__["StapelTellen"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/random-number-generator.ts":
/*!********************************************!*\
  !*** ./src/app/random-number-generator.ts ***!
  \********************************************/
/*! exports provided: RandomNumberGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomNumberGenerator", function() { return RandomNumberGenerator; });
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator() {
    }
    RandomNumberGenerator.getRandomNumber = function () {
        return Math.floor(Math.random() * (999999 - 100000)) + 100000;
        // const control = <FormArray>this.myFormdata.controls['inputs'];
        // const random = this._fb.group({numbers: +quickpicked, pari: 25});
        // control.setControl(i, random)
    };
    return RandomNumberGenerator;
}());



/***/ }),

/***/ "./src/app/result-component/result-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/result-component/result-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result-component/result-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/result-component/result-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let res of result\">\n  <h3>Resultaat: {{res.result}}</h3>\n  <!-- {{ res | json }} -->\n  <ul>\n    <li *ngFor=\"let step of res.steps\">{{step}}</li>\n  </ul>\n  <!-- <div *ngIf=\"result.subResult != undefined\"> -->\n    <!-- <app-result-component [result]=\"res.subResult\" *ngIf=\"res.subResult\"></app-result-component> -->\n    <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/result-component/result-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/result-component/result-component.component.ts ***!
  \****************************************************************/
/*! exports provided: ResultComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponentComponent", function() { return ResultComponentComponent; });
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

var ResultComponentComponent = /** @class */ (function () {
    function ResultComponentComponent() {
    }
    ResultComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ResultComponentComponent.prototype, "result", void 0);
    ResultComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-component',
            template: __webpack_require__(/*! ./result-component.component.html */ "./src/app/result-component/result-component.component.html"),
            styles: [__webpack_require__(/*! ./result-component.component.css */ "./src/app/result-component/result-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultComponentComponent);
    return ResultComponentComponent;
}());



/***/ }),

/***/ "./src/app/stapel-tellen.result.ts":
/*!*****************************************!*\
  !*** ./src/app/stapel-tellen.result.ts ***!
  \*****************************************/
/*! exports provided: StapelTellenResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StapelTellenResult", function() { return StapelTellenResult; });
var StapelTellenResult = /** @class */ (function () {
    function StapelTellenResult() {
    }
    return StapelTellenResult;
}());



/***/ }),

/***/ "./src/app/stapel-tellen.ts":
/*!**********************************!*\
  !*** ./src/app/stapel-tellen.ts ***!
  \**********************************/
/*! exports provided: StapelTellen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StapelTellen", function() { return StapelTellen; });
/* harmony import */ var _stapel_tellen_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stapel-tellen.result */ "./src/app/stapel-tellen.result.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StapelTellen = /** @class */ (function () {
    function StapelTellen() {
    }
    StapelTellen.prototype.calculate = function (input) {
        var array = [];
        var res = this.calculateTemp(input);
        array.push(res);
        var result = res.result;
        // console.log('result.length: ' + result.length);
        var iteration = 1;
        while (result.length > 1 || iteration > 10) {
            // console.log(result)
            var temp = this.calculateTemp(result);
            array.push(temp);
            // console.log(temp);
            result = temp.result;
            // temp.steps.forEach(s => res.steps.push(s));
            // res.result = temp.result;
            res.subResult = temp;
            iteration++;
        }
        // return result;
        // res.result = result;
        // console.log('result: ' + res.result);
        return array;
    };
    StapelTellen.prototype.calculateTemp = function (input) {
        // console.log('input: ' + input);
        var i = 0;
        var res = new _stapel_tellen_result__WEBPACK_IMPORTED_MODULE_0__["StapelTellenResult"]();
        res.steps = [];
        var result = '';
        while (i < input.length) {
            var x = input.charAt(i);
            var y = (i + 1 < input.length) ? input.charAt(i + 1) : '0';
            var sum = +x + +y;
            var sumDescription = x + ' + ' + y + ' = ' + sum;
            // console.log(sumDescription);
            res.steps.push(sumDescription);
            result += '' + sum + '';
            // console.log(result);
            i += 2;
        }
        res.result = result;
        console.log(res);
        return res;
    };
    StapelTellen = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StapelTellen);
    return StapelTellen;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TimvanElst\source\repos\StapelTellen.Logic\StappenTellen.App\StappenTellen\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map