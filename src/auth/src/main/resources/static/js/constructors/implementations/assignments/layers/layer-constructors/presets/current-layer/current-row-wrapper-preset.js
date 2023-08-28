"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";

class CurrentRowWrapperPreset extends AbstractConstructor {
	constructor(...elements) {
		return domConstructor.newDiv().addClasses("current-row-wrapper").addChildren(
			...elements
		).getElement();
	}
	
	static new(...elements) {
		return new CurrentRowWrapperPreset(...elements);
	}
}

export default CurrentRowWrapperPreset;
