"use strict";

const addYears = (date, years) => {
	date.setFullDate(date.getFullYears() + years);
	return date;
}

export default addYears;