"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const selectTaskAndSetFocusHandler = (event) => {
	let target = event.target;
	while (true) {
		if (target == null) return;
		if (target.className == "task-body") {
			target.focus();
			assignmentConstructorContext.focusedTask.setFocus(target);
			return;
		}
		target = target.parentElement;
	}
}

export default selectTaskAndSetFocusHandler;
