"use strict";

import constructorOnloacationchangeHandler from "../../functions/listener-handlers/assignments/constructor-locationchange-handler.js";
import constructorOnloadHandler from "../../functions/listener-handlers/assignments/constructor-onload-handler.js";

window.addEventListener("locationchange", constructorOnloacationchangeHandler);

(() => { 
	if (document.readyState == "complete") {
		constructorOnloadHandler();
	} else {
		window.addEventListener("load", constructorOnloadHandler);
	}
})();
