// Ex5.1 - trimming string
/*
create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/
const trim=(str)=>{
  strArr=str.split('')
  strArr.pop()
  strArr.shift();
  return strArr.join('')
}
console.log(trim('Have a good day'));