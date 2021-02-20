// Ex2.1 - Sum of lowest numbers
/*
a function that returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive i ntegers. 
No floats or non-positive integers will be passed.
*/ 
let arr= [19, 5, 42, -2, 77];
const sumOfLowest=(numbers)=>{
  if (numbers.length<4){
    return 'Invalid Input'
  }
  let sum=numbers.filter(num=>(num>=0)).sort((a,b)=>a-b)
  return sum[0]+=sum[1]
}
console.log(sumOfLowest([5, 42, 2]));
console.log(sumOfLowest([19, 5, 42, -2, 77]));
console.log(sumOfLowest([19, 5, 42, 2, 77]));