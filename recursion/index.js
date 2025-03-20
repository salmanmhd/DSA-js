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

// console.log(fibonacci(8));

function reverseString(str) {
  const length = str.length;
  if (length == 0) return '';

  return str.charAt(length - 1) + reverseString(str.substring(0, length - 1));
}

// console.log(reverseString('salman'));

function subSets(arr) {
  const result = [];
  const temp = [];

  function recursiveSubset(nums, i) {
    if (nums.length === i) {
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    recursiveSubset(nums, i + 1);
    temp.pop();
    recursiveSubset(nums, i + 1);
  }

  recursiveSubset(arr, 0);
  return result;
}

console.log(subSets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
