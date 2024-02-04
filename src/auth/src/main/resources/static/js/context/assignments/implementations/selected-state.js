"use strict";

class SelectedState {
	#selected = null;

	select(target) {
		this.#selected = target;
	}
	
	deselect() {
		this.#selected = null;
	}
	
	get() {
		return this.#selected;
	}
}

export default SelectedState;
