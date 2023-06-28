"use strict";

import addYears from "../../utils/time/add-years.js";

class CookiesProcessor {
	
	getAllCookies() {
		return document.cookie;
	}
	
	setCookie(name, value, date = addYears(new Date(), 10)) {
		document.cookie = name + "=" + value + ";expires=" + date;
	}
	
	editCookieValue(name, value) {
		document.cookie = name + "=" + value;
	}
	
	getCookie(name) {
		const cookies = decodeURIComponent(getAllCookies()).split(`; ${name}=`);
		return cookies.pop().split(";").shift();
	}
}

export default CookiesProcessor;