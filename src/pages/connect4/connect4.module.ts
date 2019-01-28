import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Connect4Game } from './connect4';

@NgModule({
  declarations: [
    Connect4Game,
  ],
  imports: [
    IonicPageModule.forChild(Connect4Game),
  ],
})
export class Connect4PageModule {}
