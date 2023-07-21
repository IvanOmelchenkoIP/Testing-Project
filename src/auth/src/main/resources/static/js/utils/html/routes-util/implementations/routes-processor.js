"use strict";

class RoutesProcessor {
	pushToHistory(route) {
		window.history.pushState(null, null, route);
	}
	
	replace(route) {
		window.history.replaceState(null, null, route);
	}
	
	redirect(url) {
		window.location.replace(url);
	}
}

export default RoutesProcessor;
