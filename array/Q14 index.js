const list = [1, 1, 2, 2, 3, 3, 5, 6, 7, 8, 8];
function remove(array) {
  return [...new Set(list)];
}
console.log(remove(list));
