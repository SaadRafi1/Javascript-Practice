function sum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}
const array = [2, 3, 4, 5, 6, 7, 8];
const result = sum(array);
console.log(result);
