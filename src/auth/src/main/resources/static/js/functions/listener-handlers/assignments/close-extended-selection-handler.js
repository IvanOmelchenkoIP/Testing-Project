"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";

const closeExtendedSelectionListenerHandler = () => {
	domSelector.document.selectFirstByClass("extended-task-selection").style.display = "none";
}

export default closeExtendedSelectionListenerHandler;
