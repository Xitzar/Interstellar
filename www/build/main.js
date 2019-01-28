webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/connect4/connect4.module": [
		279,
		3
	],
	"../pages/e-tv/e-tv.module": [
		280,
		0
	],
	"../pages/game-arena/game-arena.module": [
		281,
		2
	],
	"../pages/profile/profile.module": [
		282,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_arena_game_arena__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__game_arena_game_arena__["a" /* GameArenaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Game-Arena" tabIcon="apps"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_arena_game_arena__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.startGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_arena_game_arena__["a" /* GameArenaPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Game Haven !</h2>\n\n  \n\n  <h3>Use an option below to discover the full power of online gaming !!</h3>\n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col class="centering" col-12 col-sm-8 col-md-6 col-xl-4>\n\n\n\n        <ion-card>\n\n          <img src="http://lorempixel.com/400/200/sports/"/>\n\n          <ion-card-content>\n\n            \n\n            <ion-card-title>\n\n              Take a seat and play a game of connect 4 on us !\n\n            </ion-card-title>\n\n            \n\n            <p>\n\n              Have fun\n\n            </p>\n\n\n\n            <button ion-button (click)="startGame()"  class="btn btn-start ai">\n\n              Démarrer une partie AI\n\n            </button>\n\n          </ion-card-content>\n\n\n\n        </ion-card>\n\n\n\n\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect4Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect4a__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monte_carlo__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Connect4Game = /** @class */ (function () {
    function Connect4Game(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentPlayer = {
            color: "",
            name: "",
            move: ""
        };
    }
    Connect4Game.prototype.ngOnInit = function () {
        this.startGame();
    };
    Connect4Game.prototype.startGame = function () {
        this.game = new __WEBPACK_IMPORTED_MODULE_0__connect4a__["a" /* GameC4 */]();
        this.mcts = new __WEBPACK_IMPORTED_MODULE_1__monte_carlo__["a" /* MonteCarlo */](this.game);
        this.state = this.game.start();
        this.winner = this.game.winner(this.state);
        this.theBoard = this.state.board.map(function (row) { return row.map(function (cell) { return cell === -1 ? 2 : cell; }); });
        this.playMove();
    };
    Connect4Game.prototype.playMove = function (col) {
        // From initial state, play games until end
        if (!this.winner) {
            // console.log();
            // console.log('player: ' + (state.player === 1 ? 1 : 2));
            // console.log(state.board.map((row: any) => row.map((cell: any) => cell === -1 ? 2 : cell)));
            this.mcts.runSearch(this.state, 1);
            var stats = this.mcts.getStats(this.state);
            // console.log(util.inspect(stats, {showHidden: false, depth: null}));
            //console.log(stats);
            var play = this.mcts.bestPlay(this.state, 'robust');
            // Afficher ces coordonnees dans le board
            var playerId = this.state.player;
            if (playerId === 1) {
                this.currentPlayer.name = "Player 2";
                this.currentWinner = "l'ordinateur";
                this.currentPlayer.color = "orange";
            }
            else {
                this.currentPlayer.name = "l'ordinateur";
                this.currentWinner = "Player 2";
                this.currentPlayer.color = "purple";
            }
            if (col !== undefined) {
                play.col = "" + col;
                for (var row = 0; row < 6; row++) {
                    if (this.theBoard[row][col] === 0) {
                        play.row = row;
                    }
                }
            }
            this.state = this.game.nextGameState(this.state, play);
            this.winner = this.game.winner(this.state);
            this.theBoard = this.state.board.map(function (row) { return row.map(function (cell) { return cell === -1 ? 2 : cell; }); });
            this.automatedMoveMaybe();
        }
    };
    Connect4Game.prototype.automatedMoveMaybe = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.currentPlayer.name === "l'ordinateur") {
                _this.playMove();
            }
        }, 200);
    };
    Connect4Game = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'connect4',template:/*ion-inline-start:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\connect4\connect4.html"*/'<div class="connect4-module">\n\n    <ion-card *ngIf="game">\n        \n        <h2>Affrontement entre <span class="player1_name">Player 1</span> et <span class="player2_name">Player 2</span></h2>\n        \n        <ion-card-content>\n            \n            <h4 *ngIf="!this.winner" [style.color]="currentPlayer.color">Au tour de {{ currentPlayer.name }} de jouer.</h4>\n            <h4 *ngIf="this.winner" [style.color]="green">Le gagnant est {{ currentWinner }}</h4>\n\n            <table class="board">\n                <tr *ngFor="let row of theBoard">   \n                    <td class="center  cell-{{col}}" *ngFor="let col of row; index as i">\n                        <a (click)="playMove(i)" href="javascript:;"  class="case px2 px7">\n                            <span class="cell">{{ col }}</span>\n                        </a>\n                    </td>\n                </tr>\n            </table>\n        \n        </ion-card-content>\n    </ion-card>\n\n\n</div>'/*ion-inline-end:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\connect4\connect4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], Connect4Game);
    return Connect4Game;
}());

//# sourceMappingURL=connect4.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_profile_profile__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_connect4_connect4__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_game_arena_game_arena__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_game_arena_game_arena__["a" /* GameArenaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_connect4_connect4__["a" /* Connect4Game */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/connect4/connect4.module#Connect4PageModule', name: 'Connect4Game', segment: 'connect4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/e-tv/e-tv.module#ETvPageModule', name: 'ETvPage', segment: 'e-tv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-arena/game-arena.module#GameArenaPageModule', name: 'GameArenaPage', segment: 'game-arena', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_game_arena_game_arena__["a" /* GameArenaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameC4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamestate__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameplay__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
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
};



var N_ROWS = 6;
var N_COLS = 7;
var boardPrototype = [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]];
var checkPrototype = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];
// Class representing the game.
var GameC4 = /** @class */ (function () {
    function GameC4() {
    }
    // Generate and return the initial game state.
    GameC4.prototype.start = function () {
        var newBoard = boardPrototype.map(function (row) { return row.slice(); });
        return new __WEBPACK_IMPORTED_MODULE_0__gamestate__["a" /* GameState */]([], newBoard, 1);
    };
    // Advance the given state and return it.
    GameC4.prototype.nextGameState = function (state, play) {
        var newHistory = state.playHistory.slice(); // 1-deep copy
        newHistory.push(play);
        var newBoard = state.board.map(function (row) { return row.slice(); });
        newBoard[play.row][play.col] = state.player;
        var newPlayer = -state.player;
        return new __WEBPACK_IMPORTED_MODULE_0__gamestate__["a" /* GameState */](newHistory, newBoard, newPlayer);
    };
    // Return the current player's legal plays from given state.
    GameC4.prototype.legalPlays = function (state) {
        var legalPlays = [];
        for (var col = 0; col < N_COLS; col++) {
            for (var row = N_ROWS - 1; row >= 0; row--) {
                if (state.board[row][col] === 0) {
                    legalPlays.push(new __WEBPACK_IMPORTED_MODULE_1__gameplay__["a" /* GamePlay */](row, col));
                    break;
                }
            }
        }
        return legalPlays;
    };
    // Return the winner of the game.
    GameC4.prototype.winner = function (state) {
        // if board is full, there's no winner
        if (!isNaN(state.board[0].reduce(function (acc, cur) { return cur === 0 ? NaN : acc + cur; }))) {
            return 0;
        }
        // one board for each possible winning run orientation
        var checkBoards = new Map();
        checkBoards.set("horiz", checkPrototype.map(function (row) { return row.slice(); }));
        checkBoards.set("verti", checkPrototype.map(function (row) { return row.slice(); }));
        checkBoards.set("ldiag", checkPrototype.map(function (row) { return row.slice(); }));
        checkBoards.set("rdiag", checkPrototype.map(function (row) { return row.slice(); }));
        // iterate over the board
        for (var row = 0; row < N_ROWS; row++) {
            for (var col = 0; col < N_COLS; col++) {
                var cell = state.board[row][col];
                try {
                    for (var checkBoards_1 = __values(checkBoards), checkBoards_1_1 = checkBoards_1.next(); !checkBoards_1_1.done; checkBoards_1_1 = checkBoards_1.next()) {
                        var _a = __read(checkBoards_1_1.value, 2), key = _a[0], val = _a[1];
                        // accumulator
                        var acc = void 0;
                        switch (key) {
                            case "horiz":
                                acc = val[row + 1][col]; // left
                                break;
                            case "verti":
                                acc = val[row][col + 1]; // top
                                break;
                            case "ldiag":
                                acc = val[row][col]; // top left
                                break;
                            case "rdiag":
                                acc = val[row][col + 2]; // top right
                                break;
                        }
                        val[row + 1][col + 1] = cell;
                        if (cell < 0 && acc < 0 || cell > 0 && acc > 0) {
                            val[row + 1][col + 1] += acc;
                        }
                        if (val[row + 1][col + 1] === 4) {
                            return 1;
                        }
                        if (val[row + 1][col + 1] === -4) {
                            return -1;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (checkBoards_1_1 && !checkBoards_1_1.done && (_b = checkBoards_1.return)) _b.call(checkBoards_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return null;
        var e_1, _b;
    };
    return GameC4;
}());

//# sourceMappingURL=connect4a.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameState; });
/** Class representing a game state. */
var GameState = /** @class */ (function () {
    function GameState(playHistory, board, player) {
        this.playHistory = playHistory;
        this.board = board;
        this.player = player;
    }
    GameState.prototype.isPlayer = function (player) {
        return (player === this.player);
    };
    GameState.prototype.hash = function () {
        return JSON.stringify(this.playHistory);
    };
    return GameState;
}());

//# sourceMappingURL=gamestate.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePlay; });

/** Class representing a state transition. */
var GamePlay = /** @class */ (function () {
    function GamePlay(row, col) {
        this.row = false;
        this.col = false;
        this.row = row;
        this.col = col;
    }
    GamePlay.prototype.hash = function () {
        return this.row.toString() + "," + this.col.toString();
    };
    return GamePlay;
}());

//# sourceMappingURL=gameplay.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonteCarlo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__monte_carlo_node__ = __webpack_require__(252);
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var MonteCarlo = /** @class */ (function () {
    function MonteCarlo(game, UCB1ExploreParam) {
        if (UCB1ExploreParam === void 0) { UCB1ExploreParam = 2; }
        this.game = false;
        this.UCB1ExploreParam = false;
        this.game = game;
        this.UCB1ExploreParam = UCB1ExploreParam;
        this.nodes = new Map(); // map: State.hash() => MonteCarloNode
    }
    /** If given state does not exist, create dangling node. */
    MonteCarlo.prototype.makeNode = function (state) {
        if (!this.nodes.has(state.hash())) {
            var unexpandedPlays = this.game.legalPlays(state).slice();
            var node = new __WEBPACK_IMPORTED_MODULE_0__monte_carlo_node__["a" /* MonteCarloNode */](null, null, state, unexpandedPlays);
            this.nodes.set(state.hash(), node);
        }
    };
    /** From given state, repeatedly run MCTS to build statistics. */
    MonteCarlo.prototype.runSearch = function (state, timeout) {
        if (timeout === void 0) { timeout = 3; }
        this.makeNode(state);
        var end = Date.now() + timeout * 1000;
        while (Date.now() < end) {
            var node = this.select(state);
            var winner = this.game.winner(node.state);
            if (node.isLeaf() === false && winner === null) {
                node = this.expand(node);
                winner = this.simulate(node);
            }
            this.backpropagate(node, winner);
        }
    };
    /** Phase 1, Selection: Select until not fully expanded OR leaf */
    MonteCarlo.prototype.select = function (state) {
        var node = this.nodes.get(state.hash());
        while (node.isFullyExpanded() && !node.isLeaf()) {
            var plays = node.allPlays();
            var bestPlay = void 0;
            var bestUCB1 = -Infinity;
            try {
                for (var plays_1 = __values(plays), plays_1_1 = plays_1.next(); !plays_1_1.done; plays_1_1 = plays_1.next()) {
                    var play = plays_1_1.value;
                    var childUCB1 = node.childNode(play).getUCB1(this.UCB1ExploreParam);
                    if (childUCB1 > bestUCB1) {
                        bestPlay = play;
                        bestUCB1 = childUCB1;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (plays_1_1 && !plays_1_1.done && (_a = plays_1.return)) _a.call(plays_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            node = node.childNode(bestPlay);
        }
        return node;
        var e_1, _a;
    };
    /** Phase 2, Expansion: Expand a random unexpanded child node */
    MonteCarlo.prototype.expand = function (node) {
        var plays = node.unexpandedPlays();
        var index = Math.floor(Math.random() * plays.length);
        var play = plays[index];
        var childState = this.game.nextGameState(node.state, play);
        var childUnexpandedPlays = this.game.legalPlays(childState);
        var childNode = node.expand(play, childState, childUnexpandedPlays);
        this.nodes.set(childState.hash(), childNode);
        return childNode;
        // return childNode
    };
    /** Phase 3, Simulation: Play game to terminal state, return winner */
    MonteCarlo.prototype.simulate = function (node) {
        var state = node.state;
        var winner = this.game.winner(state);
        while (winner === null) {
            var plays = this.game.legalPlays(state);
            var play = plays[Math.floor(Math.random() * plays.length)];
            state = this.game.nextGameState(state, play);
            winner = this.game.winner(state);
        }
        return winner;
        // return winner
    };
    /** Phase 4, Backpropagation: Update ancestor statistics */
    MonteCarlo.prototype.backpropagate = function (node, winner) {
        while (node !== null) {
            node.n_plays += 1;
            // Parent's choice
            if (node.state.isPlayer(-winner)) {
                node.n_wins += 1;
            }
            node = node.parent;
        }
    };
    /** Get the best move from available statistics. */
    MonteCarlo.prototype.bestPlay = function (state, policy) {
        if (policy === void 0) { policy = "robust"; }
        this.makeNode(state);
        // If not all children are expanded, not enough information
        if (this.nodes.get(state.hash()).isFullyExpanded() === false) {
            throw new Error("Not enough information!");
        }
        var node = this.nodes.get(state.hash());
        var allPlays = node.allPlays();
        var bestPlay;
        // Most visits (robust child)
        if (policy === "robust") {
            var max = -Infinity;
            try {
                for (var allPlays_1 = __values(allPlays), allPlays_1_1 = allPlays_1.next(); !allPlays_1_1.done; allPlays_1_1 = allPlays_1.next()) {
                    var play = allPlays_1_1.value;
                    var childNode = node.childNode(play);
                    if (childNode.n_plays > max) {
                        bestPlay = play;
                        max = childNode.n_plays;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (allPlays_1_1 && !allPlays_1_1.done && (_a = allPlays_1.return)) _a.call(allPlays_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else if (policy === "max") {
            var max = -Infinity;
            try {
                for (var allPlays_2 = __values(allPlays), allPlays_2_1 = allPlays_2.next(); !allPlays_2_1.done; allPlays_2_1 = allPlays_2.next()) {
                    var play = allPlays_2_1.value;
                    var childNode = node.childNode(play);
                    var ratio = childNode.n_wins / childNode.n_plays;
                    if (ratio > max) {
                        bestPlay = play;
                        max = ratio;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (allPlays_2_1 && !allPlays_2_1.done && (_b = allPlays_2.return)) _b.call(allPlays_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return bestPlay;
        var e_2, _a, e_3, _b;
    };
    MonteCarlo.prototype.getStats = function (state) {
        var node = this.nodes.get(state.hash());
        var stats = {
            n_plays: node.n_plays,
            n_wins: node.n_wins,
            children: []
        };
        try {
            for (var _a = __values(node.children.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                if (child.node === null) {
                    stats.children.push({
                        play: child.play,
                        n_plays: null,
                        n_wins: null
                    });
                }
                else {
                    stats.children.push({
                        play: child.play,
                        n_plays: child.node.n_plays,
                        n_wins: child.node.n_wins
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return stats;
        var e_4, _c;
    };
    return MonteCarlo;
}());

//# sourceMappingURL=monte-carlo.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonteCarloNode; });
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/** Class representing a node in the search tree. */
var MonteCarloNode = /** @class */ (function () {
    function MonteCarloNode(parent, play, state, unexpandedPlays) {
        this.play = false;
        this.state = false;
        this.n_plays = 0;
        this.n_wins = 0;
        this.parent = false;
        this.children = false;
        this.play = play;
        this.state = state;
        // Monte Carlo stuff
        this.n_plays = 0;
        this.n_wins = 0;
        // Tree stuff
        this.parent = parent;
        this.children = new Map();
        try {
            for (var unexpandedPlays_1 = __values(unexpandedPlays), unexpandedPlays_1_1 = unexpandedPlays_1.next(); !unexpandedPlays_1_1.done; unexpandedPlays_1_1 = unexpandedPlays_1.next()) {
                var uplay = unexpandedPlays_1_1.value;
                this.children.set(uplay.hash(), { play: uplay, node: null });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (unexpandedPlays_1_1 && !unexpandedPlays_1_1.done && (_a = unexpandedPlays_1.return)) _a.call(unexpandedPlays_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
    }
    /**
     * Get the MonteCarloNode corresponding to the given play.
     * @param {number} play - The play leading to the child node.
     * @return {MonteCarloNode} The child node corresponding to the play given.
     */
    MonteCarloNode.prototype.childNode = function (play) {
        var child = this.children.get(play.hash());
        if (child === undefined) {
            throw new Error('No such play!');
        }
        else if (child.node === null) {
            throw new Error("Child is not expanded!");
        }
        return child.node;
    };
    /**
     * Expand the specified child play and return the new child node.
     * Add the node to the array of children nodes.
     * Remove the play from the array of unexpanded plays.
     * @param {Play} play - The play to expand.
     * @param {State} childState - The child state corresponding to the given play.
     * @param {Play[]} unexpandedPlays - The given child's unexpanded child plays; typically all of them.
     * @return {MonteCarloNode} The new child node.
     */
    MonteCarloNode.prototype.expand = function (play, childState, unexpandedPlays) {
        if (!this.children.has(play.hash())) {
            throw new Error("No such play!");
        }
        var childNode = new MonteCarloNode(this, play, childState, unexpandedPlays);
        this.children.set(play.hash(), { play: play, node: childNode });
        return childNode;
    };
    /**
     * Get all legal plays from this node.
     * @return {Play[]} All plays.
     */
    MonteCarloNode.prototype.allPlays = function () {
        var ret = [];
        try {
            for (var _a = __values(this.children.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                ret.push(child.play);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return ret;
        var e_2, _c;
    };
    /**
     * Get all unexpanded legal plays from this node.
     * @return {Play[]} All unexpanded plays.
     */
    MonteCarloNode.prototype.unexpandedPlays = function () {
        var ret = [];
        try {
            for (var _a = __values(this.children.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                if (child.node === null) {
                    ret.push(child.play);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return ret;
        var e_3, _c;
    };
    /**
     * Whether this node is fully expanded.
     * @return {boolean} Whether this node is fully expanded.
     */
    MonteCarloNode.prototype.isFullyExpanded = function () {
        try {
            for (var _a = __values(this.children.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                if (child.node === null) {
                    return false;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return true;
        var e_4, _c;
    };
    /**
     * Whether this node is terminal in the game tree, NOT INCLUSIVE of termination due to winning.
     * @return {boolean} Whether this node is a leaf in the tree.
     */
    MonteCarloNode.prototype.isLeaf = function () {
        if (this.children.size === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Get the UCB1 value for this node.
     * @param {number} biasParam - The square of the bias parameter in the UCB1 algorithm, defaults to 2.
     * @return {number} The UCB1 value of this node.
     */
    MonteCarloNode.prototype.getUCB1 = function (biasParam) {
        return (this.n_wins / this.n_plays) + Math.sqrt(biasParam * Math.log(this.parent.n_plays) / this.n_plays);
    };
    return MonteCarloNode;
}());

//# sourceMappingURL=monte-carlo-node.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Connect 4\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<section class="tictactoe ">\n\n            \n\n        <div class="col-12">    \n\n            <h2>Affrontement entre <span class="player1_name">Player 1</span> et <span class="player2_name">Player 2</span></h2> \n\n            <p>  \n\n            nice\n\n            </p>\n\n\n\n        </div>\n\n\n\n            \n\n    </section>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameArenaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GameArenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameArenaPage = /** @class */ (function () {
    function GameArenaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GameArenaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GameArenaPage');
    };
    GameArenaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-arena',template:/*ion-inline-start:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\game-arena\game-arena.html"*/'<!--\n  Generated template for the GameArenaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Game Arena</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>  \n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="centering" col-12 col-sm-8 col-md-6 col-xl-4>\n      \n        <connect4></connect4>\n\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n    \n</ion-content>\n'/*ion-inline-end:"C:\BouletAP\MyOwn\Interstellar_Final\Interstellar\src\pages\game-arena\game-arena.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GameArenaPage);
    return GameArenaPage;
}());

//# sourceMappingURL=game-arena.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map