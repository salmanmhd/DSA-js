const arr = [1, 2];
function rotateArray1(nums, k) {
  if (nums.length < k) k = k % nums.length;

  const newArr = nums.splice(nums.length - k);
  nums.unshift(...newArr);
}

rotateArray1(arr, 5);
console.log(arr);
