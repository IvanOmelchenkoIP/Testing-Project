"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../utils/html/html-utils.js";
import LayerShowChildrenPreset from "./layer-show-children-preset.js";

class LayerContentPreset extends AbstractConstructor {
	constructor(content) {
		return domConstructor.newDiv().addClasses("layer-row-content-wrapper").addChildren(
			domConstructor.newDiv().addClasses("layer-icon-wrapper").addChildren(
				domConstructor.newDiv("Q").addClasses("layer-icon").getElement()
			).getElement(),
			domConstructor.newDiv().addClasses("layer-name-wrapper").addChildren(
				domConstructor.newInput()
					.addValue(content)
					.addClasses("layer-name")
					.setReadonlyTrue()
					.getElement()
			).getElement(),
		).getElement()
	}

	static new(content) {
		return new LayerContentPreset(content);
	}
}

export default LayerContentPreset;
