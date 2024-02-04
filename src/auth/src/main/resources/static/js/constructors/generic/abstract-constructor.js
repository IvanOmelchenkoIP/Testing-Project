"use strict";

class AbstractConstructor {
	constructor(...params) {
		if (this.constructor = AbstractConstructor) {
			throw new Error("Cannot call abstract class static method");
		}
	}
	
	static new(...params) {
		return new AbstractConstructor(...params);
	}
}

export default AbstractConstructor;
