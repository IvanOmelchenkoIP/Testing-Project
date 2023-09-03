"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";
import LayerConstructor from "../../../../../constructors/implementations/assignments/layers/layer-constructors/layer-constructors.js";

const addLayerTaskListenerHandler = () => {
	const chapter = assignmentConstructorContext.layers.selectedChapter;
	domSelector.selectFirstByClass(chapter, "child-layers").appendChild(
		LayerConstructor.newQuestion(
			assignmentConstructorContext.namingOrder.task.next()
		)
	);
}

export default addLayerTaskListenerHandler;
