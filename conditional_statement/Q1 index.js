function Largest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

var num1 = prompt("Enter number 1:");
var num2 = prompt("Enter number 2:");
console.log("Largest is:", Largest(num1, num2));
