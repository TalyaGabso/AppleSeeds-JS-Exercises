// Ex6.3 - organize strings
/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
Examples:
*/
const longest=(str1,str2)=>{
  let sum=[];
  let strings=str1+str2
  strings=strings.split('').sort().forEach((char)=>{
    if (sum.includes(char)===false){
      sum.push(char)
    }
  })
  return sum.join('')
}
str1 = "xyaabbbccccdefww";
str2 = "xxxxyyyyabklmopq";
console.log(longest(str1, str2));// "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
console.log(longest(a, a));//"abcdefghijklmnopqrstuvwxyz"