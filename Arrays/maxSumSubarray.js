function maxSumArray1(nums) {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let eIndex = i + 1;

    while (eIndex <= nums.length) {
      const slicedArray = nums.slice(i, eIndex);
      const sum = slicedArray.reduce((acc, i) => acc + i);

      if (sum > maxSum) {
        maxSum = sum;
      }

      eIndex++;
    }
  }
  return maxSum;
}

function maxSubArray2(nums) {
  // if(n)
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let tempSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      tempSum += nums[j];
      if (maxSum < tempSum) {
        maxSum = tempSum;
      }
    }
  }

  return maxSum;
}

function maxSubArray(nums) {
  if (nums.length <= 0) return;
  if (nums.length === 1) return nums[0];

  let maxSum = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const arr = [-2, 1, 2, 3];
console.log(maxSubArray(arr));
// console.log(maxSumArray1(arr));
