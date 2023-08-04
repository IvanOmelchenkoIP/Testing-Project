"use strict";

import AbstractConstructor from "../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../utils/html/html-utils.js";

class QuestionLayer extends AbstractConstructor {
	static new(order) {
		return domConstructor.newDiv().addClasses("layer-row-wrapper").addChildren(
			domConstructor.newDiv().addClasses("layer-row-current").addChildren(
				domConstructor.newDiv().addClasses("layer-show-children-wrapper").addChildren(
					domConstructor.newButton(">").addClasses("layer-show-children").getElement()
				).getElement(),
				domConstructor.newDiv().addClasses("layer-row-content-wrapper").addChildren(
					domConstructor.newDiv().addClasses("layer-icon-wrapper").addChildren(
						domConstructor.newDiv("Q").addClasses("layer-icon").getElement()
					).getElement(),
					domConstructor.newDiv().addClasses("layer-name-wrapper").addChildren(
						domConstructor.newDiv()
									  .addValue("Question " + order)
									  .addClasses("layer-name")
									  .setReadonlyTrue()
									  .getElement()
					).getElement(),
				).getElement()
			).getElement(),
			domConstructor.newDiv().addClasses("layer-row-children").addChildren(
				
			).getElement(),
		).getElement();
	}
}

export default QuestionLayer;
