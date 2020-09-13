function validatePhMobileNumber(number: string): boolean 
{
	const pattern = new RegExp("^(09)\\d{9}");
	return pattern.test(number);
}

export {validatePhMobileNumber};
