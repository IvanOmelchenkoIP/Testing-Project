"use strict";

import verifyEmailListenerHandler from "../../../functions/listener-handlers/user/account/verify-email-handler.js";
import USER_DOM_FIELDS_IDS from "../../../data/dom-names/ids/user/user-ids.js";
import HTML_EVENTS from "../../../data/events/html-events.js";

selector.selectById(
	USER_DOM_FIELDS_IDS.account.sendVerifyEmailToken
).addEventListener(HTML_EVENTS.onclick, verifyEmailListenerHandler);
