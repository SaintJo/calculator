// Create two variabales, firstCard and secondCard.

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Create a function, getRandomCard(), that always returns the 5.
function getRandomCard () {
	return Math.floor(Math.random() * 13) + 1;
}

// Create a new function called startGame() that calls renderGame()
function startGame() {
	renderGame();
}

// Create a function renderGame()
function renderGame () {
	
	// render out firstCard and secondCard
	cardsEl.textContent = "Cards: ";
	
	// Create a for loop that renders out all the cards instead of just two
	for (var i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
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

// Create a function called newCard()
function newCard() {
	let card = getRandomCard();
	sum += card;
// Push the card to the cards Array
	cards.push(card);
	console.log(cards);

	renderGame();	
}



