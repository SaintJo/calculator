
let errorPar = document.getElementById("error");
console.log(errorPar);

function purchase () {
	console.log('button clicked');
	errorPar.textContent = "Something went wrong, please try again.";
}