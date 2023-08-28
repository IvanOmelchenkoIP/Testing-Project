"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";

class CurrentLayerPreset extends AbstractConstructor {
	constructor(underline) {
		return domConstructor.newDiv().addClasses("current-row-underline", underline).getElement();
	}
	
	static new(underline) {
		return new CurrentLayerPreset(underline);
	}
}

export default CurrentLayerPreset;
