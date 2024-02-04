"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";
import LayerConstructor from "../../../../../constructors/implementations/assignments/layers/layer-constructors/layer-constructors.js";

const addLayerQuestionListenerHandler = () => {
	let appendable;
	const childLayer = assignmentConstructorContext.layers.selectedChildLayer;
	if (childLayer) {
		if (childLayer.classList.split(" ").pop() == "question-row") return;
		appendable = childLayer;
	} else {
		appendable = assignmentConstructorContext.layers.selectedChapter;
	}
	domSelector.selectFirstByClass(appendable, "child-layers").appendChild(
		LayerConstructor.newQuestion(
			assignmentConstructorContext.namingOrder.question.next()
		)
	);
}

export default addLayerQuestionListenerHandler;
