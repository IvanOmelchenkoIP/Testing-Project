"use strict";

import ChapterLayer from "./chapter-layer.js";
import QuestionLayer from "./question-layer.js";
import TaskLayer from "./task-layer.js";
import QuestionPoolLayer from "./qpool-layer.js";

class LayerConstructor {
	static newChapter(count) {
		return ChapterLayer.new(count);
	}
	
	static newQuestion(count) {
		return QuestionLayer.new(count);
	}
	
	static newTask(count) {
		return TaskLayer.new(count);
	}
	
	static newQuestionPool(count) {
		return QuestionPoolLayer.new(count);
	}
}

export default LayerConstructor;
