"use strict";

import { domConstructor } from "../../../utils/html/html-utils.js";

class BlankOneAnswerQuestion {
	static new() {
		return domConstructor.newDiv().addClasses("answer-row").addChildren(
			domConstructor.newDiv().addClasses("round-checkmark").getElement(),
			domConstructor.newDiv("Enter your answer").addClasses("answer-content").getElement()
		).getElement();
	}
}

export default BlankOneAnswerQuestion;
