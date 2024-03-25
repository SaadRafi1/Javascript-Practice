function find(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5];
const num = 4;
console.log("The index where element exist is: " + find(num, arr));
