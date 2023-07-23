"use strict";

import { domConstructor } from '../../../utils/html/html-utils.js';

const addAnswerListenerHandler = (event) => {
	console.log(event.target);

	event.target.before(domConstructor.newDiv().addClasses("answer-row").addChildren(
		domConstructor.newDiv().addClasses("round-checkmark").getElement(),
		domConstructor.newDiv("Enter your answer").addClasses("answer-content").getElement()
	).getElement());
}

export default addAnswerListenerHandler;
