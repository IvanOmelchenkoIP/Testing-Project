"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const resetTaskFocusHandler = (event) => {
	console.log(event);
	event.stopPropagation();
	console.log(assignmentConstructorContext);
	assignmentConstructorContext.focusedTask.resetFocus();
}

export default resetTaskFocusHandler;
