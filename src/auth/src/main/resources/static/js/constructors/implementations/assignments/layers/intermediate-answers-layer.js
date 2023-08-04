"use strict";

import LayerPreset from "./presets/layer-preset.js";
import AbstractConstructor from "../../../generic/abstract-constructor.js";

class IntermediateAnswersLayer extends AbstractConstructor {
	constructor(...children) {
		return LayerPreset.new("Question answers", ...children);
	}
	
	static new(...children) {
		return new IntermediateAnswersLayer(...children);
	}
}

export default IntermediateAnswersLayer;
