// Write a code for palindrom number

// palindrome is a number which is same when reverse
// ex: 121, 676, 1221

// input : 121 --> output : true
// input : 123 --> output : false

function palindrom(x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  return x === +x.toString().split('').reverse().join('');
}

// console.log(palindrom(1));
// console.log(palindrom(12));
// console.log(palindrom(121));
// console.log(palindrom(11));
