"use strict";

import { domSelector } from '../../../utils/html/html-utils.js';
import BlankOneAnswerQuestion from "../../../constructors/assignments/implementations/one answer-test-question.js";
import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const addAnswerListenerHandler = (event) => {
	const focusedTask = assignmentConstructorContext.focusedTask.getFocus();
	if (focusedTask == null) return;
	if (focusedTask.contains(event.target))  {
		const lastAnswerRow = domSelector.selectLastByClass(focusedTask, "answer-row");
		lastAnswerRow.before(BlankOneAnswerQuestion.new());
	}
}

export default addAnswerListenerHandler;
