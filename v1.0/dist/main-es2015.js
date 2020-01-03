(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div id=\"logo\"><a [routerLink]=\"['/usuarios']\"><img src=\"assets/img/logo.svg\"></a></div>\n</header>\n  \n<section class=\"container\">\n  <router-outlet></router-outlet>\n</section>\n  \n<footer>\n    <p class=\"float-left\">Copyright &copy; {{year}} </p>\n    <p class=\"float-right\">Gestion de instalacion Mensual - Usuarios <strong> v1.0 </strong></p>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuarios/usuarios.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuarios/usuarios.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sticky-container\">\n  <ul class=\"sticky\">\n      <li>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5> Introduce los datos: </h5>\n            <hr>\n            <form (ngSubmit)=\"newElemento(newElementoForm.value)\" [formGroup]=\"newElementoForm\">\n              <input type=\"hidden\" formControlName=\"id\">\n              <div class=\"form-row\">\n                <div class=\"col\">\n                  <label for=\"usuario\"><strong>Usuario: </strong></label>\n                  <input type=\"text\" formControlName=\"usuario\" class=\"form-control\">\n                </div>\n                <div class=\"col\">\n                  <label for=\"ficheros\"><strong>Ficheros: </strong></label>\n                  <input type=\"text\" formControlName=\"ficheros\" class=\"form-control\">\n                </div>\n                <div class=\"col\">\n                  <label for=\"componentes\"><strong>Componentes: </strong></label>\n                  <input type=\"text\" formControlName=\"componentes\" class=\"form-control\">\n                </div>\n                <div class=\"col\">\n                  <label for=\"programas\"><strong>Programas: </strong></label>\n                  <input type=\"text\" formControlName=\"programas\" class=\"form-control\">\n                </div>   \n              </div>\n              <div class=\"card-text text-center\">\n                <input type=\"submit\" class=\"btn btn-outline-success w-25 mt-4\" [disabled]=\"!newElementoForm.valid\" [value]=\"(currentStatus == 1) ? 'Agregar' : 'Editar'\">\n              </div>\n            </form>          \n          </div>\n        </div>\n      </li>\n  </ul>\n</div>\n\n<div cdkDropList class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"media border rounded mt-3 example-box\" *ngFor=\"let elemento of elementos\" cdkDrag>\n    <div class=\"media-body\">\n      <div class=\"row m-3\">\n        <div class=\"col font-weight-bold pr-0\">{{elemento.data.usuario}}</div>\n        <div class=\"col font-weight-bold pr-0 text-danger\" *ngIf=\"elemento.data.ficheros == '' \"><span class=\"font-weight-bold\" title=\"Ficheros\"> PF/LF </span></div>\n        <div class=\"col font-weight-bold pr-0 text-success\" *ngIf=\"elemento.data.ficheros != '' \"><span class=\"font-weight-bold\" title=\"Ficheros\"> PF/LF </span></div>\n        <div class=\"col font-weight-bold pr-0 text-danger\" *ngIf=\"elemento.data.componentes == '' \"><span class=\"font-weight-bold\" title=\"Componentes\"> *SRVPGM </span></div>\n        <div class=\"col font-weight-bold pr-0 text-success\" *ngIf=\"elemento.data.componentes != '' \"><span class=\"font-weight-bold\" title=\"Componentes\"> *SRVPGM </span></div>\n        <div class=\"col font-weight-bold pr-0 text-danger\" *ngIf=\"elemento.data.programas == '' \"><span class=\"font-weight-bold\" title=\"Modulos y Programas\"> *PGM </span></div>\n        <div class=\"col font-weight-bold pr-0 text-success\" *ngIf=\"elemento.data.programas != '' \"><span class=\"font-weight-bold\" title=\"Modulos y Programas\"> *PGM </span></div>\n        <div class=\"font-weight-bold pr-0 text-success\" *ngIf=\"elemento.data.ficheros != '' && elemento.data.componentes != '' && elemento.data.programas != '' \" title=\"Terminado\"><i class=\"fa fa-flag-checkered fa-2x\" aria-hidden=\"true\"></i></div>\n        <div class=\"font-weight-bold pr-0 text-danger\" *ngIf=\"elemento.data.ficheros == '' || elemento.data.componentes == '' || elemento.data.programas == '' \" title=\"No Terminado\"><i class=\"fa fa-flag-checkered fa-2x\" aria-hidden=\"true\"></i></div>\n        <div class=\"btn-group btn-group-toggle ml-5\" data-toggle=\"buttons\">\n          <button class=\"btn btn-outline-warning\" (click)=\"editElemento(elemento.id)\" title=\"Editar\"><i class=\"fa fa-edit fa-1x\"></i></button>\n          <button class=\"btn btn-outline-danger\" (click)=\"deleteElemento(elemento.id)\" title=\"Eliminar\"><i class=\"fa fa-times fa-1x\"></i></button>        \n        </div>\n      </div>    \n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
        this.year = new Date().getFullYear();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/usuarios/usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");








//FontIcons

//Componentes


//Servicios

//Animaciones


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_10__["UsuariosComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
                { path: 'usuarios', component: _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_10__["UsuariosComponent"] }
            ]),
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"]
        ],
        providers: [
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _services_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n[data-toggle=collapse]:after {\n  display: inline-block;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\";\n  transform: rotate(90deg);\n  transition: all linear 0.25s;\n  float: right;\n}\n[data-toggle=collapse].collapsed:after {\n  transform: rotate(0deg);\n}\n.item-list {\n  margin-top: 7%;\n}\n.wrapper {\n  margin: 25px auto;\n  max-width: 600px;\n  text-align: center;\n  padding: 0 20px;\n}\n.container {\n  width: 45%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.movie-list {\n  width: 80%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: inline-block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 25px;\n}\n.movie-block {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.movie-block:last-child {\n  border: none;\n}\n.movie-list.cdk-drop-list-dragging .movie-block:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.sticky-container {\n  padding: 0px;\n  margin: 0px;\n  position: fixed;\n  right: -150px;\n  top: 230px;\n  width: 170px;\n  z-index: 1100;\n}\n.sticky li {\n  list-style-type: none;\n  background-color: #fff;\n  color: black;\n  height: 43px;\n  padding: 0px;\n  margin: 0px 0px 1px 0px;\n  transition: all 0.65s ease-in-out;\n  cursor: pointer;\n}\n.sticky li:hover {\n  margin-left: -350%;\n}\n.sticky li img {\n  float: left;\n  margin: 5px 4px;\n  margin-right: 5px;\n}\n.sticky li p {\n  padding-top: 5px;\n  margin: 0px;\n  line-height: 16px;\n  font-size: 11px;\n}\n.sticky li p a {\n  text-decoration: none;\n}\n.sticky li p a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c3Vhcmlvcy9DOlxcVXNlcnNcXGNtZTAyMmVzXFxEb2N1bWVudHNcXENhcmxvcyBNdXJcXHZpc3VhbC1jb2RlXFxhbmd1bGFyXFxpbnN0YWxhY2lvbmVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c3Vhcmlvc1xcdXN1YXJpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UscUJBQUE7RUFDSSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDRixZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QURFSjtBQ0FFO0VBQ0UsdUJBQUE7QURHSjtBQ0NBO0VBQVcsY0FBQTtBREdYO0FDRkE7RUFBUyxpQkFBQTtFQUFpQixnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixlQUFBO0FEUzVEO0FDUkE7RUFBVyxVQUFBO0VBQVUscUJBQUE7RUFBcUIscUJBQUE7RUFBcUIsbUJBQUE7QURlL0Q7QUNkQTtFQUFZLFVBQUE7RUFBVSxzQkFBQTtFQUFzQixnQkFBQTtFQUFnQixxQkFBQTtFQUFxQixpQkFBQTtFQUFpQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixnQkFBQTtBRHlCcEk7QUN4QkE7RUFBYSxrQkFBQTtFQUFrQiw2QkFBQTtFQUE2QiwwQkFBQTtFQUEwQixhQUFBO0VBQWEsbUJBQUE7RUFBbUIsbUJBQUE7RUFBbUIsOEJBQUE7RUFBOEIsc0JBQUE7RUFBc0IsWUFBQTtFQUFZLGlCQUFBO0VBQWlCLGVBQUE7QURzQzFOO0FDckNBO0VBQWtCLHNCQUFBO0VBQXNCLGtCQUFBO0VBQWtCLHFIQUFBO0FEMkMxRDtBQzFDQTtFQUFzQixVQUFBO0FEOEN0QjtBQzdDQTtFQUFvQixzREFBQTtBRGlEcEI7QUNoREE7RUFBd0IsWUFBQTtBRG9EeEI7QUNuREE7RUFBMkUsc0RBQUE7QUR1RDNFO0FDcERBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRHVERjtBQ3JEQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUlBLGlDQUFBO0VBQ0EsZUFBQTtBRHdERjtBQ3REQTtFQUNFLGtCQUFBO0FEeURGO0FDdkRBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRDBERjtBQ3hEQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRDJERjtBQ3pEQTtFQUNFLHFCQUFBO0FENERGO0FDekRBO0VBQ0UsMEJBQUE7QUQ0REYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXTphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBjb250ZW50OiBcIu+BlFwiO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4yNXM7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXS5jb2xsYXBzZWQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDclO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0NSU7XG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubW92aWUtbGlzdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm1vdmllLWJsb2NrIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ubW92aWUtYmxvY2s6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm1vdmllLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAubW92aWUtYmxvY2s6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5zdGlja3ktY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogLTE1MHB4O1xuICB0b3A6IDIzMHB4O1xuICB3aWR0aDogMTcwcHg7XG4gIHotaW5kZXg6IDExMDA7XG59XG5cbi5zdGlja3kgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA0M3B4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxcHggMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjY1cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC42NXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjY1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGlja3kgbGk6aG92ZXIge1xuICBtYXJnaW4tbGVmdDogLTM1MCU7XG59XG5cbi5zdGlja3kgbGkgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3kgbGkgcCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uc3RpY2t5IGxpIHAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnN0aWNreSBsaSBwIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iLCJbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXTphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIGNvbnRlbnQ6IFwiXFxmMDU0XCI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMjVzO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB9ICAgXG4gIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdLmNvbGxhcHNlZDphZnRlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgO1xufVxuXG5cbi5pdGVtLWxpc3R7bWFyZ2luLXRvcDo3JX1cbi53cmFwcGVye21hcmdpbjoyNXB4IGF1dG87bWF4LXdpZHRoOjYwMHB4O3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MCAyMHB4O31cbi5jb250YWluZXJ7d2lkdGg6NDUlO21hcmdpbjowIDI1cHggMjVweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcDt9XG4ubW92aWUtbGlzdHt3aWR0aDo4MCU7Ym9yZGVyOnNvbGlkIDFweCAjY2NjO21pbi1oZWlnaHQ6NjBweDtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kOndoaXRlO2JvcmRlci1yYWRpdXM6NHB4O292ZXJmbG93OmhpZGRlbjttYXJnaW4tdG9wOjI1cHg7fVxuLm1vdmllLWJsb2Nre3BhZGRpbmc6MjBweCAxMHB4O2JvcmRlci1ib3R0b206c29saWQgMXB4ICNjY2M7Y29sb3I6cmdiYSgwLCAwLCAwLCAwLjg3KTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOm1vdmU7YmFja2dyb3VuZDp3aGl0ZTtmb250LXNpemU6MTRweDt9XG4uY2RrLWRyYWctcHJldmlld3tib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7fVxuLmNkay1kcmFnLXBsYWNlaG9sZGVye29wYWNpdHk6MDt9XG4uY2RrLWRyYWctYW5pbWF0aW5ne3RyYW5zaXRpb246dHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO31cbi5tb3ZpZS1ibG9jazpsYXN0LWNoaWxke2JvcmRlcjpub25lO31cbi5tb3ZpZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLm1vdmllLWJsb2NrOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpe3RyYW5zaXRpb246dHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO31cblxuXG4uc3RpY2t5LWNvbnRhaW5lcntcbiAgcGFkZGluZzowcHg7XG4gIG1hcmdpbjowcHg7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICByaWdodDotMTUwcHg7XG4gIHRvcDoyMzBweDtcbiAgd2lkdGg6MTcwcHg7XG4gIHotaW5kZXg6IDExMDA7XG59XG4uc3RpY2t5IGxpe1xuICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICBjb2xvcjpibGFjaztcbiAgaGVpZ2h0OjQzcHg7XG4gIHBhZGRpbmc6MHB4O1xuICBtYXJnaW46MHB4IDBweCAxcHggMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246YWxsIDAuNjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOmFsbCAwLjY1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjphbGwgMC42NXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjpwb2ludGVyO1xufVxuLnN0aWNreSBsaTpob3ZlcntcbiAgbWFyZ2luLWxlZnQ6LTM1MCU7XG59XG4uc3RpY2t5IGxpIGltZ3tcbiAgZmxvYXQ6bGVmdDtcbiAgbWFyZ2luOjVweCA0cHg7XG4gIG1hcmdpbi1yaWdodDo1cHg7XG59XG4uc3RpY2t5IGxpIHB7XG4gIHBhZGRpbmctdG9wOjVweDtcbiAgbWFyZ2luOjBweDtcbiAgbGluZS1oZWlnaHQ6MTZweDtcbiAgZm9udC1zaXplOjExcHg7XG59XG4uc3RpY2t5IGxpIHAgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIC8vIGNvbG9yOiMyQzM1Mzk7XG59XG4uc3RpY2t5IGxpIHAgYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.ts ***!
  \***********************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");





let UsuariosComponent = class UsuariosComponent {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
        this.documentId = null;
        this.elementos = [];
        this.currentStatus = 1;
        this.newElementoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ficheros: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            componentes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            programas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.check = true;
    }
    ngOnInit() {
        this.newElementoForm.setValue({
            id: '',
            usuario: '',
            ficheros: '',
            componentes: '',
            programas: ''
        });
        this.firestoreService.getElementos().subscribe((elementosSnapshot) => {
            this.elementos = [];
            elementosSnapshot.forEach((elementoData) => {
                this.elementos.push({
                    id: elementoData.payload.doc.id,
                    data: elementoData.payload.doc.data()
                });
            });
        });
    }
    ngOnDestroy() { }
    newElemento(form, documentId = this.documentId) {
        console.log(`Status: ${this.currentStatus}`);
        if (this.currentStatus === 1) {
            const data = {
                usuario: form.usuario,
                ficheros: form.ficheros,
                componentes: form.componentes,
                programas: form.programas
            };
            this.firestoreService.createElemento(data).then(() => {
                console.log('Documento creado.');
                this.newElementoForm.setValue({
                    usuario: '',
                    ficheros: '',
                    componentes: '',
                    programas: '',
                    id: ''
                });
            }, (error) => {
                console.error(error);
            });
        }
        else {
            const data = {
                usuario: form.usuario,
                ficheros: form.ficheros,
                componentes: form.componentes,
                programas: form.programas
            };
            this.firestoreService.updateElemento(documentId, data).then(() => {
                this.currentStatus = 1;
                this.newElementoForm.setValue({
                    usuario: '',
                    ficheros: '',
                    componentes: '',
                    programas: '',
                    id: ''
                });
                console.log('Documento editado.');
            }, (error) => {
                console.log(error);
            });
        }
    }
    editElemento(documentId) {
        const editSubscribe = this.firestoreService.getElemento(documentId).subscribe((elemento) => {
            this.currentStatus = 2;
            this.documentId = documentId;
            this.newElementoForm.setValue({
                id: documentId,
                usuario: elemento.payload.data()['usuario'],
                ficheros: elemento.payload.data()['ficheros'],
                componentes: elemento.payload.data()['componentes'],
                programas: elemento.payload.data()['programas']
            });
            editSubscribe.unsubscribe();
        });
    }
    deleteElemento(documentId) {
        this.firestoreService.deleteElemento(documentId).then(() => {
            console.log('Documento eliminado.');
        }, (error) => {
            console.error(error);
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.elementos, event.previousIndex, event.currentIndex);
    }
};
UsuariosComponent.ctorParameters = () => [
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
];
UsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuarios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuarios/usuarios.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuarios.component.scss */ "./src/app/components/usuarios/usuarios.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
], UsuariosComponent);



/***/ }),

/***/ "./src/app/services/firestore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let FirestoreService = class FirestoreService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    // Crea un nuevo Elemento
    createElemento(data) {
        return this.firestore.collection('usuarios').add(data);
    }
    // Obtiene un Elemento
    getElemento(documentId) {
        return this.firestore.collection('usuarios').doc(documentId).snapshotChanges();
    }
    // Obtiene todos los elementos
    getElementos() {
        return this.firestore.collection('usuarios').snapshotChanges();
    }
    // Actualiza un Elementos
    updateElemento(documentId, data) {
        return this.firestore.collection('usuarios').doc(documentId).set(data);
    }
    // Borra un Item
    deleteElemento(documentId) {
        return this.firestore.collection('usuarios').doc(documentId).delete();
    }
};
FirestoreService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], FirestoreService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCgQlpn4GdOOpOIhVWHFS0UsEyUiAcjfts',
        authDomain: 'angularinstalaciones.firebaseapp.com',
        databaseURL: 'https://angularinstalaciones.firebaseio.com',
        projectId: 'angularinstalaciones',
        storageBucket: 'angularinstalaciones.appspot.com',
        messagingSenderId: 'angularinstalaciones.appspot.com'
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cme022es\Documents\Carlos Mur\visual-code\angular\instalaciones\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map