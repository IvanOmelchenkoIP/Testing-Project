"use strict";

import AbstractConstructor from "../../../generic/abstract-constructor.js";
import LayerPreset from "./presets/layer-preset.js";
import IntermediateQuestionContentsLayer from "./intermediate-question-contents-layer.js";
import IntermediateAnswersLayer from "./intermediate-answers-layer.js";
import EditableQuestionContentLayer from "./editable-question-content-layer.js";
import AnswerLayer from "./answer-layer.js";

class QuestionLayer extends AbstractConstructor {
	constructor(order) {
		const name = "Question " + order;
		return LayerPreset.new(
			name,
			IntermediateQuestionContentsLayer.new(
				EditableQuestionContentLayer.new()
			),
			IntermediateAnswersLayer.new(
				AnswerLayer.new()
			 )
		);
	}
	
	static new(order) {
		return new QuestionLayer(order);
	}
}

export default QuestionLayer;
