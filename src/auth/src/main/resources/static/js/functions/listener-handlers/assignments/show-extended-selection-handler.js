"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";

const showExtendedSelectionListenerHandler = () => {
	domSelector.document.selectFirstByClass("extended-task-selection").style.display = "flex";	
}

export default showExtendedSelectionListenerHandler;
