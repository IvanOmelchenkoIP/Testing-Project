"use strict";

import { domSelector } from "../../../../utils/html/html-utils.js";
import QuestionLayer from "../../../../constructors/implementations/assignments/layers/question-layer.js";
import assignmentConstructorContext from "../../../../context/assignments/assignment-constructor-context.js";

const quickAddListenerHandler = () => {
	const question = QuestionLayer.new(assignmentConstructorContext.namingOrders.question.next())
	domSelector.document.selectLastByClass("layers-container").appendChild(
		question
	);
}

export default quickAddListenerHandler;
