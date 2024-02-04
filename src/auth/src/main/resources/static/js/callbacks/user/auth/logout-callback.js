"use strict"

import BASE_ROUTE from "../../../data/routes/base-route.js";
import ROUTES from "../../../data/routes/routes.js";

const logoutCallback = () => {
	location.href = + BASE_ROUTE + ROUTES.main;
}

export default logoutCallback;
