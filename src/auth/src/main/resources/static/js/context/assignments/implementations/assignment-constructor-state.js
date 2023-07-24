"use strict";

class AssignmentConstructorState {
	#focusedTask = null;

	setFocus(target) {
		this.#focusedTask = target;
	}
	
	resetFocus() {
		this.#focusedTask = null;
	}
	
	getFocus() {
		return this.#focusedTask;
	}
	
	isParentOf(element) {
		return this.#focusedTask.contains(element);
	}
}

export default AssignmentConstructorState;
