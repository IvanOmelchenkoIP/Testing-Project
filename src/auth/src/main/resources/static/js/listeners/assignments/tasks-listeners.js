"use strict";

import selectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/select-task-handler.js";
import deselectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/deselect-task-handler.js";

import { domSelector } from "../../utils/html/html-utils.js";


(() => {
	const tasks = domSelector.document.selectAllByClass("task-wrapper");
	for (const task of tasks) task.addEventListener("click", selectTaskListenerHandler);
})();

(() => {
	domSelector.document
		.selectFirstByClass("editor-area")
		.addEventListener("click", deselectTaskListenerHandler);
})();