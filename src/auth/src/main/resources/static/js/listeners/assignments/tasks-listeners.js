"use strict";

import selectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/select-task-handler.js";
import deselectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/deselect-task-handler.js";
import showAddSelectionListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/show-add-selection-handler.js";
import closeAddSelectionListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/close-add-selection-handler.js";
import quickAddListenerHandler from "../../functions/listener-handlers/assignments/structure-options/quick-add-handler.js";
import callStructureOptionsMenuListenerHandler from "../../functions/listener-handlers/assignments/structure-options/call-structure-options-menu-handler.js";
import closeStructureOptionsMenuListenerHandler from "../../functions/listener-handlers/assignments/structure-options/close-structure-options-menu-handler.js";
import selectStructureMenuOptionEntryListenerHandler from "../../functions/listener-handlers/assignments/structure-options/select-structure-menu-option-entry-handler.js";

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

// structure options

(() => {
	domSelector.document
			   .selectById("quick-add")
			   .addEventListener("click", quickAddListenerHandler);
})();

(() => {
	domSelector.document
			   .selectById("call-structure-options-menu")
			   .addEventListener("click", callStructureOptionsMenuListenerHandler);
})();

(() => {
	domSelector.document
			   .selectById("close-structure-options-menu")
			   .addEventListener("click", closeStructureOptionsMenuListenerHandler);
})();

(() => {
	const structureMenuEntries = domSelector.document.selectAllByClass("structure-option-list-entry");
	for (const entry of structureMenuEntries) {
		entry.addEventListener("click", selectStructureMenuOptionEntryListenerHandler);
	} 
})();