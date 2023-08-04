"use strict";

class LayerOrderState {
	#order = 0;
	
	next() {
		return ++this.#order;
	}
}

export default LayerOrderState;
