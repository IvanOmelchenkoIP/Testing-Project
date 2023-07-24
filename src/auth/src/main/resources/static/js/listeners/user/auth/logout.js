"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import logoutListenerHandler from "../../../functions/listener-handlers/user/auth/logout-handler.js";

domSelector.document.selectById("logout-user").addEventListener("click", logoutListenerHandler);
