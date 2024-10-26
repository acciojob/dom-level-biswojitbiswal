//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
	let element = document.getElementById("level");

	let currElement = element;
	let count = 0;

	while(currElement){
		count++;
		currElement = currElement.parentElement;
	}

	alert(`The level of the element is: ${count}`);
})