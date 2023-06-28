"use strict";

class SessionStorageProcessor {
	setItem(key, value) {
		sessionStorage.setItem(key, value);
	}
	
	removeItem(key, value) {
		sessionStorage.removeItem(key, value);
	}
	
	getItem(key) {
		return sessionStorage.getItem(key);
	}
	
	itemExists(key) {
		return getItem(key) != null;
	}
	
	clear() {
		sessionStorage.clear();
	}
}

export default SessionStorageProcessor;