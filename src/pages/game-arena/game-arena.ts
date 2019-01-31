import { ArenaServiceProvider } from './../../providers/arena-service/arena-service';
import { Connect4Game } from './../connect4/connect4';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the GameArenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-arena',
  templateUrl: 'game-arena.html',
})
export class GameArenaPage {

  gameListener: Observable<any>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {

    this.gameListener = new Observable<any>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameArenaPage');
  }

  resetGame() {
    //private arenaGame: ArenaServiceProvider
    //this.arenaGame.resetGame();
  }

}
