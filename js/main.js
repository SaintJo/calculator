 let saveEl = document.getElementById('save-el');
 let colEl = document.getElementById('count-el');

console.log(saveEl);

 let count = 0;
 
 function increment () {
	count += 1; 
	colEl.textContent = count;
 }

 function save () {
	 let countStr = count + " - "
	 saveEl.textContent += countStr;
	 colEl.textContent = 0;
	 count = 0;
 }

