"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";


const deselectTaskListenerHandler = (event) => {
	if (event.target.className != "editor-area") return;
	const selectedTask = assignmentConstructorContext.selectedTask.get();
	if (selectedTask == null) return;
	domSelector.selectFirstByClass(selectedTask, "selection-wrapper")
			   .classList
			   .remove("selected-task");
	assignmentConstructorContext.selectedTask.deselect();
}

export default deselectTaskListenerHandler;
