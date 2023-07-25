"use strict";

import { domConstructor } from "../../../utils/html/html-utils.js";
import addAnswerListenerHandler from "../../../functions/listener-handlers/assignments/add-answer-handler.js";

class AnswerAdder {
	static new() {
		return domConstructor.newDiv().addClasses("answer-row", "add-answer").addChildren(
			domConstructor.newDiv().addClasses("round-checkmark", "add-new-answer").addChildren(
				domConstructor.newP("+").getElement()
			).getElement(),
			domConstructor.newDiv("Add new answer").addClasses("answer-content").getElement()
		).addEventListener("click", addAnswerListenerHandler).getElement();
	}
}

export default AnswerAdder;
