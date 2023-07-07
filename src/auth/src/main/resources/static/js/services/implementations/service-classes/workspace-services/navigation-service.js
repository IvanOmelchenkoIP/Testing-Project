"use strict";

class WorkspaceNavigationService {
	#dashboardService;
	#coursesService;
	#archiveService;
	
	constructor(dashboardService, coursesService, archiveService) {
		this.#dashboardService = dashboardService;
		this.#coursesService = coursesService;
		this.#archiveService = archiveService;
	}
	
	navigateToDashboard(...params) {
		this.#dashboardService.execute(...params);
	}
	
	navigateToCourses(...params) {
		this.#coursesService.execute(...params);
	}
	
	navigateToArchive(...params) {
		this.#archiveService.execute(...params);
	}
}

export default WorkspaceNavigationService;
