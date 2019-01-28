import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameArenaPage } from './game-arena';

@NgModule({
  declarations: [
    GameArenaPage
  ],
  imports: [
    IonicPageModule.forChild(GameArenaPage),
  ],
})
export class GameArenaPageModule {}
