"use strict";

import AbstractConstructor from "../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../utils/html/html-utils.js";
import LayerPreset from "./presets/layer-preset.js";

class QuestionLayer extends AbstractConstructor {
	constructor(order) {
		const name = "Question " + order;
		return LayerPreset.new(
			name,
		);
	}
	
	static new(order) {
		return new QuestionLayer(order);
	}
}

export default QuestionLayer;
