"use strict";

const setScriptetInnerHtml = (element, html) => {
	element.innerHTML = html;
	const oldScripts = document.getElementsByTagName("script");
	for (const oldScript of oldScripts) {
		const newScript = document.createElement("script");
		const attributes = oldScript.attributes;
		for (const attribute of attributes) newScript.setAttribute(attribute.name, attribute.value);
		newScript.appendChild(document.createTextNode(oldScript.innerHTML));
		oldScript.parentNode.replaceChild(newScript, oldScript);
	}
}

export default setScriptetInnerHtml;
