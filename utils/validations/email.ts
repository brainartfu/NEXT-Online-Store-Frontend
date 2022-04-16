const patternRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function isEmailAddress(eamil: string) {
	return eamil.match(patternRegex);
}

export default isEmailAddress;
