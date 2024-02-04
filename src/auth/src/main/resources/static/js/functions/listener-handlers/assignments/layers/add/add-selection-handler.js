"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import addSelectionCloseMediator from "../../../../mediators/assignment/layers/add/add-selection-close-mediator.js";

const extendedSelectionListenerHandler = () => {
	if (assignmentConstructorContext.addSelection.selectedItem == null) return;
	addSelectionCloseMediator();
}

export default extendedSelectionListenerHandler;
