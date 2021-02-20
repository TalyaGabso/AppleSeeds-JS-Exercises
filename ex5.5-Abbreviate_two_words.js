// Ex5.5 - Abbreviate two words
/*
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F6.6
*/
const abbreviate =(str)=>{
  return str.split(' ').map(char=>char[0].toUpperCase()).join('.')
}
console.log(abbreviate("Talya Gabso"));
console.log(abbreviate("Sam Harris"));
console.log(abbreviate("Patrick Feeney"));