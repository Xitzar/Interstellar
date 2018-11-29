<style>

    .tictactoe {
        border:1px solid #000;   
    }

    .tictactoe .cell {
        background-color: #DDD;
    }

    .tictactoe .board a {
        display:inline-block;
        line-height:30px;
        font-size:30px;
        background-color:#FFF;
    }

    .btn-start {
        border: 1px solid red;
        font-size:14px;
        padding:10px 20px;
        border-radius:6px;
    }

    #colophon {display:none;}

</style>

<section>
    <a href="javascript:;" class="btn btn-start">Démarrer une partie</a>
</section>


<section class="tictactoe hide">

        
    <div class="col-12">    
        <h2>Affrontement entre <span class="player1_name">Player 1</span> et <span class="player2_name">Player 2</span></h2>
        <h4>Au tour de <span class="currentPlayer_name">Player 1</span> de jouer (<span class="currentPlayer_piece">X</span>)</h4>
    </div>


    <table class="board">
        <?php for($x=0; $x<3; $x++): ?>
            <tr>   
                <?php for($y=0; $y<3; $y++): ?>

                    <td class="center">
                        <a href="javascript:;" class=" px2 px7" data-x="<?php echo $x ?>" data-y="<?php echo $y ?>">
                            <span class="cell_<?php echo $x."_".$y ?>">?</span>
                        </a>
                    </td>

                <?php endfor; ?>
            </tr>
        <?php endfor; ?>
    </table>
        

    <div class="col-12 center result hide">
        Le gagnant est : <span class="name"></span>
    </div>
</section>
