"use strict";

import { domSelector, domConstructor } from '../../../utils/html/html-utils.js';
import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const addAnswerListenerHandler = (event) => {
	const focusedTask = assignmentConstructorContext.focusedTask.getFocus();
	if (focusedTask == null) return;
	if (focusedTask.contains(event.target))  {
		const lastAnswerRow = domSelector.selectLastByClass(focusedTask, "answer-row");
		lastAnswerRow.before(
			domConstructor.newDiv().addClasses("answer-row").addChildren(
				domConstructor.newDiv().addClasses("round-checkmark").getElement(),
				domConstructor.newDiv("Enter your answer").addClasses("answer-content").getElement()
			).getElement()
		)
	}
}

export default addAnswerListenerHandler;
