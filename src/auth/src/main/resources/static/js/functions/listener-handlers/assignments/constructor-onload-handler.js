"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";
import SelectedState from "../../../context/assignments/implementations/selected-state.js";
import OrderState from "../../../context/assignments/implementations/order-state.js";

const constructorOnloadHandler = () => {
	assignmentConstructorContext.selectedTask = new SelectedState();
	assignmentConstructorContext.selectedAnswer = new SelectedState();
	assignmentConstructorContext.selectedEditable = new SelectedState();
	assignmentConstructorContext.namingOrders = {
		question: new OrderState(),
		task: new OrderState(),
		chapter: new OrderState()
	}
}

export default constructorOnloadHandler;
