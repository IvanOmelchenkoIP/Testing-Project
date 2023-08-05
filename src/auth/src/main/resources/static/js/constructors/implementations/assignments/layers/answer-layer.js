"use strict";

import AbstractConstructor from "../../../generic/abstract-constructor.js";
import LayerPreset from "./presets/layer-preset.js";
import IntermediateAnswerContentsLayer from "./intermediate-answer-contents-layer.js";
import EditableAnswerContentLayer from "./editable-answer-content-layer.js";

class AnswerLayer extends AbstractConstructor {
	constructor(order) {
		const name = "Answer " + order;
		return LayerPreset.new(
			name,
			IntermediateAnswerContentsLayer.new(
				EditableAnswerContentLayer.new()
			)
		);
	}
	
	static new(order) {
		return new AnswerLayer(order);
	}
}

export default AnswerLayer;
