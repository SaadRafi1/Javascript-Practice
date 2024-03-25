function sum() {
  let sum = 0;
  for (let j = 1; j < 1000; j++) {
    if (j % 3 === 0 || j % 5 === 0) {
      sum = sum + j;
    }
  }
  return sum;
}
console.log("Sum of multiples under 1000:", sum());
