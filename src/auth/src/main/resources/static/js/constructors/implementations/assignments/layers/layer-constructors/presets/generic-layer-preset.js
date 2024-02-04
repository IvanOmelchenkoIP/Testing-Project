"use strict";

import AbstractConstructor from "../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../utils/html/html-utils.js";

class GenericLayerPreset extends AbstractConstructor {
	constructor(layerTypeClass, ...layerContents) {
		return domConstructor.newDiv().addClasses("layer-row", layerTypeClass).addChildren(
			domConstructor.newDiv().addClasses("layer-row-wrapper").addChildren(...layerContents).getElement(),
			domConstructor.newDiv().addClasses("layers-margin").getElement()
		).getElement();
	}
	
	static new(layerTypeClass, ...layerContents) {
		return new GenericLayerPreset(layerTypeClass, ...layerContents);
	}
}

export default GenericLayerPreset;
