function extraLongFactorials(n) {
  let arr = [];
  let result = BigInt(1);
  for (let i = n; i >= 1; i--) {
    arr.push(BigInt(i));
  }
  result = arr.reduce((a, b) => a * b);
  console.log(result.toString());
}
extraLongFactorials(25);