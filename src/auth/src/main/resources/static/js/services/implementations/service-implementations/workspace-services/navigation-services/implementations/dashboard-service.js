"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import navigateMediator from "../../../../../../mediators/workspace/navigate-mediator.js";

class DashboardService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new DashboardService(route);
	}
	
	execute(...params) {
		navigateMediator(this._route, "dashboard");
	}
} 

export default DashboardService;
