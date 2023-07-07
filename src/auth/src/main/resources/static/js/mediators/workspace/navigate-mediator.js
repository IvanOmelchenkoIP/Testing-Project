"use strict";

import allHeadersMediator from "../fetch/headers/all-headers-mediator.js";
import { jwtFetchUtil } from "../../utils/fetch/instances/fetch-util/fetch-utils.js";
import cookiesProcessor from "../../data/storage/storages.js";
import setScriptedClassInnerHtmlCurried from "../../dom/set/implementations/curried/scripted/set-class-html.js";
import storeWorkspaceHtml from "../../callbacks/workspace/navigation/store-workspace-html-callback.js";

import { sessionStorageProcessor } from "../../data/storage/storages.js";

const navigateMediator = (route, state) => {
	if (sessionStorageProcessor.getItem("workspaceState") == state) return;
	
	const allHeaders = allHeadersMediator();
	const jwt = cookiesProcessor.getCookie("jwtToken");
	const htmlCallback = setScriptedClassInnerHtmlCurried("fillable");
	jwtFetchUtil.getHtml({
		route: route,
		headers: allHeaders,
		jwtToken: jwt,
		htmlCallback: htmlCallback,
		sessionStorageCallback: storeWorkspaceHtml
	});
	
	sessionStorageProcessor.setItem("workspaceState") = state;
}

export default navigateMediator;
