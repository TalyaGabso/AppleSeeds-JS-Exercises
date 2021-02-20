//Ex7 - Implement The Following JS Methods -
/*
Implement the following methods - 
- Filter
- ForEach
- Map
Using only for(), array and objects (without other js methods)
*/
const myfilter = (arr, fun) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (fun(arr[i])) newArr.push(arr[i]);
	}
	return newArr;
};

const myForEach = (arr, fun) => {
	for (let i = 0; i < arr.length; i++) {
		fun(arr[i]);
	}
};

const myMap = (arr, fun) => {
	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push(fun(arr[i]));
	}

	return newArr;
};
const arr = [1, 2, 3, 4, 5, 6];
console.log(myfilter(arr, (value, index) => value % 2 === 0));
console.log(myfilter(arr, (value, index) => index % 3 === 0));
myForEach(arr, (value, index) => arr[index] = value * 2);
console.log(arr);
console.log(myMap(arr, (value, index) => value *= 2));
console.log(arr);
console.log(myMap(arr, (value, index) => value = index));