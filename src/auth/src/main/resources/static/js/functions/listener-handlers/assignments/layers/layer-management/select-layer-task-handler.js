"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";
import deselectChapters from "../../../../mediators/assignment/layers/layers/deselect-chapters.js";
import deselectQuestions from "../../../../mediators/assignment/layers/layers/deselect-questions.js";
import deselectTasks from "../../../../mediators/assignment/layers/layers/deselect-tasks.js";
import deselectQuestionPools from "../../../../mediators/assignment/layers/layers/deselect-question-pools.js";

const selectLayerTaskListenerHandler = (layer) => {
	deselectTasks();
}

export default selectLayerTaskListenerHandler;
