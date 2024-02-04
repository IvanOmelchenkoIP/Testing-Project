"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import setNavigationListenerHandler from "../../../functions/listener-handlers/assignments/constructor/general/navigation/set-navigation-handler.js";
import setNameEditedListenerHandler from "../../../functions/listener-handlers/assignments/constructor/general/name/set-name-edited-handler.js";
import resetEditedSelectionListenerHandler from "../../../functions/listener-handlers/assignments/constructor/general/reset-edited-selection-handler.js";

(() => {
	const navigationItems = domSelector.document.selectAllByClass("menu-navigation-item");
	for (const navigationItem of navigationItems) {
		navigationItem.addEventListener("click", setNavigationListenerHandler);
	}
})();

(() => {
	const name = domSelector.document.selectFirstByClass("menu-assignment-name-container");
	name.addEventListener("click", setNameEditedListenerHandler);
})();

(() => {
	const area = domSelector.document.selectFirstByClass("displayable-container-wrapper");
	area.addEventListener("click", resetEditedSelectionListenerHandler);
})();