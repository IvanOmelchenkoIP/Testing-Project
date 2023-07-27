"use strict";

import { domSelector } from "../../utils/html/html-utils.js";
import showExtendedSelectionListenerHandler from "../../functions/listener-handlers/assignments/show-extended-selection-handler.js";

domSelector.document.selectById("add-task-selection").addEventListener("click", showExtendedSelectionListenerHandler);
