// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const bool=(boolean)=>{return typeof boolean==='boolean'?(boolean?'Yes':'No'):('Invalid Input')}
console.log(bool(true));
console.log(bool(false));
console.log(bool(2));