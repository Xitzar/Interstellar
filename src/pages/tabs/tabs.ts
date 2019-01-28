import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GameArenaPage } from './../game-arena/game-arena';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GameArenaPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
