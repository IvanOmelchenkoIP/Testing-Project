"use strict";

import deselectIndicators from "./generic-deselect-indicators.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";

const deselectQuestions = () => {
	const questionIndicators = domSelector.document.selectAllByClass("question-selection-indicator");
	deselectIndicators(questionIndicators);
}

export default deselectQuestions;
