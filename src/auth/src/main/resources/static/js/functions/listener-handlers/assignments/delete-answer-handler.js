"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js"; 

const deleteAnswerListenerHandler = (event) => {
	const focusedTask = assignmentConstructorContext.focusedTask.getFocus();
	if (focusedTask == null) return;
	const answer = event.target.parentElement;
	if (focusedTask.contains(answer)) {
		answer.remove();
		const answers = domSelector.selectAllByClass(focusedTask, "answer-row");
		if (answers.length == 1) answers[0].click();
	}
}

export default deleteAnswerListenerHandler;
