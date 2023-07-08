"use strict";

class RoutesHistoryProcessor {
	pushToHistory(route) {
		window.history.pushState(null, null, route);
	}
	
	replace(route) {
		window.history.replaceState(null, null, route);
	}
}

export default RoutesHistoryProcessor;
