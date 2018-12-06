/*
*
*   1. Boucler les x,y
    2. Si unclaimed, créer un nouveau root avec move(x,y)
    3. Évaluer l'état du board pour tous les moves 
        * Si gagnant / perdant, score infini
    4. Recommencer pour tous les moves de l'adversaire
        * Si gagnant / perdant, score infini
    5. Fin du jeu

*
*
*   4. faire des ifs
**/
var iudhqiuwdhwiqudhqwd=0;


var TicTacToeBot = function() {        
    this.game = [];
};

TicTacToeBot.prototype.evaluateGame = function(gameTree) {
    var score = 0; // draw
    if( gameTree.currentGame.winner === -1 ) {
        
    }
    else if( gameTree.currentGame.winner ) {
        if( gameTree.currentGame.winner.id == this.game.currentPlayer.id ) { // 23 ms   0,4ms 
            score = 99999;
        }
        else {
            score = -99999;
        }
    }
    else {
        for(var i=0;i<gameTree.nextMoves.length;i++) {
            score += this.evaluateGame(gameTree.nextMoves[i]);
        }
    }
    return score;
};

TicTacToeBot.prototype.getBestMove = function(gameTree)  {

    var bestMove = false;
    var bestScore = 0;
    for(var i=0;i<gameTree.nextMoves.length;i++) {

        var move = gameTree.nextMoves[i].currentGame.lastMove;
        
        var gameScore = this.evaluateGame(gameTree.nextMoves[i]);            
        
        if( gameScore >= bestScore ) {
            bestScore = gameScore;
            bestMove = move;
        }
    }

    return bestMove;
};

TicTacToeBot.prototype.getNextMove = function()  {
    var gameTree = this.createGameTree(this.game);
    console.log(gameTree);
    var bestMove = this.getBestMove(gameTree);
    console.log(bestMove);
    return bestMove;
};

TicTacToeBot.prototype.createGameTree = function(currentGame, nodefined) {
    var game = currentGame;
    var output = {
        currentGame : game,
        nextMoves : []
    };
    // creer les prochains moves
    for(var x=0; x<3;x++) {
        for(var y=0; y<3; y++) {                    
            if( game.isUnclaimed(x,y) ) {  

                //console.log("isUnclaimed (" + x + ", " + y+ ")");
                                    
                var newTicTacToe = new TicTacToe();
                newTicTacToe.initFromClone(game);
                newTicTacToe.move(x,y);
                
                if( !newTicTacToe.hasWinner()) {
                    //console.log("NO WINNER  (" + x + ", " + y+ ")");
                    newTicTacToe.changeToNextPlayer();
                    //var depthTree = this.createGameTree(newTicTacToe, false);
                    var depthTree = {
                        currentGame : newTicTacToe,
                        nextMoves : []
                    }
                    output.nextMoves.push(depthTree);
                }            
                else {
                    //console.log("WINNER (" + x + ", " + y+ ")");
                    //console.log(newTicTacToe);
                }   
            }
            else {
                //console.log("CLAIMED (" + x + ", " + y+ ")");
            }
        }                
    }  
    return output;
};