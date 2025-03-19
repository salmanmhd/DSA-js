function printReverseNumbers(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  printReverseNumbers(n - 1);
}

// printReverseNumbers(5);

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(4));

function rangeOfNumbers(start, end) {
  if (end === 0) return [];

  const array = rangeOfNumbers(start, end - 1);
  array.push(end);
  return array;
}

// console.log(rangeOfNumbers(1, 6));

function palindrome(n) {
  const number = n.toString();
  if (n <= 9) return true;

  if (number[0] !== number[number.length - 1]) return false;
  return palindrome(number.slice(1, -1));
}

// console.log(palindrome(121));

function fibonacci(n) {
  if (n === 0 || n === 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));
