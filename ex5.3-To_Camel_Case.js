// Ex5.3 - To Camel Case
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).
*/
const toCamelCase = (str) => {
	let camelCase = str.split(/[-_]/);
	for (i = 1; i < camelCase.length; i++) {
		camelCase[i] = camelCase[i][0].toUpperCase() + camelCase[i].substring(1);
	}
	return camelCase.join("");
};
console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"
