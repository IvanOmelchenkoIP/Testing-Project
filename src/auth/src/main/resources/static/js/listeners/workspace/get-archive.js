"use strict";

import domSelector from "../../dom/select/instances/dom-selector.js";
import { workspaceNavigationService } from "../../services/services.js";

domSelector.selectById("get-archive").addEventListener("click", () => {
	workspaceNavigationService.navigateToArchive();
});
