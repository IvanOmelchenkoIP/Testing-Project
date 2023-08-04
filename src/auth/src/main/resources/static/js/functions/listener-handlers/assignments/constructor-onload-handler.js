"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";
import SelectedState from "../../../context/assignments/implementations/selected-state.js";
import LayerOrderState from "../../../context/assignments/implementations/order-state.js";

const constructorOnloadHandler = () => {
	assignmentConstructorContext.selectedTask = new SelectedState();
	assignmentConstructorContext.selectedAnswer = new SelectedState();
	assignmentConstructorContext.selectedEditable = new SelectedState();
	assignmentConstructorContext.namingOrders = {
		question: new LayerOrderState(),
		task: new LayerOrderState(),
		chapter: new LayerOrderState()  
	}
}

export default constructorOnloadHandler;
