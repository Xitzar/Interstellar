var TicTacToe = {
    
    board : [],
    joueurs : [],    
    currentPlayer : false,
    winner : false,   
    
    move : function(x,y) {
        
        // recuperer la valeur associe au current player
        movepiece = this.currentPlayer['piece'];        
        
        // mettre cette valeur à x,y dans le board
        if(this.isUnclaimed(x,y)){
            this.board[x][y] = movepiece;
        }
    },
    isUnclaimed : function(x,y){
        if(this.board[x][y] == 30){
            return true;
        }
        else{
            return false;
        }
    },
    initPlayer : function(name, piece) {
        var joueur = {
            "name" : name,
            "piece" : piece,
            getUIPiece : function() {
                return this.piece == 2 ? 'X' : "O";
            }
        };
        return joueur;        
    },
    initGame : function(joueur1, joueur2){
       
        this.winner = false;
        this.currentPlayer = false;
        this.joueurs = [];
        this.joueurs.push(joueur1);
        this.joueurs.push(joueur2);

        // reset le board
        for(var i=0; i<3;i++) {
            
            this.board[i] = [];
            for(var j=0; j<3; j++) {
                this.board[i][j] = 30;
            }                
        }                                                                                                    
    },
    start : function() {

        //start the game, get a random current player in the players array        
        this.currentPlayer = this.joueurs[Math.floor(Math.random()*this.joueurs.length)];
    },

    hasWinner : function() {

        if( this.evaluate() ) {
            // il y a un gagnant
            return true;
        }
        
        this.changeToNextPlayer();        
        return false;
    },
    changeToNextPlayer : function() {

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
    },
    test : function(value) {

        return (this.board[0][0]+this.board[0][1]+this.board[0][2] == value // row 1
            || this.board[0][0]+this.board[1][0]+this.board[2][0] == value // col 1
            || this.board[0][0]+this.board[1][1]+this.board[2][2] == value // diag1
            || this.board[1][0]+this.board[1][1]+this.board[1][2] == value // row 2
            || this.board[2][0]+this.board[2][1]+this.board[2][2] == value  //row3
            || this.board[0][1]+this.board[1][1]+this.board[2][1] == value // col2
            || this.board[0][2]+this.board[1][2]+this.board[2][2] == value  // col3
            || this.board[0][2]+this.board[1][1]+this.board[2][0] == value); //diag2
    },
    evaluate : function() {

        if( this.test(3) ) {
                this.winner = this.joueurs[0];
                return true;
        }
        else if( this.test(6) ){
                this.winner = this.joueurs[1];
                return true;
        }
        else if(this.board[0][0]+this.board[0][1]+this.board[0][2]+this.board[1][0]+this.board[1][1]+this.board[1][2]+
            this.board[2][0]+this.board[2][1]+this.board[2][2] == 13 || this.board[0][0]+this.board[0][1]+this.board[0][2]+
            this.board[1][0]+this.board[1][1]+this.board[1][2]+this.board[2][0]+this.board[2][1]+this.board[2][2] == 14){
                this.winner = "Draw !";
                return true;
        }
        else{
            return false;
        }        
    }
};
