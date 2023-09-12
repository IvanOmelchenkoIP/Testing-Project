"use strict";

import deselectIndicators from "./generic-deselect-indicators.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";

const deselectQuestionPools = () => {
	const qpoolIndicators = domSelector.document.selectAllByClass("qpool-selection-indicator");
	deselectIndicators(qpoolIndicators);
}

export default deselectQuestionPools;
