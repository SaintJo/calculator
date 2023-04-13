// Create two variabales, firstCard and secondCard.

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");




// Create a function renderGame()

function rendertGame () {
	cardsEl.textContent = "Cards: " + firstCard + "" + secondCard;
	sumEL.textContent ="Sum: " + sum;
	if (sum <= 20) {
		message = ("Do you want to draw a new card?");
	} else if (sum === 21) {
		message = ("Welcome! You have got BlackJack!");
		hasBlackJack = true;
	} else {
		message = ("You're out of the game!");
		isAlive = false;
	}

	messageEl.textContent = message;
}

// Create a function newCard()

function newCard() {
	let card = 7;
	sum += card;

	renderGame();	
}

