"use strict";

import { domConstructor } from "../../../utils/html/html-utils.js";
import BlankOneAnswerQuestion from "./one answer-test-question.js";
import AnswerAdder from "./answer-adder.js";

class BlankOneAnswerTestTask {
	static new() {
		return domConstructor.newDiv().addTabindex(0).addClasses("task-body").addChildren(
			domConstructor.newDiv().addClasses("task-content-container").addChildren(
				domConstructor.newDiv().addClasses("task-content").addChildren(
					domConstructor.newDiv("Enter the question")
								  .addClasses("editable-input")
								  .addRole("textbox")
								  .setContentEditableTrue()
								  .getElement()
				).getElement()
			).getElement(),
			domConstructor.newDiv().addClasses("answers-container").addChildren(
				BlankOneAnswerQuestion.new(),
				AnswerAdder.new()
			).getElement()
		).getElement();
	}
}

export default BlankOneAnswerTestTask;
