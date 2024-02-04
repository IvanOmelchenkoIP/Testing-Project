"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";

class LayerNameContainerPreset extends AbstractConstructor {
	constructor(name) {
		return domConstructor.newDiv().addClasses("layer-name-container").addChildren(
				domConstructor.newInput().addClasses("layer-name").addValue(name).setReadonlyTrue().getElement()
			).getElement();
	}
	
	static new(name) {
		return new LayerNameContainerPreset(name);
	}
}


export default LayerNameContainerPreset;
