"use strict";

import FinalLayerPreset from "./presets/final-layer-preset.js";
import AbstractConstructor from "../../../generic/abstract-constructor.js";

class EditableQuestionContentLayer extends AbstractConstructor {
	constructor() {
		return FinalLayerPreset.new("Enter your question contents");
	}
	
	static new() {
		return new EditableQuestionContentLayer();
	}
}

export default EditableQuestionContentLayer;
