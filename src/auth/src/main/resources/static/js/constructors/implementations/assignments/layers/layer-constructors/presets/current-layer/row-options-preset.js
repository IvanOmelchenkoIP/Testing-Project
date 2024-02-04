"use strict";

import AbstractConstructor from "../../../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../../../utils/html/html-utils.js";

class RowOptionsPreset extends AbstractConstructor {
	constructor() {
		return domConstructor.newDiv().addClasses("row-options").addChildren(
			domConstructor.newDiv().addClasses("row-option").addChildren(
				domConstructor.newButton(">").addClasses("toggle-row-children").getElement()
			).getElement()
		).getElement();
	}
	
	static new() {
		return new RowOptionsPreset();
	}
}

export default RowOptionsPreset;
