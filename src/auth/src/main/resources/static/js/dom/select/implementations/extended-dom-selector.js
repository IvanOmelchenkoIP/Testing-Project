"use strict";

import DOMSelector from "./dom-selector.js";

class ExtendedDOMSelector extends DOMSelector {
	selectAllBySelector(selector, ...names) {
		const data = {};
		for (const name of names) data[name] = selector(name);
		return data;
	}
	
	selectAllById(...names) {
		return this.selectAllBySelector(this.idSelector(), ...names);
	}
	
	selectAllByName(...names) {
		return this.selectAllBySelector(this.nameSelector(), ...names);
	}
	
	selectAllByTag(...names) {
		return this.selectAllBySelector(this.tagSelector(), ...names);
	}
	
	selectAllByClass(...names) {
		return this.selectAllBySelector(this.classSelector(), ...names);
	}
	
	selectAllBySelectorAndValidate(selector, validatorFn, ...names) {
		const fieldVals = this.selectBySelector(selector, ...names);
		return  { valid: validatorFn(fields), data: fieldVals };
	}
	
	selectAllByIdAndValidate(validatorFn, ...names) {
		return this.selectAllBySelectorAndValidate(this.idSelector(), validatorFn, ...names);
	}
	
	selectAllByNameAndValidate(validatorFn, ...names) {
		return this.selectAllBySelectorAndValidate(this.nameSelector(), validatorFn, ...names);
	}
	
	selectAllByTagAndValidate(validatorFn, ...names) {
		return this.selectAllBySelectorAndValidate(this.tagSelector(), validatorFn, ...names);
	}
	
	selectAllByClassAndValidate(validatorFn, ...names) {
		return this.selectAllBySelectorAndValidate(this.classSelector(), validatorFn, ...names);
	}
}

export default ExtendedDOMSelector;
