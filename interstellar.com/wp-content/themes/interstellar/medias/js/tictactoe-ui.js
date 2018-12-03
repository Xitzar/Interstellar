// 1.(ok) Commencer une nouvelle partie
// 2.(ok) Empecher de remplacer les cases jouées
// 3.(ok) Pièces affichées
// 4.(ok) Stop le jeu si gagnant
// 5. UI v2


function resetGame() {    
    var joueur1 = TicTacToe.initPlayer("APB", 1); // Factory
    var joueur2 = TicTacToe.initPlayer("Phil", 2);
    TicTacToe.initGame(joueur1, joueur2);
    TicTacToe.start();
}

function resetInterface() {
    jQuery('.tictactoe .result').addClass('hide');
    jQuery('.currentPlayer_name').text(TicTacToe.currentPlayer.name);
    jQuery('.currentPlayer_piece').text(TicTacToe.currentPlayer.getUIPiece());
    
    jQuery('.tictactoe a.case span').text('?');
}

jQuery( document ).ready(function($) {


    $('.btn-reset').on('click', function() {
        resetGame();
        resetInterface();
    });

    $('.btn-start').on('click', function() {
        resetGame();
        resetInterface();
        $(this).hide();    
        
        $('.player1_name').text(TicTacToe.joueurs[0].name);
        $('.player2_name').text(TicTacToe.joueurs[1].name);
        $('.tictactoe').removeClass('hide');
    });


    $('.tictactoe a.case').on('click', function() {
        
        if( TicTacToe.winner ) return false;
        

        var x = $(this).data('x');
        var y = $(this).data('y');

        
        if( ! TicTacToe.isUnclaimed(x,y) ) return false;
        
        TicTacToe.move(x,y);

        $(this).find('span').text( TicTacToe.currentPlayer.getUIPiece() );

        if( TicTacToe.hasWinner() ) {
            
            $('.tictactoe .result').removeClass('hide');
            $('.tictactoe .result .name').text(TicTacToe.currentPlayer.name);
            
        }
        else {            
            $('.currentPlayer_name').text(TicTacToe.currentPlayer.name);
            $('.currentPlayer_piece').text(TicTacToe.currentPlayer.getUIPiece());            
        }
    });

});