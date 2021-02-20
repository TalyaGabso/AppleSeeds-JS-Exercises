// Ex5.8 - shortest words version 2
/*
Given a string of words, return the longest word[s].
String will never be empty and you do not need to account for different data types.
*/
const longest = (str) => {
	return str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
};
console.log(longest("this is the longest word"));
console.log(longest("th15's 7he l0ng3s7 wor9"));