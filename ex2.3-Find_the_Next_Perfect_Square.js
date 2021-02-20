// Ex2.3 - Find the Next Perfect Square
/*
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
If the parameter is itself not a perfect square then -1 should be returned. 
*/
const findNextSquare=(n)=>{
  const sqrt=Math.sqrt(n)
  if(sqrt%1===0){
    return (sqrt+1)**2
  }else 
    return -1;
}
console.log(findNextSquare(9));//16
console.log(findNextSquare(121));//144
console.log(findNextSquare(625));//676
console.log(findNextSquare(114));//-1