"use strict";

import deselectIndicators from "./generic-deselect-indicators.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";

const delelectChapters = () => {
	const chapterIndicators = domSelector.document.selectAllByClass("chapter-selection-indicator");
	deselectIndicators(chapterIndicators);
}

export default delelectChapters;
