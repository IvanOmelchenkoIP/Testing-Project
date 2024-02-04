"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import resetPasswdListenerHandler from "../../../functions/listener-handlers/user/account/reset-passwd-handler.js";

domSelector.document.selectById("reset-passwd").addEventListener("click", resetPasswdListenerHandler);
