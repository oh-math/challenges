/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertPosition = function (nums, target) {
  let resultIndex = null;

  nums.filter((num, index) => num === target && (resultIndex = index));

  if (!resultIndex) {
    const closestNum = closest(nums, target);
    let indexOfClosest = null;

    nums.filter((num, index) => num === closestNum && (indexOfClosest = index));

    if (target > closestNum) {
      resultIndex = indexOfClosest + 1;
    }

    if (target < closestNum) {
      if (indexOfClosest === nums.length) {
        resultIndex = indexOfClosest - 1;
      }
      resultIndex = indexOfClosest;
    }
  }
  return resultIndex;
};


/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const closest = (arr, target) => {
  return arr.reduce((a, b) => {
    return Math.abs(b - target) < Math.abs(a - target) ? b : a;
  });
};

console.log(searchInsertPosition([3, 6, 7, 8, 10], 5));
