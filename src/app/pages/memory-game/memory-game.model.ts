export class MemoryGame {
}

export class Deck {
    constructor(
        public cards: Card[]
    ) {
    }
}

export class Card {
    constructor(
        public id?: string,
        public opened?: boolean,
        public match?: boolean,
        public color?: string
        ) {
    }

    openCard() {
        this.opened = true;
    }

    closeCard() {
        this.opened = false;
    }

    setMatch() {
        this.match = true;
    }
}

export enum CardStatus{
    oneSelected = 1,
    twoSelected = 2,
}