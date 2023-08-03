"use strict";

class AbstractConstructor {
	static new(...params) {
		if (this.prototype = AbstractConstructor) {
			throw new Error("Cannot call abstract class static method");
		}
	}
}

export default AbstractConstructor;
