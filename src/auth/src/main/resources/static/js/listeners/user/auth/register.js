"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import registerListenerHandler from "../../../functions/listener-handlers/user/auth/register-handler.js";

domSelector.document.selectById("register-user").addEventListener("click", registerListenerHandler);
