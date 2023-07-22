"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import getArchiveListenerHandler from "../../../functions/listener-handlers/workspace/navigation/get-archive-handler.js";

domSelector.selectById("get-archive").addEventListener("click", getArchiveListenerHandler);
