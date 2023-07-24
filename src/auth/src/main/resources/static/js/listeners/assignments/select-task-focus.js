"use strict";

import selectTaskAndSetFocusHandler from "../../functions/listener-handlers/assignments/select-task-focus-handler.js";
import { domSelector } from "../../utils/html/html-utils.js";

const tasks = domSelector.document.selectAllByClass("task-body");
for (const task of tasks) task.addEventListener("click", selectTaskAndSetFocusHandler);
