// Boyer–Moore majority vote algorithm

function majorityElement(nums) {
  let candidate;
  let count = 0;

  for (const iterator of nums) {
    if (count === 0) {
      candidate = iterator;
    }

    count += iterator === candidate ? 1 : -1;
  }
  return candidate;
}
console.log(majorityElement([8, 8, 8, 8, 8, 1, 2, 3, 4, 5, 6, 7]));
