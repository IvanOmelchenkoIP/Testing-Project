"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";

const constructorOnloacationchangeHandler = () => {
	const keys = Object.keys(assignmentConstructorContext);
	for (const key of keys) delete assignmentConstructorContext[key];
}

export default constructorOnloacationchangeHandler;
