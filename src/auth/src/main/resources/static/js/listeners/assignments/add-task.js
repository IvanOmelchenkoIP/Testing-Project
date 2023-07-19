"use strict";

import domSelector from "../../dom/select/instances/dom-selector.js";
console.log("hello");
domSelector.selectById("add-task").addEventListener("click", () => {
	const element = domSelector.selectAllByClassName("task-body")[1];
	const newDiv = document.createElement("div");
	newDiv.classList.add("task-body");
	newDiv.innerText = "TASK3";
	element.after(newDiv);
});