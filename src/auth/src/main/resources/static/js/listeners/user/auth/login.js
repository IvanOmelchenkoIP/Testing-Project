"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import loginListenerHandler from "../../../functions/listener-handlers/user/auth/login-handler.js";

domSelector.document.selectById("login-user").addEventListener("click", loginListenerHandler);
