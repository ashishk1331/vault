function check(regex, value){
	const emailRegex = new RegExp(regex);
	const ok = regex.exec(value)
	return ok
}

export const isEmailCorrect = (email) => {
	return check(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, email)
}

export const isTokenCorrect = (token) => {
	return check(/^\d{6}$/gm, token)
}