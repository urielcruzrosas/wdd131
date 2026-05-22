// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// wait for button clicks
buttonElement.addEventListener("click", function () {
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();
});



// BONUS: add a keyup event listener to the input field to listen for the "Enter" key

/*Ideas to consider
Validate input — Only accept Book of Mormon books
Limit to 10 entries — Enforce the "Top 10" constraint
Prevent duplicates — Don't allow the same chapter to be added more than once
Better UI feedback — Show warnings/confirmations
Improve accessibility — Ensure the application is usable with screen readers and keyboard navigation
Format input — Standardize the format of the input for consistency*/