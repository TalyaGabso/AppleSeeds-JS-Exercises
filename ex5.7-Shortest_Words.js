// Ex5.7 - shortest words
/*
Simple, given a string of words, return the ​length​ of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/
const shortest = (str) => {
	return str.split(" ").reduce((a, b) => b.length < a.length ? b : a);
};
console.log(shortest("this is the shortest word"));
console.log(shortest("th15's 7he sh0rt3st wor9"));