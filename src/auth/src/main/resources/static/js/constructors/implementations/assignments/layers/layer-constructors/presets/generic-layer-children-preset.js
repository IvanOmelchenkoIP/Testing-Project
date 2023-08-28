"use strict";

import AbstractConstructor from "../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../utils/html/html-utils.js";
import CurrentRowUnderlinePreset from "./current-layer/current-row-underline-preset.js";

class GenericLayerChildrenPreset extends AbstractConstructor {
	constructor(childLayers, underline) {
		return domConstructor.newDiv().addClasses("child-layers-wrapper", childLayers).addChildren(
			domConstructor.newDiv().addClasses("layers-margin").getElement(),
			domConstructor.newDiv().addClasses("child-layers").getElement(),
			domConstructor.newDiv().addClasses("layers-margin").getElement(),
			CurrentRowUnderlinePreset.new(underline),
		).getElement();
	}
	
	static new(childLayers, underline) {
		return new GenericLayerChildrenPreset(childLayers, underline);
	}
}

export default GenericLayerChildrenPreset;
