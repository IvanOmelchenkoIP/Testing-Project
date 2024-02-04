"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";
import LayerConstructor from "../../../../../constructors/implementations/assignments/layers/layer-constructors/layer-constructors.js";

const addLayerQuestionPoolListenerHandler = () => {
	let appendable;
	const childLayer = assignmentConstructorContext.layers.selectedChildLayer;
	if (childLayer) {
		const unappendableClasses = ["question-row", "qpool-row"];
		if (unappendableClasses.includes(childLayer.classList.split(" ").pop())) return;
		appendable = childLayer;
	} else {
		appendable = assignmentConstructorContext.layers.selectedChapter;
	}
	domSelector.selectFirstByClass(appendable, "child-layers").appendChild(
		LayerConstructor.newQuestion(
			assignmentConstructorContext.namingOrder.qpool.next()
		)
	);
}

export default addLayerQuestionPoolListenerHandler;
