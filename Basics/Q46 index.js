var val1 = parseInt(prompt("Enter value 1:"));
var val2 = parseInt(prompt("Enter value 2:"));

if (val1 < 0 || val2 < 0) {
  console.log("You have entered a negative integer");
} else {
  if (val1 % 7 === 0 || val1 % 11 === 0 || val2 % 7 === 0 || val2 % 11 === 0) {
    console.log("Yes, at least one of the numbers is a multiple of 7 or 11");
  } else {
    console.log("No, neither of the numbers is a multiple of 7 or 11");
  }
}
