import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { GameC4 as Game } from "./connect4a";
//import { MonteCarlo } from "./monte-carlo";

/*
  Generated class for the ArenaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArenaServiceProvider {

  // game: Game;
  // mcts: MonteCarlo;
  // state: any;
  // winner: Number;

  constructor(public http: HttpClient) {
    console.log('Hello ArenaServiceProvider Provider');
  }
  /*

  resetGame() {

  }

  initGame(gameType) {
    this.startGame();
    if ( gameType === 3 ) {
      this.playMove();
    }
  }
  

  
  startGame() {
    
    this.game = new Game();
    this.mcts = new MonteCarlo(this.game);
    this.state = this.game.start();
    this.winner = this.game.winner(this.state);
    this.theBoard = this.state.board.map((row: any) => row.map((cell: any) => cell === -1 ? 2 : cell));
    
    this.setupRandomPlayer();
  }

  
   
  playMove(col?:any) {
        
    // From initial state, play games until end
    if( !this.winner ) {
      
      this.mcts.runSearch(this.state, 1);
      let play = this.mcts.bestPlay(this.state, 'robust');

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
    

      let currentPlayerId = this.state.player;
      
      for( let user of this.players ) {
        if( user.id === currentPlayerId ) {
          this.currentPlayer = user;
        }
        else {
          this.currentWinner = user;
        }
      }

      if( this.currentPlayer.isBot ) {
        setTimeout( () => {
          this.playMove();
        }, 200);
      }
    }
  }*/
}
