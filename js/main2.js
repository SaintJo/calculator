let num1 = 8;
let num2 = 4;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


let sumEl = document.getElementById("sum-el");
function add () {
	let result = num1 + num2;
	sumEl.textContent = "Sum: " + result;
}

let subEl = document.getElementById("sum-el");
function subtract () {
	 let result = num1 - num2;
	 subEl.textContent = "Sum: " + result;
}

let divEl = document.getElementById("sum-el");
function divide () {
	 let result = num1 / num2;
	 divEl.textContent = "Sum: " + result;
}

let multEl = document.getElementById("sum-el");
function multiply () {
	 let result = num1 * num2;
	 multEl.textContent = "Sum: " + result;
}