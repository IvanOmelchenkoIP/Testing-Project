"use strict";

class LocalStorageProcessor {
	setItem(key, value) {
		localStorage.setItem(key, value);
	}
	
	removeItem(key, value) {
		localStorage.removeItem(key, value);
	}
	
	getItem(key) {
		return localStorage.getItem(key);
	}
	
	itemExists(key) {
		return getItem(key) != null;
	}
	
	clear() {
		localStorage.clear();
	}
}

export default LocalStorageProcessor;