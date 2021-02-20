// Ex6.1 - Mumbling
/*
This time no story, no theory. 
The examples below show you how to write function accum​:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.
*/
const accum=(str)=>{
  return str.toUpperCase().split('').map((char, index) => char + char.toLowerCase().repeat(index)).join('-');
}

// Examples 
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
