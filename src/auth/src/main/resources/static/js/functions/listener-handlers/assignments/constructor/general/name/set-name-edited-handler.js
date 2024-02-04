"use strict";

const setNameEditedListenerHandler = (event) => {
	const target = event.target.closest(".menu-assignment-name-container");
	target.classList.add("selected");
}

export default setNameEditedListenerHandler;
