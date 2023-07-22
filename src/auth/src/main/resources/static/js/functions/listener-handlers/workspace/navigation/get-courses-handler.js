"use strict";

import { workspaceNavigationService } from "../../../../services/services.js";

const getCoursesListenerHandler = () => {
	workspaceNavigationService.navigateToCourses();
}

export default getCoursesListenerHandler;
