"use strict";

class AssignmentConstructorState {
	#focusedTask = null;
	
	setFocus(focusedTask) {
		this.#focusedTask = focusedTask;
	}
	
	resetFocus() {
		this.#focusedTask = null;
	}
	
	getFocus() {
		return this.#focusedTask;
	}
}

export default AssignmentConstructorState;
