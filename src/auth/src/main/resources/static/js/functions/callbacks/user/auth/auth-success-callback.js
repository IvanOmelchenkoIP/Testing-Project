"use strict";

import ROUTES from "../../../data/routes/routes.js";
import { jwtFetchUtil } from "../../../utils/fetch/instances/fetch-util/fetch-utils.js";
import { cookiesProcessor } from "../../../data/storage/storages.js";
import allHeadersMediator from "../../../mediators/fetch/headers/all-headers-mediator.js";
import replaceRouteCallback from "../../dom/replace-route-callback.js";
import setScriptedDocumentCallback from "../../dom/set-scripted-document-callback.js";

const authSuccess = (response) => {
	const REDIRECT_ROUTE = ROUTES.workspace;
	const jwt = cookiesProcessor.getCookie("jwtToken");
	const allHeaders = allHeadersMediator();
	jwtFetchUtil.getHtml({
		route: REDIRECT_ROUTE,
		headers: allHeaders,
		jwtToken: jwt,
		htmlCallback: setScriptedDocumentCallback,
		routeCallback: replaceRouteCallback
	});
}

export default authSuccess;
