'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/** Class representing the game board. */
var Game = /** @class */ (function () {
    function Game() {
    }
    /** Generate and return the initial game state. */
    Game.prototype.start = function () {
        // TODO
        var state = false;
        return state;
    };
    /** Return the current player’s legal moves from given state. */
    Game.prototype.legalPlays = function (state) {
        // TODO
        var plays = false;
        return plays;
    };
    /** Advance the given state and return it. */
    Game.prototype.nextState = function (state, move) {
        // TODO
        var newState = false;
        var newState2 = state;
        var newState3 = move;
        return newState;
    };
    /** Return the winner of the game. */
    Game.prototype.winner = function (state) {
        // TODO
        var winner = false;
        return winner;
    };
    return Game;
}());
exports.Game = Game;

'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var GamePlay = (function () {
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
exports.GamePlay = GamePlay;

'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var GameState = (function () {
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
exports.GameState = GameState;

'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var util = require('util');
var connect4_1 = require("./connect4/connect4");
var monte_carlo_1 = require("./monte-carlo");
var game = new connect4_1.Game_C4();
var mcts = new monte_carlo_1.MonteCarlo(game);
var state = game.start();
var winner = game.winner(state);
while (winner === null) {
    console.log();
    console.log("player: " + (state.player === 1 ? 1 : 2));
    console.log(state.board.map(function (row) { return row.map(function (cell) { return cell === -1 ? 2 : cell; }); }));
    mcts.runSearch(state, 1);
    var stats = mcts.getStats(state);
    console.log(util.inspect(stats, { showHidden: false, depth: null }));
    var play = mcts.bestPlay(state, "robust");
    console.log("chosen play: " + util.inspect(play, { showHidden: false, depth: null }));
    state = game.nextGameState(state, play);
    winner = game.winner(state);
}
console.log();
console.log("winner: " + (winner === 1 ? 1 : 2));
console.log(state.board.map(function (row) { return row.map(function (cell) { return cell === -1 ? 2 : cell; }); }));

'use strict';
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
Object.defineProperty(exports, "__esModule", { value: true });
var MonteCarloNode = (function () {
    function MonteCarloNode(parent, play, state, unexpandedPlays) {
        var e_1, _a;
        this.play = false;
        this.state = false;
        this.n_plays = 0;
        this.n_wins = 0;
        this.parent = false;
        this.children = false;
        this.play = play;
        this.state = state;
        this.n_plays = 0;
        this.n_wins = 0;
        this.parent = parent;
        this.children = new Map();
        try {
            for (var unexpandedPlays_1 = __values(unexpandedPlays), unexpandedPlays_1_1 = unexpandedPlays_1.next(); !unexpandedPlays_1_1.done; unexpandedPlays_1_1 = unexpandedPlays_1.next()) {
                var play_1 = unexpandedPlays_1_1.value;
                this.children.set(play_1.hash(), { play: play_1, node: null });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (unexpandedPlays_1_1 && !unexpandedPlays_1_1.done && (_a = unexpandedPlays_1.return)) _a.call(unexpandedPlays_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
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
    MonteCarloNode.prototype.expand = function (play, childState, unexpandedPlays) {
        if (!this.children.has(play.hash()))
            throw new Error("No such play!");
        var childNode = new MonteCarloNode(this, play, childState, unexpandedPlays);
        this.children.set(play.hash(), { play: play, node: childNode });
        return childNode;
    };
    MonteCarloNode.prototype.allPlays = function () {
        var e_2, _a;
        var ret = [];
        try {
            for (var _b = __values(this.children.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                ret.push(child.play);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return ret;
    };
    MonteCarloNode.prototype.unexpandedPlays = function () {
        var e_3, _a;
        var ret = [];
        try {
            for (var _b = __values(this.children.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child.node === null)
                    ret.push(child.play);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return ret;
    };
    MonteCarloNode.prototype.isFullyExpanded = function () {
        var e_4, _a;
        try {
            for (var _b = __values(this.children.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child.node === null)
                    return false;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return true;
    };
    MonteCarloNode.prototype.isLeaf = function () {
        if (this.children.size === 0)
            return true;
        else
            return false;
    };
    MonteCarloNode.prototype.getUCB1 = function (biasParam) {
        return (this.n_wins / this.n_plays) + Math.sqrt(biasParam * Math.log(this.parent.n_plays) / this.n_plays);
    };
    return MonteCarloNode;
}());
exports.MonteCarloNode = MonteCarloNode;

'use strict';
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
Object.defineProperty(exports, "__esModule", { value: true });
var monte_carlo_node_1 = require("./monte-carlo-node");
var MonteCarlo = (function () {
    function MonteCarlo(game, UCB1ExploreParam) {
        if (UCB1ExploreParam === void 0) { UCB1ExploreParam = 2; }
        this.game = false;
        this.UCB1ExploreParam = false;
        this.game = game;
        this.UCB1ExploreParam = UCB1ExploreParam;
        this.nodes = new Map();
    }
    MonteCarlo.prototype.makeNode = function (state) {
        if (!this.nodes.has(state.hash())) {
            var unexpandedPlays = this.game.legalPlays(state).slice();
            var node = new monte_carlo_node_1.MonteCarloNode(null, null, state, unexpandedPlays);
            this.nodes.set(state.hash(), node);
        }
    };
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
    MonteCarlo.prototype.select = function (state) {
        var e_1, _a;
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
    };
    MonteCarlo.prototype.expand = function (node) {
        var plays = node.unexpandedPlays();
        var index = Math.floor(Math.random() * plays.length);
        var play = plays[index];
        var childState = this.game.nextState(node.state, play);
        var childUnexpandedPlays = this.game.legalPlays(childState);
        var childNode = node.expand(play, childState, childUnexpandedPlays);
        this.nodes.set(childState.hash(), childNode);
        return childNode;
    };
    MonteCarlo.prototype.simulate = function (node) {
        var state = node.state;
        var winner = this.game.winner(state);
        while (winner === null) {
            var plays = this.game.legalPlays(state);
            var play = plays[Math.floor(Math.random() * plays.length)];
            state = this.game.nextState(state, play);
            winner = this.game.winner(state);
        }
        return winner;
    };
    MonteCarlo.prototype.backpropagate = function (node, winner) {
        while (node !== null) {
            node.n_plays += 1;
            if (node.state.isPlayer(-winner)) {
                node.n_wins += 1;
            }
            node = node.parent;
        }
    };
    MonteCarlo.prototype.bestPlay = function (state, policy) {
        if (policy === void 0) { policy = "robust"; }
        var e_2, _a, e_3, _b;
        this.makeNode(state);
        if (this.nodes.get(state.hash()).isFullyExpanded() === false)
            throw new Error("Not enough information!");
        var node = this.nodes.get(state.hash());
        var allPlays = node.allPlays();
        var bestPlay;
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
    };
    MonteCarlo.prototype.getStats = function (state) {
        var e_4, _a;
        var node = this.nodes.get(state.hash());
        var stats = {
            n_plays: node.n_plays,
            n_wins: node.n_wins,
            children: []
        };
        try {
            for (var _b = __values(node.children.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child.node === null)
                    stats.children.push({
                        play: child.play,
                        n_plays: null,
                        n_wins: null
                    });
                else
                    stats.children.push({
                        play: child.play,
                        n_plays: child.node.n_plays,
                        n_wins: child.node.n_wins
                    });
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return stats;
    };
    return MonteCarlo;
}());
exports.MonteCarlo = MonteCarlo;

'use strict';
exports.__esModule = true;
/** Class representing a state transition. */
var GamePlay = /** @class */ (function () {
    function GamePlay(row, col) {
        this.row = row;
        this.col = col;
    }
    GamePlay.prototype.hash = function () {
        return this.row.toString() + "," + this.col.toString();
    };
    return GamePlay;
}());
exports.GamePlay = GamePlay;

'use strict';
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
Object.defineProperty(exports, "__esModule", { value: true });
var gamestate_1 = require("./../gamestate");
var gameplay_1 = require("./../gameplay");
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
var Game_C4 = (function () {
    function Game_C4() {
    }
    Game_C4.prototype.start = function () {
        var newBoard = boardPrototype.map(function (row) { return row.slice(); });
        return new gamestate_1.GameState([], newBoard, 1);
    };
    Game_C4.prototype.legalPlays = function (state) {
        var legalPlays = [];
        for (var col = 0; col < N_COLS; col++) {
            for (var row = N_ROWS - 1; row >= 0; row--) {
                if (state.board[row][col] == 0) {
                    legalPlays.push(new gameplay_1.GamePlay(row, col));
                    break;
                }
            }
        }
        return legalPlays;
    };
    Game_C4.prototype.nextGameState = function (state, play) {
        var newHistory = state.playHistory.slice();
        newHistory.push(play);
        var newBoard = state.board.map(function (row) { return row.slice(); });
        newBoard[play.row][play.col] = state.player;
        var newPlayer = -state.player;
        return new gamestate_1.GameState(newHistory, newBoard, newPlayer);
    };
    Game_C4.prototype.winner = function (state) {
        var e_1, _a;
        if (!isNaN(state.board[0].reduce(function (acc, cur) { return cur == 0 ? NaN : acc + cur; })))
            return 0;
        var checkBoards = new Map();
        checkBoards.set("horiz", checkPrototype.map(function (row) { return row.slice(); }));
        checkBoards.set("verti", checkPrototype.map(function (row) { return row.slice(); }));
        checkBoards.set("ldiag", checkPrototype.map(function (row) { return row.slice(); }));
        checkBoards.set("rdiag", checkPrototype.map(function (row) { return row.slice(); }));
        for (var row = 0; row < N_ROWS; row++) {
            for (var col = 0; col < N_COLS; col++) {
                var cell = state.board[row][col];
                try {
                    for (var checkBoards_1 = __values(checkBoards), checkBoards_1_1 = checkBoards_1.next(); !checkBoards_1_1.done; checkBoards_1_1 = checkBoards_1.next()) {
                        var _b = __read(checkBoards_1_1.value, 2), key = _b[0], val = _b[1];
                        var acc = void 0;
                        switch (key) {
                            case "horiz":
                                acc = val[row + 1][col];
                                break;
                            case "verti":
                                acc = val[row][col + 1];
                                break;
                            case "ldiag":
                                acc = val[row][col];
                                break;
                            case "rdiag":
                                acc = val[row][col + 2];
                                break;
                        }
                        val[row + 1][col + 1] = cell;
                        if (cell < 0 && acc < 0 || cell > 0 && acc > 0) {
                            val[row + 1][col + 1] += acc;
                        }
                        if (val[row + 1][col + 1] == 4)
                            return 1;
                        if (val[row + 1][col + 1] == -4)
                            return -1;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (checkBoards_1_1 && !checkBoards_1_1.done && (_a = checkBoards_1.return)) _a.call(checkBoards_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return null;
    };
    return Game_C4;
}());
exports.Game_C4 = Game_C4;

'use strict';
var State = require('./state-c4.js');
var Play = require('./play-c4.js');
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
/** Class representing the game. */
var Game_C4 = /** @class */ (function () {
    function Game_C4() {
    }
    /** Generate and return the initial game state. */
    Game_C4.prototype.start = function () {
        var newBoard = boardPrototype.map(function (row) { return row.slice(); });
        return new State([], newBoard, 1);
    };
    /** Return the current player's legal plays from given state. */
    Game_C4.prototype.legalPlays = function (state) {
        var legalPlays = [];
        for (var col = 0; col < N_COLS; col++) {
            for (var row = N_ROWS - 1; row >= 0; row--) {
                if (state.board[row][col] == 0) {
                    legalPlays.push(new Play(row, col));
                    break;
                }
            }
        }
        return legalPlays;
    };
    /** Advance the given state and return it. */
    Game_C4.prototype.nextState = function (state, play) {
        var newHistory = state.playHistory.slice(); // 1-deep copy
        newHistory.push(play);
        var newBoard = state.board.map(function (row) { return row.slice(); });
        newBoard[play.row][play.col] = state.player;
        var newPlayer = -state.player;
        return new State(newHistory, newBoard, newPlayer);
    };
    /** Return the winner of the game. */
    Game_C4.prototype.winner = function (state) {
        // if board is full, there's no winner
        if (!isNaN(state.board[0].reduce(function (acc, cur) { return cur == 0 ? NaN : acc + cur; })))
            return 0;
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
                for (var _i = 0, checkBoards_1 = checkBoards; _i < checkBoards_1.length; _i++) {
                    var _a = checkBoards_1[_i], key = _a[0], val = _a[1];
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
                    if (val[row + 1][col + 1] == 4)
                        return 1;
                    if (val[row + 1][col + 1] == -4)
                        return -1;
                }
            }
        }
        return null;
    };
    return Game_C4;
}());

"use strict";
exports.__esModule = true;
var game_1 = require("./game");
var monte_carlo_1 = require("./monte-carlo");
// source
// https://medium.com/@quasimik/implementing-monte-carlo-tree-search-in-node-js-5f07595104df
var game = new game_1.Game();
var mcts = new monte_carlo_1.MonteCarlo(); // game
var state = game.start();
var winner = game.winner(state);
// From initial state, take turns to play game until someone wins
while (winner === null) {
    mcts.runSearch(state, 1);
    var play = mcts.bestPlay(state);
    state = game.nextState(state, play);
    winner = game.winner(state);
}
console.log(winner);

/** Class representing a node in the search tree. */
var MonteCarloNode = /** @class */ (function () {
    function MonteCarloNode() {
    }
    return MonteCarloNode;
}());

"use strict";
exports.__esModule = true;
var MonteCarlo = /** @class */ (function () {
    function MonteCarlo() {
    }
    /** From given state, repeatedly run MCTS to build statistics. */
    MonteCarlo.prototype.runSearch = function (state, timeout) {
        // TODO
    };
    /** Get the best move from available statistics. */
    MonteCarlo.prototype.bestPlay = function (state) {
        // TODO
        // return play
    };
    return MonteCarlo;
}());
exports.MonteCarlo = MonteCarlo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = (function () {
    function Game() {
    }
    Game.prototype.start = function () {
        var state = false;
        return state;
    };
    Game.prototype.legalPlays = function (state) {
        var plays = false;
        return plays;
    };
    Game.prototype.nextState = function (state, move) {
        var newState = false;
        var newState2 = state;
        var newState3 = move;
        return newState;
    };
    Game.prototype.winner = function (state) {
        var winner = false;
        return winner;
    };
    return Game;
}());
exports.Game = Game;
