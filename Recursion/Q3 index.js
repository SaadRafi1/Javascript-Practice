function range(x, y) {
  if (y - x <= 1) {
    return [];
  } else {
    return [x + 1, ...range(x + 1, y)];
  }
}
const result = range(2, 9);
console.log(result);
