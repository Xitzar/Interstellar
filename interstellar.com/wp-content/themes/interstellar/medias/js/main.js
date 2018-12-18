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
//module.exports = Game

/** Class representing a node in the search tree. */
var MonteCarloNode = /** @class */ (function () {
    function MonteCarloNode(parent, play, state, unexpandedPlays) {
        this.play = play;
        this.state = state;
        // Monte Carlo stuff
        this.n_plays = 0;
        this.n_wins = 0;
        // Tree stuff
        this.parent = parent;
        this.children = new Map();
        for (var _i = 0, unexpandedPlays_1 = unexpandedPlays; _i < unexpandedPlays_1.length; _i++) {
            var play_1 = unexpandedPlays_1[_i];
            this.children.set(play_1.hash(), { play: play_1, node: null });
        }
    }
    return MonteCarloNode;
}());

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
