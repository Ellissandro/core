import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card, CardStatus, Deck } from '../../memory-game.model';
import { delay } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-memory-game-deck',
  templateUrl: './memory-game-deck.component.html',
  styleUrls: ['./memory-game-deck.component.scss']
})
export class MemoryGameDeckComponent implements OnInit {
  colors = ['#f72585', '#b5179e', '#fca311', '#0077b6', '#fb8500', '#cb997e', '#38b000', '#7209b7']
  maxPerColumn = 4;
  deck: Deck = new Deck([]);
  card: Card = new Card();
  count = 0;

  generateId = () => uuidv4();

  ngOnInit(): void {
    this.fillColors();
    this.createDeck();
    this.shuffleCards();
  }

  createDeck(): void {
    this.colors.forEach(color => {
      this.deck.cards.push(new Card(this.generateId(), false, false, color));
    })
  }

  shuffleCards() {
    for (let i = this.deck.cards.length - 1; i >= 1; i--) {
      const ramdomNumber = Math.floor(Math.random() * (i + 1));
      const aux = this.deck.cards[i];
      const aux2 = this.deck.cards[ramdomNumber];
      this.deck.cards[i] = aux2;
      this.deck.cards[ramdomNumber] = aux;
    }
  }

  fillColors() {
    this.colors = this.colors.concat(this.colors);
  }

  toogleCard(card: Card): void {
    if (this.count >= 2 || card.match) {
      return;
    }

    if (card.id === this.card.id) {
      return;
    }

    card.openCard();
    this.incrementCount();

    if (this.count === CardStatus.oneSelected) {
      this.copyCardSelected(card);

    } else {
      this.checkHaveMatch(card);
    }

    this.checkGameStatus();
  }

  closeCards() {
    this.deck.cards.forEach(card => card.closeCard());
  }

  copyCardSelected(card: Card) {
    this.card = this.deepCopy(card);
  }

  checkHaveMatch(card: Card) {
    if (card.color === this.card.color) {
      const cards = this.deck.cards.filter(c => c.opened);
      cards.forEach(c => c.match = true);

    }

    this.reset()
  }

  reset() {
    setTimeout(() => {
      this.closeCards();
      this.resetCount();
      this.resetCard();
    }, 1000)
  }

  checkGameStatus() {
    if (this.deck.cards.every(card => card.match)) {
      this.deck.cards = [];
      this.createDeck();
      this.shuffleCards();
    }
  }

  incrementCount() {
    this.count++;
  }

  resetCount() {
    this.count = 0;
  }

  resetCard() {
    this.card = new Card();
  }

  identify(index: number) {
    return index;
  }

  deepCopy(card: Card): Card {
    return JSON.parse(JSON.stringify(card));
  }

  await(time: number): Observable<{}> {
    return of({}).pipe(delay(time));
  }
}
