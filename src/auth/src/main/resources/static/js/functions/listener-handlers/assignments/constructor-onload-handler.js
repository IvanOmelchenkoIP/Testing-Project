"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";
import AssignmentConstructorState from "../../../context/assignments/implementations/assignment-constructor-state.js";

const constructorOnloadHandler = () => {
	assignmentConstructorContext.focusedTask = new AssignmentConstructorState();
}

export default constructorOnloadHandler;
