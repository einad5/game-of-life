import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GameBoardComponent } from './game-board/game-board.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GameBoardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
