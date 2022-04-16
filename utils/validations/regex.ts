export const regex = {
	password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,

	email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

	removeSlash: /\//g,

	// 	American Express :- Starting with 34 or 37, length 15 digits.
	// Visa :- Starting with 4, length 13 or 16 digits.
	// MasterCard :- Starting with 51 through 55, length 16 digits.
	// Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
	// Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
	// JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
	credit_card:
		/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
};
