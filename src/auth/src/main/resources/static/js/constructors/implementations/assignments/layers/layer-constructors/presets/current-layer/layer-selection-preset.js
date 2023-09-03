"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";

class LayerSelectionPreset extends AbstractConstructor {
	constructor(selection) {
		return domConstructor.newDiv()
			.addClasses("layer-selection-indicator", selection)
			.getElement();
	}

	static new(selection) {
		return new LayerSelectionPreset(selection);
	}
}

export default LayerSelectionPreset;
