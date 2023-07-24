"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import verifyEmailListenerHandler from "../../../functions/listener-handlers/user/account/verify-email-handler.js";

domSelector.document.selectById("verify-email").addEventListener("click", verifyEmailListenerHandler);
