"use strict"

import constructorOnloadHandler from "../../functions/listener-handlers/assignments/constructor-onload-handler.js";

if (document.readyState == "complete") {
	constructorOnloadHandler();
} else {
	window.addEventListener("load", constructorOnloadHandler);
}

