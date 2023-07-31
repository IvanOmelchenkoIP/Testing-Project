"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";
import SelectedTaskState from "../../../context/assignments/implementations/selected-task-state.js";

const constructorOnloadHandler = () => {
	assignmentConstructorContext.selectedTask = new SelectedTaskState();
}

export default constructorOnloadHandler;
