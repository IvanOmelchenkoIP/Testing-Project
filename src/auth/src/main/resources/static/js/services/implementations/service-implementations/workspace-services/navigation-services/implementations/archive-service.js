"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import navigateMediator from "../../../../../../mediators/workspace/navigate-mediator.js";

class ArchiveService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new ArchiveService(route);
	}
	
	execute(...params) {
		navigateMediator(this._route, "archive");
	}
} 

export default ArchiveService;
