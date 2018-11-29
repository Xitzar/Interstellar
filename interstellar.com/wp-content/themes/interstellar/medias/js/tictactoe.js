
// // Initialiser les 2 joueurs
// var joueur1 = TicTacToe.initPlayer("APB", "O"); // Factory
// var joueur2 = TicTacToe.initPlayer("Phil", "X");

// var game = TicTacToe.initGame(joueur1, joueur2);

// game.start();

// while( !game.hasWinner() ) {

//     //var nextMove = [0,0];
//     //game.move(0,0);
// }

// var winner = game.getWinner();



var TicTacToe = {
    
    board : [],
    joueurs : [],    
    currentPlayer : false,
    winner : [],   
    
    move : function(x,y) {
        
        // recuperer la valeur associe au current player
        movepiece = this.currentPlayer(piece)        
        
        // mettre cette valeur à x,y dans le board
        this.board[x,y] = movepiece

    },  

    initPlayer : function(name, piece) {
        var joueur = {
            "name" : name,
            "piece" : piece,
        };
        return joueur;        
    },
    initGame : function(joueur1, joueur2){
       
        this.joueurs.push(joueur1);
        this.joueurs.push(joueur2);

        // reset le board
        for(var i=0; i<2;i++) {
            for(var j=0; j<2; j++) {
                this.board(i,j) = 0;
            }                
        }                                                                                                    
    },
    start : function(joueurs){
        currentPlayer = this.joueurs[Math.floor(Math.random()*this.joueurs.lenght)];
    },

    hasWinner : function() {

        if( this.evaluate() ) {
            // il y a un gagnant
        }

        this.changeToNextPlayer();        
        return false;
    },
    changeToNextPlayer : function() {
        
        // changer le currentPlayer pour lautre joueur
        if(this.currentPlayer == this.joueur1){
            this.currentPlayer = this.joueur2;
        }
        else{
            this.currentPlayer = this.joueur1;
        }
    },
    evaluate : function() {
        if(this.board[0,0]+this.board[0,1]+this.board[0,2] == 3 || this.board[0,0]+this.board[1,0]+this.board[2,0] == 3
            || this.board[0,0]+this.board[1,1]+this.board[2,2] == 3 || this.board[1,0]+this.board[1,1]+this.board[1,2] == 3
            || this.board[2,0]+this.board[2,1]+this.board[2,2] == 3 || this.board[0,1]+this.board[1,1]+this.board[2,1] == 3
            || this.board[0,2]+this.board[1,2]+this.board[2,2] == 3 || this.board[0,2]+this.board[1,1]+this.board[2,0] == 3) {
                this.winner = joueur1
                return true;
        }
        else if(this.board[0,0]+this.board[0,1]+this.board[0,2] == 6 || this.board[0,0]+this.board[1,0]+this.board[2,0] == 6
            || this.board[0,0]+this.board[1,1]+this.board[2,2] == 6 || this.board[1,0]+this.board[1,1]+this.board[1,2] == 6
            || this.board[2,0]+this.board[2,1]+this.board[2,2] == 6 || this.board[0,1]+this.board[1,1]+this.board[2,1] == 6
            || this.board[0,2]+this.board[1,2]+this.board[2,2] == 6 || this.board[0,2]+this.board[1,1]+this.board[2,0] == 6){
                this.winner = joueur2
                return true;
        }
        else if(this.board[0,0]+this.board[0,1]+this.board[0,2]+this.board[1,0]+this.board[1,1]+this.board[1,2]+
            this.board[2,0]+this.board[2,1]+this.board[2,2] == 13 || this.board[0,0]+this.board[0,1]+this.board[0,2]+
            this.board[1,0]+this.board[1,1]+this.board[1,2]+this.board[2,0]+this.board[2,1]+this.board[2,2] == 14){
                this.winner = "Draw !"
                return true;
        }
        else{
            return false;
        }        
    }
};

var Toolbox = {

    getRandomInt : function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
};