"use strict";

const addDays = (date, days) => {
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	return date;
}

export default addDays;