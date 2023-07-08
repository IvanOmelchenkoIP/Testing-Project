"use strict";

const curriedSet = (fn) => (elementName) => (html) => {
	fn(elementName, html); 
}

export default curriedSet;
