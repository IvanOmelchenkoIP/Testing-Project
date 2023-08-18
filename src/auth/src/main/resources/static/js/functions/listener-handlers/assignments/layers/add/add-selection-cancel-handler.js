"use strict";

import addSelectionCloseMediator from "../../../../mediators/assignment/layers/add/add-selection-close-mediator.js";
import addSelectionResetSelectedItemMediator from "../../../../mediators/assignment/layers/add/add-selection-reset-selected-item-mediator.js";

const addSelectionCancelListenerHandler = () => {
	addSelectionResetSelectedItemMediator();
	addSelectionCloseMediator();
}

export default addSelectionCancelListenerHandler;
