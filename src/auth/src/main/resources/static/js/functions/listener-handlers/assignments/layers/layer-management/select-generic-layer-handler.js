"use strict";

import selectLayerChapterListenerHandler from "./select-layer-chapter-handler.js";
import selectLayerQuestionListenerHandler from "./select-layer-question-handler.js";
import selectLayerQuestionPoolListenerHandler from "./select-layer-qpool-handler.js";
import selectLayerTaskListenerHandler from "./select-layer-task-handler.js";

const SELECTION_TYPES = {
	"chapter-row": (layer) => {
		selectLayerChapterListenerHandler(layer);
	},
	"question-row": (layer) => {
		selectLayerQuestionListenerHandler(layer);
	},
	"task-row": (layer) => {
		selectLayerTaskListenerHandler(layer);
	},
	"qpool-row": (layer) => {
		selectLayerQuestionPoolListenerHandler(layer);
	}
};

const selectLayerListenerHandler = (event) => {
	const target = event.target.closest("row-contents");
	const layer = target.closest("layer-row");
	const layerRow = layer.classList.split(" ").pop();
	SELECTION_TYPES[layerRow](layer);
}

export default selectLayerListenerHandler;
