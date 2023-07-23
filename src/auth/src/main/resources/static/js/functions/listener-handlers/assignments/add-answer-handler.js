"use strict";

import { domConstructor } from '../../../utils/html/html-utils.js';
import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const addAnswerListenerHandler = (event) => {
	console.log(event.target);
	if (assignmentConstructorContext.focusedTask) {
		if (assignmentConstructorContext.focusedTask.isParentOf(event.target)) console.log(1);
	console.log(assignmentConstructorContext);
		event.target.before(domConstructor.newDiv().addClasses("answer-row").addChildren(
			domConstructor.newDiv().addClasses("round-checkmark").getElement(),
			domConstructor.newDiv("Enter your answer").addClasses("answer-content").getElement()
		).getElement());
		
	}
}

export default addAnswerListenerHandler;
