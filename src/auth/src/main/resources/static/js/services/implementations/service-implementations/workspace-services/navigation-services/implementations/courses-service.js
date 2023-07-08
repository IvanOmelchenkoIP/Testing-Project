"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import navigateMediator from "../../../../../../mediators/workspace/navigate-mediator.js";

class CoursesService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new CoursesService(route);
	}
	
	execute(...params) {
		navigateMediator(this._route, "courses");
	}
} 

export default CoursesService;
