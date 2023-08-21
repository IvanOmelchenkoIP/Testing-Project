"use strict";

//page
import selectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/select-task-handler.js";
import deselectTaskListenerHandler from "../../functions/listener-handlers/assignments/tasks/configs/deselect-task-handler.js";
//add selection
import addSelectionShowListenerHandler from "../../functions/listener-handlers/assignments/layers/add/add-selection-show-handler.js";
import addSelectionCancelListenerHandler from "../../functions/listener-handlers/assignments/layers/add/add-selection-cancel-handler.js";
import selectableListenerHandler from "../../functions/listener-handlers/assignments/layers/add/selectable-handler.js";
import addSelectionListenerHandler from "../../functions/listener-handlers/assignments/layers/add/add-selection-handler.js";
import addSelectionSearchListenerHandler from "../../functions/listener-handlers/assignments/layers/add/add-selection-search-handler.js";
//variants
import variantSelectionCallListenerHandler from "../../functions/listener-handlers/assignments/layers/variants/variant-selection-call-handler.js";
import variantSelectionCloseListenerHandler from "../../functions/listener-handlers/assignments/layers/variants/variant-selection-close-handler.js";
import addVariantListenerHandler from "../../functions/listener-handlers/assignments/layers/variants/add-variant-handler.js";
import selectVariantListenerHandler from "../../functions/listener-handlers/assignments/layers/variants/select-variant-handler.js";
import deleteVariantListenerHandler from "../../functions/listener-handlers/assignments/layers/variants/delete-variant-handler.js";

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
			   .addEventListener("click", addSelectionShowListenerHandler);
})();

(() => {
	domSelector.document
		       .selectById("cancel-add-selection")
		       .addEventListener("click", addSelectionCancelListenerHandler);
})();

(() => {
	const selectables = domSelector.document.selectAllByClass("add-selectable");
	for (const selectable of selectables) selectable.addEventListener("click", selectableListenerHandler);	
})();

(() => {
	domSelector.document
			   .selectById("select-add-selection")
			   .addEventListener("click", addSelectionListenerHandler);
})();

(() => {
	domSelector.document
			   .selectFirstByName("add-selection-search-bar")
			   .addEventListener("keyup", addSelectionSearchListenerHandler);
})();

// structure options
/*
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
*/
// variant management

(() => {
	domSelector.document
			   .selectById("add-new-variant")
			   .addEventListener("click", addVariantListenerHandler);
})();

(() => {
	domSelector.document
			   .selectById("call-variant-selection")
			   .addEventListener("click", variantSelectionCallListenerHandler);
})();

(() => {
	domSelector.document
			   .selectById("close-variant-selection")
			   .addEventListener("click", variantSelectionCloseListenerHandler);
})();

(() => {
	const variants = domSelector.document.selectAllByClass("variant-contents-wrapper");
	for (const variant of variants) variant.addEventListener("click", selectVariantListenerHandler);
})();

(() => {
	const variantDeleteBtns = domSelector.document.selectAllByClass("delete-variant");
	for (const deleteBtn of variantDeleteBtns) deleteBtn.addEventListener("click", deleteVariantListenerHandler);
})();