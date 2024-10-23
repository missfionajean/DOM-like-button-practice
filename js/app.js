/* INSTRUCTION */

/* Event Listener Syntax */
// element.addEventListener('type', callbackFunction)

/* Moved lower for readability
// setting up new cached (or "stored") element
const likeButtonElement = document.querySelector("#like-button");
// console.dir(likeButtonElement);
*/

/* No longer needed, as it's been re-established below
// creating a test event listener and callback function (arrow notation)
likeButtonElement.addEventListener("click", () => {
	console.log("You clicked me!");
});
*/

// setting up another cached element
const commentButtonElement = document.querySelector("#comment-button");
// console.dir(commentButtonElement);

// creating another test event listener and callback function
commentButtonElement.addEventListener("click", () => {
	console.log("I work!");
});

/* Moved below into "YOU DO"
// similar syntax to add a different callback function (creating a new element)
commentButtonElement.addEventListener("click", () => {
	const commentElement = document.createElement("li");
	commentElement.textContent = "Can you hear me?";
    // parent first, new child to be added in argument
    commentListElement.appendChild(commentElement)
});
*/

// caches the unordered list from the HTML file
const commentListElement = document.querySelector("ul");
// console.dir(commentListElement);

/* YOU DO */

// caching input element from the HTML file, to connect it to the "Add Comment" process
const inputElement = document.querySelector("input");

// updated "Add Comment" event listener, with 'clear box' and 'don't add empty' additions
commentButtonElement.addEventListener("click", () => {
	const commentElement = document.createElement("li");
	if (inputElement.value) {
		commentElement.textContent = inputElement.value;
		// parent first, new child to be added in argument
		commentListElement.appendChild(commentElement);
		inputElement.value = null;
	}
});

/* Moved directly below to develop further (must be defined ABOVE callback)
// working with named functions, which can be called by an event listener
const handleLike = () => {
	console.log("You clicked me!");
};
*/

/* Moved directly below again (still ABOVE any callbacks)
// implementing like functionality
let likesCount = 0;
const handleLike = () => {
    likesCount = likesCount + 1;
    console.log(likesCount);
}
*/

// adding cached like button elements to use in handleReaction function
const likeButtonElement = document.querySelector("#like-button");
const dislikeButtonElement = document.querySelector("#dislike-button");

// updated to affect button content with press count and adds dislike functionality
let likesCount = 0;
let dislikesCount = 0;

// now let's add an undo function to the like and dislike buttons
let likePressed = false;
let dislikePressed = false;

// event object is an argument auto-passed by addEventListener to callback function
const handleReaction = (event) => {
	// we use event.target to zero in on the buttons and .id to figure out which one
	if (event.target.id === "like-button") {
		if (likePressed) {
			likesCount -= 1;
			likePressed = false;
			likeButtonElement.textContent = `Like this post!`;
			dislikeButtonElement.addEventListener("click", handleReaction);
		} else {
			likesCount += 1;
			likePressed = true;
			likeButtonElement.textContent = `Like this post! (${likesCount}) `;
			dislikeButtonElement.removeEventListener("click", handleReaction);
		}
	} else if (event.target.id === "dislike-button") {
		if (dislikePressed) {
			dislikesCount -= 1;
			dislikePressed -= 1;
			dislikeButtonElement.textContent = `Dislike this post!`;
			likeButtonElement.addEventListener("click", handleReaction);
		} else {
			dislikesCount += 1;
			dislikePressed += 1;
			dislikeButtonElement.textContent = `Dislike this post! (${dislikesCount}) `;
			likeButtonElement.removeEventListener("click", handleReaction);
		}
	}
};

// moving event listeners so they will invoke properly in my function (which has to be defined before the call in the lines below)
likeButtonElement.addEventListener("click", handleReaction);
dislikeButtonElement.addEventListener("click", handleReaction);


/* Removing Event Listeners
// stops letting them interact after they've done it once (if you do it with event bubbling like this, they cannot like AND dislike the post)
likeDislikeElement.removeEventListener("click", handleReaction);
*/

/* 
// using named function as callback of listeners (not invoked with () in this case); this is because invoking with () would call the function on page load, not 'click'
likeButtonElement.addEventListener("click", handleReaction);
dislikeButtonElement.addEventListener("click", handleReaction);
*/

/* 
// above lines rewritten with event bubbling
const likeDislikeElement = document.querySelector('.like-dislike')
likeDislikeElement.addEventListener("click", handleReaction);
*/

/* 
// another way to handle the above (more straightforward, but narrower scope of control); note that it uses an "=" instead of "()", but still no invocation after the callback name!

likeButtonElement.onclick = handleReaction;
dislikeButtonElement.onclick = handleReaction;
*/

// you can also remove an event listener if you don't want it to be interactive after a certain point, syntax: element.removeEventListener('type', callbackFunction) [added above!]

// Personal note: you can also add another variable and additional 'if' layer in handleReaction to add un-like or un-dislike functionality
