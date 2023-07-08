"use strict";

import { sessionStorageProcessor } from "../../../data/storage/storages.js";

const storeWorkspaceHtml = (html) => {
	sessionStorageProcessor.setItem("workspaceHtml", html);
}

export default storeWorkspaceHtml;
