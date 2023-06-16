function singleNumber(nums) {
  let result;

  for (let arrNum of nums) {
    let accumulator = nums.filter((num) => num === arrNum);

    accumulator.length === 1 && (result = arrNum);

    return result;
  }
}

console.log(singleNumber([4, 1, 2, 1, 2]));
