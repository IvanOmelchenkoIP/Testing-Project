"use strict";

import { workspaceNavigationService } from "../../../../services/services.js";

const getArchiveListenerHandler = () => {
	workspaceNavigationService.navigateToArchive();
}

export default getArchiveListenerHandler;
