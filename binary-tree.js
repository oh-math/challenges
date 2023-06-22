function productExceptSelf(nums) {
  let result = [];
  let copyArr = [...nums];

  for (let index = 0; index < nums.length; index++) {
    copyArr.splice(index, 1);
    result.push(copyArr.reduce((a, b) => a * b));
    copyArr = [...nums];
  }
  return result;
}
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// result with O(n)
function productExceptSelf(nums) {
  let result = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) { 
    result[i] = left; 
    left *= nums[i];  
    console.log(`primeiro for result: ${result}`);
}
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right; 
    right *= nums[i]; 
    console.log(`segundo for result: ${result}`);

  }
  return result;
}

console.log(productExceptSelf([1, 2, 3]));
