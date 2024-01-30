function oddCount(n) {
  // your code here
  let count = 0;
  for (let i = 1; i < n; i += 2) {
    count += 1;
  }
  return count;
}

console.log(oddCount(14));
