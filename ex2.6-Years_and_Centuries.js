// Ex2.6 - Years and Centuries
/*
Given a year, return the century it is in.
*/
const centuryFromYear=(year)=>{
  return Math.ceil(year/100)
}
console.log(centuryFromYear(1705));//18 
console.log(centuryFromYear(1900));//19 
console.log(centuryFromYear(1601));//17
console.log(centuryFromYear(2000));//20
