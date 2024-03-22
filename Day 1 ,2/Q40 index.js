let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
  console.log(
    "At least one of the numbers is 8 or their sum or absolute difference is 8 "
  );
} else {
  console.log(
    "Neither of the numbers is 8 and their sum and absolute difference are not 8."
  );
}
