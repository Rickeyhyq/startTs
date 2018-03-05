var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "clubs", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log(pickedCard1.suit, pickedCard1.card);
var pickedCard2 = pickCard(23);
console.log(pickedCard2.suit, pickedCard2.card);
