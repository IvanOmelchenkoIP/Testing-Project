"use strict";

import { domSelector } from "../../utils/html/html-utils.js";
import closeExtendedSelectionListenerHandler from "../../functions/listener-handlers/assignments/close-extended-selection-handler.js";

domSelector.document.selectById("close-extended-selection").addEventListener("click", closeExtendedSelectionListenerHandler);
