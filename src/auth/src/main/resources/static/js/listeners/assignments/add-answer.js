"use strict";

import { domSelector } from "../../utils/html/html-utils.js";
import addAnswerListenerHandler from "../../functions/listener-handlers/assignments/add-answer-handler.js";

const answerAdders = domSelector.document.selectAllByClass("add-answer");
for (const answerAdder of answerAdders) answerAdder.addEventListener("click", addAnswerListenerHandler);
