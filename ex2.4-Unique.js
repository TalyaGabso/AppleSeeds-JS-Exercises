//Ex2.4 - Unique
/*
an array with some numbers that all numbers are equal except for one. 
Try to find it! 
It’s guaranteed that array contains at least 3 numbers.
*/
const findUniq=(arr)=>{
  sortUniq=arr.sort((a,b)=>a-b)
  return sortUniq[0]===sortUniq[1]?sortUniq[sortUniq.length-1]:sortUniq[0]
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));//2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));// 0.55
console.log(findUniq([ 10, 10, -6, 10, 10 ]));// -6