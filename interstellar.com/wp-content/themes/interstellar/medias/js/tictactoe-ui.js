// Revision #1
// 1.(ok) Commencer une nouvelle partie
// 2.(ok) Empecher de remplacer les cases jouées
// 3.(ok) Pièces affichées
// 4.(ok) Stop le jeu si gagnant

// Revision #2
// 1. (ok)Better UI
// 2. (ok)Draw Handling sucks
// 3. (cancelled)Animations
// 4. (cancelled)Nom des joueurs au debut d'une game
// 5. (cancelled)Garder le score entre les games
// 1. AI !!
// 1. AI !!
// 1. AI !!
// 1. AI !!
// 1. AI !!


// Revision #3
// 2. Multiplayer
// 3. Persistance des scores
// 4. Version mobile


function initGame() {  
    var tictactoe = new TicTacToe();
    tictactoe.initPlayer(0, "APB", 1);
    tictactoe.initPlayer(1, "Phil", 2);
    BoardGame.game = tictactoe;
}

function resetInterface() {
    BoardGame.game.initGame();
    BoardGame.game.start();
    jQuery('.tictactoe .result').addClass('hide');
    jQuery('.currentPlayer_name').text(BoardGame.game.currentPlayer.name);
    jQuery('.currentPlayer_piece').text(BoardGame.game.currentPlayer.getUIPiece());    
    jQuery('.tictactoe a.case span').text('?');
}

function autoPlayGame() {    
    var newTicTacToe = new TicTacToe();
    newTicTacToe.initFromClone( BoardGame.game );
    
    var bot = new TicTacToeBot(); 
    bot.game = newTicTacToe;
    
    var move = bot.getNextMove();
    if( move ) {
        doMove(move[0], move[1]);
    }
}

function doMove(x,y) {
    
    BoardGame.game.move(x,y);

    jQuery("#case-"+x+"_"+y).find('span').text( BoardGame.game.currentPlayer.getUIPiece() );

    if( BoardGame.game.hasWinner() ) {
        
        if( BoardGame.game.winner == -1 ) {
            var nom_a_afficher = "Draw !";
        }
        else {
            var nom_a_afficher = "Le gagnant est : " + BoardGame.game.winner.name;
        }


        jQuery('.tictactoe .result').removeClass('hide');
        jQuery('.tictactoe .result .name').text(nom_a_afficher);

    }
    else {            

        BoardGame.game.changeToNextPlayer();   

        jQuery('.currentPlayer_name').text(BoardGame.game.currentPlayer.name);
        jQuery('.currentPlayer_piece').text(BoardGame.game.currentPlayer.getUIPiece());            
    }
}

jQuery( document ).ready(function($) {


    $('.btn-reset').on('click', function() {
        resetInterface();
    });

    $('.btn-start').on('click', function() {
        initGame();
        resetInterface();
        
        $('.btn-start').hide();    
        
        $('.player1_name').text(BoardGame.game.joueurs[0].name);
        $('.player2_name').text(BoardGame.game.joueurs[1].name);
        $('.tictactoe').removeClass('hide');

        if( $(this).hasClass('ai') ) {
            BoardGame.gameType = 1;
        }
    });


    $('.tictactoe a.case').on('click', function() {
        
        if( BoardGame.game.winner ) return false;        

        var x = $(this).data('x');
        var y = $(this).data('y');
        
        if( ! BoardGame.game.isUnclaimed(x,y) ) return false;
        
        doMove(x,y);

        if( BoardGame.gameType == 1 && !BoardGame.game.hasWinner() ) {
            autoPlayGame();
        }
        
    });

});