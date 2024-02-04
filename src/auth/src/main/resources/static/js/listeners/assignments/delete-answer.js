"use strict"

import { domSelector } from "../../utils/html/html-utils.js";
import deleteAnswerListenerHandler from "../../functions/listener-handlers/assignments/delete-answer-handler.js";

const deleteButtons = domSelector.document.selectAllByClass("delete-answer-button");
console.log(deleteButtons);
for (const deleteButton of deleteButtons) deleteButton.addEventListener("click", deleteAnswerListenerHandler);
