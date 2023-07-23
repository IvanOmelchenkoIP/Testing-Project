"use strict";

import { domSelector } from "../../utils/html/html-utils.js";
import addAnswerListenerHandler from "../../functions/listener-handlers/assignments/add-answer-handler.js";

domSelector.selectFirstByClass("add-answer").addEventListener("click", addAnswerListenerHandler);