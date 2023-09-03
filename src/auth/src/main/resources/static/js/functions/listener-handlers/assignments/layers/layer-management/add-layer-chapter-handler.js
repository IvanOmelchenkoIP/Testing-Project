"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";
import LayerConstructor from "../../../../../constructors/implementations/assignments/layers/layer-constructors/layer-constructors.js";

const addLayerChapterListenerHandler = () => {
	domSelector.document
		.selectFirstByClass("layers-wrapper")
		.appendChild(
			LayerConstructor.newChapter(
				assignmentConstructorContext.namingOrders.chapter.next()
			)
		);
	console.log("add chapter");
}

export default addLayerChapterListenerHandler;
