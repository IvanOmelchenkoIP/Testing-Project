"use strict";

import ROUTES from "../../../data/routes/routes.js";
import WorkspaceNavigationService from "../../implementations/service-classes/workspace-services/navigation-service.js";
import * as navigationServiceImpls from "../../implementations/service-implementations/workspace-services/navigation-services/navigation-services.js";

const workspaceNavigationService = new WorkspaceNavigationService(
	navigationServiceImpls.DashboardService.withRoute(ROUTES.workspaceDashboard),
	navigationServiceImpls.ArchiveService.withRoute(ROUTES.workspaceArchive),
	navigationServiceImpls.CoursesService.withRoute(ROUTES.workspaceCourses),
);

export default workspaceNavigationService;
