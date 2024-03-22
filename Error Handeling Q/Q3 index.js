function check(num1, num2) {
  var divide;
  if (num2 === 0) {
    throw new Error("The second number cannot be zero.");
  } else {
    divide = num1 / num2;
  }
  return divide;
}

var num1 = prompt("Enter 1st number:");
var num2 = prompt("Enter 2nd number:");
console.log(check(num1, num2));
