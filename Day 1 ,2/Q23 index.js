function swap(str) {
  if (str.length < 2) {
    return "string length is to short should be greater then 1";
  }
  return str.slice(-1) + str.substring(1, str.length - 1) + str[0];
}
let user = prompt("Enter a string:");
let ans = swap(user);
console.log("Result:", ans);
