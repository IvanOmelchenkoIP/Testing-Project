"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";

class LayerIconContainerPreset extends AbstractConstructor {
	constructor(icon) {
		return domConstructor.newDiv().addClasses("layer-icon-container").addChildren(
				domConstructor.newDiv(icon).addClasses("layer-icon").getElement()
			).getElement();
	}
	
	static new(icon) {
		return new LayerIconContainerPreset(icon);
	}
}


export default LayerIconContainerPreset;
