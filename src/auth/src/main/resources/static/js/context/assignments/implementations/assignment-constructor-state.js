"use strict";

class AssignmentConstructorState {
	#focusedTask = null;
	
	setFocus(focusedTask) {
		this.#focusedTask = focusedTask;
		console.log(this.#focusedTask);
	}
	
	resetFocus() {
		this.#focusedTask = null;
	}
	
	getFocus() {
		return this.#focusedTask;
	}
	
	isParentOf(element) {
		console.log(this.#focusedTask);
		return this.#focusedTask.contains(element);
	}
}

export default AssignmentConstructorState;
