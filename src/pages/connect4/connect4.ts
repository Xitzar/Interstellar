import { ArenaServiceProvider } from './../../providers/arena-service/arena-service';
import { User } from './user';

import { GameC4 as Game } from "./connect4a";
import { MonteCarlo } from "./monte-carlo";
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'connect4',
  templateUrl: 'connect4.html',
})
export class Connect4Game implements OnInit, OnDestroy {
  
 
  @Input('game-type') gameType: number;

  players:User[] = [];
  currentPlayer:User;
  botPlayerId:number;
  items: any;
  currentWinner:any;
  theBoard:any;
  game: Game;
  mcts: MonteCarlo;
  state: any;
  winner: Number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //private arenaGame: ArenaServiceProvider
    ) {
  }

  ngOnInit(): void {
    this.initGame(0);
  }
  
  initGame(gameType) {
    if( gameType === 3 ) {
      this.initBots();
    } else {
      this.initPlayers();
    }
    
    this.startGame();
    if ( gameType === 3 ) {
      this.playBotMove();
    }
  }

  ngOnDestroy(): void {
    this.winner = 1;
  }


  initBots() {
    let player1 = new User();
    player1.id = 1;
    player1.name = "Henry";
    player1.color = "blue";
    player1.isBot = true;
    this.players.push(player1);

    let player2 = new User();
    player2.id = -1;
    player2.name = "Gertrude";
    player2.color = "green";
    player2.isBot = true;
    this.players.push(player2);
  }

  initPlayers() {
  
    let player1 = new User();
    player1.id = 1;
    player1.name = "Player 1";
    player1.color = "purple";
    player1.isBot = false;
    this.players.push(player1);

    let player2 = new User();
    player2.id = -1;
    player2.name = "Player 2";
    player2.color = "pink";
    player2.isBot = true;
    this.players.push(player2);
  }

  startGame() {
    
    this.game = new Game();
    this.mcts = new MonteCarlo(this.game);
    this.state = this.game.start();
    this.winner = this.game.winner(this.state);
    this.theBoard = this.state.board.map((row: any) => row.map((cell: any) => cell === -1 ? 2 : cell));
    
    this.setupRandomPlayer();
  }


  getCellColor(colValue) {
    if( colValue === 2 ) colValue = -1;
    for( let u of this.players ) {
      if( u.id === colValue ) {
        return u.color;
      }
    }
  }

  setupRandomPlayer() {
    this.players[0].id = 0;
    this.players[1].id = 0;
    this.currentPlayer = this.players[Math.floor(Math.random() * this.players.length)];
    this.currentPlayer.id = 1;

    this.players[0].id = this.currentPlayer.name == this.players[0].name ? 1 : -1;
    this.players[1].id = this.currentPlayer.name == this.players[1].name ? 1 : -1;
  }

  
  getMonteCarloPlay() {
    this.mcts.runSearch(this.state, 1);
    let play = this.mcts.bestPlay(this.state, 'robust');    

    return play;
  }
  

  playerMove(col) {
    let move = {
      col:""+col,
      row:0
    };
    for(let row=0;row<6;row++) {
      if( this.theBoard[row][col] === 0 ) {
        move.row = row;
      }
    }
    this.playMove(move);
  }

  playBotMove() {
    if( !this.winner ) {      
      let move = this.getMonteCarloPlay();
      this.playMove(move);
    }
  }
   
  playMove(move) {
        
    if( !this.winner ) {           
    
      this.state = this.game.nextGameState(this.state, move);
      this.winner = this.game.winner(this.state);    
      this.theBoard = this.state.board.map((row: any) => row.map((cell: any) => cell === -1 ? 2 : cell));
 
      this.initNextPlayerAndWinnerByPlayerId(this.state.player);
        
      this.playBotMoveMaybe();
    }
  }

  playBotMoveMaybe() {
    if( this.currentPlayer.isBot ) {
      setTimeout( () => {
        this.playBotMove();
      }, 200);
    }
  }

  initNextPlayerAndWinnerByPlayerId(currentPlayerId) {    
    for( let user of this.players ) {
      if( user.id === currentPlayerId ) {
        this.currentPlayer = user;
      }
      else {
        this.currentWinner = user;
      }
    }
  }

}
