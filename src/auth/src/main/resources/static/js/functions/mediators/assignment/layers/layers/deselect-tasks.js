"use strict";

import deselectIndicators from "./generic-deselect-indicators.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";

const deselectTasks = () => {
	const taskIndicators = domSelector.document.selectAllByClass("task-selection-indicator");
	deselectIndicators(taskIndicators);
}

export default deselectTasks;
