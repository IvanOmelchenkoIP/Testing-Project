"use strict";

import allHeadersMediator from "../fetch/headers/all-headers-mediator.js";
<<<<<<< HEAD:src/auth/src/main/resources/static/js/functions/mediators/workspace/navigate-mediator.js
import { jwtFetchUtil } from "../../../utils/fetch/instances/fetch-util/fetch-utils.js";
import { htmlSetter } from "../../../utils/html/html-utils.js";
import storeWorkspaceHtml from "../../callbacks/workspace/store-workspace-html-callback.js";
import { cookiesProcessor, sessionStorageProcessor } from "../../../data/storage/storages.js";
import { /*jwt*/fetchUtil } from "../../utils/fetch/instances/fetch-util/fetch-utils.js";
import setScriptedClassInnerHtmlCurried from "../../dom/set/implementations/curried/scripted/set-class-html.js";
import storeWorkspaceHtml from "../../callbacks/workspace/navigation/store-workspace-html-callback.js";

import { /*cookiesProcessor,*/ sessionStorageProcessor } from "../../data/storage/storages.js";


const navigateMediator = (route, state) => {
	if (sessionStorageProcessor.getItem("workspaceState") == state) return;
	
	const allHeaders = allHeadersMediator();
	//const jwt = cookiesProcessor.getCookie("jwtToken");
	const htmlCallback = setScriptedClassInnerHtmlCurried("fillable");
	fetchUtil.getHtml({
		route: route,
		headers: allHeaders,
		htmlCallback: htmlCallback,
		sessionStorageCallback: storeWorkspaceHtml
	});
	
	sessionStorageProcessor.setItem("workspaceState", state);
}

export default navigateMediator;
