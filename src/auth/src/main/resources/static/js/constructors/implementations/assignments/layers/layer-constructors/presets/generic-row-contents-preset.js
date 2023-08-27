"use strict";

import AbstractConstructor from "../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../utils/html/html-utils.js";

class GenericRowContentsPreset extends AbstractConstructor {
	constructor(name, icon) {
		return domConstructor.newDiv().addClasses("row-contents").addChildren(
			domConstructor.newDiv().addClasses("layer-icon-container").addChildren(
				domConstructor.newSpan(icon).addClasses("layer-icon").getElement()
			).getElement(),
			domConstructor.newDiv().addClasses("layer-name-container").addChildren(
				domConstructor.newInput("layer-name").addValue(name).setReadonlyTrue().getElement()
			).getElement()
		).getElement();
	}
	
	static new(name, icon) {
		return new GenericRowContentsPreset(name, icon);
	}
}

export default GenericRowContentsPreset;
