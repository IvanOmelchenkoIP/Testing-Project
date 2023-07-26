"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import BlankOneAnswerTestTask from "../../../constructors/assignments/implementations/one-answer-test-task.js";
import addAnswerListenerHandler from "./add-answer-handler.js";
import selectTaskAndSetFocusHandler from "./select-task-focus-handler.js";
import deleteAnswerListenerHandler from "./delete-answer-handler.js";

const addTaskToEndListenerHandler = () => {
	const lastTask = domSelector.document.selectLastByClass("task-body");
	lastTask.after(BlankOneAnswerTestTask.new());
	domSelector.document.selectLastByClass("task-body").addEventListener("click", selectTaskAndSetFocusHandler);
	domSelector.document.selectLastByClass("add-answer").addEventListener("click", addAnswerListenerHandler);
	domSelector.document.selectLastByClass("delete-answer-button").addEventListener("click", deleteAnswerListenerHandler);
}

export default addTaskToEndListenerHandler;
