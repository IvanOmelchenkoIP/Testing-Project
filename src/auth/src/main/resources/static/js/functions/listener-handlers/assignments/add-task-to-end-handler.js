"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import BlankOneAnswerTestTask from "../../../constructors/assignments/implementations/one-answer-test-task.js";

const addTaskToEndListenerHandler = () => {
	const lastTask = domSelector.document.selectLastByClass("task-body");
	lastTask.after(BlankOneAnswerTestTask.new());
}

export default addTaskToEndListenerHandler;
