// Ex5.2 - String Repeat
/*
Write a function called repeat_str which repeats the given string src exactly count times. 
*/
const repeat_str=(repeat,str)=>{
  let repeatStr='';
  for(let i=0;i<=repeat;i++){
   repeatStr+=str 
  }
  return repeatStr;
}
console.log(repeat_str(6, "I"));// "IIIIII"
console.log(repeat_str(5, "Hello"));// "HelloHelloHelloHelloHello"