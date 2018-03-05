let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number;}[]): number;
function pickCard(x: number): {suit: string; card: number;};
function pickCard(x: object[] | number): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return {suit: suits[pickedSuit], card: x % 13};
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "clubs", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(pickedCard1.suit, pickedCard1.card);

let pickedCard2 = pickCard(23);
console.log(pickedCard2.suit, pickedCard2.card);