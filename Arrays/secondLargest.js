// Second Largest Element in an Array

// Given an array of integers nums, return the second largest integer in the array. If the array is empty or contains only one element, return -1.

// Input: nums = [3,2,1,5,6,4]
// Output: 5

function secondLargest(nums) {
  if (nums.length <= 1) {
    return -1;
  }
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] !== largest && secondLargest < nums[i]) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest([3, 2]));
