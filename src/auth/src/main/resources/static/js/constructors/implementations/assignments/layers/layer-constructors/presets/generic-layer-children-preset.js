"use strict";

import AbstractConstructor from "../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../utils/html/html-utils.js";

class GenericLayerChildrenPreset extends AbstractConstructor {
	constructor(childLayersType, underlineType) {
		return domConstructor.newDiv().addClasses("child-layers-wrapper", childLayersType).addChildren(
			domConstructor.newDiv().addClasses("layers-margin").getElement(),
			domConstructor.newDiv().addClasses("child-layers").getElement(),
			domConstructor.newDiv().addClasses("layers-margin").getElement(),
			domConstructor.newDiv().addClasses("current-row-underline", underlineType).getElement(),
		).getElement();
	}
	
	static new(childLayersType, underlineType) {
		return new GenericLayerChildrenPreset(childLayersType, underlineType);
	}
}

export default GenericLayerChildrenPreset;
