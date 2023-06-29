"use strict";

import addDays from "../../utils/time/add-days.js";

class CookiesProcessor {
	
	getAllCookies() {
		return document.cookie;
	}
	
	setCookie(name, value = "", days = 1000) {
		const content = name + "=" + value;
		const expires = "; expires=" + addDays(new Date(), days).toUTCString();
		document.cookie = content + expires;
	}
	
	editCookieValue(name, value) {
		document.cookie = name + "=" + value;
	}
	
	getCookie(name) {
		const documentCookies = this.getAllCookies();
		const cookies = `; ${documentCookies}`;
		return cookies.split(`; ${name}=`).pop().split(";").shift();
	}
}

export default CookiesProcessor;