"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../utils/html/html-utils.js";

class LayerShowChildrenPreset extends AbstractConstructor {
	constructor() {
		return domConstructor.newDiv().addClasses("layer-show-children-wrapper").addChildren(
			domConstructor.newButton(">").addClasses("layer-show-children").getElement()
		).getElement();
	}

	static new() {
		return new LayerShowChildrenPreset();
	}
}

export default LayerShowChildrenPreset;
