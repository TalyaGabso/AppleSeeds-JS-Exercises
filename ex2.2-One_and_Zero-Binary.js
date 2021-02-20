//Ex2.2 - One and Zero - Binary
/*
Given an array of ones and zeroes, 
convert the equivalent binary value to an integer. 
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/
const getDecimal = (arr) => {
  let binary = 0;
  arr.forEach(num => {
      binary *= 10;
      binary += num;
  });
  return parseInt(binary, 2);
}
//Examples:
console.log(getDecimal([0, 0, 0, 1])); // 1
console.log(getDecimal([0, 1, 0, 1])); // 5
console.log(getDecimal([1, 0, 0, 1])); // 9
console.log(getDecimal([1, 1, 1, 1])); // 15
console.log(getDecimal([1, 0, 1, 1])); // 11
console.log(getDecimal([1, 0, 1, 1,0]));//22