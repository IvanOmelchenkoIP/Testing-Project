"use strict";

import addSelectionCloseMediator from "../../../../mediators/assignment/layers/add/add-selection-close-mediator.js";
import resetSelectedItemMediator from "../../../../mediators/assignment/layers/add/reset-selected-item-mediator.js";

const addSelectionCancelListenerHandler = () => {
	resetSelectedItemMediator();
	addSelectionCloseMediator();
}

export default addSelectionCancelListenerHandler;
