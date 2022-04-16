const patternRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function isStrongPassword(password: string) {
	return password.match(patternRegex);
}

export default isStrongPassword;
