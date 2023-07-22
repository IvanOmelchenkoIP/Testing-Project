"use strict";

import { sessionStorageProcessor } from "../../../../data/storage/storages.js";
import { workspaceNavigationService } from "../../../../services/services.js";

import setScriptedClassInnerHtml from "../../../dom/set/implementations/scripted/set-class-html.js";

const fillableLoadListenerHandler = () => {
	const html = sessionStorageProcessor.getItem("workspaceHtml");
	if (!html) {
		workspaceNavigationService.navigateToDashboard();
		return;
	}
	setScriptedClassInnerHtml("fillable", html);
}

export default fillableLoadListenerHandler;
