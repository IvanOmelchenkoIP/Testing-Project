"use strict";

class LayerOrderState {
	#order = 0;
	
	nextOrder() {
		return ++this.#order;
	}
}