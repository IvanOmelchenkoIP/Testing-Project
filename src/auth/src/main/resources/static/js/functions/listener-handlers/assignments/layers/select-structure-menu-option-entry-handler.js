"use strict";

import { domSelector } from "../../../../utils/html/html-utils.js";
import closeStructureOptionsMenuListenerHandler from "./close-structure-options-menu-handler.js";

const setTitle = (chosenEntry) => {
	const titleMessage = chosenEntry.charAt(0).toUpperCase() + chosenEntry.replaceAll("-", " ").slice(1);
	domSelector.document.selectFirstByClass("structure-replaceble-options-title").innerText = titleMessage;
}

const setOptionContentsContainer = (chosenEntry) => {
	const structureOptionsEntryContainer = domSelector.document.selectAllByClass("structure-options-entry-contents-wrapper");
	for (const entry of structureOptionsEntryContainer) entry.classList.remove("display-flex");
	const displayedStructureOptionsClass = chosenEntry + "-container-wrapper";
	const chosenContainer = domSelector.document.selectFirstByClass(displayedStructureOptionsClass);
	chosenContainer.classList.add("display-flex");
}

const selectStructureMenuOptionEntryListenerHandler = (event) => {
	const chosenEntry = event.target.id;
	setTitle(chosenEntry);
	setOptionContentsContainer(chosenEntry);
	closeStructureOptionsMenuListenerHandler();
}

export default selectStructureMenuOptionEntryListenerHandler;
