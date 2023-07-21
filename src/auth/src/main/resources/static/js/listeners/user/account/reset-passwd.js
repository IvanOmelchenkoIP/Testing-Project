"use strict";

import resetPasswdListenerHandler from "../../../functions/listener-handlers/user/account/reset-passwd-handler.js";
import USER_DOM_FIELDS_IDS from "../../../data/dom-names/ids/user/user-ids.js";
import HTML_EVENTS from "../../../data/events/html-events.js";

selector.selectById(
	USER_DOM_FIELDS_IDS.account.resetPassword
).addEventListener(HTML_EVENTS.onclick, resetPasswdListenerHandler);
