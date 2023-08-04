"use strict";

import LayerPreset from "./presets/layer-preset.js";
import AbstractConstructor from "../../../generic/abstract-constructor.js";

class IntermediateQuestionsLayer extends AbstractConstructor {
	constructor(...children) {
		return LayerPreset.new("Task questions", ...children);
	}
	
	static new(...children) {
		return new IntermediateQuestionsLayer(...children);
	}
}

export default IntermediateQuestionsLayer;
