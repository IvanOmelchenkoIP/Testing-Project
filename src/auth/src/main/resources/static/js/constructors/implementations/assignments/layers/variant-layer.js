"use strict";

import AbstractConstructor from "../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../utils/html/html-utils.js";

class VariantLayer extends AbstractConstructor {
	constructor(order) {
		return domConstructor.newDiv().addClasses("variant-row", "variant-contents-wrapper").addChildren(
			domConstructor.newDiv().addClasses("delete-variant-wrapper").addChildren(
				domConstructor.newButton("X").addClasses("delete-variant", "display-block").getElement()
			).getElement(),
			domConstructor.newDiv().addClasses("variant-name-wrapper").addChildren(
				domConstructor.newSpan("Variant " + order).addClasses("variant-name").getElement()
			).getElement(),
			domConstructor.newDiv().addClasses("selection-indicator").getElement()
		).getElement();
	}
	
	static new(order) {
		return new VariantLayer(order);
	}
}

export default VariantLayer;
