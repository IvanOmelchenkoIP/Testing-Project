"use strict";

import allHeadersMediator from "../fetch/headers/all-headers-mediator.js";
import { jwtFetchUtil } from "../../../utils/fetch/instances/fetch-util/fetch-utils.js";
import { htmlSetter } from "../../../utils/html/html-utils.js";
import storeWorkspaceHtml from "../../callbacks/workspace/store-workspace-html-callback.js";
import { cookiesProcessor, sessionStorageProcessor } from "../../../data/storage/storages.js";

const navigateMediator = (route, state) => {
	if (sessionStorageProcessor.getItem("workspaceState") == state) return;
	
	const allHeaders = allHeadersMediator();
	const jwt = cookiesProcessor.getCookie("jwtToken");
	const htmlCallback = htmlSetter.curried.scripted.setFirstClassInnerHtml("fillable");
	jwtFetchUtil.getHtml({
		route: route,
		headers: allHeaders,
		jwtToken: jwt,
		htmlCallback: htmlCallback,
		sessionStorageCallback: storeWorkspaceHtml
	});
	
	sessionStorageProcessor.setItem("workspaceState", state);
}

export default navigateMediator;
