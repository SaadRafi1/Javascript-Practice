function copyanddisolve(original) {
  const copied = original.slice();
  copied.length = 0;
  return copied;
}
const original = [1, 2, 3, 4, 5];
const copied = copyanddisolve(original);
console.log("First original array:", original);
console.log("Array emptied:", copied);
