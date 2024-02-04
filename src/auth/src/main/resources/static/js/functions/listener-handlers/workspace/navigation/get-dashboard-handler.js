"use strict";

import { workspaceNavigationService } from "../../../../services/services.js";

const getDashboardListenerHandler = () => {
	workspaceNavigationService.navigateToDashboard();
}

export default getDashboardListenerHandler;
