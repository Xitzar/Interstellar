
<section>
    <a href="javascript:;" class="btn btn-start solo">Démarrer une partie SOLO</a>
    <a href="javascript:;" class="btn btn-start ai">Démarrer une partie AI</a>
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
                        <a href="javascript:;" id="case-<?php echo $x ?>_<?php echo $y ?>" class="case px2 px7" data-x="<?php echo $x ?>" data-y="<?php echo $y ?>">
                            <span class="cell_<?php echo $x."_".$y ?>">?</span>
                        </a>
                    </td>

                <?php endfor; ?>
            </tr>
        <?php endfor; ?>
    </table>
        
    <div class="col-12 center result hide">
        <span class="name"></span> <a href="javascript:;" class="btn btn-reset"><i class="fa fa-refresh" aria-hidden="true"></i> Reset</a>
    </div>
</section>
