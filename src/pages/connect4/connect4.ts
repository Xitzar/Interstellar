import { GameC4 as Game } from "./connect4a";
import { MonteCarlo } from "./monte-carlo";
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'connect4',
  templateUrl: 'connect4.html',
})
export class Connect4Game implements OnInit {
 

  items: any;
  currentPlayer:any;
  currentWinner:any;
  theBoard:any;
  game: Game;
  mcts: MonteCarlo;
  state: any;
  winner: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentPlayer = {
      color: "",
      name: "",
      move: ""
    };
  }

  ngOnInit(): void {
    this.startGame();
  }
 

  startGame() {
    this.game = new Game();
    this.mcts = new MonteCarlo(this.game);
    this.state = this.game.start();
    this.winner = this.game.winner(this.state);
    this.theBoard = this.state.board.map((row: any) => row.map((cell: any) => cell === -1 ? 2 : cell));
    this.playMove();
  }
   
  playMove(col?:any) {
    
    // From initial state, play games until end
    if( !this.winner ) {
      // console.log();
      // console.log('player: ' + (state.player === 1 ? 1 : 2));
      // console.log(state.board.map((row: any) => row.map((cell: any) => cell === -1 ? 2 : cell)));
      this.mcts.runSearch(this.state, 1);
      let stats = this.mcts.getStats(this.state);
      // console.log(util.inspect(stats, {showHidden: false, depth: null}));
      //console.log(stats);
      let play = this.mcts.bestPlay(this.state, 'robust');
    
      // Afficher ces coordonnees dans le board
      let playerId = this.state.player;
    
      if( playerId === 1 ) {
        this.currentPlayer.name = "Player 2";
        this.currentWinner = "l'ordinateur";
        this.currentPlayer.color = "orange";
        
      } else {
        this.currentPlayer.name = "l'ordinateur";
        this.currentWinner = "Player 2";
        this.currentPlayer.color = "purple";
    
      }
    
      if( col !== undefined ) {
        play.col = ""+col;
        for(let row=0;row<6;row++) {
          if( this.theBoard[row][col] === 0 ) {             
            play.row = row;              
          }
        }
      }
    
      this.state = this.game.nextGameState(this.state, play);
      this.winner = this.game.winner(this.state);
    
    
      this.theBoard = this.state.board.map((row: any) => row.map((cell: any) => cell === -1 ? 2 : cell));
    
      this.automatedMoveMaybe();
    } 
  }

  automatedMoveMaybe() {
  
    setTimeout( () => {
      if (this.currentPlayer.name === "l'ordinateur") {
        this.playMove();
      }
    }, 200);
  }

}
