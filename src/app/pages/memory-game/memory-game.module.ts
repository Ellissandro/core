import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { MemoryGameDeckComponent } from './components/memory-game-deck/memory-game-deck.component';

@NgModule({
  declarations: [
    GameComponent,
    MemoryGameDeckComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component:  GameComponent}]),
    CommonModule
  ]
})
export class MemoryGameModule { }
