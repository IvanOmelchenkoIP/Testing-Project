"use strict";

class WorkspaceNavigationService {
	#dashboardService;
	#archiveService;
	#coursesService;
	
	constructor(dashboardService, archiveService, coursesService) {
		this.#dashboardService = dashboardService;
			this.#archiveService = archiveService;
		this.#coursesService = coursesService;
	}
	
	navigateToDashboard(...params) {
		this.#dashboardService.execute(...params);
	}
	
	navigateToArchive(...params) {
		this.#archiveService.execute(...params);
	}
	
	navigateToCourses(...params) {
		this.#coursesService.execute(...params);
	}
}

export default WorkspaceNavigationService;
