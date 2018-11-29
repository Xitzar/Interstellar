function resetGame() {
    // // Initialiser les 2 joueurs
    var joueur1 = TicTacToe.initPlayer("APB", 1); // Factory
    var joueur2 = TicTacToe.initPlayer("Phil", 2);
    TicTacToe.initGame(joueur1, joueur2);
    TicTacToe.start();
}


jQuery( document ).ready(function($) {

  
    $('.btn-start').on('click', function() {
        resetGame();
        $(this).hide();

        $('.player1_name').text(TicTacToe.joueurs[0].name);
        $('.player2_name').text(TicTacToe.joueurs[1].name);        
        $('.currentPlayer_name').text(TicTacToe.currentPlayer.name);
        $('.currentPlayer_piece').text(TicTacToe.currentPlayer.piece);

        $('.tictactoe').removeClass('hide');
    });


    $('.tictactoe a').on('click', function() {
        
        var x = $(this).data('x');
        var y = $(this).data('y');
        
        TicTacToe.move(x,y);

        $(this).find('span').text( TicTacToe.currentPlayer.getUIPiece() );

        if( TicTacToe.hasWinner() ) {
            
            $('.tictactoe .result').removeClass('hide');
            $('.tictactoe .result .name').text(TicTacToe.currentPlayer.name);
        }
        else {            
            $('.currentPlayer_name').text(TicTacToe.currentPlayer.name);
            $('.currentPlayer_piece').text(TicTacToe.currentPlayer.piece);            
        }
    });

});