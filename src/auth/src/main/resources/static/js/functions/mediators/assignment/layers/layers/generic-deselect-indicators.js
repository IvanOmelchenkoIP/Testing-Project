"use strict";

const deselectIndicators = (layerIndicators) => {
	for (const layerIndicator of layerIndicators) {
		layerIndicator.classList.remove("selected");
		layerIndicator.classList.remove("selected-parent");
		layerIndicator.classList.remove("selected-child");
	}
}

export default deselectIndicators;
