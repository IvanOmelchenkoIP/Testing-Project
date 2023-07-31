"use strict";

class SelectedTaskState {
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

export default SelectedTaskState;
