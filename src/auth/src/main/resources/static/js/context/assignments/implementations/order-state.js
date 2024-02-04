"use strict";

class LayerOrderState {
	#order = 1;
	
	next() {
		return ++this.#order;
	}
}

export default LayerOrderState;
