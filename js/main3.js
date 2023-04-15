// Create two variabales, firstCard and secondCard.
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Create a function, getRandomCard(), that always returns the 5.
function getRandomCard () {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	}
		return randomNumber;
}

// Create a new function called startGame() that calls renderGame()
function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
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
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();
		sum += card;
		// Push the card to the cards Array
		cards.push(card);
		renderGame();	
	}
	
}



