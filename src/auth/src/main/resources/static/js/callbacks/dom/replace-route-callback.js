"use strict";

import routesHistory from "../../dom/routes-history/instances/routes-history.js";

const replaceRouteCallback = (route) => {
	routesHistory.replace(route);
}

export default replaceRouteCallback;
