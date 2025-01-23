// Qs - remove duplicates form sorted array:

// Input: nums = [0,0,1,1,1,2,2,3,3,4] ----->>>>> Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeDuplicates1(arr) {
  let ansArray = [];
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      ansArray.push(arr[i]);
    }
    j++;
  }

  return ansArray;
}

function removeDuplicates2(nums) {
  let j = 0,
    i = 0,
    k = 1;

  while (i < nums.length) {
    if (nums[k] === undefined) {
      if (nums[i] !== nums[j]) {
        nums[i] = nums[j];
      }
      return;
    }
    if (nums[j] !== nums[k]) {
      nums[i] = nums[j];
      i++;
      j++;
      k++;
    } else {
      while (nums[j] === nums[k]) {
        j++;
        k++;
      }
      nums[i] = nums[j];
      i++;
      j++;
      k++;
    }
  }
}

function removeDuplicates3(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
}

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
}

const arr = [0, 1, 1, 2, 2, 3, 4, 4, 4, 5];
removeDuplicates(arr);
console.log(arr);
