function checkValues(num1, num2) {
  if (num1 === 15 || num2 === 15 || num1 + num2 === 15 || num1 - num2 === 15) {
    return true;
  } else {
    return false;
  }
}

let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
console.log(checkValues(num1, num2));
