"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const selectTaskAndSetFocusHandler = (event) => {
	const target = event.target;
	console.log(target);
	target.focus();
	assignmentConstructorContext.focusedTask.setFocus(target);
}

export default selectTaskAndSetFocusHandler;
