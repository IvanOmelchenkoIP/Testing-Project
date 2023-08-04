"use strict";

import FinalLayerPreset from "./presets/final-layer-preset.js";
import AbstractConstructor from "../../../generic/abstract-constructor.js";

class QuestionContentEditableLayer extends AbstractConstructor {
	constructor() {
		return FinalLayerPreset.new("Enter your question contents");
	}
	
	static new() {
		return new QuestionContentEditableLayer();
	}
}

export default QuestionContentEditableLayer;
