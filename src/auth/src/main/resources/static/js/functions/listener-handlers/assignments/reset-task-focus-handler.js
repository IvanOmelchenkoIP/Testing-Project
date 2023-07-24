"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const resetTaskFocusHandler = (event) => {
	if (event.target.className == "editor-area") {
		assignmentConstructorContext.focusedTask.resetFocus();
	}
}

export default resetTaskFocusHandler;
