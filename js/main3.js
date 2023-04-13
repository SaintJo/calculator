// Create two variabales, firstCard and secondCard.

let firstCard = 6;
let secondCard = 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";


// Create a function startGame()

function startGame () {
	if (sum <= 20) {
		message = ("Do you want to draw a new card?");
	} else if (sum === 21) {
		message = ("Welcome! You have got BlackJack!");
		hasBlackJack = true;
	} else {
		message = ("You're out of the game!");
		isAlive = false;
	}
}