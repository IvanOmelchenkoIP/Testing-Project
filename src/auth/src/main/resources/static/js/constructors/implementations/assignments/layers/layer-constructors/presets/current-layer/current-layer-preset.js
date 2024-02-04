"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";

class CurrentLayerPreset extends AbstractConstructor {
	constructor(type, ...elements) {
		return domConstructor.newDiv().addClasses("current-layer", type).addChildren(
			...elements
		).getElement();
	}
	
	static new(type, ...elements) {
		return new CurrentLayerPreset(type, ...elements);
	}
}

export default CurrentLayerPreset;
