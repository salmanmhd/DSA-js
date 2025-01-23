function rotateArray1(nums, k) {
  if (nums.length < k) k = k % nums.length;

  const newArr = nums.splice(nums.length - k);
  nums.unshift(...newArr);
}

const arr = [-1, -100, 3, 99];

rotateArray(arr, 2);
console.log(arr);

function rotateArray(nums, k) {
  const size = nums.length;
  if (size < k) k = k % size;

  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
