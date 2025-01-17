/*
Ques 3 - Valid Anagram
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
Input: (s - "anagram", t - "nagaram") ----->>>>> Output: true

Input: (s - "rat", t - "car")----->>>>> Output: false
*/

// FIRST APPROACH
function isAnagram1(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sObj = {};
  const tObj = {};

  for (let i = 0; i < t.length; i++) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
    tObj[t[i]] = (tObj[t[i]] || 0) + 1;
  }

  for (const key in sObj) {
    if (sObj[key] !== tObj[key]) return false;
  }
  return true;
}

// Test case 1: Anagram strings
console.log(isAnagram('listen', 'silent')); // Expected output: true

// Test case 2: Non-anagram strings of the same length
console.log(isAnagram('hello', 'world')); // Expected output: false

// Test case 3: Anagram strings with different cases
console.log(isAnagram('Dormitory', 'dirtyroom')); // Expected output: false (case-sensitive)

// Test case 4: Strings with different lengths
console.log(isAnagram('abc', 'abcd')); // Expected output: false

// Test case 5: Identical strings
console.log(isAnagram('abc', 'abc')); // Expected output: true

// Test case 6: Empty strings
console.log(isAnagram('', '')); // Expected output: true

// Test case 7: Strings with spaces and special characters
console.log(isAnagram('a+b+c', 'c+b+a')); // Expected output: true
