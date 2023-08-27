"use strict";

import AbstractConstructor from "../../../../generic/abstract-constructor.js";
import { domConstructor } from "../../../../../utils/html/html-utils.js";

class ChapterLayer extends AbstractConstructor {
	constructor() {
		return domConstructor.newDiv().addClasses("layer-row", "chapter-row").addChildren()	
	}
	
	static new() {
		
	}
}

export default ChapterLayer;
