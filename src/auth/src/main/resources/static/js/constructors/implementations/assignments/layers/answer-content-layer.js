"use strict";

import FinalLayerPreset from "./presets/final-layer-preset.js";
import AbstractConstructor from "../../../generic/abstract-constructor.js";

class AnswerContentLayer extends AbstractConstructor {
	constructor() {
		return FinalLayerPreset.new("Enter your answer contents");
	}
	
	static new() {
		return new AnswerContentLayer();
	}
}

export default AnswerContentLayer;
