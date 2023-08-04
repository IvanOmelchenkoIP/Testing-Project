"use strict";

import selectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/select-task-handler.js";
import deselectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/deselect-task-handler.js";
import showAddSelectionListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/show-add-selection-handler.js";
import closeAddSelectionListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/close-add-selection-handler.js";
import quickAddListenerHandler from "../../functions/listener-handlers/assignments/layers/quick-add-handler.js";

import { domSelector } from "../../utils/html/html-utils.js";

// selecting and deselecting tasks

(() => {
	const tasks = domSelector.document.selectAllByClass("task-wrapper");
	for (const task of tasks) task.addEventListener("click", selectTaskListenerHandler);
})();

(() => {
	domSelector.document
			   .selectFirstByClass("view-area")
			   .addEventListener("click", deselectTaskListenerHandler);
})();


// extended selection of tasks on addition

(() => {
	domSelector.document
			   .selectById("show-add-selection")
			   .addEventListener("click", showAddSelectionListenerHandler);
})();

(() => {
	domSelector.document
		       .selectById("close-add-selection")
		       .addEventListener("click", closeAddSelectionListenerHandler);
})();

// layers

(() => {
	domSelector.document
			   .selectById("quick-add")
			   .addEventListener("click", quickAddListenerHandler);
})();