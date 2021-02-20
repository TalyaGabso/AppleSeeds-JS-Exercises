// Ex2.5 - Summation
/*
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.
*/
const getSummation=(num)=>{
  let summation=0;
  for(let i=0;i<=num;i++){
    summation+=i;
  }
  return summation
}
console.log(getSummation(2));
console.log(getSummation(8));
console.log(getSummation(1));