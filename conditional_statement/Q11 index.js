function solve(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

var a = prompt("Enter value for a:");
var b = prompt("Enter value for b:");
console.log("GCD of", a, "and", b, "is:", solve(a, b));
