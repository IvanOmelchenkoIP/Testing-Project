"use strict";

import registerListenerHandler from "../../../functions/listener-handlers/user/auth/register-handler.js";
import USER_DOM_FIELDS_IDS from "../../../data/dom-names/ids/user/user-ids.js";
import HTML_EVENTS from "../../../data/events/html-events.js";

selector.selectById(
	USER_DOM_FIELDS_IDS.auth.register
).addEventListener(HTML_EVENTS.onclick, registerListenerHandler);
