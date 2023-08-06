"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../utils/html/html-utils.js";
import LayerShowChildrenPreset from "./layer-show-children-preset.js";
import LayerContentPreset from "./layer-content-preset.js";

class LayerPreset extends AbstractConstructor {
	constructor(name, ...children) {
		return domConstructor.newDiv().addClasses("layer-row-wrapper").addChildren(
			domConstructor.newDiv()
				.addClasses("layer-row-current")
				.addChildren(
					LayerShowChildrenPreset.new(),
					LayerContentPreset.new(name)
				)
				.getElement(),
			domConstructor.newDiv()
				.addClasses("layer-row-children")
				.addChildren(...children)
				.getElement(),
		).getElement();
	}

	static new(name, ...children) {
		return new LayerPreset(name, ...children);
	}
}

export default LayerPreset;
