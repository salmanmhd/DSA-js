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

function maxSubArray(nums) {
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

const arr = [-2];
// const arr = [-2, 1, 2, 3];
console.log(maxSubArray(arr));
// console.log(maxSumArray1(arr));
