"use strict";

import resetTaskFocusHandler from "../../functions/listener-handlers/assignments/reset-task-focus-handler.js";
import { domSelector } from "../../utils/html/html-utils.js";

domSelector.selectFirstByClass(document, "editor-area").addEventListener("click", resetTaskFocusHandler);
