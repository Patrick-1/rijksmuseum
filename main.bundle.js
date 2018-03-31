webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.setSearch = function (newtext) {
        this.searchtext = newtext;
    };
    AppComponent.prototype.setApiKey = function (key) {
        this.apikey = key;
    };
    AppComponent.prototype.resetApiKey = function (input) {
        console.log(input);
        this.apikey = '';
        input.value = '';
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log('Hello World - Art search app is running');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // 1. add component description/annotations here
            selector: 'hello-world',
            template: __webpack_require__("../../../../../src/app/app.html"),
            styles: [__webpack_require__("../../../../../src/app/app.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#background{\r\n\twidth:\t\t\t\t100%;\r\n\theight:\t\t\t\t100%;\r\n\tbackground-image:\turl(\"https://tickets.holland.com/wp-content/uploads/2015/07/rijksmuseum-bew.jpg\");\r\n\tbackground-size: \tcontain;\r\n\tbackground-repeat: \tno-repeat;\r\n\tposition: \t\t\tfixed;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\r\n\t<div id=\"w30\">\r\n\t    <div>\r\n\t\t<h1>Hello User!</h1>\r\n\t\t\t<div id=\"edge\">\r\n\t\t\t\tVoer een geldige Rijksmuseum API Key in.\r\n\t\t\t\t<br>\r\n\t\t\t\t<input (keyup.enter)=\"setApiKey(rmkey.value)\" type=\"text\" class=\"input\" placeholder=\"rijksmuseum api key...\" #rmkey>\r\n\t\t\t\t<button class=\"btn btn-click\" (click)=\"setApiKey(rmkey.value)\">Invoeren</button>\r\n\t\t\t\t<button class=\"btn btn-click\" (click)=\"resetApiKey(rmkey)\">Reset</button>\r\n\t\t    </div>\r\n\t\t\t<br>\r\n\t\t\t<div id=\"edge\" *ngIf=\"apikey\">\r\n\t\t\t\tVoer een zoekterm in. (bijvoorbeeld: Nachtwacht)\r\n\t\t\t\t<br>\r\n\t\t\t\t<input (keyup.enter)=\"setSearch(inputtext.value)\" type=\"text\" class=\"input\" placeholder=\"artiest\" #inputtext>\r\n\t\t\t\t<button class=\"btn btn-click\" (click)=\"setSearch(inputtext.value)\">Zoeken</button>\r\n\t\t    </div>\r\n\t    </div>\r\n\t</div>\r\n\t<br>\r\n\t<br>\r\n\t<div *ngIf=\"searchtext\">\r\n\t\t<app-artlist [searchTerm]=\"searchtext\" [apikey]=\"apikey\">Gegevens ophalen...</app-artlist>\r\n\t</div>\r\n\t<footer id=\"notice\">\r\n\t\tContent maakt gebruik van de Rijksmuseum API. <br>\r\n\t\tAlle beelden en informatie komen van het Rijksmuseum. Zodoende behoren de afbeeldingen tot de collectie van het Rijksmuseum.<br> \r\n\t\tHet Rijksmuseum is niet verantwoordelijk voor deze applicatie.<br>\r\n\t\tMeer informatie over de API valt <a href=\"https://www.rijksmuseum.nl/nl/api\" target=\"_blank\">hier</a> te vinden.<br>\r\n\t\tDe achtergrond is gejat van google images...\r\n\t</footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_rijksmuseum_service__ = __webpack_require__("../../../../../src/app/shared/rijksmuseum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artlist_artlist_component__ = __webpack_require__("../../../../../src/app/artlist/artlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__artdetail_artdetail_component__ = __webpack_require__("../../../../../src/app/artdetail/artdetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Modules



// Custom Components




// Module declaration
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__artlist_artlist_component__["a" /* ArtlistComponent */], __WEBPACK_IMPORTED_MODULE_6__artdetail_artdetail_component__["a" /* ArtdetailComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_rijksmuseum_service__["a" /* RijksmuseumService */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/artdetail/artdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  max-width:50%;\r\n  max-height:50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artdetail/artdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"edge\" *ngIf=currentArt>\n\t<b>Titel:</b> {{currentArt.title}}\n\t<br><b>Eerste maker:</b> {{currentArt.principalOrFirstMaker}}\n\t<br><b>Productieplaats:</b> {{currentArt.productionPlaces}}\n\t<br><b>Details:</b> {{currentArt.longTitle}}\n\t<br>\n\t<img src={{currentArt.webImage.url}} alt=\"Afbeelding van {{ currentArt.title}}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artdetail/artdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_rijksmuseum_models__ = __webpack_require__("../../../../../src/app/model/rijksmuseum_models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtdetailComponent = /** @class */ (function () {
    function ArtdetailComponent() {
    }
    ArtdetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_rijksmuseum_models__["a" /* ArtObject */])
    ], ArtdetailComponent.prototype, "currentArt", void 0);
    ArtdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-artdetail',
            template: __webpack_require__("../../../../../src/app/artdetail/artdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artdetail/artdetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtdetailComponent);
    return ArtdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artlist/artlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  width:1000px;\r\n}\r\n.left {\r\n  width:250px;\r\n  float:left;\r\n}\r\n.right {\r\n  width:250px;\r\n  float:right;\r\n}\r\nimg {\r\n  max-width:10%;\r\n  max-height:10%;\r\n}\r\n#instructions{\r\n\tfont-family:\tArial;\r\n\tfont-size:\t\t10px;\r\n\tfont-colour:\tgrey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artlist/artlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"apikey && searchTerm\">\n\t<div id=\"edge\">\n\t<h3>Gezocht op: {{searchTerm}}</h3>\n\t\t<div id=\"instructions\">\t\n\t\t\tklik op een entry om de details naar voren te halen\n\t\t</div>\n\t</div>\n\t<div class=\"left\">\n\t\t<div *ngIf=\"listOfArt;else notready\">\n\t\t\t<div (click)=\"selectArt(ao)\" *ngFor=\"let ao of listOfArt\"> \n\t\t\t\t<div id=\"edge\" *ngIf=\"ao.webImage\">\n\t\t\t\t\t<img src={{ao.webImage.url}} alt=\"Afbeelding van {{ ao.title}}\">\n\t\t\t\t\t{{ao.title}}\n\t\t\t\t</div>\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<ng-template #notready>\n\t\t\tdata ophalen...\n\t\t</ng-template>\n\t</div>\n\t<div>\n\t\t<app-artdetail [currentArt]=\"selectedArt\"></app-artdetail>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artlist/artlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_rijksmuseum_service__ = __webpack_require__("../../../../../src/app/shared/rijksmuseum.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtlistComponent = /** @class */ (function () {
    function ArtlistComponent(rijksmuseumService) {
        this.rijksmuseumService = rijksmuseumService;
        this.searchTerm = "";
        this.apikey = "";
    }
    ArtlistComponent.prototype.ngOnInit = function () {
        this.zoekenArtiest();
    };
    ArtlistComponent.prototype.ngOnChanges = function (changes) {
        if (changes.searchTerm != null)
            this.searchTerm = changes.searchTerm.currentValue;
        if (changes.apikey != null)
            this.apikey = changes.apikey.currentValue;
        this.selectedArt = null;
        this.zoekenArtiest();
    };
    ArtlistComponent.prototype.zoekenArtiest = function () {
        var _this = this;
        if (this.searchTerm != null && this.apikey != null && this.searchTerm != '' && this.apikey != '')
            this.rijksmuseumService.searchByArtist(this.searchTerm, this.apikey)
                .subscribe(function (data) { return _this.listOfArt = data; }, function (error) { return console.log('oh oh:' + error); });
    };
    ArtlistComponent.prototype.selectArt = function (input) {
        this.selectedArt = input;
        console.log('selected: ' + this.selectedArt.title);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ArtlistComponent.prototype, "searchTerm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ArtlistComponent.prototype, "apikey", void 0);
    ArtlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-artlist',
            template: __webpack_require__("../../../../../src/app/artlist/artlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artlist/artlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_rijksmuseum_service__["a" /* RijksmuseumService */]])
    ], ArtlistComponent);
    return ArtlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/rijksmuseum_models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Rijksmuseum_models */
/* unused harmony export RootObject */
/* unused harmony export Facet2 */
/* unused harmony export Facet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtObject; });
/* unused harmony export WebImage */
/* unused harmony export Links */
/* unused harmony export CountFacets */
var Rijksmuseum_models = /** @class */ (function () {
    function Rijksmuseum_models() {
    }
    return Rijksmuseum_models;
}());

var RootObject = /** @class */ (function () {
    function RootObject() {
    }
    return RootObject;
}());

var Facet2 = /** @class */ (function () {
    function Facet2() {
    }
    return Facet2;
}());

var Facet = /** @class */ (function () {
    function Facet() {
    }
    return Facet;
}());

var ArtObject = /** @class */ (function () {
    function ArtObject(links, id, objectNumber, title, hasImage, principalOrFirstMaker, longTitle, showImage, permitDownload, webImage, headerImage, productionPlaces) {
        this.objectNumber = objectNumber;
        this.title = title;
        this.principalOrFirstMaker = principalOrFirstMaker;
        this.longTitle = longTitle;
        this.webImage = webImage;
        this.headerImage = headerImage;
        this.productionPlaces = productionPlaces;
    }
    return ArtObject;
}());

var WebImage = /** @class */ (function () {
    function WebImage() {
    }
    return WebImage;
}());

var Links = /** @class */ (function () {
    function Links() {
    }
    return Links;
}());

var CountFacets = /** @class */ (function () {
    function CountFacets() {
    }
    return CountFacets;
}());



/***/ }),

/***/ "../../../../../src/app/shared/rijksmuseum.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RijksmuseumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_rijksmuseum_models__ = __webpack_require__("../../../../../src/app/model/rijksmuseum_models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RijksmuseumService = /** @class */ (function () {
    function RijksmuseumService(http) {
        this.http = http;
    }
    RijksmuseumService.prototype.searchByArtist = function (term, apikey) {
        var querie = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rmURL + apikey + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rmformat + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].rmsearch + term;
        return this.http.get(querie)
            .map(function (res) {
            var r = res['artObjects'].map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__model_rijksmuseum_models__["a" /* ArtObject */](item.links, item.id, item.objectNumber, item.title, item.hasImage, item.principalOrFirstMaker, item.longTitle, item.showImage, item.permitDownload, item.webImage, item.headerImage, item.productionPlaces);
            });
            return r;
        });
    };
    RijksmuseumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RijksmuseumService);
    return RijksmuseumService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    rmURL: 'https://www.rijksmuseum.nl/api/nl/collection?key=',
    rmformat: '&format=json&',
    rmmaker: 'artist=',
    rmsearch: 'q=',
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map