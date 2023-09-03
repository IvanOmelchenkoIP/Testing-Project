"use strict";

import assignmentConstructorContext from "../../../context/assignments/assignment-constructor-context.js";
import SelectedState from "../../../context/assignments/implementations/selected-state.js";
import LayerOrderState from "../../../context/assignments/implementations/order-state.js";

const constructorOnloadHandler = () => {
	assignmentConstructorContext.layers = {
		selectedChapter: new SelectedState(),
		selectedChildLayer: new SelectedState(),
	};
	assignmentConstructorContext.selectedAnswer = new SelectedState();
	assignmentConstructorContext.selectedEditable = new SelectedState();
	assignmentConstructorContext.namingOrders = {
		question: new LayerOrderState(),
		task: new LayerOrderState(),
		chapter: new LayerOrderState(),
		qpool: new LayerOrderState(),
		variant: new LayerOrderState(),  
	};
	assignmentConstructorContext.addSelection = {
		typeItems: null,
		selectedItem: null,
	};
}

export default constructorOnloadHandler;
