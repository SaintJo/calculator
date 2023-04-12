// Create two variabales, firstCard and secondCard.

let firstCard = 6;
let secondCard = 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;

// Add Logical Operators

if (sum <= 20) {
	console.log("Do you want to draw a new card?");
} else if (sum === 21) {
	console.log("Welcome! You have got BlackJack!");
	hasBlackJack = true;
} else {
	console.log("You're out of the game!");
}