//DECK OF CARDS
let suit = ["♠", "♦", "♣", "♥"];
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
        }; 
//this.cards.length can be reffered by this new value to short/hand writing it in the code in the future
    get numberOfCards() {
        return this.cards.length
    }
//shuffle method is created that will generate a random value from the deck - while giving the cards an index value
    shuffle () {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue;
        };
    };
//the last (but randomized) card from the deck of cards is returned
    pop() {
        return this.cards.shift();
    }
//the cards from the deck are being pushed into the new cards array
    push(card) {
        this.cards.push(card);
    }
};
//each card is being given a suit
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
//creating the card out of a suit, value map
function newDeck() {
    return suit.flatMap(suit => {
        return value.flatMap(value => {
            return new Card(suit, value)
        })
    })
}
const deck = new Deck();
deck.shuffle();
//creating an object that converts the string into a numeric value so that the
let cardValue = {
    "2": 2, 
    "3": 3, 
    "4": 4,
    "5": 5,
    "6": 6,                                                                          
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11, 
    "Q": 12,
    "K": 13,
    "A": 14,
};
let playerDeck, computerDeck, inRound

//GAME ROOM
//alerting user that they have entered the game and show them the rules that are displayed on the page and the player is prompted to continue and layer is prompted to ask to agree to the terms
alert("You seem to have stumbled into enemy territory! Looks like you're gonna have to play the game of WAR to get out...I am your moderator - Wizard Trey - and I am here to tell you the rules of WAR: The rules of the game are simple... To play, each player reveals the top card in their stack. The player who played the card with the higher rank takes both cards and puts them at the bottom of their stack in an arbitrary order. If there is a tie, then it’s WAR! In the card game each player adds places the top three cards of their stack face down, and then each player reveals the top card again. Whoever wins out of the second reveal takes all of the cards, and if there is another tie the process repeats until there is a winner....May the CARDS be ever in your favor...");
let promptAgree = " "; {
    while (promptAgree !== "YES") {
        promptAgree = prompt (
            "Do you agree to the terms of the WAR? Type YES to continue..");
    }
alert("let the games begin..but just one more thing..");
};
const input = prompt(".....What's your name, Player??");
console.log(`Player ${input} has entered the WAR CONSOLE!!`);

class gameRoom {
//players are created and a message that the game has started appears in the console
        constructor(player, computer) {
            this.player1 = player;
            this.player2 = computer;
        };
        welcome() {
            return "Welcome...brave " + this.player1 + " ...the dreaded " + this.player2 + " is ready for WAR! The 2nd card is his the top card is yours...click to play your next hand!"
        };
};
const gameRoom1 = new gameRoom("WARRIOR", "ENEMY");
console.log(gameRoom1.welcome());

//GAME BEGINS
//the document is waiting for the user to click the page to flip the cards. Each time the player clicks the page, a new card will flip/a new round/hand will be played. Until the game is over and someone has won, and the deck will reset.
document.addEventListener('click', () => {
    if (inRound) {
        flipCards();
       
    }
    else {
        gameReset();
    }
});
//the first hand is automatically dealt when the user loads the console
function startGame() {
    const deck = new Deck()
    deck.shuffle()
//split the deck between players by slicing the deck in half
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false;
}
startGame();

function gameReset() {
    console.log(computerDeck.numberOfCards);
    console.log(playerDeck.numberOfCards);
}
gameReset();

function flipCards() {
    inRound = true;

    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();
    console.log(playerCard);
    console.log(computerCard);

    updateDeckCount();
//printing message for each “round” of the game showing the cards played by each user, who won the round, and how many cards each player now has.
    if (roundWinner(playerCard, computerCard)) {
        console.log("You frickin Win (THIS TIME)! try again...");
        playerDeck.push(playerCard);
        playerDeck.push(computerCard);
    }
    else if (roundWinner(computerCard, playerCard)) {
        console.log("haha you lose!");
        computerDeck.push(playerCard);
        computerDeck.push(computerCard);
    }
    else {
        console.log("Drats! A Draw!");
        playerDeck.push(playerCard);
        computerDeck.push(computerCard);
    }
};
flipCards();
//show the user their number of cards and the computers number of cards each round to keep track of the game
function updateDeckCount() {
    console.log(computerDeck.numberOfCards);
    console.log(playerDeck.numberOfCards);
}
function roundWinner(playerCard, computerCard) {
    return cardValue[playerCard.value] > cardValue[computerCard.value]
};
roundWinner();
