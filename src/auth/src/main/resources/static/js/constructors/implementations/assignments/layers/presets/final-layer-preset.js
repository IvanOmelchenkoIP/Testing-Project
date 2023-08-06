"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../utils/html/html-utils.js";
import LayerContentPreset from "./layer-content-preset.js";

class FinalLayerPreset extends AbstractConstructor {
	constructor(name) {
		return domConstructor.newDiv().addClasses("layer-row-wrapper").addChildren(
			domConstructor.newDiv().addClasses("layer-row-current").addChildren(
				LayerContentPreset.new(name)
			).getElement()
		).getElement();
	}

	static new(name) {
		return new FinalLayerPreset(name);
	}
}

export default FinalLayerPreset;
