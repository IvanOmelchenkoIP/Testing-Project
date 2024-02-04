"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import getDashboardListenerHandler from "../../../functions/listener-handlers/workspace/navigation/get-dashboard-handler.js";

domSelector.document.selectById("get-dashboard").addEventListener("click", getDashboardListenerHandler);
