// Fibonacci Number
// Ques 2 -
// Fibonacci Series -> 0, 1, 1, 2, 3,5,8,13,21,34

// f(0) = 0
// f(1) = 1
// f(n) = f(n-1) + f(n-2) for n > 1

// input : 3 --> output : 2

// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }

//   return fib[n];
// }

function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases for the fibonacci function

console.log(fibonacci(1)); // Output: 1 (The 1st Fibonacci number)
console.log(fibonacci(2)); // Output: 2 (The 2nd Fibonacci number)
console.log(fibonacci(3)); // Output: 3 (The 3rd Fibonacci number)
console.log(fibonacci(4)); // Output: 5 (The 4th Fibonacci number)
console.log(fibonacci(5)); // Output: 8 (The 5th Fibonacci number)
console.log(fibonacci(6)); // Output: 13 (The 6th Fibonacci number)
console.log(fibonacci(7)); // Output: 21 (The 7th Fibonacci number)
console.log(fibonacci(8)); // Output: 34 (The 8th Fibonacci number)
console.log(fibonacci(9)); // Output: 55 (The 9th Fibonacci number)
console.log(fibonacci(10)); // Output: 89 (The 10th Fibonacci number)
