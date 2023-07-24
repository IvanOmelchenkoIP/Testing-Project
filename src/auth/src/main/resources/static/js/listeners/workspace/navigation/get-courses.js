"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import getCoursesListenerHandler from "../../../functions/listener-handlers/workspace/navigation/get-courses-handler.js";

domSelector.document.selectById("get-courses").addEventListener("click", getCoursesListenerHandler);
