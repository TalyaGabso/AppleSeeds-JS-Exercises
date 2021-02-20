// Ex6.2 - Counting Duplicates
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than 
once in the input string. 
The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.
*/

const duplicate=(str)=>{
  const sum = {};
  for (let i=0;i<str.length;i++){
    for (let j = 0; j < str[i].length; j++){
      let char = str[i][j].toLowerCase()
      if (!(char >= "a" && char <= "z"));
      else if (sum[char]) sum[char]++;
      else sum[char] = 1;
    }
  }
  return Object.values(sum).filter((value) => value > 1).length;
}
console.log(duplicate('abcde'))//0
console.log(duplicate('aabbcde'))//2
console.log(duplicate('aabBcde'))//2
console.log(duplicate('indivisibility'))//1
console.log(duplicate('Indivisibilities'))//2
console.log(duplicate('aA11'))//1
console.log(duplicate('ABBA'))//2