"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";

const selectTaskListenerHandler = (event) => {
	let target = event.target;
	while (true) {
		if (target == null) return;
		if (target.className.split(" ")[0] == "task-wrapper") {
			const selectionWrapper = domSelector.selectFirstByClass(target, "selection-wrapper");
			selectionWrapper.classList.add("selected-task");
			assignmentConstructorContext.selectedTask.select(target);
			return;
		}
		target = target.parentElement;
	}
}

export default selectTaskListenerHandler;
