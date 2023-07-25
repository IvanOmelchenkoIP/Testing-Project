"use strict";

import addTaskToEndListenerHandler from "../../functions/listener-handlers/assignments/add-task-to-end-handler.js";
import { domSelector } from "../../utils/html/html-utils.js";

domSelector.document.selectById("add-task").addEventListener("click", addTaskToEndListenerHandler);
