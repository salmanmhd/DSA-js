// given a sorted array of numbers and a target sum, return the indices of the two numbers such that they add up to the target
// if there are no two numbers that add up to the target, return an empty array

// input: nums = [2, 7, 11, 15], target = 9
// output: [0, 1] because nums[0] + nums[1] = 9

// input: nums = [3, 2, 4], target = 6
// output: [1, 2] because nums[1] + nums[2] = 6

function twoSum1(nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ans.push(i);
        ans.push(j);
        return ans;
      }
    }
  }
  return ans;
}

function twoSum(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (obj[target - n] !== undefined) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
