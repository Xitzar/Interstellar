import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Connect4Page } from './connect4';

@NgModule({
  declarations: [
    Connect4Page,
  ],
  imports: [
    IonicPageModule.forChild(Connect4Page),
  ],
})
export class Connect4PageModule {}
