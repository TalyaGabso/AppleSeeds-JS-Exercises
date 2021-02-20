//Ex4.1 - Fibonacci
//Write a function to return an n element in Fibonacci sequence” 
const fibonacci = (n) => {
	let fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}
	return fib;
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(12));
