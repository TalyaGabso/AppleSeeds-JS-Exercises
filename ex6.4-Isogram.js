//Ex6.4 - isogram
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
 Assume the empty string is an isogram. Ignore letter case.
*/
const isIsogram = (str) => {
	let lettersObj = {};
	for (let i = 0; i < str.length; i++) {
		if (lettersObj[string[i].toLowerCase()]) return false;
		else {
			lettersObj[string[i].toLowerCase()] = 1;
		}
	}
	return true;
};

console.log(isIsogram("Dermatoglyphics")); //== true
console.log(isIsogram("aba")); // == false
console.log(isIsogram("moOse")); //== false
