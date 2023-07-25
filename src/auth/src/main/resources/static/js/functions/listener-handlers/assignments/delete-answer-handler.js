"use strict";

const deleteAnswerListenerHandler = (event) => {
	const answer = event.target.parentElement;
	answer.remove();
}

export default deleteAnswerListenerHandler;
