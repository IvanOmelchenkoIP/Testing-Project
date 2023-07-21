"use strict";

import logoutListenerHandler from "../../../functions/listener-handlers/user/auth/logout-handler.js";
import USER_DOM_FIELDS_IDS from "../../../data/dom-names/ids/user/user-ids.js";
import HTML_EVENTS from "../../../data/events/html-events.js";


domSelector.selectById(
	USER_DOM_FIELDS_IDS.auth.logout
).addEventListener(HTML_EVENTS.onclick, logoutListenerHandler);
