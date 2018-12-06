
var TicTacToe = function() {
    
    this.board = [];
    this.joueurs = [];
    this.currentPlayer = false;
    this.winner = false;
    this.lastMove = [];    
};

TicTacToe.prototype.initFromClone = function(clone){
        var board = clone.board;
        var joueurs = clone.joueurs;
        var currentPlayer = clone.currentPlayer;
        this.board = cloneBoard(board);
        this.joueurs = joueurs;
        this.currentPlayer = currentPlayer;
};

TicTacToe.prototype.move = function(x,y){
        // recuperer la valeur associe au current player
        movepiece = this.currentPlayer['piece'];        
        
        // mettre cette valeur à x,y dans le board
        if(this.isUnclaimed(x,y)){
            this.board[x][y] = movepiece;
            this.lastMove = [x,y];
        }
};    

TicTacToe.prototype.isUnclaimed = function(x,y){
    if(this.board[x][y] == 30){
        return true;
    }
    else{
        return false;
    }
};
TicTacToe.prototype.initPlayer = function(id, name, piece) { 
    var joueur = {
        "id" : id,
        "name" : name,
        "piece" : piece,
        getUIPiece : function() {
            return this.piece == 2 ? 'X' : "O";
        }
    };
    this.joueurs.push(joueur);
};
      

TicTacToe.prototype.initGame = function(){
       
    this.winner = false;
    this.currentPlayer = false;

    // reset le board
    this.resetBoard();                                                                                                  
};

TicTacToe.prototype.resetBoard = function() {
       
    var board = [];

    // reset le board
    for(var i=0; i<3;i++) {        
        board[i] = [];
        for(var j=0; j<3; j++) {
            board[i][j] = 30;
        }                
    }   
    this.board = board;                                                                                                 
};

function cloneBoard(pboard) {
       
    var board = [];

    // reset le board
    for(var i=0; i<3;i++) {        
        board[i] = [];
        for(var j=0; j<3; j++) {
            board[i][j] = pboard[i][j];
        }                
    }   
    return board;                                                                                                 
};


TicTacToe.prototype.start = function() {

    //start the game, get a random current player in the players array        
    this.currentPlayer = this.joueurs[Math.floor(Math.random()*this.joueurs.length)];
};
TicTacToe.prototype.hasWinner = function() {

    if( this.evaluate() ) {
        // il y a un gagnant
        return true;
    }
         
    return false;
};
TicTacToe.prototype.changeToNextPlayer =  function() {

    if( this.joueurs.length == 2 ) {
        
        // changer le currentPlayer pour lautre joueur
        if(this.currentPlayer.name == this.joueurs[0].name){
            var joueur = this.joueurs[1];
            this.currentPlayer = joueur;
        }
        else if(this.currentPlayer.name == this.joueurs[1].name){
            var joueur = this.joueurs[0];
            this.currentPlayer = joueur;
        }               
    }   
};
TicTacToe.prototype.test = function(value) {

    return (this.board[0][0]+this.board[0][1]+this.board[0][2] == value // row 1
        || this.board[0][0]+this.board[1][0]+this.board[2][0] == value // col 1
        || this.board[0][0]+this.board[1][1]+this.board[2][2] == value // diag1
        || this.board[1][0]+this.board[1][1]+this.board[1][2] == value // row 2
        || this.board[2][0]+this.board[2][1]+this.board[2][2] == value  //row3
        || this.board[0][1]+this.board[1][1]+this.board[2][1] == value // col2
        || this.board[0][2]+this.board[1][2]+this.board[2][2] == value  // col3
        || this.board[0][2]+this.board[1][1]+this.board[2][0] == value); //diag2
};
    
TicTacToe.prototype.evaluate = function() {

    if( this.test(3) ) {
            this.winner = this.joueurs[0];
            return true;
    }
    else if( this.test(6) ){
            this.winner = this.joueurs[1];
            return true;
    }
    else if(this.board[0][0]+this.board[0][1]+this.board[0][2]+
        this.board[1][0]+this.board[1][1]+this.board[1][2]+
        this.board[2][0]+this.board[2][1]+this.board[2][2] == 13
        || this.board[0][0]+this.board[0][1]+this.board[0][2]+
        this.board[1][0]+this.board[1][1]+this.board[1][2]+
        this.board[2][0]+this.board[2][1]+this.board[2][2] == 14) {
            this.winner = -1;
            return true;
    }
    else{
        return false;
    }        
};
TicTacToe.prototype.hasWinner = function() {

    if( this.evaluate() ) {
        // il y a un gagnant
        return true;
    }
         
    return false;
};